// Hooks
import { createContext, useState, useEffect, type ReactNode } from "react";


// Import components
import AlertComponent from "../components/AlertComponent";
import AlertAddToCart from "../components/AlertAddToCart";

// Utils
import { type CartItem, getCart, addToCart as addCartUtil, removeFromCart as removeFromCartUtil, CART_KEY, clearCart as clearCartUtils, toggleChecked, setAllChecked } from "../utils/cartUtils";
import { fetchAndStoreAddresses, getAddresses } from "../utils/AddressesUitls";
import type { Address } from "../utils/AddressesUitls";

// Specify the alert type
type AlertType = "favorite" | "cartAdd" | "removeItemFromCart" | null;

type AppContextType = {
    triggerAlert: (type: AlertType) => void;
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (sku: number) => void;
    clearCart: () => void;
    updateItemQuantity: (sku: number, quantity: number) => void;
    toogleItemChekedState: (sku: number) => void;
    checkAllItems: () => void;
    uncheckAllItems: () => void;
    addresses: Address[];
    addAddress: (addr: Omit<Address, "id">) => Promise<void>;
    deleteAddressById: (id: number) => Promise<void>;
    updateAddress: (addr: Address) => Promise<void>;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [alertType, setAlertType] = useState<AlertType>(null);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [addresses, setAddresses] = useState<Address[]>([]);


    // Alerts (Favorites, Add to cart) Utils
    const triggerAlert = (type: AlertType) => {
        setAlertType(type);
        setTimeout(() => setAlertType(null), 3000);
    };

    // Shopping cart Utils
    const addToCart = (item: CartItem) => {
        addCartUtil(item);
        setCartItems(getCart());
        triggerAlert("cartAdd");
    };

    const removeFromCart = (sku: number) => {
        removeFromCartUtil(sku);
        setCartItems(getCart());
        triggerAlert("removeItemFromCart");
    }

    const clearCart = () => {
        clearCartUtils();
        setCartItems(getCart());
    }

    const updateItemQuantity = (sku: number, quantity: number) => {
        const cart = getCart().map(item => item.sku === sku ? { ...item, quantity } : item);
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
        setCartItems(cart);
    }

    const toogleItemChekedState = (sku: number) => {
        const updatedCart = toggleChecked(sku);
        setCartItems(updatedCart);
    };

    const checkAllItems = () => {
        const updatedCart = setAllChecked(true);
        setCartItems(updatedCart);
    };

    const uncheckAllItems = () => {
        const updatedCart = setAllChecked(false);
        setCartItems(updatedCart);
    };


    // Addresses utils
    const addAddress = async (newAddress: Omit<Address, "id">) => {
        const response = await fetch("/api/addresses", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newAddress),
        });

        const savedAddress = await response.json();
        const updatedAddresses = [...addresses, savedAddress];
        setAddresses(updatedAddresses);
        localStorage.setItem("addresses_list", JSON.stringify(updatedAddresses));
    };

    const deleteAddressById = async (id: number) => {
        await fetch(`/api/addresses/${id}`, { method: "DELETE" });

        const updatedAddresses = addresses.filter(addr => addr.id !== id);
        setAddresses(updatedAddresses);
        localStorage.setItem("addresses_list", JSON.stringify(updatedAddresses));
    };

    const updateAddress = async (updated: Address) => {
        await fetch(`/api/addresses/${updated.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updated),
        });

        const updatedAddresses = addresses.map(addr =>
            addr.id === updated.id ? updated : addr
        );

        setAddresses(updatedAddresses);
        localStorage.setItem("addresses_list", JSON.stringify(updatedAddresses));
    };

    // When the page load:
    useEffect(() => {
        setCartItems(getCart());

        // Obtener direcciones si aún no se han cargado en esta sesión
        fetchAndStoreAddresses()
            .then(() => {
                const storedAddresses = getAddresses();
                setAddresses(storedAddresses);
            })
            .catch(err => {
                console.error("Error al obtener direcciones:", err);
            });
    }, []);

    return (
        <AppContext.Provider value={{ triggerAlert, cartItems,addresses, addToCart, removeFromCart, updateItemQuantity, clearCart, toogleItemChekedState, checkAllItems, uncheckAllItems,addAddress,deleteAddressById,updateAddress }}>
            {children}
            {alertType === "favorite" && <AlertComponent message="Producto añadido a favoritos" iconStyle="bi bi-heart-fill text-xl text-white" />}
            {alertType === "cartAdd" && <AlertAddToCart />}
            {alertType === "removeItemFromCart" && <AlertComponent message="Producto eliminado del carrito" iconStyle="hidden" />}
        </AppContext.Provider>
    );
};

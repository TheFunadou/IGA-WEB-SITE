// Hooks
import { useState } from "react";

// React router
import { Link } from "react-router-dom";


//Context
import { useAppContext } from "../../context/AppContext";

// Types
import type { ProductCardProps } from "./ProductCardMainVersion";

const ProductCardSquareVersion: React.FC<ProductCardProps> = ({ sku, productName, categories, unitPrice, imageUrl, favorite, isOffer, offerDiscount, productCardClassName }) => {

    // isFavorite is initialized with the value of "favorite" prop
    const [isFavorite, setIsFavorite] = useState<boolean>(favorite);

    // Get the functions for show alert, and addToCart
    const { triggerAlert, addToCart } = useAppContext();

    // Set favorite
    const toggleFavorite = () => {
        const newState = !isFavorite;
        setIsFavorite(newState);

        if (newState) {
            triggerAlert("favorite")
        }
    };

    // Add this product to shopping cart
    const handleAddtoCart = () => {
        addToCart({
            sku,
            productName,
            category: categories,
            unit_price: unitPrice,
            quantity: 1,
            imageUrl,
            favorite: isFavorite,
            isChecked: true
        });
    };

    return (
        // w-1/2 sm:w-1/4 xl:w-1/6
        <div className={`${productCardClassName} bg-white rounded-md hover:shadow-xl ease-in-out p-3`}>
            <Link to={""}>
                <div className="w-full flex flex-col items-center">
                    <div className="w-full relative flex items-center justify-center">
                        <figure className="w-3/4">
                            <img src={imageUrl} alt={productName} />
                        </figure>
                        {isOffer ? (
                            <i className="bi bi-fire text-red-400 text-3xl md:text-4xl absolute left-0 right-0 top-0 md:top-4"></i>
                        ) : (null)}
                        <button onClick={toggleFavorite}>
                            {isFavorite ? (
                                <i className="bi bi-heart-fill text-blue-500 text-2xl absolute bottom-0 md:bottom-3 duration-150 ease-in"></i>
                            ) : (
                                <i className="bi bi-heart text-2xl absolute bottom-0 md:bottom-3 duration-150 ease-in-out"></i>
                            )}
                        </button>
                    </div>
                    <div className="w-full flex-shrink-0">
                        <p className="font-bold text-sm md:text-base">{productName}</p>
                        <p className="text-gray-500 text-sm">{categories}</p>
                        {offerDiscount ? (
                            <div className="flex gap-2 items-center">
                                <p className="font-bold text-sm mt-1 text-gray-400 line-through">${unitPrice.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                                <p className="font-bold text-xl mt-1 text-green-500">${(unitPrice - ((offerDiscount * unitPrice) / 100)).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                            </div>
                        ) : (
                            <p className="font-bold text-xl mt-1">${unitPrice.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                        )}
                        <button className="btn bg-[#054274] text-white font-bold mt-1" onClick={handleAddtoCart}>Agregar al carrito</button>
                    </div>
                </div>
            </Link>
        </div >
    );
}

export default ProductCardSquareVersion;
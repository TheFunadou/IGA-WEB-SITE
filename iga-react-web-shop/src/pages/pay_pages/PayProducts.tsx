// Context
import { useAppContext } from "../../context/AppContext";

// Types
import type { CartItem } from "../../utils/cartUtils";
import type { Address } from "../../utils/AddressesUitls";
import type { ReceiverAddress } from "../../api/PayProducts/MercadoPago/CreateOrder";

// Hooks
import { useEffect, useState, useRef } from "react";

// Components

// Test
import MercadoPagoPaymentBrickTest from "../../components/MercadoPagoPaymentBrickTest";

// React router
import { Link } from "react-router-dom";

// API sources
import { mercadoPagoCreateOrder } from "../../api/PayProducts/MercadoPago/CreateOrder";

// Utilities
import clsx from "clsx";

const PayProducts: React.FC = () => {

    // Get the cartItems from the context
    const { cartItems, addresses } = useAppContext();

    // Get the current selected items if item is checked
    const currentSelectedItems: CartItem[] = cartItems.filter((item: CartItem) => item.isChecked);
    // Calculate the subtotal of the all products multiplying unit price x item quantity (per item)
    const subtotalProducts: number = currentSelectedItems.reduce((acc, item) => acc + (item.unit_price * item.quantity), 0);
    // Calculate the shipping cost
    const shippingCost: number = 0;
    // Calculate the promotion applied
    const promotionApplied: number = 0; // Assuming no promotion applied for now
    // Get the total
    const total: number = subtotalProducts + shippingCost - promotionApplied;

    // Define modalRef for contain the modal
    const modalRef = useRef<HTMLDialogElement>(null);
    const modal = modalRef.current;

    // Arrow function for show the modal
    const handleShowModal = () => {
        modal?.showModal();
    };

    // Preference id of the Mercado Pago order
    const [preferenceId, setPreferenceId] = useState<string | undefined>(undefined);
    // useState for get the current select address in the modal of addresses
    const [addressID, setAddressID] = useState<number | undefined>(undefined);
    // useState for get the array of the current address with the selected addressID for the user in the modal of addresses
    const [currentAddress, setCurrentAddress] = useState<Address | undefined>(undefined);
    // useState for display the container of paymentMethods and disabled the address container
    const [continueWhitPayment, setContinueWhitPayment] = useState<boolean>(false);

    type PaymentMethod = 'paypal' | 'mercado_pago' | null;

    // useState for display the data of pay when the user select the pay method in the section "Seleccionar metodo de pago"
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod>(null);

    // Use effect for set the defaultAddress
    useEffect(() => {
        // Set the defaultAddress
        const defaultAddress = addresses.find(address => address.default_address === true);
        setAddressID(defaultAddress?.id);
        setCurrentAddress(defaultAddress);
    }, []);

    useEffect(() => {
        if (selectedPaymentMethod !== "mercado_pago") {
            setPreferenceId(undefined);
        }

        if (selectedPaymentMethod === "mercado_pago") {
            const itemsToSend = currentSelectedItems.map(item => ({
                "id": item.sku,
                "title": item.productName,
                "quantity": item.quantity,
                "unit_price": item.unit_price,
                "description": item.category
            }));

            const payer = {
                "phone": {
                    "area_code": "52",
                    "number": "9221234567"
                },
                "email": "joselito12",
                "name": "manu",
                "surname": "gonzalez"
            };

            if (!currentAddress) return;

            const receiver: ReceiverAddress = {
                "zip_code": currentAddress.postal_code,
                "street_name": currentAddress.street,
                "street_number": currentAddress.ext_number,
                "city_name": currentAddress.city,
                "state_name": currentAddress.state,
                "country_name": currentAddress.country
            };


            const createOrder = async () => {
                const preferenceID = await mercadoPagoCreateOrder(itemsToSend, payer, receiver, total);
                setPreferenceId(preferenceID);
            }

            createOrder();
        }
    }, [selectedPaymentMethod]);


    // Addresses logic
    const handleSetCurrentAddress = () => {
        if (addressID) {
            const getAddress = addresses.find(address => address.id === addressID);
            if (getAddress) {
                setCurrentAddress(getAddress);
                modal?.close();
            }
        }
    };

    // Return to edit
    const returnToEdit = () => {
        setContinueWhitPayment(false);
        setSelectedPaymentMethod(null);
    }

    return (
        <div className="w-full flex justify-center">
            <div className="w-full xl:w-19/20 p-2 xl:p-5">
                <p className="font-bold text-4xl">Finalizar compra</p>
                <div className="flex flex-col lg:flex-row mt-5">
                    <div className="w-full lg:w-3/4 lg:pr-10">
                        <div className="bg-white rounded-lg p-3 lg:p-5 flex">
                            <div className="w-5/6 lg:w-19/20 flex flex-col flex-wrap">
                                <p className="font-bold text-lg lg:text-2xl">Enviar a {currentAddress?.recipient_name} {currentAddress?.recipient_last_names}</p>
                                <p className="text-sm lg:text-base">{currentAddress?.street} #{currentAddress?.ext_number} EXT. {currentAddress?.int_number ? <span>#{currentAddress?.int_number} INT.</span> : null}, {currentAddress?.neighborhood}, {currentAddress?.city}, {currentAddress?.state}, {currentAddress?.postal_code}, {currentAddress?.country}</p>
                            </div>
                            <div className="w-1/6 lg:w-1/20">
                                <button
                                    className={clsx(
                                        "underline font-bold cursor-pointer text-sm lg:text-base",
                                        continueWhitPayment ? ("text-gray-400") : ("text-blue-500")
                                    )}
                                    onClick={handleShowModal}
                                    disabled={continueWhitPayment ? (true) : (false)}
                                >Editar</button>
                            </div>
                        </div>
                        <div className="bg-white rounded-t-lg px-5 pt-5 mt-10 flex">
                            <div className="w-full">
                                <p className="font-bold text-2xl">Resumen de productos</p>
                                <div>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentSelectedItems.map((product) => (
                                                <tr className={currentSelectedItems.length > 1 ? ("border-b-1 border-b-gray-300"):("") } key={product.sku}>
                                                    <td></td>
                                                    {/* Padding 5 */}
                                                    <td className="p-2 lg:p-5">
                                                        <p className="font-bold lg:mt-5 text-base lg:text-xl">{product.productName}</p>
                                                        <div className="flex">
                                                            <div className="w-1/3 lg:w-1/8">
                                                                {/* Product Image */}
                                                                <img className="w-full rounded-md" src={product.imageUrl} alt={product.productName} />
                                                            </div>
                                                            <div className="w-2/3 lg:w-7/8">
                                                                <div className="flex flex-col lg:grid lg:grid-cols-3 p-2 lg:pl-5">
                                                                    <div>
                                                                        <p className="text-sm lg:text-lg">{product.category}</p>
                                                                    </div>
                                                                    <div>
                                                                        <p className="text-sm lg:text-lg">Linea de color:</p>
                                                                        <p className="text-sm lg:text-lg">Color:</p>
                                                                        <p className="text-sm lg:text-lg font-bold">Cantidad: {product.quantity} piezas</p>
                                                                    </div>
                                                                    <div>
                                                                        <div>
                                                                            <p>Precio unitario (IVA incluido):</p>
                                                                            <p className="text-xl lg:text-2xl font-bold">$ {product.unit_price.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                                                                        </div>
                                                                        <div>
                                                                            <p className="mt-2 lg:mt-5">Subtotal de producto (IVA incluido):</p>
                                                                            <p className="text-xl lg:text-2xl font-bold">$ {(product.unit_price * product.quantity).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/4 mt-5 lg:mt-0">
                        <div className="bg-white rounded-lg p-5 flex flex-col gap-5">
                            <div className="w-full flex items-start justify-between">
                                <p className="w-3/6">Productos (Antes de Impuestos):</p>
                                <p className="w-3/6 text-end">${(subtotalProducts-subtotalProducts*0.16).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} MXN</p>
                            </div>
                            <div className="w-full flex items-start justify-between">
                                <p className="w-3/6">Envio:</p>
                                <p className="w-3/6 text-end">${shippingCost.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} MXN</p>
                            </div>
                            <div className="w-full flex items-start justify-between">
                                <p className="w-3/6">Promoción aplicada:</p>
                                <p className="w-3/6 text-end">${promotionApplied.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} MXN</p>
                            </div>
                            <div className="w-full flex items-start justify-between">
                                <p className="w-3/6">IVA (16%):</p>
                                <p className="w-3/6 text-end">${(total*0.16).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                            </div>
                            <div className="w-full flex items-start justify-between">
                                <p className="w-3/6 font-bold text-xl">Total (IVA incluido, en caso de ser aplicable):</p>
                                <p className="w-3/6 font-bold text-xl text-end">${total.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} MXN</p>
                            </div>
                        </div>
                        {continueWhitPayment ? (null) : (
                            <div className="mt-5 w-full bg-white rounded-md p-5">
                                <button className="btn w-full bg-blue-500 text-xl font-bold mb-2 cursor-pointer text-white hover:bg-blue-800 duration-110" onClick={() => setContinueWhitPayment(true)}>Continuar {'>'}</button>
                            </div>
                        )}
                        {continueWhitPayment ? (
                            <div className="mt-5 w-full bg-white rounded-md p-5">
                                <p className="text-base cursor-pointer hover:text-blue-500 duration-105 underline" onClick={returnToEdit}><i className="bi bi-arrow-return-left mr-2" title="Regresar a editar"></i>Regresar a editar</p>
                                <p className="text-2xl font-bold mb-2 mt-4">Seleccionar metodo de pago</p>
                                <div className="flex flex-col gap-8 mt-5">
                                    <div className="w-full flex items-center">
                                        <input type="radio" name="radio-1" className="radio text-blue-500 lg:mr-5" onClick={() => setSelectedPaymentMethod("paypal")} />
                                        <figure className="w-1/3"><img src="src\img\PP_logo_h_200x51.png" alt="Paypal Logo" /></figure>
                                    </div>
                                    <div className="w-full flex items-center">
                                        <input type="radio" name="radio-1" className="radio text-blue-500 lg:mr-5" onClick={() => setSelectedPaymentMethod("mercado_pago")} />
                                        <figure className="w-1/3 cursor-pointer"><img className="w-full" src="src\img\LogoMercadoPago.svg" alt="Mercado Pago Logo" /></figure>
                                    </div>
                                </div>
                                <div>
                                    {selectedPaymentMethod === 'paypal' && (
                                        <p>PAYPAL</p>
                                    )}

                                    {selectedPaymentMethod === 'mercado_pago' && (
                                        preferenceId ? (
                                            <MercadoPagoPaymentBrickTest allAmount={total} orderPreferenceId={preferenceId} />
                                        ) : (
                                            <p className="mt-5">Cargando <span className="loading loading-dots loading-md"></span></p>
                                        )
                                    )}
                                </div>
                            </div>
                        ) : (null)}
                    </div>
                </div>
            </div>
            {/* Addresses Modal */}
            <dialog id="my_modal_3" className="modal" ref={modalRef}>
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => setAddressID(currentAddress?.id)}>✕</button>
                    </form>
                    <p className="font-bold text-2xl mb-2">Elige tu dirección de envio</p>
                    <p className="pt-2 text-gray-500 mb-5">El tiempo de entrega puede variar segun tu ubicación.</p>
                    <div className="h-110 pr-2 overflow-auto overflow-x-hidden flex flex-col gap-4">
                        {/* Addresses */}
                        {addresses.map(address => (
                            <div
                                key={address.id}
                                className={clsx(
                                    'w-full flex flex-col gap-3 p-3 bg-gray-100 rounded-lg duration-150 ease-in-out',
                                    addressID === address.id ? 'border-2 border-blue-500' : 'border border-gray-300')}
                                onClick={() => setAddressID(address.id)}
                            >
                                <p className="text-sm md:text-base flex">
                                    <strong>{address.recipient_name} {address.recipient_last_names}</strong>, {address.street} #{address.ext_number} EXT.
                                    {address.int_number && (<span className="pl-2">#{address.int_number} INT.</span>)}
                                </p>
                                <p className="text-sm md:text-base">{address.neighborhood}, {address.city}, {address.state}, {address.postal_code}</p>
                                {address.default_address && (
                                    <strong className="mt-2 text-sm md:text-base">Dirección predeterminada.</strong>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="w-full flex flex-col">
                        <button className="btn bg-blue-500 text-white" onClick={handleSetCurrentAddress}>Usar esta dirección de envio</button>
                        {/* Link to add and edit addresses page */}
                        <Link to="/tu-cuenta/direcciones-de-envio" className="mt-5 underline font-bold text-blue-500 text-sm">Agregar o modificar direcciones de envio</Link>
                    </div>
                </div>
            </dialog>
        </div >
    );
};

export default PayProducts;
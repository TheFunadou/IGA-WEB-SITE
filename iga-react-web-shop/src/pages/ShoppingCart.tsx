// Components
import ButtonQuantityCounter from "../components/ShoppingCartSubComponents/ButtonQuantityCounter";
import ProductCardExtraSmallVersion from "../components/ShoppingCartSubComponents/ProductCardExtraSmallVersion";

// Context
import { useAppContext } from "../context/AppContext";
import type { CartItem } from "../utils/cartUtils";

// React router
import { Link } from "react-router-dom";

const ShoppingCart: React.FC = () => {
    // CartItems functions
    // CartItems is an array of objects that contains the items in the shopping cart
    // RemoveFromCart is a function that removes an item from the cart
    // UpdateItemQuantity is a function that updates the quantity of an item in the cart
    // ClearCart is a function that clears the cart
    // see more in context/AppContext.tsx
    const { cartItems, removeFromCart, updateItemQuantity, clearCart, toogleItemChekedState, checkAllItems, uncheckAllItems } = useAppContext();


    // Calculate subtotal
    // Using reduce to calculate the total price of all items in the cart
    const currentSelectedItems = cartItems.filter((item: CartItem) => item.isChecked);
    const subtotal = currentSelectedItems.reduce((acc, item) => acc + item.unit_price * item.quantity, 0);


    return (
        <div className="w-full flex justify-center">
            <div className="w-full xl:w-19/20 p-2 xl:p-5">
                <p className="text-4xl font-bold">Carrito de compras</p>
                <div className="mt-2 flex flex-wrap gap-4">
                    <button className="underline text-blue-500 font-bold text-sm lg:text-lg cursor-pointer " onClick={checkAllItems} >Seleccionar todo</button>
                    <button className="underline text-blue-500 font-bold text-sm lg:text-lg cursor-pointer " onClick={uncheckAllItems}>Deseleccionar todo</button>
                    <button className="underline text-blue-500 font-bold text-sm lg:text-lg cursor-pointer " onClick={() => clearCart()} >Vaciar carrito</button>
                </div>
                <div className="lg:flex mt-5">
                    <div className="w-full lg:w-4/5">
                        <table className="w-full bg-white rounded-t-lg">
                            <thead>
                                <tr>
                                    <th className="lg:w-1/9"></th>
                                    <th className="lg:w-8/6"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.length === 0 ? (
                                    <tr>
                                        <td className="p-10 flex items-center"><i className="bi bi-cart3 text-4xl lg:text-8xl text-gray-400 text-center"></i></td>
                                        <td><p className="text-2xl text-gray-400">
                                            Tu carrito de IGA esta vacio...</p>
                                            <br />
                                            <p>Revisa alguno de tus favoritos o <Link to={"/tienda"} className="underline text-blue-500">ve los diversos productos que ofrecemos en nuestra tienda</Link></p>
                                        </td>
                                    </tr>
                                ) : (
                                    cartItems.map((product) => (
                                        <tr className="border-b-1 border-b-gray-300" key={product.sku}>
                                            <td className="pl-2 text-center"><input type="checkbox" className="checkbox border-blue-500 bg-white checked:border-blue-400 checked:bg-blue-500 checked:text-white" checked={product.isChecked} onChange={() => toogleItemChekedState(product.sku)} /></td>
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
                                                                <br />
                                                                {/* button for select quantity of products to buy */}
                                                                <ButtonQuantityCounter initialQuantity={product.quantity} onQuantityChange={(newQty) => updateItemQuantity(product.sku, newQty)} style="w-full mb-2 lg:mb-0 lg:w-2/3" />
                                                            </div>
                                                            <div>
                                                                <div className="flex flex-col lg:flex-row gap-4">
                                                                    <button className="text-start underline text-blue-500 font-bold cursor-pointer text-sm lg:text-base" onClick={() => removeFromCart(product.sku)}>Eliminar producto</button>
                                                                    {product.favorite ? (
                                                                        null
                                                                    ) : (
                                                                        // Add to favorites (...pending)
                                                                        <button className="text-start underline text-blue-500 font-bold cursor-pointer text-sm lg:text-base">Añadir a favoritos</button>
                                                                    )}
                                                                </div>
                                                                <div>
                                                                    <p className="mt-2 lg:mt-5">Precio unitario (IVA incluido):</p>
                                                                    <p className="text-xl lg:text-2xl font-bold">$ {product.unit_price.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td></td>
                                    <td>
                                        <div className="flex justify-end p-5">
                                            <p className="text-sm lg:text-xl">Subtotal ({currentSelectedItems.length} productos):</p>
                                            <p className="text-sm lg:text-xl font-bold">${subtotal.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} MXN</p>
                                        </div>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                        {/* Summary card for mobiles if screen more than lg this container is hidden */}
                        <div className="bg-white w-full rounded-md p-5 flex lg:hidden flex-col gap-5 mt-5">
                            <div>
                                <p className="text-xl">Subtotal ({currentSelectedItems.length} productos):</p>
                                <p className="text-xl font-bold">$ {subtotal.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} MXN.</p>
                            </div>
                            <Link to={"/pagar-productos"} className="bg-blue-500 w-full text-white font-bold btn rounded-md hover:bg-blue-950">Proceder al pago</Link>
                            <div className="flex flex-col gap-4">
                                <p className="text-xl">Aplicar codigo de descuento</p>
                                <input type="text" className="input text-center font-bold text-xl" />
                                <button className="w-full bg-blue-500 text-white font-bold btn rounded-md hover:bg-blue-950">Aplicar cupón</button>
                            </div>
                        </div>
                        <div className="mt-5 p-5 bg-white rounded-lg px-5">
                            <p className="text-2xl font-bold">Tus favoritos</p>
                            <div className="mt-5 flex flex-col lg:flex-row gap-5">

                                <div className="w-full lg:w-1/7 shadow-sm px-2 lg:py-4 flex flex-row lg:flex-col hover:scale-105 duration-110 ease-in-out rounded-lg">
                                    <figure className="w-1/3 lg:w-full flex justify-center items-center">
                                        <img
                                            src="https://igaproductos.com.mx/wp-content/uploads/2024/07/hit_intervalo_amarillo-e1722380739491.jpg"
                                            alt="Shoes" />
                                    </figure>
                                    <div className="lg:card-body p-2 lg:p-0 w-2/3 lg:w-full">
                                        <h2 className="card-title text-sm lg:text-base text-start mt-2">IGA CASCO DE SEGURIDAD INDUSTRIAL</h2>
                                        <p className="text-sm">Ala completa, Ajuste de matraca, Clase "G"</p>
                                        <div className="card-actions justify-start mt-3 lg:mt-0">
                                            <button className="btn bg-blue-500 text-white">Agregar al carrito</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/5 px-5 flex flex-col gap-5">
                        {/* Summary card for web if screen is more than lg is hidden: none or flex*/}
                        {currentSelectedItems.length === 0 ? (
                            null
                        ) : (
                            <div className="bg-white w-full rounded-md p-5 hidden lg:flex flex-col gap-5">
                                <div>
                                    <p className="text-xl">Subtotal ({currentSelectedItems.length} productos):</p>
                                    <p className="text-sm lg:text-xl font-bold">$ {subtotal.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} MXN.</p>
                                </div>
                                <Link to={"/pagar-productos"} className="bg-blue-500 w-full text-white font-bold btn rounded-md hover:bg-blue-950">Proceder al pago</Link>
                                <div className="flex flex-col gap-4">
                                    <p className="text-xl">Aplicar codigo de descuento</p>
                                    <input type="text" className="input text-center font-bold text-xl" />
                                    <button className="w-full bg-blue-500 text-white font-bold btn rounded-md hover:bg-blue-950">Aplicar cupón</button>
                                </div>
                            </div>
                        )}
                        <div className="w-full flex flex-col gap-5 mt-4 lg:mt-0">
                            <p className="font-bold text-2xl">Mas productos</p>
                            {/* Component */}
                            <ProductCardExtraSmallVersion />
                            <ProductCardExtraSmallVersion />
                            <ProductCardExtraSmallVersion />
                            <ProductCardExtraSmallVersion />
                            <ProductCardExtraSmallVersion />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
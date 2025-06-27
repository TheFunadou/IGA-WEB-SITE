// Components
import ButtonQuantityCounter from "../components/ShoppingComponents/ButtonQuantityCounter";
import ProductCardSmall from "../components/ShoppingComponents/ProductCardSmall";

const ShoppingCart: React.FC = () => {


    return (
        <div className="w-full flex justify-center">
            <div className="w-19/20 p-5">
                <p className="text-4xl font-bold">Carrito de compras</p>
                <button className="underline text-blue-500 font-bold mt-2 text-lg">Deseleccionar todos los articulos</button>
                <div className="flex mt-5">
                    <div className="w-4/5">
                        <table className="w-full bg-white rounded-lg">
                            <thead>
                                <tr>
                                    <th className="w-1/9"></th>
                                    <th className="w-8/6"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center"><input type="checkbox" className="checkbox checkbox-info" /></td>
                                    <td className="flex">
                                        <div className="w-1/8">
                                            <img className="w-full rounded-md" src="https://igaproductos.com.mx/wp-content/uploads/2024/07/hit_intervalo_amarillo-e1722380739491.jpg" alt="" />
                                        </div>
                                        <div className="w-7/8">
                                            <div className="grid grid-cols-3 pl-5">
                                                <div>
                                                    <p className="text-lg">Ala completa</p>
                                                    <p className="text-lg">Ajuste de matraca</p>
                                                    <p className="text-lg">Clase "G"</p>
                                                </div>
                                                <div>
                                                    <p className="text-lg">Linea de color:</p>
                                                    <p className="text-lg">Color:</p>
                                                    <br />
                                                    {/* button for select quantity of products to buy */}
                                                    <ButtonQuantityCounter initalQuantity={0} style="w-2/3" />
                                                </div>
                                                <div>
                                                    <div className="flex gap-3">
                                                        <button className="underline text-blue-500 font-bold">Eliminar producto</button>
                                                        <button className="underline text-blue-500 font-bold">Añadir a favoritos</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center"><input type="checkbox" className="checkbox checkbox-info" /></td>
                                    <td className="flex">
                                        <div className="w-1/8">
                                            <img className="w-full rounded-md" src="https://igaproductos.com.mx/wp-content/uploads/2024/07/hit_intervalo_amarillo-e1722380739491.jpg" alt="" />
                                        </div>
                                        <div className="w-7/8">
                                            <div className="grid grid-cols-3 pl-5">
                                                <div>
                                                    <p className="text-lg">Ala completa</p>
                                                    <p className="text-lg">Ajuste de matraca</p>
                                                    <p className="text-lg">Clase "G"</p>
                                                </div>
                                                <div>
                                                    <p className="text-lg">Linea de color:</p>
                                                    <p className="text-lg">Color:</p>
                                                    <br />
                                                    {/* button for select quantity of products to buy */}
                                                    <ButtonQuantityCounter initalQuantity={0} style="w-2/3" />
                                                </div>
                                                <div>
                                                    <div className="flex gap-3">
                                                        <button className="underline text-blue-500 font-bold">Eliminar producto</button>
                                                        <button className="underline text-blue-500 font-bold">Añadir a favoritos</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="w-1/5 border-1 px-5 flex flex-col gap-5">
                        <div className="bg-white w-full rounded-md p-5 flex flex-col gap-5">
                            <div>
                                <p className="text-xl">Subtotal (3 productos):</p>
                                <p className="text-xl">$ 500.90</p>
                            </div>
                            <button className="bg-blue-500 w-full text-white font-bold btn rounded-md hover:bg-blue-950">Proceder al pago</button>
                            <div className="flex flex-col gap-4">
                                <p className="text-xl">Aplicar codigo de descuento</p>
                                <input type="text" className="input text-center font-bold text-xl" />
                                <button className="w-full bg-blue-500 text-white font-bold btn rounded-md hover:bg-blue-950">Aplicar cupón</button>
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-5">
                            {/* Component */}
                            <ProductCardSmall/>
                            <ProductCardSmall/>
                            <ProductCardSmall/>
                            <ProductCardSmall/>
                            <ProductCardSmall/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
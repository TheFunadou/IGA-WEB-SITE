// Static sources
import imageApproved from "../../img/img-pray-approved.png"

// Components
import ProductCardSmallVersion from "../../components/ProductCardSmallVersion";

// React router
import { Link } from "react-router-dom";

const ExitingPay: React.FC = () => {
    return (
        <div className="my-5 mx-5 lg:mx-50">
            <div className="bg-white rounded-lg p-5 ">
                <div className="bg-green-700 p-5 rounded-lg">
                    <p className="font-bold text-white text-lg"><i className="bi bi-check-circle mr-2"></i>Pago aprobado</p>
                </div>
                <div className="flex justify-between mt-5">
                    <p className="font-bold text-4xl">Gracias por tu compra!</p>
                    <p className="text-xl text-gray-400">Folio: 202507141020032458</p>
                </div>
                <div className="flex mt-5">
                    <div className="w-1/4">
                        <img className="w-full rounded-lg" src={imageApproved} alt="pago-aprobado" />
                        <p className="font-bold text-xl lg:text-2xl mt-5">Detalles de pago</p>
                        <div className="flex flex-col gap-2 mt-2">
                            <p className="text-base lg:text-lg font-bold">Medio de pago: <span className="font-normal">Mercado pago</span></p>
                            <p className="text-base lg:text-lg font-bold">Metodo de pago: <span className="font-normal">Tarjeta de credito</span></p>
                            <p className="text-base lg:text-lg font-bold">Estatus: <span className="font-normal">Aprobado</span></p>
                            <p className="text-base lg:text-lg font-bold">Detalle: <span className="font-normal">18x $291.66  ($5250.00)</span></p>
                        </div>
                        <p className="font-bold text-2xl mt-5">Envio</p>
                        <div className="flex flex-col gap-2 mt-2">
                            <p className="text-base lg:text-lg font-bold">Destinatario: <span className="font-normal">Jose Luis Garcia Lopez</span></p>
                            <p className="text-base lg:text-lg font-bold">Número telefónico: <span className="font-normal">9211234567</span></p>
                            <p className="text-base lg:text-lg font-bold">País: <span className="font-normal">México</span></p>
                            <p className="text-base lg:text-lg font-bold">Estado: <span className="font-normal">Veracruz</span></p>
                            <p className="text-base lg:text-lg font-bold">Ciudad: <span className="font-normal">Minatitlán</span></p>
                            <p className="text-base lg:text-lg font-bold">Localidad/Alcaldía: <span className="font-normal">Minatitlán</span></p>
                            <p className="text-base lg:text-lg font-bold">Calle: <span className="font-normal">Calle #354</span></p>
                            <p className="text-base lg:text-lg font-bold">Colonia: <span className="font-normal">Santa Clara</span></p>
                            <p className="text-base lg:text-lg font-bold">Código Postal: <span className="font-normal">97679</span></p>
                            <p className="text-base lg:text-lg font-bold">Número Exterior: <span className="font-normal">122</span></p>
                            <p className="text-base lg:text-lg font-bold">Tipo de vivienda: <span className="font-normal">Casa</span></p>
                        </div>
                    </div>
                    <div className="w-3/4 px-2">
                        <p className="font-bold text-2xl">Resumen de pedido</p>
                        <div className="mt-5">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th scope="col" className="w-3/4 text-start pl-5 py-2">Articulos</th>
                                        <th scope="col" className="text-start px-1 lg:px-0">Cantidad</th>
                                        <th scope="col" className="text-start px-1 lg:px-0">Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b-1 border-gray-300">
                                        <td className="px-5 py-4 flex gap-4">
                                            <figure className="w-1/4 lg:w-1/8">
                                                <img className="w-full rounded-md border border-gray-200" src="https://igaproductos.com.mx/wp-content/uploads/2024/07/HIT_ROJO_000.jpg" alt="" />
                                            </figure>
                                            <div>
                                                <p className="font-bold text-lg">IGA casco de seguridad industrial dieletrico</p>
                                                <p>Ala completa, ajuste matraca, clase "G", linea básica, color amarillo</p>
                                            </div>
                                        </td>
                                        <td>5 pz</td>
                                        <td>$1000.00 MXN</td>
                                    </tr>
                                    <tr className="border-b-1 border-gray-300">
                                        <td className="px-5 py-4 flex gap-4">
                                            <figure className="w-1/4 lg:w-1/8">
                                                <img className="w-full rounded-md border border-gray-200" src="https://igaproductos.com.mx/wp-content/uploads/2024/07/HIT_ROJO_000.jpg" alt="" />
                                            </figure>
                                            <div>
                                                <p className="font-bold text-lg">IGA casco de seguridad industrial dieletrico</p>
                                                <p>Ala completa, ajuste matraca, clase "G", linea básica, color amarillo</p>
                                            </div>
                                        </td>
                                        <td>5 pz</td>
                                        <td>$1000.00 MXN</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                            <div className="flex flex-col gap-2 mt-5 mb-5">
                                <p className="font-bold text-base lg:text-lg">Subtotal: <span className="font-normal">$5000.00 MXN</span></p>
                                <p className="font-bold text-base lg:text-lg">Descuento: <span className="font-normal">$0.00 MXN</span></p>
                                <p className="font-bold text-base lg:text-lg">Envio: <span className="font-normal">$250.00 MXN</span></p>
                                <p className="font-bold text-lg lg:text-xl">Total (IVA incluido): <span className="font-normal text-2xl ml-2">$5250.00 MXN</span></p>
                            </div>
                            <Link to={"/tu-cuenta/mis-compras"} className="underline font-bold text-blue-500 text-lg"><i className="bi bi-bag-fill text-blue-500 mr-2"></i>Ver mis compras</Link>
                        </div>
                        <div className="mt-10">
                            <p className="font-bold text-2xl">Otros productos similares que te pueden gustar</p>
                            <div className="mt-5 w-full flex flex-wrap gap-10">
                                <ProductCardSmallVersion widthClassName="w-full xl:w-1/6" />
                                <ProductCardSmallVersion widthClassName="w-full xl:w-1/6" />
                                <ProductCardSmallVersion widthClassName="w-full xl:w-1/6" />
                                <ProductCardSmallVersion widthClassName="w-full xl:w-1/6" />
                                <ProductCardSmallVersion widthClassName="w-full xl:w-1/6" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExitingPay;
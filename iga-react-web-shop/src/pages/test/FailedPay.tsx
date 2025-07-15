// Static sources

// Components
import ProductCardSmallVersion from "../../components/ProductCardSmallVersion";

// React router
import { Link } from "react-router-dom";

const FailedPay: React.FC = () => {
    return (
        <div className="my-5 mx-50">
            <div className="bg-white rounded-lg p-5 ">
                <div className="bg-red-700 p-5 rounded-lg">
                    <p className="font-bold text-white text-lg"><i className="bi bi-exclamation-circle mr-2"></i>Pago rechazado</p>
                </div>
                <div className="flex justify-between mt-5">
                    <p className="font-bold text-4xl">Pago no procesado</p>
                    <p className="text-xl text-gray-400">Folio: 202507141020032458</p>
                </div>
                <p className="text-lg mt-2">Saldo insuficiente, prueba un metodo de pago diferente.</p>
                <div className="flex mt-5">
                    <div className="w-1/4">
                        <p className="font-bold text-2xl">Detalles de Pago</p>
                        <div className="flex flex-col gap-2 mt-2 mb-5">
                            <p className="font-bold">Metodo de pago: <span className="font-normal">Tarjeta de debito</span></p>
                            <p className="font-bold">Estatus: <span className="font-normal">No aprobado</span></p>
                        </div>
                        
                        <Link to={"/pagar-productos"} className="underline text-blue-500 font-bold text-xl"><i className="bi bi-arrow-clockwise mr-2"></i>Intentar nuevamente</Link>
                    </div>
                    <div className="w-3/4 px-2">
                        <p className="font-bold text-2xl">Resumen de pedido</p>
                        <div className="mt-5">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th scope="col" className="w-3/4 text-start pl-5 py-2">Articulos</th>
                                        <th scope="col" className="text-start">Cantidad</th>
                                        <th scope="col" className="text-start">Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b-1 border-gray-300">
                                        <td className="px-5 py-4 ">IGA casco de seguridad industrial dieletrico, ala completa, ajuste matraca, clase "G", linea básica, color amarillo</td>
                                        <td>5 pz</td>
                                        <td>$1000.00 MXN</td>
                                    </tr>
                                    <tr className="border-b-1 border-gray-300">
                                        <td className="px-5 py-4 ">IGA casco de seguridad industrial dieletrico, ala completa, ajuste matraca, clase "G", linea básica, color amarillo</td>
                                        <td>5 pz</td>
                                        <td>$1000.00 MXN</td>
                                    </tr>
                                    <tr className="border-b-1 border-gray-300">
                                        <td className="px-5 py-4 ">IGA casco de seguridad industrial dieletrico, ala completa, ajuste matraca, clase "G", linea básica, color amarillo</td>
                                        <td>5 pz</td>
                                        <td>$1000.00 MXN</td>
                                    </tr>
                                    <tr className="border-b-1 border-gray-300">
                                        <td className="px-5 py-4 ">IGA casco de seguridad industrial dieletrico, ala completa, ajuste matraca, clase "G", linea básica, color amarillo</td>
                                        <td>5 pz</td>
                                        <td>$1000.00 MXN</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="flex flex-col gap-2 mt-5 mb-5">
                                <p className="font-bold text-lg">Subtotal: <span className="font-normal">$5000.00 MXN</span></p>
                                <p className="font-bold text-lg">Descuento: <span className="font-normal">$0.00 MXN</span></p>
                                <p className="font-bold text-lg">Envio: <span className="font-normal">$250.00 MXN</span></p>
                                <p className="font-bold text-xl">Total (IVA incluido): <span className="font-normal text-2xl ml-2">$5250.00 MXN</span></p>
                            </div>
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

export default FailedPay;
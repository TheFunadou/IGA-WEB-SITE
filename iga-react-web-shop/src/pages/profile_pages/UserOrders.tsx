import { Link } from "react-router-dom";

const UserOrders: React.FC = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-3/4 p-5 ">
                <p className="text-4xl font-bold">Mis pedidos</p>
                <button className="mt-5 text-xl text-blue-500 font-bold underline"><i className="bi bi-funnel mr-2"></i>Filtros</button>
                <div className="w-full mt-5">
                    <div className="w-full bg-[#054274] rounded-tr-lg rounded-tl-lg px-5 py-3 text-white text-lg flex justify-between">
                        {/* Purchase date */}
                        <div>
                            <p>Fecha de compra:</p>
                            <p>26/06/20XX</p>
                        </div>
                        {/* Total */}
                        <div>
                            <p>Total:</p>
                            <p>1200.00 MXN</p>
                        </div>
                        {/*Shipping to */}
                        <div>
                            <p>Enviado a:</p>
                            <p>Nombre persona</p>
                        </div>
                        {/* Aditional actions */}
                        <div className="text-end">
                            {/* Order number */}
                            <p>Numero de pedido: 202506261042018</p>
                            {/* Billing */}
                            <Link to="" className="underline font-bold">Facturar pedido</Link>
                            {/* Order detail */}
                            <Link to={""} className="underline font-bold ml-5">Ver detalles del pedido</Link>
                        </div>

                    </div>
                    {/* Product detail */}
                    <div className="w-full bg-white px-5 py-3">
                        {/* Name of product */}
                        <p className="font-bold text-2xl">CASCO DE SEGURIDAD INDUSTRIAL DIELETRICO</p>
                        <p className="font-bold text-lg text-blue-500">Estatus: En transito</p>
                        {/* Shipping number */}
                        <p>Numero de seguimiento: 123456789876545</p>
                        <div className="w-full flex text-lg mt-5">
                            <div className="w-1/8">
                                <img className="w-full rounded-md" src="https://igaproductos.com.mx/wp-content/uploads/2024/07/hit_intervalo_amarillo-e1722380739491.jpg" alt="" />
                            </div>
                            <div className="w-5/5 grid grid-cols-4">
                                {/* Model */}
                                <div className="pl-2">
                                    <p>Ala completa</p>
                                    <p>Ajuste de matraca</p>
                                    <p>Clase "E"</p>
                                </div>
                                {/* Buy detail */}
                                <div className=" border-blue-500">
                                    <p>Cantidad: 5 pz</p>
                                    <p>Linea de color:</p>
                                    <p>Color:</p>
                                </div>
                                <div className=" border-blue-500 text-center">
                                    {/* Link to shipping guide */}
                                    <Link to={"#"} className="text-blue-500 font-bold underline">Seguimiento de envio</Link>
                                    {/* Buy again */}
                                    <button className="btn bg-[#054274] text-white w-3/4 mt-5 ">Comprar otra vez</button>
                                </div>
                                <div className=" border-blue-500 text-center">
                                    {/* Rate product */}
                                    <span>
                                        <i className="bi bi-star-fill text-amber-400"></i>
                                        <i className="bi bi-star-fill text-amber-400"></i>
                                        <i className="bi bi-star-fill text-amber-400"></i>
                                        <i className="bi bi-star-fill text-amber-400"></i>
                                        <i className="bi bi-star-fill text-amber-400"></i>
                                    </span>
                                    <p className="underline text-blue-500">Valorar producto</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    );
};

export default UserOrders;
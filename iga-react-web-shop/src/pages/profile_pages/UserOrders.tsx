import { Link } from "react-router-dom";

const UserOrders: React.FC = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-full lg:w-full xl:w-3/4 p-2 xl:p-5 ">
                <p className="text-4xl font-bold">Mis pedidos</p>
                <button className="mt-5 text-xl text-blue-500 font-bold underline"><i className="bi bi-funnel mr-2"></i>Filtros</button>
                <div className="w-full mt-5">
                    <div className="w-full bg-[#054274] rounded-tr-lg rounded-tl-lg px-2 xl:px-5 py-3 text-white text-lg flex flex-wrap lg:flex-nowrap justify-between gap-3 lg:gap-0">
                        {/* Purchase date */}
                        <div className="text-sm lg:text-base">
                            <p className="hidden lg:block">Fecha de compra:</p>
                            <p>26/06/20XX</p>
                        </div>
                        {/* Total */}
                        <div className="flex lg:flex-col text-sm lg:text-base">
                            <p>Total:</p>
                            <p>1200.00 MXN</p>
                        </div>
                        {/*Shipping to */}
                        <div className="text-sm lg:text-base flex">
                            <p>Enviado a: Nombre persona</p>
                        </div>
                        {/* Aditional actions */}
                        <div className="lg:text-end text-sm lg:text-base">
                            {/* Order number */}
                            <p>Numero de pedido: 202506261042018</p>
                            {/* Billing */}
                            <Link to="" className="underline font-bold text-xs lg:text-base">Facturar pedido</Link>
                            {/* Order detail */}
                            <Link to={""} className="underline font-bold ml-2 xl:ml-5 text-xs lg:text-base">Ver detalles del pedido</Link>
                        </div>

                    </div>
                    {/* Product detail */}
                    <div className="w-full bg-white px-5 py-3">
                        {/* Name of product */}
                        <p className="font-bold text-base lg:text-2xl">CASCO DE SEGURIDAD INDUSTRIAL DIELETRICO</p>
                        <p className="font-bold text-sm lg:text-lg text-blue-500">Estatus: En transito</p>
                        {/* Shipping number */}
                        <p className="text-sm lg:text-base">Numero de seguimiento: 123456789876545</p>
                        <div className="w-full flex text-sm xl:text-lg lg:mt-5 border-b-1 border-gray-300 py-4">
                            <div className="w-1/2 md:w-1/6 xl:w-1/8">
                                <img className="w-full rounded-md" src="https://igaproductos.com.mx/wp-content/uploads/2024/07/hit_intervalo_amarillo-e1722380739491.jpg" alt="" />
                            </div>
                            <div className="flex flex-col items-start justify-start md:grid md:grid-cols-4 pl-2 lg:pl-0">
                                {/* Model */}
                                <div className="lg:pl-2">
                                    <p>Ala completa</p>
                                </div>
                                {/* Buy detail */}
                                <div>
                                    <p>Cantidad: 5 pz</p>
                                    <p>Linea de color:</p>
                                    <p>Color:</p>
                                </div>
                                <div className="lg:text-center">
                                    {/* Link to shipping guide */}
                                    <Link to={"#"} className="text-blue-500 font-bold underline">Seguimiento de envio</Link>
                                    {/* Buy again */}
                                    <button className="btn bg-[#054274] text-white w-full lg:w-3/4 mt-3 lg:mt-5 md:text-xs xl:text-base ">Comprar otra vez</button>
                                </div>
                                <div className="mt-2 lg:mt-0 lg:text-center">
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
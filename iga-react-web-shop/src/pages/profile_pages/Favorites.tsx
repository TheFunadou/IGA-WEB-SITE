import { Link } from "react-router-dom";

const Favorites: React.FC = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-full xl:w-3/4 p-2 xl:p-5 ">
                <p className="text-4xl font-bold">Mis favoritos</p>
                <div className="w-full flex justify-between items-center">
                    <button className="mt-5 text-xl text-blue-500 font-bold underline"><i className="bi bi-funnel mr-2"></i>Filtros</button>
                    
                </div>
                <div className="w-full mt-5">
                    <div className="w-full bg-[#054274] rounded-tr-lg rounded-tl-lg px-5 py-3 text-white text-lg flex justify-between">
                        {/* Purchase date */}
                        <div>
                            <p className="text-sm lg:text-base">Añadido:</p>
                            <p className="text-sm lg:text-base">26/06/20XX</p>
                        </div>
                        {/* Aditional actions */}
                        <div className="text-end">
                            {/* Product category */}
                            <p className="text-sm lg:text-base">Categoria: Cascos de seguridad</p>
                            {/* Order detail */}
                            <Link to={""} className="underline font-bold ml-5 text-sm lg:text-base">Eliminar de favoritos</Link>
                        </div>

                    </div>
                    {/* Product detail */}
                    <div className="w-full bg-white px-5 py-3">
                        {/* Name of product */}
                        <p className="font-bold  lg:text-2xl">CASCO DE SEGURIDAD INDUSTRIAL DIELETRICO</p>
                        <div className="w-full flex text-sm xl:text-lg mt-5">
                            <div className="w-1/2 md:w-1/6 lg:w-1/8">
                                <img className="w-full rounded-md" src="https://igaproductos.com.mx/wp-content/uploads/2024/07/hit_intervalo_amarillo-e1722380739491.jpg" alt="" />
                            </div>
                            <div className="flex flex-col items-start justify-start md:grid md:grid-cols-3 pl-2 lg:pl-0">
                                {/* Model */}
                                <div className="lg:pl-2">
                                    <p>Ala completa</p>
                                    <p>Ajuste de matraca</p>
                                    <p>Clase "E"</p>
                                </div>
                                {/* Buy detail */}
                                <div>
                                    <p>Linea de color:</p>
                                    <p>Color:</p>
                                </div>
                                <div className="text-center">
                                    {/* Link to shipping guide */}
                                    <button className="btn bg-[#054274] text-white w-full lg:w-3/4 mt-3 lg:mt-5 md:text-xs xl:text-base ">Agregar al carrito</button>
                                    {/* Buy again */}
                                    <button className="btn bg-green-500 text-white w-full lg:w-3/4 mt-3 lg:mt-5 md:text-xs xl:text-base ">Comprar</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Favorites;
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-[#054274] p-2 pb-5 pt-5 md:p-5 md:pt-10 md:pb-10 md:pr-15 md:pl-15 text-white flex flex-col items-center">
            <div className="w-full lg:w-5/6 xl:w-1/2 flex justify-between items-start">
                <div>
                    <Link to="/directorio-de-pie-de-pagina" className="font-bold text-sm md:text-2xl">Conocenos</Link>
                    <ol className="hidden lg:flex flex-col gap-2 md:gap-5 list-disc text-xs md:text-base mt-4">
                        <li><Link to="/acerca-de-iga">Acerca de nosotros</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                        <li><Link to="/bolsa-de-trabajo">Bolsa de trabajo</Link></li>
                    </ol>
                </div>
                <div>
                    <Link to="/directorio-de-pie-de-pagina" className="font-bold text-sm md:text-2xl">FAQ's</Link>
                    <ol className="hidden lg:flex flex-col gap-5 list-disc text-xs md:text-base mt-4">
                        <li><Link to={"#"}>Preguntas frecuentes</Link></li>
                        <li><a href="mailto:atencionacliente@igaproductos.com.mx">Soporte a compras</a></li>
                    </ol>
                </div>
                <div>
                    <Link to="/directorio-de-pie-de-pagina" className="font-bold text-sm md:text-2xl">Legal</Link>
                    <ol className="hidden lg:flex flex-col gap-5 list-disc text-xs md:text-base mt-4">
                        <li><Link to="/politica-de-privacidad">Politica de privacidad</Link></li>
                        <li><Link to="/politica-de-devolucion">Politica de devolución PNC</Link></li>
                        <li><Link to="/distribuidores">Distribuidores</Link></li>
                    </ol>
                </div>
                <div>
                    <Link to="/directorio-de-pie-de-pagina" className="font-bold text-sm md:text-2xl">Soporte</Link>
                    <ol className="hidden lg:flex flex-col list-disc text-xs md:text-base mt-4">
                        <li><a href="https://api.whatsapp.com/send?phone=529211963246" target="_blank">Contacta a un experto</a></li>
                    </ol>
                </div>
            </div>
            <div className="w-full mt-1 md:mt-5 flex justify-between items-center">
                <img className="w-1/4 lg:w-1/8" src="https://igaproductos.com.mx/wp-content/themes/igaproductos/images/plasticos-minib.png" alt="Logo plasticos del golfo sur" />
                <div className="flex flex-col items-center justify-center w-1/2">
                    <p className="font-bold text-xs md:text-base">Codiciones de uso</p>
                    <p className="text-xs md:text-base text-center">2025 @ Todos los Derechos Reservados</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="font-bold mb-2 text-xs md:text-base text-center">Redes sociales</p>
                    <div className="flex items-center justify-center text-sm md:text-3xl gap-2 md:gap-5">
                        <Link className="hover:scale-125 duration-300 hover:text-blue-500" to="https://www.facebook.com/Cascos.Iga" target="_blank"><i className="bi bi-facebook"></i></Link>
                        <Link className="hover:scale-125 duration-300 hover:text-blue-500" to="https://www.instagram.com/iga_cascos/" target="_blank"><i className="bi bi-instagram"></i></Link>
                        <Link className="hover:scale-125 duration-300 hover:text-blue-500" to="https://x.com/IgaProductos" target="_blank"><i className="bi bi-twitter-x"></i></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
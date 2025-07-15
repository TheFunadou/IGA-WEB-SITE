import { Link } from "react-router-dom";

const NavbarSubMenu: React.FC = () => {
    return (
        // The links of submenu is all here
        <ul className="w-full flex flex-col xl:justify-between lg:flex-row text-base md:text-xs xl:text-base lg:items-center gap-4 md:gap-10 text-white p-1 xl:p-0">
            <li>
                <Link className="hover:font-bold duration-150" to="/">Inicio</Link>
            </li>
            <li>
                <Link className="hover:font-bold duration-150" to="/tienda">Tienda</Link>
            </li>
            <li>
                <Link className="hover:font-bold duration-150" to="/acerca-de-iga">Acerca de IGA</Link>
            </li>
            <li>
                <Link className="hover:font-bold duration-150" to="/certificaciones">Certificaciones</Link>
            </li>
            <li>
                <Link className="hover:font-bold duration-150" to="/cobertura">Cobertura</Link>
            </li>
            <li>
                <Link className="hover:font-bold duration-150" to="/contacto">Contacto</Link>
            </li>
            <li>
                <Link className="hover:font-bold duration-150" to="/distribuidores">Distribuidores</Link>
            </li>
            <li className="md:hidden">
                <div className="dropdown dropdown-center">
                    <div tabIndex={0} role="button" className="cursor-pointer text-base">Idiomas</div>
                    <ul tabIndex={0} className="dropdown-content menu z-1 flex flex-col gap-5 text-xs md:text-base w-full bg-[#054274] rounded-md">
                        <li className="hover:bg-[#054274] rounded-md duration-115 ease-in-out text-base"><Link to="#">Español</Link></li>
                        <li className="hover:bg-[#054274] rounded-md duration-115 ease-in-out text-base"><Link to="#">Ingles</Link></li>
                    </ul>
                </div>
            </li>
            <li>
                <a href="tel:9222158300" className="font-bold underline text-xs xl:text-base" target="_blank">¿Tienes dudas? Llamanos al 921 215 8300| 01</a>
            </li> 
        </ul>
    );
};

export default NavbarSubMenu;
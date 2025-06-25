import { Link } from "react-router-dom";

const NavbarSubMenu: React.FC = () => {
    return (
        // The links of submenu is all here
        <ul className="flex flex-col md:flex-row text-base md:text-xs xl:text-base md:items-center gap-4 md:gap-10 text-white p-1 xl:p-0">
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
        </ul>
    );
};

export default NavbarSubMenu;
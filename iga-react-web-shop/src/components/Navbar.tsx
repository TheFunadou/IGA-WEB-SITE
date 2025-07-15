// React router
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

// Hooks
import { useState, useEffect } from "react";

// Components
import NavbarSubMenu from "./NavbarSubComponents/NavSubMenu";

// Context for update the shopping cart length
import { useAppContext } from "../context/AppContext";

const Navbar: React.FC = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
    // const [isMyAccountOpen,setIsMyAccountOpen] = useState<boolean>(false);

    const {cartItems} = useAppContext();

    const location = useLocation();
    useEffect(() => {
        // setIsMyAccountOpen(false);
        setIsDrawerOpen(false);
        //Close the drawer if the path changes
    }, [location.pathname]);


    // Cart length
    return (
        <nav>
            <div className="w-full flex flex-col lg:flex-row items-center bg-[#054274] p-4 xl:py-5 xl:px-15 text-white">
                <div className="w-full flex items-center lg:items-end xl:items-center lg:justify-start">
                    <img className="w-1/3 sm:w-1/5 mr-4 xl:mr-10" src="https://igaproductos.com.mx/wp-content/themes/igaproductos/images/igaproductos.png" alt="Logo iga productos" />
                    <input className="input w-3/5 lg:w-1/2 xl:w-3/5 bg-white text-black focus:outline-0 rounded-md mr-5 text-xs xl:text-base" type="text" placeholder="Buscar un producto..." />
                    <button className="text-xs xl:text-base flex items-center hover:scale-105 duration-110 ease-in-out cursor-pointer"><i className="bi bi-search text-xl md:text-base"></i><span className="hidden md:block font-bold pl-3">Buscar</span></button>
                </div>
                <div className="w-full flex items-center justify-between xl:justify-end xl:gap-10 mt-4 xl:mt-0">
                    <div className="dropdown dropdown-center hidden md:block">
                        <div tabIndex={0} role="button" className="m-1 cursor-pointer text-xs xl:text-base">Idiomas</div>
                        <ul tabIndex={0} className="dropdown-content menu rounded-box z-1 w-40 md:w-52 md:px-2 md:py-5 mt-2 flex flex-col gap-5 bg-[#022544] text-xs md:text-base">
                            <li className="hover:bg-[#054274] rounded-md duration-115 ease-in-out"><Link to="#">Español</Link></li>
                            <li className="hover:bg-[#054274] rounded-md duration-115 ease-in-out"><Link to="#">Ingles</Link></li>
                        </ul>
                    </div>
                    <Link to="/tu-cuenta/mis-compras" className="hover:scale-103 hover:font-bold duration-150 ease-in text-xs xl:text-base">Mis compras</Link>
                    <Link to="/tu-cuenta/mis-favoritos" className="hover:scale-103 hover:font-bold duration-150 ease-in text-xs xl:text-base">Favoritos</Link>
                    <Link to="" className="hover:scale-103 hover:font-bold duration-150 ease-in text-xs xl:text-base hidden">Iniciar sesión</Link>
                    <div className="dropdown dropdown-center">
                        <div tabIndex={0} role="button" className="m-1 cursor-pointer text-xs xl:text-base font-bold">Tu cuenta</div>
                        <ul tabIndex={0} className="dropdown-content menu rounded-box z-1 w-40 md:w-52 md:px-2 md:py-5 mt-2 flex flex-col gap-5 bg-[#022544] text-xs md:text-base">
                            <li className="hover:bg-[#054274] rounded-md duration-115 ease-in-out"><Link to="/tu-cuenta/informacion-personal">Información personal</Link></li>
                            <li className="hover:bg-[#054274] rounded-md duration-115 ease-in-out"><Link to="/tu-cuenta/direcciones-de-envio">Direcciones de envio</Link></li>
                            <li className="hover:bg-[#054274] rounded-md duration-115 ease-in-out"><Link to="#">Cerrar sesión <i className="bi bi-box-arrow-right"></i></Link></li>
                        </ul>
                    </div>
                    <Link
                        to="/carrito-de-compras"
                        className="hover:scale-103 hover:font-bold duration-150 ease-in text-xs xl:text-base">
                        <i className="bi bi-cart"></i>
                        <span
                            className="text-sm ml-2 font-bold px-1 xl:px-2 xl:py-1 bg-red-500 text-center rounded-full">
                            {cartItems.length}
                        </span>
                    </Link>
                </div>
            </div>
            <div className="w-full bg-[#022544] p-2 md:p-3 lg:p-2 flex items-center xl:py-2 xl:px-15">
                <div className="lg:hidden drawer">
                    <input id="my-drawer" type="checkbox" checked={isDrawerOpen} onChange={() => setIsDrawerOpen(!isDrawerOpen)} className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label
                            htmlFor="my-drawer"
                            className="flex items-center">
                            <i className="bi bi-list text-white text-2xl"></i>
                            <p className="pl-3 text-white font-bold ">Menu</p>
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu text-base-content min-h-full w-80 p-4 bg-[#022544]">
                            {/* Sidebar content here */}
                            <NavbarSubMenu />
                        </ul>
                    </div>
                </div>
                {/* Submenu for web, if the size is smaller the submenu for smartphones is displayed */}
                <div className="hidden lg:flex items-center w-full">
                    <NavbarSubMenu />
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
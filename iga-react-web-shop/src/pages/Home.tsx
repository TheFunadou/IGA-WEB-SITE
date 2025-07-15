// Components
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import CategoriesCard from "../components/HomeComponents/CategoriesCard";
import CustomCarouselDaysiUI from "../components/CustomCarouselDaysiUI";

// Types
import type { CarouselImages } from "../components/CustomCarouselDaysiUI";

// Hooks
import { useState } from "react";

// React Router
import { Link } from "react-router-dom";

// Products data example
import ProductsData from "./products_example.json"

// Static data
import MercadoPagoLogo from "../img/LogoMercadoPago.svg"
import PaypalLogo from "../img/PP_logo_h_200x51.png"

const Home: React.FC = () => {

    const carouselUrlsImages: CarouselImages[] = [
        {
            id: 1,
            image_url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9b21f5a4-2e5f-41f0-8dad-efd23bed0d9a/d4afbmj-4d472626-9a83-4713-b02a-2bca1b670cf3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzliMjFmNWE0LTJlNWYtNDFmMC04ZGFkLWVmZDIzYmVkMGQ5YVwvZDRhZmJtai00ZDQ3MjYyNi05YTgzLTQ3MTMtYjAyYS0yYmNhMWI2NzBjZjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1Jk6F4PU4jOuNEGx7eaLnewprRanbybCcjD0K5Nyuds"
        },
        {
            id: 2,
            image_url: "https://e-capacitarte.com.ar/images/tics6.jpg"
        },
        {
            id: 3,
            image_url: "https://static.vecteezy.com/system/resources/thumbnails/005/210/056/small/abstract-digital-global-technology-background-blue-circuit-board-pattern-vector.jpg"
        },
        {
            id: 4,
            image_url: "https://www.2bcbg.com/wp-content/uploads/2019/04/colorful-image-1-800x200.jpg"
        },
    ]

    const [showCategories, setShowCategories] = useState<boolean>(false);

    const showAllCategories = () => {
        setShowCategories(prev => !prev);
    }

    const MastercardLogo = "https://www.interbus.gr/wp-content/uploads/2017/11/mastercard-logo.png";
    const VISALogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png";
    const BBVALogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/BBVA_2019.svg/1280px-BBVA_2019.svg.png";
    const OXXOLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Oxxo_Logo.svg/2560px-Oxxo_Logo.svg.png";
    const BanamexLogo = "https://aymdesarrolloempresarial.com/wp-content/uploads/2018/01/citibanamex-logo.png";

    return (
        <div className="w-full flex justify-start items-center flex-col">
            <div className="w-full">
                <div className="relative">
                    <CustomCarouselDaysiUI srcImages={carouselUrlsImages} carouselClassName="w-full" slideDuration={4500} />
                </div>
            </div>
            <div className="w-full mt-5 flex flex-col gap-2 justify-center items-center">
                <p className="text-2xl lg:text-4xl font-bold text-green-600 text-center"><i className="bi bi-truck mr-4"></i>Envios gratis por compras o por pedido</p>
                <div className="w-full xl:w-5/6 p-1 xl:pl-2 lg:mt-5 flex flex-col justify-center items-center">
                    <p className="lg:mt-5 font-bold text-3xl">Categorias</p>
                    <div className="w-full flex flex-wrap gap-1 md:gap-5 justify-start mt-2">
                        <CategoriesCard styleClassName="w-45 xl:w-74" />
                        <CategoriesCard styleClassName="w-45 xl:w-74" />
                        <CategoriesCard styleClassName="w-45 xl:w-74" />
                        <CategoriesCard styleClassName="w-45 xl:w-74" />
                        <CategoriesCard styleClassName="w-45 hidden md:block xl:w-74" />
                        {showCategories ? (
                            <div className="w-full flex flex-wrap gap-1 md:gap-5 justify-start">
                                <CategoriesCard styleClassName="w-45 xl:w-74" />
                                <CategoriesCard styleClassName="w-45 xl:w-74" />
                                <CategoriesCard styleClassName="w-45 xl:w-74" />
                                <CategoriesCard styleClassName="w-45 xl:w-74" />
                            </div>
                        ) : (
                            null
                        )}
                    </div>
                    <button className="underline text-xl hover:text-blue-500 duration-110 mt-4" onClick={showAllCategories}>{showCategories ? (<p>Ver menos...</p>) : (<p>Ver mas categorias...</p>)}</button>
                    <p className="font-bold text-2xl lg:text-3xl mt-5 text-center">Promociones y metodos de pago</p>
                    <div className="w-full mt-5 flex gap-5 overflow-x-scroll pb-5">
                        <figure className=" xl:w-74 p-5 bg-white rounded-md flex-shrink-0 flex items-center">
                            <img className="w-full" src={VISALogo} alt="VISA Logo" />
                        </figure>
                        <figure className=" xl:w-74 p-5 bg-white rounded-md flex-shrink-0 flex items-center">
                            <img className="w-full" src={MastercardLogo} alt="Mastercard Logo" />
                        </figure>
                        <figure className=" xl:w-74 p-5 bg-white rounded-md flex-shrink-0 flex items-center">
                            <img className="w-full" src={MercadoPagoLogo} alt="Mercado Pago Logo" />
                        </figure>
                        <figure className="xl:w-74 p-5 bg-white rounded-md flex-shrink-0 flex items-center">
                            <img className="w-full" src={PaypalLogo} alt="Paypal Logo" />
                        </figure>
                        <figure className="xl:w-74 p-5 bg-white rounded-md flex-shrink-0 flex items-center">
                            <img className="w-full" src={BBVALogo} alt="BBVA Logo" />
                        </figure>
                        <figure className="xl:w-74 p-5 bg-white rounded-md flex-shrink-0 flex items-center">
                            <img className="w-full" src={OXXOLogo} alt="OXXO Logo" />
                        </figure>
                        <figure className="xl:w-74 p-5 bg-white rounded-md flex-shrink-0 flex items-center">
                            <img className="w-full" src={BanamexLogo} alt="Banamex Logo" />
                        </figure>
                    </div>
                </div>
            </div>
            <div className="w-full pt-5 flex flex-col justify-center items-center pl-2 pr-2 sm:pl-5 sm:pr-5 xl:pl-20 xl:pr-20">
                
                <div className="w-full hidden mb-5 ">
                    <div className="w-full lg:w-1/2 lg:border-r-1 border-b-1 lg:border-b-0 border-gray-300 md:p-5">
                        <div className="xl:h-60 flex gap-5 md:gap-10 justify-center">
                            <div className="w-1/4 lg:w-1/5 text-center">
                                <img src="https://igaproductos.com.mx/wp-content/themes/igaproductos/images/bene1.png" alt="Logo pago seguro" />
                                <p className="text-xs md:text-sm text-gray-500 font-bold">PAGO SEGURO</p>
                            </div>
                            <div className="w-1/4 lg:w-1/5 text-center">
                                <img src="https://igaproductos.com.mx/wp-content/themes/igaproductos/images/bene2.png" alt="Logo entrega segura" />
                                <p className="text-xs md:text-sm text-gray-500 font-bold">ENTREGA SEGURA</p>
                            </div>
                            <div className="w-1/4 lg:w-1/5 text-center">
                                <img src="https://igaproductos.com.mx/wp-content/themes/igaproductos/images/bene3.png" alt="Logo entrega segura" />
                                <p className="text-xs md:text-sm text-gray-500 font-bold">SEGURIDAD</p>
                            </div>
                            <div className="w-1/4 lg:w-1/5 text-center">
                                <img src="https://igaproductos.com.mx/wp-content/themes/igaproductos/images/bene4.png" alt="Logo protección en compras" />
                                <p className="text-xs md:text-sm text-gray-500 font-bold">PROTECCIÓN EN COMPRAS</p>
                            </div>
                        </div>
                        <p className="text-center font-bold text-base md:text-lg text-gray-500 mb-5 md:mb-0 mt-2 md:mt-5">Beneficios de comprar con nosotros</p>
                    </div>
                    <div className="w-full lg:w-1/2 mt-5 md:mt-0 md:p-5">
                        <div className="xl:h-60 flex flex-wrap items-center justify-center gap-10">
                            <img className="w-1/6" src="https://1000marcas.net/wp-content/uploads/2019/12/VISA-Logo.png" alt="Logo VISA" />
                            <img className="w-1/6" src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Logo MASTERCARD" />
                            <img className="w-1/6" src="https://logotipoz.com/wp-content/uploads/2021/10/version-horizontal-large-logo-mercado-pago.webp" alt="Logo MERCADO PAGO" />
                            <img className="w-1/6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/BBVA_2019.svg/1280px-BBVA_2019.svg.png" alt="Logo BBVA" />
                            <img className="w-1/6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Citibanamex_logo.svg/2560px-Citibanamex_logo.svg.png" alt="LOGO CITIBANAMEX" />
                            <img className="w-1/6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Oxxo_Logo.svg/1200px-Oxxo_Logo.svg.png" alt="Logo OXXO" />
                        </div>
                        <p className="text-center font-bold text-base md:text-lg text-gray-500 mt-2 md:mt-5">Aceptamos diferentes bancos y formas de pago.</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center">
                    {/* Product cards list */}
                    <h1 className="text-3xl font-bold mb-5">Productos</h1>
                    <div className="w-full flex flex-wrap justify-evenly items-center sm:gap-10">
                        {ProductsData.map((product) => (
                            <ProductCard
                                key={product.sku}
                                sku={product.sku}
                                productName={product.name}
                                category={product.description}
                                price={product.price}
                                imageUrl={product.image_url}
                                favoriteInitialState={product.favorite}
                                isOffer={product.isOffer}
                                offerDiscount={product.offerDiscount}
                            />
                        ))}
                    </div>
                    <Link className="mt-2 md:mt-5 underline hover:text-blue-700 hover:scale-103 duration-300 ease-in-out mb-10" to={"#"}>Ver mas productos...</Link>
                </div>
            </div>
        </div>
    );
};


export default Home;
// Components
import ProductCard from "../components/ProductCard";
// import CategoryCard from "../components/CategoryCard";
import CategoriesCard from "../components/HomeComponents/CategoriesCard";
import CustomCarouselDaysiUI from "../components/CustomCarouselDaysiUI";
import ProductCardMainVersion from "../components/ProductCardComponents/ProductCardMainVersion";
import ProductCardSquareVersion from "../components/ProductCardComponents/ProductCardSquareVersion";

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
import CarouselImg1 from "../img/carousel-images/ENCABEZADO-1.jpg"

const Home: React.FC = () => {

    const carouselUrlsImages: CarouselImages[] = [
        {
            id: 1,
            image_url: CarouselImg1

        },
        {
            id: 2,
            image_url: CarouselImg1

        },
        {
            id: 3,
            image_url: CarouselImg1

        },
        {
            id: 4,
            image_url: CarouselImg1

        },

    ]

    const [showCategories, setShowCategories] = useState<boolean>(false);

    const showAllCategories = () => {
        setShowCategories(prev => !prev);
    }

    const PaypalLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png";
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
                        <figure className="w-45 xl:w-74 p-5 bg-white rounded-md flex-shrink-0 flex items-center">
                            <img className="w-full" src={VISALogo} alt="VISA Logo" />
                        </figure>
                        <figure className="w-45 xl:w-74 p-5 bg-white rounded-md flex-shrink-0 flex items-center">
                            <img className="w-full" src={MastercardLogo} alt="Mastercard Logo" />
                        </figure>
                        <figure className="w-45 xl:w-74 p-5 bg-white rounded-md flex-shrink-0 flex items-center">
                            <img className="w-full" src={MercadoPagoLogo} alt="Mercado Pago Logo" />
                        </figure>
                        <figure className="w-45 xl:w-74 p-5 bg-white rounded-md flex-shrink-0 flex items-center">
                            <img className="w-full" src={PaypalLogo} alt="Paypal Logo" />
                        </figure>
                        <figure className="w-45 xl:w-74 p-5 bg-white rounded-md flex-shrink-0 flex items-center">
                            <img className="w-full" src={BBVALogo} alt="BBVA Logo" />
                        </figure>
                        <figure className="w-45 xl:w-74 p-5 bg-white rounded-md flex-shrink-0 flex items-center">
                            <img className="w-full" src={OXXOLogo} alt="OXXO Logo" />
                        </figure>
                        <figure className="w-45 xl:w-74 p-5 bg-white rounded-md flex-shrink-0 flex items-center">
                            <img className="w-full" src={BanamexLogo} alt="Banamex Logo" />
                        </figure>
                    </div>
                    <div className="w-full py-5 mt-5">
                        <p className="font-bold text-2xl lg:text-3xl text-center mr-2">Explora nuestras ofertas <i className="bi bi-fire text-red-400 text-3xl"></i></p>
                        <div className="w-full mt-5 py-5 flex gap-5 overflow-x-scroll overflow-y-hidden md:gap-5 justify-start">
                            {ProductsData.slice(0,10).filter(product => product.isOffer).map(product => (
                                <ProductCardSquareVersion
                                    key={product.sku}
                                    sku={product.sku}
                                    productName={product.name}
                                    categories={product.description}
                                    unitPrice={product.price}
                                    imageUrl={product.image_url}
                                    favorite={product.favorite}
                                    isOffer={product.isOffer}
                                    offerDiscount={product.offerDiscount}
                                    productCardClassName="w-45 md:w-74 h-85 md:h-100 flex-shrink-0"
                                />
                            ))}
                        </div>
                    </div>
                    <div className="w-full py-5 mt-5">
                        <p className="font-bold text-2xl lg:text-3xl text-center mr-2">Recomendaciones de productos</p>
                        <div className="w-full mt-5 flex flex-wrap gap-1 md:gap-5 justify-start">
                            {ProductsData.map(product => (
                                <ProductCardMainVersion
                                    key={product.sku}
                                    sku={product.sku}
                                    productName={product.name}
                                    categories={product.description}
                                    unitPrice={product.price}
                                    imageUrl={product.image_url}
                                    favorite={product.favorite}
                                    isOffer={product.isOffer}
                                    offerDiscount={product.offerDiscount}
                                    productCardClassName="w-45 xl:w-74"
                                />
                            ))}
                        </div>
                        <p className="underline text-blue-500 text-center mt-5 font-bold text-lg">Ver mas productos...</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};


export default Home;
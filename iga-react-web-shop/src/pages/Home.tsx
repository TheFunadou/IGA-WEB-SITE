// Components
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import AlertAddtoFav from "../components/AlertAddToFav";

// React Router
import { Link } from "react-router-dom";

// Hooks
import { useEffect, useState, useRef } from "react";

// Products data example
import ProductsData from "./products_example.json"


const Home: React.FC = () => {

    type CarouselUrls = {
        id: number;
        image_url: string;
    };

    const carouselUrlsImages: CarouselUrls[] = [
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

    // Logic for the Carousel
    const carouselRef = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (index + 1) % carouselUrlsImages.length;
            setIndex(nextIndex);

            const carousel = carouselRef.current;
            if (carousel) {
                const itemWidth = carousel.offsetWidth;
                carousel.scrollTo({
                    left: nextIndex * itemWidth,
                    behavior: "smooth",
                });
            }
        }, 8000);

        return () => clearInterval(interval);
    }, [index]);


    // Show alert

    const [showFavoriteAlert, setShowFavoriteAlert] = useState<boolean>(false);

    const handleAddToFavorites = () => {
        setShowFavoriteAlert(true);
        setTimeout(() => setShowFavoriteAlert(false), 3000)
    }

    return (
        <div className="w-full flex justify-start items-center flex-col">
            <div className="w-full">
                <div className="relative">
                    {/* Carrousel of images */}
                    <div className="carousel w-full overflow-hidden" ref={carouselRef}>
                        {carouselUrlsImages.map((item) => (
                            <div key={item.id} className="carousel-item w-full flex-shrink-0">
                                <img
                                    src={item.image_url}
                                    alt={`slide-${item.id}`}
                                    className="w-full h-full"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full pt-5 flex flex-col justify-center items-center pl-2 pr-2 sm:pl-5 sm:pr-5 xl:pl-20 xl:pr-20">
                <p className="text-2xl md:text-3xl font-bold text-green-700 mb-5 text-center">Envios gratis por compras o por pedido.</p>
                <div className="mb-15 w-full flex items-center justify-center flex-col">
                    {/* Categories cards */}
                    <h1 className="text-3xl font-bold mb-5">Categorias</h1>
                    <div className="flex flex-wrap gap-5 w-full justify-evenly items-center">
                        <CategoryCard cardName="Cascos de seguridad" imageUrls="https://igaproductos.com.mx/wp-content/uploads/2024/07/HIT_AZUL_INTER2-1-e1722383211957.jpg" />
                        <CategoryCard cardName="Lentes de seguridad" imageUrls="https://igaproductos.com.mx/wp-content/uploads/2024/07/HIT_AZUL_INTER2-1-e1722383211957.jpg" />
                        <CategoryCard cardName="Cascos de seguridad" imageUrls="https://igaproductos.com.mx/wp-content/uploads/2024/07/HIT_AZUL_INTER2-1-e1722383211957.jpg" />
                        <CategoryCard cardName="Cascos de seguridad" imageUrls="https://igaproductos.com.mx/wp-content/uploads/2024/07/HIT_AZUL_INTER2-1-e1722383211957.jpg" />
                    </div>
                    {/* <div className="flex flex-wrap justify-center items-start gap-5 border-2 w-full">
                        <CategoryCard cardName="Cascos de seguridad" imageUrls="https://igaproductos.com.mx/wp-content/uploads/2024/07/HIT_AZUL_INTER2-1-e1722383211957.jpg" />
                        <CategoryCard cardName="Lentes de seguridad" imageUrls="https://igaproductos.com.mx/wp-content/uploads/2024/07/HIT_AZUL_INTER2-1-e1722383211957.jpg" />
                        <CategoryCard cardName="Cascos de seguridad" imageUrls="https://igaproductos.com.mx/wp-content/uploads/2024/07/HIT_AZUL_INTER2-1-e1722383211957.jpg" />
                        <CategoryCard cardName="Cascos de seguridad" imageUrls="https://igaproductos.com.mx/wp-content/uploads/2024/07/HIT_AZUL_INTER2-1-e1722383211957.jpg" />
                        <CategoryCard cardName="Cascos de seguridad" imageUrls="https://igaproductos.com.mx/wp-content/uploads/2024/07/HIT_AZUL_INTER2-1-e1722383211957.jpg" />
                        <CategoryCard cardName="Cascos de seguridad" imageUrls="https://igaproductos.com.mx/wp-content/uploads/2024/07/HIT_AZUL_INTER2-1-e1722383211957.jpg" />
                    </div> */}

                    <div className="flex justify-center items-center">
                        <Link to="#" className="mt-2 md:mt-5 underline hover:text-blue-700 hover:scale-103 duration-300 ease-in-out">Ver mas categorias ...</Link>
                    </div>
                </div>
                <div className="w-full lg:flex mb-5">
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
                                key={product.id}
                                productName={product.name}
                                category={product.description}
                                price={product.precio}
                                imageUrl={product.image_url}
                                favoriteInitialState={product.favorite}
                                onAddtoFavorites={handleAddToFavorites}
                                isOffer={product.isOffer}
                                offerDiscount={product.offerDiscount}
                            />
                        ))}
                    </div>
                    <Link className="mt-2 md:mt-5 underline hover:text-blue-700 hover:scale-103 duration-300 ease-in-out mb-10" to={"#"}>Ver mas productos...</Link>
                </div>
            </div>
            {/* Alert add product to favorites  */}
            {showFavoriteAlert && (
                <AlertAddtoFav/>
            )}
        </div>
    );
};


export default Home;
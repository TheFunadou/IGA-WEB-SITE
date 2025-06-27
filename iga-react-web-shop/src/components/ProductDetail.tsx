import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useState } from "react";

// Alerts
import AlertAddtoFav from "./AlertAddToFav";

// Test packages
import ProductsData from "../pages/products_example.json"

// Components
import PayDataCard from "./ProductDetailSubComponents/PayDataCard";



const ProductDetail: React.FC= () => {
    // Show alert
    const [showFavoriteAlert, setShowFavoriteAlert] = useState<boolean>(false);

    const handleAddToFavorites = () => {
        setShowFavoriteAlert(true);
        setTimeout(() => setShowFavoriteAlert(false), 3000)
    }


    return (
        <div className="md:p-5">
            <div className="xl:flex">
                <section className="mt-5 xl:mt-0 xl:w-5/6">
                    {/* Main information */}
                    <div className="w-full xl:flex">
                        {/* Images of the product */}
                        <div className="w-full xl:w-1/3 xl:h-120 flex flex-col-reverse xl:flex-row items-center justify-center gap-3">
                            <div className="w-full xl:w-1/4 flex flex-wrap xl:flex-nowrap xl:flex-col gap-2 items-center justify-center">
                                {/* Ilustrative images */}
                                <img className="w-1/8 md:w-1/9 xl:w-1/2 rounded-md" src="https://igaproductos.com.mx/wp-content/uploads/2024/07/hit_intervalo_amarillo-e1722380739491.jpg" alt="" />
                                <img className="w-1/8 md:w-1/9 xl:w-1/2 rounded-md" src="https://igaproductos.com.mx/wp-content/uploads/2024/07/hit_intervalo_amarillo-e1722380739491.jpg" alt="" />
                                <img className="w-1/8 md:w-1/9 xl:w-1/2 rounded-md" src="https://igaproductos.com.mx/wp-content/uploads/2024/07/hit_intervalo_amarillo-e1722380739491.jpg" alt="" />
                                <img className="w-1/8 md:w-1/9 xl:w-1/2 rounded-md" src="https://igaproductos.com.mx/wp-content/uploads/2024/07/hit_intervalo_amarillo-e1722380739491.jpg" alt="" />
                                <img className="w-1/8 md:w-1/9 xl:w-1/2 rounded-md" src="https://igaproductos.com.mx/wp-content/uploads/2024/07/hit_intervalo_amarillo-e1722380739491.jpg" alt="" />
                                <img className="w-1/8 md:w-1/9 xl:w-1/2 rounded-md" src="https://igaproductos.com.mx/wp-content/uploads/2024/07/hit_intervalo_amarillo-e1722380739491.jpg" alt="" />
                                <img className="w-1/8 md:w-1/9 xl:w-1/2 rounded-md" src="https://igaproductos.com.mx/wp-content/uploads/2024/07/hit_intervalo_amarillo-e1722380739491.jpg" alt="" />
                                <img className="w-1/8 md:w-1/9 xl:w-1/2 rounded-md" src="https://igaproductos.com.mx/wp-content/uploads/2024/07/hit_intervalo_amarillo-e1722380739491.jpg" alt="" />
                            </div>
                            {/* Main image of the product */}
                            <div className="w-3/4 md:w-1/2 xl:w-3/4 flex justify-center items-center bg-white rounded-lg p-5">
                                <img className="rounded-md" src="https://igaproductos.com.mx/wp-content/uploads/2024/07/hit_intervalo_amarillo-e1722380739491.jpg" alt="" />
                            </div>
                        </div>
                        <div className="w-full xl:w-3/4 px-5 xl:px-10">
                            {/* Product name */}
                            <p className="font-extrabold text-2xl xl:text-4xl py-4">CASCO DE SEGURIDAD INDUSTRIAL DIELECTRICO</p>
                            {/* Product SKU */}
                            <p className="font-bold pb-2 text-xl">SKU: 123123</p>
                            {/* Product status */}
                            <p className="font-semibold pb-2 text-green-500">Disponible</p>
                            {/* Static content */}
                            <div className="flex justify-center items-center border-t-1 border-b-1 border-gray-300 py-5">
                                <div className="w-1/4 flex flex-col items-center">
                                    <img
                                        src="https://igaproductos.com.mx/wp-content/themes/igaproductos/images/bene1.png"
                                        alt=".."
                                        className="w-1/3"
                                    />
                                    <p className="text-center text-gray-400 text-xs xl:text-base">Pago seguro</p>
                                </div>
                                <div className="w-1/4 flex flex-col items-center">
                                    <img
                                        src="https://igaproductos.com.mx/wp-content/themes/igaproductos/images/bene2.png"
                                        alt=".."
                                        className="w-1/3"
                                    />
                                    <p className="text-center text-gray-400 text-xs xl:text-base">Entrega segura</p>
                                </div>
                                <div className="w-1/4 flex flex-col items-center">
                                    <img
                                        src="https://igaproductos.com.mx/wp-content/themes/igaproductos/images/bene3.png"
                                        alt=".."
                                        className="w-1/3"
                                    />
                                    <p className="text-center text-gray-400 text-xs xl:text-base">Compra segura</p>
                                </div>
                                <div className="w-1/4 flex flex-col items-center">
                                    <img
                                        src="https://igaproductos.com.mx/wp-content/themes/igaproductos/images/bene4.png"
                                        alt=".."
                                        className="w-1/3"
                                    />
                                    <p className="text-center text-gray-400 text-xs xl:text-base">Protección en tus compras</p>
                                </div>
                            </div>
                            <div className=" border-b-1 border-gray-300 py-5">
                                <div className="flex justify-between">
                                    {/* Atributes of the product */}
                                    <div className="flex flex-col gap-3 text-sm xl:text-base">
                                        <p>Tipo</p>
                                        <p>Ajuste</p>
                                        <p>Clase</p>
                                    </div>
                                    {/* Show technical sheet */}
                                    <p className="underline text-blue-500 font-bold text-sm xl:text-base">Ver ficha tecnica</p>
                                </div>
                            </div>
                            <div className="py-5">
                                {/* Color lines */}
                                <p className="mb-2">Linea de color</p>
                                <select className="select">
                                    <option disabled={true} hidden >Selecciona linea de color</option>
                                    <option>Basica</option>
                                    <option>Fluorescente</option>
                                    <option>Especial</option>
                                </select>
                                {/* Select color */}
                                <p className="mt-5 mb-2 ">Seleccionar color</p>
                                <div className="flex gap-5">
                                    <button className="w-1/30 p-1 rounded-full bg-blue-500 cursor-pointer text-transparent">1</button>
                                    <button className="w-1/30 p-1 rounded-full bg-blue-500 cursor-pointer text-transparent">1</button>
                                    <button className="w-1/30 p-1 rounded-full bg-blue-500 cursor-pointer text-transparent">1</button>
                                    <button className="w-1/30 p-1 rounded-full bg-blue-500 cursor-pointer text-transparent">1</button>
                                </div>
                            </div>
                            <div className="xl:hidden">
                                {/* Section of data pay for mobiles */}
                                <PayDataCard />
                            </div>
                            {/* Product description */}
                            <div className="w-full border-t-1 border-gray-300 py-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nobis id accusantium optio veritatis placeat. Sapiente totam ex corporis alias iste, ullam reiciendis nemo. Ipsa asperiores deserunt eaque dolore vel.
                                Aperiam magni necessitatibus itaque laborum impedit animi repellat voluptatibus commodi. Deleniti, maxime unde tempora quo sunt dolore nulla asperiores beatae minus fuga voluptatibus amet fugit! Iure nesciunt aut nemo. Nemo.
                                Sit, in omnis. Numquam natus nemo ea officia fugiat ipsam reprehenderit voluptatibus nostrum recusandae corrupti, eius quam qui accusantium eligendi atque nam. Maxime vero, commodi tempora esse accusantium dolorem libero?
                                Dolorum beatae quisquam modi nemo dignissimos impedit necessitatibus quidem natus culpa? Laborum cum quis hic placeat rerum quisquam nisi omnis illo eveniet, optio vero perferendis error illum iusto enim dicta.
                                Minus repellendus laborum eligendi aliquam tempore harum sequi mollitia nihil, officiis nobis explicabo officia distinctio id modi quaerat quos nostrum quam accusantium eveniet ipsam aspernatur fugiat exercitationem culpa hic. Iste?
                                Molestiae quidem aliquam mollitia hic laborum at facilis cum deleniti amet itaque veritatis eligendi cupiditate ducimus vel quod impedit nulla eum enim iste, optio neque. Nam quos earum atque labore.
                                Illo ducimus molestiae beatae dolorum quo cupiditate voluptatibus fugiat, sed delectus ratione provident libero cum ipsa ipsum excepturi, eius minus. Magni expedita laboriosam accusamus laborum aut delectus vero repudiandae sapiente.
                                Sequi molestias enim dolorem unde iste officiis nulla laboriosam quis accusamus recusandae voluptatibus nemo quas facere repudiandae minus incidunt modi, porro aliquam officia alias dolores fugiat. Amet, ullam? Dicta, incidunt?
                                Ut impedit, odit quos magni exercitationem expedita voluptate tempora ratione aut laboriosam sunt officia minima excepturi animi cum quasi dolores maxime quae unde, repudiandae praesentium ducimus quidem hic. Quisquam, hic!
                                Debitis modi iure beatae recusandae corrupti earum, expedita sunt molestias officia, exercitationem dolores eaque. Asperiores sed explicabo ex, earum reprehenderit omnis! Cumque provident aut blanditiis ex hic officia nam minus!
                            </div>
                        </div>
                    </div>
                    {/* Especifications of product */}
                    <div className="w-full xl:flex">
                        <div className="w-full px-3 xl:px-0 xl:w-3/4 flex flex-col gap-5">
                            <div className="w-full xl:w-9/10  collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title font-semibold">Especificaciones</div>
                                <div className="collapse-content text-sm">
                                    Click the "Sign Up" button in the top right corner and follow the registration process.
                                </div>
                            </div>
                            <div className="w-full xl:w-9/10  collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title font-semibold">Recomendaciones de uso</div>
                                <div className="collapse-content text-sm">
                                    Click on "Forgot Password" on the login page and follow the instructions sent to your email.
                                </div>
                            </div>
                            <div className="w-full xl:w-9/10  collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title font-semibold">Aplicaciones</div>
                                <div className="collapse-content text-sm">
                                    Go to "My Account" settings and select "Edit Profile" to make changes.
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-5 xl:px-0 mt-5 xl:mt-0 xl:w-1/4">
                            <p className="font-bold mb-4">Cumple con las normas</p>
                            <ol className="flex flex-col gap-2 list-disc">
                                <li>1</li>
                                <li>1</li>
                                <li>1</li>
                            </ol>
                        </div>
                    </div>
                </section>
                <section className="hidden xl:block w-full xl:w-1/6">
                    {/* Section of pay for webs*/}
                    <PayDataCard />
                </section >
            </div>
            <div className="mt-10">
                <h1 className="text-3xl font-bold mb-5">Otros productos</h1>
                <div className="flex flex-col justify-center items-center">
                    {/* Product cards list */}
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
            {showFavoriteAlert && (
                <AlertAddtoFav />
            )}
        </div>
    );
};

export default ProductDetail;
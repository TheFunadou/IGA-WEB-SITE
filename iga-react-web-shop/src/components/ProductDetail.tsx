// React router
import { Link } from "react-router-dom";

// Components
import ProductCard from "./ProductCard";

// Test packages
import ProductsData from "../pages/products_example.json"

// Components
import PayDataCard from "./ProductDetailSubComponents/PayDataCard";
import { useEffect, useState } from "react";
import ProductVersionCard from "./ProductDetailSubComponents/ProductVersionCard";
import ImageMagnifier from "./ImageMagnifier/ImageMagnifier";

// Type
import type { ProductData } from "../api/ProductDetail/GetProduct";

// API
import { getProductDetailData } from "../api/ProductDetail/GetProduct";

// Utilities
import clsx from "clsx";


const ProductDetail: React.FC = () => {

    const [productData, setProductData] = useState<ProductData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [currentImg, setCurrentImg] = useState<string | undefined>(undefined);

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                setLoading(true);
                setError(null);

                // Fetch to api
                const response = await getProductDetailData();
                setProductData(response);

                // Get the main image of the product and setCurrentImg with it
                const mainImg = response.images.find(img => img.main_image === true);
                setCurrentImg(mainImg?.image_url);
            } catch (err) {
                setError("Error al cargar los datos del producto.");
                console.error("Error fetching product data:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchProductData();
    }, []);

    if (loading) {
        return (
            <div className="h-110 lg:h-180 flex flex-col items-center justify-center px-5">
                <div className="skeleton px-5 py-10  lg:w-200 lg:h-100 bg-blue-950 flex items-center justify-center flex-col">
                    <img className="" src="https://igaproductos.com.mx/wp-content/themes/igaproductos/images/igaproductos.png" alt="Logo iga productos" />
                    <h1 className="text-2xl lg:text-4xl mt-10 text-white">Cargando <span className="loading loading-dots loading-xl"></span>
                    </h1>
                </div>
            </div>
        );
    };

    if (error) {
        return <div className="font-bold">Error: {error}</div>
    }

    if (!productData) {
        return <div>No se encontraron datos del producto</div>;
    }

    const { sku, color_line, color_name, color_code, status, stock, unit_price, favorite, description, product, images } = productData;
    const categortyParts = product.category.split(",").map(part => part.trim());
    const certificationsParts = product.certifications_desc.split(",").map(part => part.trim());

    return (
        <div className="md:p-5">
            <div className="xl:flex mt-4">
                <section className="mt-5 xl:mt-0 xl:w-5/6">
                    {/* Main information */}
                    <div className="w-full xl:flex">
                        <div className="w-full xl:w-1/4 px-5 lg:px-2">
                            <figure>
                                {/* Current Image */}
                                <ImageMagnifier src={currentImg} widthClass="w-full" imageStyle="rounded-md border border-gray-300"/>
                                <br />
                            </figure>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {/* More images of the product */}
                                {images.map(images =>
                                    <img
                                    key={images.id}
                                    className={clsx(
                                        "w-1/6 rounded-md",
                                        currentImg === images.image_url ? ("border-2 border-blue-500"):("border border-gray-300")
                                    )}
                                    src={images.image_url}
                                    alt={`${images.id}`}
                                    onClick={() => setCurrentImg(images.image_url)}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="w-full xl:w-3/4 px-5 xl:px-10">
                            {/* Product name */}
                            <p className="font-extrabold text-2xl xl:text-4xl pb-4 mt-5 lg:mt-0 lg:pt-0">{product.product_name}</p>
                            {/* Product SKU */}
                            <p className="font-bold pb-2 text-2xl">SKU: {sku}</p>
                            {/* Product status */}
                            <p className="font-semibold pb-2 text-green-500">{status}</p>
                            <div className=" border-b-1 border-gray-300 py-5 border-t-1">
                                <div className="flex justify-between">
                                    {/* Atributes of the product */}
                                    <div className="flex flex-col gap-1 text-sm xl:text-base">
                                        {categortyParts.map((part, index) => (
                                            <p key={index} className="block text-xl">{part}</p>
                                        ))}
                                    </div>
                                    {/* Show technical sheet */}
                                    <a href={product.technical_sheet_url} target="_blank" className="underline text-blue-500 font-bold text-sm xl:text-base">Ver ficha tecnica</a>
                                </div>
                            </div>
                            <div className="py-5">
                                {/* Select color line */}
                                <p className="mb-2">Linea de color</p>
                                <select className="select">
                                    <option disabled={true} hidden >Selecciona linea de color</option>
                                    <option>Basica</option>
                                    <option>Fluorescente</option>
                                    <option>Especial</option>
                                </select>
                                <div className="mt-5 flex gap-5 flex-wrap">
                                    {/* Versions of the product */}
                                    <ProductVersionCard versionImage="https://igaproductos.com.mx/wp-content/uploads/2024/07/hit_intervalo_amarillo-e1722380739491.jpg" versionPrice={204.00} versionLink="#" />
                                    <ProductVersionCard versionImage="https://igaproductos.com.mx/wp-content/uploads/2024/07/hit_intervalo_amarillo-e1722380739491.jpg" versionPrice={204.00} versionLink="#" />
                                    <ProductVersionCard versionImage="https://igaproductos.com.mx/wp-content/uploads/2024/07/hit_intervalo_amarillo-e1722380739491.jpg" versionPrice={204.00} versionLink="#" />
                                    <ProductVersionCard versionImage="https://igaproductos.com.mx/wp-content/uploads/2024/07/hit_intervalo_amarillo-e1722380739491.jpg" versionPrice={204.00} versionLink="#" />
                                    <ProductVersionCard versionImage="https://igaproductos.com.mx/wp-content/uploads/2024/07/hit_intervalo_amarillo-e1722380739491.jpg" versionPrice={204.00} versionLink="#" />

                                </div>
                            </div>
                            <div className="xl:hidden">
                                {/* Section of data pay for mobiles */}
                                <PayDataCard stock={stock} unitPrice={unit_price} />
                            </div>
                            {/* Product description */}
                            <div className="w-full lg:border-t-1 lg:border-gray-300 py-5">{description}</div>
                        </div>
                    </div>
                    {/* Especifications of product */}
                    <div className="w-full xl:flex mt-5">
                        <div className="w-full px-3 xl:px-0 xl:w-3/4 flex flex-col gap-5">
                            <div className="w-full xl:w-9/10  collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title font-semibold">Especificaciones</div>
                                <div className="collapse-content text-sm">{product.specs}</div>
                            </div>
                            <div className="w-full xl:w-9/10  collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title font-semibold">Recomendaciones de uso</div>
                                <div className="collapse-content text-sm">{product.recomendations}</div>
                            </div>
                            <div className="w-full xl:w-9/10  collapse collapse-arrow bg-base-100 border border-base-300">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title font-semibold">Aplicaciones</div>
                                <div className="collapse-content text-sm">{product.applications}</div>
                            </div>
                        </div>
                        {/* Certifications description */}
                        <div className="w-full px-5 xl:px-0 mt-5 xl:mt-0 xl:w-1/4">
                            <p className="font-bold mb-4">Cumple con las normas</p>
                            <ol className="flex flex-col gap-2 list-disc">
                                {certificationsParts.map((part, index) => (
                                    <li key={index} className="font-bold ">{part}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </section>
                <section className="hidden xl:block w-full xl:w-1/6">
                    {/* Section of pay for webs*/}
                    <PayDataCard stock={stock} unitPrice={unit_price} />
                </section >
            </div>
            <div className="mt-10">
                <h1 className="text-3xl font-bold mb-5">Otros productos</h1>
                <div className="flex flex-col justify-center items-center">
                    {/* Product cards list */}
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

export default ProductDetail;
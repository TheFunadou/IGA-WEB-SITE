// Hooks
import { useState } from "react";

// React router
import { Link } from "react-router-dom";


//Context
import { useAppContext } from "../../context/AppContext";


export type ProductCardProps = {
    sku: number;
    productName: string;
    categories: string;
    unitPrice: number;
    imageUrl: string;
    favorite: boolean;
    isOffer: boolean;
    offerDiscount?: number;
    productCardClassName?: string;
}


const ProductCardMainVersion: React.FC<ProductCardProps> = ({ sku, productName, categories, unitPrice, imageUrl, favorite, isOffer, offerDiscount, productCardClassName }) => {

    // Split the categories in three strings
    const categoriesParts = categories.split(",").map(part => part.trim());

    // isFavorite is initialized with the value of "favorite" prop
    const [isFavorite, setIsFavorite] = useState<boolean>(favorite);

    // Get the functions for show alert, and addToCart
    const { triggerAlert, addToCart } = useAppContext();

    // Set favorite
    const toggleFavorite = () => {
        console.log("click a favortio")
        console.log(isFavorite);
        const newState = !isFavorite;
        setIsFavorite(newState);

        if (newState) {
            triggerAlert("favorite")
        }
    };

    // Add this product to shopping cart
    const handleAddtoCart = () => {
        addToCart({
            sku,
            productName,
            category: categories,
            unit_price: unitPrice,
            quantity: 1,
            imageUrl,
            favorite: isFavorite,
            isChecked: true
        });
    };

    const handleBuyNow = () =>{
        
    }

    return (
        // w-1/2 sm:w-1/4 xl:w-1/6
        <div className={`${productCardClassName} sm:rounded-xl  bg-white shadow-xl flex flex-col hover:scale-103 duration-300 ease-in-out`}>
            <Link to={"#"}>
                <div className="flex justify-center items-center w-full px-4 pt-4 xl:px-6 xl:pt-6 relative">
                    <img src={imageUrl} alt={productName} className="aspect-square object-center rounded-xl mb-4" />
                    {/* Check if the product is on sale and take action if it is true */}
                    {isOffer ? (
                        <i className="bi bi-fire text-red-400 text-4xl absolute left-4 top-4"></i>
                    ) : (null)}
                    <button onClick={toggleFavorite}>
                        {isFavorite ? (
                            <i className="bi bi-heart-fill text-blue-500 text-2xl absolute right-3 bottom-3 duration-150 ease-in cursor-pointer"></i>
                        ) : (
                            <i className="bi bi-heart text-2xl absolute right-3 bottom-3 duration-150 ease-in-out cursor-pointer"></i>
                        )}
                    </button>
                </div>
                <div className=" w-full flex flex-col items-start justify-start px-4 pt-4 xl:px-6 xl:pt-6">
                    <div className="w-full h-25 md:h-20 xl:h-25">
                        {/* Contains the product name */}
                        <h2 className="text-sm md:text-base mb-2 font-bold">{productName}</h2>
                    </div>
                    <div className="w-full md:h-20">
                        {/* Display the subcategories of the product */}
                        <p className="text-gray-600 text-sm xl:text-base">
                            {categoriesParts.map((part, index) => (
                                <span key={index} className="block">{part}</span>
                            ))}
                        </p>
                    </div>
                    {/* If the product is on sale and has a discount, this do actions for display the price data */}
                    {offerDiscount ? (
                        <div className="flex flex-col justify-end h-15 mt-2 md:mt-0">
                            <p className="text-gray-400 line-through mr-2 text-base md:text-sm">${unitPrice.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                            <p className="text-green-500 font-bold text-2xl">${(unitPrice - ((offerDiscount * unitPrice) / 100)).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                        </div>
                    ) : (
                        <div className="h-15 mt-2 md:mt-0 flex items-end justify-center">
                            <p className="font-bold text-2xl flex items-end">${unitPrice.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                        </div>
                    )}
                    <button className="btn bg-blue-950 text-white w-full mt-2" onClick={handleAddtoCart}>Añadir al carrito</button>
                    <button className="btn bg-blue-500 text-white w-full mt-2 mb-5" onClick={() => console.log()}>Comprar ahora</button>
                </div>
            </Link>

        </div>
    );
}

export default ProductCardMainVersion;
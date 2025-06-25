import { useState } from "react";
import { Link } from "react-router-dom";

type Props = {
    productName: string;
    category: string;
    // The sign "?" indicates that this property is optional
    price: number;
    imageUrl: string;
    favoriteInitialState?: boolean;
    addToCart?: () => void;
    onAddtoFavorites?: () => void;
    isOffer?: boolean;
    offerDiscount?: number;
}


const ProductCard: React.FC<Props> = ({ productName, category, price, imageUrl, favoriteInitialState = false, isOffer, offerDiscount, addToCart, onAddtoFavorites }) => {
    const parts = category.split(",").map(part => part.trim());

    const [favorite, setFavorite] = useState<boolean>(favoriteInitialState);

    const toggleFavorite = () => {
        const newState = !favorite;
        setFavorite(newState);
        
        if(newState){
            onAddtoFavorites?.();
        }
    };


    return (
        <div className="w-1/2 sm:w-1/4 xl:w-1/6 sm:rounded-xl  bg-white shadow-xl flex flex-col hover:scale-103 duration-300 ease-in-out">
            <Link to={"#"}>
                <div className=" flex justify-center items-center w-full pr-4 pl-4 pt-4 xl:pr-6 xl:pl-6 xl:pt-6 relative">
                    <img src={imageUrl} alt={productName} className="aspect-square object-center rounded-xl mb-4" />
                    {/* Check if the product is on sale and take action if it is true */}
                    {isOffer ? (
                        <i className="bi bi-fire text-red-400 text-4xl absolute left-4 top-4"></i>
                    ) : (null)}
                    <button onClick={toggleFavorite}>
                        {favorite ? (
                            <i className="bi bi-heart-fill text-blue-500 text-2xl absolute right-3 bottom-3 duration-150 ease-in"></i>
                        ) : (
                            <i className="bi bi-heart text-2xl absolute right-3 bottom-3 duration-150 ease-in-out"></i>
                        )}
                    </button>
                </div>
                <div className=" w-full flex flex-col items-start justify-start pr-4 pl-4 pt-4 xl:pr-6 xl:pl-6 xl:pt-6 pb-15">
                    <div className="w-full h-25 md:h-20 xl:h-25">
                        {/* Contains the product name */}
                        <h2 className="text-sm md:text-base mb-2 font-bold">{productName}</h2>
                    </div>
                    <div className="w-full md:h-20">
                        {/* Display the subcategories of the product */}
                        <p className="text-gray-600 text-sm xl:text-base">
                            {parts.map((part, index) => (
                                <span key={index} className="block">{part}</span>
                            ))}
                        </p>
                    </div>
                    {/* If the product is on sale and has a discount, this do actions for display the price data */}
                    {offerDiscount ? (
                        <div className="flex flex-col justify-end h-15 mt-2 md:mt-0">
                            <p className="text-gray-400 line-through mr-2 text-base md:text-sm">${price.toFixed(2)}</p>
                            <p className="text-green-500 font-bold text-2xl xl:text-2xl">${(price - ((offerDiscount * price) / 100)).toFixed(2)}</p>
                        </div>
                    ) : (
                        <div className="h-15 mt-2 md:mt-0 flex items-end justify-center">
                            <p className="font-bold text-2xl xl:text-2xl flex items-end">${price.toFixed(2)}</p>
                        </div>
                    )}
                    <button className="bg-[#054274] mt-2 p-2 text-xs xl:text-base rounded-md text-white font-bold hover:scale-110 duration-300 ease-in-out cursor-pointer" onClick={addToCart}>Añadir al carrito</button>
                </div>
            </Link>

        </div>
    );
};

export default ProductCard;
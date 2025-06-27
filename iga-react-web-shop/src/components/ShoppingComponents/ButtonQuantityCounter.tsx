// Hooks
import { useState } from "react";

type Props = {
    initalQuantity:number;
    style?:string
}

const ButtonQuantityCounter: React.FC<Props> = ({initalQuantity,style}) => {
    const [productQuantity, setProductQuantity] = useState<number>(initalQuantity);

    const increaseProduct = () => {
        setProductQuantity((prev) => prev + 1);
    };

    const decreaseProduct = () => {
        setProductQuantity((prev) => prev - 1);
    };

    return (
        <div className={`bg-blue-500 py-1 rounded-md flex justify-center gap-5 ${style}`}>
            <button onClick={decreaseProduct} disabled={productQuantity === 1}>
                <i className="bi bi-dash text-white text-xl"></i>
            </button>
            <p className="font-bold text-white">{productQuantity}</p>
            <button onClick={increaseProduct}>
                <i className="bi bi-plus text-white text-xl"></i>
            </button>
        </div>
    );
};

export default ButtonQuantityCounter;
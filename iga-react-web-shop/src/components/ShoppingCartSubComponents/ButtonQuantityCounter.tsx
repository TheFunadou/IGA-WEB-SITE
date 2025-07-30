// Hooks
import { useState } from "react";

type Props = {
    initialQuantity:number;
    style?:string;
    onQuantityChange:(newQuantity:number) => void;
    disabledState?:boolean;
}

const ButtonQuantityCounter: React.FC<Props> = ({initialQuantity,style,onQuantityChange,disabledState}) => {
    const [productQuantity, setProductQuantity] = useState<number>(initialQuantity);

    const increaseProduct = () => {
        setProductQuantity((prev) => {
            const newQty = prev +1;
            onQuantityChange(newQty);
            return newQty;
        });
    };

    const decreaseProduct = () => {
        setProductQuantity((prev) => {
            const newQty = prev -1;
            onQuantityChange(newQty);
            return newQty;
        });
    };

    return (
        <div className={`bg-blue-500 py-1 rounded-md flex justify-center gap-5 ${style}`}>
            <button
            onClick={decreaseProduct}
            disabled={(productQuantity === 1)}
            className="cursor-pointer"
            >
                <i className="bi bi-dash text-white text-xl"></i>
            </button>
            <p className="font-bold text-white">{productQuantity}</p>
            <button
            onClick={increaseProduct}
            className="cursor-pointer">
                <i className="bi bi-plus text-white text-xl"></i>
            </button>
        </div>
    );
};

export default ButtonQuantityCounter;
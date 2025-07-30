// React Router
import { Link } from "react-router-dom";

const AlertAddToCart: React.FC = () => {
    return (
        <div>
            <div>
                <Link to="/carrito-de-compras">
                    <div role="alert" className="alert border-none bg-blue-950 shadow-lg toast toast-bottom toast-center duration-130 ease-in-out text-white">
                        <div>
                            <p className="text-lg font-bold">Producto añadido al carrito</p>
                            <p className="underline">Ver el carrito ahora</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default AlertAddToCart;
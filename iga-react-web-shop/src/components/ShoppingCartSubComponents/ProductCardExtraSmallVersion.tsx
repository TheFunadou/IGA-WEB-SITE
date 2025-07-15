// React Router
import { Link } from "react-router-dom";

type Props = {
    style?: string;
}

const ProductCardExtraSmallVersion: React.FC<Props> = (style) => {
    return (
        <div>
            <Link to="">
                <div className={`flex bg-white rounded-lg p-3 hover:scale-105 duration-110 ${style} `}>
                    <div className="w-1/3">
                        <img className="w-full rounded-md" src="https://igaproductos.com.mx/wp-content/uploads/2024/07/hit_intervalo_amarillo-e1722380739491.jpg" alt="" />
                    </div>
                    <div className="w-2/3 pl-1">
                        <p className="text-sm">IGA CASCOS DE SEGURIDAD DIELECTRICO</p>
                        <p className="text-sm">Ala completa,Ajuste de matraca,Clase "G"</p>
                        <p className="font-bold text-xl">$209.00</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCardExtraSmallVersion;
// React Router
import { Link } from "react-router-dom";


type Props = {
    versionLink: string;
    versionImage: string;
    versionPrice: number;
}

const ProductVersionCard: React.FC<Props> = ({ versionLink, versionImage, versionPrice }) => {
    return (
        <div className="w-1/5 lg:w-1/11">
            <Link to={versionLink} className="cursor pointer">
                <div className="border-2 border-gray-300 rounded-lg hover:scale-105 duration-115 ease-in-out">
                    <figure className="w-full">
                        <img className="w-full border-b-1 border-gray-300 rounded-t-lg" src={versionImage} alt="..." />
                    </figure>
                    <div className="py-4 px-1 flex items-center justify-center text-center bg-white rounded-b-lg">
                        <p className="font-bold text-xs lg:text-base">${versionPrice.toLocaleString('es-MX',{minimumFractionDigits:2,maximumFractionDigits:2})}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductVersionCard;
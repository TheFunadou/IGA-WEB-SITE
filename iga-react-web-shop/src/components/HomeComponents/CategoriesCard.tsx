// React Router
import { Link } from "react-router-dom";

type Prop = {
    styleClassName: string;
}


const CategoriesCard: React.FC<Prop> = ({styleClassName}) => {

    const imgCasco = "https://igaproductos.com.mx/wp-content/uploads/2024/07/HIT_AZUL_INTER2-1-e1722383211957.jpg";

    return (
        <div className={` ${styleClassName} bg-white md:border-none md:rounded-md p-4`}>
            <p className="font-bold text-base lg:text-xl mb-2">Cascos de seguridad</p>
            <div className="grid grid-cols-2 grid-rows-2 gap-2">
                <Link to={""}><img className="w-30" src={imgCasco} alt="" /></Link>
                <Link to={""}><img className="w-30" src={imgCasco} alt="" /></Link>
                <Link to={""}><img className="w-30" src={imgCasco} alt="" /></Link>
                <Link to={""}><img className="w-30" src={imgCasco} alt="" /></Link>
            </div>
            <p className="underline hover:text-blue-500 mt-2 duration-110">Ver mas...</p>
        </div>
    );
}

export default CategoriesCard;
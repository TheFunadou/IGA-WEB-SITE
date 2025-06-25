import { Link } from "react-router-dom";

type Props = {
    cardName: string;
    imageUrls: string;
}

const CategoryCard: React.FC<Props> = ({ cardName, imageUrls }) => {
    return (
        <div className="flex flex-col p-2 lg:p-4 rounded-md shadow-lg hover:scale-103 duration-300 ease-in-out bg-white">
            <div>
                <p className="mb-2 font-bold">{cardName}</p>
            </div>
            <div className="flex sm:grid sm:grid-cols-2 sm:grid-rows-2 gap-2">
               <Link to={"#"}><img className="w-25 m-1" src={imageUrls} alt="..." /></Link>
               <Link to={"#"}><img className="w-25 m-1" src={imageUrls} alt="..." /></Link>
               <Link to={"#"}><img className="w-25 m-1" src={imageUrls} alt="..." /></Link>
               <Link to={"#"}><img className="w-25 m-1" src={imageUrls} alt="..." /></Link>
            </div>
            <Link className="underline hover:text-blue-700" to={"#"}>Ver mas...</Link>
        </div>
    );
};

export default CategoryCard;
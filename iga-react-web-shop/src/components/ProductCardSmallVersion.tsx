type Props = {
    widthClassName:string;
}


const ProductCardSmallVersion: React.FC<Props> = ({widthClassName}) => {
    return (
        <div className={`${widthClassName} shadow-sm px-2 lg:py-4 flex flex-row lg:flex-col hover:scale-105 duration-110 ease-in-out rounded-lg`}>
                <figure className="w-1/3 lg:w-full flex justify-center items-center">
                    <img
                        src="https://igaproductos.com.mx/wp-content/uploads/2024/07/hit_intervalo_amarillo-e1722380739491.jpg"
                        alt="Shoes" />
                </figure>
                <div className="lg:card-body p-2 lg:p-0 w-2/3 lg:w-full">
                    <h2 className="card-title text-sm lg:text-base text-start mt-2">IGA CASCO DE SEGURIDAD INDUSTRIAL</h2>
                    <p className="text-sm">Ala completa, Ajuste de matraca, Clase "G"</p>
                    <div className="card-actions justify-start mt-3 lg:mt-0">
                        <button className="bg-blue-500 p-2 text-white font-bold rounded-md">Agregar al carrito</button>
                    </div>
                </div>
            </div>
    );
};

export default ProductCardSmallVersion;
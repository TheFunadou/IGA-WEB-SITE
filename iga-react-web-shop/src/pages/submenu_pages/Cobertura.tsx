
const Cobertura: React.FC = () => {
    return (
        <div>
            <div className="w-full p-10 md:p-25 bg-[url('https://igaproductos.com.mx/wp-content/uploads/2023/12/cobetura.jpg')] bg-cover">
                <div className="xl:w-1/2 flex flex-col gap-5 text-white text-justify md:text-xl">
                    <p className="text-2xl text-center md:text-justify md:text-3xl"><strong>Cobertura</strong></p>
                    <p>Queremos formar parte de tu crecimiento y de tu negocio. Contacta al representante de ventas de tu zona y conoce los beneficios que IGA® Productos que tenemos para ti.</p>
                    <p>Como parte de nuestro servicio y para tu comodidad, realizamos envíos a cualquier parte de la república mexicana.</p>
                    <p>¿Lo sabías? Nuestro red comercial ha traspasado nuestras fronteras, con presencia de nuestros clientes y cascos a nivel internacional en la industria petrolera, manufacturera y de la construcción, entre otras.</p>
                    <p>¡Contáctanos y forma parte de la red IGA® Productos!</p>
                </div>
            </div>
            <div className="w-full flex flex-col gap-5 items-center justify-center mt-5 p-5 md:p-0">
                <p className="text-2xl md:text-4xl text-center"><strong>Unete a nuestra red de distribuidores!</strong></p>
                <div className="md:3/4 xl:w-1/2 flex md:items-center justify-center">
                    <div className="text-center border-r-1 border-gray-300 p-2 md:p-10">
                        <p className="text-xl md:text-3xl"><strong>Todo México</strong></p>
                        <br />
                        <p className="text-lg md:text-xl">Zona Norte | Bajio | Centro | Sureste | Sur</p>
                    </div>
                    <div className="text-center p-2 md:p-10">
                        <p className="text-xl md:text-3xl"><strong>Centroamérica</strong></p>
                        <br />
                        <p className="text-lg md:text-xl">Guatemala | Honduras | El Salvador | Nicaragua</p>
                    </div>
                </div>
                <div className="md:w-3/4">
                    <img className="w-full" src="https://igaproductos.com.mx/wp-content/themes/igaproductos/images/cobertura_nacional_centroamerica.png" alt="Red de distribución" />
                </div>
            </div>
        </div>
    );
}

export default Cobertura;

const Distribuidores: React.FC = () => {
    return (
        <div>
            <div className="w-full p-10 md:p-25 bg-[url('https://igaproductos.com.mx/wp-content/uploads/2023/12/distribuidores-1.jpg')] bg-cover bg-center xl:bg-right">
                <div className="xl:w-1/2 flex flex-col gap-5 text-white text-justify md:text-xl">
                    <p className="text-2xl text-center md:text-justify md:text-3xl"><strong>Distribuidores</strong></p>
                    <p>Conviertete en distribuidor autorizado de IGA Productos y accede a los multiples beneficios que tenemos para ti!.</p>
                    <p>Conoce los beneficios enviandonos un correo a <span className="underline text-blue-500">atencionacliente@igaproductos.com.mx</span> y forma parte de nuestra familia.</p>
                    <p>¡Contáctanos y forma parte de la red IGA® Productos!</p>
                </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center mt-5 p-5 md:p-0 mb-10">
                <p className="text-2xl font-bold mb-5 text-center">Conoce a los distribuidores que confian en nosotros!</p>
                <div className="w-full md:w-3/4 flex xl:pl-35 flex-wrap gap-4 items-center justify-center xl:justify-start">
                    <img className="rounded-xl w-1/3 md:w-1/4 xl:w-1/6" src="https://igaproductos.com.mx/wp-content/themes/igaproductos/images/distribuidor/distribuidor_1.jpg" alt="Myers logo" />
                    <img className="rounded-xl w-1/3 md:w-1/4 xl:w-1/6" src="https://igaproductos.com.mx/wp-content/themes/igaproductos/images/distribuidor/distribuidor_2.jpg" alt="Priosa logo" />
                    <img className="rounded-xl w-1/3 md:w-1/4 xl:w-1/6" src="https://igaproductos.com.mx/wp-content/themes/igaproductos/images/distribuidor/distribuidor_3.jpg" alt="Contenedores y señalamientos medina logo" />
                    <img className="rounded-xl w-1/3 md:w-1/4 xl:w-1/6" src="https://igaproductos.com.mx/wp-content/themes/igaproductos/images/distribuidor/distribuidor_4.jpg" alt="Vallen logo" />
                    <img className="rounded-xl w-1/3 md:w-1/4 xl:w-1/6" src="https://igaproductos.com.mx/wp-content/themes/igaproductos/images/distribuidor/distribuidor_5.jpg" alt="Bime logo" />
                    <img className="rounded-xl w-1/3 md:w-1/4 xl:w-1/6" src="https://igaproductos.com.mx/wp-content/themes/igaproductos/images/distribuidor/distribuidor_6.jpg" alt="SVA logo" />
                    <img className="rounded-xl w-1/3 md:w-1/4 xl:w-1/6" src="https://igaproductos.com.mx/wp-content/themes/igaproductos/images/distribuidor/distribuidor_7.jpg" alt="Ferreshop logo" />
                    <img className="rounded-xl w-1/3 md:w-1/4 xl:w-1/6" src="https://igaproductos.com.mx/wp-content/themes/igaproductos/images/distribuidor/distribuidor_8.jpg" alt="AMarine services logoS" />
                </div>
            </div>
        </div>
    );
}

export default Distribuidores;
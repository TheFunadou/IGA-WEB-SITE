

const Certificaciones: React.FC = () => {
    return(
        <div>
            <div className="w-full bg-[url('https://igaproductos.com.mx/wp-content/uploads/2023/12/bgfondointerno-1.jpg')] bg-cover xl:bg-center xl:h-150 p-10 md:p-25 xl:pt-25 xl:pl-35 xl:pr-50 xl:pb-50 text-white md:text-xl text-justify">
                <div className="xl:w-1/2 flex flex-col gap-5">
                    <img className="md:bg-transparent p-5 rounded-md xl:hidden" src="https://igaproductos.com.mx/wp-content/themes/igaproductos/images/igaproductos.png" alt="Logo IGA Productos" />
                    <p className="text-2xl text-center md:text-justify md:text-3xl"><strong>Certificaciones</strong></p>
                    <p>
                        Plásticos del Golfo-Sur, S.A. de C.V. Es una empresa 100% mexicana, certificada bajo la norma ISO 9001:2015; especializada en la producción, comercialización y distribución de lentes, barboquejos y cascos de seguridad industrial.
                    </p>
                </div>
            </div>
            <div className="w-full xl:p-5 md:mt-15 xl:pl-25 xl:pr-25 flex mt-5 justify-center items-center gap-5">
                <a className="w-1/4 hover:scale-103 ease-in-out duration-300" href="https://igaproductos.com.mx/wp-content/themes/igaproductos/images/certificaciones/1portadaancejpg_P%C3%A1gina_1.jpg" target="_blank">
                    <img src="https://igaproductos.com.mx/wp-content/themes/igaproductos/images/certificaciones/1portadaancejpg_P%C3%A1gina_1.jpg" alt="" />
                </a>
                <a className="w-1/4 hover:scale-103 ease-in-out duration-300" href="https://igaproductos.com.mx/wp-content/themes/igaproductos/images/certificaciones/2portadaance.jpg" target="_blank">
                    <img src="https://igaproductos.com.mx/wp-content/themes/igaproductos/images/certificaciones/2portadaance.jpg" alt="" />
                </a>
                <a className="w-1/4 hover:scale-103 ease-in-out duration-300" href="https://igaproductos.com.mx/wp-content/themes/igaproductos/images/certificaciones/3portadaics_P%C3%A1gina_1.jpg" target="_blank">
                    <img src="https://igaproductos.com.mx/wp-content/themes/igaproductos/images/certificaciones/3portadaics_P%C3%A1gina_1.jpg" alt="" />
                </a>
            </div>
            <p className="text-center font-bold mt-5">Haz clic en alguno de los documentos para visualizarlo.</p>
        </div>
    );
}

export default Certificaciones;
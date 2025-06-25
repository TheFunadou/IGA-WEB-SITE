

const AcercaDeIGA: React.FC = () => {
    return (
        <div>
            <div className="w-full bg-[url('https://igaproductos.com.mx/wp-content/uploads/2023/12/bgfondointerno-1.jpg')] bg-cover xl:bg-center xl:h-150 p-10 md:pt-25 md:pb-25 xl:pt-25 xl:pl-35 xl:pr-50 xl:pb-50 text-white md:text-xl text-justify">
                <div className="xl:w-1/2 flex flex-col gap-5">
                    <img className="md:bg-transparent p-5 rounded-md xl:hidden" src="https://igaproductos.com.mx/wp-content/themes/igaproductos/images/igaproductos.png" alt="Logo IGA Productos" />
                    <p className="text-2xl text-center md:text-justify md:text-3xl"><strong>Acerca de IGA</strong></p>
                    <p>
                        <strong>Plásticos del Golfo-Sur, S.A. de C.V.</strong> Es una empresa 100% mexicana, certificada bajo la norma ISO 9001:2015; especializada en la producción, comercialización y distribución de lentes, barboquejos y cascos de seguridad industrial.
                    </p>

                    <p>
                        Inició sus actividades el 8 de marzo de 1999, en Coatzacoalcos, Veracruz. Como una empresa dedicada a la transformación por inyección de plásticos y su comercialización, cuyo primer proceso fue la fabricación de palillos con hilo dental integrado.
                    </p>
                    <p>
                        En el año 2003 incursionó en el área de seguridad personal, con la producción de dos líneas específicas: cascos y lentes de seguridad, en varios modelos. Los cascos se elaboran y comercializan bajo la marca registrada IGA.
                    </p>

                </div>
            </div>
            <div className="w-full xl:p-5 md:mt-15 xl:pl-25 xl:pr-25">
                <h4 className="text-center text-xl md:text-3xl mb-10 md:mb-0 mt-5"><strong>¿Cuáles son nuestros principios?</strong></h4>
                <div className="w-full flex flex-col gap-5 md:gap-0 md:flex-row md:mt-5">
                    <div className="flex-1 flex flex-col justify-start items-center border-b-1 md:border-b-0 md:border-r-1 border-gray-300 pb-5 md:pb-0 p-5 xl:p-10">
                        <i className="bi bi-bullseye text-6xl md:text-9xl text-blue-900"></i>
                        <p className="font-bold mt-2 md:mt-5 text-2xl">Misión</p>
                        <p className="text-justify mt-2 md:mt-5 md:text-lg">
                            Proporcionar a los clientes productos de protección personal que cumplan con las normas mexicanas para su uso, y procesos de fabricación por inyección; así como la extrusión soplo de envases, brindando asesoramiento de los mismos, manteniendo una rentabilidad creciente y sostenible en los procesos, basados en el Sistema de Gestión de Calidad propiciando la Mejora Continua de los mismos.
                        </p>
                    </div>
                    <div className="flex-1 flex flex-col justify-start items-center border-b-1 md:border-b-0 md:border-r-1 border-gray-300 pb-5 md:pb-0 p-5 xl:p-10">
                        <i className="bi bi-lightbulb-fill text-6xl md:text-9xl text-blue-900"></i>
                        <p className="font-bold mt-2 md:mt-5 text-2xl">Visión</p>
                        <p className="text-justify mt-2 md:mt-5 md:text-lg">
                            Ser una empresa líder en la fabricación y comercialización de equipos de protección personal; desarrollando proyectos innovadores en envases y contenedores que cumplan con normas internacionales que contribuyan con el medio ambiente, a través de productos reciclables y biodegradables.
                        </p>
                    </div>
                    <div className="flex-1 flex flex-col justify-start items-center pb-5 md:pb-0 p-5 xl:p-10">
                        <i className="bi bi-gem text-6xl md:text-9xl text-blue-900"></i>
                        <p className="font-bold mt-2 md:mt-5 text-2xl">Valor</p>
                        <p className="text-justify mt-2 md:mt-5 md:text-lg">
                            Nuestro principal valor como empresa, es proteger nuestros cascos IGA el capital intelectual de tu equipo de trabajo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AcercaDeIGA;
import { Link } from "react-router-dom";

const FooterDirectory: React.FC = () => {
    return (
        <div className="flex flex-col gap-5 p-5 md:p-10 xl:px-100  text-justify">
            <p className="text-3xl font-bold text-start">Directorio del pie de página</p>
            <div>
                <p className="text-xl font-bold">Conocenos</p>
                <ol className="flex flex-col gap-2">
                    <li className="underline text-blue-500 ml-5"><Link to="/acerca-de-iga">Acerca de nosotros</Link></li>
                    <li className="underline text-blue-500 ml-5"><Link to="/contacto">Contacto</Link></li>
                    <li className="underline text-blue-500 ml-5"><Link to="/bolsa-de-trabajo">Bolsa de trabajo</Link></li>
                </ol>
            </div>
            <div>
                <p className="text-xl font-bold">FAQ's</p>
                <ol className="flex flex-col gap-2">
                    <li className="underline text-blue-500 ml-5"><Link to="#">Preguntas frecuentes</Link></li>
                    <li className="underline text-blue-500 ml-5"><a href="mailto:atencionacliente@igaproductos.com.mx">Soporte a compras</a></li>
                </ol>
            </div>
            <div>
                <p className="text-xl font-bold">Legal</p>
                <ol className="flex flex-col gap-2">
                    <li className="underline text-blue-500 ml-5"><Link to="/politica-de-privacidad">Politica de privacidad</Link></li>
                    <li className="underline text-blue-500 ml-5"><Link to="/politica-de-devolucion">Politica de devolución PNC</Link></li>
                    <li className="underline text-blue-500 ml-5"><Link to="/distribuidores">Distribuidores</Link></li>
                </ol>
            </div>
            <div>
                <p className="text-xl font-bold">Soporte</p>
                <ol className="flex flex-col gap-2">
                    <li className="underline text-blue-500 ml-5"><a href="https://api.whatsapp.com/send?phone=529211963246" target="_blank">Contacta a un experto</a></li>
                </ol>
            </div>
        </div>
    );
};

export default FooterDirectory;
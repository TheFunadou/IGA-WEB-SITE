
const PoliticaPrivacidad: React.FC = () => {
    return (
        <div className="flex flex-col gap-5 p-5 md:p-10 xl:px-100  text-justify">
            <title>IGA Productos - Politica de privacidad</title>
            <p className="text-3xl font-bold">Politica de privacidad</p>
            <p>
                Los datos personales que recabamos sobre usted son necesarios para verificar y confirmar su identidad; administrar y comercializar los productos que solicita con nosotros, y para cumplir con las obligaciones derivadas de dicha comercialización, finalidades que son necesarias para el servicio que solicita.
                <br />
                La empresa se compromete a no usar los datos proporcionados con fines lucrativos, de manera adicional, utilizaremos su información personal para informarle sobre nuevas propuestas de comercialización, servicios y promociones.
                <br />
                En los formularios pedimos información como nombre, correo, teléfono, el mensaje o interés, área a la que desea preguntar y si está interesado en una vacante se canaliza con el departamento responsable y cuidamos tu seguridad de la información recibida.
                <br />
                Después de que se recibe la información del formulario, la documentación solo estará disponible al departamento encargado para direccionar hacia el área responsable de dar la información y no se podrán compartir a terceros.
            </p>

            <div>
                <p className="text-xl font-bold">¿Quienes somos?</p>
                <p>La dirrección de nuestro sitio web es: https://igaproductos.com/</p>
            </div>

            <div>
                <p className="text-xl font-bold">Comentarios</p>
                <p>
                    Se puede proporcionar una cadena anónima creada a partir de su dirección de correo electrónico (también llamada hash) al servicio Gravatar para ver si la está utilizando. La política de privacidad del servicio Gravatar está disponible aquí: https://igaproductos.com.mx/privacy-polity/. Después de la aprobación de su comentario, su foto de perfil es visible para el público en el contexto de su comentario.
                </p>
            </div>
            <div>
                <p className="text-xl font-bold">Medios de comunicación</p>
                <p>
                    Si carga imágenes en el sitio web, debe evitar cargar imágenes con datos de ubicación incrustados (GPS EXIF) incluidos. Los visitantes del sitio web pueden descargar y extraer los datos de ubicación de las imágenes del sitio web.
                </p>
            </div>
            <div>
                <p className="text-xl font-bold">Cookies</p>
                <p>
                    Si deja un comentario en nuestro sitio, puede optar por guardar su nombre, dirección de correo electrónico y sitio web en cookies. Estos son para su conveniencia para que no tenga que volver a completar sus datos cuando deje otro comentario. Estas cookies durarán un año.

                    Si visita nuestra página de inicio de sesión, configuraremos una cookie temporal para determinar si su navegador acepta cookies. Esta cookie no contiene datos personales y se descarta cuando cierra su navegador.

                    Cuando inicie sesión, también configuraremos varias cookies para guardar su información de inicio de sesión y sus opciones de visualización de pantalla.

                    Las cookies de inicio de sesión duran dos días y las cookies de opciones de pantalla duran un año. Si selecciona “Recordarme”, su inicio de sesión se mantendrá durante dos semanas. Si cierra sesión en su cuenta, se eliminarán las cookies de inicio de sesión.

                    Si edita o publica un artículo, se guardará una cookie adicional en su navegador. Esta cookie no incluye datos personales y simplemente indica el ID de publicación del artículo que acaba de editar. Caduca después de 1 día.
                </p>
            </div>
            <div>
                <p className="text-xl font-bold">Contenido incrustado de otros sitios web</p>
                <p>
                    Los artículos de este sitio pueden incluir contenido incrustado (por ejemplo, videos, imágenes, artículos, etc.). El contenido incrustado de otros sitios web se comporta exactamente de la misma manera que si el visitante hubiera visitado el otro sitio web.
                    <br />
                    Estos sitios web pueden recopilar datos sobre usted, utilizar cookies, incrustar un seguimiento adicional de terceros y supervisar su interacción con ese contenido incrustado, incluido el seguimiento de su interacción con el contenido incrustado si tiene una cuenta y ha iniciado sesión en ese sitio web.
                </p>
            </div>
            <div>
                <p className="text-xl font-bold">Cuanto tiempo conservamos sus datos</p>
                <p>
                    Si deja un comentario, el comentario y sus metadatos se conservan indefinidamente. Esto es para que podamos reconocer y aprobar cualquier comentario de seguimiento automáticamente en lugar de mantenerlos en una cola de moderación.
                    <br />
                    Para los usuarios que se registran en nuestro sitio web (si corresponde), también almacenamos la información personal que proporcionan en su perfil de usuario. Todos los usuarios pueden ver, editar o eliminar su información personal en cualquier momento (excepto que no pueden cambiar su nombre de usuario). Los administradores del sitio web también pueden ver y editar esa información.
                </p>
            </div>
            <div>
                <p className="text-xl font-bold">Que derechos tienes sobre tus datos</p>
                <p>
                    Si tiene una cuenta en este sitio o ha dejado comentarios, puede solicitar recibir un archivo exportado de los datos personales que tenemos sobre usted, incluidos los datos que nos haya proporcionado. También puede solicitar que borremos cualquier dato personal que tengamos sobre usted. Esto no incluye ningún dato que estemos obligados a conservar con fines administrativos, legales o de seguridad.
                </p>
            </div>
            <div>
                <p className="text-xl font-bold">A donde enviamos sus datos</p>
                <p>
                    Los comentarios de los visitantes pueden verificarse a través de un servicio de detección automática de spam.
                </p>
            </div>
        </div>
    );
};

export default PoliticaPrivacidad;
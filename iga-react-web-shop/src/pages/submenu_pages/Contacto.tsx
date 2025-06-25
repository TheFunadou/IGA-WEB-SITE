
const Contacto: React.FC = () => {
    return (
        <div className="xl:flex p-5">
            <title>IGA Productos - Contacto</title>
            <div className="w-full xl:w-1/2 border-b-1 xl:border-b-0 xl:border-r-1 border-gray-300 p-5 md:p-10 lg:p-15">
                <p className="font-bold text-3xl mb-5">Contacto</p>
                <div className="flex flex-col text-justify text-xl gap-5">
                    <p>¡Llámanos o si lo deseas, completa el siguiente formulario con todos tus datos, recuerda completar todos los campos.</p>
                    <p>
                        Selecciona un motivo para darte mejor una atención personalizada o si lo prefieres selecciona ser distribuidor, a fin de que un ejecutivo de ventas corporativas te ofrezca una propuesta de acuerdo a tu perfil.
                    </p>
                    <p>¡Con tus respuestas nos ayudas a conocerte mejor!</p>
                </div>
                <form id="contact-form" className="mt-5 flex flex-col gap-5">
                    <div>
                        <p className="text-lg">*Nombre completo</p>
                        <input className="input border-1 border-gray-400 w-full xl:w-1/2 p-1 rounded-md" placeholder="Nombre completo" type="text" />
                    </div>
                    <div>
                        <p className="text-lg">*Correo electronico</p>
                        <input className="input border-1 border-gray-400 w-full xl:w-1/2 p-1 rounded-md" placeholder="alguien@correo.com" type="text" />

                    </div>
                    <div>
                        <p className="text-lg">*Numero telefonico</p>
                        <input className="input border-1 border-gray-400 w-full xl:w-1/2 p-1 rounded-md" placeholder="921 XXX XXXX" type="text" />
                    </div>

                    <div>
                        <p className="text-lg">*Nombre de la empresa</p>
                        <input className="input border-1 border-gray-400 w-full xl:w-1/2 p-1 rounded-md" placeholder="Nombre de la empresa" type="text" />
                    </div>

                    <div>
                        <p className="text-lg">*Motivo</p>
                        <select name="" className="select border-1 border-gray-400 w-full xl:w-1/2 p-1 rounded-md">
                            <option value="" selected hidden>Seleccionar una opción</option>
                            <option value="">Atención a clientes</option>
                            <option value="">Quejas y sugerencias</option>
                            <option value="">Quiero ser distribuidor</option>
                            <option value="">Quiero una cotizacion</option>
                            <option value="">Ventas</option>
                        </select>
                    </div>

                    <div>
                        <p className="text-lg">Dejanos un mensaje:</p>
                        <input className="input border-1 border-gray-400 w-full xl:w-1/2 p-1 rounded-md" placeholder="Escribir mensaje (opcional)" type="text" />
                    </div>

                    <button className="w-1/2 lg:w-1/4 p-2 rounded-md bg-blue-700 text-white mt-5">Enviar formulario</button>
                </form>
            </div>
            <div className="xl:p-5 w-full xl:w-1/2 mt-5 xl:mt-0 flex">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3792.214556812758!2d-94.45448402408356!3d18.10788048290747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85e98343453e5afd%3A0x22e09f3a6b82a914!2sIga%20Productos!5e0!3m2!1ses!2smx!4v1750692702368!5m2!1ses!2smx"
                allowFullScreen={false}
                loading="lazy"
                className="w-full h-100 xl:h-full"
                referrerPolicy={"no-referrer-when-downgrade"}>
                </iframe>
            </div>
        </div>
    );
}

export default Contacto;
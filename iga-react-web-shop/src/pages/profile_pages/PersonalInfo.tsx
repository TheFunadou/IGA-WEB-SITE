// Hooks
import { useRef } from "react";


const PersonalInfo: React.FC = () => {

    const modalPersonalDataRef = useRef<HTMLDialogElement>(null);
    const modalEmail = useRef<HTMLDialogElement>(null);
    const modalPassword = useRef<HTMLDialogElement>(null);

    const showModalPersonalData = () => {
        const modal = modalPersonalDataRef.current;
        if (modal) {
            modal?.showModal();
        }
    }

    const showModalEmail = () => {
        const modal = modalEmail.current;
        if (modal) {
            modal?.showModal();
        }
    }

    const showModalPassword = () => {
        const modal = modalPassword.current;
        if (modal) {
            modal?.showModal();
        }
    }

    

    return (
        <div className="py-5 xl:px-15 xl:py-10 w-full flex justify-center">
            <div className="mx-2 w-full lg:w-2/5 bg-white p-5 rounded-md">
                <p className="text-4xl font-bold">Información personal</p>
                <div className="flex flex-col mt-5 gap-5">
                    <div className="flex justify-between items-start bg-gray-100 p-5 rounded-lg">
                        <div>
                            <p className="font-bold text-xl mb-2">Datos personales</p>
                            <p>Nombre del usuario</p>
                            <p>921 144 3695</p>
                        </div>
                        <button className="underline cursor-pointer text-blue-500" onClick={showModalPersonalData}>Editar</button>
                    </div>
                    <div className="flex justify-between items-start bg-gray-100 p-5 rounded-lg">
                        <div>
                            <p className="font-bold text-xl mb-2">Correo electronico</p>
                            <p>alguien@correo.com</p>
                        </div>
                        <button className="underline cursor-pointer text-blue-500" onClick={showModalEmail}>Editar</button>
                    </div>
                    <div className="flex justify-between items-start bg-gray-100 p-5 rounded-lg">
                        <div>
                            <p className="font-bold text-xl mb-2">Contraseña</p>
                            <p>************</p>
                        </div>
                        <button className="underline cursor-pointer text-blue-500" onClick={showModalPassword}>Editar</button>
                    </div>
                </div>
            </div>
            {/* Modal edit personal data */}
            <dialog id="my_modal_3" className="modal" ref={modalPersonalDataRef}>
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <p className="font-bold text-2xl mb-2">Editar datos personales</p>
                    <div className="flex flex-col gap-5">
                        <div>
                            <p>Nombre actual: </p>
                            <input type="text" title="Ingresar nuevo nombre" className="input w-full" placeholder="Ingresar nuevo nombre"/>
                            <input type="text" title="Ingresar nuevos apellidos" className="input w-full mt-5" placeholder="Ingresar nuevos apellidos" />
                        </div>
                        <div>
                            <p>Numero telefonico actual: </p>
                            <input type="text" title="Ingresar nuevo número telefonico" className="input w-full" placeholder="Ingresar nuevo número telefonico"/>
                        </div>
                        <button className="btn mt-2 btn-primary">Guardar cambios</button>
                    </div>
                </div>
            </dialog>
            {/* Modal edit email */}
            <dialog id="my_modal_3" className="modal" ref={modalEmail}>
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <p className="font-bold text-2xl mb-2">Elige tu ubicación</p>
                    <p className="pt-2 text-gray-500 mb-5">El tiempo de entrega puede variar segun tu ubicación.</p>
                    <div className="h-110 pr-2 overflow-auto overflow-x-hidden flex flex-col gap-4">
                        {/* Addresses */}
                        <div className="w-full flex flex-col gap-3 p-3 border-1 bg-gray-100 rounded-lg hover:border-blue-500 duration-150 ease-in-out">
                            <p className="text-sm md:text-base"><strong>Luis N</strong>, Zaragoza #00</p>
                            <p className="text-sm md:text-base">Centro, Coatzacoalcos, Veracruz, 96XXX</p>
                            <strong className="mt-2 text-sm md:text-base">Dirección predeterminada.</strong>
                        </div>
                        <div className="w-full flex flex-col gap-3 p-3 border-1 bg-gray-100 rounded-lg hover:border-blue-500 duration-150 ease-in-out">
                            <p className="text-sm md:text-base"><strong>Luis N</strong>, Zaragoza #00</p>
                            <p className="text-sm md:text-base">Centro, Coatzacoalcos, Veracruz, 96XXX</p>
                            <strong className="mt-2 text-sm md:text-base">Dirección predeterminada.</strong>
                        </div>
                        <div className="w-full flex flex-col gap-3 p-3 border-1 bg-gray-100 rounded-lg hover:border-blue-500 duration-150 ease-in-out">
                            <p className="text-sm md:text-base"><strong>Luis N</strong>, Zaragoza #00</p>
                            <p className="text-sm md:text-base">Centro, Coatzacoalcos, Veracruz, 96XXX</p>
                            <strong className="mt-2 text-sm md:text-base">Dirección predeterminada.</strong>
                        </div>
                        <div className="w-full flex flex-col gap-3 p-3 border-1 bg-gray-100 rounded-lg hover:border-blue-500 duration-150 ease-in-out">
                            <p className="text-sm md:text-base"><strong>Luis N</strong>, Zaragoza #00</p>
                            <p className="text-sm md:text-base">Centro, Coatzacoalcos, Veracruz, 96XXX</p>
                            <strong className="mt-2 text-sm md:text-base">Dirección predeterminada.</strong>
                        </div>

                    </div>
                    {/* Link to add and edit addresses page */}
                </div>
            </dialog>
            {/* Modal edit password */}
            <dialog id="my_modal_3" className="modal" ref={modalPassword}>
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <p className="font-bold text-2xl mb-2">Elige tu ubicación</p>
                    <p className="pt-2 text-gray-500 mb-5">El tiempo de entrega puede variar segun tu ubicación.</p>
                    <div className="h-110 pr-2 overflow-auto overflow-x-hidden flex flex-col gap-4">
                        {/* Addresses */}
                        <div className="w-full flex flex-col gap-3 p-3 border-1 bg-gray-100 rounded-lg hover:border-blue-500 duration-150 ease-in-out">
                            <p className="text-sm md:text-base"><strong>Luis N</strong>, Zaragoza #00</p>
                            <p className="text-sm md:text-base">Centro, Coatzacoalcos, Veracruz, 96XXX</p>
                            <strong className="mt-2 text-sm md:text-base">Dirección predeterminada.</strong>
                        </div>
                        <div className="w-full flex flex-col gap-3 p-3 border-1 bg-gray-100 rounded-lg hover:border-blue-500 duration-150 ease-in-out">
                            <p className="text-sm md:text-base"><strong>Luis N</strong>, Zaragoza #00</p>
                            <p className="text-sm md:text-base">Centro, Coatzacoalcos, Veracruz, 96XXX</p>
                            <strong className="mt-2 text-sm md:text-base">Dirección predeterminada.</strong>
                        </div>
                        <div className="w-full flex flex-col gap-3 p-3 border-1 bg-gray-100 rounded-lg hover:border-blue-500 duration-150 ease-in-out">
                            <p className="text-sm md:text-base"><strong>Luis N</strong>, Zaragoza #00</p>
                            <p className="text-sm md:text-base">Centro, Coatzacoalcos, Veracruz, 96XXX</p>
                            <strong className="mt-2 text-sm md:text-base">Dirección predeterminada.</strong>
                        </div>
                        <div className="w-full flex flex-col gap-3 p-3 border-1 bg-gray-100 rounded-lg hover:border-blue-500 duration-150 ease-in-out">
                            <p className="text-sm md:text-base"><strong>Luis N</strong>, Zaragoza #00</p>
                            <p className="text-sm md:text-base">Centro, Coatzacoalcos, Veracruz, 96XXX</p>
                            <strong className="mt-2 text-sm md:text-base">Dirección predeterminada.</strong>
                        </div>

                    </div>
                    {/* Link to add and edit addresses page */}
                </div>
            </dialog>
        </div>
    );
};

export default PersonalInfo;
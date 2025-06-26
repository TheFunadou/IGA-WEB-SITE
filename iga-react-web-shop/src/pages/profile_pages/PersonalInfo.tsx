const PersonalInfo: React.FC = () => {
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
                        <button className="underline cursor-pointer text-blue-500">Editar</button>
                    </div>
                    <div className="flex justify-between items-start bg-gray-100 p-5 rounded-lg">
                        <div>
                            <p className="font-bold text-xl mb-2">Correo electronico</p>
                            <p>alguien@correo.com</p>
                        </div>
                        <button className="underline cursor-pointer text-blue-500">Editar</button>
                    </div>
                    <div className="flex justify-between items-start bg-gray-100 p-5 rounded-lg">
                        <div>
                            <p className="font-bold text-xl mb-2">Contraseña</p>
                            <p>************</p>
                        </div>
                        <button className="underline cursor-pointer text-blue-500">Editar</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;
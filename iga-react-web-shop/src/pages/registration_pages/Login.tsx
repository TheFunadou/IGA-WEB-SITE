//import { useState } from "react";
import { Link } from "react-router-dom";
const Login: React.FC = () => {

    return (
        <div className="flex justify-center p-10">
            <form className="md:w-1/2 xl:w-1/5 bg-white rounded-lg px-5 py-10">
                <p className="text-2xl font-bold mb-5 text-start">Iniciar sesión</p>
                <div className="flex flex-col gap-5">
                    <div>
                        <p>Correo</p>
                        <input className="input" type="text" placeholder="alguien@correo.com" title="Ingresa el correo electronico asociado a tu cuenta."/>
                    </div>
                    <div>
                        <p>Contraseña</p>
                        <input className="input" type="password" title="Ingresa la contraseña asociada a tu cuenta."/>
                    </div>
                    <div className="w-full flex flex-col">
                        <button className="btn bg-[#0071CD] text-white rounded-lg duration-150 hover:text-black text-center">Iniciar sesión</button>
                        <Link to="/recuperar-cuenta" className="underline text-blue-500 font-bold text-sm mt-2">Olvide mi contraseña</Link>
                    </div>
                </div>
                <div className="mt-4 border-t-1 border-gray-300">
                    <div className="mt-4 mb-5">
                        <p className="font-bold">¿Aun no tienes cuenta?</p>
                        <Link to="/crear-cuenta" className="underline text-blue-500 font-bold text-sm">Crear nueva cuenta</Link>
                    </div>
                    <p className="text-xs text-center">Al continuar aceptas los <Link to="/politica-de-privacidad" className="underline text-blue-500 font-bold">terminos y condiciones</Link> y la politica de <Link to="/politica-de-privacidad" className="underline text-blue-500 font-bold">privacidad</Link> de la web.</p>
                </div>
            </form>
        </div>
    );
};

export default Login;
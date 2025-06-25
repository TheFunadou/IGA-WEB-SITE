//import { useState } from "react";
import { Link } from "react-router-dom";
const CreateAcount: React.FC = () => {


    return (
        <div className="flex justify-center p-10">
            <form className="md:w-1/2 xl:w-1/5 bg-white rounded-lg px-5 py-10">
                <p className="text-2xl font-bold mb-5 text-start">Crear cuenta</p>
                <div className="flex flex-col gap-5">
                    <div>
                        <p>Correo</p>
                        <input className="input" type="text" placeholder="alguien@correo.com" title="Ingresa el correo electronico asociado a tu cuenta."/>
                    </div>
                    <div>
                        <p>Nombre</p>
                        <input className="input" type="text" placeholder="Escribe tu nombre" />
                    </div>
                    <div>
                        <p>Apellidos</p>
                        <input className="input" type="text" placeholder="Escribe tus apellidos" />
                    </div>
                    <div>
                        <p>Contraseña</p>
                        <input type="password" className="input validator" required placeholder="Escribe tu contraseña" minLength={8}
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title="Debe tener mas de 8 caracteres, incluidos numeros, letras minisculas y mayusculas" />
                        <p className="validator-hint">
                            La contraseña debe tener mas de 8 caracteres, incluyendo
                            <br />Numeros
                            <br />Caracteres en minuscula
                            <br />Caracteres en mayuscula
                        </p>
                    </div>
                    <div className="w-full flex flex-col">
                        <button className="btn bg-[#0071CD] text-white rounded-lg duration-150 hover:text-black text-center">Crear cuenta</button>
                        <Link to="/recuperar-cuenta" className="underline text-blue-500 font-bold text-sm mt-2">Olvide mi contraseña</Link>
                    </div>
                </div>
                <div className="mt-4 border-t-1 border-gray-300">
                    <div className="mt-4 mb-5">
                        <p className="font-bold">¿Ya eres cliente?</p>
                        <Link to="/login" className="underline text-blue-500 font-bold text-sm">Iniciar sesión</Link>
                    </div>
                    <p className="text-xs text-center">Al crear una aceptas los <Link to="/politica-de-privacidad" className="underline text-blue-500 font-bold">terminos y condiciones</Link> y la politica de <Link to="/politica-de-privacidad" className="underline text-blue-500 font-bold">privacidad</Link> de la web.</p>
                </div>
            </form>
        </div>
    );
};

export default CreateAcount;
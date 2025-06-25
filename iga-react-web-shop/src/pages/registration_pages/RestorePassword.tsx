import { Link } from "react-router-dom";

const RestorePassword: React.FC = () => {
    return (
        <div className="flex items-center justify-center w-full md:h-200 p-10">
            <form className="md:w-1/2 xl:w-1/4 bg-white rounded-lg px-5 py-10">
                <div className="flex flex-col gap-5">
                    <p className="font-bold text-2xl">Cambiar contraseña</p>
                    <p>Ingrese su nueva contraseña</p>
                    <input type="password" className="input validator w-full" required placeholder="Escribe tu contraseña" minLength={8}
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Debe tener mas de 8 caracteres, incluidos numeros, letras minisculas y mayusculas" />
                    <p className="validator-hint">
                        La contraseña debe tener mas de 8 caracteres, incluyendo
                        <br />Numeros
                        <br />Caracteres en minuscula
                        <br />Caracteres en mayuscula
                    </p>
                    <p>Confirmar contraseña</p>
                    <input type="password" className="input w-full"/>
                    <button className="btn bg-[#0071CD] text-white rounded-lg duration-150 hover:text-black text-center">Restaurar contraseña</button>
                </div>
                <div className="mt-5 border-t-1 border-gray-300">
                    <p className="mt-5 font-bold">¿Ya eres cliente?</p>
                    <Link to="/login" className="underline text-blue-500 font-bold">Iniciar sesión</Link>
                </div>
            </form>
        </div>
    );
};

export default RestorePassword;
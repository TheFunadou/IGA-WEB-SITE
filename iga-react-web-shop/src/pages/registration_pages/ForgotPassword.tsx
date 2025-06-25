import { Link } from "react-router-dom";

const ForgotPassword: React.FC = () => {
    return (
        <div className="flex items-center justify-center w-full md:h-200 p-10">
            <form className="md:w-1/2 xl:w-1/4 bg-white rounded-lg px-5 py-10">
                <div className="flex flex-col gap-5">
                    <p className="font-bold text-2xl">Olvide mi contaseña</p>
                    <p>Por favor, ingrese el correo electronico asociado a tu cuenta</p>
                    <input type="email" className="input w-full" placeholder="alguien@correo.com" title="Ingresa el correo electronico que asociaste a tu cuenta" />
                    <button className="btn bg-[#0071CD] text-white rounded-lg duration-150 hover:text-black text-center">Enivar formulario</button>
                </div>
                <div className="mt-5 border-t-1 border-gray-300">
                    <p className="mt-5 font-bold">¿Ya eres cliente?</p>
                    <Link to="/login" className="underline text-blue-500 font-bold">Iniciar sesión</Link>
                </div>
            </form>
        </div>
    );
};

export default ForgotPassword;
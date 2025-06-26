import { Link } from "react-router-dom";

// Import hooks
import { useRef } from "react";

const PayDataCard: React.FC = () => {

    // Define modalRef for contain the modal
    const modalRef = useRef<HTMLDialogElement>(null);

    // Arrow function for show the modal
    const handleShowModal = () => {
        const modal = modalRef.current;
        modal?.showModal();
    };

    return (
        <div>
            <div className="bg-white rounded-md p-5 flex flex-col gap-5">
                <div>
                    {/* Unit price */}
                    <p className="text-4xl font-bold">$166.91 MXN</p>
                    <Link to="/politica-de-devolucion" className="text-gray-400 underline text-sm" target="_blank">Politica de devolución PNC</Link>
                </div>
                {/* Show addresses modal */}
                <div className="">
                    <p className="font-bold">Costo de envio: <span className="text-gray-400">$150.00 MXN</span></p>
                    <button className="underline text-blue-500 not-italic text-sm cursor-pointer" onClick={handleShowModal}><i className="bi bi-geo-alt"></i> Enviar a Coatzacoalcos, 96XXX</button>
                </div>
                {/* Quantity */}
                <div className="mb-5">
                    <p className="mb-2">Cantidad:</p>
                    <select defaultValue={1} className="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>Mas de 5</option>
                    </select>
                </div>
                <div className="hidden mb-5">
                    <p className="mb-2">Especifique una cantidad:</p>
                    <input type="number" className="w-full input" />
                </div>
                <div>
                    {/* Add to car */}
                    <button className="btn w-full text-center mb-5 bg-blue-500 text-white hover:bg-blue-950 duration-115 ease-in-out" title="Agregar producto al carrito">Agregar al carrito</button>
                    {/* Buy now */}
                    <button className="btn w-full text-center bg-green-500 text-white hover:bg-green-700 duration-115 ease-in-out" title="Comprar este articulo">Comprar ahora</button>
                </div>
                <div className="mt-5">
                    {/* Add to favorites */}
                    <button className="w-full text-center text-blue-500">Agregar a favoritos <i className="bi bi-heart"></i></button>
                </div>
            </div>
            {/* Addresses Modal */}
            <dialog id="my_modal_3" className="modal" ref={modalRef}>
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
                    <Link to="/tu-cuenta/direcciones-de-envio" className="mt-5 underline font-bold text-blue-500 text-sm">Agregar o modificar direcciones de envio</Link>
                </div>
            </dialog>
        </div>
    );
};

export default PayDataCard;
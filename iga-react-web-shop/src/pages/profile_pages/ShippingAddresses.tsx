
const ShippingAddresses: React.FC = () => {
    return (
        <div className="px-15 py-10 w-full flex justify-center">
            <div className="w-2/5 bg-white p-5 rounded-md">
                <p className="text-4xl font-bold">Direcciones de envio</p>
                <p className=" text-blue-500 mt-2 underline">Agregar o modificar dirección de envio.</p>

                <div className="mt-5 pr-5 h-150 w-full overflow-auto overflow-x-hidden flex flex-col gap-4">
                    {/* Addresses */}
                    <div className="w-full flex flex-col gap-3 p-3 border-1 bg-gray-100 rounded-lg hover:border-blue-500 duration-150 ease-in-out">
                        <div className="w-full flex justify-between">
                            <p className="text-sm md:text-base w-3/4 "><strong>Luis N</strong>, Zaragoza #00</p>
                            <button className="pr-5"><i className="bi bi-trash"></i> Eliminar</button>
                        </div>
                        <p className="text-sm md:text-base">Centro, Coatzacoalcos, Veracruz, 96XXX</p>
                        <strong className="mt-2 text-sm md:text-base">Dirección predeterminada.</strong>
                    </div>
                    <div className="w-full flex flex-col gap-3 p-3 border-1 bg-gray-100 rounded-lg hover:border-blue-500 duration-150 ease-in-out">
                        <div className="w-full flex justify-between">
                            <p className="text-sm md:text-base w-3/4 "><strong>Luis N</strong>, Zaragoza #00</p>
                            <button className="pr-5"><i className="bi bi-trash"></i> Eliminar</button>
                        </div>
                        <p className="text-sm md:text-base">Centro, Coatzacoalcos, Veracruz, 96XXX</p>
                        <strong className="mt-2 text-sm md:text-base">Dirección predeterminada.</strong>
                    </div>

                    <div className="w-full flex flex-col gap-3 p-3 border-1 bg-gray-100 rounded-lg hover:border-blue-500 duration-150 ease-in-out">
                        <div className="w-full flex justify-between">
                            <p className="text-sm md:text-base w-3/4 "><strong>Luis N</strong>, Zaragoza #00</p>
                            <button className="pr-5"><i className="bi bi-trash"></i> Eliminar</button>
                        </div>
                        <p className="text-sm md:text-base">Centro, Coatzacoalcos, Veracruz, 96XXX</p>
                        <strong className="mt-2 text-sm md:text-base">Dirección predeterminada.</strong>
                    </div>

                    <div className="w-full flex flex-col gap-3 p-3 border-1 bg-gray-100 rounded-lg hover:border-blue-500 duration-150 ease-in-out">
                        <div className="w-full flex justify-between">
                            <p className="text-sm md:text-base w-3/4 "><strong>Luis N</strong>, Zaragoza #00</p>
                            <button className="pr-5"><i className="bi bi-trash"></i> Eliminar</button>
                        </div>
                        <p className="text-sm md:text-base">Centro, Coatzacoalcos, Veracruz, 96XXX</p>
                        <strong className="mt-2 text-sm md:text-base">Dirección predeterminada.</strong>
                    </div>

                    <div className="w-full flex flex-col gap-3 p-3 border-1 bg-gray-100 rounded-lg hover:border-blue-500 duration-150 ease-in-out">
                        <div className="w-full flex justify-between">
                            <p className="text-sm md:text-base w-3/4 "><strong>Luis N</strong>, Zaragoza #00</p>
                            <button className="pr-5"><i className="bi bi-trash"></i> Eliminar</button>
                        </div>
                        <p className="text-sm md:text-base">Centro, Coatzacoalcos, Veracruz, 96XXX</p>
                        <strong className="mt-2 text-sm md:text-base">Dirección predeterminada.</strong>
                    </div>

                    <div className="w-full flex flex-col gap-3 p-3 border-1 bg-gray-100 rounded-lg hover:border-blue-500 duration-150 ease-in-out">
                        <div className="w-full flex justify-between">
                            <p className="text-sm md:text-base w-3/4 "><strong>Luis N</strong>, Zaragoza #00</p>
                            <button className="pr-5"><i className="bi bi-trash"></i> Eliminar</button>
                        </div>
                        <p className="text-sm md:text-base">Centro, Coatzacoalcos, Veracruz, 96XXX</p>
                        <strong className="mt-2 text-sm md:text-base">Dirección predeterminada.</strong>
                    </div>

                    <div className="w-full flex flex-col gap-3 p-3 border-1 bg-gray-100 rounded-lg hover:border-blue-500 duration-150 ease-in-out">
                        <div className="w-full flex justify-between">
                            <p className="text-sm md:text-base w-3/4 "><strong>Luis N</strong>, Zaragoza #00</p>
                            <button className="pr-5"><i className="bi bi-trash"></i> Eliminar</button>
                        </div>
                        <p className="text-sm md:text-base">Centro, Coatzacoalcos, Veracruz, 96XXX</p>
                        <strong className="mt-2 text-sm md:text-base">Dirección predeterminada.</strong>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default ShippingAddresses;
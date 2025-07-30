// Hooks
import { useState } from "react";

// Types
import type { Address } from "../../utils/AddressesUitls";
import type { RefObject } from "react";

type Prop = {
    addressData:Address | undefined;
    refName: RefObject<HTMLDialogElement | null>;
}


const AddressForm: React.FC<Prop> = ({addressData,refName}) => {

    const [addressType, setAddressType] = useState<string | null>(null);
    const [defaultAddress,setDefaultAddress] = useState<boolean | undefined>(addressData?.default_address);

    const showDepartmentContainer = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setAddressType(e.target.value);
    }

    return (
        <dialog id="my_modal_3" className="modal" ref={refName}>
            <div className="modal-box h-5/6">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <p className="font-bold text-2xl mb-2">Editar dirección de envio</p>
                <p className="font-bold text-lg">Destinatario</p>
                <div className="flex flex-col gap-2 mt-2">
                    <p>Nombre:</p>
                    <input type="text" title="Ingresar nuevo nombre" className="input w-full" placeholder="Ingresar nuevo nombre" value={addressData?.recipient_name}/>
                    <p>Apellidos:</p>
                    <input type="text" title="Ingresar nuevos apellidos" className="input w-full" placeholder="Ingresar nuevos apellidos" value={addressData?.recipient_last_names}/>
                </div>
                <p className="font-bold text-lg mt-5">Contacto</p>
                <div className="flex flex-col gap-2 mt-2">
                    <p>*Numero telefonico:</p>
                    <input type="tel" title="Ingresar nuevo número telefonico" className="input w-full" placeholder="Ingresar nuevo número telefonico" />
                </div>
                <p className="font-bold text-lg mt-5">Información de la dirección</p>
                <div className="flex flex-col gap-3 mt-2">
                    <p>*Pais:</p>
                    <input type="text" title="Ingresar nuevo número telefonico" className="input w-full" placeholder="Ingresar nuevo número telefonico" />
                    <p>*Estado/Provincia:</p>
                    <input type="text" title="Ingresar estado, provincia, departamento, etc..." className="input w-full" placeholder="Ingresar nuevo número telefonico" />
                    <p>*Ciudad:</p>
                    <input type="text" title="Ingresar ciudad" className="input w-full" placeholder="Ingresar nuevo número telefonico" />
                    <p>*Calle:</p>
                    <input type="text" title="Ingresar calle" className="input w-full" placeholder="Ingresar calle" />
                    <p>*Colonia/Fraccionamiento:</p>
                    <input type="text" title="Ingresar colonia, fraccionamiento, barrio, comuna, etc..." className="input w-full" placeholder="Ingresar colonia/fraccionamiento" />
                    <div className="flex gap-15 justify-between">
                        <div className="w-1/2">
                            <p>*Codigo postal:</p>
                            <input type="text" title="Ingresar nueva ciudad" className="input w-full" placeholder="Ingresar codigo postal" />
                        </div>
                        <div className="w-1/2">
                            <p>*Tipo de dirección:</p>
                            <select className="select w-full" onChange={showDepartmentContainer}>
                                <option value="Casa">Casa</option>
                                <option value="Departamento">Departamento</option>
                                <option value="Trabajo">Trabajo</option>
                            </select>
                        </div>
                    </div>
                    {addressType === "Departamento" ? (
                        <div>
                            <p>Piso</p>
                            <input type="text" title="Ingresar piso" className="input w-full" placeholder="Ingresar piso" />
                        </div>
                    ) : (
                        null
                    )}
                    <div className="flex gap-15 justify-between">
                        <div className="w-1/2">
                            <p>*Numero:</p>
                            <input type="text" title="Ingresar numero exterior" className="input w-full" placeholder="Ejem: 123" />
                        </div>
                        <div className="w-1/2">
                            <p>Numero Interior:</p>
                            <input type="text" title="Ingresar numero interior" className="input w-full" placeholder="Ejem: 123" />
                        </div>
                    </div>

                </div>
                <div className="flex gap-2 mt-5">
                    <input type="checkbox" className="checkbox border-blue-500 bg-white checked:border-blue-400 checked:bg-blue-500 checked:text-white" checked={defaultAddress} onChange={(e) => setDefaultAddress(e.target.checked)}/>
                    <p>Usar esta dirección como predeterminada</p>
                </div>
                <button className="btn btn-primary mt-8">Guardar cambios</button>
            </div>
        </dialog>
    );
}

export default AddressForm;
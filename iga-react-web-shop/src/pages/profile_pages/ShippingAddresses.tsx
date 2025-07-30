// Context
import { useAppContext } from "../../context/AppContext";

// Hooks
import { useState, useEffect, useRef } from "react";

// Import components
import AddressForm from "../../components/AddressComponents/AddressForm";

// Import types
import type { Address } from "../../utils/AddressesUitls";

// Utils
import clsx from "clsx";

const ShippingAddresses: React.FC = () => {

    const { addresses } = useAppContext();

    // useState for get the current select address in the modal of addresses
    const [addressID, setAddressID] = useState<number | undefined>(undefined);
    // useState for get the array of the current address with the selected addressID for the user in the modal of addresses
    const [currentAddress, setCurrentAddress] = useState<Address | undefined>(undefined);

    const modalEditAddress = useRef<HTMLDialogElement>(null);

    const showAddressModal = () => {
        const modal = modalEditAddress.current;
        const getAddress = addresses.find(address => address.id === addressID);
        setCurrentAddress(getAddress);
        if (modal) {
            modal?.showModal();
        }
    }

    // Use effect for set the defaultAddress
    useEffect(() => {
        // Set the defaultAddress
        const defaultAddress = addresses.find(address => address.default_address === true);
        setAddressID(defaultAddress?.id);
    }, []);


    return (
        <div className="py-5 xl:px-15 xl:py-10 w-full flex justify-center">
            <div className="mx-2 w-full lg:w-2/5 bg-white p-5 rounded-md">
                <p className="text-4xl font-bold">Direcciones de envio</p>
                <p className="mt-2 underline text-blue-500 font-bold ">Crear nueva dirección de envio.</p>
                <div className="mt-5 pr-5 md:pr-5 h-150 w-full overflow-auto overflow-x-hidden flex flex-col gap-4">
                    {/* Addresses */}
                    {addresses.map(address => (
                        <div
                            key={address.id}
                            className={clsx(
                                'w-full flex flex-col gap-3 p-3 bg-gray-100 rounded-lg duration-150 ease-in-out',
                                addressID === address.id ? 'border-2 border-blue-500' : 'border border-gray-300')}
                            onClick={() => setAddressID(address.id)}
                        >
                            <div className="flex justify-between">
                                <p className="text-sm md:text-base flex">
                                    <strong>{address.recipient_name} {address.recipient_last_names}</strong>, {address.street} #{address.ext_number} EXT.
                                    {address.int_number && (<span className="pl-2">#{address.int_number} INT.</span>)}
                                </p>
                                {addressID === address.id ? (
                                    <button
                                        onClick={showAddressModal}
                                        className="font-bold underline text-blue-500 cursor-pointer"
                                    >
                                        <i className="bi bi-pencil-square mr-2"></i>
                                        Editar
                                    </button>
                                ) : (
                                    null
                                )}
                            </div>
                            <p className="text-sm md:text-base">{address.neighborhood}, {address.city}, {address.state}, {address.postal_code}</p>
                            {address.default_address && (
                                <strong className="mt-2 text-sm md:text-base">Dirección predeterminada.</strong>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            {/* Modal edit personal data */}
            <AddressForm refName={modalEditAddress} addressData={currentAddress}/>
        </div>
    );
};

export default ShippingAddresses;
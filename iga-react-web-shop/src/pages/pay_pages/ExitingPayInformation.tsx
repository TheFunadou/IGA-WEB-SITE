// src/pages/PaymentInfoPage.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

type PaymentData = Record<string, any>; // Puedes tiparlo mejor si conoces la estructura

const ExitingPayInformation: React.FC = () => {
    const { folio } = useParams();
    const [paymentInfo, setPaymentInfo] = useState<PaymentData | null>(null);

    useEffect(() => {
        if (folio) {
            axios
                .get(`http://localhost:8000/payment_info/${folio}`)
                .then((res) => setPaymentInfo(res.data))
                .catch(() => setPaymentInfo(null));
        }
    }, []);

    if (!paymentInfo) return <p>Cargando o pago no encontrado...</p>;

    return (
        <div className="w-full flex justify-center py-10">
            <div className="w-full xl:w-3/4 p-2 xl:p-5 rounded-lg bg-white">
                <p className="font-bold text-4xl">Gracias por tu compra!!</p>
                <p className="text-2xl mt-2">Resumen de tu compra</p>
                <div>
                    {}
                </div>
                <pre>{JSON.stringify(paymentInfo, null, 2)}</pre>
            </div>
        </div>
    );

};

export default ExitingPayInformation;
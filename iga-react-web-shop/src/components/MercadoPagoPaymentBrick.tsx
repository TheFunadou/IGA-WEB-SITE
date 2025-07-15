import { useEffect } from "react";
import { initMercadoPago, Payment } from "@mercadopago/sdk-react";
import type { IPaymentBrickCustomization } from "@mercadopago/sdk-react/esm/bricks/payment/type";

type Props = {
    allAmount: number;
    orderPreferenceId?: string;
}

const MercadoPagoPaymentBrick: React.FC<Props> = ({allAmount,orderPreferenceId = "358310292-0acd1a50-829a-4fa9-a49a-8256a7491484" }) => {
  useEffect(() => {
    initMercadoPago("TEST-9a9e5845-5bfd-4c28-9290-63a689207ca1", {
      locale: "es-MX",
    });
  }, []);

  const initialization = {
    amount: allAmount,
    preferenceId: orderPreferenceId,
  };

  const customization: IPaymentBrickCustomization = {
    paymentMethods: {
      atm: "all",
      ticket: "all",
      creditCard: "all",
      prepaidCard: "all",
      debitCard: "all",
      mercadoPago: "all",
    },
  };

  const onSubmit = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      fetch("/process_payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ test: true }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Respuesta del backend:", data);
          resolve();
        })
        .catch((err) => {
          console.error("Error al procesar el pago", err);
          reject();
        });
    });
  };

  const onReady = (): void => {
    console.log("Payment Brick listo.");
  };

  const onError = (error: unknown): void => {
    console.error("Error al renderizar Payment Brick:", error);
  };

  return (
    <div>
      <Payment
        initialization={initialization}
        customization={customization}
        onSubmit={onSubmit}
        onReady={onReady}
        onError={onError}
      />
    </div>
  );
};

export default MercadoPagoPaymentBrick;

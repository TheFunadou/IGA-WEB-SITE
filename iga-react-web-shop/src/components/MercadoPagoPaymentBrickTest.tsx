// Hooks
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// MercadoPago
import { initMercadoPago, Payment } from "@mercadopago/sdk-react";
import type { IPaymentBrickCustomization } from "@mercadopago/sdk-react/esm/bricks/payment/type";

// Libraries
import axios from "axios";

// Context
import { useAppContext } from "../context/AppContext";

// Import type
import type { CartItem } from "../utils/cartUtils";

type Props = {
  allAmount: number;
  orderPreferenceId: string;
}

const MercadoPagoPaymentBrickTest: React.FC<Props> = ({ allAmount, orderPreferenceId }) => {

  const navigate = useNavigate();
  const { cartItems, removeFromCart } = useAppContext();
  const currentSelectedItems: CartItem[] = cartItems.filter((item: CartItem) => item.isChecked);

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

  type onSubmitData = {
    selectedPaymentMethod: any;
    formData: Record<string, any>;
  }

  const onSubmit = async ({
    selectedPaymentMethod,
    formData,
  }: onSubmitData): Promise<void> => {
    try {
      const response = await axios.post("http://localhost:8000/process_payment", {
        ...formData,
        payment_method: selectedPaymentMethod,
      });

      const folio = response.data.folio;
      console.log("Respuesta del backend:", response.data);
      // Remove items from the cart
      currentSelectedItems.map(item => removeFromCart(item.sku));
      // Redirect to pay info
      navigate(`/pagar-productos/informacion-de-pago/${folio}`);
    } catch (error) {
      console.error("Error al procesar el pago:", error);
      throw error;
    }
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

export default MercadoPagoPaymentBrickTest;

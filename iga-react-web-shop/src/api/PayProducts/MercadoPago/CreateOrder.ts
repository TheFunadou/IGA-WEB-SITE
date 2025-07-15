import axios from "axios";

export type Items = {
    id: number;
    category_id?: number;
    title: string;
    unit_price: number;
    description: string;
}

export type Payer = {
    phone: {
        area_code: string;
        number: string;
    },
    email: string;
    name: string;
    surname: string;
}

export type ReceiverAddress = {
    zip_code: string;
    street_name: string;
    street_number: string;
    floor?: string;
    apartment?: string;
    city_name: string;
    state_name: string;
    country_name: string;
}

type Response = {
    id: string
}

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export async function mercadoPagoCreateOrder(items: Items[], payer: Payer, shipments: ReceiverAddress,totalAmount:number): Promise<string> {
    try {
        const response = await axios.post<Response>(`${baseUrl}/create-order`, {
            // Body
            items,
            payer,
            shipments,
            totalAmount
        });
        return response.data.id;
    } catch (error) {
        throw error
    }
}
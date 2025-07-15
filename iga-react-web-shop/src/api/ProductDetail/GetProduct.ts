import axios from "axios";

export type ProductData = {
        sku: number;
        color_line: string;
        color_name: string;
        color_code: string;
        status: string;
        stock: number;
        unit_price: number;
        favorite: boolean;
        description: string;
        product: {
            id: number;
            product_name: string;
            category: string;
            technical_sheet_url: string;
            certifications_url: string;
            specs: string;
            recomendations: string;
            applications: string;
            certifications_desc: string;
        };
        images: {
            id: number;
            image_url: string;
            main_image: boolean;
        }[];
    };

const baseUrl = import.meta.env.VITE_BACKEND_URL;

// Function for get the information of the product with the SKU
// Poner sku despues xd
export async function getProductDetailData (): Promise <ProductData>{
    try{
        const response = await axios.get<ProductData>(`${baseUrl}/get-product-example`);
        return response.data;
    }catch(error){
        throw error;
    }
};
import { ENV } from "@/utils"

export class Product {
    async getAll(search="") {
        try {
            const baseUrl = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCT}`
            const url = search ? `${baseUrl}?search=${encodeURIComponent(search)}` : baseUrl;

            const response = await fetch(url);
            const result = await response.json();
            
            if(!result.status) throw result

            return result.products.data;
        } catch (error) {
            throw error
        }
    }

    async getById(id) {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCT}/${id}`

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Cache-Control": "no-cache, no-store, must-revalidate",
                    Pragma: "no-cache",
                    Expires: "0",
                },
            });
            const result = await response.json();

            if(!result.status) throw result
            
            return result.data;
        } catch (error) {
            throw error
        }
    }
}

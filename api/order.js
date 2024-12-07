import { ENV } from "@/utils";
import { authFetch } from "@/utils/authFetch";

export class Order {
    async getAll() {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ORDER}`

            const response = await authFetch(url)
            return await response.json()

        } catch (error) {
            throw error;
        }
    }
}
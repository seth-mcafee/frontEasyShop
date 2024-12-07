import { ENV } from "@/utils"
import { authFetch } from "@/utils/authFetch"

export class Cart {
    async addItem(id) {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CART.CART}`
            const params = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({product_id: id})
            }

            const response = await authFetch(url, params);
            const result = await response.json();
            
            if(!result.status) throw result

            return result;
        } catch (error) {
            throw error
        }
    }

    async getCart() {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CART.CART}`

            const response = await authFetch(url);
            const result = await response.json();
            
            if(!result.status) throw result

            return result.data;
        } catch (error) {
            throw error
        }
    }

    async deleteItem(id) {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CART.REMOVE}`
            const params = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({product_id: id})
            }

            const response = await authFetch(url, params);
            const result = await response.json();

            if(!result.status) throw result

            return result;
        } catch (error) {
            throw error
        }
    }

    async clearCart() {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CART.CLEAR}`
            const params = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            }

            const response = await authFetch(url, params);
            const result = await response.json();

            if(!result.status) throw result

            return result;
        } catch (error) {
            throw error
        }
    }

    async paymentCart(data) {
        try {
            
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PAYMENT}`;
            const params = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(data)
            }

            const response = await authFetch(url, params);
            const result = await response.json();

            if(!result.status) throw result

            return result;

        } catch (error) {
            throw error
        }
    }

    async confirmOrder(paymentId, address) {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CONFIRM_ORDER}`;
            const params = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    payment_intent_id: paymentId,
                    ...address
                })
            }

            const response = await authFetch(url, params);
            const result = await response.json();

            if(!result.status) throw result

            return result;   
        } catch (error) {
            throw error;
        }
    }
}
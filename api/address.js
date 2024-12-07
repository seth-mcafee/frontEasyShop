import { ENV } from "@/utils"
import { authFetch } from "@/utils/authFetch"

export class Address {
    async create(data) {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}`
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

    async getAll() {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}`
            const response = await authFetch(url);
            const result = await response.json();

            if(!result.status) throw result

            return result;
        } catch (error) {
            throw error
        }
    }

    async update(data, id) {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}/${id}`
            const params = {
                method: "PUT",
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

    async delete(id) {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}/${id}`
            const params = {
                method: "DELETE",
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
}
import { Token } from "@/api/token";

export async function authFetch(url, params) {
    const tokenCtrl = new Token();
    const token = tokenCtrl.getToken();

    if (!token) {
        tokenCtrl.removeToken();
        return;
    }

    const paramsTemp = {
        ...params,
        headers: {
            ...params?.headers,
            Authorization: `Bearer ${token}`
        }
    };

    try {
        return await fetch(url, paramsTemp);
    } catch (error) {
        throw error;
    }
}

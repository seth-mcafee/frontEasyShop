import { ENV } from "@/utils";
import { authFetch } from "@/utils/authFetch";

export class User {
  async getMe() {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USER_ME}`;

      const response = await authFetch(url);
      const result = await response.json();
     
      if (!result.status) {
        throw result;
      }

      return result.user;
    } catch (error) {
      throw error;
    }
  }
}

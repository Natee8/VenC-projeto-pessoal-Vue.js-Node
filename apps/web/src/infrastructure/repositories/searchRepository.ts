import { apiInstance } from "../config/ApiConfig";

export const searchRepository = {
  async searchServices(query: string) {
    const { data } = await apiInstance.get("/services/search", {
      params: { q: query },
    });

    return data;
  },
};

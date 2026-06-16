import { apiInstance } from "../config/ApiConfig";

export const serviceModelRepository = {
  async getCatalog() {
    const { data } = await apiInstance.get("/services/catalogo");
    return data;
  },

  async createCatalogItem(name: string, description: string) {
    const { data } = await apiInstance.post("/services/create-catalogo", {
      name,
      description,
    });

    return data;
  },
};

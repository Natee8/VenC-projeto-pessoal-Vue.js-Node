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
  async createCarregiverService(
    caregiverId: number,
    serviceId: number,
    price: number,
    description?: string,
  ) {
    const { data } = await apiInstance.post("/services/offer-create", {
      caregiverId,
      serviceId,
      price,
      description,
    });

    return data;
  },
};

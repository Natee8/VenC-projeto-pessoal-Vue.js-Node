import { ApiResponse, ServiceModelDTO, ServiceOfferDTO } from "@packages";
import { apiInstance } from "../config/ApiConfig";

export const serviceModelRepository = {
  async getCatalog(): Promise<ServiceModelDTO[]> {
    const { data: body } =
      await apiInstance.get<ApiResponse<ServiceModelDTO[]>>(
        "/services/catalogo",
      );

    return body.data;
  },

  async createCatalogItem(
    name: string,
    description: string,
  ): Promise<ServiceModelDTO> {
    const { data: body } = await apiInstance.post<ApiResponse<ServiceModelDTO>>(
      "/services/create-catalogo",
      { name, description },
    );

    return body.data;
  },

  async createCarregiverService(
    caregiverId: number,
    serviceId: number,
    price: number,
    description?: string,
  ): Promise<ServiceOfferDTO> {
    const { data: body } = await apiInstance.post<ApiResponse<ServiceOfferDTO>>(
      "/services/offer-create",
      { caregiverId, serviceId, price, description },
    );

    return body.data;
  },
};

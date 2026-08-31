import { ApiResponse, ServiceModelDTO } from "@packages";
import { apiInstance } from "../config/ApiConfig";

export const searchRepository = {
  async searchServices(query: string): Promise<ServiceModelDTO[]> {
    const { data: body } = await apiInstance.get<
      ApiResponse<ServiceModelDTO[]>
    >("/services/search", {
      params: { q: query },
    });

    return body.data;
  },
};

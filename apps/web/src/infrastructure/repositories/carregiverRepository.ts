import { apiInstance } from "../config/ApiConfig";

export const caregiverRepository = {
  async getPublicCaregivers(params?: {
    city?: string;
    state?: string;
    minRating?: number;
    serviceIds?: number[];
  }) {
    const { data } = await apiInstance.get("/caregivers/public", {
      params,
    });

    return data;
  },
};

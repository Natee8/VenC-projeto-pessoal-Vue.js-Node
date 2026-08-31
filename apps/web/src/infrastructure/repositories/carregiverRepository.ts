import {
  ApiResponse,
  CaregiverPetPreferenceDTO,
  CaregiverPublicDTO,
} from "@packages";
import { apiInstance } from "../config/ApiConfig";

export const caregiverRepository = {
  async getPublicCaregivers(params?: {
    city?: string;
    state?: string;
    minRating?: number;
    serviceIds?: number[];
    petTypes?: string[];
  }): Promise<CaregiverPublicDTO[]> {
    const query = new URLSearchParams();

    if (params?.city) query.append("city", params.city);
    if (params?.state) query.append("state", params.state);
    if (params?.minRating) query.append("minRating", String(params.minRating));

    if (params?.serviceIds?.length) {
      params.serviceIds.forEach((id) => {
        query.append("serviceIds", String(id));
      });
    }

    if (params?.petTypes?.length) {
      params.petTypes.forEach((type) => {
        query.append("petTypes", type);
      });
    }

    const { data: body } = await apiInstance.get<
      ApiResponse<CaregiverPublicDTO[]>
    >(`/caregivers/public?${query.toString()}`);

    return body.data;
  },

  async getPetPreferences(
    caregiverId: number,
  ): Promise<CaregiverPetPreferenceDTO[]> {
    const { data: body } = await apiInstance.get<
      ApiResponse<CaregiverPetPreferenceDTO[]>
    >(`/caregivers/${caregiverId}/preferences`);

    return body.data;
  },

  async createPetPreferences(
    caregiverId: number,
    payload: {
      petTypes: string[];
    },
  ): Promise<CaregiverPetPreferenceDTO[]> {
    const { data: body } = await apiInstance.post<
      ApiResponse<CaregiverPetPreferenceDTO[]>
    >(`/caregivers/${caregiverId}/preferences`, payload);

    return body.data;
  },
};

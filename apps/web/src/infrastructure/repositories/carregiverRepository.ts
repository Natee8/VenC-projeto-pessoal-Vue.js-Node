import { apiInstance } from "../config/ApiConfig";

export const caregiverRepository = {
  async getPublicCaregivers(params?: {
    city?: string;
    state?: string;
    minRating?: number;
    serviceIds?: number[];
    petTypes?: string[];
  }) {
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

    const { data } = await apiInstance.get(
      `/caregivers/public?${query.toString()}`,
    );

    return data;
  },

  async getPetPreferences(caregiverId: number) {
    const { data } = await apiInstance.get(
      `/caregivers/${caregiverId}/preferences`,
    );
    return data;
  },

  async createPetPreferences(
    caregiverId: number,
    payload: {
      petTypes: string[];
    },
  ) {
    const { data } = await apiInstance.post(
      `/caregivers/${caregiverId}/preferences`,
      payload,
    );
    return data;
  },
};

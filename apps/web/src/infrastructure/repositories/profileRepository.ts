import { ApiResponse, ProfileDTO } from "@packages";
import { apiInstance } from "../config/ApiConfig";

export const profileRepository = {
  async getProfile(): Promise<ProfileDTO> {
    const { data: body } =
      await apiInstance.get<ApiResponse<ProfileDTO>>("/profile");

    return body.data;
  },
};

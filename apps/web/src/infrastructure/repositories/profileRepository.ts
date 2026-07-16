import { apiInstance } from "../config/ApiConfig";

export const profileRepository = {
  async getProfile() {
    const { data } = await apiInstance.get("/profile");
    return data;
  },
};

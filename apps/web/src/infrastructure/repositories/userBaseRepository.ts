import { RegisterOutput, RegisterPayload } from "@packages";
import { apiInstance } from "../config/ApiConfig";

export const registerRepository = {
  async register(input: RegisterPayload): Promise<RegisterOutput> {
    const formData = new FormData();

    Object.entries(input).forEach(([key, value]) => {
      if (value === undefined || value === null) return;

      if (value instanceof File) {
        formData.append(key, value);
        return;
      }

      if (typeof value === "object") {
        formData.append(key, JSON.stringify(value));
        return;
      }

      formData.append(key, String(value));
    });

    const { data } = await apiInstance.post<RegisterOutput>(
      "/auth/register",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );

    return data;
  },
};

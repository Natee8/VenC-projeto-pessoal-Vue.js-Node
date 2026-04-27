import { RegisterOutput } from "@packages";
import { apiInstance } from "../config/ApiConfig";

export const registerRepository = {
  async register(input: FormData): Promise<RegisterOutput> {
    const { data } = await apiInstance.post<RegisterOutput>(
      "/auth/register",
      input,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );

    return data;
  },
};

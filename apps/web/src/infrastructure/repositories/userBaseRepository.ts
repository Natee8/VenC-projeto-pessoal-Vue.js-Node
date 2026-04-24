// infra/repositories/registerRepository.ts
import { RegisterOutput, RegisterInput } from "@packages";
import { apiInstance } from "../config/ApiConfig";

export const registerRepository = {
  async register(input: RegisterInput): Promise<RegisterOutput> {
    const { data } = await apiInstance.post<RegisterOutput>(
      "/auth/register",
      input,
    );
    return data;
  },
};

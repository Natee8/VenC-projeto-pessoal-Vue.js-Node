// infra/repositories/registerRepository.ts
import {
  RegisterOutput,
  RegisterInput,
} from "../../../../../packages/src/domain/dtos/IUser.dto";
import { apiInstance } from "../config/ApiConfig";

export const registerRepository = {
  async register(input: RegisterInput): Promise<RegisterOutput> {
    const { data } = await apiInstance.post<RegisterOutput>("/register", input);
    return data;
  },
};

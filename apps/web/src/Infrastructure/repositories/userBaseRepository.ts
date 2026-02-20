// infra/repositories/registerRepository.ts
import {
  UserDTO,
  RegisterData,
} from "../../../../../packages/src/domain/dtos/IUser.dto";
import { apiInstance } from "../config/ApiConfig";

export const registerRepository = {
  async register(input: RegisterData): Promise<UserDTO> {
    const { data } = await apiInstance.post<UserDTO>("/register", input);
    return data;
  },
};

import { IUserDTO } from "../../../../../../../packages/src/domain/dtos/IUser.dto.js";
import { AuthAccount } from "../../../../domain/dtos/auth.dto.js";

export type IAccessTypes = "USER_CREDENTIALS" | "API_KEY";

export interface IAppState {
  user?: IUserDTO;
  account?: AuthAccount;
  loading?: boolean;
  token?: string;
  authenticated?: boolean;
}

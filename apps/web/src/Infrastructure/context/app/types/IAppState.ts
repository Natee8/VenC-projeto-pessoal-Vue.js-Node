import { IUserDto } from "../../../../../../../packages/src/domain/dtos/IUser.dto.js";
import { UserRole } from "../../../../../../../packages/src/types/userType.js";
import { AuthAccount } from "../../../../domain/dtos/auth.dto.js";

export type IAccessTypes = 'USER_CREDENTIALS' | 'API_KEY';

export interface IAppState {
	user?: IUserDto;
	role?: UserRole;
	account?: AuthAccount;
	loading?: boolean;
	token?: string;
	authenticated?: boolean;
}

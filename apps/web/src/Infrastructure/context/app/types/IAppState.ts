import { UserRole } from "../../../../../../../packages/types/userType";
import { AuthAccount } from "../../../../domain/dtos/auth.dto";
import { IUser } from "../../../../domain/entities/IUserEntity";

export type IAccessTypes = 'USER_CREDENTIALS' | 'API_KEY';

export interface IAppState {
	user?: IUser;
	role?: UserRole;
	account?: AuthAccount;
	loading?: boolean;
	token?: string;
	authenticated?: boolean;
}
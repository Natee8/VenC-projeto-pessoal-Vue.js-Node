import { IUser } from "../../../../domain/entities/IUserEntity";

export type IAccessTypes = 'USER_CREDENTIALS' | 'API_KEY';

export interface IAppState {
	user?: IUser;
	loading?: boolean;
	token?: string;
	authenticated?: boolean;
}
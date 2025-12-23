import { ICode } from './IStatusCode';

export interface IResponse<T> {
	data?: T;
	message: string;
	statusCode: ICode;
}
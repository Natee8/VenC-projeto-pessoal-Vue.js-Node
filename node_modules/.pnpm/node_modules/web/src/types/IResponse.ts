import { ICode } from "./IStatusCode.js";

export interface IResponse<T> {
	data?: T;
	message: string;
	statusCode: ICode;
}

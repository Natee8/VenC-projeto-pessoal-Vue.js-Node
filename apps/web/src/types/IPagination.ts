import { ICode } from "./IStatusCode.js";

export interface IMeta {
	total: number;
	lastPage: number;
	currentPage: number;
	perPage: number;
	prev?: number;
	next?: number;
}

export interface IPagination<T> {
	data?: Array<T>;
	message: string;
	statusCode: ICode;
	meta?: IMeta;
}

export interface IPaginationDTO {
	itemsPerPage: number;
	currentPage: number;
}

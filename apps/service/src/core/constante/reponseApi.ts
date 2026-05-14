import { StatusCode } from "./statusCode.js";

export interface ApiResponse<T = unknown> {
  message: string;
  data?: T;
  error?: string;
  errors?: Record<string, string>;
  code: StatusCode;
}

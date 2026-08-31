import { Response } from "express";
import { ApiErrorResponse } from "@packages";

/**
 * Resposta de erro da API. Mesmo envelope do `success`, sem `data`.
 */
export function failure(
  res: Response,
  {
    message,
    code = 400,
    error,
    errors,
  }: {
    message: string;
    code?: number;
    error?: string;
    errors?: Record<string, string[]>;
  },
) {
  const body: ApiErrorResponse = {
    message,
    error,
    errors,
    code,
  };

  return res.status(code).json(body);
}

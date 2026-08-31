import { Response } from "express";
import { ApiResponse } from "@packages";

/**
 * Resposta de sucesso da API. Sempre no envelope `{ message, data, code }`.
 *
 * Todo controller deve responder por aqui (ou por `failure`) — nada de
 * `res.status().json()` cru, senão o front não consegue desembrulhar de
 * forma uniforme.
 */
export function success<T>(
  res: Response,
  {
    message,
    data,
    code = 200,
  }: {
    message: string;
    data?: T;
    code?: number;
  },
) {
  const body: ApiResponse<T | null> = {
    message,
    data: data ?? null,
    code,
  };

  return res.status(code).json(body);
}

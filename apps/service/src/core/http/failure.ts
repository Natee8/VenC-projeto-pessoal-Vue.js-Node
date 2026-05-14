import { Response } from "express";

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
    errors?: Record<string, string>;
  },
) {
  return res.status(code).json({
    message,
    error,
    errors,
    code,
  });
}

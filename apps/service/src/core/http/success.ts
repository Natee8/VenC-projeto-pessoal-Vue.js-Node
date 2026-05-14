import { Response } from "express";

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
  return res.status(code).json({
    message,
    data,
    code,
  });
}

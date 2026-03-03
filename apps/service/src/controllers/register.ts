// controllers/register.controller.ts

import { Request, Response } from "express";
import { RegisterUseCase } from "../application/usecases/auth/register.usecase.js";

export class RegisterController {
  constructor(private registerUseCase: RegisterUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const result = await this.registerUseCase.execute(req.body);

      return res.status(201).json(result);
    } catch (error: unknown) {
      return res.status(400).json({
        message:
          error instanceof Error ? error.message : "Erro ao registrar usuário",
      });
    }
  }
}

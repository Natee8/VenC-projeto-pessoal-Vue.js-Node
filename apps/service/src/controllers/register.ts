import { Request, Response } from "express";

import { RegisterUseCase } from "../application/usecases/auth/register.usecase.js";

import { success } from "../core/http/response.js";
import { failure } from "../core/http/failure.js";
import { registerSchema } from "../core/validators/auth/register.validator.js";

export class RegisterController {
  constructor(private registerUseCase: RegisterUseCase) {}

  async handle(req: Request, res: Response) {
    console.log("REQ BODY:", req.body);
    try {
      const parsed = registerSchema.safeParse({
        ...req.body,
        profileImage: req.file,
      });

      if (!parsed.success) {
        return failure(res, {
          message: "Erro de validação",
          errors: parsed.error.flatten().fieldErrors,
          code: 400,
        });
      }

      const result = await this.registerUseCase.execute(parsed.data);

      return success(res, {
        message: "Usuário registrado com sucesso",
        data: result,
        code: 201,
      });
    } catch (error: unknown) {
      return failure(res, {
        message:
          error instanceof Error ? error.message : "Erro ao registrar usuário",
        code: 500,
      });
    }
  }
}

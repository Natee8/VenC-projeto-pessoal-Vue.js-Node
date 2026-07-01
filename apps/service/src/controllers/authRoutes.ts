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
        const errors: Record<string, string[]> = Object.fromEntries(
          Object.entries(parsed.error.flatten().fieldErrors).map(
            ([key, value]) => [key, value ?? []],
          ),
        );

        return failure(res, {
          message: "Dados inválidos",
          errors: errors,
          code: 400,
        });
      }

      const result = await this.registerUseCase.execute(parsed.data);

      return success(res, {
        message: "Usuário criado com sucesso",
        data: result,
        code: 201,
      });
    } catch {
      return failure(res, {
        message: "Erro ao registrar usuário",
        code: 500,
      });
    }
  }
}

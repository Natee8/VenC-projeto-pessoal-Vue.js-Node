import { Request, Response } from "express";
import { z } from "zod";

import { CreateUserBaseUseCase } from "../application/usecases/profiles/createUserBase.usecase.js";
import { failure } from "../core/http/failure.js";
import { success } from "../core/http/response.js";

const createUserSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
  cpf: z.string().min(11),
  birthDate: z.string().transform((v) => new Date(v)),
});

export class CreateUserBaseController {
  constructor(private useCase: CreateUserBaseUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const parsed = createUserSchema.safeParse(req.body);

      if (!parsed.success) {
        return failure(res, {
          message: "Erro de validação",
          errors: parsed.error.flatten().fieldErrors,
        });
      }

      const result = await this.useCase.execute(parsed.data);

      if (result.type === "left") {
        return failure(res, {
          message: result.error.message,
        });
      }

      return success(res, {
        message: "Usuário criado com sucesso",
        data: result.value,
        code: 201,
      });
    } catch {
      return failure(res, {
        message: "Erro ao criar usuário",
      });
    }
  }
}

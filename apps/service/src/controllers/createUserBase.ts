import { Request, Response } from "express";
import { z } from "zod";

import { CreateUserBaseUseCase } from "../application/usecases/profiles/createUserBase.usecase.js";
import { failure } from "../core/http/failure.js";
import { success } from "../core/http/response.js";

import { cpf } from "cpf-cnpj-validator";

export const createUserSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),

  email: z.string().email("Email inválido"),

  password: z
    .string()
    .min(8, "Mínimo 8 caracteres")
    .regex(/[A-Z]/, "Deve ter letra maiúscula")
    .regex(/[a-z]/, "Deve ter letra minúscula")
    .regex(/\d/, "Deve ter número")
    .regex(/[^A-Za-z0-9]/, "Deve ter caractere especial"),

  cpf: z
    .string()
    .transform((v) => v.replace(/\D/g, ""))
    .refine((value) => cpf.isValid(value), {
      message: "CPF inválido",
    }),

  birthDate: z
    .string()
    .refine((date) => !isNaN(new Date(date).getTime()), {
      message: "Data inválida",
    })
    .transform((v) => new Date(v)),
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

import { Request, Response } from "express";
import { z } from "zod";

import { RegisterUseCase } from "../application/usecases/auth/register.usecase.js";

import { success } from "../core/http/response.js";
import { failure } from "../core/http/failure.js";

const registerSchema = z.object({
  type: z.enum(["owner", "caregiver"]),

  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
  cpf: z.string().min(11),

  birthDate: z.string(),

  profileImage: z.any().optional(),

  address: z.string().transform((v) => JSON.parse(v)),

  offersHosting: z
    .string()
    .optional()
    .transform((v) => v === "true"),
  isPublicProfile: z
    .string()
    .optional()
    .transform((v) => v === "true"),

  serviceRadiusKm: z
    .string()
    .optional()
    .transform((v) => (v ? Number(v) : undefined)),

  searchRadiusKm: z
    .string()
    .optional()
    .transform((v) => (v ? Number(v) : undefined)),

  phone: z.string().optional(),
});

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

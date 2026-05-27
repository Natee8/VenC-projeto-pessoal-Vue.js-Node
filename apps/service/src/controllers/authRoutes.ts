import { Request, Response } from "express";
import { RegisterUseCase } from "../application/usecases/auth/register.usecase.js";
import { success } from "../core/http/response.js";
import { z } from "zod";
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

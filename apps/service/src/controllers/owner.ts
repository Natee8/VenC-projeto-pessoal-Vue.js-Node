import { Request, Response } from "express";
import { z } from "zod";

import { OwnerProfileFacadeUseCase } from "../application/usecases/profiles/ownerProfile.usecase.js";
import { success } from "../core/http/response.js";
import { failure } from "../core/http/failure.js";

const ownerSaveSchema = z.object({
  userId: z.string().transform(Number),

  phone: z.string().optional(),

  searchRadiusKm: z
    .string()
    .optional()
    .transform((v) => (v ? Number(v) : undefined))
    .refine((v) => v === undefined || !isNaN(v), {
      message: "searchRadiusKm inválido",
    }),

  address: z.string().transform((v) => JSON.parse(v)),
});

export class OwnerProfileController {
  constructor(private ownerProfileUseCase: OwnerProfileFacadeUseCase) {}

  async save(req: Request, res: Response) {
    try {
      const parsed = ownerSaveSchema.safeParse(req.body);

      if (!parsed.success) {
        return failure(res, {
          message: "Erro de validação",
          errors: parsed.error.flatten().fieldErrors,
          code: 400,
        });
      }

      const profile = await this.ownerProfileUseCase.save(parsed.data);

      return success(res, {
        message: "Perfil criado com sucesso",
        data: profile,
        code: 201,
      });
    } catch {
      return failure(res, {
        message: "Erro ao criar perfil",
        code: 500,
      });
    }
  }

  async getByUserId(req: Request, res: Response) {
    try {
      const userId = Number(req.params.userId);

      const profile = await this.ownerProfileUseCase.getByUserId(userId);

      if (!profile) {
        return failure(res, {
          message: "Perfil não encontrado",
          code: 404,
        });
      }

      return success(res, {
        message: "Perfil encontrado",
        data: profile,
      });
    } catch {
      return failure(res, {
        message: "Erro desconhecido",
        code: 500,
      });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const profiles = await this.ownerProfileUseCase.getAll();

      return success(res, {
        message: "Perfis listados com sucesso",
        data: profiles,
      });
    } catch {
      return failure(res, {
        message: "Erro ao listar perfis",
        code: 500,
      });
    }
  }
}

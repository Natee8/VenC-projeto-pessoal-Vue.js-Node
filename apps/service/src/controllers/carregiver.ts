import { CaregiverFacadeUseCase } from "../application/usecases/profiles/caregiverProfile.usecase.js";
import { Request, Response } from "express";
import { State } from "@packages";
import { z } from "zod";

import { failure } from "../core/http/failure.js";
import { success } from "../core/http/response.js";

const addressSchema = z.object({
  street: z.string(),
  number: z.string(),
  neighborhood: z.string(),
  city: z.string(),
  state: z.nativeEnum(State),
  zipCode: z.string().min(8, "CEP inválido"),
  complement: z.string().optional(),
});

const saveCaregiverSchema = z.object({
  userId: z.string().transform(Number),

  offersHosting: z
    .union([z.boolean(), z.string()])
    .optional()
    .transform((v) => v === true || v === "true")
    .default(false),

  serviceRadiusKm: z
    .string()
    .transform(Number)
    .refine((v) => !isNaN(v), {
      message: "serviceRadiusKm inválido",
    }),

  isPublicProfile: z.string().transform((v) => v === "true"),

  address: z
    .string()
    .transform((v) => JSON.parse(v))
    .pipe(addressSchema),
});

export class CaregiverController {
  constructor(private caregiverUseCase: CaregiverFacadeUseCase) {}

  async save(req: Request, res: Response) {
    try {
      const parsed = saveCaregiverSchema.safeParse(req.body);

      console.log("RAW ADDRESS:", req.body.address);

      if (!parsed.success) {
        return failure(res, {
          message: "Erro de validação",
          errors: parsed.error.flatten().fieldErrors,
          code: 400,
        });
      }

      const result = await this.caregiverUseCase.save(parsed.data);

      console.log("ADDRESS RAW:", req.body.address);

      if (result.type === "left") {
        return failure(res, {
          message: result.error.message,
          code: 400,
        });
      }

      return success(res, {
        message: "Cuidador criado com sucesso",
        data: result.value,
        code: 201,
      });
    } catch {
      return failure(res, {
        message: "Erro desconhecido",
        code: 500,
      });
    }
  }

  async getByUserId(req: Request, res: Response) {
    try {
      const userId = Number(req.params.userId);

      const result = await this.caregiverUseCase.getByUserId(userId);

      if (result.type === "left") {
        return failure(res, {
          message: result.error.message,
          code: 404,
        });
      }

      return success(res, {
        message: "Cuidador encontrado com sucesso",
        data: result.value,
      });
    } catch {
      return failure(res, {
        message: "Erro desconhecido",
        code: 500,
      });
    }
  }

  async getPublicCaregivers(req: Request, res: Response) {
    try {
      const result = await this.caregiverUseCase.getPublicCaregivers();

      if (result.type === "left") {
        return failure(res, {
          message: result.error.message,
          code: 400,
        });
      }

      return success(res, {
        message: "Cuidadores listados com sucesso",
        data: result.value,
      });
    } catch {
      return failure(res, {
        message: "Erro desconhecido",
        code: 500,
      });
    }
  }
}

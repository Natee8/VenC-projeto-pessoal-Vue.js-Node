import { CaregiverFacadeUseCase } from "../application/usecases/profiles/caregiverProfile.usecase.js";
import { Request, Response } from "express";

import { failure } from "../core/http/failure.js";
import { success } from "../core/http/response.js";
import {
  listCaregiversQuerySchema,
  saveCaregiverSchema,
} from "../core/validators/profile/caregiver.validator.js";

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
      const parsed = listCaregiversQuerySchema.safeParse(req.query);

      if (!parsed.success) {
        return failure(res, {
          message: "Erro de validação dos filtros",
          errors: parsed.error.flatten().fieldErrors,
          code: 400,
        });
      }

      const filters = parsed.data;

      const result = await this.caregiverUseCase.getPublicCaregivers(filters);

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

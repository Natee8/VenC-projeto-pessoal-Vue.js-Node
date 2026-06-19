import { Request, Response } from "express";
import { CaregiverPetPreferenceFacadeUseCase } from "../application/usecases/caregiver/caregiverPreferencePet.usecase.js";
import { failure } from "../core/http/failure.js";
import { success } from "../core/http/response.js";

export class CaregiverPetPreferenceController {
  constructor(private useCase: CaregiverPetPreferenceFacadeUseCase) {}

  async create(req: Request, res: Response) {
    try {
      const result = await this.useCase.create(req.body);

      if (result.type === "left") {
        return failure(res, {
          message: result.error.message,
          code: 400,
        });
      }

      return success(res, {
        message: "Preferência criada com sucesso",
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

  async listByCaregiver(req: Request, res: Response) {
    try {
      const caregiverId = Number(req.params.caregiverId);

      const result = await this.useCase.listByCaregiver(caregiverId);

      if (result.type === "left") {
        return failure(res, {
          message: result.error.message,
          code: 400,
        });
      }

      return success(res, {
        message: "Preferências listadas com sucesso",
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

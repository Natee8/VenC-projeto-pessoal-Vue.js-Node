import { Router, Request, Response } from "express";
import { failure } from "../core/http/failure.js";
import { success } from "../core/http/success.js";
import { CaregiverPetPreferenceFacadeUseCase } from "../application/usecases/caregiver/caregiverPreferencePet.usecase.js";
import { CaregiverPetPreferenceRepository } from "../infrastructure/repositories/user/caregiverPetPreference.repository.js";

export const router = Router();

const repo = new CaregiverPetPreferenceRepository();
const useCase = new CaregiverPetPreferenceFacadeUseCase(repo);

router.post(
  "/:caregiverId/preferences",
  async (req: Request, res: Response) => {
    try {
      const caregiverId = Number(req.params.caregiverId);

      const body = Array.isArray(req.body) ? req.body : [req.body];

      const results = await Promise.all(
        body.map((item) =>
          useCase.create({
            caregiverId,
            ...item,
          }),
        ),
      );

      const hasError = results.find((r) => r.type === "left");

      if (hasError) {
        return failure(res, {
          message: hasError.error.message,
          code: 400,
        });
      }

      return success(res, {
        message: "Preferências criadas com sucesso",
        data: results.map((r) => r.value),
        code: 201,
      });
    } catch {
      return failure(res, {
        message: "Erro desconhecido",
        code: 500,
      });
    }
  },
);

router.get("/:caregiverId/preferences", async (req: Request, res: Response) => {
  try {
    const caregiverId = Number(req.params.caregiverId);

    const result = await useCase.listByCaregiver(caregiverId);

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
});

import { Router, Request, Response } from "express";
import { failure } from "../core/http/failure.js";
import { success } from "../core/http/success.js";
import { CaregiverPetPreferenceFacadeUseCase } from "../application/usecases/caregiver/caregiverPreferencePet.usecase.js";
import { CaregiverPetPreferenceRepository } from "../infrastructure/repositories/user/caregiverPetPreference.repository.js";
import { authMiddleware } from "../core/http/middlewares/auth.middlewares.js";
import { prisma } from "../infrastructure/database/config/prisma.js";

export const router = Router();

const repo = new CaregiverPetPreferenceRepository(prisma);
const useCase = new CaregiverPetPreferenceFacadeUseCase(repo);

router.post(
  "/preferences",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const caregiverId = req.user!.sub;

      const body = Array.isArray(req.body) ? req.body : [req.body];

      const inputs = body.map((item) => ({
        caregiverId,
        ...item,
      }));

      const result = await useCase.createMany(inputs);

      if (result.type === "left") {
        return failure(res, {
          message: result.error.message,
          code: 400,
        });
      }

      return success(res, {
        message: "Preferências criadas com sucesso",
        data: result.value,
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

import { Router, Request, Response } from "express";
import { CaregiverRepository } from "../infrastructure/repositories/user/userCaregiver.repository.js";
import { failure } from "../core/http/failure.js";
import { success } from "../core/http/success.js";
import { ListPublicCaregiversUseCase } from "../application/usecases/caregiver/getPublicCaregiver.usecase.js";

export const router = Router();

const caregiverRepo = new CaregiverRepository();

const caregiverUseCase = new ListPublicCaregiversUseCase(caregiverRepo);

router.get("/public", async (req: Request, res: Response) => {
  try {
    const { state, city, minRating, serviceIds } = req.query;

    const filters = {
      state: state ? String(state) : undefined,
      city: city ? String(city) : undefined,
      minRating: minRating ? Number(minRating) : undefined,
      serviceIds: serviceIds
        ? Array.isArray(serviceIds)
          ? serviceIds.map(Number)
          : [Number(serviceIds)]
        : undefined,
    };

    const result = await caregiverUseCase.execute(filters);

    if (result.type === "left") {
      return failure(res, {
        message: result.error.message,
        code: 400,
      });
    }

    return success(res, {
      message: "Caregivers públicos encontrados",
      data: result.value,
    });
  } catch (error) {
    return failure(res, {
      message: error instanceof Error ? error.message : "Erro desconhecido",
      code: 500,
    });
  }
});

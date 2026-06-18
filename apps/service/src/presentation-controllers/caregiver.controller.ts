import { Router, Request, Response } from "express";
import { CaregiverFacadeUseCase } from "../application/usecases/profiles/caregiverProfile.usecase.js";
import { CaregiverRepository } from "../infrastructure/repositories/user/userCaregiver.repository.js";
import { GeolocationService } from "../infrastructure/repositories/geolocation/geolocation.repository.js";
import { failure } from "../core/http/failure.js";
import { success } from "../core/http/success.js";

export const router = Router();

const caregiverRepo = new CaregiverRepository();
const geolocationService = new GeolocationService();

const caregiverUseCase = new CaregiverFacadeUseCase(
  caregiverRepo,
  geolocationService,
);

router.get("/public", async (req: Request, res: Response) => {
  try {
    const { state, city, minRating, services } = req.query;

    const filters = {
      state: state ? String(state) : undefined,
      city: city ? String(city) : undefined,
      minRating: minRating ? Number(minRating) : undefined,
      services: services
        ? Array.isArray(services)
          ? services.map(Number)
          : [Number(services)]
        : undefined,
    };

    const result = await caregiverUseCase.getPublicCaregivers(filters);

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

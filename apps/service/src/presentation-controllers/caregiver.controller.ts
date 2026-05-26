import { Router, Request, Response } from "express";
import { CaregiverFacadeUseCase } from "../application/usecases/profiles/caregiverProfile.usecase.js";
import { CaregiverRepository } from "../infrastructure/repositories/user/userCaregiver.repository.js";
import { GeolocationService } from "../infrastructure/repositories/geolocation/geolocation.repository.js";

export const router = Router();

const caregiverRepo = new CaregiverRepository();
const geolocationService = new GeolocationService();

const caregiverUseCase = new CaregiverFacadeUseCase(
  caregiverRepo,
  geolocationService,
);

// Endpoint para obter os perfis públicos dos cuidadores
router.get("/caregivers/public", async (req: Request, res: Response) => {
  try {
    const caregivers = await caregiverUseCase.getPublicCaregivers();

    return res.status(200).json({
      message: "Caregivers públicos encontrados",
      data: caregivers,
    });
  } catch (error) {
    return res.status(400).json({
      message: error instanceof Error ? error.message : "Erro desconhecido",
    });
  }
});

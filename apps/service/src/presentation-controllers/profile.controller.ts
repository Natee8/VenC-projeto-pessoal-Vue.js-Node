import { Router, Request, Response } from "express";
import { success } from "../core/http/success.js";
import { failure } from "../core/http/failure.js";
import { authMiddleware } from "../core/http/middlewares/auth.middlewares.js";

import { ProfileUseCase } from "../application/usecases/profiles/profiles.usecase.js";
import { UsersRepository } from "../infrastructure/repositories/auth/authLogin.repository.js";
import { OwnerProfileRepository } from "../infrastructure/repositories/user/userOwner.repository.js";
import { CaregiverRepository } from "../infrastructure/repositories/user/userCaregiver.repository.js";
import { ServiceOfferRepository } from "../infrastructure/repositories/services/serviceOffer.repository.js";
import { ServiceRepository } from "../infrastructure/repositories/services/serviceModel.repository.js";
import { CaregiverPetPreferenceRepository } from "../infrastructure/repositories/user/caregiverPetPreference.repository.js";
import { prisma } from "../infrastructure/database/config/prisma.js";

export const router = Router();

const usersRepo = new UsersRepository(prisma);
const ownerRepo = new OwnerProfileRepository(prisma);
const caregiverRepo = new CaregiverRepository(prisma);
const serviceOfferRepo = new ServiceOfferRepository(prisma);
const serviceRepo = new ServiceRepository(prisma);
const preferenceRepo = new CaregiverPetPreferenceRepository(prisma);

const useCase = new ProfileUseCase(
  usersRepo,
  ownerRepo,
  caregiverRepo,
  serviceOfferRepo,
  serviceRepo,
  preferenceRepo,
);

router.get("/", authMiddleware, async (req: Request, res: Response) => {
  try {
    const userId = req.user?.sub;

    if (!userId) {
      return failure(res, {
        message: "Não autenticado",
        code: 401,
      });
    }

    const result = await useCase.getProfile(userId);

    return success(res, {
      message: "Perfil carregado com sucesso",
      data: result,
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Erro desconhecido";

    return failure(res, {
      message,
      code: 500,
    });
  }
});

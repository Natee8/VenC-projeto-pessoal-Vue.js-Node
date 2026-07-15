import { Router, Request, Response } from "express";
import { success } from "../core/http/success.js";
import { failure } from "../core/http/failure.js";
import { authMiddleware } from "../core/http/middlewares/auth.middlewares.js";

import { ProfileUseCase } from "../application/usecases/profiles/profiles.usecase.js";
import { UsersRepository } from "../infrastructure/repositories/auth/authLogin.repository.js";
import { OwnerProfileRepository } from "../infrastructure/repositories/user/userOwner.repository.js";
import { CaregiverRepository } from "../infrastructure/repositories/user/userCaregiver.repository.js";
import { ServiceOfferRepository } from "../infrastructure/repositories/services/serviceOffer.repository.js";
import { UserReviewRepository } from "../infrastructure/repositories/rating/ratingUser.repositorie.js";
import { CaregiverPetPreferenceRepository } from "../infrastructure/repositories/user/caregiverPetPreference.repository.js";
import { PrismaClient } from "../generated/prisma/index.js";

export const router = Router();
const prisma = new PrismaClient();

const usersRepo = new UsersRepository();
const ownerRepo = new OwnerProfileRepository();
const caregiverRepo = new CaregiverRepository();
const serviceRepo = new ServiceOfferRepository(prisma);
const reviewRepo = new UserReviewRepository(prisma);
const preferenceRepo = new CaregiverPetPreferenceRepository();

const useCase = new ProfileUseCase(
  usersRepo,
  ownerRepo,
  caregiverRepo,
  serviceRepo,
  reviewRepo,
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

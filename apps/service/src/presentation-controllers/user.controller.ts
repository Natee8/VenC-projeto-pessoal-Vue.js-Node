import { Router } from "express";

import { PasswordService } from "../application/service/passwordComparer.js";
import { UsersRepository } from "../infrastructure/repositories/auth/authLogin.repository.js";

import { CreateUserBaseUseCase } from "../application/usecases/profiles/createUserBase.usecase.js";
import { OwnerProfileFacadeUseCase } from "../application/usecases/profiles/ownerProfile.usecase.js";
import { CaregiverFacadeUseCase } from "../application/usecases/profiles/caregiverProfile.usecase.js";

import { OwnerProfileRepository } from "../infrastructure/repositories/user/userOwner.repository.js";
import { CaregiverRepository } from "../infrastructure/repositories/user/userCaregiver.repository.js";

import { RegisterUseCase } from "../application/usecases/auth/register.usecase.js";
import { RegisterController } from "../controllers/register.js";
import { PrismaClient } from "../generated/prisma/index.js";

const router = Router();
const prisma = new PrismaClient();

const usersRepo = new UsersRepository();
const ownerRepo = new OwnerProfileRepository();
const caregiverRepo = new CaregiverRepository();

const passwordService = new PasswordService();

const createUserBaseUseCase = new CreateUserBaseUseCase(
  usersRepo,
  passwordService,
);

const ownerProfileUseCase = new OwnerProfileFacadeUseCase(ownerRepo);
const caregiverProfileUseCase = new CaregiverFacadeUseCase(caregiverRepo);

const registerUseCase = new RegisterUseCase(
  prisma,
  createUserBaseUseCase,
  ownerProfileUseCase,
  caregiverProfileUseCase,
);

const registerController = new RegisterController(registerUseCase);

router.post("/register", (req, res) => {
  return registerController.handle(req, res);
});

export { router };

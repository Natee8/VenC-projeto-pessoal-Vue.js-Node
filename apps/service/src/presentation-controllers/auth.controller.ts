import { Router, Request, Response } from "express";

import { UsersRepository } from "../infrastructure/repositories/auth/authLogin.repository.js";

import { AuthenticateUserUseCase } from "../application/usecases/auth/auth.usecase.js";
import { GenerateTokenUseCase } from "../application/usecases/auth/generateToken.usecase.js";
import { RefreshTokenUseCase } from "../application/usecases/auth/refreshToken.usecase.js";

import { JwtTokenGenerator } from "../infrastructure/repositories/auth/tokenGenerator.js";
import { RefreshTokenRepository } from "../infrastructure/repositories/auth/refreshToken.repository.js";
import { getErrorMessage } from "../utils/getErrorMessage.js";
import { PasswordService } from "../application/service/passwordComparer.js";
import { Email } from "@packages";
import { RegisterUseCase } from "../application/usecases/auth/register.usecase.js";
import { OwnerProfileRepository } from "../infrastructure/repositories/user/userOwner.repository.js";
import { CaregiverRepository } from "../infrastructure/repositories/user/userCaregiver.repository.js";
import { GeolocationService } from "../infrastructure/repositories/geolocation/geolocation.repository.js";
import { CreateUserBaseUseCase } from "../application/usecases/profiles/createUserBase.usecase.js";
import { OwnerProfileFacadeUseCase } from "../application/usecases/profiles/ownerProfile.usecase.js";
import { CaregiverFacadeUseCase } from "../application/usecases/profiles/caregiverProfile.usecase.js";
import { PrismaClient } from "../generated/prisma/index.js";

export const router: Router = Router();
const prisma = new PrismaClient();

const ownerRepo = new OwnerProfileRepository();
const caregiverRepo = new CaregiverRepository();
const geolocationService = new GeolocationService();

const usersRepo = new UsersRepository();
const refreshTokenRepo = new RefreshTokenRepository();
const passwordService = new PasswordService();
const tokenGenerator = new JwtTokenGenerator();

const createUserBaseUseCase = new CreateUserBaseUseCase(
  usersRepo,
  passwordService,
);

const ownerProfileUseCase = new OwnerProfileFacadeUseCase(ownerRepo);

const caregiverProfileUseCase = new CaregiverFacadeUseCase(
  caregiverRepo,
  geolocationService,
);

const registerUseCase = new RegisterUseCase(
  prisma,
  createUserBaseUseCase,
  ownerProfileUseCase,
  caregiverProfileUseCase,
);

const authUseCase = new AuthenticateUserUseCase(usersRepo, passwordService);
const generateTokenUseCase = new GenerateTokenUseCase(
  tokenGenerator,
  refreshTokenRepo,
);

const refreshTokenUseCase = new RefreshTokenUseCase(
  refreshTokenRepo,
  tokenGenerator,
);

/**
 * LOGIN
 */
router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  let emailVO: Email;

  try {
    emailVO = Email.create(email);
  } catch (error: unknown) {
    return res.status(400).json({
      message: getErrorMessage(error),
    });
  }

  const authResult = await authUseCase.execute(emailVO, password);

  if (authResult.isException()) {
    return res.status(401).json({
      message: authResult.error.message,
    });
  }

  const tokenResult = await generateTokenUseCase.execute(authResult.value);

  if (tokenResult.isException()) {
    return res.status(500).json({
      message: tokenResult.error.message,
    });
  }

  return res.status(200).json({
    message: "Login ok",
    data: tokenResult.value,
  });
});

/**
 * REFRESH TOKEN
 */
router.post("/refresh", async (req: Request, res: Response) => {
  const { refreshToken } = req.body;

  const result = await refreshTokenUseCase.execute(refreshToken);

  if (result.isException()) {
    return res.status(401).json({
      message: result.error.message,
    });
  }

  return res.status(200).json({
    message: "Token renovado com sucesso",
    data: result.value,
  });
});

router.post("/register", async (req: Request, res: Response) => {
  try {
    const result = await registerUseCase.execute(req.body);

    if (result.isException?.()) {
      return res.status(400).json({
        message: result.error.message,
      });
    }

    return res.status(201).json({
      message: "Usuário criado com sucesso",
      data: result.value,
    });
  } catch (error) {
    return res.status(400).json({
      message: getErrorMessage(error),
    });
  }
});

export default router;

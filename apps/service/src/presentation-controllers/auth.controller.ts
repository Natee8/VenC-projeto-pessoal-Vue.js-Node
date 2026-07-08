import { Router, Request, Response } from "express";

import { UsersRepository } from "../infrastructure/repositories/auth/authLogin.repository.js";

import { AuthenticateUserUseCase } from "../application/usecases/auth/auth.usecase.js";
import { GenerateTokenUseCase } from "../application/usecases/auth/generateToken.usecase.js";
import { RefreshTokenUseCase } from "../application/usecases/auth/refreshToken.usecase.js";

import { JwtTokenGenerator } from "../infrastructure/repositories/auth/tokenGenerator.js";
import { RefreshTokenRepository } from "../infrastructure/repositories/auth/refreshToken.repository.js";
import { getErrorMessage } from "../utils/getErrorMessage.js";
import { PasswordService } from "../application/service/passwordComparer.js";
import { verifyResetToken } from "../utils/jwt.js";
import { Email, UserId } from "@packages";
import { RegisterUseCase } from "../application/usecases/auth/register.usecase.js";
import { OwnerProfileRepository } from "../infrastructure/repositories/user/userOwner.repository.js";
import { CaregiverRepository } from "../infrastructure/repositories/user/userCaregiver.repository.js";
import { GeolocationService } from "../infrastructure/repositories/geolocation/geolocation.repository.js";
import { CreateUserBaseUseCase } from "../application/usecases/profiles/createUserBase.usecase.js";
import { OwnerProfileFacadeUseCase } from "../application/usecases/profiles/ownerProfile.usecase.js";
import { CaregiverFacadeUseCase } from "../application/usecases/profiles/caregiverProfile.usecase.js";
import { PrismaClient } from "../generated/prisma/index.js";
import { uploadProfileImage } from "../application/service/uploadImages.js";
import { RegisterController } from "../controllers/register.js";
import { authMiddleware } from "../core/http/middlewares/auth.middlewares.js";
import {
  loginLimiter,
  resetPasswordLimiter,
} from "../core/http/middlewares/rateLimiter.middlewares.js";
import { failure } from "../core/http/failure.js";
import { GetMeUseCase } from "../application/usecases/profiles/getMe.usecase.js";
import { success } from "../core/http/response.js";
import { LogoutUseCase } from "../application/usecases/auth/logout.usecase.js";

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

const getMeUseCase = new GetMeUseCase(usersRepo);

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

/* verification-by-code repository/instance removed — reset now requires token only */

/**
 * LOGIN
 */
router.post("/login", loginLimiter, async (req: Request, res: Response) => {
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

//logout

const logoutUseCase = new LogoutUseCase(refreshTokenRepo);

router.post("/logout", authMiddleware, async (req: Request, res: Response) => {
  const { refreshToken } = req.body;
  const userId = req.user?.sub;

  if (!userId) {
    return failure(res, {
      message: "Não autenticado",
      code: 401,
    });
  }

  try {
    await logoutUseCase.execute(
      UserId.create(userId),
      refreshToken, // opcional
    );

    return success(res, {
      message: "Logout realizado com sucesso",
    });
  } catch (error) {
    return failure(res, {
      message: getErrorMessage(error),
      code: 400,
    });
  }
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

const registerController = new RegisterController(registerUseCase);

router.post(
  "/register",
  uploadProfileImage.single("profileImage"),
  registerController.handle.bind(registerController),
);

/**
 * RESET PASSWORD
 * Accepts { token, newPassword } or { email, code, newPassword }
 */
router.post(
  "/reset-password",
  resetPasswordLimiter,
  async (req: Request, res: Response) => {
    const { token, newPassword } = req.body;

    if (!token) {
      return res.status(400).json({ message: "Token é obrigatório" });
    }

    if (!newPassword) {
      return res.status(400).json({ message: "Nova senha é obrigatória" });
    }

    try {
      const payload = verifyResetToken(token);
      const targetEmail = payload.email;

      let emailVO: Email;
      try {
        emailVO = Email.create(targetEmail);
      } catch (err: unknown) {
        return res.status(400).json({ message: "Email inválido" });
      }

      const user = await usersRepo.findByEmail(emailVO);
      if (!user) {
        return res.status(200).json({
          message:
            "Se o email existe em nosso sistema, você receberá um link para resetar sua senha",
        });
      }

      const newHash = await passwordService.hash(newPassword);
      user.changePassword(newHash);
      await usersRepo.save(user);

      return res.status(200).json({
        message:
          "Se o email existe em nosso sistema, você receberá um link para resetar sua senha",
      });
    } catch (error) {
      return res.status(400).json({ message: getErrorMessage(error) });
    }
  },
);

router.get("/me", authMiddleware, async (req: Request, res: Response) => {
  try {
    const userId = req.user?.sub;

    if (!userId) {
      return failure(res, {
        message: "Não autenticado",
        code: 401,
      });
    }

    const result = await getMeUseCase.execute(userId);

    return success(res, {
      message: "Usuário autenticado",
      data: result,
    });
  } catch (error) {
    return failure(res, {
      message: "Erro ao buscar usuário",
      code: 500,
    });
  }
});

export default router;

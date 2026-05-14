import { UsersRepository } from "../infrastructure/repositories/auth/authLogin.repository.js";
import { RefreshTokenRepository } from "../infrastructure/repositories/auth/refreshToken.repository.js";
import { PasswordService } from "../application/service/passwordComparer.js";
import { JwtTokenGenerator } from "../infrastructure/repositories/auth/tokenGenerator.js";
import { AuthenticateUserUseCase } from "../application/usecases/auth/auth.usecase.js";
import { GenerateTokenUseCase } from "../application/usecases/auth/generateToken.usecase.js";
import { RefreshTokenUseCase } from "../application/usecases/auth/refreshToken.usecase.js";
import { Router, Request, Response } from "express";
import { failure } from "../core/http/failure.js";
import { success } from "../core/http/response.js";

const usersRepo = new UsersRepository();
const refreshTokenRepo = new RefreshTokenRepository();
const passwordService = new PasswordService();
const tokenGenerator = new JwtTokenGenerator();

const authUseCase = new AuthenticateUserUseCase(usersRepo, passwordService);
const generateTokenUseCase = new GenerateTokenUseCase(
  tokenGenerator,
  refreshTokenRepo,
);
const refreshTokenUseCase = new RefreshTokenUseCase(
  refreshTokenRepo,
  tokenGenerator,
);

export const router: Router = Router();

router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const authResult = await authUseCase.execute(email, password);

  if (authResult.type === "left") {
    return failure(res, {
      message: authResult.error.message,
      code: 401,
    });
  }

  const tokenResult = await generateTokenUseCase.execute(authResult.value);

  if (tokenResult.type === "left") {
    return failure(res, {
      message: tokenResult.error.message,
      code: 500,
    });
  }

  return success(res, {
    message: "Login realizado com sucesso",
    data: tokenResult.value,
    code: 200,
  });
});

router.post("/refresh", async (req: Request, res: Response) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return failure(res, {
      message: "Refresh token é obrigatório",
      code: 400,
    });
  }

  const result = await refreshTokenUseCase.execute(refreshToken);

  if (result.type === "left") {
    return failure(res, {
      message: result.error.message,
      code: 401,
    });
  }

  return success(res, {
    message: "Token renovado com sucesso",
    data: result.value,
  });
});

router.post("/logout", async (req: Request, res: Response) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return failure(res, {
      message: "Refresh token é obrigatório",
      code: 400,
    });
  }

  await refreshTokenRepo.revoke(refreshToken);

  return success(res, {
    message: "Logout realizado com sucesso",
  });
});

export default router;

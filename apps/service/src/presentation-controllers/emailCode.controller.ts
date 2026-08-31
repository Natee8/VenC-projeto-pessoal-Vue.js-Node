import { Router, Request, Response } from "express";

import { prisma } from "../infrastructure/database/config/prisma.js";

import { getErrorMessage } from "../utils/getErrorMessage.js";
import { Email } from "@packages";
import { PrismaVerificationCodeRepository } from "../infrastructure/repositories/emailCode/verificationCode.repository.js";
import { NodemailerEmailService } from "../application/service/emailService.js";
import { SendResetPasswordCodeUseCase } from "../application/usecases/codeEmail/sendCodeVerification.usecase.js";
import { VerifyResetPasswordCodeUseCase } from "../application/usecases/codeEmail/verifyCodeEmail.usecase.js";
import { UsersRepository } from "../infrastructure/repositories/auth/authLogin.repository.js";
import { codeEmailLimiter } from "../core/http/middlewares/rateLimiter.middlewares.js";
import { success } from "../core/http/success.js";
import { failure } from "../core/http/failure.js";

export const router: Router = Router();

const verificationCodeRepo = new PrismaVerificationCodeRepository(prisma);
const emailService = new NodemailerEmailService();
const usersRepository = new UsersRepository(prisma);

const verifyResetPasswordCodeUseCase = new VerifyResetPasswordCodeUseCase(
  verificationCodeRepo,
);

const sendResetPasswordCodeUseCase = new SendResetPasswordCodeUseCase(
  verificationCodeRepo,
  emailService,
  usersRepository,
);

router.post(
  "/send-code",
  codeEmailLimiter,
  async (req: Request, res: Response) => {
    const { email } = req.body;

    let emailVO: Email;

    try {
      emailVO = Email.create(email);
    } catch (error: unknown) {
      return failure(res, {
        message: getErrorMessage(error),
        code: 400,
      });
    }

    try {
      await sendResetPasswordCodeUseCase.execute(emailVO);

      return success(res, {
        message: "Código enviado com sucesso",
      });
    } catch (error) {
      return failure(res, {
        message: getErrorMessage(error),
        code: 500,
      });
    }
  },
);

router.post("/verify-code", async (req: Request, res: Response) => {
  const { token, email, code } = req.body;

  // If token provided, just verify it
  if (token) {
    try {
      // verifyResetToken will throw if invalid/expired
      const { email: tokenEmail } = await import("../utils/jwt.js").then((m) =>
        m.verifyResetToken(token),
      );

      return success(res, {
        message: "Token válido",
        data: { email: tokenEmail, resetToken: token },
      });
    } catch (error) {
      return failure(res, {
        message: getErrorMessage(error),
        code: 400,
      });
    }
  }

  // Otherwise expect email + code flow and return a reset token
  if (!email || !code) {
    return failure(res, {
      message: "Token ou email+code são obrigatórios",
      code: 400,
    });
  }

  let emailVO: Email;

  try {
    emailVO = Email.create(email);
  } catch (error: unknown) {
    return failure(res, {
      message: getErrorMessage(error),
      code: 400,
    });
  }

  try {
    const { resetToken } = await verifyResetPasswordCodeUseCase.execute({
      email: emailVO.getValue(),
      code,
    });

    return success(res, {
      message: "Código válido",
      data: { email: emailVO.getValue(), resetToken },
    });
  } catch (error) {
    return failure(res, {
      message: getErrorMessage(error),
      code: 400,
    });
  }
});

export default router;

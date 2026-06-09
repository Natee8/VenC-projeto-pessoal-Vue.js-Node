import { Router, Request, Response } from "express";

import { PrismaClient } from "../generated/prisma/index.js";

import { getErrorMessage } from "../utils/getErrorMessage.js";
import { Email } from "@packages";
import { PrismaVerificationCodeRepository } from "../infrastructure/repositories/emailCode/verificationCode.repository.js";
import { NodemailerEmailService } from "../application/service/emailService.js";
import { SendResetPasswordCodeUseCase } from "../application/usecases/codeEmail/sendCodeVerification.usecase.js";
import { VerifyResetPasswordCodeUseCase } from "../application/usecases/codeEmail/verifyCodeEmail.usecase.js";
import { UsersRepository } from "../infrastructure/repositories/auth/authLogin.repository.js";

export const router: Router = Router();
const prisma = new PrismaClient();

const verificationCodeRepo = new PrismaVerificationCodeRepository(prisma);
const emailService = new NodemailerEmailService();
const usersRepository = new UsersRepository();

const verifyResetPasswordCodeUseCase = new VerifyResetPasswordCodeUseCase(
  verificationCodeRepo,
);

const sendResetPasswordCodeUseCase = new SendResetPasswordCodeUseCase(
  verificationCodeRepo,
  emailService,
  usersRepository,
);

router.post("/send-code", async (req: Request, res: Response) => {
  const { email } = req.body;

  let emailVO: Email;

  try {
    emailVO = Email.create(email);
  } catch (error: unknown) {
    return res.status(400).json({
      message: getErrorMessage(error),
    });
  }

  try {
    await sendResetPasswordCodeUseCase.execute(emailVO);

    return res.status(200).json({
      message: "Código enviado com sucesso",
    });
  } catch (error) {
    return res.status(500).json({
      message: getErrorMessage(error),
    });
  }
});

router.post("/verify-code", async (req: Request, res: Response) => {
  const { token, email, code } = req.body;

  // If token provided, just verify it
  if (token) {
    try {
      // verifyResetToken will throw if invalid/expired
      const { email: tokenEmail } = await import("../utils/jwt.js").then((m) =>
        m.verifyResetToken(token),
      );

      return res.status(200).json({
        message: "Token válido",
        email: tokenEmail,
        resetToken: token,
      });
    } catch (error) {
      return res.status(400).json({
        message: getErrorMessage(error),
      });
    }
  }

  // Otherwise expect email + code flow and return a reset token
  if (!email || !code) {
    return res.status(400).json({
      message: "Token ou email+code são obrigatórios",
    });
  }

  let emailVO: Email;

  try {
    emailVO = Email.create(email);
  } catch (error: unknown) {
    return res.status(400).json({
      message: getErrorMessage(error),
    });
  }

  try {
    const { resetToken } = await verifyResetPasswordCodeUseCase.execute({
      email: emailVO.getValue(),
      code,
    });

    return res.status(200).json({
      message: "Código válido",
      resetToken,
    });
  } catch (error) {
    return res.status(400).json({
      message: getErrorMessage(error),
    });
  }
});

export default router;

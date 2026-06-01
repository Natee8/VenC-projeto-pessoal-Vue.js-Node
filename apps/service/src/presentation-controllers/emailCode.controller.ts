import { Router, Request, Response } from "express";

import { PrismaClient } from "../generated/prisma/index.js";

import { getErrorMessage } from "../utils/getErrorMessage.js";
import { Email } from "@packages";
import { PrismaVerificationCodeRepository } from "../infrastructure/repositories/emailCode/verificationCode.repository.js";
import { NodemailerEmailService } from "../application/service/emailService.js";
import { SendResetPasswordCodeUseCase } from "../application/usecases/codeEmail/sendCodeVerification.usecase.js";

export const router: Router = Router();
const prisma = new PrismaClient();

const verificationCodeRepo = new PrismaVerificationCodeRepository(prisma);
const emailService = new NodemailerEmailService();

const sendResetPasswordCodeUseCase = new SendResetPasswordCodeUseCase(
  verificationCodeRepo,
  emailService,
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
    await sendResetPasswordCodeUseCase.execute(emailVO.getValue());

    return res.status(200).json({
      message: "Código enviado com sucesso",
    });
  } catch (error) {
    return res.status(500).json({
      message: getErrorMessage(error),
    });
  }
});

export default router;

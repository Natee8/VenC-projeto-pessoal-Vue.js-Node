import { VerifyResetPasswordCodeUseCase } from "../application/usecases/codeEmail/verifyCodeEmail.usecase.js";
import { Request, Response } from "express";
import { getErrorMessage } from "../utils/getErrorMessage.js";

export class VerifyResetPasswordCodeController {
  constructor(
    private verifyResetPasswordCodeUseCase: VerifyResetPasswordCodeUseCase,
  ) {}

  async handle(req: Request, res: Response) {
    const { email, code } = req.body;

    if (!email || !code) {
      return res.status(400).json({
        message: "Email e código são obrigatórios",
      });
    }

    try {
      await this.verifyResetPasswordCodeUseCase.execute({
        email,
        code,
      });

      return res.status(200).json({
        message: "Código válido",
      });
    } catch (error) {
      return res.status(400).json({
        message: getErrorMessage(error),
      });
    }
  }
}

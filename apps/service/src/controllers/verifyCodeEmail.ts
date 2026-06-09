import { VerifyResetPasswordCodeUseCase } from "../application/usecases/codeEmail/verifyCodeEmail.usecase.js";
import { Request, Response } from "express";
import { getErrorMessage } from "../utils/getErrorMessage.js";
import { verifyResetToken } from "../utils/jwt.js";

export class VerifyResetPasswordCodeController {
  constructor(
    private verifyResetPasswordCodeUseCase: VerifyResetPasswordCodeUseCase,
  ) {}

  async handle(req: Request, res: Response) {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({
        message: "Token é obrigatório",
      });
    }

    try {
      const payload = verifyResetToken(token);

      await this.verifyResetPasswordCodeUseCase.execute({
        email: payload.email,
        code: payload.code,
      });

      return res.status(200).json({
        message: "Token e código válidos",
      });
    } catch (error) {
      return res.status(400).json({
        message: getErrorMessage(error),
      });
    }
  }
}

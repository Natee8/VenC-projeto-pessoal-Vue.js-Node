import { Request, Response } from "express";
import { SendResetPasswordCodeUseCase } from "../application/usecases/codeEmail/sendCodeVerification.usecase.js";
import { getErrorMessage } from "../utils/getErrorMessage.js";

export class SendResetPasswordCodeController {
  constructor(
    private sendResetPasswordCodeUseCase: SendResetPasswordCodeUseCase,
  ) {}

  async handle(req: Request, res: Response) {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        message: "Email é obrigatório",
      });
    }

    try {
      await this.sendResetPasswordCodeUseCase.execute(email);

      return res.status(200).json({
        message: "Código enviado com sucesso",
      });
    } catch (error) {
      return res.status(500).json({
        message: getErrorMessage(error),
      });
    }
  }
}

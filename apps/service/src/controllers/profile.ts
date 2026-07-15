import { Request, Response } from "express";
import { ProfileUseCase } from "../application/usecases/profiles/profiles.usecase.js";

export class ProfileController {
  constructor(private profileUseCase: ProfileUseCase) {}

  async getProfile(req: Request, res: Response) {
    try {
      if (!req.user || !req.user.sub) {
        return res.status(401).json({
          message: "Usuário não autenticado",
        });
      }
      const userId = req.user.sub;

      const profile = await this.profileUseCase.getProfile(userId);

      return res.status(200).json({
        message: "Perfil carregado com sucesso",
        data: profile,
      });
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Erro ao carregar perfil";

      return res.status(500).json({
        message,
      });
    }
  }
}

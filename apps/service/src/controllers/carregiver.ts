import { CaregiverFacadeUseCase } from "../application/usecases/profiles/caregiverProfile.usecase.js";
import { Request, Response } from "express";

export class CaregiverController {
  constructor(private caregiverUseCase: CaregiverFacadeUseCase) {}

  async save(req: Request, res: Response) {
    try {
      const {
        userId,
        offersHosting,
        serviceRadiusKm,
        address,
        isPublicProfile,
      } = req.body;

      const result = await this.caregiverUseCase.save({
        userId,
        offersHosting,
        serviceRadiusKm,
        address,
        isPublicProfile,
      });

      if (result.type === "left") {
        return res.status(400).json({
          message: result.error.message,
        });
      }

      return res.status(201).json({
        message: "Cuidador criado com sucesso",
        data: result.value,
      });
    } catch {
      return res.status(500).json({
        message: "Erro desconhecido",
      });
    }
  }
  async getByUserId(req: Request<{ userId: string }>, res: Response) {
    try {
      const userId = Number(req.params.userId);

      const result = await this.caregiverUseCase.getByUserId(userId);

      if (result.type === "left") {
        return res.status(404).json({
          message: result.error.message,
        });
      }

      return res.status(200).json({
        message: "Cuidador encontrado com sucesso",
        data: result.value,
      });
    } catch {
      return res.status(500).json({
        message: "Erro desconhecido",
      });
    }
  }

  // metodo para retornar cuidadores com perfil publico para exibir na home
  async getPublicCaregivers(req: Request, res: Response) {
    try {
      const result = await this.caregiverUseCase.getPublicCaregivers();

      if (result.type === "left") {
        return res.status(400).json({
          message: result.error.message,
        });
      }

      return res.status(200).json({
        message: "Cuidadores listados com sucesso",
        data: result.value,
      });
    } catch {
      return res.status(500).json({
        message: "Erro desconhecido",
      });
    }
  }
}

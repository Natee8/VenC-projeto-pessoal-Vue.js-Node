import { CaregiverFacadeUseCase } from "../application/usecases/profiles/caregiverProfile.usecase.js";
import { Request, Response } from "express";

export class CaregiverController {
  constructor(private caregiverUseCase: CaregiverFacadeUseCase) {}

  async save(req: Request, res: Response) {
    console.log(req.body);
    console.log("ADDRESS:", req.body.address);
    try {
      const {
        userId,
        offersHosting,
        serviceRadiusKm,
        address,
        isPublicProfile,
      } = req.body;

      const carregiver = await this.caregiverUseCase.save({
        userId,
        offersHosting,
        serviceRadiusKm,
        address,
        isPublicProfile,
      });
      return res.status(201).json(carregiver);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      }
      return res.status(400).json({ error: "Erro desconhecido" });
    }
  }

  async getByUserId(req: Request<{ userId: string }>, res: Response) {
    try {
      const userId = Number(req.params.userId);

      const caregiver = await this.caregiverUseCase.getByUserId(userId);

      if (!caregiver) {
        return res.status(404).json({ error: "Cuidador não encontrado" });
      }

      return res.status(200).json(caregiver);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      }
      return res.status(400).json({ error: "Erro desconhecido" });
    }
  }
}

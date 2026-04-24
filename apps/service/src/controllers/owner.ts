import { Request, Response } from "express";
import { OwnerProfileFacadeUseCase } from "../application/usecases/profiles/ownerProfile.usecase.js";

export class OwnerProfileController {
  constructor(private ownerProfileUseCase: OwnerProfileFacadeUseCase) {}

  async save(req: Request, res: Response) {
    console.log(req.body);
    console.log("ADDRESS:", req.body.address);
    try {
      const { userId, address, phone, searchRadiusKm } = req.body;

      const profile = await this.ownerProfileUseCase.save({
        userId,
        address,
        phone,
        searchRadiusKm,
      });

      return res.status(201).json(profile);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      }
      return res.status(400).json({ error: "Erro desconhecido" });
    }
  }

  async getByUserId(req: Request, res: Response) {
    try {
      const userId = Number(req.params.userId);

      const profile = await this.ownerProfileUseCase.getByUserId(userId);

      if (!profile) {
        return res.status(404).json({ error: "Perfil não encontrado" });
      }

      return res.status(200).json(profile);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      }
      return res.status(400).json({ error: "Erro desconhecido" });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const profiles = await this.ownerProfileUseCase.getAll();
      return res.status(200).json(profiles);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      }
      return res.status(400).json({ error: "Erro desconhecido" });
    }
  }
}

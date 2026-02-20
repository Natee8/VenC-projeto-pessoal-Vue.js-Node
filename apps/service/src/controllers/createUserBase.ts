import { CreateUserBaseUseCase } from "../application/usecases/auth/createUserBase.usecase.js";
import { Request, Response } from "express";

export class CreateUserBaseController {
  constructor(private createUserBaseUseCase: CreateUserBaseUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const { name, email, password, cpf, birthDate } = req.body;

      const user = await this.createUserBaseUseCase.execute({
        name,
        email,
        password,
        cpf,
        birthDate,
      });

      return res.status(201).json(user);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      }
      return res.status(400).json({ error: "Erro desconhecido" });
    }
  }
}

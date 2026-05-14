import { CreateUserBaseUseCase } from "../application/usecases/profiles/createUserBase.usecase.js";
import { Request, Response } from "express";

export class CreateUserBaseController {
  constructor(private createUserBaseUseCase: CreateUserBaseUseCase) {}

  async handle(req: Request, res: Response) {
    const { name, email, password, cpf, birthDate } = req.body;

    const result = await this.createUserBaseUseCase.execute({
      name,
      email,
      password,
      cpf,
      birthDate,
    });

    if (result.type === "left") {
      return res.status(400).json({
        message: result.error.message,
      });
    }

    return res.status(201).json({
      message: "Usuário criado com sucesso",
      data: result.value,
    });
  }
}

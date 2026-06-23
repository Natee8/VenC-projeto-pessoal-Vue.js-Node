import { Request, Response } from "express";
import { success } from "../core/http/response.js";
import { failure } from "../core/http/failure.js";
import { GetMeUseCase } from "../application/usecases/profiles/getMe.usecase.js";

export class MeController {
  constructor(private readonly getMeUseCase: GetMeUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const userId = req.user?.sub;

      if (!userId) {
        return failure(res, {
          message: "Usuário não autenticado",
          code: 401,
        });
      }

      const result = await this.getMeUseCase.execute(userId);

      return success(res, {
        message: "Usuário carregado com sucesso",
        data: result,
        code: 200,
      });
    } catch (error) {
      return failure(res, {
        message: "Erro ao buscar usuário",
        code: 500,
      });
    }
  }
}

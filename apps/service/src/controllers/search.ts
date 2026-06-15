import { Request, Response } from "express";
import { SearchServicesUseCase } from "../application/usecases/search/searchService.usecase.js";

export class SearchServicesController {
  constructor(private searchUseCase: SearchServicesUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const { q } = req.query;

      if (!q || typeof q !== "string" || q.trim().length < 2) {
        return res.status(400).json({
          message: "Query inválida",
        });
      }

      const result = await this.searchUseCase.execute(q);

      return res.status(200).json({
        data: result,
      });
    } catch (err) {
      console.error(err);

      return res.status(500).json({
        message: "Erro ao buscar serviços",
      });
    }
  }
}

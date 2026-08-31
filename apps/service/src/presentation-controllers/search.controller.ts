import { Router, Request, Response } from "express";
import { prisma } from "../infrastructure/database/config/prisma.js";
import { ServiceRepository } from "../infrastructure/repositories/services/serviceModel.repository.js";
import { VectorSearchService } from "../application/service/vectorSearchService.js";
import { SearchServicesUseCase } from "../application/usecases/search/searchService.usecase.js";
import { FuzzySearchService } from "../application/service/fuseSearchService.js";
import { success } from "../core/http/success.js";
import { failure } from "../core/http/failure.js";

export const router = Router();

const serviceRepo = new ServiceRepository(prisma);
const fuse = new FuzzySearchService();
const vectorService = new VectorSearchService();

const searchUseCase = new SearchServicesUseCase(
  serviceRepo,
  vectorService,
  fuse,
);

router.get("/search", async (req: Request, res: Response) => {
  try {
    const { q } = req.query;

    if (!q || typeof q !== "string" || q.trim().length < 2) {
      return failure(res, {
        message: "Query inválida",
        code: 400,
      });
    }

    const result = await searchUseCase.execute(q.trim());

    return success(res, {
      message: "Busca realizada com sucesso",
      data: result,
    });
  } catch (error) {
    return failure(res, {
      message: error instanceof Error ? error.message : "Erro desconhecido",
      code: 500,
    });
  }
});

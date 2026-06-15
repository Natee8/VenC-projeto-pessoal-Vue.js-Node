import { Router, Request, Response } from "express";
import { PrismaClient } from "../generated/prisma/index.js";
import { ServiceRepository } from "../infrastructure/repositories/services/serviceModel.repository.js";
import { VectorSearchService } from "../application/service/vectorSearchService.js";
import { SearchServicesUseCase } from "../application/usecases/search/searchService.usecase.js";

const prisma = new PrismaClient();
export const router = Router();

const serviceRepo = new ServiceRepository(prisma);
const vectorService = new VectorSearchService();

const searchUseCase = new SearchServicesUseCase(serviceRepo, vectorService);

router.get("/search", async (req: Request, res: Response) => {
  try {
    const { q } = req.query;

    if (!q || typeof q !== "string" || q.length < 2) {
      return res.status(400).json({
        message: "Query inválida",
      });
    }

    const result = await searchUseCase.execute(q);

    return res.status(200).json({
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      message: error instanceof Error ? error.message : "Erro desconhecido",
    });
  }
});

import { Router, Request, Response } from "express";
import { ServiceRepository } from "../infrastructure/repositories/services/serviceModel.repository.js";
import { ServiceModelUseCase } from "../application/usecases/services/serviceModel.usecase.js";
import { PrismaClient } from "../generated/prisma/index.js";
import { VectorSearchService } from "../application/service/vectorSearchService.js";

const prisma = new PrismaClient();
export const router = Router();

const serviceRepo = new ServiceRepository(prisma);
const vectorService = new VectorSearchService();
const serviceUseCase = new ServiceModelUseCase(serviceRepo, vectorService);

router.post("/create-catalogo", async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;

    const result = await serviceUseCase.create({
      name,
      description,
    });

    if (result.isException()) {
      return res.status(400).json({
        message: result.error.message,
      });
    }

    return res.status(201).json({
      message: "Serviço de catalogo criado com sucesso",
      data: result.value,
    });
  } catch (error) {
    return res.status(500).json({
      message: error instanceof Error ? error.message : "Erro desconhecido",
    });
  }
});

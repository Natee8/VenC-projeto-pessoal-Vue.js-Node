import { Router, Request, Response } from "express";
import { ServiceRepository } from "../infrastructure/repositories/services/serviceModel.repository.js";
import { ServiceModelUseCase } from "../application/usecases/services/serviceModel.usecase.js";
import { prisma } from "../infrastructure/database/config/prisma.js";
import { VectorSearchService } from "../application/service/vectorSearchService.js";
import { authMiddleware } from "../core/http/middlewares/auth.middlewares.js";
import { success } from "../core/http/success.js";
import { failure } from "../core/http/failure.js";

export const router = Router();

const serviceRepo = new ServiceRepository(prisma);
const vectorService = new VectorSearchService();
const serviceUseCase = new ServiceModelUseCase(serviceRepo, vectorService);

router.get("/catalogo", async (_, res) => {
  try {
    const result = await serviceUseCase.getAll();

    if (result.isException()) {
      return failure(res, {
        message: result.error.message,
        code: 400,
      });
    }

    return success(res, {
      message: "Catálogo de serviços carregado com sucesso",
      data: result.value,
    });
  } catch (error) {
    return failure(res, {
      message: error instanceof Error ? error.message : "Erro desconhecido",
      code: 500,
    });
  }
});

router.post(
  "/create-catalogo",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { name, description } = req.body;

      const result = await serviceUseCase.create({
        name,
        description,
      });

      if (result.isException()) {
        return failure(res, {
          message: result.error.message,
          code: 400,
        });
      }

      return success(res, {
        message: "Serviço de catálogo criado com sucesso",
        data: result.value,
        code: 201,
      });
    } catch (error) {
      return failure(res, {
        message: error instanceof Error ? error.message : "Erro desconhecido",
        code: 500,
      });
    }
  },
);

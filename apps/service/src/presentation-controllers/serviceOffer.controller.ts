import { Router, Request, Response } from "express";
import { ServiceOfferUseCase } from "../application/usecases/services/serviceOffer.usecase.js";
import { ServiceOfferRepository } from "../infrastructure/repositories/services/serviceOffer.repository.js";
import { ServiceRepository } from "../infrastructure/repositories/services/serviceModel.repository.js";
import { PrismaClient } from "../generated/prisma/index.js";
import { authMiddleware } from "../core/http/middlewares/auth.middlewares.js";
import { success } from "../core/http/success.js";
import { failure } from "../core/http/failure.js";

const prisma = new PrismaClient();
export const router = Router();

const serviceRepo = new ServiceRepository(prisma);
const serviceOfferRepo = new ServiceOfferRepository(prisma);

const serviceOfferUseCase = new ServiceOfferUseCase(
  serviceRepo,
  serviceOfferRepo,
);

router.post(
  "/offer-create",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const body = Array.isArray(req.body) ? req.body : [req.body];

      const inputs = body.map(
        ({ caregiverId, serviceId, price, description }) => ({
          caregiverId,
          serviceId,
          price,
          description,
        }),
      );

      const result = await serviceOfferUseCase.createMany(inputs);

      if (result.type === "left") {
        return failure(res, {
          message: result.error.message,
          code: 400,
        });
      }

      return success(res, {
        message: "Serviço ofertado criado com sucesso",
        data: Array.isArray(req.body) ? result.value : result.value[0],
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

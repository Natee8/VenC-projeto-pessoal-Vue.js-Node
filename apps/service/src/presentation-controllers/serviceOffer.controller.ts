import { Router, Request, Response } from "express";
import { ServiceOfferUseCase } from "../application/usecases/services/serviceOffer.usecase.js";
import { ServiceOfferRepository } from "../infrastructure/repositories/services/serviceOffer.repository.js";
import { ServiceRepository } from "../infrastructure/repositories/services/serviceModel.repository.js";
import { PrismaClient } from "../generated/prisma/index.js";
import { authMiddleware } from "../core/http/middlewares/auth.middlewares.js";

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
        return res.status(400).json({
          message: result.error.message,
        });
      }

      return res.status(201).json({
        message: "Serviço ofertado criado com sucesso",
        data: Array.isArray(req.body) ? result.value : result.value[0],
      });
    } catch (error) {
      return res.status(500).json({
        message: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  },
);

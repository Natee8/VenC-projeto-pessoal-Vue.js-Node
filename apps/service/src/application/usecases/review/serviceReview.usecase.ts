import { PrismaClient } from "@prisma/client/extension";
import { Prisma } from "apps/service/src/generated/prisma/edge.js";

export class CreateServiceReviewUseCase {
  constructor(private prisma: PrismaClient) {}

  async execute(input: {
    serviceOfferId: number;
    reviewerUserId: number;
    rating: number;
    comment: string | null;
  }): Promise<void> {
    await this.prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      await tx.serviceReview.create({
        data: {
          serviceOfferId: input.serviceOfferId,
          rating: input.rating,
          comment: input.comment,
          reviewerUserId: input.reviewerUserId,
        },
      });

      // opcional: stats do serviço (caso queira usar depois)
      // const stats = await tx.serviceReview.aggregate(...)
    });
  }
}

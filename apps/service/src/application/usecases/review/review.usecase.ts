import { PrismaClient } from "@prisma/client/extension";
import { Prisma } from "apps/service/src/generated/prisma/edge.js";

export class CreateReviewUseCase {
  constructor(private prisma: PrismaClient) {}

  async execute(input: {
    serviceOfferId: number | null;
    reviewerUserId: number;
    targetUserId: number;
    rating: number;
    comment: string | null;
  }): Promise<void> {
    await this.prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      await tx.review.create({
        data: {
          serviceOfferId: input.serviceOfferId,
          rating: input.rating,
          comment: input.comment,
          reviewerUserId: input.reviewerUserId,
          targetUserId: input.targetUserId,
        },
      });

      const stats = await tx.review.aggregate({
        where: { targetUserId: input.targetUserId },
        _count: { rating: true },
        _avg: { rating: true },
      });

      await tx.caregiver.update({
        where: { id: input.targetUserId },
        data: {
          averageRating: stats._avg.rating ?? 0,
          reviewsCount: stats._count.rating,
        },
      });
    });
  }
}

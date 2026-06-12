import { PrismaClient } from "../../../generated/prisma/index.js";
import { IServiceReviewRepository } from "@packages";
import { ServiceReview } from "@packages";

export class ServiceReviewRepository implements IServiceReviewRepository {
  constructor(private prisma: PrismaClient) {}

  async create(review: ServiceReview): Promise<void> {
    await this.prisma.serviceReview.create({
      data: {
        serviceOfferId: review.serviceOfferId,
        reviewerUserId: review.reviewerUserId,
        rating: review.getRating(),
        comment: review.getComment(),
        createdAt: review.createdAt,
      },
    });
  }

  async findByServiceOfferId(serviceOfferId: number): Promise<ServiceReview[]> {
    const records = await this.prisma.serviceReview.findMany({
      where: {
        serviceOfferId,
      },
      orderBy: {
        createdAt: "desc", // 🔥 já melhora aqui
      },
    });

    return records.map(
      (r) =>
        new ServiceReview(
          r.id,
          r.serviceOfferId,
          r.reviewerUserId,
          r.rating,
          r.comment,
          r.createdAt,
        ),
    );
  }

  async getStatsByServiceOfferId(serviceOfferId: number): Promise<{
    average: number;
    count: number;
  }> {
    const result = await this.prisma.serviceReview.aggregate({
      where: {
        serviceOfferId,
      },
      _count: {
        rating: true,
      },
      _avg: {
        rating: true,
      },
    });

    return {
      count: result._count.rating,
      average: result._avg.rating ?? 0,
    };
  }
}

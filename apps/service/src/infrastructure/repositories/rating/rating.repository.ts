import { PrismaClient } from "../../../generated/prisma/index.js";
import { Review } from "@packages";
import { IReviewRepository } from "@packages";

export class PrismaReviewRepository implements IReviewRepository {
  constructor(private prisma: PrismaClient) {}

  async create(review: Review): Promise<void> {
    await this.prisma.review.create({
      data: {
        id: review.id,
        serviceOfferId: review.serviceOfferId,
        rating: review.getRating(),
        comment: review.getComment(),
        createdAt: review.createdAt,
        reviewerUserId: review.reviewerUserId,
        targetUserId: review.targetUserId,
      },
    });
  }

  async findByCaregiverId(caregiverId: number): Promise<Review[]> {
    const records = await this.prisma.review.findMany({
      where: {
        targetUserId: caregiverId,
      },
    });

    return records.map(
      (r) =>
        new Review(
          r.id,
          r.serviceOfferId,
          r.reviewerUserId,
          r.targetUserId,
          r.rating,
          r.comment,
          r.createdAt,
        ),
    );
  }

  async updateCaregiverRating(
    caregiverId: number,
    average: number,
    count: number,
  ): Promise<void> {
    await this.prisma.caregiver.update({
      where: {
        id: caregiverId,
      },
      data: {
        averageRating: average,
        reviewsCount: count,
      },
    });
  }

  async getStatsByCaregiverId(caregiverId: number): Promise<{
    average: number;
    count: number;
  }> {
    const result = await this.prisma.review.aggregate({
      where: {
        targetUserId: caregiverId,
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

import { PrismaClient } from "../../../generated/prisma/index.js";
import { IUserReviewRepository } from "@packages";
import { UserReview } from "@packages";

export class UserReviewRepository implements IUserReviewRepository {
  constructor(private prisma: PrismaClient) {}

  async create(review: UserReview): Promise<void> {
    await this.prisma.userReview.create({
      data: {
        rating: review.getRating(),
        comment: review.getComment(),
        createdAt: review.createdAt,
        reviewerUserId: review.reviewerUserId,
        targetUserId: review.targetUserId,
      },
    });
  }

  async findByCaregiverId(caregiverId: number): Promise<UserReview[]> {
    const records = await this.prisma.userReview.findMany({
      where: {
        targetUserId: caregiverId,
      },
    });

    return records.map(
      (r) =>
        new UserReview(
          r.id,
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
    const result = await this.prisma.userReview.aggregate({
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

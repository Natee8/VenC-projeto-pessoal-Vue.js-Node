import { UserReview } from "../entities/userReviewEntity.js";

export interface IUserReviewRepository {
  create(review: UserReview): Promise<void>;

  findByCaregiverId(caregiverId: number): Promise<UserReview[]>;

  getStatsByCaregiverId(caregiverId: number): Promise<{
    average: number;
    count: number;
  }>;

  updateCaregiverRating(
    caregiverId: number,
    average: number,
    count: number,
  ): Promise<void>;
}

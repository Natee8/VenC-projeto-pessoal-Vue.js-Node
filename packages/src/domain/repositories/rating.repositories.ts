import { Review } from "../entities/reviewsEntity.js";

export interface IReviewRepository {
  create(review: Review): Promise<void>;

  findByCaregiverId(caregiverId: number): Promise<Review[]>;

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

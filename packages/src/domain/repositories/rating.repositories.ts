import { ServiceReview } from "../entities/serviceReviewEntity.js";
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

export interface IServiceReviewRepository {
  create(review: ServiceReview): Promise<void>;

  findByServiceOfferId(serviceOfferId: number): Promise<ServiceReview[]>;

  getStatsByServiceOfferId(serviceOfferId: number): Promise<{
    average: number;
    count: number;
  }>;
}

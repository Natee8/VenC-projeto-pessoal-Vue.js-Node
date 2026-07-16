export interface IUserReviewDTO {
  id: number;
  reviewerUserId: number;
  targetUserId: number;
  rating: number;
  comment: string | null;
  createdAt: string;
}

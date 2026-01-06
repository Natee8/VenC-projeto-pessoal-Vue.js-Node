import { UserRole } from '../../types/userType'
export class Review {
  constructor(
    public readonly id: string,
    public readonly serviceId: string, 
    public readonly reviewerUserId: string,
    public readonly targetUserId: string, 
    private rating: number,
    private comment: string | null,
    private target: UserRole,
    public readonly createdAt: Date
  ) {
    this.validate();
  }

  private validate() {
    if (this.rating < 1 || this.rating > 5) {
      throw new Error('A avaliação deve estar entre 1 e 5');
    }
  }

  getRating(): number {
    return this.rating;
  }

  getComment(): string | null {
    return this.comment;
  }

  getTarget(): ReviewTarget {
    return this.target;
  }
}

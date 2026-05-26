import { UserRole } from "../../types/userType.js";

export class Review {
  constructor(
    public readonly id: string,
    public readonly serviceId: string | null,
    public readonly reviewerUserId: string,
    public readonly targetUserId: string,
    private rating: number,
    private comment: string | null,
    private targetRoleSnapshot: UserRole,
    public readonly createdAt: Date,
  ) {
    this.validate();
  }

  private validate() {
    if (this.rating < 1 || this.rating > 5) {
      throw new Error("A avaliação deve estar entre 1 e 5");
    }

    if (this.reviewerUserId === this.targetUserId) {
      throw new Error("Usuário não pode avaliar a si mesmo");
    }

    if (this.comment && this.comment.length > 1000) {
      throw new Error("Comentário muito grande");
    }
  }

  getRating(): number {
    return this.rating;
  }

  getComment(): string | null {
    return this.comment;
  }

  getTargetRole(): UserRole {
    return this.targetRoleSnapshot;
  }
}

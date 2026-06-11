import { Address } from "../../valuesObjects/address.js";
import { UserId } from "../../valuesObjects/userId.js";

export class Caregiver {
  constructor(
    public readonly id: number,
    public readonly userId: UserId,
    private offersHosting: boolean,
    private address: Address,
    private serviceRadiusKm: number,
    private isVerified: boolean,
    private isPublicProfile: boolean,
    public readonly createdAt: Date,
    private updatedAt: Date,
    private averageRating: number,
    private reviewsCount: number,
  ) {
    if (serviceRadiusKm <= 0) {
      throw new Error("Raio de atendimento inválido");
    }
  }

  canHostPets() {
    return this.offersHosting;
  }

  getServiceRadius() {
    return this.serviceRadiusKm;
  }

  verify() {
    this.isVerified = true;
    this.touch();
  }

  makePublic() {
    this.isPublicProfile = true;
    this.touch();
  }

  makePrivate() {
    this.isPublicProfile = false;
    this.touch();
  }

  isPublic() {
    return this.isPublicProfile;
  }

  getUserId(): UserId {
    return this.userId;
  }

  hasVerification(): boolean {
    return this.isVerified;
  }

  getAddress(): Address {
    return this.address;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  getAverageRating() {
    return this.averageRating ?? 0;
  }

  getReviewsCount() {
    return this.reviewsCount ?? 0;
  }

  private touch() {
    this.updatedAt = new Date();
  }
}

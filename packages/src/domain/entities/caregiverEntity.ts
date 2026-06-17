import { Address } from "../../valuesObjects/address.js";
import { UserId } from "../../valuesObjects/userId.js";

export class Caregiver {
  constructor(
    private basePrice: number | null,
    public readonly id: number,
    public readonly userId: UserId,
    private offersHosting: boolean,
    private address: Address,
    private serviceRadiusKm: number,
    private isVerified: boolean,
    private isPublicProfile: boolean,
    private averageRating: number,
    private reviewsCount: number,
    public readonly createdAt: Date,
    private updatedAt: Date,
  ) {
    if (serviceRadiusKm <= 0) {
      throw new Error("Raio de atendimento inválido");
    }
    if (basePrice !== null && basePrice <= 0) {
      throw new Error("Preço inválido");
    }
  }

  canHostPets() {
    return this.offersHosting;
  }

  getServiceRadius() {
    return this.serviceRadiusKm;
  }

  getAverageRating() {
    return this.averageRating;
  }

  getReviewsCount() {
    return this.reviewsCount;
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

  private touch() {
    this.updatedAt = new Date();
  }
}

import { Phone } from "../../valuesObjects/phone.js";
import { Address } from "../../valuesObjects/address.js";
import { UserId } from "../../valuesObjects/userId.js";

export class OwnerProfile {
  constructor(
    public readonly userId: UserId,
    private address: Address,
    private phone: Phone | null,
    private createdAt: Date,
    private updatedAt: Date,
    private averageRating: number,
    private reviewsCount: number,
    private searchRadiusKm?: number,
  ) {}

  getAddress() {
    return this.address;
  }

  getUserId() {
    return this.userId;
  }

  getPhone() {
    return this.phone;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  getSearchRadius() {
    return this.searchRadiusKm;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  updateAddress(address: Address) {
    this.address = address;
    this.updatedAt = new Date();
  }

  updatePhone(phone: Phone) {
    this.phone = phone;
    this.updatedAt = new Date();
  }

  getAverageRating() {
    return this.averageRating;
  }

  getReviewsCount() {
    return this.reviewsCount;
  }

  updateSearchRadius(radius: number) {
    this.searchRadiusKm = radius;
    this.updatedAt = new Date();
  }
}

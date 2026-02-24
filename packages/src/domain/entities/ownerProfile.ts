import { Phone } from "../../valuesObjects/phone.js";
import { Address } from "../../valuesObjects/address.js";
import { Pet } from "./petEntity.js";
import { UserId } from "../../valuesObjects/userId.js";

export class OwnerProfile {
  constructor(
    public readonly userId: UserId,
    private address: Address,
    private phone: Phone,
    private createdAt: Date,
    private updatedAt: Date,
    private searchRadiusKm?: number,
  ) {}

  getAddress() {
    return this.address;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  updateAddress(address: Address) {
    this.address = address;
    this.updatedAt = new Date();
  }
}

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
    private isActive: boolean,
    public readonly createdAt: Date,
    private updatedAt: Date,
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

  deactivate() {
    if (!this.isActive) {
      throw new Error("Cuidador já está desativado");
    }
    this.isActive = false;
    this.touch();
  }

  getUserId(): UserId {
    return this.userId;
  }

  hasVerification(): boolean {
    return this.isVerified;
  }

  isCurrentlyActive(): boolean {
    return this.isActive;
  }

  getAddress(): Address {
    return this.address;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  isEnabled() {
    return this.isActive && this.isVerified;
  }

  private touch() {
    this.updatedAt = new Date();
  }
}

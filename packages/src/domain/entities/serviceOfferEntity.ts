import { ServiceTypes } from "../../types/serviceType.js";
import { Address } from "../../valuesObjects/address.js";
import { Money } from "../../valuesObjects/money.js";

export class ServiceOffer {
  constructor(
    public readonly id: string,
    public readonly caregiverId: string,
    private type: ServiceTypes,
    private description: string,
    private price: Money,
    private locality: Address,
    private isActive: boolean,
    public readonly createdAt: Date,
    private updatedAt: Date
  ) {}

  activate() {
    if (this.isActive) {
      throw new Error('ServiceOffer já está ativo');
    }
    this.isActive = true;
    this.updatedAt = new Date();
  }

  deactivate() {
    if (!this.isActive) {
      throw new Error('ServiceOffer já está inativo');
    }
    this.isActive = false;
    this.updatedAt = new Date();
  }

  changePrice(newPrice: Money) {
    this.price = newPrice;
    this.updatedAt = new Date();
  }

  getPrice() {
    return this.price;
  }

  isEnabled() {
    return this.isActive;
  }
}

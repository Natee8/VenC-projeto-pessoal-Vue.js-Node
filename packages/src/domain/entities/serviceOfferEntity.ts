import { Money } from "../../valuesObjects/money";

export class ServiceOffer {
  constructor(
    public readonly id: string,
    public readonly caregiverId: string,
    public readonly serviceId: number, // 🔥 novo

    private description: string | null,
    private price: Money,
    private isActive: boolean,

    public readonly createdAt: Date,
    private updatedAt: Date,
  ) {}

  activate() {
    if (this.isActive) {
      throw new Error("ServiceOffer já está ativo");
    }
    this.isActive = true;
    this.updatedAt = new Date();
  }

  deactivate() {
    if (!this.isActive) {
      throw new Error("ServiceOffer já está inativo");
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

  getServiceId() {
    return this.serviceId;
  }

  getDescription() {
    return this.description;
  }
}

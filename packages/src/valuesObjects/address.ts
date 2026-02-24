import { AddressPrimitives, State } from "../types/address.js";

export class Address {
  constructor(
    public readonly street: string,
    public readonly number: string,
    public readonly neighborhood: string,
    public readonly city: State,
    public readonly zipCode: string,
    public readonly country: string,
  ) {
    this.validate();
  }

  private validate() {
    if (!this.street || !this.number || !this.city) {
      throw new Error("Endereço inválido");
    }

    if (!this.zipCode || this.zipCode.length < 8) {
      throw new Error("CEP inválido");
    }
  }

  toPrimitives() {
    return {
      street: this.street,
      number: this.number,
      neighborhood: this.neighborhood,
      city: this.city,
      zipCode: this.zipCode,
      country: this.country,
    };
  }

  static restore(raw: unknown): Address {
    if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
      throw new Error("Endereço inválido");
    }

    const v = raw as AddressPrimitives;

    return new Address(
      v.street,
      v.number,
      v.neighborhood,
      v.city,
      v.zipCode,
      v.country,
    );
  }
}

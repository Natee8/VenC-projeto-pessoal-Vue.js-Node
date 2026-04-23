import { AddressPrimitives } from "../types/address.js";
import { State } from "../types/stateEnum.js";

export class Address {
  constructor(
    public readonly street: string,
    public readonly number: string,
    public readonly neighborhood: string,
    public readonly city: string,
    public readonly state: State,
    public readonly zipCode: string,
  ) {
    this.validate();
  }

  private validate() {
    if (!this.street || !this.number || !this.city || !this.state) {
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
      state: this.state,
      zipCode: this.zipCode,
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
      v.state as State,
      v.zipCode,
    );
  }
}

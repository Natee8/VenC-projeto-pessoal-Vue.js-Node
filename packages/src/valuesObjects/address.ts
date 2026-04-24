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
    public readonly complement?: string,
    public readonly latitude?: number,
    public readonly longitude?: number,
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

    if (this.latitude && (this.latitude < -90 || this.latitude > 90)) {
      throw new Error("Latitude inválida");
    }

    if (this.longitude && (this.longitude < -180 || this.longitude > 180)) {
      throw new Error("Longitude inválida");
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

      complement: this.complement,

      latitude: this.latitude,
      longitude: this.longitude,
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

      v.complement,

      v.latitude,
      v.longitude,
    );
  }
}

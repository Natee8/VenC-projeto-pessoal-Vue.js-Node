import { AddressPrimitives } from "../types/address.js";

export class Address {
  private constructor(private readonly props: AddressPrimitives) {
    this.validate();
  }

  static create(props: AddressPrimitives): Address {
    return new Address(props);
  }

  static restore(raw: AddressPrimitives): Address {
    return new Address(raw);
  }

  getValue(): AddressPrimitives {
    return this.props;
  }

  toPrimitives(): AddressPrimitives {
    return { ...this.props };
  }

  equals(other: Address): boolean {
    return JSON.stringify(this.props) === JSON.stringify(other.getValue());
  }

  private validate(): void {
    const { street, number, city, state, zipCode, latitude, longitude } =
      this.props;

    if (!street || !number || !city || !state) {
      throw new Error("Endereço inválido");
    }

    if (!zipCode || zipCode.length < 8) {
      throw new Error("CEP inválido");
    }

    if (latitude !== undefined && (latitude < -90 || latitude > 90)) {
      throw new Error("Latitude inválida");
    }

    if (longitude !== undefined && (longitude < -180 || longitude > 180)) {
      throw new Error("Longitude inválida");
    }
  }
}

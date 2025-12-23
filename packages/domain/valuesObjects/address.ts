import { State } from "../../types/address";

export class Address {
  constructor(
    public readonly street: string,
    public readonly number: string,
    public readonly neighborhood: string,
    public readonly city: string,
    public readonly state: State,
    public readonly zipCode: string,
    public readonly country: string
  ) {
    this.validate();
  }

  private validate() {
    if (!this.street || !this.number || !this.city) {
      throw new Error('Endereço inválido');
    }

    if (!this.zipCode || this.zipCode.length < 8) {
      throw new Error('CEP inválido');
    }
  }
}

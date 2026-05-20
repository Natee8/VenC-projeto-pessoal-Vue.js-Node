export class Phone {
  private readonly _value: string;

  private constructor(value: string) {
    this._value = value;
  }

  static create(rawPhone: string): Phone {
    const normalized = Phone.normalize(rawPhone);

    if (!Phone.isValid(normalized)) {
      throw new Error("Telefone inválido");
    }

    return new Phone(normalized);
  }

  static restore(raw: string): Phone {
    return new Phone(raw);
  }

  getValue(): string {
    return this._value;
  }

  toPrimitives(): string {
    return this._value;
  }

  toString(): string {
    return this._value;
  }

  equals(other: Phone): boolean {
    return this._value === other.getValue();
  }

  private static normalize(phone: string): string {
    return phone.replace(/\D/g, "");
  }

  private static isValid(phone: string): boolean {
    if (!phone) return false;

    if (phone.startsWith("55") && phone.length > 11) {
      phone = phone.substring(2);
    }

    if (phone.length !== 10 && phone.length !== 11) {
      return false;
    }

    const ddd = phone.substring(0, 2);

    return Number(ddd) >= 11 && Number(ddd) <= 99;
  }
}

import crypto from "crypto";

export class UserId {
  private readonly _value: number;

  private constructor(value: number) {
    this._value = value;
  }

  static create(value?: number): UserId {
    if (value === undefined) {
      return new UserId(crypto.randomInt(1, 1_000_000_000));
    }

    if (!value || value <= 0) {
      throw new Error("UserId inválido");
    }

    return new UserId(value);
  }

  getValue(): number {
    return this._value;
  }

  toNumber(): number {
    return this._value;
  }

  toString(): string {
    return this._value.toString();
  }

  equals(other: UserId): boolean {
    return this._value === other.getValue();
  }
}

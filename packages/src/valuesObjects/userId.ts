export class UserId {
  private readonly _value: number;

  private constructor(value: number) {
    this._value = value;
  }

  static create(value?: number): UserId {
    if (value === undefined) {
      return new UserId(Math.floor(Math.random() * 1_000_000_000));
    }

    if (!value) {
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
}

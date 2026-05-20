export class Rating {
  private readonly _value: number;

  private constructor(value: number) {
    this._value = value;
  }

  static create(value: number): Rating {
    if (Number.isNaN(value)) {
      throw new Error("Avaliação inválida");
    }

    if (value < 0 || value > 5) {
      throw new Error("Avaliação deve estar entre 0 e 5");
    }

    return new Rating(value);
  }

  static initial(): Rating {
    return new Rating(0);
  }

  getValue(): number {
    return this._value;
  }

  equals(other: Rating): boolean {
    return this._value === other.getValue();
  }

  toString(): string {
    return this._value.toString();
  }
}

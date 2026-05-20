export class ServiceRadius {
  private static readonly MIN_RADIUS = 5;
  private static readonly MAX_RADIUS = 64;

  private readonly _value: number;

  private constructor(value: number) {
    this._value = value;
  }

  static create(radius: number): ServiceRadius {
    if (radius < ServiceRadius.MIN_RADIUS) {
      throw new Error(`Raio mínimo é ${ServiceRadius.MIN_RADIUS} km`);
    }

    if (radius > ServiceRadius.MAX_RADIUS) {
      throw new Error(`Raio máximo é ${ServiceRadius.MAX_RADIUS} km`);
    }

    return new ServiceRadius(radius);
  }

  getValue(): number {
    return this._value;
  }

  equals(other: ServiceRadius): boolean {
    return this._value === other.getValue();
  }

  toString(): string {
    return `${this._value}km`;
  }
}

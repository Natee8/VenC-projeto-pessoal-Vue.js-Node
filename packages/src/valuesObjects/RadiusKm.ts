export class ServiceRadius {
  private static readonly MIN_RADIUS = 5;
  private static readonly MAX_RADIUS = 64;

  private constructor(private readonly value: number) {}

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
    return this.value;
  }
}

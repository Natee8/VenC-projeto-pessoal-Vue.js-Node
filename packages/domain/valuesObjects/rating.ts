export class Rating {
  private constructor(public readonly value: number) {}

  static create(value: number): Rating {
    if (Number.isNaN(value)) {
      throw new Error('Avaliação inválida');
    }

    if (value < 0 || value > 5) {
      throw new Error('Avaliação deve estar entre 0 e 5');
    }

    return new Rating(value);
  }

  static initial(): Rating {
    return new Rating(0);
  }
}

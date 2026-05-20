export class BirthDate {
  private readonly _value: Date;

  private constructor(date: Date) {
    this._value = date;
  }

  static create(date: Date): BirthDate {
    if (!date) {
      throw new Error("Data obrigatória");
    }

    if (!BirthDate.isAdult(date)) {
      throw new Error("É necessário ser maior de 18 anos");
    }

    return new BirthDate(date);
  }

  getValue(): Date {
    return this._value;
  }

  toISOString(): string {
    return this._value.toISOString();
  }

  equals(other: BirthDate): boolean {
    return this._value.getTime() === other.getValue().getTime();
  }

  private static isAdult(date: Date): boolean {
    const today = new Date();

    const age =
      today.getFullYear() -
      date.getFullYear() -
      (today < new Date(today.getFullYear(), date.getMonth(), date.getDate())
        ? 1
        : 0);

    return age >= 18;
  }
}

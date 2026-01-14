export class BirthDate {
  private readonly value: Date;

  constructor(date: Date) {
    if (!date) {
      throw new Error('Data de nascimento obrigatória');
    }

    if (!this.isAdult(date)) {
      throw new Error('É necessário ser maior de 18 anos');
    }

    this.value = date;
  }

  private isAdult(date: Date): boolean {
    const today = new Date();
    const age =
      today.getFullYear() - date.getFullYear() -
      (today < new Date(today.getFullYear(), date.getMonth(), date.getDate()) ? 1 : 0);

    return age >= 18;
  }

  getValue(): Date {
    return this.value;
  }
}

export class Money {
  private readonly amount: number;
  private readonly currency: string;

  private constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
    this.validate();
  }

  static create(amount: number, currency = "BRL"): Money {
    return new Money(amount, currency);
  }

  static zero(currency = "BRL"): Money {
    return new Money(0, currency);
  }

  private validate() {
    if (this.amount < 0) {
      throw new Error("O valor monetário não pode ser negativo");
    }

    if (!this.currency || this.currency.length !== 3) {
      throw new Error("A moeda deve seguir o padrão ISO 4217 (ex: BRL, USD)");
    }
  }

  getAmount() {
    return this.amount;
  }

  getCurrency() {
    return this.currency;
  }

  add(other: Money): Money {
    this.assertSameCurrency(other);
    return new Money(this.amount + other.amount, this.currency);
  }

  subtract(other: Money): Money {
    this.assertSameCurrency(other);

    if (this.amount < other.amount) {
      throw new Error("O valor resultante não pode ser negativo");
    }

    return new Money(this.amount - other.amount, this.currency);
  }

  multiply(factor: number): Money {
    if (factor <= 0) {
      throw new Error("O fator de multiplicação deve ser maior que zero");
    }

    return new Money(this.amount * factor, this.currency);
  }

  equals(other: Money): boolean {
    return (
      this.amount === other.amount &&
      this.currency === other.currency
    );
  }

  private assertSameCurrency(other: Money) {
    if (this.currency !== other.currency) {
      throw new Error("Não é possível operar valores com moedas diferentes");
    }
  }

  toString() {
    return `${this.currency} ${this.amount.toFixed(2)}`;
  }
}

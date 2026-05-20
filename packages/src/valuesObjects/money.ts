import { MoneyProps } from "../types/moneyProps";

export class Money {
  private constructor(private readonly props: MoneyProps) {
    this.validate();
  }

  static create(amount: number, currency = "BRL"): Money {
    return new Money({
      amount,
      currency,
    });
  }

  static zero(currency = "BRL"): Money {
    return new Money({
      amount: 0,
      currency,
    });
  }

  static restore(props: MoneyProps): Money {
    return new Money(props);
  }

  private validate(): void {
    const { amount, currency } = this.props;

    if (amount < 0) {
      throw new Error("O valor monetário não pode ser negativo");
    }

    if (!currency || currency.length !== 3) {
      throw new Error("A moeda deve seguir o padrão ISO 4217");
    }
  }

  getValue(): MoneyProps {
    return { ...this.props };
  }

  toPrimitives(): MoneyProps {
    return { ...this.props };
  }

  getAmount(): number {
    return this.props.amount;
  }

  getCurrency(): string {
    return this.props.currency;
  }

  add(other: Money): Money {
    this.assertSameCurrency(other);

    return new Money({
      amount: this.props.amount + other.getAmount(),
      currency: this.props.currency,
    });
  }

  subtract(other: Money): Money {
    this.assertSameCurrency(other);

    const result = this.props.amount - other.getAmount();

    if (result < 0) {
      throw new Error("O valor resultante não pode ser negativo");
    }

    return new Money({
      amount: result,
      currency: this.props.currency,
    });
  }

  multiply(factor: number): Money {
    if (factor <= 0) {
      throw new Error("O fator deve ser maior que zero");
    }

    return new Money({
      amount: this.props.amount * factor,
      currency: this.props.currency,
    });
  }

  equals(other: Money): boolean {
    return (
      this.props.amount === other.getAmount() &&
      this.props.currency === other.getCurrency()
    );
  }

  toString(): string {
    return `${this.props.currency} ${this.props.amount.toFixed(2)}`;
  }

  private assertSameCurrency(other: Money) {
    if (this.props.currency !== other.getCurrency()) {
      throw new Error("Não é possível operar moedas diferentes");
    }
  }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Money = void 0;
class Money {
    props;
    constructor(props) {
        this.props = props;
        this.validate();
    }
    static create(amount, currency = "BRL") {
        return new Money({
            amount,
            currency,
        });
    }
    static zero(currency = "BRL") {
        return new Money({
            amount: 0,
            currency,
        });
    }
    static restore(props) {
        return new Money(props);
    }
    validate() {
        const { amount, currency } = this.props;
        if (amount < 0) {
            throw new Error("O valor monetário não pode ser negativo");
        }
        if (!currency || currency.length !== 3) {
            throw new Error("A moeda deve seguir o padrão ISO 4217");
        }
    }
    getValue() {
        return { ...this.props };
    }
    toPrimitives() {
        return { ...this.props };
    }
    getAmount() {
        return this.props.amount;
    }
    getCurrency() {
        return this.props.currency;
    }
    add(other) {
        this.assertSameCurrency(other);
        return new Money({
            amount: this.props.amount + other.getAmount(),
            currency: this.props.currency,
        });
    }
    subtract(other) {
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
    multiply(factor) {
        if (factor <= 0) {
            throw new Error("O fator deve ser maior que zero");
        }
        return new Money({
            amount: this.props.amount * factor,
            currency: this.props.currency,
        });
    }
    equals(other) {
        return (this.props.amount === other.getAmount() &&
            this.props.currency === other.getCurrency());
    }
    toString() {
        return `${this.props.currency} ${this.props.amount.toFixed(2)}`;
    }
    assertSameCurrency(other) {
        if (this.props.currency !== other.getCurrency()) {
            throw new Error("Não é possível operar moedas diferentes");
        }
    }
}
exports.Money = Money;

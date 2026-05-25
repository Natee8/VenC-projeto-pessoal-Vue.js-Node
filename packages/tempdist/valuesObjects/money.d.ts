import { MoneyProps } from "../types/moneyProps";
export declare class Money {
    private readonly props;
    private constructor();
    static create(amount: number, currency?: string): Money;
    static zero(currency?: string): Money;
    static restore(props: MoneyProps): Money;
    private validate;
    getValue(): MoneyProps;
    toPrimitives(): MoneyProps;
    getAmount(): number;
    getCurrency(): string;
    add(other: Money): Money;
    subtract(other: Money): Money;
    multiply(factor: number): Money;
    equals(other: Money): boolean;
    toString(): string;
    private assertSameCurrency;
}

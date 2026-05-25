import { AddressPrimitives } from "../types/address";
export declare class Address {
    private readonly props;
    private constructor();
    static create(props: AddressPrimitives): Address;
    static restore(raw: AddressPrimitives): Address;
    getValue(): AddressPrimitives;
    toPrimitives(): AddressPrimitives;
    equals(other: Address): boolean;
    private validate;
}

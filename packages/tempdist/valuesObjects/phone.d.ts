export declare class Phone {
    private readonly _value;
    private constructor();
    static create(rawPhone: string): Phone;
    static restore(raw: string): Phone;
    getValue(): string;
    toPrimitives(): string;
    toString(): string;
    equals(other: Phone): boolean;
    private static normalize;
    private static isValid;
}

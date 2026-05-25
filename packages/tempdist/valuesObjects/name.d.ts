export declare class Name {
    private readonly _value;
    private constructor();
    static create(rawName: string): Name;
    getValue(): string;
    toString(): string;
    equals(other: Name): boolean;
    private static normalize;
    private static isValid;
}

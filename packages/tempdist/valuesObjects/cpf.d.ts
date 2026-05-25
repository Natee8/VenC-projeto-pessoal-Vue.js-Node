export declare class CPF {
    private readonly _value;
    private constructor();
    static create(rawCpf: string): CPF;
    getValue(): string;
    toString(): string;
    equals(other: CPF): boolean;
    private static normalize;
    private static isValid;
}

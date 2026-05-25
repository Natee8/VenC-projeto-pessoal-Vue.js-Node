export declare class BirthDate {
    private readonly _value;
    private constructor();
    static create(date: Date): BirthDate;
    getValue(): Date;
    toISOString(): string;
    equals(other: BirthDate): boolean;
    private static isAdult;
}

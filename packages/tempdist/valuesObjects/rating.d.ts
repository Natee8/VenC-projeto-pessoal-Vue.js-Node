export declare class Rating {
    private readonly _value;
    private constructor();
    static create(value: number): Rating;
    static initial(): Rating;
    getValue(): number;
    equals(other: Rating): boolean;
    toString(): string;
}

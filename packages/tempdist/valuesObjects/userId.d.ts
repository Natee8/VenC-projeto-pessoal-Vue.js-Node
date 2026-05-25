export declare class UserId {
    private readonly _value;
    private constructor();
    static create(value?: number): UserId;
    getValue(): number;
    toNumber(): number;
    toString(): string;
    equals(other: UserId): boolean;
}

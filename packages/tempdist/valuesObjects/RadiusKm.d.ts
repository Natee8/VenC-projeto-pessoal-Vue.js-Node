export declare class ServiceRadius {
    private static readonly MIN_RADIUS;
    private static readonly MAX_RADIUS;
    private readonly _value;
    private constructor();
    static create(radius: number): ServiceRadius;
    getValue(): number;
    equals(other: ServiceRadius): boolean;
    toString(): string;
}

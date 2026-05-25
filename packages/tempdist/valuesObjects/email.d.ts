export declare class Email {
    private readonly _value;
    private constructor();
    static create(email: string): Email;
    getValue(): string;
    toString(): string;
    equals(other: Email): boolean;
}

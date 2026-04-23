export class UserId {
    _value;
    constructor(value) {
        this._value = value;
    }
    static create(value) {
        if (value === undefined) {
            return new UserId(Math.floor(Math.random() * 1_000_000_000));
        }
        if (!value) {
            throw new Error("UserId inválido");
        }
        return new UserId(value);
    }
    getValue() {
        return this._value;
    }
    toNumber() {
        return this._value;
    }
}

export class UserId {
    _value;
    constructor(value) {
        this._value = value;
    }
    static create(value) {
        if (!value) {
            throw new Error('UserId inválido');
        }
        return new UserId(value);
    }
    getValue() {
        return this._value;
    }
    tonumber() {
        return this._value;
    }
}

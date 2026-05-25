"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserId = void 0;
class UserId {
    _value;
    constructor(value) {
        this._value = value;
    }
    static create(value) {
        if (value === undefined) {
            return new UserId(Math.floor(Math.random() * 1_000_000_000));
        }
        if (!value || value <= 0) {
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
    toString() {
        return this._value.toString();
    }
    equals(other) {
        return this._value === other.getValue();
    }
}
exports.UserId = UserId;

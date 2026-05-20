"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
class Email {
    _value;
    constructor(value) {
        this._value = value;
    }
    static create(email) {
        if (!email) {
            throw new Error("Email é obrigatório");
        }
        const normalized = email.trim().toLowerCase();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(normalized)) {
            throw new Error("Email inválido");
        }
        return new Email(normalized);
    }
    getValue() {
        return this._value;
    }
    toString() {
        return this._value;
    }
    equals(other) {
        return this._value === other.getValue();
    }
}
exports.Email = Email;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phone = void 0;
class Phone {
    _value;
    constructor(value) {
        this._value = value;
    }
    static create(rawPhone) {
        const normalized = Phone.normalize(rawPhone);
        if (!Phone.isValid(normalized)) {
            throw new Error("Telefone inválido");
        }
        return new Phone(normalized);
    }
    static restore(raw) {
        return new Phone(raw);
    }
    getValue() {
        return this._value;
    }
    toPrimitives() {
        return this._value;
    }
    toString() {
        return this._value;
    }
    equals(other) {
        return this._value === other.getValue();
    }
    static normalize(phone) {
        return phone.replace(/\D/g, "");
    }
    static isValid(phone) {
        if (!phone)
            return false;
        if (phone.startsWith("55") && phone.length > 11) {
            phone = phone.substring(2);
        }
        if (phone.length !== 10 && phone.length !== 11) {
            return false;
        }
        const ddd = phone.substring(0, 2);
        return Number(ddd) >= 11 && Number(ddd) <= 99;
    }
}
exports.Phone = Phone;

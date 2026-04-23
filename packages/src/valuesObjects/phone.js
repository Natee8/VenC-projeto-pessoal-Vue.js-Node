"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phone = void 0;
class Phone {
    value;
    constructor(value) {
        this.value = value;
    }
    static create(rawPhone) {
        const normalized = Phone.normalize(rawPhone);
        if (!Phone.isValid(normalized)) {
            throw new Error("Telefone inválido");
        }
        return new Phone(normalized);
    }
    getValue() {
        return this.value;
    }
    equals(other) {
        return this.value === other.value;
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
        if (phone.length !== 10 && phone.length !== 11)
            return false;
        const ddd = phone.substring(0, 2);
        if (Number(ddd) < 11 || Number(ddd) > 99)
            return false;
        return true;
    }
    toPrimitives() {
        return this.value;
    }
    static restore(raw) {
        return new Phone(raw);
    }
}
exports.Phone = Phone;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BirthDate = void 0;
class BirthDate {
    _value;
    constructor(date) {
        this._value = date;
    }
    static create(date) {
        if (!date) {
            throw new Error("Data obrigatória");
        }
        if (!BirthDate.isAdult(date)) {
            throw new Error("É necessário ser maior de 18 anos");
        }
        return new BirthDate(date);
    }
    getValue() {
        return this._value;
    }
    toISOString() {
        return this._value.toISOString();
    }
    equals(other) {
        return this._value.getTime() === other.getValue().getTime();
    }
    static isAdult(date) {
        const today = new Date();
        const age = today.getFullYear() -
            date.getFullYear() -
            (today < new Date(today.getFullYear(), date.getMonth(), date.getDate())
                ? 1
                : 0);
        return age >= 18;
    }
}
exports.BirthDate = BirthDate;

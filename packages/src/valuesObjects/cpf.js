"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CPF = void 0;
class CPF {
    _value;
    constructor(value) {
        this._value = value;
    }
    static create(rawCpf) {
        const normalized = CPF.normalize(rawCpf);
        if (!CPF.isValid(normalized)) {
            throw new Error("CPF inválido");
        }
        return new CPF(normalized);
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
    static normalize(cpf) {
        return cpf.replace(/\D/g, "");
    }
    static isValid(cpf) {
        if (!cpf || cpf.length !== 11)
            return false;
        if (/^(\d)\1+$/.test(cpf))
            return false;
        let sum = 0;
        let remainder = 0;
        for (let i = 1; i <= 9; i++) {
            sum += Number(cpf.substring(i - 1, i)) * (11 - i);
        }
        remainder = (sum * 10) % 11;
        if (remainder >= 10)
            remainder = 0;
        if (remainder !== Number(cpf.substring(9, 10))) {
            return false;
        }
        sum = 0;
        for (let i = 1; i <= 10; i++) {
            sum += Number(cpf.substring(i - 1, i)) * (12 - i);
        }
        remainder = (sum * 10) % 11;
        if (remainder >= 10)
            remainder = 0;
        return remainder === Number(cpf.substring(10, 11));
    }
}
exports.CPF = CPF;

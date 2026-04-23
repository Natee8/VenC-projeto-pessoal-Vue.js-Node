"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CPF = void 0;
class CPF {
    value;
    constructor(value) {
        this.value = value;
    }
    static create(rawCpf) {
        const normalized = CPF.normalize(rawCpf);
        if (!CPF.isValid(normalized)) {
            throw new Error('CPF inválido');
        }
        return new CPF(normalized);
    }
    getValue() {
        return this.value;
    }
    equals(other) {
        return this.value === other.value;
    }
    static normalize(cpf) {
        return cpf.replace(/\D/g, '');
    }
    static isValid(cpf) {
        if (!cpf || cpf.length !== 11)
            return false;
        if (/^(\d)\1+$/.test(cpf))
            return false;
        let sum = 0;
        let remainder = 0;
        for (let i = 1; i <= 9; i++) {
            sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
        }
        remainder = (sum * 10) % 11;
        if (remainder === 10 || remainder === 11)
            remainder = 0;
        if (remainder !== parseInt(cpf.substring(9, 10)))
            return false;
        sum = 0;
        for (let i = 1; i <= 10; i++) {
            sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
        }
        remainder = (sum * 10) % 11;
        if (remainder === 10 || remainder === 11)
            remainder = 0;
        if (remainder !== parseInt(cpf.substring(10, 11)))
            return false;
        return true;
    }
}
exports.CPF = CPF;

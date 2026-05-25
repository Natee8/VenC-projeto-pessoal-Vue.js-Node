"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Name = void 0;
class Name {
    _value;
    constructor(value) {
        this._value = value;
    }
    static create(rawName) {
        if (!rawName) {
            throw new Error("Nome é obrigatório");
        }
        const normalized = Name.normalize(rawName);
        if (normalized.length < 3) {
            throw new Error("Nome muito curto");
        }
        if (normalized.length > 80) {
            throw new Error("Nome muito longo");
        }
        if (!Name.isValid(normalized)) {
            throw new Error("Nome contém caracteres inválidos");
        }
        return new Name(normalized);
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
    static normalize(name) {
        return name
            .trim()
            .replace(/\s+/g, " ")
            .toLowerCase()
            .replace(/\b\w/g, (c) => c.toUpperCase());
    }
    static isValid(name) {
        return /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(name);
    }
}
exports.Name = Name;

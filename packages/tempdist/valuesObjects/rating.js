"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rating = void 0;
class Rating {
    _value;
    constructor(value) {
        this._value = value;
    }
    static create(value) {
        if (Number.isNaN(value)) {
            throw new Error("Avaliação inválida");
        }
        if (value < 0 || value > 5) {
            throw new Error("Avaliação deve estar entre 0 e 5");
        }
        return new Rating(value);
    }
    static initial() {
        return new Rating(0);
    }
    getValue() {
        return this._value;
    }
    equals(other) {
        return this._value === other.getValue();
    }
    toString() {
        return this._value.toString();
    }
}
exports.Rating = Rating;

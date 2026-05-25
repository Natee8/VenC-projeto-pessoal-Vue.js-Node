"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRadius = void 0;
class ServiceRadius {
    static MIN_RADIUS = 5;
    static MAX_RADIUS = 64;
    _value;
    constructor(value) {
        this._value = value;
    }
    static create(radius) {
        if (radius < ServiceRadius.MIN_RADIUS) {
            throw new Error(`Raio mínimo é ${ServiceRadius.MIN_RADIUS} km`);
        }
        if (radius > ServiceRadius.MAX_RADIUS) {
            throw new Error(`Raio máximo é ${ServiceRadius.MAX_RADIUS} km`);
        }
        return new ServiceRadius(radius);
    }
    getValue() {
        return this._value;
    }
    equals(other) {
        return this._value === other.getValue();
    }
    toString() {
        return `${this._value}km`;
    }
}
exports.ServiceRadius = ServiceRadius;

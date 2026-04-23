"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
class Address {
    street;
    number;
    neighborhood;
    city;
    state;
    zipCode;
    constructor(street, number, neighborhood, city, state, zipCode) {
        this.street = street;
        this.number = number;
        this.neighborhood = neighborhood;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.validate();
    }
    validate() {
        if (!this.street || !this.number || !this.city || !this.state) {
            throw new Error("Endereço inválido");
        }
        if (!this.zipCode || this.zipCode.length < 8) {
            throw new Error("CEP inválido");
        }
    }
    toPrimitives() {
        return {
            street: this.street,
            number: this.number,
            neighborhood: this.neighborhood,
            city: this.city,
            state: this.state,
            zipCode: this.zipCode,
        };
    }
    static restore(raw) {
        if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
            throw new Error("Endereço inválido");
        }
        const v = raw;
        return new Address(v.street, v.number, v.neighborhood, v.city, v.state, v.zipCode);
    }
}
exports.Address = Address;

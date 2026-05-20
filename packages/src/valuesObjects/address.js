"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
class Address {
    props;
    constructor(props) {
        this.props = props;
        this.validate();
    }
    static create(props) {
        return new Address(props);
    }
    static restore(raw) {
        return new Address(raw);
    }
    getValue() {
        return this.props;
    }
    toPrimitives() {
        return { ...this.props };
    }
    equals(other) {
        return JSON.stringify(this.props) === JSON.stringify(other.getValue());
    }
    validate() {
        const { street, number, city, state, zipCode, latitude, longitude } = this.props;
        if (!street || !number || !city || !state) {
            throw new Error("Endereço inválido");
        }
        if (!zipCode || zipCode.length < 8) {
            throw new Error("CEP inválido");
        }
        if (latitude !== undefined && (latitude < -90 || latitude > 90)) {
            throw new Error("Latitude inválida");
        }
        if (longitude !== undefined && (longitude < -180 || longitude > 180)) {
            throw new Error("Longitude inválida");
        }
    }
}
exports.Address = Address;

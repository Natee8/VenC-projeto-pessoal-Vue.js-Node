"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostingAvailability = void 0;
class HostingAvailability {
    props;
    constructor(props) {
        this.props = props;
    }
    static create(params) {
        const { enabled, isVerified, hasValidAddress, serviceRadiusKm, minimumRadiusKm = 1, } = params;
        if (enabled) {
            if (!isVerified) {
                throw new Error("Cuidador não verificado não pode hospedar");
            }
            if (!hasValidAddress) {
                throw new Error("Hospedagem exige endereço válido");
            }
            if (serviceRadiusKm < minimumRadiusKm) {
                throw new Error("Raio insuficiente para hospedagem");
            }
        }
        return new HostingAvailability({
            enabled,
            suspended: false,
        });
    }
    static restore(props) {
        return new HostingAvailability(props);
    }
    getValue() {
        return { ...this.props };
    }
    toPrimitives() {
        return { ...this.props };
    }
    isEnabled() {
        return this.props.enabled && !this.props.suspended;
    }
    isSuspended() {
        return this.props.suspended;
    }
    enable() {
        if (this.props.suspended) {
            throw new Error("Hospedagem suspensa");
        }
        return new HostingAvailability({
            ...this.props,
            enabled: true,
        });
    }
    disable() {
        return new HostingAvailability({
            ...this.props,
            enabled: false,
        });
    }
    suspend() {
        if (!this.props.enabled) {
            throw new Error("Não é possível suspender hospedagem desabilitada");
        }
        return new HostingAvailability({
            ...this.props,
            suspended: true,
        });
    }
    unsuspend() {
        if (!this.props.suspended) {
            throw new Error("Hospedagem não está suspensa");
        }
        return new HostingAvailability({
            ...this.props,
            suspended: false,
        });
    }
    equals(other) {
        return (this.props.enabled === other.getValue().enabled &&
            this.props.suspended === other.getValue().suspended);
    }
}
exports.HostingAvailability = HostingAvailability;

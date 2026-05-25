"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOffer = void 0;
class ServiceOffer {
    id;
    caregiverId;
    type;
    description;
    price;
    locality;
    isActive;
    createdAt;
    updatedAt;
    constructor(id, caregiverId, type, description, price, locality, isActive, createdAt, updatedAt) {
        this.id = id;
        this.caregiverId = caregiverId;
        this.type = type;
        this.description = description;
        this.price = price;
        this.locality = locality;
        this.isActive = isActive;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    activate() {
        if (this.isActive) {
            throw new Error('ServiceOffer já está ativo');
        }
        this.isActive = true;
        this.updatedAt = new Date();
    }
    deactivate() {
        if (!this.isActive) {
            throw new Error('ServiceOffer já está inativo');
        }
        this.isActive = false;
        this.updatedAt = new Date();
    }
    changePrice(newPrice) {
        this.price = newPrice;
        this.updatedAt = new Date();
    }
    getPrice() {
        return this.price;
    }
    isEnabled() {
        return this.isActive;
    }
}
exports.ServiceOffer = ServiceOffer;

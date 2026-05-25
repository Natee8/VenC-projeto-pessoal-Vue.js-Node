"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRequest = void 0;
class ServiceRequest {
    id;
    ownerId;
    petId;
    type;
    description;
    status;
    location;
    urgency;
    scheduledAt;
    createdAt;
    updatedAt;
    constructor(id, ownerId, petId, type, description, status, location, urgency, scheduledAt, createdAt, updatedAt) {
        this.id = id;
        this.ownerId = ownerId;
        this.petId = petId;
        this.type = type;
        this.description = description;
        this.status = status;
        this.location = location;
        this.urgency = urgency;
        this.scheduledAt = scheduledAt;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    getStatus() {
        return this.status;
    }
    getLocation() {
        return this.location;
    }
    getUrgency() {
        return this.urgency;
    }
    getScheduledAt() {
        return this.scheduledAt;
    }
    accept() {
        if (this.status !== 'OPEN') {
            throw new Error('Esse Serviço não pode ser aceito');
        }
        this.status = 'ACCEPTED';
        this.updatedAt = new Date();
    }
    cancel() {
        if (this.status === 'COMPLETED') {
            throw new Error('Esse Serviço já foi concluído');
        }
        this.status = 'CANCELLED';
        this.updatedAt = new Date();
    }
    complete() {
        if (this.status !== 'ACCEPTED') {
            throw new Error('Esse Serviço não pode ser finalizado');
        }
        this.status = 'COMPLETED';
        this.updatedAt = new Date();
    }
}
exports.ServiceRequest = ServiceRequest;

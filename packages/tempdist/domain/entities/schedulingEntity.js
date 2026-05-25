"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scheduling = void 0;
class Scheduling {
    id;
    serviceRequest;
    caregiver;
    scheduledAt;
    status;
    createdAt;
    updatedAt;
    constructor(id, serviceRequest, caregiver, scheduledAt, status, createdAt, updatedAt) {
        this.id = id;
        this.serviceRequest = serviceRequest;
        this.caregiver = caregiver;
        this.scheduledAt = scheduledAt;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.validate();
    }
    validate() {
        if (!this.scheduledAt) {
            throw new Error("O agendamento precisa ter uma data definida!");
        }
        if (this.scheduledAt < new Date()) {
            throw new Error("A data do agendamento não pode ser no passado!");
        }
    }
    getId() {
        return this.id;
    }
    getServiceRequest() {
        return this.serviceRequest;
    }
    getCaregiver() {
        return this.caregiver;
    }
    getScheduledAt() {
        return this.scheduledAt;
    }
    getStatus() {
        return this.status;
    }
    confirm() {
        if (this.status === "CANCELLED") {
            throw new Error("Não é possível confirmar um agendamento cancelado");
        }
        this.status = "CONFIRMED";
        this.touch();
    }
    start() {
        if (this.status !== "CONFIRMED") {
            throw new Error("O agendamento precisa estar confirmado para iniciar");
        }
        this.status = "IN_PROGRESS";
        this.touch();
    }
    finish() {
        if (this.status !== "IN_PROGRESS") {
            throw new Error("O agendamento precisa estar em andamento para ser finalizado");
        }
        this.status = "DONE";
        this.touch();
    }
    cancel() {
        if (this.status === "DONE") {
            throw new Error("Não é possível cancelar um agendamento finalizado");
        }
        this.status = "CANCELLED";
        this.touch();
    }
    touch() {
        this.updatedAt = new Date();
    }
}
exports.Scheduling = Scheduling;

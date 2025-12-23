import { ServiceType } from "../../types/ServiceType";
import { Address } from "../valuesObjects/address";

export type ServiceRequestStatus =
  | 'OPEN'
  | 'ACCEPTED'
  | 'CANCELLED'
  | 'COMPLETED';

export type UrgencyType = 'NOW' | 'SCHEDULED';

export class ServiceRequest {
  constructor(
    public readonly id: string,
    public readonly ownerId: string,
    public readonly petId: string,
    private type: ServiceType,
    private description: string,
    private status: ServiceRequestStatus,
    private location: Address,
    private urgency: UrgencyType,
    private scheduledAt: Date | null,
    public readonly createdAt: Date,
    private updatedAt: Date
  ) {}

  getStatus() {
    return this.status;
  }

  getLocation() {
    return this.location
  }
  getUrgency() {
    return this.urgency
  }
  getScheduledAt() {
    return this.scheduledAt
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

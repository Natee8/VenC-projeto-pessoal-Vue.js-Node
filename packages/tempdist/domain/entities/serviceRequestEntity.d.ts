import { ServiceRequestStatus, ServiceTypes, UrgencyType } from "../../types/serviceType.js";
import { Address } from "../../valuesObjects/address.js";
export declare class ServiceRequest {
    readonly id: string;
    readonly ownerId: string;
    readonly petId: string;
    private type;
    private description;
    private status;
    private location;
    private urgency;
    private scheduledAt;
    readonly createdAt: Date;
    private updatedAt;
    constructor(id: string, ownerId: string, petId: string, type: ServiceTypes, description: string, status: ServiceRequestStatus, location: Address, urgency: UrgencyType, scheduledAt: Date | null, createdAt: Date, updatedAt: Date);
    getStatus(): ServiceRequestStatus;
    getLocation(): Address;
    getUrgency(): UrgencyType;
    getScheduledAt(): Date | null;
    accept(): void;
    cancel(): void;
    complete(): void;
}

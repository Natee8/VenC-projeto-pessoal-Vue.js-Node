import { SchedulingStatus } from "../../types/schedulingTypes.js";
import { Caregiver } from "./caregiverEntity.js";
import { ServiceRequest } from "./serviceRequestEntity.js";
export declare class Scheduling {
    private readonly id;
    private readonly serviceRequest;
    private readonly caregiver;
    private scheduledAt;
    private status;
    private readonly createdAt;
    private updatedAt;
    constructor(id: number, serviceRequest: ServiceRequest, caregiver: Caregiver, scheduledAt: Date, status: SchedulingStatus, createdAt: Date, updatedAt: Date);
    private validate;
    getId(): number;
    getServiceRequest(): ServiceRequest;
    getCaregiver(): Caregiver;
    getScheduledAt(): Date;
    getStatus(): SchedulingStatus;
    confirm(): void;
    start(): void;
    finish(): void;
    cancel(): void;
    private touch;
}

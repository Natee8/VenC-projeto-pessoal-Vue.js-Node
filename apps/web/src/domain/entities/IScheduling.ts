import { SchedulingStatus } from "../../../../../packages/types/schedulingTypes";
import { ServiceRequestStatus } from "../../../../../packages/types/serviceType";
import { IServiceRequest } from "./IServiceRequest";
import { IUser } from "./IUserEntity";

export interface IScheduling {
    id: number,
    serviceRequest: IServiceRequest,
    caregiver: IUser,
    scheduledAt: Date,
    status: SchedulingStatus,
    createdAt: Date,
    updatedAt: Date
}
import { SchedulingStatus } from "../../../../../packages/types/schedulingTypes";
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
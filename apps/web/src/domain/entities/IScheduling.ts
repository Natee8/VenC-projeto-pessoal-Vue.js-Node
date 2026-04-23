import { IUserDTO } from "@packages";
import { SchedulingStatus } from "@packages";
import { IServiceRequest } from "./IServiceRequest.js";

export interface IScheduling {
  id: number;
  serviceRequest: IServiceRequest;
  caregiver: IUserDTO;
  scheduledAt: Date;
  status: SchedulingStatus;
  createdAt: Date;
  updatedAt: Date;
}

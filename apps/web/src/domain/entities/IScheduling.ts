import { IUserDTO } from "../../../../../packages/src/domain/dtos/IUser.dto.js";
import { SchedulingStatus } from "../../../../../packages/src/types/schedulingTypes.js";
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

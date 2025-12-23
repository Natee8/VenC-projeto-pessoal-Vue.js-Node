import { SchedulingStatus } from '../../../../../packages/types/schedulingTypes'

export interface SchedulingDTO {
  id: number;
  serviceRequestId: string;
  caregiverId: string;
  scheduledAt: string;
  status: SchedulingStatus;
  createdAt: string;
  updatedAt: string;
}

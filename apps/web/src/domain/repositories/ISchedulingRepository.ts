import { CreateSchedulingParams } from "../dtos/scheduling.dto";
import { IScheduling } from "../entities/IScheduling";

export interface SchedulingRepository {
  create(
    params: CreateSchedulingParams
  ): Promise<IScheduling>;

  getById(schedulingId: number): Promise<IScheduling | null>;

  listByCaregiverId(caregiverId: string): Promise<IScheduling[]>;

  listByOwnerId(ownerId: string): Promise<IScheduling[]>;

  confirm(schedulingId: number): Promise<void>;

  start(schedulingId: number): Promise<void>;

  finish(schedulingId: number): Promise<void>;

  cancel(schedulingId: number): Promise<void>;
  
}

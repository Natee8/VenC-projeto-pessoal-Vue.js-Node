import { CreateServiceRequestParams } from "../dtos/serviceRequest.dto.js";
import { IServiceRequest } from "../entities/IServiceRequest.js";

export interface ServiceRequestRepository {
  create(
    params: CreateServiceRequestParams
  ): Promise<IServiceRequest>;

  getById(serviceRequestId: string): Promise<IServiceRequest | null>;

  listByOwnerId(ownerId: string): Promise<IServiceRequest[]>;

  listOpen(): Promise<IServiceRequest[]>;

  accept(serviceRequestId: string): Promise<void>;

  cancel(serviceRequestId: string): Promise<void>;

  complete(serviceRequestId: string): Promise<void>;
  
}

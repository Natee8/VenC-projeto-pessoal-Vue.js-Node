import { CreateServiceRequestParams } from "../dtos/serviceRequest.dto";
import { IServiceRequest } from "../entities/IServiceRequest";

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

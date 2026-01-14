import { IAddress } from "../../../../../packages/src/domain/dtos/IAddress.dto.js";
import { ServiceRequestStatus, ServiceTypes, UrgencyType } from "../../../../../packages/src/types/serviceType.js";

export interface IServiceRequest {
  id: string;
  ownerId: string;
  petId: string;
  type: ServiceTypes;
  description: string;
  status: ServiceRequestStatus;
  location: IAddress;
  urgency: UrgencyType;
  scheduledAt: string | null;
  createdAt: string;
  updatedAt: string;
}

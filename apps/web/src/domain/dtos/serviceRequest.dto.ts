import { IAddress } from "../../../../../packages/src/domain/dtos/IAddress.dto.js";
import { ServiceTypes, UrgencyType } from "../../../../../packages/src/types/serviceType.js";

export type CreateServiceRequestParams = {
  ownerId: string;
  petId: string;
  type: ServiceTypes;
  description: string;
  urgency: UrgencyType;
  location: IAddress
  scheduledAt?: string; 
};

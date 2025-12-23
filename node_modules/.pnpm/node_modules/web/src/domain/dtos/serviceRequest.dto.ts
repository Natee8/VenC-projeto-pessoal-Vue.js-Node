import { ServiceType, UrgencyType } from "../../../../../packages/types/serviceType";
import { IAddress } from "../entities/IAddressEntity";

export type CreateServiceRequestParams = {
  ownerId: string;
  petId: string;
  type: ServiceType;
  description: string;
  urgency: UrgencyType;
  location: IAddress
  scheduledAt?: string; 
};

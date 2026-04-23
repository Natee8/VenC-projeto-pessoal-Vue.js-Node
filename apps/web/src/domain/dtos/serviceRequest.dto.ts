import { IAddress } from "@packages";
import { ServiceTypes, UrgencyType } from "@packages";

export type CreateServiceRequestParams = {
  ownerId: string;
  petId: string;
  type: ServiceTypes;
  description: string;
  urgency: UrgencyType;
  location: IAddress;
  scheduledAt?: string;
};

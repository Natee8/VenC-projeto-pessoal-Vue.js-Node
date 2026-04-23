import { IAddress } from "@packages";
import { ServiceRequestStatus, ServiceTypes, UrgencyType } from "@packages";

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

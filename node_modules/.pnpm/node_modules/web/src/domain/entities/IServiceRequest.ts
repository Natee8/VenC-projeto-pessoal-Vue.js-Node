import { ServiceRequestStatus, ServiceType, UrgencyType } from '../../../../../packages/types/serviceType';
import { IAddress } from './IAddressEntity';

export interface IServiceRequest {
  id: string;
  ownerId: string;
  petId: string;
  type: ServiceType;
  description: string;
  status: ServiceRequestStatus;
  location: IAddress;
  urgency: UrgencyType;
  scheduledAt: string | null;
  createdAt: string;
  updatedAt: string;
}
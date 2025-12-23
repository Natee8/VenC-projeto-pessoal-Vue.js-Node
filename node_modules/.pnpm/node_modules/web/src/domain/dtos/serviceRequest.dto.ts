import { ServiceType, ServiceRequestStatus, UrgencyType } from '../../../../../packages/types/serviceType'
import { AddressDTO } from './address.dto';
export interface ServiceRequestDTO {
  id: string;
  ownerId: string;
  petId: string;
  type: ServiceType;
  description: string;
  status: ServiceRequestStatus;
  urgency: UrgencyType;
  scheduledAt: string | null;
  location: AddressDTO;
  createdAt: string;
  updatedAt: string;
}

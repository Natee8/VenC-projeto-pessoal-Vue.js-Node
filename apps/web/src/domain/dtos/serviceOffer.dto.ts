import { ServiceType } from '../../../../../packages/types/serviceType'
import { AddressDTO } from "./address.dto";

export interface ServiceOfferDTO {
  id: string;
  caregiverId: string;
  type: ServiceType;
  description: string;
  price: number;
  currency: string;
  locality:AddressDTO;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

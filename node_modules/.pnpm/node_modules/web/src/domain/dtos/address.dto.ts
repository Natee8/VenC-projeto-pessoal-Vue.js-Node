import { State } from '../../../../../packages/types/address'

export interface AddressDTO {
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: State;
  zipCode: string;
  country: string;
}

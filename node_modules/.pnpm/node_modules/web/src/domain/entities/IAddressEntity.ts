import { State } from '../../../../../packages/types/address'

export interface IAddress {
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: State;
  zipCode: string;
  country: string;
}

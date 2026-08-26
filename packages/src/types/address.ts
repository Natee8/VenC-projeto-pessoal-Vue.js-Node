import { State } from "./stateEnum.js";

export interface AddressPrimitives {
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: State;
  zipCode: string;
  complement?: string;
  latitude?: number;
  longitude?: number;
}

import { State } from "./stateEnum";

export interface AddressPrimitives extends Record<string, unknown> {
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

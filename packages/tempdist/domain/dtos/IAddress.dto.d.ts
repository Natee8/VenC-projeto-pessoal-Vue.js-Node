import { State } from "../../types/stateEnum";
export interface IAddress {
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

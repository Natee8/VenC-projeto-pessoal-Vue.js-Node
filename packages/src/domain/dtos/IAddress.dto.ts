import { State } from "apps/service/src/generated/prisma/index.js";

export interface IAddress {
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: State;
  zipCode: string;
}

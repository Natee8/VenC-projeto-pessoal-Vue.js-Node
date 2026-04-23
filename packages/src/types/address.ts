import { State } from "apps/service/src/generated/prisma/index.js";

export interface AddressPrimitives extends Record<string, unknown> {
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: State;
  zipCode: string;
}

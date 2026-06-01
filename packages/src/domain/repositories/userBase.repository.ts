import { CPF } from "../../valuesObjects/cpf.js";
import { Email } from "../../valuesObjects/email.js";
import { UserAuth } from "../entities/userAuthEntity.js";

export interface IUsersRepository<Tx = unknown> {
  save(user: UserAuth, tx?: Tx): Promise<UserAuth>;
  findById(id: number, tx?: Tx): Promise<UserAuth | null>;
  findByEmail(email: Email, tx?: Tx): Promise<UserAuth | null>;
  findByCpf(cpf: CPF, tx?: Tx): Promise<UserAuth | null>;
}

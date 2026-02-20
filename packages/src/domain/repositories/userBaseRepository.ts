import { Email } from "../../valuesObjects/email.js";
import { UserAuth } from "../entities/userAuthEntity.js";

export interface IUsersRepository {
  save(user: UserAuth): Promise<UserAuth>;
  findById(id: number): Promise<UserAuth | null>;
  findByEmail(email: Email): Promise<UserAuth | null>;
}

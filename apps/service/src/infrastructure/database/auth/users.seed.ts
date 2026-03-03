import { UserAuth } from "../../../../../../packages/src/domain/entities/userAuthEntity.js";
import { Email } from "../../../../../../packages/src/valuesObjects/email.js";
import { UserId } from "../../../../../../packages/src/valuesObjects/userId.js";
import { BirthDate } from "../../../../../../packages/src/valuesObjects/birthDate.js";
import { CPF } from "../../../../../../packages/src/valuesObjects/cpf.js";
import { Name } from "../../../../../../packages/src/valuesObjects/name.js";
import { PasswordService } from "../../../application/service/passwordComparer.js";
import { UsersRepository } from "../../repositories/auth/authLogin.repository.js";

export async function seedUsers() {
  const usersRepo = new UsersRepository();
  const passwordService = new PasswordService();

  const passwordHash = await passwordService.hash("46058515");

  const user = new UserAuth(
    UserId.create(1),
    Name.create("Usuário de Teste"),
    Email.create("testeemail@gmail.com"),
    passwordHash,
    true,
    "", // no profile photo for seed
    new BirthDate(new Date("2000-01-01")),
    CPF.create("12345678900"),
    new Date(),
    new Date(),
  );

  await usersRepo.save(user);
}

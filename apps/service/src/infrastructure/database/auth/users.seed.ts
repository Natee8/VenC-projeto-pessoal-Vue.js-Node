import { UserAuth } from "@packages";
import { Email } from "@packages";
import { UserId } from "@packages";
import { BirthDate } from "@packages";
import { CPF } from "@packages";
import { Name } from "@packages";
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

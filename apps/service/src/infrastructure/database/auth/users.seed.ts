import { UserAuth } from "../../../../../../packages/src/domain/entities/userAuthEntity.js";
import { Email } from "../../../../../../packages/src/valuesObjects/email.js";
import { UserId } from "../../../../../../packages/src/valuesObjects/userId.js";
import { PasswordService } from "../../../application/service/passwordComparer.js";
import { UsersRepository } from "../../repositories/auth/authLogin.repository.js";

export async function seedUsers() {
    const usersRepo = new UsersRepository();
    const passwordService = new PasswordService();
    const passwordHash = await passwordService.hash('46058515');

    const user = new UserAuth(
        UserId.create(1),
        Email.create('testeemail@gmail.com'),
        passwordHash,
        true,
        new Date(),
        new Date()
    )

    await usersRepo.save(user);

}
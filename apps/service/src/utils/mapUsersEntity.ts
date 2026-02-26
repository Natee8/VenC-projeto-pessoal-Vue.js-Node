import { UserAuth } from "../../../../packages/src/domain/entities/userAuthEntity.js";
import { BirthDate } from "../../../../packages/src/valuesObjects/birthDate.js";
import { CPF } from "../../../../packages/src/valuesObjects/cpf.js";
import { Email } from "../../../../packages/src/valuesObjects/email.js";
import { Name } from "../../../../packages/src/valuesObjects/name.js";
import { UserId } from "../../../../packages/src/valuesObjects/userId.js";
import { UserAuth as PrismaUserAuth } from "../generated/prisma/index.js";

export const mapPrismaUserAuthToEntity = (user: PrismaUserAuth): UserAuth => {
  return new UserAuth(
    UserId.create(user.id),
    Name.create(user.name),
    Email.create(user.email),
    user.passwordHash,
    user.isActive,
    new BirthDate(user.birthDate),
    CPF.create(user.cpf),
    user.createdAt,
    user.updatedAt,
  );
};

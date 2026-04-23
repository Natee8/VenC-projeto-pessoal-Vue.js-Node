import { UserAuth } from "@packages";
import { BirthDate } from "@packages";
import { CPF } from "@packages";
import { Email } from "@packages";
import { Name } from "@packages";
import { UserId } from "@packages";
import { UserAuth as PrismaUserAuth } from "../generated/prisma/index.js";

export const mapPrismaUserAuthToEntity = (user: PrismaUserAuth): UserAuth => {
  return new UserAuth(
    UserId.create(user.id),
    Name.create(user.name),
    Email.create(user.email),
    user.passwordHash,
    user.isActive,
    // prisma model should contain profilePhotoUrl after migration; fallback to empty string
    user.profilePhotoUrl ?? "",
    new BirthDate(user.birthDate),
    CPF.create(user.cpf),
    user.createdAt,
    user.updatedAt,
  );
};

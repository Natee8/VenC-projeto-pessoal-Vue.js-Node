import { UserAuth } from "../../../../../../packages/src/domain/entities/userAuthEntity.js";
import { Email } from "../../../../../../packages/src/valuesObjects/email.js";
import { UserId } from "../../../../../../packages/src/valuesObjects/userId.js";
import { BirthDate } from "../../../../../../packages/src/valuesObjects/birthDate.js";
import { CPF } from "../../../../../../packages/src/valuesObjects/cpf.js";
import {
  PrismaClient,
  UserAuth as PrismaUserAuth,
} from "../../../generated/prisma/index.js";
import { IUsersRepository } from "../../../../../../packages/src/domain/repositories/userBaseRepository.js";

export class UsersRepository implements IUsersRepository {
  private prisma = new PrismaClient();

  private mapToEntity(record: PrismaUserAuth): UserAuth {
    return new UserAuth(
      UserId.create(record.id),
      Email.create(record.email),
      record.passwordHash,
      record.isActive,
      new BirthDate(record.birthDate),
      CPF.create(record.cpf),
      record.createdAt,
      record.updatedAt,
    );
  }

  async findById(id: number): Promise<UserAuth | null> {
    const user = await this.prisma.userAuth.findUnique({ where: { id } });
    if (!user) return null;
    return this.mapToEntity(user);
  }

  async findByEmail(email: Email): Promise<UserAuth | null> {
    const user = await this.prisma.userAuth.findUnique({
      where: { email: email.value },
    });
    if (!user) return null;
    return this.mapToEntity(user);
  }

  async save(user: UserAuth): Promise<UserAuth> {
    const record = await this.prisma.userAuth.upsert({
      where: { cpf: user.getCpf() },
      update: {
        passwordHash: user.getPasswordHash(),
        isActive: user.isEnabled(),
        birthDate: user.getBirthDate(),
        updatedAt: new Date(),
      },
      create: {
        email: user.getEmail(),
        passwordHash: user.getPasswordHash(),
        isActive: user.isEnabled(),
        birthDate: user.getBirthDate(),
        cpf: user.getCpf(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return this.mapToEntity(record);
  }
}

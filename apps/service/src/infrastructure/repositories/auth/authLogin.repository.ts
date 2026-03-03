import { UserAuth } from "../../../../../../packages/src/domain/entities/userAuthEntity.js";
import { BirthDate } from "../../../../../../packages/src/valuesObjects/birthDate.js";
import { CPF } from "../../../../../../packages/src/valuesObjects/cpf.js";
import { Email } from "../../../../../../packages/src/valuesObjects/email.js";
import { UserId } from "../../../../../../packages/src/valuesObjects/userId.js";
import { Name } from "../../../../../../packages/src/valuesObjects/name.js";
import {
  PrismaClient,
  UserAuth as PrismaUserAuth,
} from "../../../generated/prisma/index.js";
import type { Prisma } from "../../../generated/prisma/index.js";
import type { IUsersRepository } from "../../../../../../packages/src/domain/repositories/userBaseRepository.js";

export class UsersRepository implements IUsersRepository<Prisma.TransactionClient> {
  private prisma = new PrismaClient();

  private mapToEntity(record: PrismaUserAuth): UserAuth {
    return new UserAuth(
      UserId.create(record.id),
      Name.create(record.name),
      Email.create(record.email),
      record.passwordHash,
      record.isActive,
      // assuming the prisma schema now has profilePhotoUrl
      record.profilePhotoUrl ?? "",
      new BirthDate(record.birthDate),
      CPF.create(record.cpf),
      record.createdAt,
      record.updatedAt,
    );
  }

  async findById(
    id: number,
    tx?: Prisma.TransactionClient,
  ): Promise<UserAuth | null> {
    const client = tx ?? this.prisma;
    const user = await client.userAuth.findUnique({ where: { id } });
    if (!user) return null;
    return this.mapToEntity(user);
  }

  async findByCpf(
    cpf: CPF,
    tx?: Prisma.TransactionClient,
  ): Promise<UserAuth | null> {
    const client = tx ?? this.prisma;
    const user = await client.userAuth.findUnique({
      where: { cpf: cpf.getValue() },
    });

    if (!user) return null;

    return this.mapToEntity(user);
  }

  async saveUserDirectly(data: {
    name: string;
    email: string;
    passwordHash: string;
    isActive: boolean;
    birthDate: Date;
    cpf: string;
  }) {
    return this.prisma.userAuth.create({
      data: {
        name: data.name,
        email: data.email,
        passwordHash: data.passwordHash,
        isActive: data.isActive,
        birthDate: data.birthDate,
        cpf: data.cpf,
      },
    });
  }

  async findByEmail(
    email: Email,
    tx?: Prisma.TransactionClient,
  ): Promise<UserAuth | null> {
    const client = tx ?? this.prisma;
    const user = await client.userAuth.findUnique({
      where: { email: email.value },
    });
    if (!user) return null;
    return this.mapToEntity(user);
  }

  async save(user: UserAuth, tx?: Prisma.TransactionClient): Promise<UserAuth> {
    const client = tx ?? this.prisma;

    const record = await client.userAuth.upsert({
      where: { cpf: user.getCpf() },
      update: {
        passwordHash: user.getPasswordHash(),
        isActive: user.isEnabled(),
        // support profile photo update if user changed
        profilePhotoUrl: user.getProfilePhoto(),
        updatedAt: new Date(),
      },
      create: {
        name: user.getName().value,
        email: user.getEmail(),
        passwordHash: user.getPasswordHash(),
        isActive: user.isEnabled(),
        profilePhotoUrl: user.getProfilePhoto(),
        birthDate: user.getBirthDate(),
        cpf: user.getCpf(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return this.mapToEntity(record);
  }
}

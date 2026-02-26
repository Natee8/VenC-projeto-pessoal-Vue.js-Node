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

export class UsersRepository {
  private prisma = new PrismaClient();

  private mapToEntity(record: PrismaUserAuth): UserAuth {
    return new UserAuth(
      UserId.create(record.id),
      Name.create(record.name),
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

  async findByCpf(cpf: CPF): Promise<UserAuth | null> {
    const user = await this.prisma.userAuth.findUnique({
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
        updatedAt: new Date(),
      },
      create: {
        name: user.getName().value,
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

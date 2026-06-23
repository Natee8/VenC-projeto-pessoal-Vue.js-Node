import { BirthDate, CPF } from "@packages";
import { Email } from "@packages";
import { UserId } from "@packages";
import { Name } from "@packages";
import {
  PrismaClient,
  UserAuth as PrismaUserAuth,
} from "../../../generated/prisma/index.js";
import type { Prisma } from "../../../generated/prisma/index.js";
import { IUsersRepository, UserAuth } from "@packages";

export class UsersRepository implements IUsersRepository<Prisma.TransactionClient> {
  private prisma = new PrismaClient();

  private mapToEntity(record: PrismaUserAuth): UserAuth {
    return new UserAuth(
      UserId.create(record.id),
      Name.create(record.name),
      Email.create(record.email),
      record.passwordHash,
      record.isActive,
      record.profilePhotoUrl ?? "",
      BirthDate.create(record.birthDate),
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
      where: { email: email.getValue() },
    });
    if (!user) return null;
    return this.mapToEntity(user);
  }

  async findWithProfilesByEmail(email: Email, tx?: Prisma.TransactionClient) {
    const client = tx ?? this.prisma;

    return client.userAuth.findUnique({
      where: { email: email.getValue() },
      include: {
        ownerProfile: true,
        caregiver: true,
      },
    });
  }

  async findWithProfilesById(id: number, tx?: Prisma.TransactionClient) {
    const client = tx ?? this.prisma;

    const user = await client.userAuth.findUnique({
      where: { id },
      include: {
        ownerProfile: true,
        caregiver: true,
      },
    });

    if (!user) return null;

    return user;
  }

  async save(user: UserAuth, tx?: Prisma.TransactionClient): Promise<UserAuth> {
    const client = tx ?? this.prisma;

    const record = await client.userAuth.upsert({
      where: { cpf: user.getCpf().getValue() },
      update: {
        passwordHash: user.getPasswordHash(),
        isActive: user.isEnabled(),
        profilePhotoUrl: user.getProfilePhoto(),
        updatedAt: new Date(),
      },
      create: {
        name: user.getName().getValue(),
        email: user.getEmail().getValue(),
        passwordHash: user.getPasswordHash(),
        isActive: user.isEnabled(),
        profilePhotoUrl: user.getProfilePhoto(),
        birthDate: user.getBirthDate().getValue(),
        cpf: user.getCpf().getValue(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return this.mapToEntity(record);
  }
}

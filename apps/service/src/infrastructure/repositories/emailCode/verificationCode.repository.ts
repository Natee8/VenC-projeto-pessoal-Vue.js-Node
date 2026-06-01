// infrastructure/repositories/prismaVerificationCode.repository.ts

import { VerificationCodeRepository } from "@packages";
import { PrismaClient } from "@prisma/client/extension";

export class PrismaVerificationCodeRepository implements VerificationCodeRepository {
  constructor(private prisma: PrismaClient) {}
  async save(data: {
    email: string;
    code: string;
    expiresAt: Date;
  }): Promise<void> {
    await this.prisma.verificationCode.create({
      data,
    });
  }

  async findValidCode(email: string, code: string): Promise<boolean> {
    const result = await this.prisma.verificationCode.findFirst({
      where: {
        email,
        code,
        expiresAt: {
          gt: new Date(),
        },
      },
    });

    return !!result;
  }

  async deleteByEmail(email: string): Promise<void> {
    await this.prisma.verificationCode.deleteMany({
      where: { email },
    });
  }
}

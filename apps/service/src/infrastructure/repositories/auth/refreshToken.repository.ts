import { PrismaClient, RefreshToken as PrismaRefreshToken } from '../../../generated/prisma'
import { RefreshTokenEntity } from '../../../../../../packages/domain/entities/refreshTokenEntity'

export class RefreshTokenRepository {
  private prisma = new PrismaClient()

  private mapToEntity(record: PrismaRefreshToken): RefreshTokenEntity {
    return new RefreshTokenEntity({
      token: record.token,
      userId: record.userId,
      createdAt: record.createdAt,
      expiresAt: record.expiresAt
    })
  }

  async save(token: RefreshTokenEntity): Promise<void> {
    await this.prisma.refreshToken.upsert({
      where: { token: token.token },
      update: {
        userId: token.userId,
        expiresAt: token.expiresAt,
        createdAt: token.createdAt
      },
      create: {
        token: token.token,
        userId: token.userId,
        createdAt: token.createdAt,
        expiresAt: token.expiresAt
      }
    })
  }

  async find(token: string): Promise<RefreshTokenEntity | null> {
    const record = await this.prisma.refreshToken.findUnique({ where: { token } })
    if (!record) return null
    return this.mapToEntity(record)
  }

  async revoke(token: string): Promise<void> {
    await this.prisma.refreshToken.delete({ where: { token } })
  }

  async findByUserId(userId: number): Promise<RefreshTokenEntity[]> {
    const records = await this.prisma.refreshToken.findMany({ where: { userId } })
    return records.map(this.mapToEntity)
  }
}

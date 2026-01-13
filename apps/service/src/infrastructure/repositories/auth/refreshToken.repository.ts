import { PrismaClient, RefreshToken as PrismaRefreshToken } from '../../../generated/prisma'
import { RefreshTokenEntity } from '../../../../../../packages/domain/entities/refreshTokenEntity'
import { UserId } from '../../../../../../packages/domain/valuesObjects/userID'
import jwt from 'jsonwebtoken'
import { UserAuth } from '../../../../../../packages/domain/entities/userAuthEntity'
import { IRefreshTokenRepository } from '../../../../../../packages/domain/repositories/Auth.repositories'

export class RefreshTokenRepository implements IRefreshTokenRepository {
  private prisma = new PrismaClient()

  private mapToEntity(record: PrismaRefreshToken): RefreshTokenEntity {
    return new RefreshTokenEntity({
      token: record.token,
      userId: UserId.create(record.userId),
      createdAt: record.createdAt,
      expiresAt: record.expiresAt
    })
  }

  async save(token: RefreshTokenEntity): Promise<void> {
    await this.prisma.refreshToken.upsert({
      where: { token: token.token },
      update: {
        userId: token.userId.getValue(),
        expiresAt: token.expiresAt,
        createdAt: token.createdAt
      },
      create: {
        token: token.token,
        userId: token.userId.getValue(),
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

  async findByUserId(userId: UserId): Promise<RefreshTokenEntity[]> {
    const records = await this.prisma.refreshToken.findMany({
      where: { userId: userId.getValue() }
    })

    return records.map(r => this.mapToEntity(r))
  }

  async create(user: UserAuth): Promise<RefreshTokenEntity> {
    const token = jwt.sign(
      { sub: user.id.getValue() },
      process.env.JWT_REFRESH_SECRET!,
      { expiresIn: '7d' }
    )

    const entity = new RefreshTokenEntity({
      token,
      userId: user.id,
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    })

    await this.save(entity)
    return entity
  }
}

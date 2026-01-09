import { UserAuth } from '../../../../../../packages/domain/entities/userAuthEntity'
import { Email } from '../../../../../../packages/domain/valuesObjects/Email'
import { UserId } from '../../../../../../packages/domain/valuesObjects/userID'
import { PrismaClient, UserAuth as PrismaUserAuth } from '../../../generated/prisma'

export class UsersRepository {
  private prisma = new PrismaClient()

  private mapToEntity(record: PrismaUserAuth): UserAuth {
    return new UserAuth(
        UserId.create(record.id),
        Email.create(record.email),
        record.passwordHash,
        record.isActive,
        record.createdAt,
        record.updatedAt
    )
  }

  async findById(id: number): Promise<UserAuth | null> {
    const user = await this.prisma.userAuth.findUnique({ where: { id } })
    if (!user) return null
    return this.mapToEntity(user)
  }

  async findByEmail(email: Email): Promise<UserAuth | null> {
    const user = await this.prisma.userAuth.findUnique({ where: { email: email.value } })
    if (!user) return null
    return this.mapToEntity(user)
  }

  async save(user: UserAuth): Promise<void> {
    await this.prisma.userAuth.upsert({
        where: { id: Number(user.getId()) },
        update: {
        email: user.getEmail(),
        passwordHash: user.getPasswordHash(),
        isActive: user.isEnabled()
      },
      create: {
        email: user.getEmail(),
        passwordHash: user.getPasswordHash(),
        isActive: user.isEnabled()
      }
    })
  }
}

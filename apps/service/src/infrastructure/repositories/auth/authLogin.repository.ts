import { UserAuth } from '../../../../../../packages/src/domain/entities/userAuthEntity.js'
import { Email } from '../../../../../../packages/src/valuesObjects/email.js'
import { UserId } from '../../../../../../packages/src/valuesObjects/userId.js'
import { PrismaClient, UserAuth as PrismaUserAuth } from '../../../generated/prisma/index.js'

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
        where: { email: user.getEmail() }, // ⚡ email é único
        update: {
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

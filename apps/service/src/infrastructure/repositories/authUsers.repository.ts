import { PrismaClient } from '../../generated/prisma'
import { mapPrismaUserAuthToEntity } from '../../utils/mapUsersEntity'
import { UserAuth } from '../../../../../packages/domain/entities/userAuthEntity'
import { Email } from '../../../../../packages/domain/valuesObjects/Email'

export class UsersRepository {
  private prisma = new PrismaClient()

  async findById(id: string): Promise<UserAuth | null> {
    const user = await this.prisma.userAuth.findUnique({
      where: { id: Number(id) },
    })

    if (!user) return null

    return mapPrismaUserAuthToEntity(user)
  }

  async findByEmail (email: Email): Promise<UserAuth | null> {
      const user = await this.prisma.userAuth.findUnique({
        where: { email: email.value},
      })
      if(!user) return null
      return mapPrismaUserAuthToEntity(user)
  }

   async save (user: UserAuth): Promise<void> {
        await this.prisma.userAuth.upsert({
          where: { id: Number(user.getId()) },
           update: {
            email: user.getEmail(),
            passwordHash: user.getPasswordHash(),
            isActive: user.isEnabled(),
          },
          create: {
            email: user.getEmail(),
            passwordHash: user.getPasswordHash(),
            isActive: user.isEnabled(),
          }
        })
  }
}

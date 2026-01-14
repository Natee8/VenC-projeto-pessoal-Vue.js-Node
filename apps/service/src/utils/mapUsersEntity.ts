import { UserAuth } from '../../../../packages/src/domain/entities/userAuthEntity.js'
import { Email } from '../../../../packages/src/valuesObjects/email.js'
import { UserId } from '../../../../packages/src/valuesObjects/userId.js'
import { UserAuth as PrismaUserAuth } from '../generated/prisma/index.js'

export const mapPrismaUserAuthToEntity = (
  user: PrismaUserAuth
): UserAuth => {
  return new UserAuth(
    UserId.create(user.id),
    Email.create(user.email),
    user.passwordHash,
    user.isActive,
    user.createdAt,
    user.updatedAt
  )
}

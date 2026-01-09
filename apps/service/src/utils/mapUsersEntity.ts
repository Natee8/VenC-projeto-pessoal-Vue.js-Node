import { UserAuth as PrismaUserAuth } from '../generated/prisma'
import { Email } from '../../../../packages/domain/valuesObjects/Email'
import { UserAuth } from '../../../../packages/domain/entities/userAuthEntity'
import { UserId } from '../../../../packages/domain/valuesObjects/userID'

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

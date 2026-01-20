import { UserAuth } from '../../../../packages/src/domain/entities/userAuthEntity.js';
import { Email } from '../../../../packages/src/valuesObjects/email.js';
import { UserId } from '../../../../packages/src/valuesObjects/userId.js';
export const mapPrismaUserAuthToEntity = (user) => {
    return new UserAuth(UserId.create(user.id), Email.create(user.email), user.passwordHash, user.isActive, user.createdAt, user.updatedAt);
};

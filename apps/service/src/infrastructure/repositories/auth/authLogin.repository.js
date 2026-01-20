import { UserAuth } from '../../../../../../packages/src/domain/entities/userAuthEntity.js';
import { Email } from '../../../../../../packages/src/valuesObjects/email.js';
import { UserId } from '../../../../../../packages/src/valuesObjects/userId.js';
import { PrismaClient } from '../../../generated/prisma/index.js';
export class UsersRepository {
    prisma = new PrismaClient();
    mapToEntity(record) {
        return new UserAuth(UserId.create(record.id), Email.create(record.email), record.passwordHash, record.isActive, record.createdAt, record.updatedAt);
    }
    async findById(id) {
        const user = await this.prisma.userAuth.findUnique({ where: { id } });
        if (!user)
            return null;
        return this.mapToEntity(user);
    }
    async findByEmail(email) {
        const user = await this.prisma.userAuth.findUnique({ where: { email: email.value } });
        if (!user)
            return null;
        return this.mapToEntity(user);
    }
    async save(user) {
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
        });
    }
}

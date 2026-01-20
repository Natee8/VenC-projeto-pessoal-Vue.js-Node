import { RefreshTokenEntity } from '../../../../../../packages/src/domain/entities/refreshTokenEntity.js';
import { UserId } from '../../../../../../packages/src/valuesObjects/userId.js';
import { PrismaClient } from '../../../generated/prisma/index.js';
export class RefreshTokenRepository {
    prisma = new PrismaClient();
    mapToEntity(record) {
        return new RefreshTokenEntity({
            token: record.token,
            userId: UserId.create(record.userId),
            createdAt: record.createdAt,
            expiresAt: record.expiresAt
        });
    }
    async save(token) {
        await this.prisma.refreshToken.upsert({
            where: { token: token.getToken() },
            update: {
                userId: token.userId.getValue(),
                expiresAt: token.expiresAt,
                createdAt: token.createdAt
            },
            create: {
                token: token.getToken(),
                userId: token.userId.getValue(),
                createdAt: token.createdAt,
                expiresAt: token.expiresAt
            }
        });
    }
    async find(token) {
        const record = await this.prisma.refreshToken.findUnique({ where: { token } });
        return record ? this.mapToEntity(record) : null;
    }
    async revoke(token) {
        await this.prisma.refreshToken.delete({ where: { token } });
    }
    async findByUserId(userId) {
        const records = await this.prisma.refreshToken.findMany({
            where: { userId: userId.getValue() }
        });
        return records.map(r => this.mapToEntity(r));
    }
}

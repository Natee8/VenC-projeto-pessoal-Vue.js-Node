import { Users } from '../../../../packages/domain/entities/userAuthEntity';
import { PrismaClient } from '../generated/prisma'
import { mapToUsersEntity } from '../utils/mapUsersEntity'

export class UsersRepository {
    private prisma: PrismaClient;

    constructor(prisma?: PrismaClient) {
        this.prisma = prisma || new PrismaClient();
    }

    async findById(id: string): Promise<Users | null> {
        const numericId = Number(id);
        if (isNaN(numericId)) throw new Error('ID inválido');

        const user = await this.prisma.user.findUnique({
            where: { id: numericId },
        });

        if (!user) return null;

        return mapToUsersEntity(user);
    }

}
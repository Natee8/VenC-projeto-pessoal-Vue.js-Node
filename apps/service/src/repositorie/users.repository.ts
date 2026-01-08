import { Users } from '../../../../packages/domain/entities/userAuthEntity';
import { PrismaClient } from '../generated/prisma'

export class UsersRepository {
    private prisma: PrismaClient;

    constructor(prisma?: PrismaClient) {
        this.prisma = prisma || new PrismaClient();
    }

    async findById(id: string): Promise<Users | null> {
        const user = await this.prisma.user.findUnique({
            where: { id: Number((id)) },
        })
        if (!user) return null

        return this.mapToUsersEntity(user);
    }
}
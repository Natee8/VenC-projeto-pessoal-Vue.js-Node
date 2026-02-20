export class OwnerProfileUseCase {
    private prisma = new PrismaClient();

    private maptoentity(record: prismaOwnerProfile ): OwnerProfile {
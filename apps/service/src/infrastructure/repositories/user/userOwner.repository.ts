import { PrismaClient } from "../../../generated/prisma/index.js";
import type { OwnerProfile as PrismaOwnerProfile } from "../../../generated/prisma/index.js";

import { OwnerProfile } from "../../../../../../packages/src/domain/entities/ownerProfile.js";

export class OwnerProfileUseCase {
  private prisma = new PrismaClient();

  private maptoentity(record: PrismaOwnerProfile): OwnerProfile {
    return new OwnerProfile(
      UserId.create(record.userId),

      (record.pets ?? []).map((pet) => Pet.restore(pet)),
      // 👈 importante (já explico)

      Address.restore(record.address),
      Phone.restore(record.phone),

      record.createdAt,
      record.updatedAt,
      record.searchRadiusKm,
    );
  }

  async save(ownerProfile: OwnerProfile): Promise<OwnerProfile> {
    const record = await this.prisma.ownerProfile.upsert({
      where: { userId: ownerProfile.userId },
      update: {
        pets: ownerProfile.pets || [],
        address: ownerProfile.address,
        phone: ownerProfile.phone,
        searchRadiusKm: ownerProfile.searchRadiusKm,
        updatedAt: new Date(),
      },
      create: {
        userId: ownerProfile.userId,
        pets: ownerProfile.pets || [],
        address: ownerProfile.address,
        phone: ownerProfile.phone,
        searchRadiusKm: ownerProfile.searchRadiusKm,
      },
    });
    return this.maptoentity(record);
  }

  async findByUserId(userId: number): Promise<OwnerProfile | null> {
    const record = await this.prisma.ownerProfile.findUnique({
      where: { userId },
    });
    if (!record) {
      return null;
    }
    return record ? this.maptoentity(record) : null;
  }

  async findall(): Promise<OwnerProfile[]> {
    const records = await this.prisma.ownerProfile.findMany();
    return records.map((record) => this.maptoentity(record));
  }
}

import { IAddress, OwnerProfileDTO } from "@packages";
import { Address } from "@packages";
import { Phone } from "@packages";
import { UserId } from "@packages";
import { Prisma } from "../../../generated/prisma/client.js";
import { OwnerProfileRepository } from "../../../infrastructure/repositories/user/userOwner.repository.js";
import { OwnerProfile } from "@packages";

export class OwnerProfileFacadeUseCase {
  constructor(private ownerProfileRepo: OwnerProfileRepository) {}

  async save(
    input: {
      userId: number;
      address: IAddress;
      phone?: string;
      searchRadiusKm?: number;
    },
    tx?: Prisma.TransactionClient,
  ) {
    const profile = new OwnerProfile(
      UserId.create(input.userId),
      Address.create(input.address),
      input.phone ? Phone.restore(input.phone) : null,
      new Date(),
      new Date(),
      input.searchRadiusKm,
    );

    const saved = await this.ownerProfileRepo.save(profile, tx);

    return this.toDTO(saved);
  }

  async getByUserId(userId: number) {
    const profile = await this.ownerProfileRepo.findByUserId(userId);
    return profile ? this.toDTO(profile) : null;
  }

  async getAll() {
    const profiles = await this.ownerProfileRepo.findAll();
    return profiles.map((p) => this.toDTO(p));
  }

  private toDTO(profile: OwnerProfile): OwnerProfileDTO {
    return {
      userId: profile.getUserId().getValue(),
      address: profile.getAddress().toPrimitives(),
      phone: profile.getPhone()?.toPrimitives() ?? null,
      searchRadiusKm: profile.getSearchRadius(),
      createdAt: profile.getCreatedAt().toISOString(),
      updatedAt: profile.getUpdatedAt().toISOString(),
    };
  }
}

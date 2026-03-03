import { IAddress } from "../../../../../../packages/src/domain/dtos/IAddress.dto.js";
import { OwnerProfile } from "../../../../../../packages/src/domain/entities/ownerProfile.js";
import { AddressPrimitives } from "../../../../../../packages/src/types/address.js";
import { Address } from "../../../../../../packages/src/valuesObjects/address.js";
import { Phone } from "../../../../../../packages/src/valuesObjects/phone.js";
import { UserId } from "../../../../../../packages/src/valuesObjects/userId.js";
import { Prisma } from "../../../generated/prisma/client.js";
import { OwnerProfileRepository } from "../../../infrastructure/repositories/user/userOwner.repository.js";

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
      Address.restore(input.address),
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
    return profiles.map(this.toDTO);
  }

  private toDTO(profile: OwnerProfile) {
    return {
      userId: profile.getUserId().getValue(),
      address: profile.getAddress().toPrimitives(),
      phone: profile.getPhone()?.toPrimitives() ?? null,
      searchRadiusKm: profile.getSearchRadius(),
    };
  }
}

import type { OwnerProfile as PrismaOwnerProfile } from "../../generated/prisma/index.js";

import { OwnerProfile } from "../../../../../packages/src/domain/entities/ownerProfile.js";
import { UserId } from "../../../../../packages/src/valuesObjects/userId.js";
import { Address } from "../../../../../packages/src/valuesObjects/address.js";
import { Phone } from "../../../../../packages/src/valuesObjects/phone.js";
import { AddressPrimitives } from "../../../../../packages/src/types/address.js";

export class OwnerProfileMapper {
  static toEntity(record: PrismaOwnerProfile): OwnerProfile {
    if (!record.address) {
      throw new Error("OwnerProfile sem endereço (estado inválido)");
    }

    return new OwnerProfile(
      UserId.create(record.userId),

      Address.restore(record.address as AddressPrimitives),

      record.phone ? Phone.restore(record.phone) : null,

      record.createdAt,
      record.updatedAt,

      record.searchRadiusKm ?? undefined,
    );
  }

  static toPersistence(ownerProfile: OwnerProfile) {
    return {
      userId: ownerProfile.getUserId().getValue(),
      address: ownerProfile.getAddress().toPrimitives(),
      phone: ownerProfile.getPhone()?.toPrimitives() ?? null,
      searchRadiusKm: ownerProfile.getSearchRadius(),
    };
  }
}

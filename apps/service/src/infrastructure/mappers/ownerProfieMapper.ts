import { OwnerProfile, State } from "@packages";
import { UserId } from "@packages";
import { Address } from "@packages";
import { Phone } from "@packages";
import { OwnerWithAddress } from "../../utils/usersWithAddress.js";

export class OwnerProfileMapper {
  static toEntity(record: OwnerWithAddress): OwnerProfile {
    if (!record.address) {
      throw new Error("OwnerProfile sem endereço (estado inválido)");
    }

    return new OwnerProfile(
      UserId.create(record.userId),

      Address.restore({
        ...record.address,

        state: record.address.state as unknown as State,

        complement: record.address.complement ?? undefined,
        latitude: record.address.latitude ?? undefined,
        longitude: record.address.longitude ?? undefined,
      }),

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

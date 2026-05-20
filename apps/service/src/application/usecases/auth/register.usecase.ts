import { CreateUserBaseUseCase } from "../profiles/createUserBase.usecase.js";
import { OwnerProfileFacadeUseCase } from "../profiles/ownerProfile.usecase.js";
import { CaregiverFacadeUseCase } from "../profiles/caregiverProfile.usecase.js";

import { PrismaClient } from "@prisma/client/extension";
import { Prisma } from "../../../generated/prisma/wasm.js";

import { BirthDate, RegisterInputProfiles } from "@packages";
import { uploadImage } from "../../service/uploadCloudnairy.js";

export class RegisterUseCase {
  constructor(
    private prisma: PrismaClient,
    private createUserBase: CreateUserBaseUseCase,
    private ownerProfile: OwnerProfileFacadeUseCase,
    private caregiverProfile: CaregiverFacadeUseCase,
  ) {}

  async execute(input: RegisterInputProfiles) {
    console.log("REGISTER INPUT:", input);

    const parsedAddress =
      typeof input.address === "string"
        ? JSON.parse(input.address)
        : input.address;

    const parsedServiceRadiusKm = input.serviceRadiusKm
      ? Number(input.serviceRadiusKm)
      : undefined;

    const parsedOffersHosting = String(input.offersHosting) === "true";

    const parsedIsPublicProfile = String(input.isPublicProfile) === "true";

    return this.prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      const profilePhotoUrl: string | null = input.profileImage
        ? await uploadImage(input.profileImage.buffer)
        : null;

      console.log(profilePhotoUrl);

      const userResult = await this.createUserBase.execute(
        {
          name: input.name,
          email: input.email,
          password: input.password,
          cpf: input.cpf,
          birthDate: new Date(input.birthDate),
          profilePhotoUrl,
        },

        tx,
      );
      if (userResult.isException()) {
        throw userResult.error;
      }

      const user = userResult.value;

      if (input.type === "owner") {
        const profile = await this.ownerProfile.save(
          {
            userId: user.id,
            address: parsedAddress,
            phone: input.phone,
            searchRadiusKm: parsedServiceRadiusKm,
          },

          tx,
        );

        console.log(input.profileImage);

        return { user, profile };
      }

      if (input.type === "caregiver") {
        const result = await this.caregiverProfile.save(
          {
            userId: user.id,
            address: parsedAddress,
            offersHosting: parsedOffersHosting,

            serviceRadiusKm: parsedServiceRadiusKm ?? 5,

            isPublicProfile: parsedIsPublicProfile,
          },

          tx,
        );

        if (result.isException()) {
          throw result.error;
        }

        const profile = result.value;

        console.log(profile.id);
        return { user, profile };
      }

      throw new Error("Tipo de perfil inválido");
    });
  }
}

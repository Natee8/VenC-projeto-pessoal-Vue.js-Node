import { CreateUserBaseUseCase } from "../profiles/createUserBase.usecase.js";
import { OwnerProfileFacadeUseCase } from "../profiles/ownerProfile.usecase.js";
import { CaregiverFacadeUseCase } from "../profiles/caregiverProfile.usecase.js";

import { PrismaClient } from "@prisma/client/extension";
import { Prisma } from "../../../generated/prisma/wasm.js";

import { RegisterInputProfiles } from "@packages";
import { uploadQueue } from "apps/service/src/utils/queue.js";

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

    // 🔥 FAZ O UPLOAD ANTES
    let profilePhotoUrl: string | null = null;

    console.log("UPLOAD OK:", profilePhotoUrl);

    // 🔥 AGORA sim transaction
    // ✅ correto
    return this.prisma.$transaction(async (tx: Prisma.TransactionClient) => {
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

      if (input.profileImage) {
        uploadQueue
          .add(
            "upload-profile-image",
            {
              userId: user.id,
              buffer: input.profileImage.buffer.toString("base64"),
            },
            {
              attempts: 3,
              backoff: {
                type: "exponential",
                delay: 5000,
              },
            },
          )
          .catch((err) => {
            console.error("Erro ao enfileirar upload:", err);
          });
      }

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

        // 🔥 AQUI entra a fila

        if (result.isException()) {
          throw result.error;
        }

        return { user, profile: result.value };
      }

      throw new Error("Tipo de perfil inválido");
    });
  }
}

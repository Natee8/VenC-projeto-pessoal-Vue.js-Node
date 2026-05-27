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
    const warnings: string[] = [];

    return this.prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      const userResult = await this.createUserBase.execute(
        {
          name: input.name,
          email: input.email,
          password: input.password,
          cpf: input.cpf,
          birthDate: new Date(input.birthDate),
          profilePhotoUrl: null,
        },
        tx,
      );

      if (userResult.isException()) {
        throw userResult.error;
      }

      const user = userResult.value;
      const isQueueEnabled = process.env.REDIS_ENABLED === "true";

      if (input.profileImage) {
        if (!isQueueEnabled) {
          warnings.push("Imagem não pôde ser processada no momento");
        } else {
          uploadQueue
            ?.add(
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
            .catch(() => {
              warnings.push("Erro ao enfileirar imagem");
            });
        }
      }

      if (input.type === "owner") {
        const profile = await this.ownerProfile.save(
          {
            userId: user.id,
            address: input.address,
            phone: input.phone,
            searchRadiusKm: input.serviceRadiusKm,
          },
          tx,
        );

        return { user, profile, warnings };
      }

      if (input.type === "caregiver") {
        const result = await this.caregiverProfile.save(
          {
            userId: user.id,
            address: input.address,
            offersHosting: input.offersHosting ?? false,
            serviceRadiusKm: input.serviceRadiusKm ?? 5,
            isPublicProfile: input.isPublicProfile,
          },
          tx,
        );

        if (result.isException()) {
          throw result.error;
        }

        return { user, profile: result.value, warnings };
      }

      throw new Error("Tipo de perfil inválido");
    });
  }
}

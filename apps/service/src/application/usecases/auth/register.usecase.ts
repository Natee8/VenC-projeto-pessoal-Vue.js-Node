import { CreateUserBaseUseCase } from "../profiles/createUserBase.usecase.js";
import { OwnerProfileFacadeUseCase } from "../profiles/ownerProfile.usecase.js";
import { CaregiverFacadeUseCase } from "../profiles/caregiverProfile.usecase.js";
import { PrismaClient } from "@prisma/client/extension";
import { RegisterInputProfiles } from "../../../../../../packages/src/domain/dtos/IUser.dto.js";
import { Prisma } from "../../../generated/prisma/wasm.js";

export class RegisterUseCase {
  constructor(
    private prisma: PrismaClient,
    private createUserBase: CreateUserBaseUseCase,
    private ownerProfile: OwnerProfileFacadeUseCase,
    private caregiverProfile: CaregiverFacadeUseCase,
  ) {}
  async execute(input: RegisterInputProfiles) {
    return this.prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      const user = await this.createUserBase.execute(
        {
          name: input.name,
          email: input.email,
          password: input.password,
          cpf: input.cpf,
          birthDate: input.birthDate,
          profilePhotoUrl: input.profilePhotoUrl,
        },
        tx,
      );

      if (input.type === "owner") {
        const profile = await this.ownerProfile.save(
          {
            userId: user.id,
            address: input.address,
            phone: input.phone,
            searchRadiusKm: input.searchRadiusKm,
          },
          tx,
        );

        return { user, profile };
      }

      if (input.type === "caregiver") {
        const profile = await this.caregiverProfile.save(
          {
            userId: user.id,
            address: input.address,
            offersHosting: input.offersHosting ?? false,
            serviceRadiusKm: input.serviceRadiusKm ?? 0,
            isPublicProfile: input.isPublicProfile,
          },
          tx,
        );

        return { user, profile };
      }
      console.log("REGISTER INPUT TYPE:", input.type);
      throw new Error("Tipo de perfil inválido");
    });
  }
}

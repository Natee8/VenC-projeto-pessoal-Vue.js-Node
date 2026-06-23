import { UsersRepository } from "apps/service/src/infrastructure/repositories/auth/authLogin.repository.js";

export class GetMeUseCase {
  constructor(private readonly usersRepo: UsersRepository) {}

  async execute(userId: number) {
    const user = await this.usersRepo.findWithProfilesById(userId);

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    const hasOwner = !!user.ownerProfile;
    const hasCaregiver = !!user.caregiver;

    if (hasOwner === hasCaregiver) {
      throw new Error("Estado inválido de perfil do usuário");
    }

    const role = hasOwner ? "OWNER" : "CAREGIVER";

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      profilePhotoUrl: user.profilePhotoUrl,
      role,

      profile: hasOwner ? user.ownerProfile : user.caregiver,
    };
  }
}

import { PasswordService } from "../../service/passwordComparer.js";
import { Role, UserAuth } from "@packages";
import { Email } from "@packages";
import { Either, left, right } from "../../../core/interface/IEighter.js";
import { UsersRepository } from "../../../infrastructure/repositories/auth/authLogin.repository.js";

export class AuthenticateUserUseCase {
  constructor(
    private readonly usersRepo: UsersRepository,
    private readonly passwordService: PasswordService,
  ) {}

  async execute(
    email: Email,
    password: string,
  ): Promise<Either<{ message: string }, { user: UserAuth; type: Role }>> {
    const userWithProfiles =
      await this.usersRepo.findWithProfilesByEmail(email);

    if (!userWithProfiles) {
      return left({ message: "Usuário não encontrado" });
    }

    const passwordValid = await this.passwordService.compare(
      password,
      userWithProfiles.passwordHash,
    );

    if (!passwordValid) {
      return left({ message: "Senha inválida" });
    }

    const hasOwner = !!userWithProfiles.ownerProfile;
    const hasCaregiver = !!userWithProfiles.caregiver;

    if (hasOwner === hasCaregiver) {
      return left({ message: "Estado inválido" });
    }

    const type: Role = hasOwner ? Role.OWNER : Role.CAREGIVER;

    const user = this.usersRepo["mapToEntity"](userWithProfiles);

    return right({
      user,
      type,
    });
  }
}

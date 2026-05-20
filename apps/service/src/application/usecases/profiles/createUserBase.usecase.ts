import { UserAuth } from "@packages";
import { BirthDate } from "@packages";
import { CPF } from "@packages";
import { Email } from "@packages";
import { UsersRepository } from "../../../infrastructure/repositories/auth/authLogin.repository.js";
import { PasswordService } from "../../service/passwordComparer.js";
import { IUserDTO } from "@packages";
import { Name } from "@packages";
import { UserId } from "@packages";
import { Prisma } from "../../../generated/prisma/index.js";
import {
  Either,
  left,
  right,
} from "apps/service/src/core/interface/IEighter.js";

export class CreateUserBaseUseCase {
  constructor(
    private usersRepo: UsersRepository,
    private passwordService: PasswordService,
  ) {}

  async execute(
    input: {
      name: string;
      email: string;
      password: string;
      cpf: string;
      birthDate: Date;
      profilePhotoUrl?: string | null;
    },
    tx?: Prisma.TransactionClient,
  ): Promise<Either<Error, IUserDTO>> {
    const birthDateVO = BirthDate.create(new Date(input.birthDate));
    const emailVO = Email.create(input.email);
    const cpfVO = CPF.create(input.cpf);
    const name = Name.create(input.name);
    const id = UserId.create();
    const photo = input.profilePhotoUrl ?? null;

    const existingEmail = await this.usersRepo.findByEmail(emailVO);
    if (existingEmail) {
      return left(new Error("Email já cadastrado."));
    }

    const existingCpf = await this.usersRepo.findByCpf(cpfVO);
    if (existingCpf) {
      return left(new Error("CPF já cadastrado."));
    }

    const passwordHash = await this.passwordService.hash(input.password);

    const user = new UserAuth(
      id,
      name,
      emailVO,
      passwordHash,
      true,
      photo,
      birthDateVO,
      cpfVO,
      new Date(),
      new Date(),
    );

    const savedUser = await this.usersRepo.save(user, tx);

    return right({
      id: savedUser.getId().getValue(),
      name: savedUser.getName().getValue(),
      email: savedUser.getEmail().getValue(),
      cpf: savedUser.getCpf().getValue(),
      birthDate: savedUser.getBirthDate().getValue().toISOString(),
      profilePhotoUrl: savedUser.getProfilePhoto(),
    });
  }
}

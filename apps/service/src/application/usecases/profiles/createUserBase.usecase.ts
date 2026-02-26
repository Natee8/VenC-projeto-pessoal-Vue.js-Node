import { UserAuth } from "../../../../../../packages/src/domain/entities/userAuthEntity.js";
import { BirthDate } from "../../../../../../packages/src/valuesObjects/birthDate.js";
import { CPF } from "../../../../../../packages/src/valuesObjects/cpf.js";
import { Email } from "../../../../../../packages/src/valuesObjects/email.js";
import { UsersRepository } from "../../../infrastructure/repositories/auth/authLogin.repository.js";
import { PasswordService } from "../../service/passwordComparer.js";
import { IUserDTO } from "../../../../../../packages/src/domain/dtos/IUser.dto.js";
import { Name } from "../../../../../../packages/src/valuesObjects/name.js";
import { UserId } from "../../../../../../packages/src/valuesObjects/userId.js";

export class CreateUserBaseUseCase {
  constructor(
    private usersRepo: UsersRepository,
    private passwordService: PasswordService,
  ) {}

  async execute(input: {
    name: string;
    email: string;
    password: string;
    cpf: string;
    birthDate: string;
  }): Promise<IUserDTO> {
    const birthDateVO = new BirthDate(new Date(input.birthDate));
    const emailVO = Email.create(input.email);
    const cpfVO = CPF.create(input.cpf);
    const name = Name.create(input.name);
    const id = UserId.create();

    const existingEmail = await this.usersRepo.findByEmail(emailVO);
    if (existingEmail) {
      throw new Error("Email já cadastrado.");
    }

    const existingCpf = await this.usersRepo.findByCpf(cpfVO);
    if (existingCpf) {
      throw new Error("CPF já cadastrado.");
    }

    const passwordHash = await this.passwordService.hash(input.password);

    const user = new UserAuth(
      id,
      name,
      emailVO,
      passwordHash,
      true,
      birthDateVO,
      cpfVO,
      new Date(),
      new Date(),
    );

    const savedUser = await this.usersRepo.save(user);

    return {
      id: savedUser.getId().getValue(),
      name: savedUser.getName(),
      email: savedUser.getEmail(),
      cpf: savedUser.getCpf(),
      birthDate: savedUser.getBirthDate().toISOString(),
    };
  }
}

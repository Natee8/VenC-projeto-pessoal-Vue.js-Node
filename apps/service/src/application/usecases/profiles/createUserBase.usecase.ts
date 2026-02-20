import { UserAuth } from "../../../../../../packages/src/domain/entities/userAuthEntity.js";
import { BirthDate } from "../../../../../../packages/src/valuesObjects/birthDate.js";
import { CPF } from "../../../../../../packages/src/valuesObjects/cpf.js";
import { Email } from "../../../../../../packages/src/valuesObjects/email.js";
import { UsersRepository } from "../../../infrastructure/repositories/auth/authLogin.repository.js";
import { PasswordService } from "../../service/passwordComparer.js";
import { UserDTO } from "../../../../../../packages/src/domain/dtos/IUser.dto.js";

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
  }): Promise<UserDTO> {
    const birthDateVO = new BirthDate(new Date(input.birthDate));
    const emailVO = Email.create(input.email);
    const cpfVO = CPF.create(input.cpf);

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
      null,
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
      id: savedUser.getId()?.getValue() || 0,
      email: savedUser.getEmail(),
      cpf: savedUser.getCpf(),
    };
  }
}

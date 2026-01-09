import { PasswordComparer } from "../../../../../../packages/core/domain/passwordComparer";
import { UserAuth } from "../../../../../../packages/domain/entities/userAuthEntity";
import { Email } from "../../../../../../packages/domain/valuesObjects/Email";
import { UsersRepository } from "../../../domain/repositories/authUsers.repository";

export class AuthenticateUserUseCase  {
    constructor(
        private readonly userAuthRepository: UsersRepository,
        private readonly passwordComparer: PasswordComparer,
    ) {}

    async execute(email: string, password: string): Promise<UserAuth> {
        const emailVO = Email.create(email)

        const user = await this.userAuthRepository.findByEmail(emailVO)
        if(!user) throw new Error('Credenciais Inválidas!')

        const passwordMatch = await this.passwordComparer.compare(
            password,
            user.getPasswordHash()
        )
        
        if(!passwordMatch) throw new Error('Credenciais Inválidas!')

        if(!user.isEnabled()) throw new Error('Usúario Inativo')

            return user
        }
}
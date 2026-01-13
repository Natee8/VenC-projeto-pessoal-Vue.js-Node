import { PasswordService } from '../../../../../../packages/core/domain/passwordComparer.js'
import { UserAuth } from '../../../../../../packages/domain/entities/userAuthEntity.js'
import { Either, left, right } from '../../../core/interface/IEighter.js'
import { UsersRepository } from '../../../infrastructure/repositories/auth/authLogin.repository.js'
import { Email } from '../../../../../../packages/domain/valuesObjects/Email.js'

export class AuthenticateUserUseCase {
  constructor(
    private readonly usersRepo: UsersRepository,
    private readonly passwordService: PasswordService
  ) {}

  async execute(
    email: Email,
    password: string
  ): Promise<Either<{ message: string }, UserAuth>> {
    const user = await this.usersRepo.findByEmail(email)

    if (!user) {
      return left({ message: 'Usuário não encontrado' })
    }

    const passwordValid = await this.passwordService.compare(
      password,
      user.getPasswordHash()
    )

    if (!passwordValid) {
      return left({ message: 'Senha inválida' })
    }

    return right(user)
  }
}

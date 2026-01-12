import { JwtTokenGenerator } from '../../../infrastructure/repositories/auth/tokenGenerator.js'
import { RefreshTokenRepository } from '../../../infrastructure/repositories/auth/refreshToken.repository.js'
import { UserAuth } from '../../../generated/prisma/index.js';
import { IEither } from '../../../core/interface/IEighter.js';

export class GenerateTokenUseCase {
  constructor(
    private readonly tokenGenerator: JwtTokenGenerator,
    private readonly refreshTokenRepo: RefreshTokenRepository
  ) {}

  async execute(user: UserAuth): Promise<IEither<{ message: string }, { accessToken: string; refreshToken: string }>> {
    try {
      const accessToken = this.tokenGenerator.generateAccessToken(user)
      const refreshToken = await this.refreshTokenRepo.create(user)

      return right({ accessToken, refreshToken })
    } catch (err) {
      return left({ message: 'Erro ao gerar tokens' })
    }
  }
}

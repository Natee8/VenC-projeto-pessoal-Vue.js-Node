import { RefreshTokenRepository, TokenGenerator } from '../../../../../../packages/domain/repositories/Auth.repositories.js'
import { IEither, left, right } from '../../../core/interface/IEighter.js'

export class RefreshTokenUseCase {
  constructor(
    private readonly refreshTokenRepo: RefreshTokenRepository,
    private readonly tokenGenerator: TokenGenerator
  ) {}

  async execute(refreshToken: string): Promise<IEither<{ message: string }, { accessToken: string }>> {
    const tokenRecord = await this.refreshTokenRepo.find(refreshToken)
    if (!tokenRecord) return left({ message: 'Refresh token inválido' })

    const newAccessToken = this.tokenGenerator.generateAccessToken(tokenRecord.user)
    return right({ accessToken: newAccessToken })
  }
}

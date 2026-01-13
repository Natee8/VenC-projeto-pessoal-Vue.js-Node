import { IRefreshTokenRepository, TokenGenerator } from '../../../../../../packages/domain/repositories/Auth.repositories.js'
import { Either, left, right } from '../../../core/interface/IEighter.js'

export class RefreshTokenUseCase {
  constructor(
    private readonly refreshTokenRepo: IRefreshTokenRepository,
    private readonly tokenGenerator: TokenGenerator
  ) {}

  async execute(refreshToken: string): Promise<Either<{ message: string }, { accessToken: string }>> {
    const tokenRecord = await this.refreshTokenRepo.find(refreshToken)
    if (!tokenRecord) return left({ message: 'Refresh token inválido' })

    const newAccessToken = await this.tokenGenerator.generateAccessToken(
      tokenRecord.userId
    )
    return right({ accessToken: newAccessToken })
  }
}

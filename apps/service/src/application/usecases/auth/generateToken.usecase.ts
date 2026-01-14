import { RefreshTokenEntity } from "../../../../../../packages/src/domain/entities/refreshTokenEntity.js";
import { UserAuth } from "../../../../../../packages/src/domain/entities/userAuthEntity.js";
import { IRefreshTokenRepository, TokenGenerator } from "../../../../../../packages/src/domain/repositories/Auth.repositories.js";
import { Either, left, right } from "../../../core/interface/IEighter.js";

export class GenerateTokenUseCase {
    constructor(
    private readonly tokenGenerator: TokenGenerator,
    private readonly refreshTokenRepo: IRefreshTokenRepository
  ) {}

 async execute(
  user: UserAuth
): Promise<Either<{ message: string }, { accessToken: string; refreshToken: string }>> {
  try {
    const accessToken = await this.tokenGenerator.generateAccessToken(
        user.getId()
    )
    const refreshToken = new RefreshTokenEntity({
        token: await this.tokenGenerator.generateRefreshToken(user.getId()),
        userId: user.getId(),
        createdAt: new Date(),
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
      })

      await this.refreshTokenRepo.save(refreshToken)

    return right({
      accessToken,
      refreshToken: refreshToken.getToken()
    })
  } catch  {
    return left({ message: 'Erro ao gerar tokens' })
  }
}

}

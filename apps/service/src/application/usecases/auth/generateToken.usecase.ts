import { UserAuth } from "../../../../../../packages/src/domain/entities/userAuthEntity.js";
import { Either, left, right } from "../../../core/interface/IEighter.js";
import { RefreshTokenRepository } from "../../../infrastructure/repositories/auth/refreshToken.repository.js";
import { JwtTokenGenerator } from "../../../infrastructure/repositories/auth/tokenGenerator.js";

export class GenerateTokenUseCase {
  constructor(
    private readonly tokenGenerator: JwtTokenGenerator,
    private readonly refreshTokenRepo: RefreshTokenRepository
  ) {}

 async execute(
  user: UserAuth
): Promise<Either<{ message: string }, { accessToken: string; refreshToken: string }>> {
  try {
    const accessToken = await this.tokenGenerator.generateAccessToken(
        user.getId()
    )
    const refreshToken = await this.refreshTokenRepo.create(user)

    return right({
      accessToken,
      refreshToken: refreshToken.getToken()
    })
  } catch (err) {
    return left({ message: 'Erro ao gerar tokens', err })
  }
}

}

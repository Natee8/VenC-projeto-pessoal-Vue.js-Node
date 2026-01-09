import { IEither, left, right } from "../../../core/interface/IEighter"
import { RefreshTokenRepository, TokenGenerator } from "../../../../../../packages/domain/repositories/Auth.repositories"
import { IRefreshResponse } from "../../../domain/dtos/auth.dto"

export class RefreshTokenUseCase {
  constructor(
    private readonly refreshTokenRepository: RefreshTokenRepository,
    private readonly tokenGenerator: TokenGenerator
  ) {}

  async execute(refreshToken: string): Promise<IEither<{ message: string }, IRefreshResponse>> {
    try {
      const storedToken = await this.refreshTokenRepository.find(refreshToken)

      if (!storedToken) return left({ message: "Token inválido" })
      if (storedToken.isExpired()) return left({ message: "Token expirado" })

      const user = storedToken.getUser()
      const accessToken = await this.tokenGenerator.generateAccessToken(user)
      const newRefreshToken = await this.tokenGenerator.generateRefreshToken(user)

      const response: IRefreshResponse = {
        accessToken,
        refreshToken: newRefreshToken.token 
      }

      return right(response)
    } catch (err) {
      return left({ message: (err as Error).message })
    }
  }
}

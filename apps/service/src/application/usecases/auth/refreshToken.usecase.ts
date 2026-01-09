import { RefreshTokenRepository, TokenGenerator } from "../../../../../../packages/domain/repositories/Auth.repositories"

export class RefreshTokenUseCase {
  constructor(
    private readonly refreshTokenRepository: RefreshTokenRepository,
    private readonly tokenGenerator: TokenGenerator
  ) {}

  async execute(refreshToken: string): Promise<{ accessToken: string }> {
    const storedToken = await this.refreshTokenRepository.find(refreshToken)
    
    if (!storedToken) {
      throw new Error('Token inválido') 
    }

    if (storedToken.isExpired()) {
      throw new Error('Token expirado') 
    }

    const user = storedToken.getUser()
    const accessToken = await this.tokenGenerator.generateAccessToken(user)

    return { accessToken }
  }
}
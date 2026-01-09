export class RefreshTokenUseCase {
  constructor(
    private readonly refreshTokenRepository: RefreshTokenRepository,
    private readonly tokenGenerator: TokenGenerator
  ) {}

  async execute(refreshToken: string): Promise<{ accessToken: string }> {
    const storedToken = await this.refreshTokenRepository.find(refreshToken)
    if (!storedToken) throw new Error('Refresh token inválido')

    if (storedToken.isExpired()) {
      throw new Error('Refresh token expirado')
    }

    const accessToken = this.tokenGenerator.generateAccessToken(
      storedToken.getUser()
    )

    return { accessToken }
  }
}

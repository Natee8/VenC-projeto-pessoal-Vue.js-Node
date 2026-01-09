import { UserAuth } from "../../../../../../packages/domain/entities/userAuthEntity";
import { RefreshTokenRepository, TokenGenerator } from "../../../../../../packages/domain/repositories/Auth.repositories";
import { RefreshToken } from "../../../../../../packages/domain/dtos/IAuth.dto";

export class GenerateTokenUseCase { 
  constructor(
    private readonly tokenGenerator: TokenGenerator,
    private readonly refreshTokenRepository: RefreshTokenRepository
  ) {}
    
  async execute(user: UserAuth): Promise<{ accessToken: string; refreshToken: string }> {
    // gera o access token normalmente
    const accessToken = await this.tokenGenerator.generateAccessToken(user);

    // gera o refresh token e retorna como objeto RefreshToken
    const refreshToken: RefreshToken = await this.tokenGenerator.generateRefreshToken(user);

    // salva no repositório
    await this.refreshTokenRepository.save(refreshToken);

    // retorna os dois tokens
    return { accessToken, refreshToken: refreshToken.token };
  }
}

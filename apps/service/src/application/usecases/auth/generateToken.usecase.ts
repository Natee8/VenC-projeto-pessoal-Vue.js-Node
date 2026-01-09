import { UserAuth } from "../../../../../../packages/domain/entities/userAuthEntity";
import { RefreshTokenRepository, TokenGenerator } from "../../../../../../packages/domain/repositories/Auth.repositories";
import { RefreshToken } from "../../../../../../packages/domain/dtos/IAuth.dto";

export class GenerateTokenUseCase { 
  constructor(
    private readonly tokenGenerator: TokenGenerator,
    private readonly refreshTokenRepository: RefreshTokenRepository
  ) {}
    
  async execute(user: UserAuth): Promise<{ accessToken: string; refreshToken: string }> {
    const accessToken = await this.tokenGenerator.generateAccessToken(user);

    const refreshToken: RefreshToken = await this.tokenGenerator.generateRefreshToken(user);

    await this.refreshTokenRepository.save(refreshToken);

    return { accessToken, refreshToken: refreshToken.token };
  }
}

import { RefreshTokenEntity, Role } from "@packages";
import { UserAuth } from "@packages";
import { IRefreshTokenRepository, TokenGenerator } from "@packages";
import { Either, left, right } from "../../../core/interface/IEighter.js";

export class GenerateTokenUseCase {
  constructor(
    private readonly tokenGenerator: TokenGenerator,
    private readonly refreshTokenRepo: IRefreshTokenRepository,
  ) {}

  async execute(input: {
    user: UserAuth;
    type: Role;
  }): Promise<
    Either<{ message: string }, { accessToken: string; refreshToken: string }>
  > {
    try {
      const { user } = input;
      const accessToken = await this.tokenGenerator.generateAccessToken(
        user.getId(),
      );
      const refreshToken = new RefreshTokenEntity({
        token: await this.tokenGenerator.generateRefreshToken(user.getId()),
        userId: user.getId(),
        createdAt: new Date(),
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      });

      await this.refreshTokenRepo.save(refreshToken);

      return right({
        accessToken,
        refreshToken: refreshToken.getToken(),
      });
    } catch (err: unknown) {
      console.error("Erro ao gerar tokens:", err);
      return left({ message: "Erro ao gerar tokens" });
    }
  }
}

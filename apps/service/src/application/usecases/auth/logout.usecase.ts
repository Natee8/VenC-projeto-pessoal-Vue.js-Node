import { IRefreshTokenRepository } from "@packages";
import { UserId } from "@packages";

export class LogoutUseCase {
  constructor(
    private readonly refreshTokenRepository: IRefreshTokenRepository,
  ) {}

  /**
   * @param userId - ID do usuário que vai deslogar
   */
  async execute(userId: UserId): Promise<void> {
    // Pega todos os refresh tokens do usuário
    const tokens = await this.refreshTokenRepository.findByUserId(userId);

    // Revoga todos os tokens
    await Promise.all(
      tokens.map((token) =>
        this.refreshTokenRepository.revoke(token.getToken()),
      ),
    );
  }
}

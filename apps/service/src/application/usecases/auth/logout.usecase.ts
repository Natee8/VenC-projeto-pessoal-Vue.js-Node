import { IRefreshTokenRepository } from "@packages";
import { UserId } from "@packages";

export class LogoutUseCase {
  constructor(
    private readonly refreshTokenRepository: IRefreshTokenRepository,
  ) {}

  /**
   * @param userId
   */
  async execute(userId: UserId): Promise<void> {
    const tokens = await this.refreshTokenRepository.findByUserId(userId);

    await Promise.all(
      tokens.map((token) =>
        this.refreshTokenRepository.revoke(token.getToken()),
      ),
    );
  }
}

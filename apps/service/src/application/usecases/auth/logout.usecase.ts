import { IRefreshTokenRepository } from "@packages";
import { UserId } from "@packages";

export class LogoutUseCase {
  constructor(
    private readonly refreshTokenRepository: IRefreshTokenRepository,
  ) {}

  /**
   * @param userId
   * @param refreshToken
   */
  async execute(userId: UserId, refreshToken?: string): Promise<void> {
    if (refreshToken) {
      const storedToken = await this.refreshTokenRepository.find(refreshToken);

      if (!storedToken) {
        throw new Error("Refresh token não encontrado");
      }

      if (storedToken.userId.getValue() !== userId.getValue()) {
        throw new Error("Token não pertence ao usuário");
      }

      await this.refreshTokenRepository.revoke(refreshToken);
      return;
    }

    const tokens = await this.refreshTokenRepository.findByUserId(userId);

    await Promise.all(
      tokens.map((token) =>
        this.refreshTokenRepository.revoke(token.getToken()),
      ),
    );
  }
}

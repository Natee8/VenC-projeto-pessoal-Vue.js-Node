import { IRefreshTokenRepository } from "../../../../../../packages/src/domain/repositories/Auth.repositories.js";
import { UserId } from "../../../../../../packages/src/valuesObjects/userId.js";

export class LogoutUseCase {
  constructor(private readonly refreshTokenRepository: IRefreshTokenRepository) {}

  /**
   * @param userId - ID do usuário que vai deslogar
   */
  async execute(userId: UserId): Promise<void> {
    // Pega todos os refresh tokens do usuário
    const tokens = await this.refreshTokenRepository.findByUserId(userId);

    // Revoga todos os tokens
    await Promise.all(
      tokens.map(token => this.refreshTokenRepository.revoke(token.token))
    );
  }
}

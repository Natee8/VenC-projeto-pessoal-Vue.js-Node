import { RefreshTokenRepository } from "../../../../../../packages/domain/repositories/Auth.repositories";

export class LogoutUseCase {
  constructor(private readonly refreshTokenRepository: RefreshTokenRepository) {}

  /**
   * @param userId - ID do usuário que vai deslogar
   */
  async execute(userId: number): Promise<void> {
    // Pega todos os refresh tokens do usuário
    const tokens = await this.refreshTokenRepository.findByUserId(userId);

    // Revoga todos os tokens
    await Promise.all(
      tokens.map(token => this.refreshTokenRepository.revoke(token.token))
    );
  }
}

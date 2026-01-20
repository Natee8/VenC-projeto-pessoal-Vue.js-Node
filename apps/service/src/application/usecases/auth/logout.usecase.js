export class LogoutUseCase {
    refreshTokenRepository;
    constructor(refreshTokenRepository) {
        this.refreshTokenRepository = refreshTokenRepository;
    }
    /**
     * @param userId - ID do usuário que vai deslogar
     */
    async execute(userId) {
        // Pega todos os refresh tokens do usuário
        const tokens = await this.refreshTokenRepository.findByUserId(userId);
        // Revoga todos os tokens
        await Promise.all(tokens.map(token => this.refreshTokenRepository.revoke(token.getToken())));
    }
}

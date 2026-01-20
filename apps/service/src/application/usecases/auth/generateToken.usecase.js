import { RefreshTokenEntity } from "../../../../../../packages/src/domain/entities/refreshTokenEntity.js";
import { left, right } from "../../../core/interface/IEighter.js";
export class GenerateTokenUseCase {
    tokenGenerator;
    refreshTokenRepo;
    constructor(tokenGenerator, refreshTokenRepo) {
        this.tokenGenerator = tokenGenerator;
        this.refreshTokenRepo = refreshTokenRepo;
    }
    async execute(user) {
        try {
            const accessToken = await this.tokenGenerator.generateAccessToken(user.getId());
            const refreshToken = new RefreshTokenEntity({
                token: await this.tokenGenerator.generateRefreshToken(user.getId()),
                userId: user.getId(),
                createdAt: new Date(),
                expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
            });
            await this.refreshTokenRepo.save(refreshToken);
            return right({
                accessToken,
                refreshToken: refreshToken.getToken()
            });
        }
        catch {
            return left({ message: 'Erro ao gerar tokens' });
        }
    }
}

import { left, right } from "../../../core/interface/IEighter.js";
export class RefreshTokenUseCase {
    refreshTokenRepo;
    tokenGenerator;
    constructor(refreshTokenRepo, tokenGenerator) {
        this.refreshTokenRepo = refreshTokenRepo;
        this.tokenGenerator = tokenGenerator;
    }
    async execute(refreshToken) {
        const tokenRecord = await this.refreshTokenRepo.find(refreshToken);
        if (!tokenRecord)
            return left({ message: 'Refresh token inválido' });
        const newAccessToken = await this.tokenGenerator.generateAccessToken(tokenRecord.userId);
        return right({ accessToken: newAccessToken });
    }
}

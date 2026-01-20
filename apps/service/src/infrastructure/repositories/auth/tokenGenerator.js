import jwt from 'jsonwebtoken';
export class JwtTokenGenerator {
    async generateAccessToken(userId) {
        return jwt.sign({ sub: userId.getValue() }, process.env.JWT_SECRET, { expiresIn: '15m' });
    }
    async generateRefreshToken(userId) {
        return jwt.sign({ sub: userId.getValue() }, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });
    }
}

import jwt from 'jsonwebtoken'
import { UserId } from '../../../../../../packages/src/valuesObjects/userId.js'
import { TokenGenerator } from '../../../../../../packages/src/domain/repositories/Auth.repositories.js'

export class JwtTokenGenerator implements TokenGenerator {
  async generateAccessToken(userId: UserId): Promise<string> {
    return jwt.sign(
      { sub: userId.getValue() },
      process.env.JWT_SECRET!,
      { expiresIn: '15m' }
    )
  }

  async generateRefreshToken(userId: UserId): Promise<string> {
    return jwt.sign(
      { sub: userId.getValue() },
      process.env.JWT_REFRESH_SECRET!,  
      { expiresIn: '7d' }
    )
  }
}

import jwt from 'jsonwebtoken'
import { TokenGenerator } from '../../../../../../packages/domain/repositories/Auth.repositories'
import { UserAuth } from '../../../../../../packages/domain/entities/userAuthEntity'
import { RefreshToken } from '../../../../../../packages/domain/dtos/IAuth.dto'

export class JwtTokenGenerator implements TokenGenerator {
  async generateAccessToken(user: UserAuth): Promise<string> {
    return jwt.sign(
      { sub: user.id },
      process.env.JWT_SECRET!,
      { expiresIn: '15m' }
    )
  }

  async generateRefreshToken(user: UserAuth): Promise<RefreshToken> {
    const token = jwt.sign(
      { sub: user.id },
      process.env.JWT_REFRESH_SECRET!,
      { expiresIn: '7d' }
    )

    return {
      token,
      userId: user.id,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    }
  }
}

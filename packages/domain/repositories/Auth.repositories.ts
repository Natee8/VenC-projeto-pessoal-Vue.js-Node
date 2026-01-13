import { RefreshToken } from '../dtos/IAuth.dto'
import { RefreshTokenEntity } from '../entities/refreshTokenEntity'
import { UserAuth } from '../entities/userAuthEntity'
import { Email } from '../valuesObjects/Email'
import { UserId } from '../valuesObjects/userID'

export interface LoginAuth {
  findById(id: string): Promise<UserAuth | null>
  findByEmail(email: Email): Promise<UserAuth | null>
  save(user: UserAuth): Promise<void>
}



export interface IRefreshTokenRepository {
  save(token: RefreshTokenEntity): Promise<void>
  find(token: string): Promise<RefreshTokenEntity | null>
  revoke(token: string): Promise<void>
  findByUserId(userId: UserId): Promise<RefreshTokenEntity[]>
}


export interface TokenGenerator {
  generateAccessToken(userId: UserId): Promise<string>
  generateRefreshToken(userId: UserId): Promise<string>
}


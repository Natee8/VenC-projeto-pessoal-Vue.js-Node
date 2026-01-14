import { Email } from '../../valuesObjects/email.js'
import { UserId } from '../../valuesObjects/userId.js'
import { RefreshTokenEntity } from '../entities/refreshTokenEntity.js'
import { UserAuth } from '../entities/userAuthEntity.js'

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


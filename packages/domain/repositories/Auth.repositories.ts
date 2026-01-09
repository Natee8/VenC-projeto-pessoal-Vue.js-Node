import { RefreshToken } from '../dtos/IAuth.dto'
import { UserAuth } from '../entities/userAuthEntity'
import { Email } from '../valuesObjects/Email'

export interface LoginAuth {
  findById(id: string): Promise<UserAuth | null>
  findByEmail(email: Email): Promise<UserAuth | null>
  save(user: UserAuth): Promise<void>
}


export interface RefreshTokenRepository {
  save(token: RefreshToken): Promise<void>
  find(token: string): Promise<RefreshToken | null>
  revoke(token: string): Promise<void>
  findByUserId(userId: number): Promise<RefreshToken[]> 
}

export interface TokenGenerator {
  generateAccessToken(user: UserAuth): Promise<string>
  generateRefreshToken(user: UserAuth): Promise<RefreshToken> 
}


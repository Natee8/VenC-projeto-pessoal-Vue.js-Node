import { IRefreshToken } from "../dtos/IAuth.dto"
import { UserId } from "../valuesObjects/userID"

export class RefreshTokenEntity  {
  token: string
  userId: UserId
  createdAt: Date
  expiresAt: Date
  
  constructor(data: IRefreshToken) {
    this.token = data.token
    this.userId = data.userId
    this.createdAt = data.createdAt
    this.expiresAt = data.expiresAt
  }

    getUserId(): number {
    return this.userId.getValue();
  }

  isExpired(): boolean {
    return new Date() > this.expiresAt
  }

   getToken(): string {
    return this.token
  }
}
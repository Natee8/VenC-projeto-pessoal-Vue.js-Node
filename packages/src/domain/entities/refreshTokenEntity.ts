import { UserId } from "../../valuesObjects/userId.js"
import { IRefreshToken } from "../dtos/IAuth.dto.js"

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

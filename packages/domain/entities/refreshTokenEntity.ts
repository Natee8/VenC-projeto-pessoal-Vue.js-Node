import { RefreshToken } from "../../../apps/service/src/generated/prisma"
import { IRefreshToken } from "../dtos/IAuth.dto"

export class RefreshTokenEntity implements RefreshToken {
  token: string
  userId: number
  createdAt: Date
  expiresAt: Date

  constructor(data: IRefreshToken) {
    this.token = data.token
    this.userId = data.userId
    this.createdAt = data.createdAt
    this.expiresAt = data.expiresAt
  }

  isExpired(): boolean {
    return new Date() > this.expiresAt
  }
}
import { UserId } from "../../valuesObjects/userId.js"
import { UserAuth } from "../entities/userAuthEntity.js"

export interface IRefreshToken {
  token: string
  userId: UserId
  createdAt: Date
  expiresAt: Date
}

export interface RefreshToken {
  token: string
  userId: UserId
  createdAt: Date
  expiresAt: Date
  revokedAt?: Date

  getUser(): UserAuth
  isExpired(): boolean
}

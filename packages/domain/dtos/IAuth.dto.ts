import { UserAuth } from "../entities/userAuthEntity"

export interface RefreshToken {
  token: string
  userId: string
  createdAt: Date
  expiresAt: Date
  revokedAt?: Date
  getUser(): UserAuth
  isExpired(): boolean
}
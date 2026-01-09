import { UserAuth } from "../entities/userAuthEntity"

export interface IRefreshToken {
  token: string
  userId: number
  createdAt: Date
  expiresAt: Date
}

export interface RefreshToken {
  token: string
  userId: number
  createdAt: Date
  expiresAt: Date
  revokedAt?: Date
  getUser(): UserAuth
  isExpired(): boolean
}
import { UserId } from "../../valuesObjects/userId.js"
import { IRefreshToken } from "../dtos/IAuth.dto.js"

export class RefreshTokenEntity {
  private props: IRefreshToken

  constructor(props: IRefreshToken) {
    this.props = props
  }

  getToken(): string {
    return this.props.token
  }

  getUserId(): number {
    return this.props.userId.getValue()
  }

  get userId(): UserId {
    return this.props.userId
  }

  get createdAt(): Date {
    return this.props.createdAt
  }

  get expiresAt(): Date {
    return this.props.expiresAt
  }

  isExpired(): boolean {
    return new Date() > this.props.expiresAt
  }
}

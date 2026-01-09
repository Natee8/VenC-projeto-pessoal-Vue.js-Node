import { BirthDate } from '../valuesObjects/birthDate'
import { UserId } from '../valuesObjects/userID'

export class UserProfile {
  constructor(
    public readonly userId: UserId,
    private name: string,
    private birthDate?: BirthDate,
    private imgUrl?: string,
    public readonly createdAt?: Date,
    private updatedAt?: Date
  ) {}

  getName() {
    return this.name
  }

  getBirthDate() {
    return this.birthDate?.getValue()
  }

  getImgUrl() {
    return this.imgUrl
  }

  updateAvatar(url: string) {
    this.imgUrl = url
    this.touch()
  }

  private touch() {
    this.updatedAt = new Date()
  }
}

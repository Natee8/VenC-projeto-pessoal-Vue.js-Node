import { Email } from "../valuesObjects/Email"
import { UserId } from "../valuesObjects/userID"

export class UserAuth {
  constructor(
    public readonly id: UserId,
    private email: Email,
    private passwordHash: string,
    private isActive: boolean,
    public readonly createdAt: Date,
    private updatedAt: Date
  ) {}

  changePassword(newHash: string) {
    if (!newHash) throw new Error('Senha inválida')
    this.passwordHash = newHash
    this.touch()
  }

  getPasswordHash(): string {
    return this.passwordHash
  }

  deactivate() {
    if (!this.isActive) throw new Error('Usuário já inativo')
    this.isActive = false
    this.touch()
  }

  isEnabled() {
    return this.isActive
  }

  getEmail() {
    return this.email.value
  }
  
    getId(): string {
    return this.id.toString()
    }


  private touch() {
    this.updatedAt = new Date()
  }
}

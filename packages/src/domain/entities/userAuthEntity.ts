import { Email } from "../../valuesObjects/email.js"
import { UserId } from "../../valuesObjects/userId.js"

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
  
    getId(): UserId {
    return this.id
    }


  private touch() {
    this.updatedAt = new Date()
  }
}

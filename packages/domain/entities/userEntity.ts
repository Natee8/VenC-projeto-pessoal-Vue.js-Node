import { Email } from "../valuesObjects/Email";
import { Rating } from "../valuesObjects/Rating";

export type UserRole = 'OWNER' | 'CAREGIVER';

export class Users {
  constructor(
    public readonly id: string,
    private name: string,
    private email: Email,
    private passwordHash: string,
    private role: UserRole,
    private rating: Rating,
    private isActive: boolean,
    public readonly createdAt: Date,
    private updatedAt: Date
  ) {}

  getName() {
    return this.name;
  }

  getUpdatedAt() {
    return this.updatedAt;
  }

  changePassword(newPasswordHash: string) {
    if (!newPasswordHash) {
      throw new Error('Senha inválida');
    }

    this.passwordHash = newPasswordHash;
    this.updatedAt = new Date();
  }

  getEmail() {
    return this.email.value;
  }

  getRole() {
    return this.role;
  }

  getRating() {
    return this.rating.value;
  }

  isEnabled() {
    return this.isActive;
  }

  deactivate() {
    if (!this.isActive) {
      throw new Error('Esse usúario está inativo!');
    }
    this.isActive = false;
    this.updatedAt = new Date();
  }
}

import { UserRole } from "../../types/userType";
import { Email } from "../valuesObjects/Email";
import { Rating } from "../valuesObjects/Rating";

export class Users {
  constructor(
    public readonly id: string,
    private name: string,
    private email: Email,
    private passwordHash: string,
    private address: Address,
    private role: UserRole,
    private ImgUrl: string,
    private isActive: boolean,
    private birthDate: BirthDate,
    public readonly createdAt: Date,
    private updatedAt: Date
  ) {}

  getName() {
    return this.name;
  }

  getImgUrl() {
    return this.ImgUrl;
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

    getBirthDate() {
    return this.birthDate.getValue();
  }

  getRole() {
    return this.role;
  }

  isEnabled() {
    return this.isActive;
  }

    getAddress() {
    return this.address;
  }

  deactivate() {
    if (!this.isActive) {
      throw new Error('Esse usúario está inativo!');
    }
    this.isActive = false;
    this.updatedAt = new Date();
  }
}

import { BirthDate } from "../../valuesObjects/birthDate.js";
import { CPF } from "../../valuesObjects/cpf.js";
import { Email } from "../../valuesObjects/email.js";
import { Name } from "../../valuesObjects/name.js";
import { UserId } from "../../valuesObjects/userId.js";

export class UserAuth {
  constructor(
    public readonly id: UserId,
    private name: Name,
    private email: Email,
    private passwordHash: string,
    private isActive: boolean,
    private profilePhotoUrl: string | null,
    private birthDate: BirthDate,
    private cpf: CPF,
    public readonly createdAt: Date,
    private updatedAt: Date,
  ) {}

  changePassword(newHash: string) {
    if (!newHash) throw new Error("Senha inválida");
    this.passwordHash = newHash;
    this.touch();
  }

  getPasswordHash(): string {
    return this.passwordHash;
  }

  getName(): Name {
    return this.name;
  }

  changeProfilePhoto(url: string) {
    if (!url) throw new Error("Foto inválida");
    this.profilePhotoUrl = url;
    this.touch();
  }

  getProfilePhoto(): string | null {
    return this.profilePhotoUrl;
  }

  deactivate() {
    if (!this.isActive) throw new Error("Usuário já inativo");
    this.isActive = false;
    this.touch();
  }

  isEnabled() {
    return this.isActive;
  }

  getBirthDate(): Date {
    return this.birthDate.getValue();
  }

  getCpf(): string {
    return this.cpf.getValue();
  }

  getEmail() {
    return this.email.value;
  }

  getId(): UserId {
    return this.id;
  }

  private touch() {
    this.updatedAt = new Date();
  }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuth = void 0;
class UserAuth {
    id;
    name;
    email;
    passwordHash;
    isActive;
    profilePhotoUrl;
    birthDate;
    cpf;
    createdAt;
    updatedAt;
    constructor(id, name, email, passwordHash, isActive, profilePhotoUrl, birthDate, cpf, createdAt, updatedAt) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.passwordHash = passwordHash;
        this.isActive = isActive;
        this.profilePhotoUrl = profilePhotoUrl;
        this.birthDate = birthDate;
        this.cpf = cpf;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    changePassword(newHash) {
        if (!newHash)
            throw new Error("Senha inválida");
        this.passwordHash = newHash;
        this.touch();
    }
    getPasswordHash() {
        return this.passwordHash;
    }
    getName() {
        return this.name;
    }
    changeProfilePhoto(url) {
        if (!url)
            throw new Error("Foto inválida");
        this.profilePhotoUrl = url;
        this.touch();
    }
    getProfilePhoto() {
        return this.profilePhotoUrl;
    }
    deactivate() {
        if (!this.isActive)
            throw new Error("Usuário já inativo");
        this.isActive = false;
        this.touch();
    }
    isEnabled() {
        return this.isActive;
    }
    getBirthDate() {
        return this.birthDate;
    }
    getCpf() {
        return this.cpf;
    }
    getEmail() {
        return this.email;
    }
    getId() {
        return this.id;
    }
    touch() {
        this.updatedAt = new Date();
    }
}
exports.UserAuth = UserAuth;

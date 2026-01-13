export class UserAuth {
    id;
    email;
    passwordHash;
    isActive;
    createdAt;
    updatedAt;
    constructor(id, email, passwordHash, isActive, createdAt, updatedAt) {
        this.id = id;
        this.email = email;
        this.passwordHash = passwordHash;
        this.isActive = isActive;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    changePassword(newHash) {
        if (!newHash)
            throw new Error('Senha inválida');
        this.passwordHash = newHash;
        this.touch();
    }
    getPasswordHash() {
        return this.passwordHash;
    }
    deactivate() {
        if (!this.isActive)
            throw new Error('Usuário já inativo');
        this.isActive = false;
        this.touch();
    }
    isEnabled() {
        return this.isActive;
    }
    getEmail() {
        return this.email.value;
    }
    getId() {
        return this.id;
    }
    touch() {
        this.updatedAt = new Date();
    }
}

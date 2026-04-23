export class UserAuth {
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
        // enforce invariant: profile photo string must not be null/undefined (empty is allowed)
        if (profilePhotoUrl === null || profilePhotoUrl === undefined) {
            throw new Error("URL da foto de perfil inválida");
        }
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
        return this.birthDate.getValue();
    }
    getCpf() {
        return this.cpf.getValue();
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

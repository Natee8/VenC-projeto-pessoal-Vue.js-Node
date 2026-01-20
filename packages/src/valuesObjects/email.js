export class Email {
    value;
    constructor(value) {
        this.value = value;
    }
    static create(email) {
        if (!email) {
            throw new Error('Email é obrigatório');
        }
        const normalized = email.trim().toLowerCase();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(normalized)) {
            throw new Error('Email inválido');
        }
        return new Email(normalized);
    }
}

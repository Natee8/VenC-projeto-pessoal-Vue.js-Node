export class Email {
  private constructor(public readonly value: string) {}

  static create(email: string): Email {
    if (!email) {
      throw new Error('Email é obrigatório');
    }

    const normalized = email.trim().toLowerCase();

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(normalized)) {
      throw new Error('Email inválido');
    }

    return new Email(normalized);
  }
}

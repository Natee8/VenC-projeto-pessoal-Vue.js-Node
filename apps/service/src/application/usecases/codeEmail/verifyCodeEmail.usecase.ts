import { VerificationCodeRepository } from "@packages";

export class VerifyResetPasswordCodeUseCase {
  constructor(private repo: VerificationCodeRepository) {}

  async execute({
    email,
    code,
  }: {
    email: string;
    code: string;
  }): Promise<void> {
    const record = await this.repo.findByEmailAndCode(email, code);

    if (!record) {
      throw new Error("Código inválido");
    }

    if (this.isExpired(record.expiresAt)) {
      throw new Error("Código expirado");
    }

    await this.repo.delete(record.id);
  }

  private isExpired(expiresAt: Date): boolean {
    return expiresAt.getTime() < Date.now();
  }
}

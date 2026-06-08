import { VerificationCodeRepository } from "@packages";
import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET || "dev-secret";

export class VerifyResetPasswordCodeUseCase {
  constructor(private repo: VerificationCodeRepository) {}

  async execute({
    email,
    code,
  }: {
    email: string;
    code: string;
  }): Promise<{ resetToken: string }> {
    const record = await this.repo.findByEmailAndCode(email, code);

    if (!record) {
      throw new Error("Código inválido");
    }

    if (this.isExpired(record.expiresAt)) {
      throw new Error("Código expirado");
    }

    await this.repo.delete(record.id);

    const resetToken = jwt.sign(
      {
        email,
        purpose: "reset-password",
      },
      secret,
      { expiresIn: "10m" },
    );

    return { resetToken };
  }

  private isExpired(expiresAt: Date): boolean {
    return expiresAt.getTime() < Date.now();
  }
}

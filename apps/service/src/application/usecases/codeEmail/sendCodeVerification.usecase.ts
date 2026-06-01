import { VerificationCodeRepository } from "@packages";
import { EmailService } from "apps/service/src/core/interface/IEmail.js";
import { sendCodeEmail } from "apps/service/src/infrastructure/templates/sendCode.js";

export class SendResetPasswordCodeUseCase {
  constructor(
    private repo: VerificationCodeRepository,
    private emailService: EmailService,
  ) {}

  async execute(email: string): Promise<void> {
    const code = this.generateCode();

    await this.repo.save({
      email,
      code,
      expiresAt: this.getExpiration(),
    });

    const html = sendCodeEmail({ code });

    await this.emailService.send({
      to: email,
      subject: "Recuperação de senha",
      html,
    });
  }

  private generateCode(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  private getExpiration(): Date {
    return new Date(Date.now() + 10 * 60 * 1000); // 10 minutos
  }
}

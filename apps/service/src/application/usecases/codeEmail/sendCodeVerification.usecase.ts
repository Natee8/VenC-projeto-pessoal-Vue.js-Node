import { Email, VerificationCodeRepository } from "@packages";
import { EmailService } from "apps/service/src/domain/dtos/email.sto.js";
import { UsersRepository } from "apps/service/src/infrastructure/repositories/auth/authLogin.repository.js";
import { sendCodeEmail } from "apps/service/src/infrastructure/templates/sendCode.js";
import { signResetToken } from "apps/service/src/utils/jwt.js";

export class SendResetPasswordCodeUseCase {
  constructor(
    private repo: VerificationCodeRepository,
    private emailService: EmailService,
    private userRepository: UsersRepository,
  ) {}

  async execute(email: Email): Promise<void> {
    const emailValue = email.getValue();

    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      return;
    }

    const code = this.generateCode();

    await this.repo.deleteByEmail(emailValue);

    await this.repo.save({
      email: emailValue,
      code,
      expiresAt: this.getExpiration(),
    });

    const token = signResetToken({ email: emailValue, code }, "10m");

    const userName = user.getName().getValue();

    const html = sendCodeEmail({ code, token, userName });

    await this.emailService.send({
      to: emailValue,
      subject: "Recuperação de senha",
      html,
    });
  }

  private generateCode(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  private getExpiration(): Date {
    return new Date(Date.now() + 10 * 60 * 1000);
  }
}

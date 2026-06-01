import nodemailer, { Transporter } from "nodemailer";
import { EmailService, SendEmailDTO } from "../../domain/dtos/email.sto.js";

export class NodemailerEmailService implements EmailService {
  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "localhost",
      port: 1025,
      secure: false,
    });
  }

  async send({ to, subject, html }: SendEmailDTO): Promise<void> {
    await this.transporter.sendMail({
      from: '"Vencá" <no-reply@venca.com>',
      to,
      subject,
      html,
    });
  }
}

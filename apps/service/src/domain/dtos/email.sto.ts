//interfaces para serviço de email

export interface SendEmailDTO {
  to: string;
  subject: string;
  html: string;
}

export interface EmailService {
  send(data: SendEmailDTO): Promise<void>;
}

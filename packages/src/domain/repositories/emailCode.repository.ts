export interface VerificationCodeRepository {
  save(data: { email: string; code: string; expiresAt: Date }): Promise<void>;

  findValidCode(email: string, code: string): Promise<boolean>;

  deleteByEmail(email: string): Promise<void>;
}

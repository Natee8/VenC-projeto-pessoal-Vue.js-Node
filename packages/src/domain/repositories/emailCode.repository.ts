export interface VerificationCodeRepository {
  save(data: { email: string; code: string; expiresAt: Date }): Promise<void>;

  findByEmailAndCode(
    email: string,
    code: string,
  ): Promise<{
    id: number;
    email: string;
    code: string;
    expiresAt: Date;
  } | null>;

  delete(id: number): Promise<void>;

  deleteByEmail(email: string): Promise<void>;
}

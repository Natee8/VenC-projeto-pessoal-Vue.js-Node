import * as bcrypt from 'bcrypt';

export interface PasswordComparer {
  compare(plain: string, hash: string): boolean;
}

export class PasswordService {
  async hash(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  async compare(password: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(password, hashed);
  }
}

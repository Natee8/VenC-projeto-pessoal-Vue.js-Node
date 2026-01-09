import * as bcrypt from 'bcrypt';

export interface PasswordComparer {
  compare(plain: string, hash: string): Promise<boolean>;
}

export class PasswordService implements PasswordComparer {
  async hash(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  async compare(plain: string, hash: string): Promise<boolean> {
    return bcrypt.compare(plain, hash);
  }
}

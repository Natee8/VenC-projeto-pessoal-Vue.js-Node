export interface PasswordComparer {
  compare(plain: string, hash: string): boolean;
}

import * as bcrypt from 'bcrypt';
export class PasswordService {
    async hash(password) {
        return bcrypt.hash(password, 10);
    }
    async compare(plain, hash) {
        return bcrypt.compare(plain, hash);
    }
}

import { left, right } from "../../../core/interface/IEighter.js";
export class AuthenticateUserUseCase {
    usersRepo;
    passwordService;
    constructor(usersRepo, passwordService) {
        this.usersRepo = usersRepo;
        this.passwordService = passwordService;
    }
    async execute(email, password) {
        const user = await this.usersRepo.findByEmail(email);
        if (!user) {
            return left({ message: 'Usuário não encontrado' });
        }
        const passwordValid = await this.passwordService.compare(password, user.getPasswordHash());
        if (!passwordValid) {
            return left({ message: 'Senha inválida' });
        }
        return right(user);
    }
}

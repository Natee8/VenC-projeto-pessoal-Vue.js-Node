import { randomUUID } from "node:crypto";
import { Email } from "../../../../../../packages/src/valuesObjects/email.js";
import { UsersRepository } from "../../repositories/auth/authLogin.repository.js";
import { RefreshTokenEntity } from "../../../../../../packages/src/domain/entities/refreshTokenEntity.js";
import { RefreshTokenRepository } from "../../repositories/auth/refreshToken.repository.js";

export async function seedAuth() {
    const usersRepo = new UsersRepository();
    const authRepo = new RefreshTokenRepository();

    const user = await usersRepo.findByEmail(
         Email.create('testeemail@gmail.com')       
    )

    if(!user) {
        throw new Error('Usuário não encontrado');
    }
    
      const session = new RefreshTokenEntity({
            token: randomUUID(),
            userId: user.getId(),
            createdAt: new Date(),
            expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        });

        
    await authRepo.save(session)

}
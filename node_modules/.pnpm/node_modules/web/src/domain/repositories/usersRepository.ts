import { UserAuth } from "../../../../../packages/src/domain/entities/userAuthEntity.js";
import { CreateUserParams, UpdateUserParams } from "../dtos/user.dto.js";
import { IPet } from "../entities/IPetEntity.js";

export interface UserRepository {
    create(params: CreateUserParams): Promise<UserAuth>;

    getProfile(): Promise<UserAuth>

    getPublicProfileById(userId: string): Promise<UserAuth | null>

    listPets(userId: string): Promise<IPet[]>

    update(params: UpdateUserParams): Promise<UserAuth>

    deactivate(): Promise<void>
    
}

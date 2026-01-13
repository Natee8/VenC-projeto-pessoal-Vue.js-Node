import { CreateUserParams, UpdateUserParams } from "../dtos/user.dto";
import { IPet } from "../entities/IPetEntity";
import { UserAuth } from '../../../../../packages/domain/entities/userAuthEntity'

export interface UserRepository {
    create(params: CreateUserParams): Promise<UserAuth>;

    getProfile(): Promise<UserAuth>

    getPublicProfileById(userId: string): Promise<UserAuth | null>

    listPets(userId: string): Promise<IPet[]>

    update(params: UpdateUserParams): Promise<UserAuth>

    deactivate(): Promise<void>
    
}
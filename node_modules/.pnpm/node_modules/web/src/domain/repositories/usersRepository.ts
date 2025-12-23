import { CreateUserParams, UpdateUserParams } from "../dtos/user.dto";
import { IPet } from "../entities/IPetEntity";
import { IUser } from "../entities/IUserEntity";

export interface UserRepository {
    create(params: CreateUserParams): Promise<IUser>;

    getProfile(): Promise<IUser>

    getPublicProfileById(userId: string): Promise<IUser | null>

    listPets(userId: string): Promise<IPet[]>

    update(params: UpdateUserParams): Promise<IUser>

    deactivate(): Promise<void>
    
}
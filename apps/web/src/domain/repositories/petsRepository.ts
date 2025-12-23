import { CreatePetParams, UpdatePetParams } from "../dtos/pet.dto";
import { IPet } from "../entities/IPetEntity";


export interface PetRepository {
    create(params: CreatePetParams): Promise<IPet>
    
    update(PetId: string, params: UpdatePetParams): Promise<IPet>

    getById(PetId: string): Promise<IPet | null>

    listByOwnerId(ownerid: string): Promise<IPet[]>

    delete(petId: string): Promise<void>;

}
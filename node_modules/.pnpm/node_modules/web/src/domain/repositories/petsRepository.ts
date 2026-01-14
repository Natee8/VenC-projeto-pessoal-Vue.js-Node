import { CreatePetParams, UpdatePetParams } from "../dtos/pet.dto.js";
import { IPet } from "../entities/IPetEntity.js";


export interface PetRepository {
    create(params: CreatePetParams): Promise<IPet>
    
    update(PetId: string, params: UpdatePetParams): Promise<IPet>

    getById(PetId: string): Promise<IPet | null>

    listByOwnerId(ownerid: string): Promise<IPet[]>

    delete(petId: string): Promise<void>;

}

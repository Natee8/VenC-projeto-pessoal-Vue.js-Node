import { PetSpecies, sizePets } from "../../types/petTypes.js";
import { UserId } from "../../valuesObjects/userId.js";
export declare class Pet {
    private readonly id;
    private readonly ownerId;
    private name;
    private readonly species;
    private size;
    private breed;
    private birthDate;
    private specialNeeds;
    private readonly createdAt;
    private updatedAt;
    constructor(id: number, ownerId: UserId, name: string, species: PetSpecies, size: sizePets, breed: string, birthDate: Date, specialNeeds: string | null, createdAt: Date, updatedAt: Date);
    private validate;
    getId(): number;
    getOwnerId(): UserId;
    getName(): string;
    getSize(): sizePets;
    getSpecies(): PetSpecies;
    getBreed(): string;
    getBirthDate(): Date;
    getSpecialNeeds(): string | null;
    getAge(): number;
    rename(newName: string): void;
    updateSpecialNeeds(needs: string | null): void;
    updateBreed(breed: string): void;
    private touch;
}

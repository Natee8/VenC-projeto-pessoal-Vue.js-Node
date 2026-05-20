"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pet = void 0;
class Pet {
    id;
    ownerId;
    name;
    species;
    size;
    breed;
    birthDate;
    specialNeeds;
    createdAt;
    updatedAt;
    constructor(id, ownerId, name, species, size, breed, birthDate, specialNeeds, createdAt, updatedAt) {
        this.id = id;
        this.ownerId = ownerId;
        this.name = name;
        this.species = species;
        this.size = size;
        this.breed = breed;
        this.birthDate = birthDate;
        this.specialNeeds = specialNeeds;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.validate();
    }
    validate() {
        if (!this.name || this.name.trim().length === 0) {
            throw new Error("O nome do pet é obrigatório");
        }
        if (!this.birthDate) {
            throw new Error("A data de nascimento do pet é obrigatória");
        }
        if (this.birthDate > new Date()) {
            throw new Error("A data de nascimento não pode ser no futuro");
        }
    }
    getId() {
        return this.id;
    }
    getOwnerId() {
        return this.ownerId;
    }
    getName() {
        return this.name;
    }
    getSize() {
        return this.size;
    }
    getSpecies() {
        return this.species;
    }
    getBreed() {
        return this.breed;
    }
    getBirthDate() {
        return this.birthDate;
    }
    getSpecialNeeds() {
        return this.specialNeeds;
    }
    getAge() {
        const today = new Date();
        let age = today.getFullYear() - this.birthDate.getFullYear();
        const hasHadBirthdayThisYear = today.getMonth() > this.birthDate.getMonth() ||
            (today.getMonth() === this.birthDate.getMonth() &&
                today.getDate() >= this.birthDate.getDate());
        if (!hasHadBirthdayThisYear) {
            age--;
        }
        return age;
    }
    rename(newName) {
        if (!newName || newName.trim().length === 0) {
            throw new Error("O nome do pet não pode ser vazio");
        }
        this.name = newName;
        this.touch();
    }
    updateSpecialNeeds(needs) {
        this.specialNeeds = needs;
        this.touch();
    }
    updateBreed(breed) {
        this.breed = breed;
        this.touch();
    }
    touch() {
        this.updatedAt = new Date();
    }
}
exports.Pet = Pet;

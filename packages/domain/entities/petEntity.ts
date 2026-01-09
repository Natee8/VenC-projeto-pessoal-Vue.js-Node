import { PetSpecies, sizePets } from "../../types/petTypes";
import { UserProfile } from "./userProfile";

export class Pet {
    constructor(
        private readonly id: number,
        private readonly owner: UserProfile,
        private name: string,
        private readonly species: PetSpecies,
        private size: sizePets,
        private breed: string,
        private birthDate: Date,
        private specialNeeds: string | null,
        private readonly createdAt: Date,
        private updatedAt: Date
    ) {
        this.validate()
    }

      private validate() {
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
  getOwner() {
    return this.owner;
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


  getAge(): number {
    const today = new Date();
    let age = today.getFullYear() - this.birthDate.getFullYear();

    const hasHadBirthdayThisYear = 
    today.getMonth() > this.birthDate.getMonth() ||
    (today.getMonth() === this.birthDate.getMonth() &&
     today.getDate() >= this.birthDate.getDate())

     
    if (!hasHadBirthdayThisYear) {
      age--;
    }

    return age
  }

   rename(newName: string) {
    if (!newName || newName.trim().length === 0) {
      throw new Error("O nome do pet não pode ser vazio");
    }

    this.name = newName;
    this.touch();
  }

  updateSpecialNeeds(needs: string | null) {
    this.specialNeeds = needs;
    this.touch();
  }

  updateBreed(breed: string) {
    this.breed = breed;
    this.touch();
  }

  private touch() {
    this.updatedAt = new Date();
  }
}

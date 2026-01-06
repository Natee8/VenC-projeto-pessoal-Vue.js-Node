import { Pet } from './Pet';
import { Address } from '../valuesObjects/Address';
import { Phone } from '../valuesObjects/Phone';

export class OwnerProfile {
  constructor(
    public readonly userId: string,
    private pets: Pet[],
    private address: Address,
    private phone: Phone,
    private searchRadiusKm?: number;
    private createdAt: Date,
    private updatedAt: Date
  ) {}

  getPets() {
    return this.pets;
  }

  addPet(pet: Pet) {
    this.pets.push(pet);
    this.updatedAt = new Date();
  }

  removePet(petId: string) {
    this.pets = this.pets.filter(pet => pet.id !== petId);
    this.updatedAt = new Date();
  }

  getAddress() {
    return this.address;
  }

  updateAddress(address: Address) {
    this.address = address;
    this.updatedAt = new Date();
  }
}

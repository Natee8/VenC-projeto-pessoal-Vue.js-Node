
import { Address } from '../valuesObjects/Address';
import { Pet } from './petEntity';
import { Phone } from '../valuesObjects/phone';

export class OwnerProfile {
  constructor(
    public readonly userId: string,
    private pets: Pet[],
    private address: Address,
    private phone: Phone,
    private createdAt: Date,
    private updatedAt: Date,
    private searchRadiusKm?: number,
  ) {}

  getPets() {
    return this.pets;
  }

  addPet(pet: Pet) {
    this.pets.push(pet);
    this.updatedAt = new Date();
  }

  removePet(petId: number) {
  this.pets = this.pets.filter(pet => pet.getId() !== petId);
  this.updatedAt = new Date();
  }

  getAddress() {
    return this.address;
  }

    getCreatedAt(): Date {
    return this.createdAt
  }

  updateAddress(address: Address) {
    this.address = address;
    this.updatedAt = new Date();
  }
}

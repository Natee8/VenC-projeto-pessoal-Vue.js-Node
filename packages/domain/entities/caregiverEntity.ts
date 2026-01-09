import { Address } from '../valuesObjects/address';
import { CPF } from '../valuesObjects/cpf';
import { UserId } from '../valuesObjects/userID';

export class Caregiver {
  constructor(
    public readonly id: string,
    public readonly userId: UserId,
    private cpf: CPF,
    private offersHosting: boolean,
    private address: Address,
    private serviceRadiusKm: number,
    private isVerified: boolean,
    private isActive: boolean,
    public readonly createdAt: Date,
    private updatedAt: Date
  ) {
    if (serviceRadiusKm <= 0) {
      throw new Error('Raio de atendimento inválido');
    }
  }

  canHostPets() {
    return this.offersHosting;
  }

  getServiceRadius() {
    return this.serviceRadiusKm;
  }

  verify() {
    this.isVerified = true;
    this.touch();
  }

  deactivate() {
    if (!this.isActive) {
      throw new Error('Cuidador já está desativado');
    }
    this.isActive = false;
    this.touch();
  }

  isEnabled() {
    return this.isActive && this.isVerified;
  }

  private touch() {
    this.updatedAt = new Date();
  }
}

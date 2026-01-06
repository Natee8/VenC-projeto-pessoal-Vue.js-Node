import { Address } from '../valueObjects/Address';
import { CPF } from '../valueObjects/CPF';

export class Caregiver {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    private cpf: CPF,
    private address: Address,
    private offersHosting: boolean,
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

  getCPF() {
    return this.cpf.value;
  }

  getAddress() {
    return this.address;
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

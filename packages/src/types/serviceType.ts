export type ServiceTypes = "WALK" | "FEEDING" | "SPECIAL_CARE"

export type UrgencyType = 'NOW' | 'SCHEDULED';


export type ServiceRequestStatus =
  | 'OPEN'
  | 'ACCEPTED'
  | 'CANCELLED'
  | 'COMPLETED';

export enum ServicePetType {
  PET_WALKING = 'PET_WALKING',           // Passeador
  PET_FEEDING = 'PET_FEEDING',           // Alimentação
  PET_HOSTING = 'PET_HOSTING',           // Hospedagem
  PET_TRAINING = 'PET_TRAINING',         // Adestramento
  SPECIAL_CARE = 'SPECIAL_CARE',         // Cuidados especiais (remédio, idosos, etc)
  PET_BATHING = 'PET_BATHING',           // Banho
}

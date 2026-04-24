export const ServiceTypeLabels = {
  PET_WALKING: 'Passeio',
  PET_FEEDING: 'Alimentação',
  PET_HOSTING: 'Hospedagem',
  PET_TRAINING: 'Adestramento',
  SPECIAL_CARE: 'Cuidados Especiais',
  PET_BATHING: 'Banho',
} as const;

export type ServiceTypeLabelTypeof = keyof typeof ServiceTypeLabels;

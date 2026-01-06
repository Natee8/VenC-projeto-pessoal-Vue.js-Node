import { IServiceCardConfigDto } from "../../domain/dtos/serviceOffer.dto";
import { ServiceTypeLabelTypeof, ServiceTypeLabels } from "../../infrastructure/utils/ServiceTypesLabels";

export const servicesConfig: IServiceCardConfigDto[] = [
  {
    type: 'PET_TRAINING',
    title: 'Adestramento',
    description:
      'Treinamento profissional para melhorar o comportamento do seu pet, com técnicas positivas e personalizadas.',
    icon: '/assets/icons/petTrainning.svg',
    ctaLabel: 'Contratar',
  },
  {
    type: 'PET_WALKING',
    title: 'Passeio',
    description:
      'Passeios seguros e supervisionados para manter seu pet ativo, saudável e feliz.',
    icon: '/assets/icons/petWalking.svg',
    ctaLabel: 'Contratar',
  },
  {
    type: 'PET_FEEDING',
    title: 'Alimentação',
    description:
      'Cuidado na alimentação do seu pet seguindo horários e necessidades específicas.',
    icon: '/assets/icons/petFeeding.svg',
    ctaLabel: 'Contratar',
  },
  {
    type: 'PET_HOSTING',
    title: 'Hospedagem',
    description:
      'Hospedagem confortável e segura para seu pet enquanto você estiver fora.',
    icon: '/assets/icons/petHosting.svg',
    ctaLabel: 'Contratar',
  },
  {
    type: 'SPECIAL_CARE',
    title: 'Cuidados Especiais',
    description:
      'Administração de medicamentos e cuidados especiais para pets que exigem mais atenção.',
    icon: '/assets/icons/specialCare.svg',
    ctaLabel: 'Contratar',
  },
  {
    type: 'PET_BATHING',
    title: 'Banho',
    description:
      'Banho e higienização para deixar seu pet limpo, cheiroso e confortável.',
    icon: '/assets/icons/PetBathing.svg',
    ctaLabel: 'Contratar',
  },
];

//service model é o serviço de catalogo de serviços que os tutores podem ver e sera mostrado na home, serviceoffer é o que o cuidador oferece que fica ligado com esse daqui que sao proprios do sistema
export type ServiceModelDTO = {
  id: number;
  name: string;
  description: string;
};

export type CreateServiceModelDTO = {
  name: string;
  description: string;
};

//dto do service offer, que tem entidade

export type ServiceOfferDTO = {
  id: number;
  caregiverId: number;
  serviceId: number;
  description?: string | null;
  price: number;
  isActive: boolean;
};

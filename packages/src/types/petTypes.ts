export enum PetSpecies {
  DOG = "DOG",
  CAT = "CAT",
  BIRD = "BIRD",
  FISH = "FISH",
  RABBIT = "RABBIT",
  HORSE = "HORSE",
  PIG = "PIG",
  LHAMA = "LHAMA",
  IGUANA = "IGUANA",
  SNAKE = "SNAKE",
  MOUSE = "MOUSE",
}

export enum AnimalCategory {
  DOMESTIC = "DOMESTIC",
  EXOTIC = "EXOTIC",
  FARM = "FARM",
}

export const speciesCategoryMap: Record<PetSpecies, AnimalCategory> = {
  [PetSpecies.DOG]: AnimalCategory.DOMESTIC,
  [PetSpecies.CAT]: AnimalCategory.DOMESTIC,
  [PetSpecies.RABBIT]: AnimalCategory.DOMESTIC,

  [PetSpecies.HORSE]: AnimalCategory.FARM,
  [PetSpecies.PIG]: AnimalCategory.FARM,
  [PetSpecies.LHAMA]: AnimalCategory.FARM,

  [PetSpecies.BIRD]: AnimalCategory.EXOTIC,
  [PetSpecies.FISH]: AnimalCategory.EXOTIC,
  [PetSpecies.IGUANA]: AnimalCategory.EXOTIC,
  [PetSpecies.SNAKE]: AnimalCategory.EXOTIC,
  [PetSpecies.MOUSE]: AnimalCategory.EXOTIC,
};

export const PetSpeciesLabels: Record<PetSpecies, string> = {
  [PetSpecies.DOG]: "Cachorro",
  [PetSpecies.CAT]: "Gato",
  [PetSpecies.BIRD]: "Pássaro",
  [PetSpecies.FISH]: "Peixe",
  [PetSpecies.RABBIT]: "Coelho",
  [PetSpecies.HORSE]: "Cavalo",
  [PetSpecies.PIG]: "Porco",
  [PetSpecies.LHAMA]: "Lhama",
  [PetSpecies.IGUANA]: "Iguana",
  [PetSpecies.SNAKE]: "Cobra",
  [PetSpecies.MOUSE]: "Rato",
};
export type sizePets = "SMALL" | "MEDIUM" | "LARGE";

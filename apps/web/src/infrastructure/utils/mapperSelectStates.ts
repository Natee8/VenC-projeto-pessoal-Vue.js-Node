import { BrazilStateCode } from "src/types/IStates";

export const normalizeState = (value: string): BrazilStateCode | "" => {
  const v = value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim();

  const map: Record<string, BrazilStateCode> = {
    sp: "SP",
    "sao paulo": "SP",

    rj: "RJ",
    "rio de janeiro": "RJ",

    mg: "MG",
    "minas gerais": "MG",
  };

  return map[v] || "";
};

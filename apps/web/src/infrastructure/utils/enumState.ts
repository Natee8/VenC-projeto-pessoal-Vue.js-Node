import {
  BRAZIL_STATES,
  BrazilianStateLabels,
  BrazilStateCode,
} from "src/types/IStates";

export type BrazilianState = BrazilStateCode;

export const BrazilianState: Record<BrazilianState, BrazilianState> =
  BRAZIL_STATES.reduce(
    (acc, item) => {
      acc[item.value] = item.value;
      return acc;
    },
    {} as Record<BrazilianState, BrazilianState>,
  );

export { BrazilianStateLabels };

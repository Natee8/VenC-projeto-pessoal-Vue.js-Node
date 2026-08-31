/**
 * Envelope único de resposta da API.
 *
 * O back-end SEMPRE responde neste formato (via `success`/`failure` em
 * `apps/service/src/core/http`). Os repositories do front desembrulham o
 * envelope e devolvem só o `data` — nenhuma store ou componente deve
 * enxergar `ApiResponse`.
 */
export type ApiResponse<T = null> = {
  message: string;
  code: number;
  data: T;
};

export type ApiErrorResponse = {
  message: string;
  code: number;
  error?: string;
  /** Erros de validação por campo, preenchido pelo zod no `failure`. */
  errors?: Record<string, string[]>;
};

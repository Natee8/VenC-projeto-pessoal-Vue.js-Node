export function normalizeError(error: unknown, fallback: string): Error {
  if (error instanceof Error) return error
  return new Error(fallback)
}

export const normalizeText = (value?: string) => {
  if (!value) return undefined;

  return value
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

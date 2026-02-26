export class Name {
  private constructor(public readonly value: string) {}

  static create(rawName: string): Name {
    if (!rawName) throw new Error("Nome é obrigatório");

    const normalized = Name.normalize(rawName);

    if (normalized.length < 3) throw new Error("Nome muito curto");

    if (normalized.length > 80) throw new Error("Nome muito longo");

    if (!Name.isValid(normalized))
      throw new Error("Nome contém caracteres inválidos");

    return new Name(normalized);
  }

  private static normalize(name: string): string {
    return name
      .trim()
      .replace(/\s+/g, " ")
      .toLowerCase()
      .replace(/\b\w/g, (c) => c.toUpperCase());
  }

  private static isValid(name: string): boolean {
    return /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(name);
  }
}

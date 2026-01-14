export class CPF {
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  static create(rawCpf: string): CPF {
    const normalized = CPF.normalize(rawCpf);

    if (!CPF.isValid(normalized)) {
      throw new Error('CPF inválido');
    }

    return new CPF(normalized);
  }

  getValue(): string {
    return this.value;
  }

  equals(other: CPF): boolean {
    return this.value === other.value;
  }

  private static normalize(cpf: string): string {
    return cpf.replace(/\D/g, '');
  }

  private static isValid(cpf: string): boolean {
    if (!cpf || cpf.length !== 11) return false;

    if (/^(\d)\1+$/.test(cpf)) return false;

    let sum = 0;
    let remainder = 0;

    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.substring(9, 10))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.substring(10, 11))) return false;

    return true;
  }
}

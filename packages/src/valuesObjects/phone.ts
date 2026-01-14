export class Phone {
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  static create(rawPhone: string): Phone {
    const normalized = Phone.normalize(rawPhone);

    if (!Phone.isValid(normalized)) {
      throw new Error('Telefone inválido');
    }

    return new Phone(normalized);
  }

  getValue(): string {
    return this.value;
  }

  equals(other: Phone): boolean {
    return this.value === other.value;
  }

  private static normalize(phone: string): string {
    return phone.replace(/\D/g, '');
  }

  private static isValid(phone: string): boolean {
    if (!phone) return false;

    if (phone.startsWith('55') && phone.length > 11) {
      phone = phone.substring(2);
    }

    if (phone.length !== 10 && phone.length !== 11) return false;

    const ddd = phone.substring(0, 2);
    if (Number(ddd) < 11 || Number(ddd) > 99) return false;

    return true;
  }
}

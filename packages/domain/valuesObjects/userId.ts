export class UserId {
  private constructor(private readonly value: string) {}

  static create(id: string | number): UserId {
    if (!id) {
      throw new Error('UserId inválido')
    }

    return new UserId(String(id))
  }

  getValue(): string {
    return this.value
  }

  toString(): string {
    return this.value
  }
}

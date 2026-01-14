export class UserId {
  private readonly _value: number

  private constructor(value: number) {
    this._value = value
  }

  static create(value: number): UserId {
    if (!value) {
      throw new Error('UserId inválido')
    }

    return new UserId(value)
  }

  getValue(): number {
    return this._value
  }

  tonumber(): number {
    return this._value
  }
}

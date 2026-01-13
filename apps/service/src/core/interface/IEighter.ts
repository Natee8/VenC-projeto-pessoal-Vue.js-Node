export type Either<L, R> = Left<L> | Right<R>

export interface IEither<L, R> {
  isException(): this is Left<L>
  isSuccess(): this is Right<R>
}


export class Left<L> {
  readonly type = 'left'
  constructor(private readonly _value: L) {}

  get value(): never {
    throw new Error('Tentou acessar Right em Left')
  }

  get error(): L {
    return this._value
  }

  isException(): this is Left<L> {
    return true
  }

  isSuccess(): this is Right<never> {
    return false
  }
}

export class Right<R> {
  readonly type = 'right'
  constructor(private readonly _value: R) {}

  get value(): R {
    return this._value
  }

  get error(): never {
    throw new Error('Tentou acessar Left em Right')
  }

  isException(): this is Left<never> {
    return false
  }

  isSuccess(): this is Right<R> {
    return true
  }
}

export const left = <L>(value: L): Either<L, never> =>
  new Left(value)

export const right = <R>(value: R): Either<never, R> =>
  new Right(value)

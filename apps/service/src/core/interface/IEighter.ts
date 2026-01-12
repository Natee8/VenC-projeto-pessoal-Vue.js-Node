export interface IEither<L, R> {
  isException(): this is Left<L, R>
  isSuccess(): this is Right<L, R>
  value: L | R
}

export class Right<L, R> implements IEither<L, R> {
  readonly value: R

  constructor(value: R) {
    this.value = value
  }

  isException(): this is Left<L, R> {
    return false
  }

  isSuccess(): this is Right<L, R> {
    return true
  }
}

export class Left<L, R> implements IEither<L, R> {
  readonly value: L

  constructor(value: L) {
    this.value = value
  }

  isException(): this is Left<L, R> {
    return true
  }

  isSuccess(): this is Right<L, R> {
    return false
  }
}

export const left = <L, R>(value: L): IEither<L, R> => new Left<L, R>(value)
export const right = <L, R>(value: R): IEither<L, R> => new Right<L, R>(value)

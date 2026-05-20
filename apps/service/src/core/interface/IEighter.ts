export type Either<L, R> = Left<L, R> | Right<L, R>;

export interface IEither<L, R> {
  isException(): this is Left<L, R>;
  isSuccess(): this is Right<L, R>;
}

export class Left<L, R> {
  readonly type = "left";

  constructor(private readonly _value: L) {}

  get value(): never {
    throw new Error("Tentou acessar Right em Left");
  }

  get error(): L {
    return this._value;
  }

  isException(): this is Left<L, R> {
    return true;
  }

  isSuccess(): this is Right<L, R> {
    return false;
  }
}

export class Right<L, R> {
  readonly type = "right";

  constructor(private readonly _value: R) {}

  get value(): R {
    return this._value;
  }

  get error(): never {
    throw new Error("Tentou acessar Left em Right");
  }

  isException(): this is Left<L, R> {
    return false;
  }

  isSuccess(): this is Right<L, R> {
    return true;
  }
}

export const left = <L, R = never>(value: L): Either<L, R> => new Left(value);

export const right = <L = never, R = never>(value: R): Either<L, R> =>
  new Right(value);


/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model Caregiver
 * 
 */
export type Caregiver = $Result.DefaultSelection<Prisma.$CaregiverPayload>
/**
 * Model OwnerProfile
 * 
 */
export type OwnerProfile = $Result.DefaultSelection<Prisma.$OwnerProfilePayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model ServiceOffer
 * 
 */
export type ServiceOffer = $Result.DefaultSelection<Prisma.$ServiceOfferPayload>
/**
 * Model UserAuth
 * 
 */
export type UserAuth = $Result.DefaultSelection<Prisma.$UserAuthPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const State: {
  AC: 'AC',
  AL: 'AL',
  AP: 'AP',
  AM: 'AM',
  BA: 'BA',
  CE: 'CE',
  DF: 'DF',
  ES: 'ES',
  GO: 'GO',
  MA: 'MA',
  MT: 'MT',
  MS: 'MS',
  MG: 'MG',
  PA: 'PA',
  PB: 'PB',
  PR: 'PR',
  PE: 'PE',
  PI: 'PI',
  RJ: 'RJ',
  RN: 'RN',
  RS: 'RS',
  RO: 'RO',
  RR: 'RR',
  SC: 'SC',
  SP: 'SP',
  SE: 'SE',
  TO: 'TO'
};

export type State = (typeof State)[keyof typeof State]


export const ReviewTargetRole: {
  OWNER: 'OWNER',
  CAREGIVER: 'CAREGIVER'
};

export type ReviewTargetRole = (typeof ReviewTargetRole)[keyof typeof ReviewTargetRole]

}

export type State = $Enums.State

export const State: typeof $Enums.State

export type ReviewTargetRole = $Enums.ReviewTargetRole

export const ReviewTargetRole: typeof $Enums.ReviewTargetRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Addresses
 * const addresses = await prisma.address.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Addresses
   * const addresses = await prisma.address.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.caregiver`: Exposes CRUD operations for the **Caregiver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Caregivers
    * const caregivers = await prisma.caregiver.findMany()
    * ```
    */
  get caregiver(): Prisma.CaregiverDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ownerProfile`: Exposes CRUD operations for the **OwnerProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OwnerProfiles
    * const ownerProfiles = await prisma.ownerProfile.findMany()
    * ```
    */
  get ownerProfile(): Prisma.OwnerProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceOffer`: Exposes CRUD operations for the **ServiceOffer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceOffers
    * const serviceOffers = await prisma.serviceOffer.findMany()
    * ```
    */
  get serviceOffer(): Prisma.ServiceOfferDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAuth`: Exposes CRUD operations for the **UserAuth** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAuths
    * const userAuths = await prisma.userAuth.findMany()
    * ```
    */
  get userAuth(): Prisma.UserAuthDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.1
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Address: 'Address',
    Caregiver: 'Caregiver',
    OwnerProfile: 'OwnerProfile',
    Review: 'Review',
    Service: 'Service',
    ServiceOffer: 'ServiceOffer',
    UserAuth: 'UserAuth',
    RefreshToken: 'RefreshToken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "address" | "caregiver" | "ownerProfile" | "review" | "service" | "serviceOffer" | "userAuth" | "refreshToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      Caregiver: {
        payload: Prisma.$CaregiverPayload<ExtArgs>
        fields: Prisma.CaregiverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CaregiverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaregiverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CaregiverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaregiverPayload>
          }
          findFirst: {
            args: Prisma.CaregiverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaregiverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CaregiverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaregiverPayload>
          }
          findMany: {
            args: Prisma.CaregiverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaregiverPayload>[]
          }
          create: {
            args: Prisma.CaregiverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaregiverPayload>
          }
          createMany: {
            args: Prisma.CaregiverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CaregiverCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaregiverPayload>[]
          }
          delete: {
            args: Prisma.CaregiverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaregiverPayload>
          }
          update: {
            args: Prisma.CaregiverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaregiverPayload>
          }
          deleteMany: {
            args: Prisma.CaregiverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CaregiverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CaregiverUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaregiverPayload>[]
          }
          upsert: {
            args: Prisma.CaregiverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaregiverPayload>
          }
          aggregate: {
            args: Prisma.CaregiverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCaregiver>
          }
          groupBy: {
            args: Prisma.CaregiverGroupByArgs<ExtArgs>
            result: $Utils.Optional<CaregiverGroupByOutputType>[]
          }
          count: {
            args: Prisma.CaregiverCountArgs<ExtArgs>
            result: $Utils.Optional<CaregiverCountAggregateOutputType> | number
          }
        }
      }
      OwnerProfile: {
        payload: Prisma.$OwnerProfilePayload<ExtArgs>
        fields: Prisma.OwnerProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OwnerProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OwnerProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerProfilePayload>
          }
          findFirst: {
            args: Prisma.OwnerProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OwnerProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerProfilePayload>
          }
          findMany: {
            args: Prisma.OwnerProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerProfilePayload>[]
          }
          create: {
            args: Prisma.OwnerProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerProfilePayload>
          }
          createMany: {
            args: Prisma.OwnerProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OwnerProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerProfilePayload>[]
          }
          delete: {
            args: Prisma.OwnerProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerProfilePayload>
          }
          update: {
            args: Prisma.OwnerProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerProfilePayload>
          }
          deleteMany: {
            args: Prisma.OwnerProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OwnerProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OwnerProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerProfilePayload>[]
          }
          upsert: {
            args: Prisma.OwnerProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerProfilePayload>
          }
          aggregate: {
            args: Prisma.OwnerProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOwnerProfile>
          }
          groupBy: {
            args: Prisma.OwnerProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<OwnerProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.OwnerProfileCountArgs<ExtArgs>
            result: $Utils.Optional<OwnerProfileCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      ServiceOffer: {
        payload: Prisma.$ServiceOfferPayload<ExtArgs>
        fields: Prisma.ServiceOfferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceOfferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOfferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceOfferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOfferPayload>
          }
          findFirst: {
            args: Prisma.ServiceOfferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOfferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceOfferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOfferPayload>
          }
          findMany: {
            args: Prisma.ServiceOfferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOfferPayload>[]
          }
          create: {
            args: Prisma.ServiceOfferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOfferPayload>
          }
          createMany: {
            args: Prisma.ServiceOfferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceOfferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOfferPayload>[]
          }
          delete: {
            args: Prisma.ServiceOfferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOfferPayload>
          }
          update: {
            args: Prisma.ServiceOfferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOfferPayload>
          }
          deleteMany: {
            args: Prisma.ServiceOfferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceOfferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceOfferUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOfferPayload>[]
          }
          upsert: {
            args: Prisma.ServiceOfferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOfferPayload>
          }
          aggregate: {
            args: Prisma.ServiceOfferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceOffer>
          }
          groupBy: {
            args: Prisma.ServiceOfferGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceOfferGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceOfferCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceOfferCountAggregateOutputType> | number
          }
        }
      }
      UserAuth: {
        payload: Prisma.$UserAuthPayload<ExtArgs>
        fields: Prisma.UserAuthFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAuthFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAuthFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload>
          }
          findFirst: {
            args: Prisma.UserAuthFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAuthFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload>
          }
          findMany: {
            args: Prisma.UserAuthFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload>[]
          }
          create: {
            args: Prisma.UserAuthCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload>
          }
          createMany: {
            args: Prisma.UserAuthCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAuthCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload>[]
          }
          delete: {
            args: Prisma.UserAuthDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload>
          }
          update: {
            args: Prisma.UserAuthUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload>
          }
          deleteMany: {
            args: Prisma.UserAuthDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAuthUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserAuthUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload>[]
          }
          upsert: {
            args: Prisma.UserAuthUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload>
          }
          aggregate: {
            args: Prisma.UserAuthAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAuth>
          }
          groupBy: {
            args: Prisma.UserAuthGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAuthGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAuthCountArgs<ExtArgs>
            result: $Utils.Optional<UserAuthCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    address?: AddressOmit
    caregiver?: CaregiverOmit
    ownerProfile?: OwnerProfileOmit
    review?: ReviewOmit
    service?: ServiceOmit
    serviceOffer?: ServiceOfferOmit
    userAuth?: UserAuthOmit
    refreshToken?: RefreshTokenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CaregiverCountOutputType
   */

  export type CaregiverCountOutputType = {
    services: number
  }

  export type CaregiverCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | CaregiverCountOutputTypeCountServicesArgs
  }

  // Custom InputTypes
  /**
   * CaregiverCountOutputType without action
   */
  export type CaregiverCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaregiverCountOutputType
     */
    select?: CaregiverCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CaregiverCountOutputType without action
   */
  export type CaregiverCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceOfferWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    offers: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offers?: boolean | ServiceCountOutputTypeCountOffersArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceOfferWhereInput
  }


  /**
   * Count Type ServiceOfferCountOutputType
   */

  export type ServiceOfferCountOutputType = {
    reviews: number
  }

  export type ServiceOfferCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | ServiceOfferCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * ServiceOfferCountOutputType without action
   */
  export type ServiceOfferCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOfferCountOutputType
     */
    select?: ServiceOfferCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceOfferCountOutputType without action
   */
  export type ServiceOfferCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type UserAuthCountOutputType
   */

  export type UserAuthCountOutputType = {
    refreshTokens: number
    reviewsGiven: number
    reviewsReceived: number
  }

  export type UserAuthCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refreshTokens?: boolean | UserAuthCountOutputTypeCountRefreshTokensArgs
    reviewsGiven?: boolean | UserAuthCountOutputTypeCountReviewsGivenArgs
    reviewsReceived?: boolean | UserAuthCountOutputTypeCountReviewsReceivedArgs
  }

  // Custom InputTypes
  /**
   * UserAuthCountOutputType without action
   */
  export type UserAuthCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuthCountOutputType
     */
    select?: UserAuthCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserAuthCountOutputType without action
   */
  export type UserAuthCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }

  /**
   * UserAuthCountOutputType without action
   */
  export type UserAuthCountOutputTypeCountReviewsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserAuthCountOutputType without action
   */
  export type UserAuthCountOutputTypeCountReviewsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    ownerProfileId: number | null
    caregiverId: number | null
  }

  export type AddressSumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    ownerProfileId: number | null
    caregiverId: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: number | null
    street: string | null
    number: string | null
    neighborhood: string | null
    city: string | null
    state: $Enums.State | null
    zipCode: string | null
    latitude: number | null
    longitude: number | null
    complement: string | null
    ownerProfileId: number | null
    caregiverId: number | null
  }

  export type AddressMaxAggregateOutputType = {
    id: number | null
    street: string | null
    number: string | null
    neighborhood: string | null
    city: string | null
    state: $Enums.State | null
    zipCode: string | null
    latitude: number | null
    longitude: number | null
    complement: string | null
    ownerProfileId: number | null
    caregiverId: number | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    street: number
    number: number
    neighborhood: number
    city: number
    state: number
    zipCode: number
    latitude: number
    longitude: number
    complement: number
    ownerProfileId: number
    caregiverId: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    ownerProfileId?: true
    caregiverId?: true
  }

  export type AddressSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    ownerProfileId?: true
    caregiverId?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    street?: true
    number?: true
    neighborhood?: true
    city?: true
    state?: true
    zipCode?: true
    latitude?: true
    longitude?: true
    complement?: true
    ownerProfileId?: true
    caregiverId?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    street?: true
    number?: true
    neighborhood?: true
    city?: true
    state?: true
    zipCode?: true
    latitude?: true
    longitude?: true
    complement?: true
    ownerProfileId?: true
    caregiverId?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    street?: true
    number?: true
    neighborhood?: true
    city?: true
    state?: true
    zipCode?: true
    latitude?: true
    longitude?: true
    complement?: true
    ownerProfileId?: true
    caregiverId?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: number
    street: string
    number: string
    neighborhood: string
    city: string
    state: $Enums.State
    zipCode: string
    latitude: number | null
    longitude: number | null
    complement: string | null
    ownerProfileId: number | null
    caregiverId: number | null
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street?: boolean
    number?: boolean
    neighborhood?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    latitude?: boolean
    longitude?: boolean
    complement?: boolean
    ownerProfileId?: boolean
    caregiverId?: boolean
    ownerProfile?: boolean | Address$ownerProfileArgs<ExtArgs>
    caregiver?: boolean | Address$caregiverArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street?: boolean
    number?: boolean
    neighborhood?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    latitude?: boolean
    longitude?: boolean
    complement?: boolean
    ownerProfileId?: boolean
    caregiverId?: boolean
    ownerProfile?: boolean | Address$ownerProfileArgs<ExtArgs>
    caregiver?: boolean | Address$caregiverArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street?: boolean
    number?: boolean
    neighborhood?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    latitude?: boolean
    longitude?: boolean
    complement?: boolean
    ownerProfileId?: boolean
    caregiverId?: boolean
    ownerProfile?: boolean | Address$ownerProfileArgs<ExtArgs>
    caregiver?: boolean | Address$caregiverArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    street?: boolean
    number?: boolean
    neighborhood?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    latitude?: boolean
    longitude?: boolean
    complement?: boolean
    ownerProfileId?: boolean
    caregiverId?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "street" | "number" | "neighborhood" | "city" | "state" | "zipCode" | "latitude" | "longitude" | "complement" | "ownerProfileId" | "caregiverId", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownerProfile?: boolean | Address$ownerProfileArgs<ExtArgs>
    caregiver?: boolean | Address$caregiverArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownerProfile?: boolean | Address$ownerProfileArgs<ExtArgs>
    caregiver?: boolean | Address$caregiverArgs<ExtArgs>
  }
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownerProfile?: boolean | Address$ownerProfileArgs<ExtArgs>
    caregiver?: boolean | Address$caregiverArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      ownerProfile: Prisma.$OwnerProfilePayload<ExtArgs> | null
      caregiver: Prisma.$CaregiverPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      street: string
      number: string
      neighborhood: string
      city: string
      state: $Enums.State
      zipCode: string
      latitude: number | null
      longitude: number | null
      complement: string | null
      ownerProfileId: number | null
      caregiverId: number | null
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ownerProfile<T extends Address$ownerProfileArgs<ExtArgs> = {}>(args?: Subset<T, Address$ownerProfileArgs<ExtArgs>>): Prisma__OwnerProfileClient<$Result.GetResult<Prisma.$OwnerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    caregiver<T extends Address$caregiverArgs<ExtArgs> = {}>(args?: Subset<T, Address$caregiverArgs<ExtArgs>>): Prisma__CaregiverClient<$Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'Int'>
    readonly street: FieldRef<"Address", 'String'>
    readonly number: FieldRef<"Address", 'String'>
    readonly neighborhood: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly state: FieldRef<"Address", 'State'>
    readonly zipCode: FieldRef<"Address", 'String'>
    readonly latitude: FieldRef<"Address", 'Float'>
    readonly longitude: FieldRef<"Address", 'Float'>
    readonly complement: FieldRef<"Address", 'String'>
    readonly ownerProfileId: FieldRef<"Address", 'Int'>
    readonly caregiverId: FieldRef<"Address", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address.ownerProfile
   */
  export type Address$ownerProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerProfile
     */
    select?: OwnerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerProfile
     */
    omit?: OwnerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerProfileInclude<ExtArgs> | null
    where?: OwnerProfileWhereInput
  }

  /**
   * Address.caregiver
   */
  export type Address$caregiverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverInclude<ExtArgs> | null
    where?: CaregiverWhereInput
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model Caregiver
   */

  export type AggregateCaregiver = {
    _count: CaregiverCountAggregateOutputType | null
    _avg: CaregiverAvgAggregateOutputType | null
    _sum: CaregiverSumAggregateOutputType | null
    _min: CaregiverMinAggregateOutputType | null
    _max: CaregiverMaxAggregateOutputType | null
  }

  export type CaregiverAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    serviceRadiusKm: number | null
  }

  export type CaregiverSumAggregateOutputType = {
    id: number | null
    userId: number | null
    serviceRadiusKm: number | null
  }

  export type CaregiverMinAggregateOutputType = {
    id: number | null
    userId: number | null
    offersHosting: boolean | null
    serviceRadiusKm: number | null
    isVerified: boolean | null
    isPublicProfile: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CaregiverMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    offersHosting: boolean | null
    serviceRadiusKm: number | null
    isVerified: boolean | null
    isPublicProfile: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CaregiverCountAggregateOutputType = {
    id: number
    userId: number
    offersHosting: number
    serviceRadiusKm: number
    isVerified: number
    isPublicProfile: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CaregiverAvgAggregateInputType = {
    id?: true
    userId?: true
    serviceRadiusKm?: true
  }

  export type CaregiverSumAggregateInputType = {
    id?: true
    userId?: true
    serviceRadiusKm?: true
  }

  export type CaregiverMinAggregateInputType = {
    id?: true
    userId?: true
    offersHosting?: true
    serviceRadiusKm?: true
    isVerified?: true
    isPublicProfile?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CaregiverMaxAggregateInputType = {
    id?: true
    userId?: true
    offersHosting?: true
    serviceRadiusKm?: true
    isVerified?: true
    isPublicProfile?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CaregiverCountAggregateInputType = {
    id?: true
    userId?: true
    offersHosting?: true
    serviceRadiusKm?: true
    isVerified?: true
    isPublicProfile?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CaregiverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Caregiver to aggregate.
     */
    where?: CaregiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Caregivers to fetch.
     */
    orderBy?: CaregiverOrderByWithRelationInput | CaregiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CaregiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Caregivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Caregivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Caregivers
    **/
    _count?: true | CaregiverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CaregiverAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CaregiverSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CaregiverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CaregiverMaxAggregateInputType
  }

  export type GetCaregiverAggregateType<T extends CaregiverAggregateArgs> = {
        [P in keyof T & keyof AggregateCaregiver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaregiver[P]>
      : GetScalarType<T[P], AggregateCaregiver[P]>
  }




  export type CaregiverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaregiverWhereInput
    orderBy?: CaregiverOrderByWithAggregationInput | CaregiverOrderByWithAggregationInput[]
    by: CaregiverScalarFieldEnum[] | CaregiverScalarFieldEnum
    having?: CaregiverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CaregiverCountAggregateInputType | true
    _avg?: CaregiverAvgAggregateInputType
    _sum?: CaregiverSumAggregateInputType
    _min?: CaregiverMinAggregateInputType
    _max?: CaregiverMaxAggregateInputType
  }

  export type CaregiverGroupByOutputType = {
    id: number
    userId: number
    offersHosting: boolean
    serviceRadiusKm: number
    isVerified: boolean
    isPublicProfile: boolean
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: CaregiverCountAggregateOutputType | null
    _avg: CaregiverAvgAggregateOutputType | null
    _sum: CaregiverSumAggregateOutputType | null
    _min: CaregiverMinAggregateOutputType | null
    _max: CaregiverMaxAggregateOutputType | null
  }

  type GetCaregiverGroupByPayload<T extends CaregiverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CaregiverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CaregiverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CaregiverGroupByOutputType[P]>
            : GetScalarType<T[P], CaregiverGroupByOutputType[P]>
        }
      >
    >


  export type CaregiverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    offersHosting?: boolean
    serviceRadiusKm?: boolean
    isVerified?: boolean
    isPublicProfile?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    address?: boolean | Caregiver$addressArgs<ExtArgs>
    user?: boolean | UserAuthDefaultArgs<ExtArgs>
    services?: boolean | Caregiver$servicesArgs<ExtArgs>
    _count?: boolean | CaregiverCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caregiver"]>

  export type CaregiverSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    offersHosting?: boolean
    serviceRadiusKm?: boolean
    isVerified?: boolean
    isPublicProfile?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserAuthDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caregiver"]>

  export type CaregiverSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    offersHosting?: boolean
    serviceRadiusKm?: boolean
    isVerified?: boolean
    isPublicProfile?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserAuthDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caregiver"]>

  export type CaregiverSelectScalar = {
    id?: boolean
    userId?: boolean
    offersHosting?: boolean
    serviceRadiusKm?: boolean
    isVerified?: boolean
    isPublicProfile?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CaregiverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "offersHosting" | "serviceRadiusKm" | "isVerified" | "isPublicProfile" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["caregiver"]>
  export type CaregiverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | Caregiver$addressArgs<ExtArgs>
    user?: boolean | UserAuthDefaultArgs<ExtArgs>
    services?: boolean | Caregiver$servicesArgs<ExtArgs>
    _count?: boolean | CaregiverCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CaregiverIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserAuthDefaultArgs<ExtArgs>
  }
  export type CaregiverIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserAuthDefaultArgs<ExtArgs>
  }

  export type $CaregiverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Caregiver"
    objects: {
      address: Prisma.$AddressPayload<ExtArgs> | null
      user: Prisma.$UserAuthPayload<ExtArgs>
      services: Prisma.$ServiceOfferPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      offersHosting: boolean
      serviceRadiusKm: number
      isVerified: boolean
      isPublicProfile: boolean
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["caregiver"]>
    composites: {}
  }

  type CaregiverGetPayload<S extends boolean | null | undefined | CaregiverDefaultArgs> = $Result.GetResult<Prisma.$CaregiverPayload, S>

  type CaregiverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CaregiverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CaregiverCountAggregateInputType | true
    }

  export interface CaregiverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Caregiver'], meta: { name: 'Caregiver' } }
    /**
     * Find zero or one Caregiver that matches the filter.
     * @param {CaregiverFindUniqueArgs} args - Arguments to find a Caregiver
     * @example
     * // Get one Caregiver
     * const caregiver = await prisma.caregiver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CaregiverFindUniqueArgs>(args: SelectSubset<T, CaregiverFindUniqueArgs<ExtArgs>>): Prisma__CaregiverClient<$Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Caregiver that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CaregiverFindUniqueOrThrowArgs} args - Arguments to find a Caregiver
     * @example
     * // Get one Caregiver
     * const caregiver = await prisma.caregiver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CaregiverFindUniqueOrThrowArgs>(args: SelectSubset<T, CaregiverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CaregiverClient<$Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Caregiver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverFindFirstArgs} args - Arguments to find a Caregiver
     * @example
     * // Get one Caregiver
     * const caregiver = await prisma.caregiver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CaregiverFindFirstArgs>(args?: SelectSubset<T, CaregiverFindFirstArgs<ExtArgs>>): Prisma__CaregiverClient<$Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Caregiver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverFindFirstOrThrowArgs} args - Arguments to find a Caregiver
     * @example
     * // Get one Caregiver
     * const caregiver = await prisma.caregiver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CaregiverFindFirstOrThrowArgs>(args?: SelectSubset<T, CaregiverFindFirstOrThrowArgs<ExtArgs>>): Prisma__CaregiverClient<$Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Caregivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Caregivers
     * const caregivers = await prisma.caregiver.findMany()
     * 
     * // Get first 10 Caregivers
     * const caregivers = await prisma.caregiver.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const caregiverWithIdOnly = await prisma.caregiver.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CaregiverFindManyArgs>(args?: SelectSubset<T, CaregiverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Caregiver.
     * @param {CaregiverCreateArgs} args - Arguments to create a Caregiver.
     * @example
     * // Create one Caregiver
     * const Caregiver = await prisma.caregiver.create({
     *   data: {
     *     // ... data to create a Caregiver
     *   }
     * })
     * 
     */
    create<T extends CaregiverCreateArgs>(args: SelectSubset<T, CaregiverCreateArgs<ExtArgs>>): Prisma__CaregiverClient<$Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Caregivers.
     * @param {CaregiverCreateManyArgs} args - Arguments to create many Caregivers.
     * @example
     * // Create many Caregivers
     * const caregiver = await prisma.caregiver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CaregiverCreateManyArgs>(args?: SelectSubset<T, CaregiverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Caregivers and returns the data saved in the database.
     * @param {CaregiverCreateManyAndReturnArgs} args - Arguments to create many Caregivers.
     * @example
     * // Create many Caregivers
     * const caregiver = await prisma.caregiver.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Caregivers and only return the `id`
     * const caregiverWithIdOnly = await prisma.caregiver.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CaregiverCreateManyAndReturnArgs>(args?: SelectSubset<T, CaregiverCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Caregiver.
     * @param {CaregiverDeleteArgs} args - Arguments to delete one Caregiver.
     * @example
     * // Delete one Caregiver
     * const Caregiver = await prisma.caregiver.delete({
     *   where: {
     *     // ... filter to delete one Caregiver
     *   }
     * })
     * 
     */
    delete<T extends CaregiverDeleteArgs>(args: SelectSubset<T, CaregiverDeleteArgs<ExtArgs>>): Prisma__CaregiverClient<$Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Caregiver.
     * @param {CaregiverUpdateArgs} args - Arguments to update one Caregiver.
     * @example
     * // Update one Caregiver
     * const caregiver = await prisma.caregiver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CaregiverUpdateArgs>(args: SelectSubset<T, CaregiverUpdateArgs<ExtArgs>>): Prisma__CaregiverClient<$Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Caregivers.
     * @param {CaregiverDeleteManyArgs} args - Arguments to filter Caregivers to delete.
     * @example
     * // Delete a few Caregivers
     * const { count } = await prisma.caregiver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CaregiverDeleteManyArgs>(args?: SelectSubset<T, CaregiverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Caregivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Caregivers
     * const caregiver = await prisma.caregiver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CaregiverUpdateManyArgs>(args: SelectSubset<T, CaregiverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Caregivers and returns the data updated in the database.
     * @param {CaregiverUpdateManyAndReturnArgs} args - Arguments to update many Caregivers.
     * @example
     * // Update many Caregivers
     * const caregiver = await prisma.caregiver.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Caregivers and only return the `id`
     * const caregiverWithIdOnly = await prisma.caregiver.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CaregiverUpdateManyAndReturnArgs>(args: SelectSubset<T, CaregiverUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Caregiver.
     * @param {CaregiverUpsertArgs} args - Arguments to update or create a Caregiver.
     * @example
     * // Update or create a Caregiver
     * const caregiver = await prisma.caregiver.upsert({
     *   create: {
     *     // ... data to create a Caregiver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Caregiver we want to update
     *   }
     * })
     */
    upsert<T extends CaregiverUpsertArgs>(args: SelectSubset<T, CaregiverUpsertArgs<ExtArgs>>): Prisma__CaregiverClient<$Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Caregivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverCountArgs} args - Arguments to filter Caregivers to count.
     * @example
     * // Count the number of Caregivers
     * const count = await prisma.caregiver.count({
     *   where: {
     *     // ... the filter for the Caregivers we want to count
     *   }
     * })
    **/
    count<T extends CaregiverCountArgs>(
      args?: Subset<T, CaregiverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CaregiverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Caregiver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CaregiverAggregateArgs>(args: Subset<T, CaregiverAggregateArgs>): Prisma.PrismaPromise<GetCaregiverAggregateType<T>>

    /**
     * Group by Caregiver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaregiverGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CaregiverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CaregiverGroupByArgs['orderBy'] }
        : { orderBy?: CaregiverGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CaregiverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaregiverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Caregiver model
   */
  readonly fields: CaregiverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Caregiver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CaregiverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    address<T extends Caregiver$addressArgs<ExtArgs> = {}>(args?: Subset<T, Caregiver$addressArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserAuthDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserAuthDefaultArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    services<T extends Caregiver$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Caregiver$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceOfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Caregiver model
   */
  interface CaregiverFieldRefs {
    readonly id: FieldRef<"Caregiver", 'Int'>
    readonly userId: FieldRef<"Caregiver", 'Int'>
    readonly offersHosting: FieldRef<"Caregiver", 'Boolean'>
    readonly serviceRadiusKm: FieldRef<"Caregiver", 'Float'>
    readonly isVerified: FieldRef<"Caregiver", 'Boolean'>
    readonly isPublicProfile: FieldRef<"Caregiver", 'Boolean'>
    readonly isActive: FieldRef<"Caregiver", 'Boolean'>
    readonly createdAt: FieldRef<"Caregiver", 'DateTime'>
    readonly updatedAt: FieldRef<"Caregiver", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Caregiver findUnique
   */
  export type CaregiverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverInclude<ExtArgs> | null
    /**
     * Filter, which Caregiver to fetch.
     */
    where: CaregiverWhereUniqueInput
  }

  /**
   * Caregiver findUniqueOrThrow
   */
  export type CaregiverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverInclude<ExtArgs> | null
    /**
     * Filter, which Caregiver to fetch.
     */
    where: CaregiverWhereUniqueInput
  }

  /**
   * Caregiver findFirst
   */
  export type CaregiverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverInclude<ExtArgs> | null
    /**
     * Filter, which Caregiver to fetch.
     */
    where?: CaregiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Caregivers to fetch.
     */
    orderBy?: CaregiverOrderByWithRelationInput | CaregiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Caregivers.
     */
    cursor?: CaregiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Caregivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Caregivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Caregivers.
     */
    distinct?: CaregiverScalarFieldEnum | CaregiverScalarFieldEnum[]
  }

  /**
   * Caregiver findFirstOrThrow
   */
  export type CaregiverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverInclude<ExtArgs> | null
    /**
     * Filter, which Caregiver to fetch.
     */
    where?: CaregiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Caregivers to fetch.
     */
    orderBy?: CaregiverOrderByWithRelationInput | CaregiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Caregivers.
     */
    cursor?: CaregiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Caregivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Caregivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Caregivers.
     */
    distinct?: CaregiverScalarFieldEnum | CaregiverScalarFieldEnum[]
  }

  /**
   * Caregiver findMany
   */
  export type CaregiverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverInclude<ExtArgs> | null
    /**
     * Filter, which Caregivers to fetch.
     */
    where?: CaregiverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Caregivers to fetch.
     */
    orderBy?: CaregiverOrderByWithRelationInput | CaregiverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Caregivers.
     */
    cursor?: CaregiverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Caregivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Caregivers.
     */
    skip?: number
    distinct?: CaregiverScalarFieldEnum | CaregiverScalarFieldEnum[]
  }

  /**
   * Caregiver create
   */
  export type CaregiverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverInclude<ExtArgs> | null
    /**
     * The data needed to create a Caregiver.
     */
    data: XOR<CaregiverCreateInput, CaregiverUncheckedCreateInput>
  }

  /**
   * Caregiver createMany
   */
  export type CaregiverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Caregivers.
     */
    data: CaregiverCreateManyInput | CaregiverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Caregiver createManyAndReturn
   */
  export type CaregiverCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null
    /**
     * The data used to create many Caregivers.
     */
    data: CaregiverCreateManyInput | CaregiverCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Caregiver update
   */
  export type CaregiverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverInclude<ExtArgs> | null
    /**
     * The data needed to update a Caregiver.
     */
    data: XOR<CaregiverUpdateInput, CaregiverUncheckedUpdateInput>
    /**
     * Choose, which Caregiver to update.
     */
    where: CaregiverWhereUniqueInput
  }

  /**
   * Caregiver updateMany
   */
  export type CaregiverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Caregivers.
     */
    data: XOR<CaregiverUpdateManyMutationInput, CaregiverUncheckedUpdateManyInput>
    /**
     * Filter which Caregivers to update
     */
    where?: CaregiverWhereInput
    /**
     * Limit how many Caregivers to update.
     */
    limit?: number
  }

  /**
   * Caregiver updateManyAndReturn
   */
  export type CaregiverUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null
    /**
     * The data used to update Caregivers.
     */
    data: XOR<CaregiverUpdateManyMutationInput, CaregiverUncheckedUpdateManyInput>
    /**
     * Filter which Caregivers to update
     */
    where?: CaregiverWhereInput
    /**
     * Limit how many Caregivers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Caregiver upsert
   */
  export type CaregiverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverInclude<ExtArgs> | null
    /**
     * The filter to search for the Caregiver to update in case it exists.
     */
    where: CaregiverWhereUniqueInput
    /**
     * In case the Caregiver found by the `where` argument doesn't exist, create a new Caregiver with this data.
     */
    create: XOR<CaregiverCreateInput, CaregiverUncheckedCreateInput>
    /**
     * In case the Caregiver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CaregiverUpdateInput, CaregiverUncheckedUpdateInput>
  }

  /**
   * Caregiver delete
   */
  export type CaregiverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverInclude<ExtArgs> | null
    /**
     * Filter which Caregiver to delete.
     */
    where: CaregiverWhereUniqueInput
  }

  /**
   * Caregiver deleteMany
   */
  export type CaregiverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Caregivers to delete
     */
    where?: CaregiverWhereInput
    /**
     * Limit how many Caregivers to delete.
     */
    limit?: number
  }

  /**
   * Caregiver.address
   */
  export type Caregiver$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
  }

  /**
   * Caregiver.services
   */
  export type Caregiver$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOffer
     */
    select?: ServiceOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOffer
     */
    omit?: ServiceOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOfferInclude<ExtArgs> | null
    where?: ServiceOfferWhereInput
    orderBy?: ServiceOfferOrderByWithRelationInput | ServiceOfferOrderByWithRelationInput[]
    cursor?: ServiceOfferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceOfferScalarFieldEnum | ServiceOfferScalarFieldEnum[]
  }

  /**
   * Caregiver without action
   */
  export type CaregiverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverInclude<ExtArgs> | null
  }


  /**
   * Model OwnerProfile
   */

  export type AggregateOwnerProfile = {
    _count: OwnerProfileCountAggregateOutputType | null
    _avg: OwnerProfileAvgAggregateOutputType | null
    _sum: OwnerProfileSumAggregateOutputType | null
    _min: OwnerProfileMinAggregateOutputType | null
    _max: OwnerProfileMaxAggregateOutputType | null
  }

  export type OwnerProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    searchRadiusKm: number | null
  }

  export type OwnerProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
    searchRadiusKm: number | null
  }

  export type OwnerProfileMinAggregateOutputType = {
    id: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    searchRadiusKm: number | null
    phone: string | null
  }

  export type OwnerProfileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    searchRadiusKm: number | null
    phone: string | null
  }

  export type OwnerProfileCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    updatedAt: number
    searchRadiusKm: number
    phone: number
    _all: number
  }


  export type OwnerProfileAvgAggregateInputType = {
    id?: true
    userId?: true
    searchRadiusKm?: true
  }

  export type OwnerProfileSumAggregateInputType = {
    id?: true
    userId?: true
    searchRadiusKm?: true
  }

  export type OwnerProfileMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    searchRadiusKm?: true
    phone?: true
  }

  export type OwnerProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    searchRadiusKm?: true
    phone?: true
  }

  export type OwnerProfileCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    searchRadiusKm?: true
    phone?: true
    _all?: true
  }

  export type OwnerProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OwnerProfile to aggregate.
     */
    where?: OwnerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OwnerProfiles to fetch.
     */
    orderBy?: OwnerProfileOrderByWithRelationInput | OwnerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OwnerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OwnerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OwnerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OwnerProfiles
    **/
    _count?: true | OwnerProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OwnerProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OwnerProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OwnerProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OwnerProfileMaxAggregateInputType
  }

  export type GetOwnerProfileAggregateType<T extends OwnerProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateOwnerProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOwnerProfile[P]>
      : GetScalarType<T[P], AggregateOwnerProfile[P]>
  }




  export type OwnerProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OwnerProfileWhereInput
    orderBy?: OwnerProfileOrderByWithAggregationInput | OwnerProfileOrderByWithAggregationInput[]
    by: OwnerProfileScalarFieldEnum[] | OwnerProfileScalarFieldEnum
    having?: OwnerProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OwnerProfileCountAggregateInputType | true
    _avg?: OwnerProfileAvgAggregateInputType
    _sum?: OwnerProfileSumAggregateInputType
    _min?: OwnerProfileMinAggregateInputType
    _max?: OwnerProfileMaxAggregateInputType
  }

  export type OwnerProfileGroupByOutputType = {
    id: number
    userId: number
    createdAt: Date
    updatedAt: Date
    searchRadiusKm: number | null
    phone: string | null
    _count: OwnerProfileCountAggregateOutputType | null
    _avg: OwnerProfileAvgAggregateOutputType | null
    _sum: OwnerProfileSumAggregateOutputType | null
    _min: OwnerProfileMinAggregateOutputType | null
    _max: OwnerProfileMaxAggregateOutputType | null
  }

  type GetOwnerProfileGroupByPayload<T extends OwnerProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OwnerProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OwnerProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OwnerProfileGroupByOutputType[P]>
            : GetScalarType<T[P], OwnerProfileGroupByOutputType[P]>
        }
      >
    >


  export type OwnerProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    searchRadiusKm?: boolean
    phone?: boolean
    address?: boolean | OwnerProfile$addressArgs<ExtArgs>
    user?: boolean | UserAuthDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ownerProfile"]>

  export type OwnerProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    searchRadiusKm?: boolean
    phone?: boolean
    user?: boolean | UserAuthDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ownerProfile"]>

  export type OwnerProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    searchRadiusKm?: boolean
    phone?: boolean
    user?: boolean | UserAuthDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ownerProfile"]>

  export type OwnerProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    searchRadiusKm?: boolean
    phone?: boolean
  }

  export type OwnerProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "createdAt" | "updatedAt" | "searchRadiusKm" | "phone", ExtArgs["result"]["ownerProfile"]>
  export type OwnerProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | OwnerProfile$addressArgs<ExtArgs>
    user?: boolean | UserAuthDefaultArgs<ExtArgs>
  }
  export type OwnerProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserAuthDefaultArgs<ExtArgs>
  }
  export type OwnerProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserAuthDefaultArgs<ExtArgs>
  }

  export type $OwnerProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OwnerProfile"
    objects: {
      address: Prisma.$AddressPayload<ExtArgs> | null
      user: Prisma.$UserAuthPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      createdAt: Date
      updatedAt: Date
      searchRadiusKm: number | null
      phone: string | null
    }, ExtArgs["result"]["ownerProfile"]>
    composites: {}
  }

  type OwnerProfileGetPayload<S extends boolean | null | undefined | OwnerProfileDefaultArgs> = $Result.GetResult<Prisma.$OwnerProfilePayload, S>

  type OwnerProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OwnerProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OwnerProfileCountAggregateInputType | true
    }

  export interface OwnerProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OwnerProfile'], meta: { name: 'OwnerProfile' } }
    /**
     * Find zero or one OwnerProfile that matches the filter.
     * @param {OwnerProfileFindUniqueArgs} args - Arguments to find a OwnerProfile
     * @example
     * // Get one OwnerProfile
     * const ownerProfile = await prisma.ownerProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OwnerProfileFindUniqueArgs>(args: SelectSubset<T, OwnerProfileFindUniqueArgs<ExtArgs>>): Prisma__OwnerProfileClient<$Result.GetResult<Prisma.$OwnerProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OwnerProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OwnerProfileFindUniqueOrThrowArgs} args - Arguments to find a OwnerProfile
     * @example
     * // Get one OwnerProfile
     * const ownerProfile = await prisma.ownerProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OwnerProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, OwnerProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OwnerProfileClient<$Result.GetResult<Prisma.$OwnerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OwnerProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerProfileFindFirstArgs} args - Arguments to find a OwnerProfile
     * @example
     * // Get one OwnerProfile
     * const ownerProfile = await prisma.ownerProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OwnerProfileFindFirstArgs>(args?: SelectSubset<T, OwnerProfileFindFirstArgs<ExtArgs>>): Prisma__OwnerProfileClient<$Result.GetResult<Prisma.$OwnerProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OwnerProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerProfileFindFirstOrThrowArgs} args - Arguments to find a OwnerProfile
     * @example
     * // Get one OwnerProfile
     * const ownerProfile = await prisma.ownerProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OwnerProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, OwnerProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__OwnerProfileClient<$Result.GetResult<Prisma.$OwnerProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OwnerProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OwnerProfiles
     * const ownerProfiles = await prisma.ownerProfile.findMany()
     * 
     * // Get first 10 OwnerProfiles
     * const ownerProfiles = await prisma.ownerProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ownerProfileWithIdOnly = await prisma.ownerProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OwnerProfileFindManyArgs>(args?: SelectSubset<T, OwnerProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OwnerProfile.
     * @param {OwnerProfileCreateArgs} args - Arguments to create a OwnerProfile.
     * @example
     * // Create one OwnerProfile
     * const OwnerProfile = await prisma.ownerProfile.create({
     *   data: {
     *     // ... data to create a OwnerProfile
     *   }
     * })
     * 
     */
    create<T extends OwnerProfileCreateArgs>(args: SelectSubset<T, OwnerProfileCreateArgs<ExtArgs>>): Prisma__OwnerProfileClient<$Result.GetResult<Prisma.$OwnerProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OwnerProfiles.
     * @param {OwnerProfileCreateManyArgs} args - Arguments to create many OwnerProfiles.
     * @example
     * // Create many OwnerProfiles
     * const ownerProfile = await prisma.ownerProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OwnerProfileCreateManyArgs>(args?: SelectSubset<T, OwnerProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OwnerProfiles and returns the data saved in the database.
     * @param {OwnerProfileCreateManyAndReturnArgs} args - Arguments to create many OwnerProfiles.
     * @example
     * // Create many OwnerProfiles
     * const ownerProfile = await prisma.ownerProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OwnerProfiles and only return the `id`
     * const ownerProfileWithIdOnly = await prisma.ownerProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OwnerProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, OwnerProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OwnerProfile.
     * @param {OwnerProfileDeleteArgs} args - Arguments to delete one OwnerProfile.
     * @example
     * // Delete one OwnerProfile
     * const OwnerProfile = await prisma.ownerProfile.delete({
     *   where: {
     *     // ... filter to delete one OwnerProfile
     *   }
     * })
     * 
     */
    delete<T extends OwnerProfileDeleteArgs>(args: SelectSubset<T, OwnerProfileDeleteArgs<ExtArgs>>): Prisma__OwnerProfileClient<$Result.GetResult<Prisma.$OwnerProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OwnerProfile.
     * @param {OwnerProfileUpdateArgs} args - Arguments to update one OwnerProfile.
     * @example
     * // Update one OwnerProfile
     * const ownerProfile = await prisma.ownerProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OwnerProfileUpdateArgs>(args: SelectSubset<T, OwnerProfileUpdateArgs<ExtArgs>>): Prisma__OwnerProfileClient<$Result.GetResult<Prisma.$OwnerProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OwnerProfiles.
     * @param {OwnerProfileDeleteManyArgs} args - Arguments to filter OwnerProfiles to delete.
     * @example
     * // Delete a few OwnerProfiles
     * const { count } = await prisma.ownerProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OwnerProfileDeleteManyArgs>(args?: SelectSubset<T, OwnerProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OwnerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OwnerProfiles
     * const ownerProfile = await prisma.ownerProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OwnerProfileUpdateManyArgs>(args: SelectSubset<T, OwnerProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OwnerProfiles and returns the data updated in the database.
     * @param {OwnerProfileUpdateManyAndReturnArgs} args - Arguments to update many OwnerProfiles.
     * @example
     * // Update many OwnerProfiles
     * const ownerProfile = await prisma.ownerProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OwnerProfiles and only return the `id`
     * const ownerProfileWithIdOnly = await prisma.ownerProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OwnerProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, OwnerProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OwnerProfile.
     * @param {OwnerProfileUpsertArgs} args - Arguments to update or create a OwnerProfile.
     * @example
     * // Update or create a OwnerProfile
     * const ownerProfile = await prisma.ownerProfile.upsert({
     *   create: {
     *     // ... data to create a OwnerProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OwnerProfile we want to update
     *   }
     * })
     */
    upsert<T extends OwnerProfileUpsertArgs>(args: SelectSubset<T, OwnerProfileUpsertArgs<ExtArgs>>): Prisma__OwnerProfileClient<$Result.GetResult<Prisma.$OwnerProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OwnerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerProfileCountArgs} args - Arguments to filter OwnerProfiles to count.
     * @example
     * // Count the number of OwnerProfiles
     * const count = await prisma.ownerProfile.count({
     *   where: {
     *     // ... the filter for the OwnerProfiles we want to count
     *   }
     * })
    **/
    count<T extends OwnerProfileCountArgs>(
      args?: Subset<T, OwnerProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OwnerProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OwnerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OwnerProfileAggregateArgs>(args: Subset<T, OwnerProfileAggregateArgs>): Prisma.PrismaPromise<GetOwnerProfileAggregateType<T>>

    /**
     * Group by OwnerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OwnerProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OwnerProfileGroupByArgs['orderBy'] }
        : { orderBy?: OwnerProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OwnerProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOwnerProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OwnerProfile model
   */
  readonly fields: OwnerProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OwnerProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OwnerProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    address<T extends OwnerProfile$addressArgs<ExtArgs> = {}>(args?: Subset<T, OwnerProfile$addressArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserAuthDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserAuthDefaultArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OwnerProfile model
   */
  interface OwnerProfileFieldRefs {
    readonly id: FieldRef<"OwnerProfile", 'Int'>
    readonly userId: FieldRef<"OwnerProfile", 'Int'>
    readonly createdAt: FieldRef<"OwnerProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"OwnerProfile", 'DateTime'>
    readonly searchRadiusKm: FieldRef<"OwnerProfile", 'Float'>
    readonly phone: FieldRef<"OwnerProfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OwnerProfile findUnique
   */
  export type OwnerProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerProfile
     */
    select?: OwnerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerProfile
     */
    omit?: OwnerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerProfileInclude<ExtArgs> | null
    /**
     * Filter, which OwnerProfile to fetch.
     */
    where: OwnerProfileWhereUniqueInput
  }

  /**
   * OwnerProfile findUniqueOrThrow
   */
  export type OwnerProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerProfile
     */
    select?: OwnerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerProfile
     */
    omit?: OwnerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerProfileInclude<ExtArgs> | null
    /**
     * Filter, which OwnerProfile to fetch.
     */
    where: OwnerProfileWhereUniqueInput
  }

  /**
   * OwnerProfile findFirst
   */
  export type OwnerProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerProfile
     */
    select?: OwnerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerProfile
     */
    omit?: OwnerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerProfileInclude<ExtArgs> | null
    /**
     * Filter, which OwnerProfile to fetch.
     */
    where?: OwnerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OwnerProfiles to fetch.
     */
    orderBy?: OwnerProfileOrderByWithRelationInput | OwnerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OwnerProfiles.
     */
    cursor?: OwnerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OwnerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OwnerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OwnerProfiles.
     */
    distinct?: OwnerProfileScalarFieldEnum | OwnerProfileScalarFieldEnum[]
  }

  /**
   * OwnerProfile findFirstOrThrow
   */
  export type OwnerProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerProfile
     */
    select?: OwnerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerProfile
     */
    omit?: OwnerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerProfileInclude<ExtArgs> | null
    /**
     * Filter, which OwnerProfile to fetch.
     */
    where?: OwnerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OwnerProfiles to fetch.
     */
    orderBy?: OwnerProfileOrderByWithRelationInput | OwnerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OwnerProfiles.
     */
    cursor?: OwnerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OwnerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OwnerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OwnerProfiles.
     */
    distinct?: OwnerProfileScalarFieldEnum | OwnerProfileScalarFieldEnum[]
  }

  /**
   * OwnerProfile findMany
   */
  export type OwnerProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerProfile
     */
    select?: OwnerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerProfile
     */
    omit?: OwnerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerProfileInclude<ExtArgs> | null
    /**
     * Filter, which OwnerProfiles to fetch.
     */
    where?: OwnerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OwnerProfiles to fetch.
     */
    orderBy?: OwnerProfileOrderByWithRelationInput | OwnerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OwnerProfiles.
     */
    cursor?: OwnerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OwnerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OwnerProfiles.
     */
    skip?: number
    distinct?: OwnerProfileScalarFieldEnum | OwnerProfileScalarFieldEnum[]
  }

  /**
   * OwnerProfile create
   */
  export type OwnerProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerProfile
     */
    select?: OwnerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerProfile
     */
    omit?: OwnerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a OwnerProfile.
     */
    data: XOR<OwnerProfileCreateInput, OwnerProfileUncheckedCreateInput>
  }

  /**
   * OwnerProfile createMany
   */
  export type OwnerProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OwnerProfiles.
     */
    data: OwnerProfileCreateManyInput | OwnerProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OwnerProfile createManyAndReturn
   */
  export type OwnerProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerProfile
     */
    select?: OwnerProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerProfile
     */
    omit?: OwnerProfileOmit<ExtArgs> | null
    /**
     * The data used to create many OwnerProfiles.
     */
    data: OwnerProfileCreateManyInput | OwnerProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OwnerProfile update
   */
  export type OwnerProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerProfile
     */
    select?: OwnerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerProfile
     */
    omit?: OwnerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a OwnerProfile.
     */
    data: XOR<OwnerProfileUpdateInput, OwnerProfileUncheckedUpdateInput>
    /**
     * Choose, which OwnerProfile to update.
     */
    where: OwnerProfileWhereUniqueInput
  }

  /**
   * OwnerProfile updateMany
   */
  export type OwnerProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OwnerProfiles.
     */
    data: XOR<OwnerProfileUpdateManyMutationInput, OwnerProfileUncheckedUpdateManyInput>
    /**
     * Filter which OwnerProfiles to update
     */
    where?: OwnerProfileWhereInput
    /**
     * Limit how many OwnerProfiles to update.
     */
    limit?: number
  }

  /**
   * OwnerProfile updateManyAndReturn
   */
  export type OwnerProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerProfile
     */
    select?: OwnerProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerProfile
     */
    omit?: OwnerProfileOmit<ExtArgs> | null
    /**
     * The data used to update OwnerProfiles.
     */
    data: XOR<OwnerProfileUpdateManyMutationInput, OwnerProfileUncheckedUpdateManyInput>
    /**
     * Filter which OwnerProfiles to update
     */
    where?: OwnerProfileWhereInput
    /**
     * Limit how many OwnerProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OwnerProfile upsert
   */
  export type OwnerProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerProfile
     */
    select?: OwnerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerProfile
     */
    omit?: OwnerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the OwnerProfile to update in case it exists.
     */
    where: OwnerProfileWhereUniqueInput
    /**
     * In case the OwnerProfile found by the `where` argument doesn't exist, create a new OwnerProfile with this data.
     */
    create: XOR<OwnerProfileCreateInput, OwnerProfileUncheckedCreateInput>
    /**
     * In case the OwnerProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OwnerProfileUpdateInput, OwnerProfileUncheckedUpdateInput>
  }

  /**
   * OwnerProfile delete
   */
  export type OwnerProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerProfile
     */
    select?: OwnerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerProfile
     */
    omit?: OwnerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerProfileInclude<ExtArgs> | null
    /**
     * Filter which OwnerProfile to delete.
     */
    where: OwnerProfileWhereUniqueInput
  }

  /**
   * OwnerProfile deleteMany
   */
  export type OwnerProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OwnerProfiles to delete
     */
    where?: OwnerProfileWhereInput
    /**
     * Limit how many OwnerProfiles to delete.
     */
    limit?: number
  }

  /**
   * OwnerProfile.address
   */
  export type OwnerProfile$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
  }

  /**
   * OwnerProfile without action
   */
  export type OwnerProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerProfile
     */
    select?: OwnerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerProfile
     */
    omit?: OwnerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerProfileInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    serviceOfferId: number | null
    reviewerUserId: number | null
    targetUserId: number | null
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    serviceOfferId: number | null
    reviewerUserId: number | null
    targetUserId: number | null
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    serviceOfferId: number | null
    reviewerUserId: number | null
    targetUserId: number | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    serviceOfferId: number | null
    reviewerUserId: number | null
    targetUserId: number | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    serviceOfferId: number
    reviewerUserId: number
    targetUserId: number
    rating: number
    comment: number
    createdAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    serviceOfferId?: true
    reviewerUserId?: true
    targetUserId?: true
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    serviceOfferId?: true
    reviewerUserId?: true
    targetUserId?: true
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    serviceOfferId?: true
    reviewerUserId?: true
    targetUserId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    serviceOfferId?: true
    reviewerUserId?: true
    targetUserId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    serviceOfferId?: true
    reviewerUserId?: true
    targetUserId?: true
    rating?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    serviceOfferId: number | null
    reviewerUserId: number
    targetUserId: number
    rating: number
    comment: string | null
    createdAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceOfferId?: boolean
    reviewerUserId?: boolean
    targetUserId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    serviceOffer?: boolean | Review$serviceOfferArgs<ExtArgs>
    reviewer?: boolean | UserAuthDefaultArgs<ExtArgs>
    targetUser?: boolean | UserAuthDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceOfferId?: boolean
    reviewerUserId?: boolean
    targetUserId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    serviceOffer?: boolean | Review$serviceOfferArgs<ExtArgs>
    reviewer?: boolean | UserAuthDefaultArgs<ExtArgs>
    targetUser?: boolean | UserAuthDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceOfferId?: boolean
    reviewerUserId?: boolean
    targetUserId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    serviceOffer?: boolean | Review$serviceOfferArgs<ExtArgs>
    reviewer?: boolean | UserAuthDefaultArgs<ExtArgs>
    targetUser?: boolean | UserAuthDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    serviceOfferId?: boolean
    reviewerUserId?: boolean
    targetUserId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serviceOfferId" | "reviewerUserId" | "targetUserId" | "rating" | "comment" | "createdAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    serviceOffer?: boolean | Review$serviceOfferArgs<ExtArgs>
    reviewer?: boolean | UserAuthDefaultArgs<ExtArgs>
    targetUser?: boolean | UserAuthDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    serviceOffer?: boolean | Review$serviceOfferArgs<ExtArgs>
    reviewer?: boolean | UserAuthDefaultArgs<ExtArgs>
    targetUser?: boolean | UserAuthDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    serviceOffer?: boolean | Review$serviceOfferArgs<ExtArgs>
    reviewer?: boolean | UserAuthDefaultArgs<ExtArgs>
    targetUser?: boolean | UserAuthDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      serviceOffer: Prisma.$ServiceOfferPayload<ExtArgs> | null
      reviewer: Prisma.$UserAuthPayload<ExtArgs>
      targetUser: Prisma.$UserAuthPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      serviceOfferId: number | null
      reviewerUserId: number
      targetUserId: number
      rating: number
      comment: string | null
      createdAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    serviceOffer<T extends Review$serviceOfferArgs<ExtArgs> = {}>(args?: Subset<T, Review$serviceOfferArgs<ExtArgs>>): Prisma__ServiceOfferClient<$Result.GetResult<Prisma.$ServiceOfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reviewer<T extends UserAuthDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserAuthDefaultArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    targetUser<T extends UserAuthDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserAuthDefaultArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly serviceOfferId: FieldRef<"Review", 'Int'>
    readonly reviewerUserId: FieldRef<"Review", 'Int'>
    readonly targetUserId: FieldRef<"Review", 'Int'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review.serviceOffer
   */
  export type Review$serviceOfferArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOffer
     */
    select?: ServiceOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOffer
     */
    omit?: ServiceOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOfferInclude<ExtArgs> | null
    where?: ServiceOfferWhereInput
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    id: number | null
  }

  export type ServiceSumAggregateOutputType = {
    id: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    id?: true
  }

  export type ServiceSumAggregateInputType = {
    id?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: number
    name: string
    description: string
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    offers?: boolean | Service$offersArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offers?: boolean | Service$offersArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      offers: Prisma.$ServiceOfferPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    offers<T extends Service$offersArgs<ExtArgs> = {}>(args?: Subset<T, Service$offersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceOfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'Int'>
    readonly name: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.offers
   */
  export type Service$offersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOffer
     */
    select?: ServiceOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOffer
     */
    omit?: ServiceOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOfferInclude<ExtArgs> | null
    where?: ServiceOfferWhereInput
    orderBy?: ServiceOfferOrderByWithRelationInput | ServiceOfferOrderByWithRelationInput[]
    cursor?: ServiceOfferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceOfferScalarFieldEnum | ServiceOfferScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model ServiceOffer
   */

  export type AggregateServiceOffer = {
    _count: ServiceOfferCountAggregateOutputType | null
    _avg: ServiceOfferAvgAggregateOutputType | null
    _sum: ServiceOfferSumAggregateOutputType | null
    _min: ServiceOfferMinAggregateOutputType | null
    _max: ServiceOfferMaxAggregateOutputType | null
  }

  export type ServiceOfferAvgAggregateOutputType = {
    id: number | null
    caregiverId: number | null
    serviceId: number | null
    price: number | null
  }

  export type ServiceOfferSumAggregateOutputType = {
    id: number | null
    caregiverId: number | null
    serviceId: number | null
    price: number | null
  }

  export type ServiceOfferMinAggregateOutputType = {
    id: number | null
    caregiverId: number | null
    serviceId: number | null
    description: string | null
    price: number | null
    isActive: boolean | null
  }

  export type ServiceOfferMaxAggregateOutputType = {
    id: number | null
    caregiverId: number | null
    serviceId: number | null
    description: string | null
    price: number | null
    isActive: boolean | null
  }

  export type ServiceOfferCountAggregateOutputType = {
    id: number
    caregiverId: number
    serviceId: number
    description: number
    price: number
    isActive: number
    _all: number
  }


  export type ServiceOfferAvgAggregateInputType = {
    id?: true
    caregiverId?: true
    serviceId?: true
    price?: true
  }

  export type ServiceOfferSumAggregateInputType = {
    id?: true
    caregiverId?: true
    serviceId?: true
    price?: true
  }

  export type ServiceOfferMinAggregateInputType = {
    id?: true
    caregiverId?: true
    serviceId?: true
    description?: true
    price?: true
    isActive?: true
  }

  export type ServiceOfferMaxAggregateInputType = {
    id?: true
    caregiverId?: true
    serviceId?: true
    description?: true
    price?: true
    isActive?: true
  }

  export type ServiceOfferCountAggregateInputType = {
    id?: true
    caregiverId?: true
    serviceId?: true
    description?: true
    price?: true
    isActive?: true
    _all?: true
  }

  export type ServiceOfferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceOffer to aggregate.
     */
    where?: ServiceOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceOffers to fetch.
     */
    orderBy?: ServiceOfferOrderByWithRelationInput | ServiceOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceOffers
    **/
    _count?: true | ServiceOfferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceOfferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceOfferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceOfferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceOfferMaxAggregateInputType
  }

  export type GetServiceOfferAggregateType<T extends ServiceOfferAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceOffer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceOffer[P]>
      : GetScalarType<T[P], AggregateServiceOffer[P]>
  }




  export type ServiceOfferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceOfferWhereInput
    orderBy?: ServiceOfferOrderByWithAggregationInput | ServiceOfferOrderByWithAggregationInput[]
    by: ServiceOfferScalarFieldEnum[] | ServiceOfferScalarFieldEnum
    having?: ServiceOfferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceOfferCountAggregateInputType | true
    _avg?: ServiceOfferAvgAggregateInputType
    _sum?: ServiceOfferSumAggregateInputType
    _min?: ServiceOfferMinAggregateInputType
    _max?: ServiceOfferMaxAggregateInputType
  }

  export type ServiceOfferGroupByOutputType = {
    id: number
    caregiverId: number
    serviceId: number
    description: string | null
    price: number
    isActive: boolean
    _count: ServiceOfferCountAggregateOutputType | null
    _avg: ServiceOfferAvgAggregateOutputType | null
    _sum: ServiceOfferSumAggregateOutputType | null
    _min: ServiceOfferMinAggregateOutputType | null
    _max: ServiceOfferMaxAggregateOutputType | null
  }

  type GetServiceOfferGroupByPayload<T extends ServiceOfferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceOfferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceOfferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceOfferGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceOfferGroupByOutputType[P]>
        }
      >
    >


  export type ServiceOfferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caregiverId?: boolean
    serviceId?: boolean
    description?: boolean
    price?: boolean
    isActive?: boolean
    caregiver?: boolean | CaregiverDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    reviews?: boolean | ServiceOffer$reviewsArgs<ExtArgs>
    _count?: boolean | ServiceOfferCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceOffer"]>

  export type ServiceOfferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caregiverId?: boolean
    serviceId?: boolean
    description?: boolean
    price?: boolean
    isActive?: boolean
    caregiver?: boolean | CaregiverDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceOffer"]>

  export type ServiceOfferSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caregiverId?: boolean
    serviceId?: boolean
    description?: boolean
    price?: boolean
    isActive?: boolean
    caregiver?: boolean | CaregiverDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceOffer"]>

  export type ServiceOfferSelectScalar = {
    id?: boolean
    caregiverId?: boolean
    serviceId?: boolean
    description?: boolean
    price?: boolean
    isActive?: boolean
  }

  export type ServiceOfferOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "caregiverId" | "serviceId" | "description" | "price" | "isActive", ExtArgs["result"]["serviceOffer"]>
  export type ServiceOfferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caregiver?: boolean | CaregiverDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    reviews?: boolean | ServiceOffer$reviewsArgs<ExtArgs>
    _count?: boolean | ServiceOfferCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceOfferIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caregiver?: boolean | CaregiverDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type ServiceOfferIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caregiver?: boolean | CaregiverDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $ServiceOfferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceOffer"
    objects: {
      caregiver: Prisma.$CaregiverPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      caregiverId: number
      serviceId: number
      description: string | null
      price: number
      isActive: boolean
    }, ExtArgs["result"]["serviceOffer"]>
    composites: {}
  }

  type ServiceOfferGetPayload<S extends boolean | null | undefined | ServiceOfferDefaultArgs> = $Result.GetResult<Prisma.$ServiceOfferPayload, S>

  type ServiceOfferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceOfferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceOfferCountAggregateInputType | true
    }

  export interface ServiceOfferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceOffer'], meta: { name: 'ServiceOffer' } }
    /**
     * Find zero or one ServiceOffer that matches the filter.
     * @param {ServiceOfferFindUniqueArgs} args - Arguments to find a ServiceOffer
     * @example
     * // Get one ServiceOffer
     * const serviceOffer = await prisma.serviceOffer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceOfferFindUniqueArgs>(args: SelectSubset<T, ServiceOfferFindUniqueArgs<ExtArgs>>): Prisma__ServiceOfferClient<$Result.GetResult<Prisma.$ServiceOfferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceOffer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceOfferFindUniqueOrThrowArgs} args - Arguments to find a ServiceOffer
     * @example
     * // Get one ServiceOffer
     * const serviceOffer = await prisma.serviceOffer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceOfferFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceOfferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceOfferClient<$Result.GetResult<Prisma.$ServiceOfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceOffer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOfferFindFirstArgs} args - Arguments to find a ServiceOffer
     * @example
     * // Get one ServiceOffer
     * const serviceOffer = await prisma.serviceOffer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceOfferFindFirstArgs>(args?: SelectSubset<T, ServiceOfferFindFirstArgs<ExtArgs>>): Prisma__ServiceOfferClient<$Result.GetResult<Prisma.$ServiceOfferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceOffer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOfferFindFirstOrThrowArgs} args - Arguments to find a ServiceOffer
     * @example
     * // Get one ServiceOffer
     * const serviceOffer = await prisma.serviceOffer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceOfferFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceOfferFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceOfferClient<$Result.GetResult<Prisma.$ServiceOfferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceOffers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOfferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceOffers
     * const serviceOffers = await prisma.serviceOffer.findMany()
     * 
     * // Get first 10 ServiceOffers
     * const serviceOffers = await prisma.serviceOffer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceOfferWithIdOnly = await prisma.serviceOffer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceOfferFindManyArgs>(args?: SelectSubset<T, ServiceOfferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceOfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceOffer.
     * @param {ServiceOfferCreateArgs} args - Arguments to create a ServiceOffer.
     * @example
     * // Create one ServiceOffer
     * const ServiceOffer = await prisma.serviceOffer.create({
     *   data: {
     *     // ... data to create a ServiceOffer
     *   }
     * })
     * 
     */
    create<T extends ServiceOfferCreateArgs>(args: SelectSubset<T, ServiceOfferCreateArgs<ExtArgs>>): Prisma__ServiceOfferClient<$Result.GetResult<Prisma.$ServiceOfferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceOffers.
     * @param {ServiceOfferCreateManyArgs} args - Arguments to create many ServiceOffers.
     * @example
     * // Create many ServiceOffers
     * const serviceOffer = await prisma.serviceOffer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceOfferCreateManyArgs>(args?: SelectSubset<T, ServiceOfferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceOffers and returns the data saved in the database.
     * @param {ServiceOfferCreateManyAndReturnArgs} args - Arguments to create many ServiceOffers.
     * @example
     * // Create many ServiceOffers
     * const serviceOffer = await prisma.serviceOffer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceOffers and only return the `id`
     * const serviceOfferWithIdOnly = await prisma.serviceOffer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceOfferCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceOfferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceOfferPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServiceOffer.
     * @param {ServiceOfferDeleteArgs} args - Arguments to delete one ServiceOffer.
     * @example
     * // Delete one ServiceOffer
     * const ServiceOffer = await prisma.serviceOffer.delete({
     *   where: {
     *     // ... filter to delete one ServiceOffer
     *   }
     * })
     * 
     */
    delete<T extends ServiceOfferDeleteArgs>(args: SelectSubset<T, ServiceOfferDeleteArgs<ExtArgs>>): Prisma__ServiceOfferClient<$Result.GetResult<Prisma.$ServiceOfferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceOffer.
     * @param {ServiceOfferUpdateArgs} args - Arguments to update one ServiceOffer.
     * @example
     * // Update one ServiceOffer
     * const serviceOffer = await prisma.serviceOffer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceOfferUpdateArgs>(args: SelectSubset<T, ServiceOfferUpdateArgs<ExtArgs>>): Prisma__ServiceOfferClient<$Result.GetResult<Prisma.$ServiceOfferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceOffers.
     * @param {ServiceOfferDeleteManyArgs} args - Arguments to filter ServiceOffers to delete.
     * @example
     * // Delete a few ServiceOffers
     * const { count } = await prisma.serviceOffer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceOfferDeleteManyArgs>(args?: SelectSubset<T, ServiceOfferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceOffers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOfferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceOffers
     * const serviceOffer = await prisma.serviceOffer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceOfferUpdateManyArgs>(args: SelectSubset<T, ServiceOfferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceOffers and returns the data updated in the database.
     * @param {ServiceOfferUpdateManyAndReturnArgs} args - Arguments to update many ServiceOffers.
     * @example
     * // Update many ServiceOffers
     * const serviceOffer = await prisma.serviceOffer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServiceOffers and only return the `id`
     * const serviceOfferWithIdOnly = await prisma.serviceOffer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceOfferUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceOfferUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceOfferPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServiceOffer.
     * @param {ServiceOfferUpsertArgs} args - Arguments to update or create a ServiceOffer.
     * @example
     * // Update or create a ServiceOffer
     * const serviceOffer = await prisma.serviceOffer.upsert({
     *   create: {
     *     // ... data to create a ServiceOffer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceOffer we want to update
     *   }
     * })
     */
    upsert<T extends ServiceOfferUpsertArgs>(args: SelectSubset<T, ServiceOfferUpsertArgs<ExtArgs>>): Prisma__ServiceOfferClient<$Result.GetResult<Prisma.$ServiceOfferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceOffers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOfferCountArgs} args - Arguments to filter ServiceOffers to count.
     * @example
     * // Count the number of ServiceOffers
     * const count = await prisma.serviceOffer.count({
     *   where: {
     *     // ... the filter for the ServiceOffers we want to count
     *   }
     * })
    **/
    count<T extends ServiceOfferCountArgs>(
      args?: Subset<T, ServiceOfferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceOfferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceOffer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOfferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceOfferAggregateArgs>(args: Subset<T, ServiceOfferAggregateArgs>): Prisma.PrismaPromise<GetServiceOfferAggregateType<T>>

    /**
     * Group by ServiceOffer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOfferGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceOfferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceOfferGroupByArgs['orderBy'] }
        : { orderBy?: ServiceOfferGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceOfferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceOfferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceOffer model
   */
  readonly fields: ServiceOfferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceOffer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceOfferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    caregiver<T extends CaregiverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CaregiverDefaultArgs<ExtArgs>>): Prisma__CaregiverClient<$Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviews<T extends ServiceOffer$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, ServiceOffer$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceOffer model
   */
  interface ServiceOfferFieldRefs {
    readonly id: FieldRef<"ServiceOffer", 'Int'>
    readonly caregiverId: FieldRef<"ServiceOffer", 'Int'>
    readonly serviceId: FieldRef<"ServiceOffer", 'Int'>
    readonly description: FieldRef<"ServiceOffer", 'String'>
    readonly price: FieldRef<"ServiceOffer", 'Float'>
    readonly isActive: FieldRef<"ServiceOffer", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ServiceOffer findUnique
   */
  export type ServiceOfferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOffer
     */
    select?: ServiceOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOffer
     */
    omit?: ServiceOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOfferInclude<ExtArgs> | null
    /**
     * Filter, which ServiceOffer to fetch.
     */
    where: ServiceOfferWhereUniqueInput
  }

  /**
   * ServiceOffer findUniqueOrThrow
   */
  export type ServiceOfferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOffer
     */
    select?: ServiceOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOffer
     */
    omit?: ServiceOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOfferInclude<ExtArgs> | null
    /**
     * Filter, which ServiceOffer to fetch.
     */
    where: ServiceOfferWhereUniqueInput
  }

  /**
   * ServiceOffer findFirst
   */
  export type ServiceOfferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOffer
     */
    select?: ServiceOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOffer
     */
    omit?: ServiceOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOfferInclude<ExtArgs> | null
    /**
     * Filter, which ServiceOffer to fetch.
     */
    where?: ServiceOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceOffers to fetch.
     */
    orderBy?: ServiceOfferOrderByWithRelationInput | ServiceOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceOffers.
     */
    cursor?: ServiceOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceOffers.
     */
    distinct?: ServiceOfferScalarFieldEnum | ServiceOfferScalarFieldEnum[]
  }

  /**
   * ServiceOffer findFirstOrThrow
   */
  export type ServiceOfferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOffer
     */
    select?: ServiceOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOffer
     */
    omit?: ServiceOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOfferInclude<ExtArgs> | null
    /**
     * Filter, which ServiceOffer to fetch.
     */
    where?: ServiceOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceOffers to fetch.
     */
    orderBy?: ServiceOfferOrderByWithRelationInput | ServiceOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceOffers.
     */
    cursor?: ServiceOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceOffers.
     */
    distinct?: ServiceOfferScalarFieldEnum | ServiceOfferScalarFieldEnum[]
  }

  /**
   * ServiceOffer findMany
   */
  export type ServiceOfferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOffer
     */
    select?: ServiceOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOffer
     */
    omit?: ServiceOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOfferInclude<ExtArgs> | null
    /**
     * Filter, which ServiceOffers to fetch.
     */
    where?: ServiceOfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceOffers to fetch.
     */
    orderBy?: ServiceOfferOrderByWithRelationInput | ServiceOfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceOffers.
     */
    cursor?: ServiceOfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceOffers.
     */
    skip?: number
    distinct?: ServiceOfferScalarFieldEnum | ServiceOfferScalarFieldEnum[]
  }

  /**
   * ServiceOffer create
   */
  export type ServiceOfferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOffer
     */
    select?: ServiceOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOffer
     */
    omit?: ServiceOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOfferInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceOffer.
     */
    data: XOR<ServiceOfferCreateInput, ServiceOfferUncheckedCreateInput>
  }

  /**
   * ServiceOffer createMany
   */
  export type ServiceOfferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceOffers.
     */
    data: ServiceOfferCreateManyInput | ServiceOfferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceOffer createManyAndReturn
   */
  export type ServiceOfferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOffer
     */
    select?: ServiceOfferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOffer
     */
    omit?: ServiceOfferOmit<ExtArgs> | null
    /**
     * The data used to create many ServiceOffers.
     */
    data: ServiceOfferCreateManyInput | ServiceOfferCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOfferIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceOffer update
   */
  export type ServiceOfferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOffer
     */
    select?: ServiceOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOffer
     */
    omit?: ServiceOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOfferInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceOffer.
     */
    data: XOR<ServiceOfferUpdateInput, ServiceOfferUncheckedUpdateInput>
    /**
     * Choose, which ServiceOffer to update.
     */
    where: ServiceOfferWhereUniqueInput
  }

  /**
   * ServiceOffer updateMany
   */
  export type ServiceOfferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceOffers.
     */
    data: XOR<ServiceOfferUpdateManyMutationInput, ServiceOfferUncheckedUpdateManyInput>
    /**
     * Filter which ServiceOffers to update
     */
    where?: ServiceOfferWhereInput
    /**
     * Limit how many ServiceOffers to update.
     */
    limit?: number
  }

  /**
   * ServiceOffer updateManyAndReturn
   */
  export type ServiceOfferUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOffer
     */
    select?: ServiceOfferSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOffer
     */
    omit?: ServiceOfferOmit<ExtArgs> | null
    /**
     * The data used to update ServiceOffers.
     */
    data: XOR<ServiceOfferUpdateManyMutationInput, ServiceOfferUncheckedUpdateManyInput>
    /**
     * Filter which ServiceOffers to update
     */
    where?: ServiceOfferWhereInput
    /**
     * Limit how many ServiceOffers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOfferIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceOffer upsert
   */
  export type ServiceOfferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOffer
     */
    select?: ServiceOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOffer
     */
    omit?: ServiceOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOfferInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceOffer to update in case it exists.
     */
    where: ServiceOfferWhereUniqueInput
    /**
     * In case the ServiceOffer found by the `where` argument doesn't exist, create a new ServiceOffer with this data.
     */
    create: XOR<ServiceOfferCreateInput, ServiceOfferUncheckedCreateInput>
    /**
     * In case the ServiceOffer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceOfferUpdateInput, ServiceOfferUncheckedUpdateInput>
  }

  /**
   * ServiceOffer delete
   */
  export type ServiceOfferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOffer
     */
    select?: ServiceOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOffer
     */
    omit?: ServiceOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOfferInclude<ExtArgs> | null
    /**
     * Filter which ServiceOffer to delete.
     */
    where: ServiceOfferWhereUniqueInput
  }

  /**
   * ServiceOffer deleteMany
   */
  export type ServiceOfferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceOffers to delete
     */
    where?: ServiceOfferWhereInput
    /**
     * Limit how many ServiceOffers to delete.
     */
    limit?: number
  }

  /**
   * ServiceOffer.reviews
   */
  export type ServiceOffer$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * ServiceOffer without action
   */
  export type ServiceOfferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOffer
     */
    select?: ServiceOfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOffer
     */
    omit?: ServiceOfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOfferInclude<ExtArgs> | null
  }


  /**
   * Model UserAuth
   */

  export type AggregateUserAuth = {
    _count: UserAuthCountAggregateOutputType | null
    _avg: UserAuthAvgAggregateOutputType | null
    _sum: UserAuthSumAggregateOutputType | null
    _min: UserAuthMinAggregateOutputType | null
    _max: UserAuthMaxAggregateOutputType | null
  }

  export type UserAuthAvgAggregateOutputType = {
    id: number | null
  }

  export type UserAuthSumAggregateOutputType = {
    id: number | null
  }

  export type UserAuthMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    passwordHash: string | null
    isActive: boolean | null
    profilePhotoUrl: string | null
    birthDate: Date | null
    cpf: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserAuthMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    passwordHash: string | null
    isActive: boolean | null
    profilePhotoUrl: string | null
    birthDate: Date | null
    cpf: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserAuthCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    isActive: number
    profilePhotoUrl: number
    birthDate: number
    cpf: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAuthAvgAggregateInputType = {
    id?: true
  }

  export type UserAuthSumAggregateInputType = {
    id?: true
  }

  export type UserAuthMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    isActive?: true
    profilePhotoUrl?: true
    birthDate?: true
    cpf?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserAuthMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    isActive?: true
    profilePhotoUrl?: true
    birthDate?: true
    cpf?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserAuthCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    isActive?: true
    profilePhotoUrl?: true
    birthDate?: true
    cpf?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAuthAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAuth to aggregate.
     */
    where?: UserAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAuths to fetch.
     */
    orderBy?: UserAuthOrderByWithRelationInput | UserAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAuths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAuths
    **/
    _count?: true | UserAuthCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAuthAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserAuthSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAuthMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAuthMaxAggregateInputType
  }

  export type GetUserAuthAggregateType<T extends UserAuthAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAuth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAuth[P]>
      : GetScalarType<T[P], AggregateUserAuth[P]>
  }




  export type UserAuthGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAuthWhereInput
    orderBy?: UserAuthOrderByWithAggregationInput | UserAuthOrderByWithAggregationInput[]
    by: UserAuthScalarFieldEnum[] | UserAuthScalarFieldEnum
    having?: UserAuthScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAuthCountAggregateInputType | true
    _avg?: UserAuthAvgAggregateInputType
    _sum?: UserAuthSumAggregateInputType
    _min?: UserAuthMinAggregateInputType
    _max?: UserAuthMaxAggregateInputType
  }

  export type UserAuthGroupByOutputType = {
    id: number
    name: string
    email: string
    passwordHash: string
    isActive: boolean
    profilePhotoUrl: string | null
    birthDate: Date
    cpf: string
    createdAt: Date
    updatedAt: Date
    _count: UserAuthCountAggregateOutputType | null
    _avg: UserAuthAvgAggregateOutputType | null
    _sum: UserAuthSumAggregateOutputType | null
    _min: UserAuthMinAggregateOutputType | null
    _max: UserAuthMaxAggregateOutputType | null
  }

  type GetUserAuthGroupByPayload<T extends UserAuthGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAuthGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAuthGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAuthGroupByOutputType[P]>
            : GetScalarType<T[P], UserAuthGroupByOutputType[P]>
        }
      >
    >


  export type UserAuthSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    isActive?: boolean
    profilePhotoUrl?: boolean
    birthDate?: boolean
    cpf?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerProfile?: boolean | UserAuth$ownerProfileArgs<ExtArgs>
    caregiver?: boolean | UserAuth$caregiverArgs<ExtArgs>
    refreshTokens?: boolean | UserAuth$refreshTokensArgs<ExtArgs>
    reviewsGiven?: boolean | UserAuth$reviewsGivenArgs<ExtArgs>
    reviewsReceived?: boolean | UserAuth$reviewsReceivedArgs<ExtArgs>
    _count?: boolean | UserAuthCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAuth"]>

  export type UserAuthSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    isActive?: boolean
    profilePhotoUrl?: boolean
    birthDate?: boolean
    cpf?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userAuth"]>

  export type UserAuthSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    isActive?: boolean
    profilePhotoUrl?: boolean
    birthDate?: boolean
    cpf?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userAuth"]>

  export type UserAuthSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    isActive?: boolean
    profilePhotoUrl?: boolean
    birthDate?: boolean
    cpf?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserAuthOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "isActive" | "profilePhotoUrl" | "birthDate" | "cpf" | "createdAt" | "updatedAt", ExtArgs["result"]["userAuth"]>
  export type UserAuthInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownerProfile?: boolean | UserAuth$ownerProfileArgs<ExtArgs>
    caregiver?: boolean | UserAuth$caregiverArgs<ExtArgs>
    refreshTokens?: boolean | UserAuth$refreshTokensArgs<ExtArgs>
    reviewsGiven?: boolean | UserAuth$reviewsGivenArgs<ExtArgs>
    reviewsReceived?: boolean | UserAuth$reviewsReceivedArgs<ExtArgs>
    _count?: boolean | UserAuthCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserAuthIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserAuthIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserAuthPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAuth"
    objects: {
      ownerProfile: Prisma.$OwnerProfilePayload<ExtArgs> | null
      caregiver: Prisma.$CaregiverPayload<ExtArgs> | null
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
      reviewsGiven: Prisma.$ReviewPayload<ExtArgs>[]
      reviewsReceived: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      passwordHash: string
      isActive: boolean
      profilePhotoUrl: string | null
      birthDate: Date
      cpf: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userAuth"]>
    composites: {}
  }

  type UserAuthGetPayload<S extends boolean | null | undefined | UserAuthDefaultArgs> = $Result.GetResult<Prisma.$UserAuthPayload, S>

  type UserAuthCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAuthFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAuthCountAggregateInputType | true
    }

  export interface UserAuthDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAuth'], meta: { name: 'UserAuth' } }
    /**
     * Find zero or one UserAuth that matches the filter.
     * @param {UserAuthFindUniqueArgs} args - Arguments to find a UserAuth
     * @example
     * // Get one UserAuth
     * const userAuth = await prisma.userAuth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAuthFindUniqueArgs>(args: SelectSubset<T, UserAuthFindUniqueArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAuth that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAuthFindUniqueOrThrowArgs} args - Arguments to find a UserAuth
     * @example
     * // Get one UserAuth
     * const userAuth = await prisma.userAuth.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAuthFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAuthFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAuth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthFindFirstArgs} args - Arguments to find a UserAuth
     * @example
     * // Get one UserAuth
     * const userAuth = await prisma.userAuth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAuthFindFirstArgs>(args?: SelectSubset<T, UserAuthFindFirstArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAuth that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthFindFirstOrThrowArgs} args - Arguments to find a UserAuth
     * @example
     * // Get one UserAuth
     * const userAuth = await prisma.userAuth.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAuthFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAuthFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAuths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAuths
     * const userAuths = await prisma.userAuth.findMany()
     * 
     * // Get first 10 UserAuths
     * const userAuths = await prisma.userAuth.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAuthWithIdOnly = await prisma.userAuth.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAuthFindManyArgs>(args?: SelectSubset<T, UserAuthFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAuth.
     * @param {UserAuthCreateArgs} args - Arguments to create a UserAuth.
     * @example
     * // Create one UserAuth
     * const UserAuth = await prisma.userAuth.create({
     *   data: {
     *     // ... data to create a UserAuth
     *   }
     * })
     * 
     */
    create<T extends UserAuthCreateArgs>(args: SelectSubset<T, UserAuthCreateArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAuths.
     * @param {UserAuthCreateManyArgs} args - Arguments to create many UserAuths.
     * @example
     * // Create many UserAuths
     * const userAuth = await prisma.userAuth.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAuthCreateManyArgs>(args?: SelectSubset<T, UserAuthCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAuths and returns the data saved in the database.
     * @param {UserAuthCreateManyAndReturnArgs} args - Arguments to create many UserAuths.
     * @example
     * // Create many UserAuths
     * const userAuth = await prisma.userAuth.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAuths and only return the `id`
     * const userAuthWithIdOnly = await prisma.userAuth.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAuthCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAuthCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserAuth.
     * @param {UserAuthDeleteArgs} args - Arguments to delete one UserAuth.
     * @example
     * // Delete one UserAuth
     * const UserAuth = await prisma.userAuth.delete({
     *   where: {
     *     // ... filter to delete one UserAuth
     *   }
     * })
     * 
     */
    delete<T extends UserAuthDeleteArgs>(args: SelectSubset<T, UserAuthDeleteArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAuth.
     * @param {UserAuthUpdateArgs} args - Arguments to update one UserAuth.
     * @example
     * // Update one UserAuth
     * const userAuth = await prisma.userAuth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAuthUpdateArgs>(args: SelectSubset<T, UserAuthUpdateArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAuths.
     * @param {UserAuthDeleteManyArgs} args - Arguments to filter UserAuths to delete.
     * @example
     * // Delete a few UserAuths
     * const { count } = await prisma.userAuth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAuthDeleteManyArgs>(args?: SelectSubset<T, UserAuthDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAuths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAuths
     * const userAuth = await prisma.userAuth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAuthUpdateManyArgs>(args: SelectSubset<T, UserAuthUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAuths and returns the data updated in the database.
     * @param {UserAuthUpdateManyAndReturnArgs} args - Arguments to update many UserAuths.
     * @example
     * // Update many UserAuths
     * const userAuth = await prisma.userAuth.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserAuths and only return the `id`
     * const userAuthWithIdOnly = await prisma.userAuth.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserAuthUpdateManyAndReturnArgs>(args: SelectSubset<T, UserAuthUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserAuth.
     * @param {UserAuthUpsertArgs} args - Arguments to update or create a UserAuth.
     * @example
     * // Update or create a UserAuth
     * const userAuth = await prisma.userAuth.upsert({
     *   create: {
     *     // ... data to create a UserAuth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAuth we want to update
     *   }
     * })
     */
    upsert<T extends UserAuthUpsertArgs>(args: SelectSubset<T, UserAuthUpsertArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAuths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthCountArgs} args - Arguments to filter UserAuths to count.
     * @example
     * // Count the number of UserAuths
     * const count = await prisma.userAuth.count({
     *   where: {
     *     // ... the filter for the UserAuths we want to count
     *   }
     * })
    **/
    count<T extends UserAuthCountArgs>(
      args?: Subset<T, UserAuthCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAuthCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAuth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAuthAggregateArgs>(args: Subset<T, UserAuthAggregateArgs>): Prisma.PrismaPromise<GetUserAuthAggregateType<T>>

    /**
     * Group by UserAuth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserAuthGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAuthGroupByArgs['orderBy'] }
        : { orderBy?: UserAuthGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserAuthGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAuthGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAuth model
   */
  readonly fields: UserAuthFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAuth.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAuthClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ownerProfile<T extends UserAuth$ownerProfileArgs<ExtArgs> = {}>(args?: Subset<T, UserAuth$ownerProfileArgs<ExtArgs>>): Prisma__OwnerProfileClient<$Result.GetResult<Prisma.$OwnerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    caregiver<T extends UserAuth$caregiverArgs<ExtArgs> = {}>(args?: Subset<T, UserAuth$caregiverArgs<ExtArgs>>): Prisma__CaregiverClient<$Result.GetResult<Prisma.$CaregiverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    refreshTokens<T extends UserAuth$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, UserAuth$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewsGiven<T extends UserAuth$reviewsGivenArgs<ExtArgs> = {}>(args?: Subset<T, UserAuth$reviewsGivenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewsReceived<T extends UserAuth$reviewsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, UserAuth$reviewsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserAuth model
   */
  interface UserAuthFieldRefs {
    readonly id: FieldRef<"UserAuth", 'Int'>
    readonly name: FieldRef<"UserAuth", 'String'>
    readonly email: FieldRef<"UserAuth", 'String'>
    readonly passwordHash: FieldRef<"UserAuth", 'String'>
    readonly isActive: FieldRef<"UserAuth", 'Boolean'>
    readonly profilePhotoUrl: FieldRef<"UserAuth", 'String'>
    readonly birthDate: FieldRef<"UserAuth", 'DateTime'>
    readonly cpf: FieldRef<"UserAuth", 'String'>
    readonly createdAt: FieldRef<"UserAuth", 'DateTime'>
    readonly updatedAt: FieldRef<"UserAuth", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserAuth findUnique
   */
  export type UserAuthFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    /**
     * Filter, which UserAuth to fetch.
     */
    where: UserAuthWhereUniqueInput
  }

  /**
   * UserAuth findUniqueOrThrow
   */
  export type UserAuthFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    /**
     * Filter, which UserAuth to fetch.
     */
    where: UserAuthWhereUniqueInput
  }

  /**
   * UserAuth findFirst
   */
  export type UserAuthFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    /**
     * Filter, which UserAuth to fetch.
     */
    where?: UserAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAuths to fetch.
     */
    orderBy?: UserAuthOrderByWithRelationInput | UserAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAuths.
     */
    cursor?: UserAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAuths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAuths.
     */
    distinct?: UserAuthScalarFieldEnum | UserAuthScalarFieldEnum[]
  }

  /**
   * UserAuth findFirstOrThrow
   */
  export type UserAuthFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    /**
     * Filter, which UserAuth to fetch.
     */
    where?: UserAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAuths to fetch.
     */
    orderBy?: UserAuthOrderByWithRelationInput | UserAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAuths.
     */
    cursor?: UserAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAuths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAuths.
     */
    distinct?: UserAuthScalarFieldEnum | UserAuthScalarFieldEnum[]
  }

  /**
   * UserAuth findMany
   */
  export type UserAuthFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    /**
     * Filter, which UserAuths to fetch.
     */
    where?: UserAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAuths to fetch.
     */
    orderBy?: UserAuthOrderByWithRelationInput | UserAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAuths.
     */
    cursor?: UserAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAuths.
     */
    skip?: number
    distinct?: UserAuthScalarFieldEnum | UserAuthScalarFieldEnum[]
  }

  /**
   * UserAuth create
   */
  export type UserAuthCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAuth.
     */
    data: XOR<UserAuthCreateInput, UserAuthUncheckedCreateInput>
  }

  /**
   * UserAuth createMany
   */
  export type UserAuthCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAuths.
     */
    data: UserAuthCreateManyInput | UserAuthCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAuth createManyAndReturn
   */
  export type UserAuthCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * The data used to create many UserAuths.
     */
    data: UserAuthCreateManyInput | UserAuthCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAuth update
   */
  export type UserAuthUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAuth.
     */
    data: XOR<UserAuthUpdateInput, UserAuthUncheckedUpdateInput>
    /**
     * Choose, which UserAuth to update.
     */
    where: UserAuthWhereUniqueInput
  }

  /**
   * UserAuth updateMany
   */
  export type UserAuthUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAuths.
     */
    data: XOR<UserAuthUpdateManyMutationInput, UserAuthUncheckedUpdateManyInput>
    /**
     * Filter which UserAuths to update
     */
    where?: UserAuthWhereInput
    /**
     * Limit how many UserAuths to update.
     */
    limit?: number
  }

  /**
   * UserAuth updateManyAndReturn
   */
  export type UserAuthUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * The data used to update UserAuths.
     */
    data: XOR<UserAuthUpdateManyMutationInput, UserAuthUncheckedUpdateManyInput>
    /**
     * Filter which UserAuths to update
     */
    where?: UserAuthWhereInput
    /**
     * Limit how many UserAuths to update.
     */
    limit?: number
  }

  /**
   * UserAuth upsert
   */
  export type UserAuthUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAuth to update in case it exists.
     */
    where: UserAuthWhereUniqueInput
    /**
     * In case the UserAuth found by the `where` argument doesn't exist, create a new UserAuth with this data.
     */
    create: XOR<UserAuthCreateInput, UserAuthUncheckedCreateInput>
    /**
     * In case the UserAuth was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAuthUpdateInput, UserAuthUncheckedUpdateInput>
  }

  /**
   * UserAuth delete
   */
  export type UserAuthDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    /**
     * Filter which UserAuth to delete.
     */
    where: UserAuthWhereUniqueInput
  }

  /**
   * UserAuth deleteMany
   */
  export type UserAuthDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAuths to delete
     */
    where?: UserAuthWhereInput
    /**
     * Limit how many UserAuths to delete.
     */
    limit?: number
  }

  /**
   * UserAuth.ownerProfile
   */
  export type UserAuth$ownerProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerProfile
     */
    select?: OwnerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerProfile
     */
    omit?: OwnerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerProfileInclude<ExtArgs> | null
    where?: OwnerProfileWhereInput
  }

  /**
   * UserAuth.caregiver
   */
  export type UserAuth$caregiverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caregiver
     */
    select?: CaregiverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Caregiver
     */
    omit?: CaregiverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaregiverInclude<ExtArgs> | null
    where?: CaregiverWhereInput
  }

  /**
   * UserAuth.refreshTokens
   */
  export type UserAuth$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * UserAuth.reviewsGiven
   */
  export type UserAuth$reviewsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * UserAuth.reviewsReceived
   */
  export type UserAuth$reviewsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * UserAuth without action
   */
  export type UserAuthDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _avg: RefreshTokenAvgAggregateOutputType | null
    _sum: RefreshTokenSumAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenAvgAggregateOutputType = {
    userId: number | null
  }

  export type RefreshTokenSumAggregateOutputType = {
    userId: number | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    token: string | null
    userId: number | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    token: string | null
    userId: number | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    token: number
    userId: number
    createdAt: number
    expiresAt: number
    _all: number
  }


  export type RefreshTokenAvgAggregateInputType = {
    userId?: true
  }

  export type RefreshTokenSumAggregateInputType = {
    userId?: true
  }

  export type RefreshTokenMinAggregateInputType = {
    token?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    token?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    token?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RefreshTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RefreshTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _avg?: RefreshTokenAvgAggregateInputType
    _sum?: RefreshTokenSumAggregateInputType
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    token: string
    userId: number
    createdAt: Date
    expiresAt: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _avg: RefreshTokenAvgAggregateOutputType | null
    _sum: RefreshTokenSumAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    token?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserAuthDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    token?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserAuthDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    token?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserAuthDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    token?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"token" | "userId" | "createdAt" | "expiresAt", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserAuthDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserAuthDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserAuthDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserAuthPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      token: string
      userId: number
      createdAt: Date
      expiresAt: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `token`
     * const refreshTokenWithTokenOnly = await prisma.refreshToken.findMany({ select: { token: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `token`
     * const refreshTokenWithTokenOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { token: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshTokens and only return the `token`
     * const refreshTokenWithTokenOnly = await prisma.refreshToken.updateManyAndReturn({
     *   select: { token: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserAuthDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserAuthDefaultArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly token: FieldRef<"RefreshToken", 'String'>
    readonly userId: FieldRef<"RefreshToken", 'Int'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AddressScalarFieldEnum: {
    id: 'id',
    street: 'street',
    number: 'number',
    neighborhood: 'neighborhood',
    city: 'city',
    state: 'state',
    zipCode: 'zipCode',
    latitude: 'latitude',
    longitude: 'longitude',
    complement: 'complement',
    ownerProfileId: 'ownerProfileId',
    caregiverId: 'caregiverId'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const CaregiverScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    offersHosting: 'offersHosting',
    serviceRadiusKm: 'serviceRadiusKm',
    isVerified: 'isVerified',
    isPublicProfile: 'isPublicProfile',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CaregiverScalarFieldEnum = (typeof CaregiverScalarFieldEnum)[keyof typeof CaregiverScalarFieldEnum]


  export const OwnerProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    searchRadiusKm: 'searchRadiusKm',
    phone: 'phone'
  };

  export type OwnerProfileScalarFieldEnum = (typeof OwnerProfileScalarFieldEnum)[keyof typeof OwnerProfileScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    serviceOfferId: 'serviceOfferId',
    reviewerUserId: 'reviewerUserId',
    targetUserId: 'targetUserId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const ServiceOfferScalarFieldEnum: {
    id: 'id',
    caregiverId: 'caregiverId',
    serviceId: 'serviceId',
    description: 'description',
    price: 'price',
    isActive: 'isActive'
  };

  export type ServiceOfferScalarFieldEnum = (typeof ServiceOfferScalarFieldEnum)[keyof typeof ServiceOfferScalarFieldEnum]


  export const UserAuthScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    isActive: 'isActive',
    profilePhotoUrl: 'profilePhotoUrl',
    birthDate: 'birthDate',
    cpf: 'cpf',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserAuthScalarFieldEnum = (typeof UserAuthScalarFieldEnum)[keyof typeof UserAuthScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    token: 'token',
    userId: 'userId',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'State'
   */
  export type EnumStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'State'>
    


  /**
   * Reference to a field of type 'State[]'
   */
  export type ListEnumStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'State[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: IntFilter<"Address"> | number
    street?: StringFilter<"Address"> | string
    number?: StringFilter<"Address"> | string
    neighborhood?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    state?: EnumStateFilter<"Address"> | $Enums.State
    zipCode?: StringFilter<"Address"> | string
    latitude?: FloatNullableFilter<"Address"> | number | null
    longitude?: FloatNullableFilter<"Address"> | number | null
    complement?: StringNullableFilter<"Address"> | string | null
    ownerProfileId?: IntNullableFilter<"Address"> | number | null
    caregiverId?: IntNullableFilter<"Address"> | number | null
    ownerProfile?: XOR<OwnerProfileNullableScalarRelationFilter, OwnerProfileWhereInput> | null
    caregiver?: XOR<CaregiverNullableScalarRelationFilter, CaregiverWhereInput> | null
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    neighborhood?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    complement?: SortOrderInput | SortOrder
    ownerProfileId?: SortOrderInput | SortOrder
    caregiverId?: SortOrderInput | SortOrder
    ownerProfile?: OwnerProfileOrderByWithRelationInput
    caregiver?: CaregiverOrderByWithRelationInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ownerProfileId?: number
    caregiverId?: number
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    street?: StringFilter<"Address"> | string
    number?: StringFilter<"Address"> | string
    neighborhood?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    state?: EnumStateFilter<"Address"> | $Enums.State
    zipCode?: StringFilter<"Address"> | string
    latitude?: FloatNullableFilter<"Address"> | number | null
    longitude?: FloatNullableFilter<"Address"> | number | null
    complement?: StringNullableFilter<"Address"> | string | null
    ownerProfile?: XOR<OwnerProfileNullableScalarRelationFilter, OwnerProfileWhereInput> | null
    caregiver?: XOR<CaregiverNullableScalarRelationFilter, CaregiverWhereInput> | null
  }, "id" | "ownerProfileId" | "caregiverId">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    neighborhood?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    complement?: SortOrderInput | SortOrder
    ownerProfileId?: SortOrderInput | SortOrder
    caregiverId?: SortOrderInput | SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Address"> | number
    street?: StringWithAggregatesFilter<"Address"> | string
    number?: StringWithAggregatesFilter<"Address"> | string
    neighborhood?: StringWithAggregatesFilter<"Address"> | string
    city?: StringWithAggregatesFilter<"Address"> | string
    state?: EnumStateWithAggregatesFilter<"Address"> | $Enums.State
    zipCode?: StringWithAggregatesFilter<"Address"> | string
    latitude?: FloatNullableWithAggregatesFilter<"Address"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Address"> | number | null
    complement?: StringNullableWithAggregatesFilter<"Address"> | string | null
    ownerProfileId?: IntNullableWithAggregatesFilter<"Address"> | number | null
    caregiverId?: IntNullableWithAggregatesFilter<"Address"> | number | null
  }

  export type CaregiverWhereInput = {
    AND?: CaregiverWhereInput | CaregiverWhereInput[]
    OR?: CaregiverWhereInput[]
    NOT?: CaregiverWhereInput | CaregiverWhereInput[]
    id?: IntFilter<"Caregiver"> | number
    userId?: IntFilter<"Caregiver"> | number
    offersHosting?: BoolFilter<"Caregiver"> | boolean
    serviceRadiusKm?: FloatFilter<"Caregiver"> | number
    isVerified?: BoolFilter<"Caregiver"> | boolean
    isPublicProfile?: BoolFilter<"Caregiver"> | boolean
    isActive?: BoolFilter<"Caregiver"> | boolean
    createdAt?: DateTimeFilter<"Caregiver"> | Date | string
    updatedAt?: DateTimeFilter<"Caregiver"> | Date | string
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    user?: XOR<UserAuthScalarRelationFilter, UserAuthWhereInput>
    services?: ServiceOfferListRelationFilter
  }

  export type CaregiverOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    offersHosting?: SortOrder
    serviceRadiusKm?: SortOrder
    isVerified?: SortOrder
    isPublicProfile?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    address?: AddressOrderByWithRelationInput
    user?: UserAuthOrderByWithRelationInput
    services?: ServiceOfferOrderByRelationAggregateInput
  }

  export type CaregiverWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: CaregiverWhereInput | CaregiverWhereInput[]
    OR?: CaregiverWhereInput[]
    NOT?: CaregiverWhereInput | CaregiverWhereInput[]
    offersHosting?: BoolFilter<"Caregiver"> | boolean
    serviceRadiusKm?: FloatFilter<"Caregiver"> | number
    isVerified?: BoolFilter<"Caregiver"> | boolean
    isPublicProfile?: BoolFilter<"Caregiver"> | boolean
    isActive?: BoolFilter<"Caregiver"> | boolean
    createdAt?: DateTimeFilter<"Caregiver"> | Date | string
    updatedAt?: DateTimeFilter<"Caregiver"> | Date | string
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    user?: XOR<UserAuthScalarRelationFilter, UserAuthWhereInput>
    services?: ServiceOfferListRelationFilter
  }, "id" | "userId">

  export type CaregiverOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    offersHosting?: SortOrder
    serviceRadiusKm?: SortOrder
    isVerified?: SortOrder
    isPublicProfile?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CaregiverCountOrderByAggregateInput
    _avg?: CaregiverAvgOrderByAggregateInput
    _max?: CaregiverMaxOrderByAggregateInput
    _min?: CaregiverMinOrderByAggregateInput
    _sum?: CaregiverSumOrderByAggregateInput
  }

  export type CaregiverScalarWhereWithAggregatesInput = {
    AND?: CaregiverScalarWhereWithAggregatesInput | CaregiverScalarWhereWithAggregatesInput[]
    OR?: CaregiverScalarWhereWithAggregatesInput[]
    NOT?: CaregiverScalarWhereWithAggregatesInput | CaregiverScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Caregiver"> | number
    userId?: IntWithAggregatesFilter<"Caregiver"> | number
    offersHosting?: BoolWithAggregatesFilter<"Caregiver"> | boolean
    serviceRadiusKm?: FloatWithAggregatesFilter<"Caregiver"> | number
    isVerified?: BoolWithAggregatesFilter<"Caregiver"> | boolean
    isPublicProfile?: BoolWithAggregatesFilter<"Caregiver"> | boolean
    isActive?: BoolWithAggregatesFilter<"Caregiver"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Caregiver"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Caregiver"> | Date | string
  }

  export type OwnerProfileWhereInput = {
    AND?: OwnerProfileWhereInput | OwnerProfileWhereInput[]
    OR?: OwnerProfileWhereInput[]
    NOT?: OwnerProfileWhereInput | OwnerProfileWhereInput[]
    id?: IntFilter<"OwnerProfile"> | number
    userId?: IntFilter<"OwnerProfile"> | number
    createdAt?: DateTimeFilter<"OwnerProfile"> | Date | string
    updatedAt?: DateTimeFilter<"OwnerProfile"> | Date | string
    searchRadiusKm?: FloatNullableFilter<"OwnerProfile"> | number | null
    phone?: StringNullableFilter<"OwnerProfile"> | string | null
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    user?: XOR<UserAuthScalarRelationFilter, UserAuthWhereInput>
  }

  export type OwnerProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    searchRadiusKm?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: AddressOrderByWithRelationInput
    user?: UserAuthOrderByWithRelationInput
  }

  export type OwnerProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: OwnerProfileWhereInput | OwnerProfileWhereInput[]
    OR?: OwnerProfileWhereInput[]
    NOT?: OwnerProfileWhereInput | OwnerProfileWhereInput[]
    createdAt?: DateTimeFilter<"OwnerProfile"> | Date | string
    updatedAt?: DateTimeFilter<"OwnerProfile"> | Date | string
    searchRadiusKm?: FloatNullableFilter<"OwnerProfile"> | number | null
    phone?: StringNullableFilter<"OwnerProfile"> | string | null
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    user?: XOR<UserAuthScalarRelationFilter, UserAuthWhereInput>
  }, "id" | "userId">

  export type OwnerProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    searchRadiusKm?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    _count?: OwnerProfileCountOrderByAggregateInput
    _avg?: OwnerProfileAvgOrderByAggregateInput
    _max?: OwnerProfileMaxOrderByAggregateInput
    _min?: OwnerProfileMinOrderByAggregateInput
    _sum?: OwnerProfileSumOrderByAggregateInput
  }

  export type OwnerProfileScalarWhereWithAggregatesInput = {
    AND?: OwnerProfileScalarWhereWithAggregatesInput | OwnerProfileScalarWhereWithAggregatesInput[]
    OR?: OwnerProfileScalarWhereWithAggregatesInput[]
    NOT?: OwnerProfileScalarWhereWithAggregatesInput | OwnerProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OwnerProfile"> | number
    userId?: IntWithAggregatesFilter<"OwnerProfile"> | number
    createdAt?: DateTimeWithAggregatesFilter<"OwnerProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OwnerProfile"> | Date | string
    searchRadiusKm?: FloatNullableWithAggregatesFilter<"OwnerProfile"> | number | null
    phone?: StringNullableWithAggregatesFilter<"OwnerProfile"> | string | null
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    serviceOfferId?: IntNullableFilter<"Review"> | number | null
    reviewerUserId?: IntFilter<"Review"> | number
    targetUserId?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    serviceOffer?: XOR<ServiceOfferNullableScalarRelationFilter, ServiceOfferWhereInput> | null
    reviewer?: XOR<UserAuthScalarRelationFilter, UserAuthWhereInput>
    targetUser?: XOR<UserAuthScalarRelationFilter, UserAuthWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    serviceOfferId?: SortOrderInput | SortOrder
    reviewerUserId?: SortOrder
    targetUserId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    serviceOffer?: ServiceOfferOrderByWithRelationInput
    reviewer?: UserAuthOrderByWithRelationInput
    targetUser?: UserAuthOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    reviewerUserId_targetUserId_serviceOfferId?: ReviewReviewerUserIdTargetUserIdServiceOfferIdCompoundUniqueInput
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    serviceOfferId?: IntNullableFilter<"Review"> | number | null
    reviewerUserId?: IntFilter<"Review"> | number
    targetUserId?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    serviceOffer?: XOR<ServiceOfferNullableScalarRelationFilter, ServiceOfferWhereInput> | null
    reviewer?: XOR<UserAuthScalarRelationFilter, UserAuthWhereInput>
    targetUser?: XOR<UserAuthScalarRelationFilter, UserAuthWhereInput>
  }, "id" | "reviewerUserId_targetUserId_serviceOfferId">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    serviceOfferId?: SortOrderInput | SortOrder
    reviewerUserId?: SortOrder
    targetUserId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    serviceOfferId?: IntNullableWithAggregatesFilter<"Review"> | number | null
    reviewerUserId?: IntWithAggregatesFilter<"Review"> | number
    targetUserId?: IntWithAggregatesFilter<"Review"> | number
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: IntFilter<"Service"> | number
    name?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    offers?: ServiceOfferListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    offers?: ServiceOfferOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    description?: StringFilter<"Service"> | string
    offers?: ServiceOfferListRelationFilter
  }, "id" | "name">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Service"> | number
    name?: StringWithAggregatesFilter<"Service"> | string
    description?: StringWithAggregatesFilter<"Service"> | string
  }

  export type ServiceOfferWhereInput = {
    AND?: ServiceOfferWhereInput | ServiceOfferWhereInput[]
    OR?: ServiceOfferWhereInput[]
    NOT?: ServiceOfferWhereInput | ServiceOfferWhereInput[]
    id?: IntFilter<"ServiceOffer"> | number
    caregiverId?: IntFilter<"ServiceOffer"> | number
    serviceId?: IntFilter<"ServiceOffer"> | number
    description?: StringNullableFilter<"ServiceOffer"> | string | null
    price?: FloatFilter<"ServiceOffer"> | number
    isActive?: BoolFilter<"ServiceOffer"> | boolean
    caregiver?: XOR<CaregiverScalarRelationFilter, CaregiverWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    reviews?: ReviewListRelationFilter
  }

  export type ServiceOfferOrderByWithRelationInput = {
    id?: SortOrder
    caregiverId?: SortOrder
    serviceId?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    isActive?: SortOrder
    caregiver?: CaregiverOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type ServiceOfferWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    caregiverId_serviceId?: ServiceOfferCaregiverIdServiceIdCompoundUniqueInput
    AND?: ServiceOfferWhereInput | ServiceOfferWhereInput[]
    OR?: ServiceOfferWhereInput[]
    NOT?: ServiceOfferWhereInput | ServiceOfferWhereInput[]
    caregiverId?: IntFilter<"ServiceOffer"> | number
    serviceId?: IntFilter<"ServiceOffer"> | number
    description?: StringNullableFilter<"ServiceOffer"> | string | null
    price?: FloatFilter<"ServiceOffer"> | number
    isActive?: BoolFilter<"ServiceOffer"> | boolean
    caregiver?: XOR<CaregiverScalarRelationFilter, CaregiverWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    reviews?: ReviewListRelationFilter
  }, "id" | "caregiverId_serviceId">

  export type ServiceOfferOrderByWithAggregationInput = {
    id?: SortOrder
    caregiverId?: SortOrder
    serviceId?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    isActive?: SortOrder
    _count?: ServiceOfferCountOrderByAggregateInput
    _avg?: ServiceOfferAvgOrderByAggregateInput
    _max?: ServiceOfferMaxOrderByAggregateInput
    _min?: ServiceOfferMinOrderByAggregateInput
    _sum?: ServiceOfferSumOrderByAggregateInput
  }

  export type ServiceOfferScalarWhereWithAggregatesInput = {
    AND?: ServiceOfferScalarWhereWithAggregatesInput | ServiceOfferScalarWhereWithAggregatesInput[]
    OR?: ServiceOfferScalarWhereWithAggregatesInput[]
    NOT?: ServiceOfferScalarWhereWithAggregatesInput | ServiceOfferScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ServiceOffer"> | number
    caregiverId?: IntWithAggregatesFilter<"ServiceOffer"> | number
    serviceId?: IntWithAggregatesFilter<"ServiceOffer"> | number
    description?: StringNullableWithAggregatesFilter<"ServiceOffer"> | string | null
    price?: FloatWithAggregatesFilter<"ServiceOffer"> | number
    isActive?: BoolWithAggregatesFilter<"ServiceOffer"> | boolean
  }

  export type UserAuthWhereInput = {
    AND?: UserAuthWhereInput | UserAuthWhereInput[]
    OR?: UserAuthWhereInput[]
    NOT?: UserAuthWhereInput | UserAuthWhereInput[]
    id?: IntFilter<"UserAuth"> | number
    name?: StringFilter<"UserAuth"> | string
    email?: StringFilter<"UserAuth"> | string
    passwordHash?: StringFilter<"UserAuth"> | string
    isActive?: BoolFilter<"UserAuth"> | boolean
    profilePhotoUrl?: StringNullableFilter<"UserAuth"> | string | null
    birthDate?: DateTimeFilter<"UserAuth"> | Date | string
    cpf?: StringFilter<"UserAuth"> | string
    createdAt?: DateTimeFilter<"UserAuth"> | Date | string
    updatedAt?: DateTimeFilter<"UserAuth"> | Date | string
    ownerProfile?: XOR<OwnerProfileNullableScalarRelationFilter, OwnerProfileWhereInput> | null
    caregiver?: XOR<CaregiverNullableScalarRelationFilter, CaregiverWhereInput> | null
    refreshTokens?: RefreshTokenListRelationFilter
    reviewsGiven?: ReviewListRelationFilter
    reviewsReceived?: ReviewListRelationFilter
  }

  export type UserAuthOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    profilePhotoUrl?: SortOrderInput | SortOrder
    birthDate?: SortOrder
    cpf?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerProfile?: OwnerProfileOrderByWithRelationInput
    caregiver?: CaregiverOrderByWithRelationInput
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
    reviewsGiven?: ReviewOrderByRelationAggregateInput
    reviewsReceived?: ReviewOrderByRelationAggregateInput
  }

  export type UserAuthWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    cpf?: string
    AND?: UserAuthWhereInput | UserAuthWhereInput[]
    OR?: UserAuthWhereInput[]
    NOT?: UserAuthWhereInput | UserAuthWhereInput[]
    name?: StringFilter<"UserAuth"> | string
    passwordHash?: StringFilter<"UserAuth"> | string
    isActive?: BoolFilter<"UserAuth"> | boolean
    profilePhotoUrl?: StringNullableFilter<"UserAuth"> | string | null
    birthDate?: DateTimeFilter<"UserAuth"> | Date | string
    createdAt?: DateTimeFilter<"UserAuth"> | Date | string
    updatedAt?: DateTimeFilter<"UserAuth"> | Date | string
    ownerProfile?: XOR<OwnerProfileNullableScalarRelationFilter, OwnerProfileWhereInput> | null
    caregiver?: XOR<CaregiverNullableScalarRelationFilter, CaregiverWhereInput> | null
    refreshTokens?: RefreshTokenListRelationFilter
    reviewsGiven?: ReviewListRelationFilter
    reviewsReceived?: ReviewListRelationFilter
  }, "id" | "email" | "cpf">

  export type UserAuthOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    profilePhotoUrl?: SortOrderInput | SortOrder
    birthDate?: SortOrder
    cpf?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserAuthCountOrderByAggregateInput
    _avg?: UserAuthAvgOrderByAggregateInput
    _max?: UserAuthMaxOrderByAggregateInput
    _min?: UserAuthMinOrderByAggregateInput
    _sum?: UserAuthSumOrderByAggregateInput
  }

  export type UserAuthScalarWhereWithAggregatesInput = {
    AND?: UserAuthScalarWhereWithAggregatesInput | UserAuthScalarWhereWithAggregatesInput[]
    OR?: UserAuthScalarWhereWithAggregatesInput[]
    NOT?: UserAuthScalarWhereWithAggregatesInput | UserAuthScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserAuth"> | number
    name?: StringWithAggregatesFilter<"UserAuth"> | string
    email?: StringWithAggregatesFilter<"UserAuth"> | string
    passwordHash?: StringWithAggregatesFilter<"UserAuth"> | string
    isActive?: BoolWithAggregatesFilter<"UserAuth"> | boolean
    profilePhotoUrl?: StringNullableWithAggregatesFilter<"UserAuth"> | string | null
    birthDate?: DateTimeWithAggregatesFilter<"UserAuth"> | Date | string
    cpf?: StringWithAggregatesFilter<"UserAuth"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserAuth"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserAuth"> | Date | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    token?: StringFilter<"RefreshToken"> | string
    userId?: IntFilter<"RefreshToken"> | number
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserAuthScalarRelationFilter, UserAuthWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    user?: UserAuthOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    userId?: IntFilter<"RefreshToken"> | number
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserAuthScalarRelationFilter, UserAuthWhereInput>
  }, "token">

  export type RefreshTokenOrderByWithAggregationInput = {
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _avg?: RefreshTokenAvgOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
    _sum?: RefreshTokenSumOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    token?: StringWithAggregatesFilter<"RefreshToken"> | string
    userId?: IntWithAggregatesFilter<"RefreshToken"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }

  export type AddressCreateInput = {
    street: string
    number: string
    neighborhood: string
    city: string
    state: $Enums.State
    zipCode: string
    latitude?: number | null
    longitude?: number | null
    complement?: string | null
    ownerProfile?: OwnerProfileCreateNestedOneWithoutAddressInput
    caregiver?: CaregiverCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: number
    street: string
    number: string
    neighborhood: string
    city: string
    state: $Enums.State
    zipCode: string
    latitude?: number | null
    longitude?: number | null
    complement?: string | null
    ownerProfileId?: number | null
    caregiverId?: number | null
  }

  export type AddressUpdateInput = {
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    zipCode?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    ownerProfile?: OwnerProfileUpdateOneWithoutAddressNestedInput
    caregiver?: CaregiverUpdateOneWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    zipCode?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    ownerProfileId?: NullableIntFieldUpdateOperationsInput | number | null
    caregiverId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AddressCreateManyInput = {
    id?: number
    street: string
    number: string
    neighborhood: string
    city: string
    state: $Enums.State
    zipCode: string
    latitude?: number | null
    longitude?: number | null
    complement?: string | null
    ownerProfileId?: number | null
    caregiverId?: number | null
  }

  export type AddressUpdateManyMutationInput = {
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    zipCode?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    zipCode?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    ownerProfileId?: NullableIntFieldUpdateOperationsInput | number | null
    caregiverId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CaregiverCreateInput = {
    offersHosting: boolean
    serviceRadiusKm: number
    isVerified?: boolean
    isPublicProfile?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressCreateNestedOneWithoutCaregiverInput
    user: UserAuthCreateNestedOneWithoutCaregiverInput
    services?: ServiceOfferCreateNestedManyWithoutCaregiverInput
  }

  export type CaregiverUncheckedCreateInput = {
    id?: number
    userId: number
    offersHosting: boolean
    serviceRadiusKm: number
    isVerified?: boolean
    isPublicProfile?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressUncheckedCreateNestedOneWithoutCaregiverInput
    services?: ServiceOfferUncheckedCreateNestedManyWithoutCaregiverInput
  }

  export type CaregiverUpdateInput = {
    offersHosting?: BoolFieldUpdateOperationsInput | boolean
    serviceRadiusKm?: FloatFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isPublicProfile?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneWithoutCaregiverNestedInput
    user?: UserAuthUpdateOneRequiredWithoutCaregiverNestedInput
    services?: ServiceOfferUpdateManyWithoutCaregiverNestedInput
  }

  export type CaregiverUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    offersHosting?: BoolFieldUpdateOperationsInput | boolean
    serviceRadiusKm?: FloatFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isPublicProfile?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateOneWithoutCaregiverNestedInput
    services?: ServiceOfferUncheckedUpdateManyWithoutCaregiverNestedInput
  }

  export type CaregiverCreateManyInput = {
    id?: number
    userId: number
    offersHosting: boolean
    serviceRadiusKm: number
    isVerified?: boolean
    isPublicProfile?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CaregiverUpdateManyMutationInput = {
    offersHosting?: BoolFieldUpdateOperationsInput | boolean
    serviceRadiusKm?: FloatFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isPublicProfile?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaregiverUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    offersHosting?: BoolFieldUpdateOperationsInput | boolean
    serviceRadiusKm?: FloatFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isPublicProfile?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OwnerProfileCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    searchRadiusKm?: number | null
    phone?: string | null
    address?: AddressCreateNestedOneWithoutOwnerProfileInput
    user: UserAuthCreateNestedOneWithoutOwnerProfileInput
  }

  export type OwnerProfileUncheckedCreateInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    searchRadiusKm?: number | null
    phone?: string | null
    address?: AddressUncheckedCreateNestedOneWithoutOwnerProfileInput
  }

  export type OwnerProfileUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    searchRadiusKm?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: AddressUpdateOneWithoutOwnerProfileNestedInput
    user?: UserAuthUpdateOneRequiredWithoutOwnerProfileNestedInput
  }

  export type OwnerProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    searchRadiusKm?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: AddressUncheckedUpdateOneWithoutOwnerProfileNestedInput
  }

  export type OwnerProfileCreateManyInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    searchRadiusKm?: number | null
    phone?: string | null
  }

  export type OwnerProfileUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    searchRadiusKm?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OwnerProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    searchRadiusKm?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewCreateInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    serviceOffer?: ServiceOfferCreateNestedOneWithoutReviewsInput
    reviewer: UserAuthCreateNestedOneWithoutReviewsGivenInput
    targetUser: UserAuthCreateNestedOneWithoutReviewsReceivedInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    serviceOfferId?: number | null
    reviewerUserId: number
    targetUserId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceOffer?: ServiceOfferUpdateOneWithoutReviewsNestedInput
    reviewer?: UserAuthUpdateOneRequiredWithoutReviewsGivenNestedInput
    targetUser?: UserAuthUpdateOneRequiredWithoutReviewsReceivedNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceOfferId?: NullableIntFieldUpdateOperationsInput | number | null
    reviewerUserId?: IntFieldUpdateOperationsInput | number
    targetUserId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: number
    serviceOfferId?: number | null
    reviewerUserId: number
    targetUserId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceOfferId?: NullableIntFieldUpdateOperationsInput | number | null
    reviewerUserId?: IntFieldUpdateOperationsInput | number
    targetUserId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    name: string
    description: string
    offers?: ServiceOfferCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    offers?: ServiceOfferUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    offers?: ServiceOfferUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    offers?: ServiceOfferUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: number
    name: string
    description: string
  }

  export type ServiceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceOfferCreateInput = {
    description?: string | null
    price: number
    isActive?: boolean
    caregiver: CaregiverCreateNestedOneWithoutServicesInput
    service: ServiceCreateNestedOneWithoutOffersInput
    reviews?: ReviewCreateNestedManyWithoutServiceOfferInput
  }

  export type ServiceOfferUncheckedCreateInput = {
    id?: number
    caregiverId: number
    serviceId: number
    description?: string | null
    price: number
    isActive?: boolean
    reviews?: ReviewUncheckedCreateNestedManyWithoutServiceOfferInput
  }

  export type ServiceOfferUpdateInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    caregiver?: CaregiverUpdateOneRequiredWithoutServicesNestedInput
    service?: ServiceUpdateOneRequiredWithoutOffersNestedInput
    reviews?: ReviewUpdateManyWithoutServiceOfferNestedInput
  }

  export type ServiceOfferUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    caregiverId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    reviews?: ReviewUncheckedUpdateManyWithoutServiceOfferNestedInput
  }

  export type ServiceOfferCreateManyInput = {
    id?: number
    caregiverId: number
    serviceId: number
    description?: string | null
    price: number
    isActive?: boolean
  }

  export type ServiceOfferUpdateManyMutationInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ServiceOfferUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    caregiverId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserAuthCreateInput = {
    name: string
    email: string
    passwordHash: string
    isActive?: boolean
    profilePhotoUrl?: string | null
    birthDate: Date | string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerProfile?: OwnerProfileCreateNestedOneWithoutUserInput
    caregiver?: CaregiverCreateNestedOneWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutTargetUserInput
  }

  export type UserAuthUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    isActive?: boolean
    profilePhotoUrl?: string | null
    birthDate: Date | string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerProfile?: OwnerProfileUncheckedCreateNestedOneWithoutUserInput
    caregiver?: CaregiverUncheckedCreateNestedOneWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutTargetUserInput
  }

  export type UserAuthUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerProfile?: OwnerProfileUpdateOneWithoutUserNestedInput
    caregiver?: CaregiverUpdateOneWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutTargetUserNestedInput
  }

  export type UserAuthUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerProfile?: OwnerProfileUncheckedUpdateOneWithoutUserNestedInput
    caregiver?: CaregiverUncheckedUpdateOneWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutTargetUserNestedInput
  }

  export type UserAuthCreateManyInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    isActive?: boolean
    profilePhotoUrl?: string | null
    birthDate: Date | string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAuthUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAuthUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateInput = {
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
    user: UserAuthCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    token: string
    userId: number
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type RefreshTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserAuthUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyInput = {
    token: string
    userId: number
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    token?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumStateFilter<$PrismaModel = never> = {
    equals?: $Enums.State | EnumStateFieldRefInput<$PrismaModel>
    in?: $Enums.State[] | ListEnumStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.State[] | ListEnumStateFieldRefInput<$PrismaModel>
    not?: NestedEnumStateFilter<$PrismaModel> | $Enums.State
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type OwnerProfileNullableScalarRelationFilter = {
    is?: OwnerProfileWhereInput | null
    isNot?: OwnerProfileWhereInput | null
  }

  export type CaregiverNullableScalarRelationFilter = {
    is?: CaregiverWhereInput | null
    isNot?: CaregiverWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    neighborhood?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    complement?: SortOrder
    ownerProfileId?: SortOrder
    caregiverId?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    ownerProfileId?: SortOrder
    caregiverId?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    neighborhood?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    complement?: SortOrder
    ownerProfileId?: SortOrder
    caregiverId?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    neighborhood?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    complement?: SortOrder
    ownerProfileId?: SortOrder
    caregiverId?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    ownerProfileId?: SortOrder
    caregiverId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.State | EnumStateFieldRefInput<$PrismaModel>
    in?: $Enums.State[] | ListEnumStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.State[] | ListEnumStateFieldRefInput<$PrismaModel>
    not?: NestedEnumStateWithAggregatesFilter<$PrismaModel> | $Enums.State
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStateFilter<$PrismaModel>
    _max?: NestedEnumStateFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AddressNullableScalarRelationFilter = {
    is?: AddressWhereInput | null
    isNot?: AddressWhereInput | null
  }

  export type UserAuthScalarRelationFilter = {
    is?: UserAuthWhereInput
    isNot?: UserAuthWhereInput
  }

  export type ServiceOfferListRelationFilter = {
    every?: ServiceOfferWhereInput
    some?: ServiceOfferWhereInput
    none?: ServiceOfferWhereInput
  }

  export type ServiceOfferOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CaregiverCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    offersHosting?: SortOrder
    serviceRadiusKm?: SortOrder
    isVerified?: SortOrder
    isPublicProfile?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CaregiverAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceRadiusKm?: SortOrder
  }

  export type CaregiverMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    offersHosting?: SortOrder
    serviceRadiusKm?: SortOrder
    isVerified?: SortOrder
    isPublicProfile?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CaregiverMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    offersHosting?: SortOrder
    serviceRadiusKm?: SortOrder
    isVerified?: SortOrder
    isPublicProfile?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CaregiverSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceRadiusKm?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type OwnerProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    searchRadiusKm?: SortOrder
    phone?: SortOrder
  }

  export type OwnerProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    searchRadiusKm?: SortOrder
  }

  export type OwnerProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    searchRadiusKm?: SortOrder
    phone?: SortOrder
  }

  export type OwnerProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    searchRadiusKm?: SortOrder
    phone?: SortOrder
  }

  export type OwnerProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    searchRadiusKm?: SortOrder
  }

  export type ServiceOfferNullableScalarRelationFilter = {
    is?: ServiceOfferWhereInput | null
    isNot?: ServiceOfferWhereInput | null
  }

  export type ReviewReviewerUserIdTargetUserIdServiceOfferIdCompoundUniqueInput = {
    reviewerUserId: number
    targetUserId: number
    serviceOfferId: number
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    serviceOfferId?: SortOrder
    reviewerUserId?: SortOrder
    targetUserId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    serviceOfferId?: SortOrder
    reviewerUserId?: SortOrder
    targetUserId?: SortOrder
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    serviceOfferId?: SortOrder
    reviewerUserId?: SortOrder
    targetUserId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    serviceOfferId?: SortOrder
    reviewerUserId?: SortOrder
    targetUserId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    serviceOfferId?: SortOrder
    reviewerUserId?: SortOrder
    targetUserId?: SortOrder
    rating?: SortOrder
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CaregiverScalarRelationFilter = {
    is?: CaregiverWhereInput
    isNot?: CaregiverWhereInput
  }

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceOfferCaregiverIdServiceIdCompoundUniqueInput = {
    caregiverId: number
    serviceId: number
  }

  export type ServiceOfferCountOrderByAggregateInput = {
    id?: SortOrder
    caregiverId?: SortOrder
    serviceId?: SortOrder
    description?: SortOrder
    price?: SortOrder
    isActive?: SortOrder
  }

  export type ServiceOfferAvgOrderByAggregateInput = {
    id?: SortOrder
    caregiverId?: SortOrder
    serviceId?: SortOrder
    price?: SortOrder
  }

  export type ServiceOfferMaxOrderByAggregateInput = {
    id?: SortOrder
    caregiverId?: SortOrder
    serviceId?: SortOrder
    description?: SortOrder
    price?: SortOrder
    isActive?: SortOrder
  }

  export type ServiceOfferMinOrderByAggregateInput = {
    id?: SortOrder
    caregiverId?: SortOrder
    serviceId?: SortOrder
    description?: SortOrder
    price?: SortOrder
    isActive?: SortOrder
  }

  export type ServiceOfferSumOrderByAggregateInput = {
    id?: SortOrder
    caregiverId?: SortOrder
    serviceId?: SortOrder
    price?: SortOrder
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserAuthCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    profilePhotoUrl?: SortOrder
    birthDate?: SortOrder
    cpf?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAuthAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserAuthMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    profilePhotoUrl?: SortOrder
    birthDate?: SortOrder
    cpf?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAuthMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    profilePhotoUrl?: SortOrder
    birthDate?: SortOrder
    cpf?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAuthSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type RefreshTokenAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type RefreshTokenSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type OwnerProfileCreateNestedOneWithoutAddressInput = {
    create?: XOR<OwnerProfileCreateWithoutAddressInput, OwnerProfileUncheckedCreateWithoutAddressInput>
    connectOrCreate?: OwnerProfileCreateOrConnectWithoutAddressInput
    connect?: OwnerProfileWhereUniqueInput
  }

  export type CaregiverCreateNestedOneWithoutAddressInput = {
    create?: XOR<CaregiverCreateWithoutAddressInput, CaregiverUncheckedCreateWithoutAddressInput>
    connectOrCreate?: CaregiverCreateOrConnectWithoutAddressInput
    connect?: CaregiverWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumStateFieldUpdateOperationsInput = {
    set?: $Enums.State
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type OwnerProfileUpdateOneWithoutAddressNestedInput = {
    create?: XOR<OwnerProfileCreateWithoutAddressInput, OwnerProfileUncheckedCreateWithoutAddressInput>
    connectOrCreate?: OwnerProfileCreateOrConnectWithoutAddressInput
    upsert?: OwnerProfileUpsertWithoutAddressInput
    disconnect?: OwnerProfileWhereInput | boolean
    delete?: OwnerProfileWhereInput | boolean
    connect?: OwnerProfileWhereUniqueInput
    update?: XOR<XOR<OwnerProfileUpdateToOneWithWhereWithoutAddressInput, OwnerProfileUpdateWithoutAddressInput>, OwnerProfileUncheckedUpdateWithoutAddressInput>
  }

  export type CaregiverUpdateOneWithoutAddressNestedInput = {
    create?: XOR<CaregiverCreateWithoutAddressInput, CaregiverUncheckedCreateWithoutAddressInput>
    connectOrCreate?: CaregiverCreateOrConnectWithoutAddressInput
    upsert?: CaregiverUpsertWithoutAddressInput
    disconnect?: CaregiverWhereInput | boolean
    delete?: CaregiverWhereInput | boolean
    connect?: CaregiverWhereUniqueInput
    update?: XOR<XOR<CaregiverUpdateToOneWithWhereWithoutAddressInput, CaregiverUpdateWithoutAddressInput>, CaregiverUncheckedUpdateWithoutAddressInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AddressCreateNestedOneWithoutCaregiverInput = {
    create?: XOR<AddressCreateWithoutCaregiverInput, AddressUncheckedCreateWithoutCaregiverInput>
    connectOrCreate?: AddressCreateOrConnectWithoutCaregiverInput
    connect?: AddressWhereUniqueInput
  }

  export type UserAuthCreateNestedOneWithoutCaregiverInput = {
    create?: XOR<UserAuthCreateWithoutCaregiverInput, UserAuthUncheckedCreateWithoutCaregiverInput>
    connectOrCreate?: UserAuthCreateOrConnectWithoutCaregiverInput
    connect?: UserAuthWhereUniqueInput
  }

  export type ServiceOfferCreateNestedManyWithoutCaregiverInput = {
    create?: XOR<ServiceOfferCreateWithoutCaregiverInput, ServiceOfferUncheckedCreateWithoutCaregiverInput> | ServiceOfferCreateWithoutCaregiverInput[] | ServiceOfferUncheckedCreateWithoutCaregiverInput[]
    connectOrCreate?: ServiceOfferCreateOrConnectWithoutCaregiverInput | ServiceOfferCreateOrConnectWithoutCaregiverInput[]
    createMany?: ServiceOfferCreateManyCaregiverInputEnvelope
    connect?: ServiceOfferWhereUniqueInput | ServiceOfferWhereUniqueInput[]
  }

  export type AddressUncheckedCreateNestedOneWithoutCaregiverInput = {
    create?: XOR<AddressCreateWithoutCaregiverInput, AddressUncheckedCreateWithoutCaregiverInput>
    connectOrCreate?: AddressCreateOrConnectWithoutCaregiverInput
    connect?: AddressWhereUniqueInput
  }

  export type ServiceOfferUncheckedCreateNestedManyWithoutCaregiverInput = {
    create?: XOR<ServiceOfferCreateWithoutCaregiverInput, ServiceOfferUncheckedCreateWithoutCaregiverInput> | ServiceOfferCreateWithoutCaregiverInput[] | ServiceOfferUncheckedCreateWithoutCaregiverInput[]
    connectOrCreate?: ServiceOfferCreateOrConnectWithoutCaregiverInput | ServiceOfferCreateOrConnectWithoutCaregiverInput[]
    createMany?: ServiceOfferCreateManyCaregiverInputEnvelope
    connect?: ServiceOfferWhereUniqueInput | ServiceOfferWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AddressUpdateOneWithoutCaregiverNestedInput = {
    create?: XOR<AddressCreateWithoutCaregiverInput, AddressUncheckedCreateWithoutCaregiverInput>
    connectOrCreate?: AddressCreateOrConnectWithoutCaregiverInput
    upsert?: AddressUpsertWithoutCaregiverInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutCaregiverInput, AddressUpdateWithoutCaregiverInput>, AddressUncheckedUpdateWithoutCaregiverInput>
  }

  export type UserAuthUpdateOneRequiredWithoutCaregiverNestedInput = {
    create?: XOR<UserAuthCreateWithoutCaregiverInput, UserAuthUncheckedCreateWithoutCaregiverInput>
    connectOrCreate?: UserAuthCreateOrConnectWithoutCaregiverInput
    upsert?: UserAuthUpsertWithoutCaregiverInput
    connect?: UserAuthWhereUniqueInput
    update?: XOR<XOR<UserAuthUpdateToOneWithWhereWithoutCaregiverInput, UserAuthUpdateWithoutCaregiverInput>, UserAuthUncheckedUpdateWithoutCaregiverInput>
  }

  export type ServiceOfferUpdateManyWithoutCaregiverNestedInput = {
    create?: XOR<ServiceOfferCreateWithoutCaregiverInput, ServiceOfferUncheckedCreateWithoutCaregiverInput> | ServiceOfferCreateWithoutCaregiverInput[] | ServiceOfferUncheckedCreateWithoutCaregiverInput[]
    connectOrCreate?: ServiceOfferCreateOrConnectWithoutCaregiverInput | ServiceOfferCreateOrConnectWithoutCaregiverInput[]
    upsert?: ServiceOfferUpsertWithWhereUniqueWithoutCaregiverInput | ServiceOfferUpsertWithWhereUniqueWithoutCaregiverInput[]
    createMany?: ServiceOfferCreateManyCaregiverInputEnvelope
    set?: ServiceOfferWhereUniqueInput | ServiceOfferWhereUniqueInput[]
    disconnect?: ServiceOfferWhereUniqueInput | ServiceOfferWhereUniqueInput[]
    delete?: ServiceOfferWhereUniqueInput | ServiceOfferWhereUniqueInput[]
    connect?: ServiceOfferWhereUniqueInput | ServiceOfferWhereUniqueInput[]
    update?: ServiceOfferUpdateWithWhereUniqueWithoutCaregiverInput | ServiceOfferUpdateWithWhereUniqueWithoutCaregiverInput[]
    updateMany?: ServiceOfferUpdateManyWithWhereWithoutCaregiverInput | ServiceOfferUpdateManyWithWhereWithoutCaregiverInput[]
    deleteMany?: ServiceOfferScalarWhereInput | ServiceOfferScalarWhereInput[]
  }

  export type AddressUncheckedUpdateOneWithoutCaregiverNestedInput = {
    create?: XOR<AddressCreateWithoutCaregiverInput, AddressUncheckedCreateWithoutCaregiverInput>
    connectOrCreate?: AddressCreateOrConnectWithoutCaregiverInput
    upsert?: AddressUpsertWithoutCaregiverInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutCaregiverInput, AddressUpdateWithoutCaregiverInput>, AddressUncheckedUpdateWithoutCaregiverInput>
  }

  export type ServiceOfferUncheckedUpdateManyWithoutCaregiverNestedInput = {
    create?: XOR<ServiceOfferCreateWithoutCaregiverInput, ServiceOfferUncheckedCreateWithoutCaregiverInput> | ServiceOfferCreateWithoutCaregiverInput[] | ServiceOfferUncheckedCreateWithoutCaregiverInput[]
    connectOrCreate?: ServiceOfferCreateOrConnectWithoutCaregiverInput | ServiceOfferCreateOrConnectWithoutCaregiverInput[]
    upsert?: ServiceOfferUpsertWithWhereUniqueWithoutCaregiverInput | ServiceOfferUpsertWithWhereUniqueWithoutCaregiverInput[]
    createMany?: ServiceOfferCreateManyCaregiverInputEnvelope
    set?: ServiceOfferWhereUniqueInput | ServiceOfferWhereUniqueInput[]
    disconnect?: ServiceOfferWhereUniqueInput | ServiceOfferWhereUniqueInput[]
    delete?: ServiceOfferWhereUniqueInput | ServiceOfferWhereUniqueInput[]
    connect?: ServiceOfferWhereUniqueInput | ServiceOfferWhereUniqueInput[]
    update?: ServiceOfferUpdateWithWhereUniqueWithoutCaregiverInput | ServiceOfferUpdateWithWhereUniqueWithoutCaregiverInput[]
    updateMany?: ServiceOfferUpdateManyWithWhereWithoutCaregiverInput | ServiceOfferUpdateManyWithWhereWithoutCaregiverInput[]
    deleteMany?: ServiceOfferScalarWhereInput | ServiceOfferScalarWhereInput[]
  }

  export type AddressCreateNestedOneWithoutOwnerProfileInput = {
    create?: XOR<AddressCreateWithoutOwnerProfileInput, AddressUncheckedCreateWithoutOwnerProfileInput>
    connectOrCreate?: AddressCreateOrConnectWithoutOwnerProfileInput
    connect?: AddressWhereUniqueInput
  }

  export type UserAuthCreateNestedOneWithoutOwnerProfileInput = {
    create?: XOR<UserAuthCreateWithoutOwnerProfileInput, UserAuthUncheckedCreateWithoutOwnerProfileInput>
    connectOrCreate?: UserAuthCreateOrConnectWithoutOwnerProfileInput
    connect?: UserAuthWhereUniqueInput
  }

  export type AddressUncheckedCreateNestedOneWithoutOwnerProfileInput = {
    create?: XOR<AddressCreateWithoutOwnerProfileInput, AddressUncheckedCreateWithoutOwnerProfileInput>
    connectOrCreate?: AddressCreateOrConnectWithoutOwnerProfileInput
    connect?: AddressWhereUniqueInput
  }

  export type AddressUpdateOneWithoutOwnerProfileNestedInput = {
    create?: XOR<AddressCreateWithoutOwnerProfileInput, AddressUncheckedCreateWithoutOwnerProfileInput>
    connectOrCreate?: AddressCreateOrConnectWithoutOwnerProfileInput
    upsert?: AddressUpsertWithoutOwnerProfileInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutOwnerProfileInput, AddressUpdateWithoutOwnerProfileInput>, AddressUncheckedUpdateWithoutOwnerProfileInput>
  }

  export type UserAuthUpdateOneRequiredWithoutOwnerProfileNestedInput = {
    create?: XOR<UserAuthCreateWithoutOwnerProfileInput, UserAuthUncheckedCreateWithoutOwnerProfileInput>
    connectOrCreate?: UserAuthCreateOrConnectWithoutOwnerProfileInput
    upsert?: UserAuthUpsertWithoutOwnerProfileInput
    connect?: UserAuthWhereUniqueInput
    update?: XOR<XOR<UserAuthUpdateToOneWithWhereWithoutOwnerProfileInput, UserAuthUpdateWithoutOwnerProfileInput>, UserAuthUncheckedUpdateWithoutOwnerProfileInput>
  }

  export type AddressUncheckedUpdateOneWithoutOwnerProfileNestedInput = {
    create?: XOR<AddressCreateWithoutOwnerProfileInput, AddressUncheckedCreateWithoutOwnerProfileInput>
    connectOrCreate?: AddressCreateOrConnectWithoutOwnerProfileInput
    upsert?: AddressUpsertWithoutOwnerProfileInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutOwnerProfileInput, AddressUpdateWithoutOwnerProfileInput>, AddressUncheckedUpdateWithoutOwnerProfileInput>
  }

  export type ServiceOfferCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ServiceOfferCreateWithoutReviewsInput, ServiceOfferUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ServiceOfferCreateOrConnectWithoutReviewsInput
    connect?: ServiceOfferWhereUniqueInput
  }

  export type UserAuthCreateNestedOneWithoutReviewsGivenInput = {
    create?: XOR<UserAuthCreateWithoutReviewsGivenInput, UserAuthUncheckedCreateWithoutReviewsGivenInput>
    connectOrCreate?: UserAuthCreateOrConnectWithoutReviewsGivenInput
    connect?: UserAuthWhereUniqueInput
  }

  export type UserAuthCreateNestedOneWithoutReviewsReceivedInput = {
    create?: XOR<UserAuthCreateWithoutReviewsReceivedInput, UserAuthUncheckedCreateWithoutReviewsReceivedInput>
    connectOrCreate?: UserAuthCreateOrConnectWithoutReviewsReceivedInput
    connect?: UserAuthWhereUniqueInput
  }

  export type ServiceOfferUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<ServiceOfferCreateWithoutReviewsInput, ServiceOfferUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ServiceOfferCreateOrConnectWithoutReviewsInput
    upsert?: ServiceOfferUpsertWithoutReviewsInput
    disconnect?: ServiceOfferWhereInput | boolean
    delete?: ServiceOfferWhereInput | boolean
    connect?: ServiceOfferWhereUniqueInput
    update?: XOR<XOR<ServiceOfferUpdateToOneWithWhereWithoutReviewsInput, ServiceOfferUpdateWithoutReviewsInput>, ServiceOfferUncheckedUpdateWithoutReviewsInput>
  }

  export type UserAuthUpdateOneRequiredWithoutReviewsGivenNestedInput = {
    create?: XOR<UserAuthCreateWithoutReviewsGivenInput, UserAuthUncheckedCreateWithoutReviewsGivenInput>
    connectOrCreate?: UserAuthCreateOrConnectWithoutReviewsGivenInput
    upsert?: UserAuthUpsertWithoutReviewsGivenInput
    connect?: UserAuthWhereUniqueInput
    update?: XOR<XOR<UserAuthUpdateToOneWithWhereWithoutReviewsGivenInput, UserAuthUpdateWithoutReviewsGivenInput>, UserAuthUncheckedUpdateWithoutReviewsGivenInput>
  }

  export type UserAuthUpdateOneRequiredWithoutReviewsReceivedNestedInput = {
    create?: XOR<UserAuthCreateWithoutReviewsReceivedInput, UserAuthUncheckedCreateWithoutReviewsReceivedInput>
    connectOrCreate?: UserAuthCreateOrConnectWithoutReviewsReceivedInput
    upsert?: UserAuthUpsertWithoutReviewsReceivedInput
    connect?: UserAuthWhereUniqueInput
    update?: XOR<XOR<UserAuthUpdateToOneWithWhereWithoutReviewsReceivedInput, UserAuthUpdateWithoutReviewsReceivedInput>, UserAuthUncheckedUpdateWithoutReviewsReceivedInput>
  }

  export type ServiceOfferCreateNestedManyWithoutServiceInput = {
    create?: XOR<ServiceOfferCreateWithoutServiceInput, ServiceOfferUncheckedCreateWithoutServiceInput> | ServiceOfferCreateWithoutServiceInput[] | ServiceOfferUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceOfferCreateOrConnectWithoutServiceInput | ServiceOfferCreateOrConnectWithoutServiceInput[]
    createMany?: ServiceOfferCreateManyServiceInputEnvelope
    connect?: ServiceOfferWhereUniqueInput | ServiceOfferWhereUniqueInput[]
  }

  export type ServiceOfferUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ServiceOfferCreateWithoutServiceInput, ServiceOfferUncheckedCreateWithoutServiceInput> | ServiceOfferCreateWithoutServiceInput[] | ServiceOfferUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceOfferCreateOrConnectWithoutServiceInput | ServiceOfferCreateOrConnectWithoutServiceInput[]
    createMany?: ServiceOfferCreateManyServiceInputEnvelope
    connect?: ServiceOfferWhereUniqueInput | ServiceOfferWhereUniqueInput[]
  }

  export type ServiceOfferUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ServiceOfferCreateWithoutServiceInput, ServiceOfferUncheckedCreateWithoutServiceInput> | ServiceOfferCreateWithoutServiceInput[] | ServiceOfferUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceOfferCreateOrConnectWithoutServiceInput | ServiceOfferCreateOrConnectWithoutServiceInput[]
    upsert?: ServiceOfferUpsertWithWhereUniqueWithoutServiceInput | ServiceOfferUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ServiceOfferCreateManyServiceInputEnvelope
    set?: ServiceOfferWhereUniqueInput | ServiceOfferWhereUniqueInput[]
    disconnect?: ServiceOfferWhereUniqueInput | ServiceOfferWhereUniqueInput[]
    delete?: ServiceOfferWhereUniqueInput | ServiceOfferWhereUniqueInput[]
    connect?: ServiceOfferWhereUniqueInput | ServiceOfferWhereUniqueInput[]
    update?: ServiceOfferUpdateWithWhereUniqueWithoutServiceInput | ServiceOfferUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ServiceOfferUpdateManyWithWhereWithoutServiceInput | ServiceOfferUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ServiceOfferScalarWhereInput | ServiceOfferScalarWhereInput[]
  }

  export type ServiceOfferUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ServiceOfferCreateWithoutServiceInput, ServiceOfferUncheckedCreateWithoutServiceInput> | ServiceOfferCreateWithoutServiceInput[] | ServiceOfferUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceOfferCreateOrConnectWithoutServiceInput | ServiceOfferCreateOrConnectWithoutServiceInput[]
    upsert?: ServiceOfferUpsertWithWhereUniqueWithoutServiceInput | ServiceOfferUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ServiceOfferCreateManyServiceInputEnvelope
    set?: ServiceOfferWhereUniqueInput | ServiceOfferWhereUniqueInput[]
    disconnect?: ServiceOfferWhereUniqueInput | ServiceOfferWhereUniqueInput[]
    delete?: ServiceOfferWhereUniqueInput | ServiceOfferWhereUniqueInput[]
    connect?: ServiceOfferWhereUniqueInput | ServiceOfferWhereUniqueInput[]
    update?: ServiceOfferUpdateWithWhereUniqueWithoutServiceInput | ServiceOfferUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ServiceOfferUpdateManyWithWhereWithoutServiceInput | ServiceOfferUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ServiceOfferScalarWhereInput | ServiceOfferScalarWhereInput[]
  }

  export type CaregiverCreateNestedOneWithoutServicesInput = {
    create?: XOR<CaregiverCreateWithoutServicesInput, CaregiverUncheckedCreateWithoutServicesInput>
    connectOrCreate?: CaregiverCreateOrConnectWithoutServicesInput
    connect?: CaregiverWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutOffersInput = {
    create?: XOR<ServiceCreateWithoutOffersInput, ServiceUncheckedCreateWithoutOffersInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutOffersInput
    connect?: ServiceWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutServiceOfferInput = {
    create?: XOR<ReviewCreateWithoutServiceOfferInput, ReviewUncheckedCreateWithoutServiceOfferInput> | ReviewCreateWithoutServiceOfferInput[] | ReviewUncheckedCreateWithoutServiceOfferInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutServiceOfferInput | ReviewCreateOrConnectWithoutServiceOfferInput[]
    createMany?: ReviewCreateManyServiceOfferInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutServiceOfferInput = {
    create?: XOR<ReviewCreateWithoutServiceOfferInput, ReviewUncheckedCreateWithoutServiceOfferInput> | ReviewCreateWithoutServiceOfferInput[] | ReviewUncheckedCreateWithoutServiceOfferInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutServiceOfferInput | ReviewCreateOrConnectWithoutServiceOfferInput[]
    createMany?: ReviewCreateManyServiceOfferInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type CaregiverUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<CaregiverCreateWithoutServicesInput, CaregiverUncheckedCreateWithoutServicesInput>
    connectOrCreate?: CaregiverCreateOrConnectWithoutServicesInput
    upsert?: CaregiverUpsertWithoutServicesInput
    connect?: CaregiverWhereUniqueInput
    update?: XOR<XOR<CaregiverUpdateToOneWithWhereWithoutServicesInput, CaregiverUpdateWithoutServicesInput>, CaregiverUncheckedUpdateWithoutServicesInput>
  }

  export type ServiceUpdateOneRequiredWithoutOffersNestedInput = {
    create?: XOR<ServiceCreateWithoutOffersInput, ServiceUncheckedCreateWithoutOffersInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutOffersInput
    upsert?: ServiceUpsertWithoutOffersInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutOffersInput, ServiceUpdateWithoutOffersInput>, ServiceUncheckedUpdateWithoutOffersInput>
  }

  export type ReviewUpdateManyWithoutServiceOfferNestedInput = {
    create?: XOR<ReviewCreateWithoutServiceOfferInput, ReviewUncheckedCreateWithoutServiceOfferInput> | ReviewCreateWithoutServiceOfferInput[] | ReviewUncheckedCreateWithoutServiceOfferInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutServiceOfferInput | ReviewCreateOrConnectWithoutServiceOfferInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutServiceOfferInput | ReviewUpsertWithWhereUniqueWithoutServiceOfferInput[]
    createMany?: ReviewCreateManyServiceOfferInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutServiceOfferInput | ReviewUpdateWithWhereUniqueWithoutServiceOfferInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutServiceOfferInput | ReviewUpdateManyWithWhereWithoutServiceOfferInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutServiceOfferNestedInput = {
    create?: XOR<ReviewCreateWithoutServiceOfferInput, ReviewUncheckedCreateWithoutServiceOfferInput> | ReviewCreateWithoutServiceOfferInput[] | ReviewUncheckedCreateWithoutServiceOfferInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutServiceOfferInput | ReviewCreateOrConnectWithoutServiceOfferInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutServiceOfferInput | ReviewUpsertWithWhereUniqueWithoutServiceOfferInput[]
    createMany?: ReviewCreateManyServiceOfferInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutServiceOfferInput | ReviewUpdateWithWhereUniqueWithoutServiceOfferInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutServiceOfferInput | ReviewUpdateManyWithWhereWithoutServiceOfferInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type OwnerProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<OwnerProfileCreateWithoutUserInput, OwnerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: OwnerProfileCreateOrConnectWithoutUserInput
    connect?: OwnerProfileWhereUniqueInput
  }

  export type CaregiverCreateNestedOneWithoutUserInput = {
    create?: XOR<CaregiverCreateWithoutUserInput, CaregiverUncheckedCreateWithoutUserInput>
    connectOrCreate?: CaregiverCreateOrConnectWithoutUserInput
    connect?: CaregiverWhereUniqueInput
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutReviewerInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutTargetUserInput = {
    create?: XOR<ReviewCreateWithoutTargetUserInput, ReviewUncheckedCreateWithoutTargetUserInput> | ReviewCreateWithoutTargetUserInput[] | ReviewUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTargetUserInput | ReviewCreateOrConnectWithoutTargetUserInput[]
    createMany?: ReviewCreateManyTargetUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type OwnerProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<OwnerProfileCreateWithoutUserInput, OwnerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: OwnerProfileCreateOrConnectWithoutUserInput
    connect?: OwnerProfileWhereUniqueInput
  }

  export type CaregiverUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CaregiverCreateWithoutUserInput, CaregiverUncheckedCreateWithoutUserInput>
    connectOrCreate?: CaregiverCreateOrConnectWithoutUserInput
    connect?: CaregiverWhereUniqueInput
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutReviewerInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutTargetUserInput = {
    create?: XOR<ReviewCreateWithoutTargetUserInput, ReviewUncheckedCreateWithoutTargetUserInput> | ReviewCreateWithoutTargetUserInput[] | ReviewUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTargetUserInput | ReviewCreateOrConnectWithoutTargetUserInput[]
    createMany?: ReviewCreateManyTargetUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type OwnerProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<OwnerProfileCreateWithoutUserInput, OwnerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: OwnerProfileCreateOrConnectWithoutUserInput
    upsert?: OwnerProfileUpsertWithoutUserInput
    disconnect?: OwnerProfileWhereInput | boolean
    delete?: OwnerProfileWhereInput | boolean
    connect?: OwnerProfileWhereUniqueInput
    update?: XOR<XOR<OwnerProfileUpdateToOneWithWhereWithoutUserInput, OwnerProfileUpdateWithoutUserInput>, OwnerProfileUncheckedUpdateWithoutUserInput>
  }

  export type CaregiverUpdateOneWithoutUserNestedInput = {
    create?: XOR<CaregiverCreateWithoutUserInput, CaregiverUncheckedCreateWithoutUserInput>
    connectOrCreate?: CaregiverCreateOrConnectWithoutUserInput
    upsert?: CaregiverUpsertWithoutUserInput
    disconnect?: CaregiverWhereInput | boolean
    delete?: CaregiverWhereInput | boolean
    connect?: CaregiverWhereUniqueInput
    update?: XOR<XOR<CaregiverUpdateToOneWithWhereWithoutUserInput, CaregiverUpdateWithoutUserInput>, CaregiverUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewerInput | ReviewUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewerInput | ReviewUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewerInput | ReviewUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutTargetUserNestedInput = {
    create?: XOR<ReviewCreateWithoutTargetUserInput, ReviewUncheckedCreateWithoutTargetUserInput> | ReviewCreateWithoutTargetUserInput[] | ReviewUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTargetUserInput | ReviewCreateOrConnectWithoutTargetUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutTargetUserInput | ReviewUpsertWithWhereUniqueWithoutTargetUserInput[]
    createMany?: ReviewCreateManyTargetUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutTargetUserInput | ReviewUpdateWithWhereUniqueWithoutTargetUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutTargetUserInput | ReviewUpdateManyWithWhereWithoutTargetUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type OwnerProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<OwnerProfileCreateWithoutUserInput, OwnerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: OwnerProfileCreateOrConnectWithoutUserInput
    upsert?: OwnerProfileUpsertWithoutUserInput
    disconnect?: OwnerProfileWhereInput | boolean
    delete?: OwnerProfileWhereInput | boolean
    connect?: OwnerProfileWhereUniqueInput
    update?: XOR<XOR<OwnerProfileUpdateToOneWithWhereWithoutUserInput, OwnerProfileUpdateWithoutUserInput>, OwnerProfileUncheckedUpdateWithoutUserInput>
  }

  export type CaregiverUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CaregiverCreateWithoutUserInput, CaregiverUncheckedCreateWithoutUserInput>
    connectOrCreate?: CaregiverCreateOrConnectWithoutUserInput
    upsert?: CaregiverUpsertWithoutUserInput
    disconnect?: CaregiverWhereInput | boolean
    delete?: CaregiverWhereInput | boolean
    connect?: CaregiverWhereUniqueInput
    update?: XOR<XOR<CaregiverUpdateToOneWithWhereWithoutUserInput, CaregiverUpdateWithoutUserInput>, CaregiverUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewerInput | ReviewUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewerInput | ReviewUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewerInput | ReviewUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutTargetUserNestedInput = {
    create?: XOR<ReviewCreateWithoutTargetUserInput, ReviewUncheckedCreateWithoutTargetUserInput> | ReviewCreateWithoutTargetUserInput[] | ReviewUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTargetUserInput | ReviewCreateOrConnectWithoutTargetUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutTargetUserInput | ReviewUpsertWithWhereUniqueWithoutTargetUserInput[]
    createMany?: ReviewCreateManyTargetUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutTargetUserInput | ReviewUpdateWithWhereUniqueWithoutTargetUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutTargetUserInput | ReviewUpdateManyWithWhereWithoutTargetUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserAuthCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserAuthCreateWithoutRefreshTokensInput, UserAuthUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserAuthCreateOrConnectWithoutRefreshTokensInput
    connect?: UserAuthWhereUniqueInput
  }

  export type UserAuthUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UserAuthCreateWithoutRefreshTokensInput, UserAuthUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserAuthCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserAuthUpsertWithoutRefreshTokensInput
    connect?: UserAuthWhereUniqueInput
    update?: XOR<XOR<UserAuthUpdateToOneWithWhereWithoutRefreshTokensInput, UserAuthUpdateWithoutRefreshTokensInput>, UserAuthUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumStateFilter<$PrismaModel = never> = {
    equals?: $Enums.State | EnumStateFieldRefInput<$PrismaModel>
    in?: $Enums.State[] | ListEnumStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.State[] | ListEnumStateFieldRefInput<$PrismaModel>
    not?: NestedEnumStateFilter<$PrismaModel> | $Enums.State
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.State | EnumStateFieldRefInput<$PrismaModel>
    in?: $Enums.State[] | ListEnumStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.State[] | ListEnumStateFieldRefInput<$PrismaModel>
    not?: NestedEnumStateWithAggregatesFilter<$PrismaModel> | $Enums.State
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStateFilter<$PrismaModel>
    _max?: NestedEnumStateFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type OwnerProfileCreateWithoutAddressInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    searchRadiusKm?: number | null
    phone?: string | null
    user: UserAuthCreateNestedOneWithoutOwnerProfileInput
  }

  export type OwnerProfileUncheckedCreateWithoutAddressInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    searchRadiusKm?: number | null
    phone?: string | null
  }

  export type OwnerProfileCreateOrConnectWithoutAddressInput = {
    where: OwnerProfileWhereUniqueInput
    create: XOR<OwnerProfileCreateWithoutAddressInput, OwnerProfileUncheckedCreateWithoutAddressInput>
  }

  export type CaregiverCreateWithoutAddressInput = {
    offersHosting: boolean
    serviceRadiusKm: number
    isVerified?: boolean
    isPublicProfile?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserAuthCreateNestedOneWithoutCaregiverInput
    services?: ServiceOfferCreateNestedManyWithoutCaregiverInput
  }

  export type CaregiverUncheckedCreateWithoutAddressInput = {
    id?: number
    userId: number
    offersHosting: boolean
    serviceRadiusKm: number
    isVerified?: boolean
    isPublicProfile?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceOfferUncheckedCreateNestedManyWithoutCaregiverInput
  }

  export type CaregiverCreateOrConnectWithoutAddressInput = {
    where: CaregiverWhereUniqueInput
    create: XOR<CaregiverCreateWithoutAddressInput, CaregiverUncheckedCreateWithoutAddressInput>
  }

  export type OwnerProfileUpsertWithoutAddressInput = {
    update: XOR<OwnerProfileUpdateWithoutAddressInput, OwnerProfileUncheckedUpdateWithoutAddressInput>
    create: XOR<OwnerProfileCreateWithoutAddressInput, OwnerProfileUncheckedCreateWithoutAddressInput>
    where?: OwnerProfileWhereInput
  }

  export type OwnerProfileUpdateToOneWithWhereWithoutAddressInput = {
    where?: OwnerProfileWhereInput
    data: XOR<OwnerProfileUpdateWithoutAddressInput, OwnerProfileUncheckedUpdateWithoutAddressInput>
  }

  export type OwnerProfileUpdateWithoutAddressInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    searchRadiusKm?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserAuthUpdateOneRequiredWithoutOwnerProfileNestedInput
  }

  export type OwnerProfileUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    searchRadiusKm?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CaregiverUpsertWithoutAddressInput = {
    update: XOR<CaregiverUpdateWithoutAddressInput, CaregiverUncheckedUpdateWithoutAddressInput>
    create: XOR<CaregiverCreateWithoutAddressInput, CaregiverUncheckedCreateWithoutAddressInput>
    where?: CaregiverWhereInput
  }

  export type CaregiverUpdateToOneWithWhereWithoutAddressInput = {
    where?: CaregiverWhereInput
    data: XOR<CaregiverUpdateWithoutAddressInput, CaregiverUncheckedUpdateWithoutAddressInput>
  }

  export type CaregiverUpdateWithoutAddressInput = {
    offersHosting?: BoolFieldUpdateOperationsInput | boolean
    serviceRadiusKm?: FloatFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isPublicProfile?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserAuthUpdateOneRequiredWithoutCaregiverNestedInput
    services?: ServiceOfferUpdateManyWithoutCaregiverNestedInput
  }

  export type CaregiverUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    offersHosting?: BoolFieldUpdateOperationsInput | boolean
    serviceRadiusKm?: FloatFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isPublicProfile?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceOfferUncheckedUpdateManyWithoutCaregiverNestedInput
  }

  export type AddressCreateWithoutCaregiverInput = {
    street: string
    number: string
    neighborhood: string
    city: string
    state: $Enums.State
    zipCode: string
    latitude?: number | null
    longitude?: number | null
    complement?: string | null
    ownerProfile?: OwnerProfileCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutCaregiverInput = {
    id?: number
    street: string
    number: string
    neighborhood: string
    city: string
    state: $Enums.State
    zipCode: string
    latitude?: number | null
    longitude?: number | null
    complement?: string | null
    ownerProfileId?: number | null
  }

  export type AddressCreateOrConnectWithoutCaregiverInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutCaregiverInput, AddressUncheckedCreateWithoutCaregiverInput>
  }

  export type UserAuthCreateWithoutCaregiverInput = {
    name: string
    email: string
    passwordHash: string
    isActive?: boolean
    profilePhotoUrl?: string | null
    birthDate: Date | string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerProfile?: OwnerProfileCreateNestedOneWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutTargetUserInput
  }

  export type UserAuthUncheckedCreateWithoutCaregiverInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    isActive?: boolean
    profilePhotoUrl?: string | null
    birthDate: Date | string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerProfile?: OwnerProfileUncheckedCreateNestedOneWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutTargetUserInput
  }

  export type UserAuthCreateOrConnectWithoutCaregiverInput = {
    where: UserAuthWhereUniqueInput
    create: XOR<UserAuthCreateWithoutCaregiverInput, UserAuthUncheckedCreateWithoutCaregiverInput>
  }

  export type ServiceOfferCreateWithoutCaregiverInput = {
    description?: string | null
    price: number
    isActive?: boolean
    service: ServiceCreateNestedOneWithoutOffersInput
    reviews?: ReviewCreateNestedManyWithoutServiceOfferInput
  }

  export type ServiceOfferUncheckedCreateWithoutCaregiverInput = {
    id?: number
    serviceId: number
    description?: string | null
    price: number
    isActive?: boolean
    reviews?: ReviewUncheckedCreateNestedManyWithoutServiceOfferInput
  }

  export type ServiceOfferCreateOrConnectWithoutCaregiverInput = {
    where: ServiceOfferWhereUniqueInput
    create: XOR<ServiceOfferCreateWithoutCaregiverInput, ServiceOfferUncheckedCreateWithoutCaregiverInput>
  }

  export type ServiceOfferCreateManyCaregiverInputEnvelope = {
    data: ServiceOfferCreateManyCaregiverInput | ServiceOfferCreateManyCaregiverInput[]
    skipDuplicates?: boolean
  }

  export type AddressUpsertWithoutCaregiverInput = {
    update: XOR<AddressUpdateWithoutCaregiverInput, AddressUncheckedUpdateWithoutCaregiverInput>
    create: XOR<AddressCreateWithoutCaregiverInput, AddressUncheckedCreateWithoutCaregiverInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutCaregiverInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutCaregiverInput, AddressUncheckedUpdateWithoutCaregiverInput>
  }

  export type AddressUpdateWithoutCaregiverInput = {
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    zipCode?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    ownerProfile?: OwnerProfileUpdateOneWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutCaregiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    zipCode?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    ownerProfileId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserAuthUpsertWithoutCaregiverInput = {
    update: XOR<UserAuthUpdateWithoutCaregiverInput, UserAuthUncheckedUpdateWithoutCaregiverInput>
    create: XOR<UserAuthCreateWithoutCaregiverInput, UserAuthUncheckedCreateWithoutCaregiverInput>
    where?: UserAuthWhereInput
  }

  export type UserAuthUpdateToOneWithWhereWithoutCaregiverInput = {
    where?: UserAuthWhereInput
    data: XOR<UserAuthUpdateWithoutCaregiverInput, UserAuthUncheckedUpdateWithoutCaregiverInput>
  }

  export type UserAuthUpdateWithoutCaregiverInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerProfile?: OwnerProfileUpdateOneWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutTargetUserNestedInput
  }

  export type UserAuthUncheckedUpdateWithoutCaregiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerProfile?: OwnerProfileUncheckedUpdateOneWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutTargetUserNestedInput
  }

  export type ServiceOfferUpsertWithWhereUniqueWithoutCaregiverInput = {
    where: ServiceOfferWhereUniqueInput
    update: XOR<ServiceOfferUpdateWithoutCaregiverInput, ServiceOfferUncheckedUpdateWithoutCaregiverInput>
    create: XOR<ServiceOfferCreateWithoutCaregiverInput, ServiceOfferUncheckedCreateWithoutCaregiverInput>
  }

  export type ServiceOfferUpdateWithWhereUniqueWithoutCaregiverInput = {
    where: ServiceOfferWhereUniqueInput
    data: XOR<ServiceOfferUpdateWithoutCaregiverInput, ServiceOfferUncheckedUpdateWithoutCaregiverInput>
  }

  export type ServiceOfferUpdateManyWithWhereWithoutCaregiverInput = {
    where: ServiceOfferScalarWhereInput
    data: XOR<ServiceOfferUpdateManyMutationInput, ServiceOfferUncheckedUpdateManyWithoutCaregiverInput>
  }

  export type ServiceOfferScalarWhereInput = {
    AND?: ServiceOfferScalarWhereInput | ServiceOfferScalarWhereInput[]
    OR?: ServiceOfferScalarWhereInput[]
    NOT?: ServiceOfferScalarWhereInput | ServiceOfferScalarWhereInput[]
    id?: IntFilter<"ServiceOffer"> | number
    caregiverId?: IntFilter<"ServiceOffer"> | number
    serviceId?: IntFilter<"ServiceOffer"> | number
    description?: StringNullableFilter<"ServiceOffer"> | string | null
    price?: FloatFilter<"ServiceOffer"> | number
    isActive?: BoolFilter<"ServiceOffer"> | boolean
  }

  export type AddressCreateWithoutOwnerProfileInput = {
    street: string
    number: string
    neighborhood: string
    city: string
    state: $Enums.State
    zipCode: string
    latitude?: number | null
    longitude?: number | null
    complement?: string | null
    caregiver?: CaregiverCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutOwnerProfileInput = {
    id?: number
    street: string
    number: string
    neighborhood: string
    city: string
    state: $Enums.State
    zipCode: string
    latitude?: number | null
    longitude?: number | null
    complement?: string | null
    caregiverId?: number | null
  }

  export type AddressCreateOrConnectWithoutOwnerProfileInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutOwnerProfileInput, AddressUncheckedCreateWithoutOwnerProfileInput>
  }

  export type UserAuthCreateWithoutOwnerProfileInput = {
    name: string
    email: string
    passwordHash: string
    isActive?: boolean
    profilePhotoUrl?: string | null
    birthDate: Date | string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    caregiver?: CaregiverCreateNestedOneWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutTargetUserInput
  }

  export type UserAuthUncheckedCreateWithoutOwnerProfileInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    isActive?: boolean
    profilePhotoUrl?: string | null
    birthDate: Date | string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    caregiver?: CaregiverUncheckedCreateNestedOneWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutTargetUserInput
  }

  export type UserAuthCreateOrConnectWithoutOwnerProfileInput = {
    where: UserAuthWhereUniqueInput
    create: XOR<UserAuthCreateWithoutOwnerProfileInput, UserAuthUncheckedCreateWithoutOwnerProfileInput>
  }

  export type AddressUpsertWithoutOwnerProfileInput = {
    update: XOR<AddressUpdateWithoutOwnerProfileInput, AddressUncheckedUpdateWithoutOwnerProfileInput>
    create: XOR<AddressCreateWithoutOwnerProfileInput, AddressUncheckedCreateWithoutOwnerProfileInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutOwnerProfileInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutOwnerProfileInput, AddressUncheckedUpdateWithoutOwnerProfileInput>
  }

  export type AddressUpdateWithoutOwnerProfileInput = {
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    zipCode?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    caregiver?: CaregiverUpdateOneWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutOwnerProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: EnumStateFieldUpdateOperationsInput | $Enums.State
    zipCode?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    caregiverId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserAuthUpsertWithoutOwnerProfileInput = {
    update: XOR<UserAuthUpdateWithoutOwnerProfileInput, UserAuthUncheckedUpdateWithoutOwnerProfileInput>
    create: XOR<UserAuthCreateWithoutOwnerProfileInput, UserAuthUncheckedCreateWithoutOwnerProfileInput>
    where?: UserAuthWhereInput
  }

  export type UserAuthUpdateToOneWithWhereWithoutOwnerProfileInput = {
    where?: UserAuthWhereInput
    data: XOR<UserAuthUpdateWithoutOwnerProfileInput, UserAuthUncheckedUpdateWithoutOwnerProfileInput>
  }

  export type UserAuthUpdateWithoutOwnerProfileInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caregiver?: CaregiverUpdateOneWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutTargetUserNestedInput
  }

  export type UserAuthUncheckedUpdateWithoutOwnerProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caregiver?: CaregiverUncheckedUpdateOneWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutTargetUserNestedInput
  }

  export type ServiceOfferCreateWithoutReviewsInput = {
    description?: string | null
    price: number
    isActive?: boolean
    caregiver: CaregiverCreateNestedOneWithoutServicesInput
    service: ServiceCreateNestedOneWithoutOffersInput
  }

  export type ServiceOfferUncheckedCreateWithoutReviewsInput = {
    id?: number
    caregiverId: number
    serviceId: number
    description?: string | null
    price: number
    isActive?: boolean
  }

  export type ServiceOfferCreateOrConnectWithoutReviewsInput = {
    where: ServiceOfferWhereUniqueInput
    create: XOR<ServiceOfferCreateWithoutReviewsInput, ServiceOfferUncheckedCreateWithoutReviewsInput>
  }

  export type UserAuthCreateWithoutReviewsGivenInput = {
    name: string
    email: string
    passwordHash: string
    isActive?: boolean
    profilePhotoUrl?: string | null
    birthDate: Date | string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerProfile?: OwnerProfileCreateNestedOneWithoutUserInput
    caregiver?: CaregiverCreateNestedOneWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    reviewsReceived?: ReviewCreateNestedManyWithoutTargetUserInput
  }

  export type UserAuthUncheckedCreateWithoutReviewsGivenInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    isActive?: boolean
    profilePhotoUrl?: string | null
    birthDate: Date | string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerProfile?: OwnerProfileUncheckedCreateNestedOneWithoutUserInput
    caregiver?: CaregiverUncheckedCreateNestedOneWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutTargetUserInput
  }

  export type UserAuthCreateOrConnectWithoutReviewsGivenInput = {
    where: UserAuthWhereUniqueInput
    create: XOR<UserAuthCreateWithoutReviewsGivenInput, UserAuthUncheckedCreateWithoutReviewsGivenInput>
  }

  export type UserAuthCreateWithoutReviewsReceivedInput = {
    name: string
    email: string
    passwordHash: string
    isActive?: boolean
    profilePhotoUrl?: string | null
    birthDate: Date | string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerProfile?: OwnerProfileCreateNestedOneWithoutUserInput
    caregiver?: CaregiverCreateNestedOneWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
  }

  export type UserAuthUncheckedCreateWithoutReviewsReceivedInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    isActive?: boolean
    profilePhotoUrl?: string | null
    birthDate: Date | string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerProfile?: OwnerProfileUncheckedCreateNestedOneWithoutUserInput
    caregiver?: CaregiverUncheckedCreateNestedOneWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type UserAuthCreateOrConnectWithoutReviewsReceivedInput = {
    where: UserAuthWhereUniqueInput
    create: XOR<UserAuthCreateWithoutReviewsReceivedInput, UserAuthUncheckedCreateWithoutReviewsReceivedInput>
  }

  export type ServiceOfferUpsertWithoutReviewsInput = {
    update: XOR<ServiceOfferUpdateWithoutReviewsInput, ServiceOfferUncheckedUpdateWithoutReviewsInput>
    create: XOR<ServiceOfferCreateWithoutReviewsInput, ServiceOfferUncheckedCreateWithoutReviewsInput>
    where?: ServiceOfferWhereInput
  }

  export type ServiceOfferUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ServiceOfferWhereInput
    data: XOR<ServiceOfferUpdateWithoutReviewsInput, ServiceOfferUncheckedUpdateWithoutReviewsInput>
  }

  export type ServiceOfferUpdateWithoutReviewsInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    caregiver?: CaregiverUpdateOneRequiredWithoutServicesNestedInput
    service?: ServiceUpdateOneRequiredWithoutOffersNestedInput
  }

  export type ServiceOfferUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    caregiverId?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserAuthUpsertWithoutReviewsGivenInput = {
    update: XOR<UserAuthUpdateWithoutReviewsGivenInput, UserAuthUncheckedUpdateWithoutReviewsGivenInput>
    create: XOR<UserAuthCreateWithoutReviewsGivenInput, UserAuthUncheckedCreateWithoutReviewsGivenInput>
    where?: UserAuthWhereInput
  }

  export type UserAuthUpdateToOneWithWhereWithoutReviewsGivenInput = {
    where?: UserAuthWhereInput
    data: XOR<UserAuthUpdateWithoutReviewsGivenInput, UserAuthUncheckedUpdateWithoutReviewsGivenInput>
  }

  export type UserAuthUpdateWithoutReviewsGivenInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerProfile?: OwnerProfileUpdateOneWithoutUserNestedInput
    caregiver?: CaregiverUpdateOneWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutTargetUserNestedInput
  }

  export type UserAuthUncheckedUpdateWithoutReviewsGivenInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerProfile?: OwnerProfileUncheckedUpdateOneWithoutUserNestedInput
    caregiver?: CaregiverUncheckedUpdateOneWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutTargetUserNestedInput
  }

  export type UserAuthUpsertWithoutReviewsReceivedInput = {
    update: XOR<UserAuthUpdateWithoutReviewsReceivedInput, UserAuthUncheckedUpdateWithoutReviewsReceivedInput>
    create: XOR<UserAuthCreateWithoutReviewsReceivedInput, UserAuthUncheckedCreateWithoutReviewsReceivedInput>
    where?: UserAuthWhereInput
  }

  export type UserAuthUpdateToOneWithWhereWithoutReviewsReceivedInput = {
    where?: UserAuthWhereInput
    data: XOR<UserAuthUpdateWithoutReviewsReceivedInput, UserAuthUncheckedUpdateWithoutReviewsReceivedInput>
  }

  export type UserAuthUpdateWithoutReviewsReceivedInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerProfile?: OwnerProfileUpdateOneWithoutUserNestedInput
    caregiver?: CaregiverUpdateOneWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
  }

  export type UserAuthUncheckedUpdateWithoutReviewsReceivedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerProfile?: OwnerProfileUncheckedUpdateOneWithoutUserNestedInput
    caregiver?: CaregiverUncheckedUpdateOneWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type ServiceOfferCreateWithoutServiceInput = {
    description?: string | null
    price: number
    isActive?: boolean
    caregiver: CaregiverCreateNestedOneWithoutServicesInput
    reviews?: ReviewCreateNestedManyWithoutServiceOfferInput
  }

  export type ServiceOfferUncheckedCreateWithoutServiceInput = {
    id?: number
    caregiverId: number
    description?: string | null
    price: number
    isActive?: boolean
    reviews?: ReviewUncheckedCreateNestedManyWithoutServiceOfferInput
  }

  export type ServiceOfferCreateOrConnectWithoutServiceInput = {
    where: ServiceOfferWhereUniqueInput
    create: XOR<ServiceOfferCreateWithoutServiceInput, ServiceOfferUncheckedCreateWithoutServiceInput>
  }

  export type ServiceOfferCreateManyServiceInputEnvelope = {
    data: ServiceOfferCreateManyServiceInput | ServiceOfferCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type ServiceOfferUpsertWithWhereUniqueWithoutServiceInput = {
    where: ServiceOfferWhereUniqueInput
    update: XOR<ServiceOfferUpdateWithoutServiceInput, ServiceOfferUncheckedUpdateWithoutServiceInput>
    create: XOR<ServiceOfferCreateWithoutServiceInput, ServiceOfferUncheckedCreateWithoutServiceInput>
  }

  export type ServiceOfferUpdateWithWhereUniqueWithoutServiceInput = {
    where: ServiceOfferWhereUniqueInput
    data: XOR<ServiceOfferUpdateWithoutServiceInput, ServiceOfferUncheckedUpdateWithoutServiceInput>
  }

  export type ServiceOfferUpdateManyWithWhereWithoutServiceInput = {
    where: ServiceOfferScalarWhereInput
    data: XOR<ServiceOfferUpdateManyMutationInput, ServiceOfferUncheckedUpdateManyWithoutServiceInput>
  }

  export type CaregiverCreateWithoutServicesInput = {
    offersHosting: boolean
    serviceRadiusKm: number
    isVerified?: boolean
    isPublicProfile?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressCreateNestedOneWithoutCaregiverInput
    user: UserAuthCreateNestedOneWithoutCaregiverInput
  }

  export type CaregiverUncheckedCreateWithoutServicesInput = {
    id?: number
    userId: number
    offersHosting: boolean
    serviceRadiusKm: number
    isVerified?: boolean
    isPublicProfile?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressUncheckedCreateNestedOneWithoutCaregiverInput
  }

  export type CaregiverCreateOrConnectWithoutServicesInput = {
    where: CaregiverWhereUniqueInput
    create: XOR<CaregiverCreateWithoutServicesInput, CaregiverUncheckedCreateWithoutServicesInput>
  }

  export type ServiceCreateWithoutOffersInput = {
    name: string
    description: string
  }

  export type ServiceUncheckedCreateWithoutOffersInput = {
    id?: number
    name: string
    description: string
  }

  export type ServiceCreateOrConnectWithoutOffersInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutOffersInput, ServiceUncheckedCreateWithoutOffersInput>
  }

  export type ReviewCreateWithoutServiceOfferInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    reviewer: UserAuthCreateNestedOneWithoutReviewsGivenInput
    targetUser: UserAuthCreateNestedOneWithoutReviewsReceivedInput
  }

  export type ReviewUncheckedCreateWithoutServiceOfferInput = {
    id?: number
    reviewerUserId: number
    targetUserId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutServiceOfferInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutServiceOfferInput, ReviewUncheckedCreateWithoutServiceOfferInput>
  }

  export type ReviewCreateManyServiceOfferInputEnvelope = {
    data: ReviewCreateManyServiceOfferInput | ReviewCreateManyServiceOfferInput[]
    skipDuplicates?: boolean
  }

  export type CaregiverUpsertWithoutServicesInput = {
    update: XOR<CaregiverUpdateWithoutServicesInput, CaregiverUncheckedUpdateWithoutServicesInput>
    create: XOR<CaregiverCreateWithoutServicesInput, CaregiverUncheckedCreateWithoutServicesInput>
    where?: CaregiverWhereInput
  }

  export type CaregiverUpdateToOneWithWhereWithoutServicesInput = {
    where?: CaregiverWhereInput
    data: XOR<CaregiverUpdateWithoutServicesInput, CaregiverUncheckedUpdateWithoutServicesInput>
  }

  export type CaregiverUpdateWithoutServicesInput = {
    offersHosting?: BoolFieldUpdateOperationsInput | boolean
    serviceRadiusKm?: FloatFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isPublicProfile?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneWithoutCaregiverNestedInput
    user?: UserAuthUpdateOneRequiredWithoutCaregiverNestedInput
  }

  export type CaregiverUncheckedUpdateWithoutServicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    offersHosting?: BoolFieldUpdateOperationsInput | boolean
    serviceRadiusKm?: FloatFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isPublicProfile?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateOneWithoutCaregiverNestedInput
  }

  export type ServiceUpsertWithoutOffersInput = {
    update: XOR<ServiceUpdateWithoutOffersInput, ServiceUncheckedUpdateWithoutOffersInput>
    create: XOR<ServiceCreateWithoutOffersInput, ServiceUncheckedCreateWithoutOffersInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutOffersInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutOffersInput, ServiceUncheckedUpdateWithoutOffersInput>
  }

  export type ServiceUpdateWithoutOffersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceUncheckedUpdateWithoutOffersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutServiceOfferInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutServiceOfferInput, ReviewUncheckedUpdateWithoutServiceOfferInput>
    create: XOR<ReviewCreateWithoutServiceOfferInput, ReviewUncheckedCreateWithoutServiceOfferInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutServiceOfferInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutServiceOfferInput, ReviewUncheckedUpdateWithoutServiceOfferInput>
  }

  export type ReviewUpdateManyWithWhereWithoutServiceOfferInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutServiceOfferInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    serviceOfferId?: IntNullableFilter<"Review"> | number | null
    reviewerUserId?: IntFilter<"Review"> | number
    targetUserId?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type OwnerProfileCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    searchRadiusKm?: number | null
    phone?: string | null
    address?: AddressCreateNestedOneWithoutOwnerProfileInput
  }

  export type OwnerProfileUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    searchRadiusKm?: number | null
    phone?: string | null
    address?: AddressUncheckedCreateNestedOneWithoutOwnerProfileInput
  }

  export type OwnerProfileCreateOrConnectWithoutUserInput = {
    where: OwnerProfileWhereUniqueInput
    create: XOR<OwnerProfileCreateWithoutUserInput, OwnerProfileUncheckedCreateWithoutUserInput>
  }

  export type CaregiverCreateWithoutUserInput = {
    offersHosting: boolean
    serviceRadiusKm: number
    isVerified?: boolean
    isPublicProfile?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressCreateNestedOneWithoutCaregiverInput
    services?: ServiceOfferCreateNestedManyWithoutCaregiverInput
  }

  export type CaregiverUncheckedCreateWithoutUserInput = {
    id?: number
    offersHosting: boolean
    serviceRadiusKm: number
    isVerified?: boolean
    isPublicProfile?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressUncheckedCreateNestedOneWithoutCaregiverInput
    services?: ServiceOfferUncheckedCreateNestedManyWithoutCaregiverInput
  }

  export type CaregiverCreateOrConnectWithoutUserInput = {
    where: CaregiverWhereUniqueInput
    create: XOR<CaregiverCreateWithoutUserInput, CaregiverUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateWithoutUserInput = {
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutReviewerInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    serviceOffer?: ServiceOfferCreateNestedOneWithoutReviewsInput
    targetUser: UserAuthCreateNestedOneWithoutReviewsReceivedInput
  }

  export type ReviewUncheckedCreateWithoutReviewerInput = {
    id?: number
    serviceOfferId?: number | null
    targetUserId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput>
  }

  export type ReviewCreateManyReviewerInputEnvelope = {
    data: ReviewCreateManyReviewerInput | ReviewCreateManyReviewerInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutTargetUserInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    serviceOffer?: ServiceOfferCreateNestedOneWithoutReviewsInput
    reviewer: UserAuthCreateNestedOneWithoutReviewsGivenInput
  }

  export type ReviewUncheckedCreateWithoutTargetUserInput = {
    id?: number
    serviceOfferId?: number | null
    reviewerUserId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutTargetUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutTargetUserInput, ReviewUncheckedCreateWithoutTargetUserInput>
  }

  export type ReviewCreateManyTargetUserInputEnvelope = {
    data: ReviewCreateManyTargetUserInput | ReviewCreateManyTargetUserInput[]
    skipDuplicates?: boolean
  }

  export type OwnerProfileUpsertWithoutUserInput = {
    update: XOR<OwnerProfileUpdateWithoutUserInput, OwnerProfileUncheckedUpdateWithoutUserInput>
    create: XOR<OwnerProfileCreateWithoutUserInput, OwnerProfileUncheckedCreateWithoutUserInput>
    where?: OwnerProfileWhereInput
  }

  export type OwnerProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: OwnerProfileWhereInput
    data: XOR<OwnerProfileUpdateWithoutUserInput, OwnerProfileUncheckedUpdateWithoutUserInput>
  }

  export type OwnerProfileUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    searchRadiusKm?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: AddressUpdateOneWithoutOwnerProfileNestedInput
  }

  export type OwnerProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    searchRadiusKm?: NullableFloatFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: AddressUncheckedUpdateOneWithoutOwnerProfileNestedInput
  }

  export type CaregiverUpsertWithoutUserInput = {
    update: XOR<CaregiverUpdateWithoutUserInput, CaregiverUncheckedUpdateWithoutUserInput>
    create: XOR<CaregiverCreateWithoutUserInput, CaregiverUncheckedCreateWithoutUserInput>
    where?: CaregiverWhereInput
  }

  export type CaregiverUpdateToOneWithWhereWithoutUserInput = {
    where?: CaregiverWhereInput
    data: XOR<CaregiverUpdateWithoutUserInput, CaregiverUncheckedUpdateWithoutUserInput>
  }

  export type CaregiverUpdateWithoutUserInput = {
    offersHosting?: BoolFieldUpdateOperationsInput | boolean
    serviceRadiusKm?: FloatFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isPublicProfile?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneWithoutCaregiverNestedInput
    services?: ServiceOfferUpdateManyWithoutCaregiverNestedInput
  }

  export type CaregiverUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    offersHosting?: BoolFieldUpdateOperationsInput | boolean
    serviceRadiusKm?: FloatFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isPublicProfile?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateOneWithoutCaregiverNestedInput
    services?: ServiceOfferUncheckedUpdateManyWithoutCaregiverNestedInput
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    token?: StringFilter<"RefreshToken"> | string
    userId?: IntFilter<"RefreshToken"> | number
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutReviewerInput, ReviewUncheckedUpdateWithoutReviewerInput>
    create: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutReviewerInput, ReviewUncheckedUpdateWithoutReviewerInput>
  }

  export type ReviewUpdateManyWithWhereWithoutReviewerInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutReviewerInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutTargetUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutTargetUserInput, ReviewUncheckedUpdateWithoutTargetUserInput>
    create: XOR<ReviewCreateWithoutTargetUserInput, ReviewUncheckedCreateWithoutTargetUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutTargetUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutTargetUserInput, ReviewUncheckedUpdateWithoutTargetUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutTargetUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutTargetUserInput>
  }

  export type UserAuthCreateWithoutRefreshTokensInput = {
    name: string
    email: string
    passwordHash: string
    isActive?: boolean
    profilePhotoUrl?: string | null
    birthDate: Date | string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerProfile?: OwnerProfileCreateNestedOneWithoutUserInput
    caregiver?: CaregiverCreateNestedOneWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutTargetUserInput
  }

  export type UserAuthUncheckedCreateWithoutRefreshTokensInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    isActive?: boolean
    profilePhotoUrl?: string | null
    birthDate: Date | string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerProfile?: OwnerProfileUncheckedCreateNestedOneWithoutUserInput
    caregiver?: CaregiverUncheckedCreateNestedOneWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutTargetUserInput
  }

  export type UserAuthCreateOrConnectWithoutRefreshTokensInput = {
    where: UserAuthWhereUniqueInput
    create: XOR<UserAuthCreateWithoutRefreshTokensInput, UserAuthUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserAuthUpsertWithoutRefreshTokensInput = {
    update: XOR<UserAuthUpdateWithoutRefreshTokensInput, UserAuthUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserAuthCreateWithoutRefreshTokensInput, UserAuthUncheckedCreateWithoutRefreshTokensInput>
    where?: UserAuthWhereInput
  }

  export type UserAuthUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserAuthWhereInput
    data: XOR<UserAuthUpdateWithoutRefreshTokensInput, UserAuthUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserAuthUpdateWithoutRefreshTokensInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerProfile?: OwnerProfileUpdateOneWithoutUserNestedInput
    caregiver?: CaregiverUpdateOneWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutTargetUserNestedInput
  }

  export type UserAuthUncheckedUpdateWithoutRefreshTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerProfile?: OwnerProfileUncheckedUpdateOneWithoutUserNestedInput
    caregiver?: CaregiverUncheckedUpdateOneWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutTargetUserNestedInput
  }

  export type ServiceOfferCreateManyCaregiverInput = {
    id?: number
    serviceId: number
    description?: string | null
    price: number
    isActive?: boolean
  }

  export type ServiceOfferUpdateWithoutCaregiverInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    service?: ServiceUpdateOneRequiredWithoutOffersNestedInput
    reviews?: ReviewUpdateManyWithoutServiceOfferNestedInput
  }

  export type ServiceOfferUncheckedUpdateWithoutCaregiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    reviews?: ReviewUncheckedUpdateManyWithoutServiceOfferNestedInput
  }

  export type ServiceOfferUncheckedUpdateManyWithoutCaregiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ServiceOfferCreateManyServiceInput = {
    id?: number
    caregiverId: number
    description?: string | null
    price: number
    isActive?: boolean
  }

  export type ServiceOfferUpdateWithoutServiceInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    caregiver?: CaregiverUpdateOneRequiredWithoutServicesNestedInput
    reviews?: ReviewUpdateManyWithoutServiceOfferNestedInput
  }

  export type ServiceOfferUncheckedUpdateWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    caregiverId?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    reviews?: ReviewUncheckedUpdateManyWithoutServiceOfferNestedInput
  }

  export type ServiceOfferUncheckedUpdateManyWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    caregiverId?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReviewCreateManyServiceOfferInput = {
    id?: number
    reviewerUserId: number
    targetUserId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewUpdateWithoutServiceOfferInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: UserAuthUpdateOneRequiredWithoutReviewsGivenNestedInput
    targetUser?: UserAuthUpdateOneRequiredWithoutReviewsReceivedNestedInput
  }

  export type ReviewUncheckedUpdateWithoutServiceOfferInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewerUserId?: IntFieldUpdateOperationsInput | number
    targetUserId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutServiceOfferInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewerUserId?: IntFieldUpdateOperationsInput | number
    targetUserId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyUserInput = {
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type ReviewCreateManyReviewerInput = {
    id?: number
    serviceOfferId?: number | null
    targetUserId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateManyTargetUserInput = {
    id?: number
    serviceOfferId?: number | null
    reviewerUserId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutReviewerInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceOffer?: ServiceOfferUpdateOneWithoutReviewsNestedInput
    targetUser?: UserAuthUpdateOneRequiredWithoutReviewsReceivedNestedInput
  }

  export type ReviewUncheckedUpdateWithoutReviewerInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceOfferId?: NullableIntFieldUpdateOperationsInput | number | null
    targetUserId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutReviewerInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceOfferId?: NullableIntFieldUpdateOperationsInput | number | null
    targetUserId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutTargetUserInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceOffer?: ServiceOfferUpdateOneWithoutReviewsNestedInput
    reviewer?: UserAuthUpdateOneRequiredWithoutReviewsGivenNestedInput
  }

  export type ReviewUncheckedUpdateWithoutTargetUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceOfferId?: NullableIntFieldUpdateOperationsInput | number | null
    reviewerUserId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutTargetUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceOfferId?: NullableIntFieldUpdateOperationsInput | number | null
    reviewerUserId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
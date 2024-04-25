
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Player
 * 
 */
export type Player = $Result.DefaultSelection<Prisma.$PlayerPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model Tournament
 * 
 */
export type Tournament = $Result.DefaultSelection<Prisma.$TournamentPayload>
/**
 * Model TournamentApplication
 * 
 */
export type TournamentApplication = $Result.DefaultSelection<Prisma.$TournamentApplicationPayload>
/**
 * Model Match
 * 
 */
export type Match = $Result.DefaultSelection<Prisma.$MatchPayload>
/**
 * Model MatchApplication
 * 
 */
export type MatchApplication = $Result.DefaultSelection<Prisma.$MatchApplicationPayload>
/**
 * Model MatchTimeline
 * 
 */
export type MatchTimeline = $Result.DefaultSelection<Prisma.$MatchTimelinePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  PLAYER: 'PLAYER',
  ADMIN: 'ADMIN',
  SYSTEM_ADMIN: 'SYSTEM_ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const TournamentStatus: {
  NotStarted: 'NotStarted',
  Pending: 'Pending',
  Completed: 'Completed'
};

export type TournamentStatus = (typeof TournamentStatus)[keyof typeof TournamentStatus]


export const MatchStatus: {
  NotStarted: 'NotStarted',
  Completed: 'Completed',
  Pending: 'Pending'
};

export type MatchStatus = (typeof MatchStatus)[keyof typeof MatchStatus]


export const MatchEvent: {
  GOAL: 'GOAL',
  YELLOW: 'YELLOW',
  RED: 'RED'
};

export type MatchEvent = (typeof MatchEvent)[keyof typeof MatchEvent]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type TournamentStatus = $Enums.TournamentStatus

export const TournamentStatus: typeof $Enums.TournamentStatus

export type MatchStatus = $Enums.MatchStatus

export const MatchStatus: typeof $Enums.MatchStatus

export type MatchEvent = $Enums.MatchEvent

export const MatchEvent: typeof $Enums.MatchEvent

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.player`: Exposes CRUD operations for the **Player** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.player.findMany()
    * ```
    */
  get player(): Prisma.PlayerDelegate<ExtArgs>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs>;

  /**
   * `prisma.tournament`: Exposes CRUD operations for the **Tournament** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tournaments
    * const tournaments = await prisma.tournament.findMany()
    * ```
    */
  get tournament(): Prisma.TournamentDelegate<ExtArgs>;

  /**
   * `prisma.tournamentApplication`: Exposes CRUD operations for the **TournamentApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TournamentApplications
    * const tournamentApplications = await prisma.tournamentApplication.findMany()
    * ```
    */
  get tournamentApplication(): Prisma.TournamentApplicationDelegate<ExtArgs>;

  /**
   * `prisma.match`: Exposes CRUD operations for the **Match** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matches
    * const matches = await prisma.match.findMany()
    * ```
    */
  get match(): Prisma.MatchDelegate<ExtArgs>;

  /**
   * `prisma.matchApplication`: Exposes CRUD operations for the **MatchApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatchApplications
    * const matchApplications = await prisma.matchApplication.findMany()
    * ```
    */
  get matchApplication(): Prisma.MatchApplicationDelegate<ExtArgs>;

  /**
   * `prisma.matchTimeline`: Exposes CRUD operations for the **MatchTimeline** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatchTimelines
    * const matchTimelines = await prisma.matchTimeline.findMany()
    * ```
    */
  get matchTimeline(): Prisma.MatchTimelineDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.12.1
   * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    Player: 'Player',
    Team: 'Team',
    Tournament: 'Tournament',
    TournamentApplication: 'TournamentApplication',
    Match: 'Match',
    MatchApplication: 'MatchApplication',
    MatchTimeline: 'MatchTimeline'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'player' | 'team' | 'tournament' | 'tournamentApplication' | 'match' | 'matchApplication' | 'matchTimeline'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Player: {
        payload: Prisma.$PlayerPayload<ExtArgs>
        fields: Prisma.PlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findFirst: {
            args: Prisma.PlayerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findMany: {
            args: Prisma.PlayerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          create: {
            args: Prisma.PlayerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          createMany: {
            args: Prisma.PlayerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PlayerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          update: {
            args: Prisma.PlayerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          deleteMany: {
            args: Prisma.PlayerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PlayerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          aggregate: {
            args: Prisma.PlayerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePlayer>
          }
          groupBy: {
            args: Prisma.PlayerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerCountArgs<ExtArgs>,
            result: $Utils.Optional<PlayerCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>,
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      Tournament: {
        payload: Prisma.$TournamentPayload<ExtArgs>
        fields: Prisma.TournamentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TournamentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TournamentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          findFirst: {
            args: Prisma.TournamentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TournamentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          findMany: {
            args: Prisma.TournamentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[]
          }
          create: {
            args: Prisma.TournamentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          createMany: {
            args: Prisma.TournamentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TournamentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          update: {
            args: Prisma.TournamentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          deleteMany: {
            args: Prisma.TournamentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TournamentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TournamentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          aggregate: {
            args: Prisma.TournamentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTournament>
          }
          groupBy: {
            args: Prisma.TournamentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TournamentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TournamentCountArgs<ExtArgs>,
            result: $Utils.Optional<TournamentCountAggregateOutputType> | number
          }
        }
      }
      TournamentApplication: {
        payload: Prisma.$TournamentApplicationPayload<ExtArgs>
        fields: Prisma.TournamentApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TournamentApplicationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TournamentApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TournamentApplicationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TournamentApplicationPayload>
          }
          findFirst: {
            args: Prisma.TournamentApplicationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TournamentApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TournamentApplicationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TournamentApplicationPayload>
          }
          findMany: {
            args: Prisma.TournamentApplicationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TournamentApplicationPayload>[]
          }
          create: {
            args: Prisma.TournamentApplicationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TournamentApplicationPayload>
          }
          createMany: {
            args: Prisma.TournamentApplicationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TournamentApplicationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TournamentApplicationPayload>
          }
          update: {
            args: Prisma.TournamentApplicationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TournamentApplicationPayload>
          }
          deleteMany: {
            args: Prisma.TournamentApplicationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TournamentApplicationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TournamentApplicationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TournamentApplicationPayload>
          }
          aggregate: {
            args: Prisma.TournamentApplicationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTournamentApplication>
          }
          groupBy: {
            args: Prisma.TournamentApplicationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TournamentApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.TournamentApplicationCountArgs<ExtArgs>,
            result: $Utils.Optional<TournamentApplicationCountAggregateOutputType> | number
          }
        }
      }
      Match: {
        payload: Prisma.$MatchPayload<ExtArgs>
        fields: Prisma.MatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findFirst: {
            args: Prisma.MatchFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findMany: {
            args: Prisma.MatchFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          create: {
            args: Prisma.MatchCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          createMany: {
            args: Prisma.MatchCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MatchDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          update: {
            args: Prisma.MatchUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          deleteMany: {
            args: Prisma.MatchDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MatchUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MatchUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          aggregate: {
            args: Prisma.MatchAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMatch>
          }
          groupBy: {
            args: Prisma.MatchGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchCountArgs<ExtArgs>,
            result: $Utils.Optional<MatchCountAggregateOutputType> | number
          }
        }
      }
      MatchApplication: {
        payload: Prisma.$MatchApplicationPayload<ExtArgs>
        fields: Prisma.MatchApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchApplicationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchApplicationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchApplicationPayload>
          }
          findFirst: {
            args: Prisma.MatchApplicationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchApplicationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchApplicationPayload>
          }
          findMany: {
            args: Prisma.MatchApplicationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchApplicationPayload>[]
          }
          create: {
            args: Prisma.MatchApplicationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchApplicationPayload>
          }
          createMany: {
            args: Prisma.MatchApplicationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MatchApplicationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchApplicationPayload>
          }
          update: {
            args: Prisma.MatchApplicationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchApplicationPayload>
          }
          deleteMany: {
            args: Prisma.MatchApplicationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MatchApplicationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MatchApplicationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchApplicationPayload>
          }
          aggregate: {
            args: Prisma.MatchApplicationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMatchApplication>
          }
          groupBy: {
            args: Prisma.MatchApplicationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MatchApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchApplicationCountArgs<ExtArgs>,
            result: $Utils.Optional<MatchApplicationCountAggregateOutputType> | number
          }
        }
      }
      MatchTimeline: {
        payload: Prisma.$MatchTimelinePayload<ExtArgs>
        fields: Prisma.MatchTimelineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchTimelineFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchTimelinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchTimelineFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchTimelinePayload>
          }
          findFirst: {
            args: Prisma.MatchTimelineFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchTimelinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchTimelineFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchTimelinePayload>
          }
          findMany: {
            args: Prisma.MatchTimelineFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchTimelinePayload>[]
          }
          create: {
            args: Prisma.MatchTimelineCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchTimelinePayload>
          }
          createMany: {
            args: Prisma.MatchTimelineCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MatchTimelineDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchTimelinePayload>
          }
          update: {
            args: Prisma.MatchTimelineUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchTimelinePayload>
          }
          deleteMany: {
            args: Prisma.MatchTimelineDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MatchTimelineUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MatchTimelineUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MatchTimelinePayload>
          }
          aggregate: {
            args: Prisma.MatchTimelineAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMatchTimeline>
          }
          groupBy: {
            args: Prisma.MatchTimelineGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MatchTimelineGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchTimelineCountArgs<ExtArgs>,
            result: $Utils.Optional<MatchTimelineCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type PlayerCountOutputType
   */

  export type PlayerCountOutputType = {
    tournamentApplications: number
    matchApplications: number
    matchTimeline: number
  }

  export type PlayerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournamentApplications?: boolean | PlayerCountOutputTypeCountTournamentApplicationsArgs
    matchApplications?: boolean | PlayerCountOutputTypeCountMatchApplicationsArgs
    matchTimeline?: boolean | PlayerCountOutputTypeCountMatchTimelineArgs
  }

  // Custom InputTypes

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCountOutputType
     */
    select?: PlayerCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountTournamentApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentApplicationWhereInput
  }


  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountMatchApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchApplicationWhereInput
  }


  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountMatchTimelineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchTimelineWhereInput
  }



  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    tournamentApplications: number
    match: number
    matchApplications: number
    matchTimeline: number
    players: number
    tournamentIds: number
    wonMatchesIds: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournamentApplications?: boolean | TeamCountOutputTypeCountTournamentApplicationsArgs
    match?: boolean | TeamCountOutputTypeCountMatchArgs
    matchApplications?: boolean | TeamCountOutputTypeCountMatchApplicationsArgs
    matchTimeline?: boolean | TeamCountOutputTypeCountMatchTimelineArgs
    players?: boolean | TeamCountOutputTypeCountPlayersArgs
    tournamentIds?: boolean | TeamCountOutputTypeCountTournamentIdsArgs
    wonMatchesIds?: boolean | TeamCountOutputTypeCountWonMatchesIdsArgs
  }

  // Custom InputTypes

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountTournamentApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentApplicationWhereInput
  }


  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountMatchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }


  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountMatchApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchApplicationWhereInput
  }


  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountMatchTimelineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchTimelineWhereInput
  }


  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
  }


  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountTournamentIdsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentWhereInput
  }


  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountWonMatchesIdsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }



  /**
   * Count Type TournamentCountOutputType
   */

  export type TournamentCountOutputType = {
    tournamentApplications: number
    match: number
    teamIds: number
  }

  export type TournamentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournamentApplications?: boolean | TournamentCountOutputTypeCountTournamentApplicationsArgs
    match?: boolean | TournamentCountOutputTypeCountMatchArgs
    teamIds?: boolean | TournamentCountOutputTypeCountTeamIdsArgs
  }

  // Custom InputTypes

  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentCountOutputType
     */
    select?: TournamentCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeCountTournamentApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentApplicationWhereInput
  }


  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeCountMatchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }


  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeCountTeamIdsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
  }



  /**
   * Count Type TournamentApplicationCountOutputType
   */

  export type TournamentApplicationCountOutputType = {
    players: number
  }

  export type TournamentApplicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | TournamentApplicationCountOutputTypeCountPlayersArgs
  }

  // Custom InputTypes

  /**
   * TournamentApplicationCountOutputType without action
   */
  export type TournamentApplicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentApplicationCountOutputType
     */
    select?: TournamentApplicationCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TournamentApplicationCountOutputType without action
   */
  export type TournamentApplicationCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
  }



  /**
   * Count Type MatchCountOutputType
   */

  export type MatchCountOutputType = {
    teams: number
    matchApplications: number
    matchTimeline: number
  }

  export type MatchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | MatchCountOutputTypeCountTeamsArgs
    matchApplications?: boolean | MatchCountOutputTypeCountMatchApplicationsArgs
    matchTimeline?: boolean | MatchCountOutputTypeCountMatchTimelineArgs
  }

  // Custom InputTypes

  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchCountOutputType
     */
    select?: MatchCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
  }


  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeCountMatchApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchApplicationWhereInput
  }


  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeCountMatchTimelineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchTimelineWhereInput
  }



  /**
   * Count Type MatchApplicationCountOutputType
   */

  export type MatchApplicationCountOutputType = {
    players: number
  }

  export type MatchApplicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | MatchApplicationCountOutputTypeCountPlayersArgs
  }

  // Custom InputTypes

  /**
   * MatchApplicationCountOutputType without action
   */
  export type MatchApplicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchApplicationCountOutputType
     */
    select?: MatchApplicationCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MatchApplicationCountOutputType without action
   */
  export type MatchApplicationCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    password: string
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    player?: boolean | User$playerArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | User$playerArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      player: Prisma.$PlayerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      password: string
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    player<T extends User$playerArgs<ExtArgs> = {}>(args?: Subset<T, User$playerArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.player
   */
  export type User$playerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerInclude<ExtArgs> | null
    where?: PlayerWhereInput
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Player
   */

  export type AggregatePlayer = {
    _count: PlayerCountAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  export type PlayerMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    teamId: string | null
    isCaptain: boolean | null
  }

  export type PlayerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    teamId: string | null
    isCaptain: boolean | null
  }

  export type PlayerCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    teamId: number
    isCaptain: number
    _all: number
  }


  export type PlayerMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    teamId?: true
    isCaptain?: true
  }

  export type PlayerMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    teamId?: true
    isCaptain?: true
  }

  export type PlayerCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    teamId?: true
    isCaptain?: true
    _all?: true
  }

  export type PlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Player to aggregate.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Players
    **/
    _count?: true | PlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerMaxAggregateInputType
  }

  export type GetPlayerAggregateType<T extends PlayerAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer[P]>
      : GetScalarType<T[P], AggregatePlayer[P]>
  }




  export type PlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithAggregationInput | PlayerOrderByWithAggregationInput[]
    by: PlayerScalarFieldEnum[] | PlayerScalarFieldEnum
    having?: PlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerCountAggregateInputType | true
    _min?: PlayerMinAggregateInputType
    _max?: PlayerMaxAggregateInputType
  }

  export type PlayerGroupByOutputType = {
    id: string
    name: string
    userId: string
    teamId: string
    isCaptain: boolean
    _count: PlayerCountAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  type GetPlayerGroupByPayload<T extends PlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerGroupByOutputType[P]>
        }
      >
    >


  export type PlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    teamId?: boolean
    isCaptain?: boolean
    tournamentApplications?: boolean | Player$tournamentApplicationsArgs<ExtArgs>
    matchApplications?: boolean | Player$matchApplicationsArgs<ExtArgs>
    matchTimeline?: boolean | Player$matchTimelineArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | Player$teamArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
    teamId?: boolean
    isCaptain?: boolean
  }

  export type PlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournamentApplications?: boolean | Player$tournamentApplicationsArgs<ExtArgs>
    matchApplications?: boolean | Player$matchApplicationsArgs<ExtArgs>
    matchTimeline?: boolean | Player$matchTimelineArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | Player$teamArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Player"
    objects: {
      tournamentApplications: Prisma.$TournamentApplicationPayload<ExtArgs>[]
      matchApplications: Prisma.$MatchApplicationPayload<ExtArgs>[]
      matchTimeline: Prisma.$MatchTimelinePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
      team: Prisma.$TeamPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      userId: string
      teamId: string
      isCaptain: boolean
    }, ExtArgs["result"]["player"]>
    composites: {}
  }


  type PlayerGetPayload<S extends boolean | null | undefined | PlayerDefaultArgs> = $Result.GetResult<Prisma.$PlayerPayload, S>

  type PlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlayerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlayerCountAggregateInputType | true
    }

  export interface PlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Player'], meta: { name: 'Player' } }
    /**
     * Find zero or one Player that matches the filter.
     * @param {PlayerFindUniqueArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PlayerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PlayerFindUniqueArgs<ExtArgs>>
    ): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Player that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PlayerFindUniqueOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PlayerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlayerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PlayerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PlayerFindFirstArgs<ExtArgs>>
    ): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Player that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PlayerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlayerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.player.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.player.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerWithIdOnly = await prisma.player.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PlayerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlayerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Player.
     * @param {PlayerCreateArgs} args - Arguments to create a Player.
     * @example
     * // Create one Player
     * const Player = await prisma.player.create({
     *   data: {
     *     // ... data to create a Player
     *   }
     * })
     * 
    **/
    create<T extends PlayerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PlayerCreateArgs<ExtArgs>>
    ): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Players.
     *     @param {PlayerCreateManyArgs} args - Arguments to create many Players.
     *     @example
     *     // Create many Players
     *     const player = await prisma.player.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PlayerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlayerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Player.
     * @param {PlayerDeleteArgs} args - Arguments to delete one Player.
     * @example
     * // Delete one Player
     * const Player = await prisma.player.delete({
     *   where: {
     *     // ... filter to delete one Player
     *   }
     * })
     * 
    **/
    delete<T extends PlayerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PlayerDeleteArgs<ExtArgs>>
    ): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Player.
     * @param {PlayerUpdateArgs} args - Arguments to update one Player.
     * @example
     * // Update one Player
     * const player = await prisma.player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PlayerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PlayerUpdateArgs<ExtArgs>>
    ): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Players.
     * @param {PlayerDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PlayerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlayerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PlayerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PlayerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Player.
     * @param {PlayerUpsertArgs} args - Arguments to update or create a Player.
     * @example
     * // Update or create a Player
     * const player = await prisma.player.upsert({
     *   create: {
     *     // ... data to create a Player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player we want to update
     *   }
     * })
    **/
    upsert<T extends PlayerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PlayerUpsertArgs<ExtArgs>>
    ): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.player.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends PlayerCountArgs>(
      args?: Subset<T, PlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayerAggregateArgs>(args: Subset<T, PlayerAggregateArgs>): Prisma.PrismaPromise<GetPlayerAggregateType<T>>

    /**
     * Group by Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGroupByArgs} args - Group by arguments.
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
      T extends PlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerGroupByArgs['orderBy'] }
        : { orderBy?: PlayerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Player model
   */
  readonly fields: PlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tournamentApplications<T extends Player$tournamentApplicationsArgs<ExtArgs> = {}>(args?: Subset<T, Player$tournamentApplicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentApplicationPayload<ExtArgs>, T, 'findMany'> | Null>;

    matchApplications<T extends Player$matchApplicationsArgs<ExtArgs> = {}>(args?: Subset<T, Player$matchApplicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchApplicationPayload<ExtArgs>, T, 'findMany'> | Null>;

    matchTimeline<T extends Player$matchTimelineArgs<ExtArgs> = {}>(args?: Subset<T, Player$matchTimelineArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchTimelinePayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    team<T extends Player$teamArgs<ExtArgs> = {}>(args?: Subset<T, Player$teamArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Player model
   */ 
  interface PlayerFieldRefs {
    readonly id: FieldRef<"Player", 'String'>
    readonly name: FieldRef<"Player", 'String'>
    readonly userId: FieldRef<"Player", 'String'>
    readonly teamId: FieldRef<"Player", 'String'>
    readonly isCaptain: FieldRef<"Player", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Player findUnique
   */
  export type PlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }


  /**
   * Player findUniqueOrThrow
   */
  export type PlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }


  /**
   * Player findFirst
   */
  export type PlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }


  /**
   * Player findFirstOrThrow
   */
  export type PlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }


  /**
   * Player findMany
   */
  export type PlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }


  /**
   * Player create
   */
  export type PlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a Player.
     */
    data: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
  }


  /**
   * Player createMany
   */
  export type PlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Player update
   */
  export type PlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a Player.
     */
    data: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
    /**
     * Choose, which Player to update.
     */
    where: PlayerWhereUniqueInput
  }


  /**
   * Player updateMany
   */
  export type PlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
  }


  /**
   * Player upsert
   */
  export type PlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the Player to update in case it exists.
     */
    where: PlayerWhereUniqueInput
    /**
     * In case the Player found by the `where` argument doesn't exist, create a new Player with this data.
     */
    create: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
    /**
     * In case the Player was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
  }


  /**
   * Player delete
   */
  export type PlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter which Player to delete.
     */
    where: PlayerWhereUniqueInput
  }


  /**
   * Player deleteMany
   */
  export type PlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to delete
     */
    where?: PlayerWhereInput
  }


  /**
   * Player.tournamentApplications
   */
  export type Player$tournamentApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentApplication
     */
    select?: TournamentApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TournamentApplicationInclude<ExtArgs> | null
    where?: TournamentApplicationWhereInput
    orderBy?: TournamentApplicationOrderByWithRelationInput | TournamentApplicationOrderByWithRelationInput[]
    cursor?: TournamentApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TournamentApplicationScalarFieldEnum | TournamentApplicationScalarFieldEnum[]
  }


  /**
   * Player.matchApplications
   */
  export type Player$matchApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchApplication
     */
    select?: MatchApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchApplicationInclude<ExtArgs> | null
    where?: MatchApplicationWhereInput
    orderBy?: MatchApplicationOrderByWithRelationInput | MatchApplicationOrderByWithRelationInput[]
    cursor?: MatchApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchApplicationScalarFieldEnum | MatchApplicationScalarFieldEnum[]
  }


  /**
   * Player.matchTimeline
   */
  export type Player$matchTimelineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchTimeline
     */
    select?: MatchTimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchTimelineInclude<ExtArgs> | null
    where?: MatchTimelineWhereInput
    orderBy?: MatchTimelineOrderByWithRelationInput | MatchTimelineOrderByWithRelationInput[]
    cursor?: MatchTimelineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchTimelineScalarFieldEnum | MatchTimelineScalarFieldEnum[]
  }


  /**
   * Player.team
   */
  export type Player$teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
  }


  /**
   * Player without action
   */
  export type PlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerInclude<ExtArgs> | null
  }



  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TeamMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TeamMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: string
    name: string
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tournamentApplications?: boolean | Team$tournamentApplicationsArgs<ExtArgs>
    match?: boolean | Team$matchArgs<ExtArgs>
    matchApplications?: boolean | Team$matchApplicationsArgs<ExtArgs>
    matchTimeline?: boolean | Team$matchTimelineArgs<ExtArgs>
    players?: boolean | Team$playersArgs<ExtArgs>
    tournamentIds?: boolean | Team$tournamentIdsArgs<ExtArgs>
    wonMatchesIds?: boolean | Team$wonMatchesIdsArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournamentApplications?: boolean | Team$tournamentApplicationsArgs<ExtArgs>
    match?: boolean | Team$matchArgs<ExtArgs>
    matchApplications?: boolean | Team$matchApplicationsArgs<ExtArgs>
    matchTimeline?: boolean | Team$matchTimelineArgs<ExtArgs>
    players?: boolean | Team$playersArgs<ExtArgs>
    tournamentIds?: boolean | Team$tournamentIdsArgs<ExtArgs>
    wonMatchesIds?: boolean | Team$wonMatchesIdsArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      tournamentApplications: Prisma.$TournamentApplicationPayload<ExtArgs>[]
      match: Prisma.$MatchPayload<ExtArgs>[]
      matchApplications: Prisma.$MatchApplicationPayload<ExtArgs>[]
      matchTimeline: Prisma.$MatchTimelinePayload<ExtArgs>[]
      players: Prisma.$PlayerPayload<ExtArgs>[]
      tournamentIds: Prisma.$TournamentPayload<ExtArgs>[]
      wonMatchesIds: Prisma.$MatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["team"]>
    composites: {}
  }


  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TeamFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Team that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TeamFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TeamFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
    **/
    create<T extends TeamCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TeamCreateArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Teams.
     *     @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     *     @example
     *     // Create many Teams
     *     const team = await prisma.team.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TeamCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
    **/
    delete<T extends TeamDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TeamUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TeamDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TeamUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
    **/
    upsert<T extends TeamUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
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
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tournamentApplications<T extends Team$tournamentApplicationsArgs<ExtArgs> = {}>(args?: Subset<T, Team$tournamentApplicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentApplicationPayload<ExtArgs>, T, 'findMany'> | Null>;

    match<T extends Team$matchArgs<ExtArgs> = {}>(args?: Subset<T, Team$matchArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, 'findMany'> | Null>;

    matchApplications<T extends Team$matchApplicationsArgs<ExtArgs> = {}>(args?: Subset<T, Team$matchApplicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchApplicationPayload<ExtArgs>, T, 'findMany'> | Null>;

    matchTimeline<T extends Team$matchTimelineArgs<ExtArgs> = {}>(args?: Subset<T, Team$matchTimelineArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchTimelinePayload<ExtArgs>, T, 'findMany'> | Null>;

    players<T extends Team$playersArgs<ExtArgs> = {}>(args?: Subset<T, Team$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, 'findMany'> | Null>;

    tournamentIds<T extends Team$tournamentIdsArgs<ExtArgs> = {}>(args?: Subset<T, Team$tournamentIdsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, 'findMany'> | Null>;

    wonMatchesIds<T extends Team$wonMatchesIdsArgs<ExtArgs> = {}>(args?: Subset<T, Team$wonMatchesIdsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Team model
   */ 
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'String'>
    readonly name: FieldRef<"Team", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }


  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }


  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }


  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }


  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }


  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }


  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }


  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
  }


  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }


  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }


  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
  }


  /**
   * Team.tournamentApplications
   */
  export type Team$tournamentApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentApplication
     */
    select?: TournamentApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TournamentApplicationInclude<ExtArgs> | null
    where?: TournamentApplicationWhereInput
    orderBy?: TournamentApplicationOrderByWithRelationInput | TournamentApplicationOrderByWithRelationInput[]
    cursor?: TournamentApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TournamentApplicationScalarFieldEnum | TournamentApplicationScalarFieldEnum[]
  }


  /**
   * Team.match
   */
  export type Team$matchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }


  /**
   * Team.matchApplications
   */
  export type Team$matchApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchApplication
     */
    select?: MatchApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchApplicationInclude<ExtArgs> | null
    where?: MatchApplicationWhereInput
    orderBy?: MatchApplicationOrderByWithRelationInput | MatchApplicationOrderByWithRelationInput[]
    cursor?: MatchApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchApplicationScalarFieldEnum | MatchApplicationScalarFieldEnum[]
  }


  /**
   * Team.matchTimeline
   */
  export type Team$matchTimelineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchTimeline
     */
    select?: MatchTimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchTimelineInclude<ExtArgs> | null
    where?: MatchTimelineWhereInput
    orderBy?: MatchTimelineOrderByWithRelationInput | MatchTimelineOrderByWithRelationInput[]
    cursor?: MatchTimelineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchTimelineScalarFieldEnum | MatchTimelineScalarFieldEnum[]
  }


  /**
   * Team.players
   */
  export type Team$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerInclude<ExtArgs> | null
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    cursor?: PlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }


  /**
   * Team.tournamentIds
   */
  export type Team$tournamentIdsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TournamentInclude<ExtArgs> | null
    where?: TournamentWhereInput
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    cursor?: TournamentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }


  /**
   * Team.wonMatchesIds
   */
  export type Team$wonMatchesIdsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }


  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
  }



  /**
   * Model Tournament
   */

  export type AggregateTournament = {
    _count: TournamentCountAggregateOutputType | null
    _min: TournamentMinAggregateOutputType | null
    _max: TournamentMaxAggregateOutputType | null
  }

  export type TournamentMinAggregateOutputType = {
    id: string | null
    name: string | null
    status: $Enums.TournamentStatus | null
  }

  export type TournamentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    status: $Enums.TournamentStatus | null
  }

  export type TournamentCountAggregateOutputType = {
    id: number
    name: number
    status: number
    _all: number
  }


  export type TournamentMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
  }

  export type TournamentMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
  }

  export type TournamentCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    _all?: true
  }

  export type TournamentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tournament to aggregate.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tournaments
    **/
    _count?: true | TournamentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TournamentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TournamentMaxAggregateInputType
  }

  export type GetTournamentAggregateType<T extends TournamentAggregateArgs> = {
        [P in keyof T & keyof AggregateTournament]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTournament[P]>
      : GetScalarType<T[P], AggregateTournament[P]>
  }




  export type TournamentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentWhereInput
    orderBy?: TournamentOrderByWithAggregationInput | TournamentOrderByWithAggregationInput[]
    by: TournamentScalarFieldEnum[] | TournamentScalarFieldEnum
    having?: TournamentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TournamentCountAggregateInputType | true
    _min?: TournamentMinAggregateInputType
    _max?: TournamentMaxAggregateInputType
  }

  export type TournamentGroupByOutputType = {
    id: string
    name: string
    status: $Enums.TournamentStatus
    _count: TournamentCountAggregateOutputType | null
    _min: TournamentMinAggregateOutputType | null
    _max: TournamentMaxAggregateOutputType | null
  }

  type GetTournamentGroupByPayload<T extends TournamentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TournamentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TournamentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TournamentGroupByOutputType[P]>
            : GetScalarType<T[P], TournamentGroupByOutputType[P]>
        }
      >
    >


  export type TournamentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    tournamentApplications?: boolean | Tournament$tournamentApplicationsArgs<ExtArgs>
    match?: boolean | Tournament$matchArgs<ExtArgs>
    teamIds?: boolean | Tournament$teamIdsArgs<ExtArgs>
    _count?: boolean | TournamentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournament"]>

  export type TournamentSelectScalar = {
    id?: boolean
    name?: boolean
    status?: boolean
  }

  export type TournamentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournamentApplications?: boolean | Tournament$tournamentApplicationsArgs<ExtArgs>
    match?: boolean | Tournament$matchArgs<ExtArgs>
    teamIds?: boolean | Tournament$teamIdsArgs<ExtArgs>
    _count?: boolean | TournamentCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TournamentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tournament"
    objects: {
      tournamentApplications: Prisma.$TournamentApplicationPayload<ExtArgs>[]
      match: Prisma.$MatchPayload<ExtArgs>[]
      teamIds: Prisma.$TeamPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      status: $Enums.TournamentStatus
    }, ExtArgs["result"]["tournament"]>
    composites: {}
  }


  type TournamentGetPayload<S extends boolean | null | undefined | TournamentDefaultArgs> = $Result.GetResult<Prisma.$TournamentPayload, S>

  type TournamentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TournamentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TournamentCountAggregateInputType | true
    }

  export interface TournamentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tournament'], meta: { name: 'Tournament' } }
    /**
     * Find zero or one Tournament that matches the filter.
     * @param {TournamentFindUniqueArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TournamentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TournamentFindUniqueArgs<ExtArgs>>
    ): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Tournament that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TournamentFindUniqueOrThrowArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TournamentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TournamentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Tournament that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindFirstArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TournamentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TournamentFindFirstArgs<ExtArgs>>
    ): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Tournament that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindFirstOrThrowArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TournamentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TournamentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tournaments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tournaments
     * const tournaments = await prisma.tournament.findMany()
     * 
     * // Get first 10 Tournaments
     * const tournaments = await prisma.tournament.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tournamentWithIdOnly = await prisma.tournament.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TournamentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TournamentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Tournament.
     * @param {TournamentCreateArgs} args - Arguments to create a Tournament.
     * @example
     * // Create one Tournament
     * const Tournament = await prisma.tournament.create({
     *   data: {
     *     // ... data to create a Tournament
     *   }
     * })
     * 
    **/
    create<T extends TournamentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TournamentCreateArgs<ExtArgs>>
    ): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tournaments.
     *     @param {TournamentCreateManyArgs} args - Arguments to create many Tournaments.
     *     @example
     *     // Create many Tournaments
     *     const tournament = await prisma.tournament.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TournamentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TournamentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tournament.
     * @param {TournamentDeleteArgs} args - Arguments to delete one Tournament.
     * @example
     * // Delete one Tournament
     * const Tournament = await prisma.tournament.delete({
     *   where: {
     *     // ... filter to delete one Tournament
     *   }
     * })
     * 
    **/
    delete<T extends TournamentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TournamentDeleteArgs<ExtArgs>>
    ): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Tournament.
     * @param {TournamentUpdateArgs} args - Arguments to update one Tournament.
     * @example
     * // Update one Tournament
     * const tournament = await prisma.tournament.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TournamentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TournamentUpdateArgs<ExtArgs>>
    ): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tournaments.
     * @param {TournamentDeleteManyArgs} args - Arguments to filter Tournaments to delete.
     * @example
     * // Delete a few Tournaments
     * const { count } = await prisma.tournament.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TournamentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TournamentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tournaments
     * const tournament = await prisma.tournament.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TournamentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TournamentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tournament.
     * @param {TournamentUpsertArgs} args - Arguments to update or create a Tournament.
     * @example
     * // Update or create a Tournament
     * const tournament = await prisma.tournament.upsert({
     *   create: {
     *     // ... data to create a Tournament
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tournament we want to update
     *   }
     * })
    **/
    upsert<T extends TournamentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TournamentUpsertArgs<ExtArgs>>
    ): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentCountArgs} args - Arguments to filter Tournaments to count.
     * @example
     * // Count the number of Tournaments
     * const count = await prisma.tournament.count({
     *   where: {
     *     // ... the filter for the Tournaments we want to count
     *   }
     * })
    **/
    count<T extends TournamentCountArgs>(
      args?: Subset<T, TournamentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TournamentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TournamentAggregateArgs>(args: Subset<T, TournamentAggregateArgs>): Prisma.PrismaPromise<GetTournamentAggregateType<T>>

    /**
     * Group by Tournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentGroupByArgs} args - Group by arguments.
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
      T extends TournamentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TournamentGroupByArgs['orderBy'] }
        : { orderBy?: TournamentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TournamentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTournamentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tournament model
   */
  readonly fields: TournamentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tournament.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TournamentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tournamentApplications<T extends Tournament$tournamentApplicationsArgs<ExtArgs> = {}>(args?: Subset<T, Tournament$tournamentApplicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentApplicationPayload<ExtArgs>, T, 'findMany'> | Null>;

    match<T extends Tournament$matchArgs<ExtArgs> = {}>(args?: Subset<T, Tournament$matchArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, 'findMany'> | Null>;

    teamIds<T extends Tournament$teamIdsArgs<ExtArgs> = {}>(args?: Subset<T, Tournament$teamIdsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Tournament model
   */ 
  interface TournamentFieldRefs {
    readonly id: FieldRef<"Tournament", 'String'>
    readonly name: FieldRef<"Tournament", 'String'>
    readonly status: FieldRef<"Tournament", 'TournamentStatus'>
  }
    

  // Custom InputTypes

  /**
   * Tournament findUnique
   */
  export type TournamentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where: TournamentWhereUniqueInput
  }


  /**
   * Tournament findUniqueOrThrow
   */
  export type TournamentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where: TournamentWhereUniqueInput
  }


  /**
   * Tournament findFirst
   */
  export type TournamentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tournaments.
     */
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }


  /**
   * Tournament findFirstOrThrow
   */
  export type TournamentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tournaments.
     */
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }


  /**
   * Tournament findMany
   */
  export type TournamentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournaments to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }


  /**
   * Tournament create
   */
  export type TournamentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The data needed to create a Tournament.
     */
    data: XOR<TournamentCreateInput, TournamentUncheckedCreateInput>
  }


  /**
   * Tournament createMany
   */
  export type TournamentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tournaments.
     */
    data: TournamentCreateManyInput | TournamentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Tournament update
   */
  export type TournamentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The data needed to update a Tournament.
     */
    data: XOR<TournamentUpdateInput, TournamentUncheckedUpdateInput>
    /**
     * Choose, which Tournament to update.
     */
    where: TournamentWhereUniqueInput
  }


  /**
   * Tournament updateMany
   */
  export type TournamentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tournaments.
     */
    data: XOR<TournamentUpdateManyMutationInput, TournamentUncheckedUpdateManyInput>
    /**
     * Filter which Tournaments to update
     */
    where?: TournamentWhereInput
  }


  /**
   * Tournament upsert
   */
  export type TournamentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The filter to search for the Tournament to update in case it exists.
     */
    where: TournamentWhereUniqueInput
    /**
     * In case the Tournament found by the `where` argument doesn't exist, create a new Tournament with this data.
     */
    create: XOR<TournamentCreateInput, TournamentUncheckedCreateInput>
    /**
     * In case the Tournament was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TournamentUpdateInput, TournamentUncheckedUpdateInput>
  }


  /**
   * Tournament delete
   */
  export type TournamentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter which Tournament to delete.
     */
    where: TournamentWhereUniqueInput
  }


  /**
   * Tournament deleteMany
   */
  export type TournamentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tournaments to delete
     */
    where?: TournamentWhereInput
  }


  /**
   * Tournament.tournamentApplications
   */
  export type Tournament$tournamentApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentApplication
     */
    select?: TournamentApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TournamentApplicationInclude<ExtArgs> | null
    where?: TournamentApplicationWhereInput
    orderBy?: TournamentApplicationOrderByWithRelationInput | TournamentApplicationOrderByWithRelationInput[]
    cursor?: TournamentApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TournamentApplicationScalarFieldEnum | TournamentApplicationScalarFieldEnum[]
  }


  /**
   * Tournament.match
   */
  export type Tournament$matchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }


  /**
   * Tournament.teamIds
   */
  export type Tournament$teamIdsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    cursor?: TeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }


  /**
   * Tournament without action
   */
  export type TournamentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TournamentInclude<ExtArgs> | null
  }



  /**
   * Model TournamentApplication
   */

  export type AggregateTournamentApplication = {
    _count: TournamentApplicationCountAggregateOutputType | null
    _min: TournamentApplicationMinAggregateOutputType | null
    _max: TournamentApplicationMaxAggregateOutputType | null
  }

  export type TournamentApplicationMinAggregateOutputType = {
    id: string | null
    teamId: string | null
    tournamentId: string | null
    date: Date | null
  }

  export type TournamentApplicationMaxAggregateOutputType = {
    id: string | null
    teamId: string | null
    tournamentId: string | null
    date: Date | null
  }

  export type TournamentApplicationCountAggregateOutputType = {
    id: number
    teamId: number
    tournamentId: number
    date: number
    _all: number
  }


  export type TournamentApplicationMinAggregateInputType = {
    id?: true
    teamId?: true
    tournamentId?: true
    date?: true
  }

  export type TournamentApplicationMaxAggregateInputType = {
    id?: true
    teamId?: true
    tournamentId?: true
    date?: true
  }

  export type TournamentApplicationCountAggregateInputType = {
    id?: true
    teamId?: true
    tournamentId?: true
    date?: true
    _all?: true
  }

  export type TournamentApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TournamentApplication to aggregate.
     */
    where?: TournamentApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentApplications to fetch.
     */
    orderBy?: TournamentApplicationOrderByWithRelationInput | TournamentApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TournamentApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TournamentApplications
    **/
    _count?: true | TournamentApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TournamentApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TournamentApplicationMaxAggregateInputType
  }

  export type GetTournamentApplicationAggregateType<T extends TournamentApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateTournamentApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTournamentApplication[P]>
      : GetScalarType<T[P], AggregateTournamentApplication[P]>
  }




  export type TournamentApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentApplicationWhereInput
    orderBy?: TournamentApplicationOrderByWithAggregationInput | TournamentApplicationOrderByWithAggregationInput[]
    by: TournamentApplicationScalarFieldEnum[] | TournamentApplicationScalarFieldEnum
    having?: TournamentApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TournamentApplicationCountAggregateInputType | true
    _min?: TournamentApplicationMinAggregateInputType
    _max?: TournamentApplicationMaxAggregateInputType
  }

  export type TournamentApplicationGroupByOutputType = {
    id: string
    teamId: string
    tournamentId: string
    date: Date | null
    _count: TournamentApplicationCountAggregateOutputType | null
    _min: TournamentApplicationMinAggregateOutputType | null
    _max: TournamentApplicationMaxAggregateOutputType | null
  }

  type GetTournamentApplicationGroupByPayload<T extends TournamentApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TournamentApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TournamentApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TournamentApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], TournamentApplicationGroupByOutputType[P]>
        }
      >
    >


  export type TournamentApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    tournamentId?: boolean
    date?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    players?: boolean | TournamentApplication$playersArgs<ExtArgs>
    _count?: boolean | TournamentApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournamentApplication"]>

  export type TournamentApplicationSelectScalar = {
    id?: boolean
    teamId?: boolean
    tournamentId?: boolean
    date?: boolean
  }

  export type TournamentApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    players?: boolean | TournamentApplication$playersArgs<ExtArgs>
    _count?: boolean | TournamentApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TournamentApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TournamentApplication"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
      tournament: Prisma.$TournamentPayload<ExtArgs>
      players: Prisma.$PlayerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teamId: string
      tournamentId: string
      date: Date | null
    }, ExtArgs["result"]["tournamentApplication"]>
    composites: {}
  }


  type TournamentApplicationGetPayload<S extends boolean | null | undefined | TournamentApplicationDefaultArgs> = $Result.GetResult<Prisma.$TournamentApplicationPayload, S>

  type TournamentApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TournamentApplicationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TournamentApplicationCountAggregateInputType | true
    }

  export interface TournamentApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TournamentApplication'], meta: { name: 'TournamentApplication' } }
    /**
     * Find zero or one TournamentApplication that matches the filter.
     * @param {TournamentApplicationFindUniqueArgs} args - Arguments to find a TournamentApplication
     * @example
     * // Get one TournamentApplication
     * const tournamentApplication = await prisma.tournamentApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TournamentApplicationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TournamentApplicationFindUniqueArgs<ExtArgs>>
    ): Prisma__TournamentApplicationClient<$Result.GetResult<Prisma.$TournamentApplicationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TournamentApplication that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TournamentApplicationFindUniqueOrThrowArgs} args - Arguments to find a TournamentApplication
     * @example
     * // Get one TournamentApplication
     * const tournamentApplication = await prisma.tournamentApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TournamentApplicationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TournamentApplicationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TournamentApplicationClient<$Result.GetResult<Prisma.$TournamentApplicationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TournamentApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentApplicationFindFirstArgs} args - Arguments to find a TournamentApplication
     * @example
     * // Get one TournamentApplication
     * const tournamentApplication = await prisma.tournamentApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TournamentApplicationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TournamentApplicationFindFirstArgs<ExtArgs>>
    ): Prisma__TournamentApplicationClient<$Result.GetResult<Prisma.$TournamentApplicationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TournamentApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentApplicationFindFirstOrThrowArgs} args - Arguments to find a TournamentApplication
     * @example
     * // Get one TournamentApplication
     * const tournamentApplication = await prisma.tournamentApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TournamentApplicationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TournamentApplicationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TournamentApplicationClient<$Result.GetResult<Prisma.$TournamentApplicationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TournamentApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentApplicationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TournamentApplications
     * const tournamentApplications = await prisma.tournamentApplication.findMany()
     * 
     * // Get first 10 TournamentApplications
     * const tournamentApplications = await prisma.tournamentApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tournamentApplicationWithIdOnly = await prisma.tournamentApplication.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TournamentApplicationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TournamentApplicationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentApplicationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TournamentApplication.
     * @param {TournamentApplicationCreateArgs} args - Arguments to create a TournamentApplication.
     * @example
     * // Create one TournamentApplication
     * const TournamentApplication = await prisma.tournamentApplication.create({
     *   data: {
     *     // ... data to create a TournamentApplication
     *   }
     * })
     * 
    **/
    create<T extends TournamentApplicationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TournamentApplicationCreateArgs<ExtArgs>>
    ): Prisma__TournamentApplicationClient<$Result.GetResult<Prisma.$TournamentApplicationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TournamentApplications.
     *     @param {TournamentApplicationCreateManyArgs} args - Arguments to create many TournamentApplications.
     *     @example
     *     // Create many TournamentApplications
     *     const tournamentApplication = await prisma.tournamentApplication.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TournamentApplicationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TournamentApplicationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TournamentApplication.
     * @param {TournamentApplicationDeleteArgs} args - Arguments to delete one TournamentApplication.
     * @example
     * // Delete one TournamentApplication
     * const TournamentApplication = await prisma.tournamentApplication.delete({
     *   where: {
     *     // ... filter to delete one TournamentApplication
     *   }
     * })
     * 
    **/
    delete<T extends TournamentApplicationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TournamentApplicationDeleteArgs<ExtArgs>>
    ): Prisma__TournamentApplicationClient<$Result.GetResult<Prisma.$TournamentApplicationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TournamentApplication.
     * @param {TournamentApplicationUpdateArgs} args - Arguments to update one TournamentApplication.
     * @example
     * // Update one TournamentApplication
     * const tournamentApplication = await prisma.tournamentApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TournamentApplicationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TournamentApplicationUpdateArgs<ExtArgs>>
    ): Prisma__TournamentApplicationClient<$Result.GetResult<Prisma.$TournamentApplicationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TournamentApplications.
     * @param {TournamentApplicationDeleteManyArgs} args - Arguments to filter TournamentApplications to delete.
     * @example
     * // Delete a few TournamentApplications
     * const { count } = await prisma.tournamentApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TournamentApplicationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TournamentApplicationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TournamentApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TournamentApplications
     * const tournamentApplication = await prisma.tournamentApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TournamentApplicationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TournamentApplicationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TournamentApplication.
     * @param {TournamentApplicationUpsertArgs} args - Arguments to update or create a TournamentApplication.
     * @example
     * // Update or create a TournamentApplication
     * const tournamentApplication = await prisma.tournamentApplication.upsert({
     *   create: {
     *     // ... data to create a TournamentApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TournamentApplication we want to update
     *   }
     * })
    **/
    upsert<T extends TournamentApplicationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TournamentApplicationUpsertArgs<ExtArgs>>
    ): Prisma__TournamentApplicationClient<$Result.GetResult<Prisma.$TournamentApplicationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TournamentApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentApplicationCountArgs} args - Arguments to filter TournamentApplications to count.
     * @example
     * // Count the number of TournamentApplications
     * const count = await prisma.tournamentApplication.count({
     *   where: {
     *     // ... the filter for the TournamentApplications we want to count
     *   }
     * })
    **/
    count<T extends TournamentApplicationCountArgs>(
      args?: Subset<T, TournamentApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TournamentApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TournamentApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TournamentApplicationAggregateArgs>(args: Subset<T, TournamentApplicationAggregateArgs>): Prisma.PrismaPromise<GetTournamentApplicationAggregateType<T>>

    /**
     * Group by TournamentApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentApplicationGroupByArgs} args - Group by arguments.
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
      T extends TournamentApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TournamentApplicationGroupByArgs['orderBy'] }
        : { orderBy?: TournamentApplicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TournamentApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTournamentApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TournamentApplication model
   */
  readonly fields: TournamentApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TournamentApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TournamentApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    tournament<T extends TournamentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TournamentDefaultArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    players<T extends TournamentApplication$playersArgs<ExtArgs> = {}>(args?: Subset<T, TournamentApplication$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TournamentApplication model
   */ 
  interface TournamentApplicationFieldRefs {
    readonly id: FieldRef<"TournamentApplication", 'String'>
    readonly teamId: FieldRef<"TournamentApplication", 'String'>
    readonly tournamentId: FieldRef<"TournamentApplication", 'String'>
    readonly date: FieldRef<"TournamentApplication", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * TournamentApplication findUnique
   */
  export type TournamentApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentApplication
     */
    select?: TournamentApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TournamentApplicationInclude<ExtArgs> | null
    /**
     * Filter, which TournamentApplication to fetch.
     */
    where: TournamentApplicationWhereUniqueInput
  }


  /**
   * TournamentApplication findUniqueOrThrow
   */
  export type TournamentApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentApplication
     */
    select?: TournamentApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TournamentApplicationInclude<ExtArgs> | null
    /**
     * Filter, which TournamentApplication to fetch.
     */
    where: TournamentApplicationWhereUniqueInput
  }


  /**
   * TournamentApplication findFirst
   */
  export type TournamentApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentApplication
     */
    select?: TournamentApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TournamentApplicationInclude<ExtArgs> | null
    /**
     * Filter, which TournamentApplication to fetch.
     */
    where?: TournamentApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentApplications to fetch.
     */
    orderBy?: TournamentApplicationOrderByWithRelationInput | TournamentApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TournamentApplications.
     */
    cursor?: TournamentApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TournamentApplications.
     */
    distinct?: TournamentApplicationScalarFieldEnum | TournamentApplicationScalarFieldEnum[]
  }


  /**
   * TournamentApplication findFirstOrThrow
   */
  export type TournamentApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentApplication
     */
    select?: TournamentApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TournamentApplicationInclude<ExtArgs> | null
    /**
     * Filter, which TournamentApplication to fetch.
     */
    where?: TournamentApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentApplications to fetch.
     */
    orderBy?: TournamentApplicationOrderByWithRelationInput | TournamentApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TournamentApplications.
     */
    cursor?: TournamentApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TournamentApplications.
     */
    distinct?: TournamentApplicationScalarFieldEnum | TournamentApplicationScalarFieldEnum[]
  }


  /**
   * TournamentApplication findMany
   */
  export type TournamentApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentApplication
     */
    select?: TournamentApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TournamentApplicationInclude<ExtArgs> | null
    /**
     * Filter, which TournamentApplications to fetch.
     */
    where?: TournamentApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentApplications to fetch.
     */
    orderBy?: TournamentApplicationOrderByWithRelationInput | TournamentApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TournamentApplications.
     */
    cursor?: TournamentApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentApplications.
     */
    skip?: number
    distinct?: TournamentApplicationScalarFieldEnum | TournamentApplicationScalarFieldEnum[]
  }


  /**
   * TournamentApplication create
   */
  export type TournamentApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentApplication
     */
    select?: TournamentApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TournamentApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a TournamentApplication.
     */
    data: XOR<TournamentApplicationCreateInput, TournamentApplicationUncheckedCreateInput>
  }


  /**
   * TournamentApplication createMany
   */
  export type TournamentApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TournamentApplications.
     */
    data: TournamentApplicationCreateManyInput | TournamentApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TournamentApplication update
   */
  export type TournamentApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentApplication
     */
    select?: TournamentApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TournamentApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a TournamentApplication.
     */
    data: XOR<TournamentApplicationUpdateInput, TournamentApplicationUncheckedUpdateInput>
    /**
     * Choose, which TournamentApplication to update.
     */
    where: TournamentApplicationWhereUniqueInput
  }


  /**
   * TournamentApplication updateMany
   */
  export type TournamentApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TournamentApplications.
     */
    data: XOR<TournamentApplicationUpdateManyMutationInput, TournamentApplicationUncheckedUpdateManyInput>
    /**
     * Filter which TournamentApplications to update
     */
    where?: TournamentApplicationWhereInput
  }


  /**
   * TournamentApplication upsert
   */
  export type TournamentApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentApplication
     */
    select?: TournamentApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TournamentApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the TournamentApplication to update in case it exists.
     */
    where: TournamentApplicationWhereUniqueInput
    /**
     * In case the TournamentApplication found by the `where` argument doesn't exist, create a new TournamentApplication with this data.
     */
    create: XOR<TournamentApplicationCreateInput, TournamentApplicationUncheckedCreateInput>
    /**
     * In case the TournamentApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TournamentApplicationUpdateInput, TournamentApplicationUncheckedUpdateInput>
  }


  /**
   * TournamentApplication delete
   */
  export type TournamentApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentApplication
     */
    select?: TournamentApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TournamentApplicationInclude<ExtArgs> | null
    /**
     * Filter which TournamentApplication to delete.
     */
    where: TournamentApplicationWhereUniqueInput
  }


  /**
   * TournamentApplication deleteMany
   */
  export type TournamentApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TournamentApplications to delete
     */
    where?: TournamentApplicationWhereInput
  }


  /**
   * TournamentApplication.players
   */
  export type TournamentApplication$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerInclude<ExtArgs> | null
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    cursor?: PlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }


  /**
   * TournamentApplication without action
   */
  export type TournamentApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentApplication
     */
    select?: TournamentApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TournamentApplicationInclude<ExtArgs> | null
  }



  /**
   * Model Match
   */

  export type AggregateMatch = {
    _count: MatchCountAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  export type MatchMinAggregateOutputType = {
    id: string | null
    status: $Enums.MatchStatus | null
    date: Date | null
    tournamentId: string | null
    winnerId: string | null
  }

  export type MatchMaxAggregateOutputType = {
    id: string | null
    status: $Enums.MatchStatus | null
    date: Date | null
    tournamentId: string | null
    winnerId: string | null
  }

  export type MatchCountAggregateOutputType = {
    id: number
    status: number
    date: number
    tournamentId: number
    winnerId: number
    _all: number
  }


  export type MatchMinAggregateInputType = {
    id?: true
    status?: true
    date?: true
    tournamentId?: true
    winnerId?: true
  }

  export type MatchMaxAggregateInputType = {
    id?: true
    status?: true
    date?: true
    tournamentId?: true
    winnerId?: true
  }

  export type MatchCountAggregateInputType = {
    id?: true
    status?: true
    date?: true
    tournamentId?: true
    winnerId?: true
    _all?: true
  }

  export type MatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Match to aggregate.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matches
    **/
    _count?: true | MatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchMaxAggregateInputType
  }

  export type GetMatchAggregateType<T extends MatchAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch[P]>
      : GetScalarType<T[P], AggregateMatch[P]>
  }




  export type MatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithAggregationInput | MatchOrderByWithAggregationInput[]
    by: MatchScalarFieldEnum[] | MatchScalarFieldEnum
    having?: MatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchCountAggregateInputType | true
    _min?: MatchMinAggregateInputType
    _max?: MatchMaxAggregateInputType
  }

  export type MatchGroupByOutputType = {
    id: string
    status: $Enums.MatchStatus
    date: Date | null
    tournamentId: string
    winnerId: string | null
    _count: MatchCountAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  type GetMatchGroupByPayload<T extends MatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchGroupByOutputType[P]>
            : GetScalarType<T[P], MatchGroupByOutputType[P]>
        }
      >
    >


  export type MatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    date?: boolean
    tournamentId?: boolean
    winnerId?: boolean
    teams?: boolean | Match$teamsArgs<ExtArgs>
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    matchApplications?: boolean | Match$matchApplicationsArgs<ExtArgs>
    matchTimeline?: boolean | Match$matchTimelineArgs<ExtArgs>
    winner?: boolean | Match$winnerArgs<ExtArgs>
    _count?: boolean | MatchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectScalar = {
    id?: boolean
    status?: boolean
    date?: boolean
    tournamentId?: boolean
    winnerId?: boolean
  }

  export type MatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | Match$teamsArgs<ExtArgs>
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    matchApplications?: boolean | Match$matchApplicationsArgs<ExtArgs>
    matchTimeline?: boolean | Match$matchTimelineArgs<ExtArgs>
    winner?: boolean | Match$winnerArgs<ExtArgs>
    _count?: boolean | MatchCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Match"
    objects: {
      teams: Prisma.$TeamPayload<ExtArgs>[]
      tournament: Prisma.$TournamentPayload<ExtArgs>
      matchApplications: Prisma.$MatchApplicationPayload<ExtArgs>[]
      matchTimeline: Prisma.$MatchTimelinePayload<ExtArgs>[]
      winner: Prisma.$TeamPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: $Enums.MatchStatus
      date: Date | null
      tournamentId: string
      winnerId: string | null
    }, ExtArgs["result"]["match"]>
    composites: {}
  }


  type MatchGetPayload<S extends boolean | null | undefined | MatchDefaultArgs> = $Result.GetResult<Prisma.$MatchPayload, S>

  type MatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MatchFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MatchCountAggregateInputType | true
    }

  export interface MatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Match'], meta: { name: 'Match' } }
    /**
     * Find zero or one Match that matches the filter.
     * @param {MatchFindUniqueArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MatchFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MatchFindUniqueArgs<ExtArgs>>
    ): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Match that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MatchFindUniqueOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MatchFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Match that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MatchFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchFindFirstArgs<ExtArgs>>
    ): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Match that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MatchFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.match.findMany()
     * 
     * // Get first 10 Matches
     * const matches = await prisma.match.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchWithIdOnly = await prisma.match.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MatchFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Match.
     * @param {MatchCreateArgs} args - Arguments to create a Match.
     * @example
     * // Create one Match
     * const Match = await prisma.match.create({
     *   data: {
     *     // ... data to create a Match
     *   }
     * })
     * 
    **/
    create<T extends MatchCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MatchCreateArgs<ExtArgs>>
    ): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Matches.
     *     @param {MatchCreateManyArgs} args - Arguments to create many Matches.
     *     @example
     *     // Create many Matches
     *     const match = await prisma.match.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MatchCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Match.
     * @param {MatchDeleteArgs} args - Arguments to delete one Match.
     * @example
     * // Delete one Match
     * const Match = await prisma.match.delete({
     *   where: {
     *     // ... filter to delete one Match
     *   }
     * })
     * 
    **/
    delete<T extends MatchDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MatchDeleteArgs<ExtArgs>>
    ): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Match.
     * @param {MatchUpdateArgs} args - Arguments to update one Match.
     * @example
     * // Update one Match
     * const match = await prisma.match.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MatchUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MatchUpdateArgs<ExtArgs>>
    ): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Matches.
     * @param {MatchDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.match.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MatchDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MatchUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MatchUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Match.
     * @param {MatchUpsertArgs} args - Arguments to update or create a Match.
     * @example
     * // Update or create a Match
     * const match = await prisma.match.upsert({
     *   create: {
     *     // ... data to create a Match
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match we want to update
     *   }
     * })
    **/
    upsert<T extends MatchUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MatchUpsertArgs<ExtArgs>>
    ): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.match.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
    **/
    count<T extends MatchCountArgs>(
      args?: Subset<T, MatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchAggregateArgs>(args: Subset<T, MatchAggregateArgs>): Prisma.PrismaPromise<GetMatchAggregateType<T>>

    /**
     * Group by Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchGroupByArgs} args - Group by arguments.
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
      T extends MatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchGroupByArgs['orderBy'] }
        : { orderBy?: MatchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Match model
   */
  readonly fields: MatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Match.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    teams<T extends Match$teamsArgs<ExtArgs> = {}>(args?: Subset<T, Match$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findMany'> | Null>;

    tournament<T extends TournamentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TournamentDefaultArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    matchApplications<T extends Match$matchApplicationsArgs<ExtArgs> = {}>(args?: Subset<T, Match$matchApplicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchApplicationPayload<ExtArgs>, T, 'findMany'> | Null>;

    matchTimeline<T extends Match$matchTimelineArgs<ExtArgs> = {}>(args?: Subset<T, Match$matchTimelineArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchTimelinePayload<ExtArgs>, T, 'findMany'> | Null>;

    winner<T extends Match$winnerArgs<ExtArgs> = {}>(args?: Subset<T, Match$winnerArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Match model
   */ 
  interface MatchFieldRefs {
    readonly id: FieldRef<"Match", 'String'>
    readonly status: FieldRef<"Match", 'MatchStatus'>
    readonly date: FieldRef<"Match", 'DateTime'>
    readonly tournamentId: FieldRef<"Match", 'String'>
    readonly winnerId: FieldRef<"Match", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Match findUnique
   */
  export type MatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }


  /**
   * Match findUniqueOrThrow
   */
  export type MatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }


  /**
   * Match findFirst
   */
  export type MatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }


  /**
   * Match findFirstOrThrow
   */
  export type MatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }


  /**
   * Match findMany
   */
  export type MatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }


  /**
   * Match create
   */
  export type MatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Match.
     */
    data: XOR<MatchCreateInput, MatchUncheckedCreateInput>
  }


  /**
   * Match createMany
   */
  export type MatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Match update
   */
  export type MatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Match.
     */
    data: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
    /**
     * Choose, which Match to update.
     */
    where: MatchWhereUniqueInput
  }


  /**
   * Match updateMany
   */
  export type MatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
  }


  /**
   * Match upsert
   */
  export type MatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Match to update in case it exists.
     */
    where: MatchWhereUniqueInput
    /**
     * In case the Match found by the `where` argument doesn't exist, create a new Match with this data.
     */
    create: XOR<MatchCreateInput, MatchUncheckedCreateInput>
    /**
     * In case the Match was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
  }


  /**
   * Match delete
   */
  export type MatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter which Match to delete.
     */
    where: MatchWhereUniqueInput
  }


  /**
   * Match deleteMany
   */
  export type MatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matches to delete
     */
    where?: MatchWhereInput
  }


  /**
   * Match.teams
   */
  export type Match$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    cursor?: TeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }


  /**
   * Match.matchApplications
   */
  export type Match$matchApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchApplication
     */
    select?: MatchApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchApplicationInclude<ExtArgs> | null
    where?: MatchApplicationWhereInput
    orderBy?: MatchApplicationOrderByWithRelationInput | MatchApplicationOrderByWithRelationInput[]
    cursor?: MatchApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchApplicationScalarFieldEnum | MatchApplicationScalarFieldEnum[]
  }


  /**
   * Match.matchTimeline
   */
  export type Match$matchTimelineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchTimeline
     */
    select?: MatchTimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchTimelineInclude<ExtArgs> | null
    where?: MatchTimelineWhereInput
    orderBy?: MatchTimelineOrderByWithRelationInput | MatchTimelineOrderByWithRelationInput[]
    cursor?: MatchTimelineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchTimelineScalarFieldEnum | MatchTimelineScalarFieldEnum[]
  }


  /**
   * Match.winner
   */
  export type Match$winnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
  }


  /**
   * Match without action
   */
  export type MatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchInclude<ExtArgs> | null
  }



  /**
   * Model MatchApplication
   */

  export type AggregateMatchApplication = {
    _count: MatchApplicationCountAggregateOutputType | null
    _min: MatchApplicationMinAggregateOutputType | null
    _max: MatchApplicationMaxAggregateOutputType | null
  }

  export type MatchApplicationMinAggregateOutputType = {
    id: string | null
    teamId: string | null
    matchID: string | null
  }

  export type MatchApplicationMaxAggregateOutputType = {
    id: string | null
    teamId: string | null
    matchID: string | null
  }

  export type MatchApplicationCountAggregateOutputType = {
    id: number
    teamId: number
    matchID: number
    _all: number
  }


  export type MatchApplicationMinAggregateInputType = {
    id?: true
    teamId?: true
    matchID?: true
  }

  export type MatchApplicationMaxAggregateInputType = {
    id?: true
    teamId?: true
    matchID?: true
  }

  export type MatchApplicationCountAggregateInputType = {
    id?: true
    teamId?: true
    matchID?: true
    _all?: true
  }

  export type MatchApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchApplication to aggregate.
     */
    where?: MatchApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchApplications to fetch.
     */
    orderBy?: MatchApplicationOrderByWithRelationInput | MatchApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatchApplications
    **/
    _count?: true | MatchApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchApplicationMaxAggregateInputType
  }

  export type GetMatchApplicationAggregateType<T extends MatchApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateMatchApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchApplication[P]>
      : GetScalarType<T[P], AggregateMatchApplication[P]>
  }




  export type MatchApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchApplicationWhereInput
    orderBy?: MatchApplicationOrderByWithAggregationInput | MatchApplicationOrderByWithAggregationInput[]
    by: MatchApplicationScalarFieldEnum[] | MatchApplicationScalarFieldEnum
    having?: MatchApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchApplicationCountAggregateInputType | true
    _min?: MatchApplicationMinAggregateInputType
    _max?: MatchApplicationMaxAggregateInputType
  }

  export type MatchApplicationGroupByOutputType = {
    id: string
    teamId: string
    matchID: string
    _count: MatchApplicationCountAggregateOutputType | null
    _min: MatchApplicationMinAggregateOutputType | null
    _max: MatchApplicationMaxAggregateOutputType | null
  }

  type GetMatchApplicationGroupByPayload<T extends MatchApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], MatchApplicationGroupByOutputType[P]>
        }
      >
    >


  export type MatchApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    matchID?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    match?: boolean | MatchDefaultArgs<ExtArgs>
    players?: boolean | MatchApplication$playersArgs<ExtArgs>
    _count?: boolean | MatchApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchApplication"]>

  export type MatchApplicationSelectScalar = {
    id?: boolean
    teamId?: boolean
    matchID?: boolean
  }

  export type MatchApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    match?: boolean | MatchDefaultArgs<ExtArgs>
    players?: boolean | MatchApplication$playersArgs<ExtArgs>
    _count?: boolean | MatchApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MatchApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatchApplication"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
      match: Prisma.$MatchPayload<ExtArgs>
      players: Prisma.$PlayerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teamId: string
      matchID: string
    }, ExtArgs["result"]["matchApplication"]>
    composites: {}
  }


  type MatchApplicationGetPayload<S extends boolean | null | undefined | MatchApplicationDefaultArgs> = $Result.GetResult<Prisma.$MatchApplicationPayload, S>

  type MatchApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MatchApplicationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MatchApplicationCountAggregateInputType | true
    }

  export interface MatchApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatchApplication'], meta: { name: 'MatchApplication' } }
    /**
     * Find zero or one MatchApplication that matches the filter.
     * @param {MatchApplicationFindUniqueArgs} args - Arguments to find a MatchApplication
     * @example
     * // Get one MatchApplication
     * const matchApplication = await prisma.matchApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MatchApplicationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MatchApplicationFindUniqueArgs<ExtArgs>>
    ): Prisma__MatchApplicationClient<$Result.GetResult<Prisma.$MatchApplicationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MatchApplication that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MatchApplicationFindUniqueOrThrowArgs} args - Arguments to find a MatchApplication
     * @example
     * // Get one MatchApplication
     * const matchApplication = await prisma.matchApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MatchApplicationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchApplicationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MatchApplicationClient<$Result.GetResult<Prisma.$MatchApplicationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MatchApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchApplicationFindFirstArgs} args - Arguments to find a MatchApplication
     * @example
     * // Get one MatchApplication
     * const matchApplication = await prisma.matchApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MatchApplicationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchApplicationFindFirstArgs<ExtArgs>>
    ): Prisma__MatchApplicationClient<$Result.GetResult<Prisma.$MatchApplicationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MatchApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchApplicationFindFirstOrThrowArgs} args - Arguments to find a MatchApplication
     * @example
     * // Get one MatchApplication
     * const matchApplication = await prisma.matchApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MatchApplicationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchApplicationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MatchApplicationClient<$Result.GetResult<Prisma.$MatchApplicationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MatchApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchApplicationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatchApplications
     * const matchApplications = await prisma.matchApplication.findMany()
     * 
     * // Get first 10 MatchApplications
     * const matchApplications = await prisma.matchApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchApplicationWithIdOnly = await prisma.matchApplication.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MatchApplicationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchApplicationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchApplicationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MatchApplication.
     * @param {MatchApplicationCreateArgs} args - Arguments to create a MatchApplication.
     * @example
     * // Create one MatchApplication
     * const MatchApplication = await prisma.matchApplication.create({
     *   data: {
     *     // ... data to create a MatchApplication
     *   }
     * })
     * 
    **/
    create<T extends MatchApplicationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MatchApplicationCreateArgs<ExtArgs>>
    ): Prisma__MatchApplicationClient<$Result.GetResult<Prisma.$MatchApplicationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many MatchApplications.
     *     @param {MatchApplicationCreateManyArgs} args - Arguments to create many MatchApplications.
     *     @example
     *     // Create many MatchApplications
     *     const matchApplication = await prisma.matchApplication.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MatchApplicationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchApplicationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MatchApplication.
     * @param {MatchApplicationDeleteArgs} args - Arguments to delete one MatchApplication.
     * @example
     * // Delete one MatchApplication
     * const MatchApplication = await prisma.matchApplication.delete({
     *   where: {
     *     // ... filter to delete one MatchApplication
     *   }
     * })
     * 
    **/
    delete<T extends MatchApplicationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MatchApplicationDeleteArgs<ExtArgs>>
    ): Prisma__MatchApplicationClient<$Result.GetResult<Prisma.$MatchApplicationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MatchApplication.
     * @param {MatchApplicationUpdateArgs} args - Arguments to update one MatchApplication.
     * @example
     * // Update one MatchApplication
     * const matchApplication = await prisma.matchApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MatchApplicationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MatchApplicationUpdateArgs<ExtArgs>>
    ): Prisma__MatchApplicationClient<$Result.GetResult<Prisma.$MatchApplicationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MatchApplications.
     * @param {MatchApplicationDeleteManyArgs} args - Arguments to filter MatchApplications to delete.
     * @example
     * // Delete a few MatchApplications
     * const { count } = await prisma.matchApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MatchApplicationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchApplicationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatchApplications
     * const matchApplication = await prisma.matchApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MatchApplicationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MatchApplicationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MatchApplication.
     * @param {MatchApplicationUpsertArgs} args - Arguments to update or create a MatchApplication.
     * @example
     * // Update or create a MatchApplication
     * const matchApplication = await prisma.matchApplication.upsert({
     *   create: {
     *     // ... data to create a MatchApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatchApplication we want to update
     *   }
     * })
    **/
    upsert<T extends MatchApplicationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MatchApplicationUpsertArgs<ExtArgs>>
    ): Prisma__MatchApplicationClient<$Result.GetResult<Prisma.$MatchApplicationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MatchApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchApplicationCountArgs} args - Arguments to filter MatchApplications to count.
     * @example
     * // Count the number of MatchApplications
     * const count = await prisma.matchApplication.count({
     *   where: {
     *     // ... the filter for the MatchApplications we want to count
     *   }
     * })
    **/
    count<T extends MatchApplicationCountArgs>(
      args?: Subset<T, MatchApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatchApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchApplicationAggregateArgs>(args: Subset<T, MatchApplicationAggregateArgs>): Prisma.PrismaPromise<GetMatchApplicationAggregateType<T>>

    /**
     * Group by MatchApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchApplicationGroupByArgs} args - Group by arguments.
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
      T extends MatchApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchApplicationGroupByArgs['orderBy'] }
        : { orderBy?: MatchApplicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatchApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MatchApplication model
   */
  readonly fields: MatchApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatchApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    match<T extends MatchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatchDefaultArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    players<T extends MatchApplication$playersArgs<ExtArgs> = {}>(args?: Subset<T, MatchApplication$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MatchApplication model
   */ 
  interface MatchApplicationFieldRefs {
    readonly id: FieldRef<"MatchApplication", 'String'>
    readonly teamId: FieldRef<"MatchApplication", 'String'>
    readonly matchID: FieldRef<"MatchApplication", 'String'>
  }
    

  // Custom InputTypes

  /**
   * MatchApplication findUnique
   */
  export type MatchApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchApplication
     */
    select?: MatchApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchApplicationInclude<ExtArgs> | null
    /**
     * Filter, which MatchApplication to fetch.
     */
    where: MatchApplicationWhereUniqueInput
  }


  /**
   * MatchApplication findUniqueOrThrow
   */
  export type MatchApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchApplication
     */
    select?: MatchApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchApplicationInclude<ExtArgs> | null
    /**
     * Filter, which MatchApplication to fetch.
     */
    where: MatchApplicationWhereUniqueInput
  }


  /**
   * MatchApplication findFirst
   */
  export type MatchApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchApplication
     */
    select?: MatchApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchApplicationInclude<ExtArgs> | null
    /**
     * Filter, which MatchApplication to fetch.
     */
    where?: MatchApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchApplications to fetch.
     */
    orderBy?: MatchApplicationOrderByWithRelationInput | MatchApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchApplications.
     */
    cursor?: MatchApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchApplications.
     */
    distinct?: MatchApplicationScalarFieldEnum | MatchApplicationScalarFieldEnum[]
  }


  /**
   * MatchApplication findFirstOrThrow
   */
  export type MatchApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchApplication
     */
    select?: MatchApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchApplicationInclude<ExtArgs> | null
    /**
     * Filter, which MatchApplication to fetch.
     */
    where?: MatchApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchApplications to fetch.
     */
    orderBy?: MatchApplicationOrderByWithRelationInput | MatchApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchApplications.
     */
    cursor?: MatchApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchApplications.
     */
    distinct?: MatchApplicationScalarFieldEnum | MatchApplicationScalarFieldEnum[]
  }


  /**
   * MatchApplication findMany
   */
  export type MatchApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchApplication
     */
    select?: MatchApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchApplicationInclude<ExtArgs> | null
    /**
     * Filter, which MatchApplications to fetch.
     */
    where?: MatchApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchApplications to fetch.
     */
    orderBy?: MatchApplicationOrderByWithRelationInput | MatchApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatchApplications.
     */
    cursor?: MatchApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchApplications.
     */
    skip?: number
    distinct?: MatchApplicationScalarFieldEnum | MatchApplicationScalarFieldEnum[]
  }


  /**
   * MatchApplication create
   */
  export type MatchApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchApplication
     */
    select?: MatchApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a MatchApplication.
     */
    data: XOR<MatchApplicationCreateInput, MatchApplicationUncheckedCreateInput>
  }


  /**
   * MatchApplication createMany
   */
  export type MatchApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatchApplications.
     */
    data: MatchApplicationCreateManyInput | MatchApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * MatchApplication update
   */
  export type MatchApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchApplication
     */
    select?: MatchApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a MatchApplication.
     */
    data: XOR<MatchApplicationUpdateInput, MatchApplicationUncheckedUpdateInput>
    /**
     * Choose, which MatchApplication to update.
     */
    where: MatchApplicationWhereUniqueInput
  }


  /**
   * MatchApplication updateMany
   */
  export type MatchApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatchApplications.
     */
    data: XOR<MatchApplicationUpdateManyMutationInput, MatchApplicationUncheckedUpdateManyInput>
    /**
     * Filter which MatchApplications to update
     */
    where?: MatchApplicationWhereInput
  }


  /**
   * MatchApplication upsert
   */
  export type MatchApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchApplication
     */
    select?: MatchApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the MatchApplication to update in case it exists.
     */
    where: MatchApplicationWhereUniqueInput
    /**
     * In case the MatchApplication found by the `where` argument doesn't exist, create a new MatchApplication with this data.
     */
    create: XOR<MatchApplicationCreateInput, MatchApplicationUncheckedCreateInput>
    /**
     * In case the MatchApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchApplicationUpdateInput, MatchApplicationUncheckedUpdateInput>
  }


  /**
   * MatchApplication delete
   */
  export type MatchApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchApplication
     */
    select?: MatchApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchApplicationInclude<ExtArgs> | null
    /**
     * Filter which MatchApplication to delete.
     */
    where: MatchApplicationWhereUniqueInput
  }


  /**
   * MatchApplication deleteMany
   */
  export type MatchApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchApplications to delete
     */
    where?: MatchApplicationWhereInput
  }


  /**
   * MatchApplication.players
   */
  export type MatchApplication$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerInclude<ExtArgs> | null
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    cursor?: PlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }


  /**
   * MatchApplication without action
   */
  export type MatchApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchApplication
     */
    select?: MatchApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchApplicationInclude<ExtArgs> | null
  }



  /**
   * Model MatchTimeline
   */

  export type AggregateMatchTimeline = {
    _count: MatchTimelineCountAggregateOutputType | null
    _avg: MatchTimelineAvgAggregateOutputType | null
    _sum: MatchTimelineSumAggregateOutputType | null
    _min: MatchTimelineMinAggregateOutputType | null
    _max: MatchTimelineMaxAggregateOutputType | null
  }

  export type MatchTimelineAvgAggregateOutputType = {
    time: number | null
  }

  export type MatchTimelineSumAggregateOutputType = {
    time: number | null
  }

  export type MatchTimelineMinAggregateOutputType = {
    id: string | null
    time: number | null
    type: $Enums.MatchEvent | null
    teamId: string | null
    matchId: string | null
    playerId: string | null
  }

  export type MatchTimelineMaxAggregateOutputType = {
    id: string | null
    time: number | null
    type: $Enums.MatchEvent | null
    teamId: string | null
    matchId: string | null
    playerId: string | null
  }

  export type MatchTimelineCountAggregateOutputType = {
    id: number
    time: number
    type: number
    teamId: number
    matchId: number
    playerId: number
    _all: number
  }


  export type MatchTimelineAvgAggregateInputType = {
    time?: true
  }

  export type MatchTimelineSumAggregateInputType = {
    time?: true
  }

  export type MatchTimelineMinAggregateInputType = {
    id?: true
    time?: true
    type?: true
    teamId?: true
    matchId?: true
    playerId?: true
  }

  export type MatchTimelineMaxAggregateInputType = {
    id?: true
    time?: true
    type?: true
    teamId?: true
    matchId?: true
    playerId?: true
  }

  export type MatchTimelineCountAggregateInputType = {
    id?: true
    time?: true
    type?: true
    teamId?: true
    matchId?: true
    playerId?: true
    _all?: true
  }

  export type MatchTimelineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchTimeline to aggregate.
     */
    where?: MatchTimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchTimelines to fetch.
     */
    orderBy?: MatchTimelineOrderByWithRelationInput | MatchTimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchTimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchTimelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchTimelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatchTimelines
    **/
    _count?: true | MatchTimelineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchTimelineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchTimelineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchTimelineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchTimelineMaxAggregateInputType
  }

  export type GetMatchTimelineAggregateType<T extends MatchTimelineAggregateArgs> = {
        [P in keyof T & keyof AggregateMatchTimeline]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchTimeline[P]>
      : GetScalarType<T[P], AggregateMatchTimeline[P]>
  }




  export type MatchTimelineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchTimelineWhereInput
    orderBy?: MatchTimelineOrderByWithAggregationInput | MatchTimelineOrderByWithAggregationInput[]
    by: MatchTimelineScalarFieldEnum[] | MatchTimelineScalarFieldEnum
    having?: MatchTimelineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchTimelineCountAggregateInputType | true
    _avg?: MatchTimelineAvgAggregateInputType
    _sum?: MatchTimelineSumAggregateInputType
    _min?: MatchTimelineMinAggregateInputType
    _max?: MatchTimelineMaxAggregateInputType
  }

  export type MatchTimelineGroupByOutputType = {
    id: string
    time: number
    type: $Enums.MatchEvent
    teamId: string
    matchId: string
    playerId: string
    _count: MatchTimelineCountAggregateOutputType | null
    _avg: MatchTimelineAvgAggregateOutputType | null
    _sum: MatchTimelineSumAggregateOutputType | null
    _min: MatchTimelineMinAggregateOutputType | null
    _max: MatchTimelineMaxAggregateOutputType | null
  }

  type GetMatchTimelineGroupByPayload<T extends MatchTimelineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchTimelineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchTimelineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchTimelineGroupByOutputType[P]>
            : GetScalarType<T[P], MatchTimelineGroupByOutputType[P]>
        }
      >
    >


  export type MatchTimelineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    time?: boolean
    type?: boolean
    teamId?: boolean
    matchId?: boolean
    playerId?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    match?: boolean | MatchDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchTimeline"]>

  export type MatchTimelineSelectScalar = {
    id?: boolean
    time?: boolean
    type?: boolean
    teamId?: boolean
    matchId?: boolean
    playerId?: boolean
  }

  export type MatchTimelineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    match?: boolean | MatchDefaultArgs<ExtArgs>
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }


  export type $MatchTimelinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatchTimeline"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
      match: Prisma.$MatchPayload<ExtArgs>
      player: Prisma.$PlayerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      time: number
      type: $Enums.MatchEvent
      teamId: string
      matchId: string
      playerId: string
    }, ExtArgs["result"]["matchTimeline"]>
    composites: {}
  }


  type MatchTimelineGetPayload<S extends boolean | null | undefined | MatchTimelineDefaultArgs> = $Result.GetResult<Prisma.$MatchTimelinePayload, S>

  type MatchTimelineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MatchTimelineFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MatchTimelineCountAggregateInputType | true
    }

  export interface MatchTimelineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatchTimeline'], meta: { name: 'MatchTimeline' } }
    /**
     * Find zero or one MatchTimeline that matches the filter.
     * @param {MatchTimelineFindUniqueArgs} args - Arguments to find a MatchTimeline
     * @example
     * // Get one MatchTimeline
     * const matchTimeline = await prisma.matchTimeline.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MatchTimelineFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MatchTimelineFindUniqueArgs<ExtArgs>>
    ): Prisma__MatchTimelineClient<$Result.GetResult<Prisma.$MatchTimelinePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MatchTimeline that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MatchTimelineFindUniqueOrThrowArgs} args - Arguments to find a MatchTimeline
     * @example
     * // Get one MatchTimeline
     * const matchTimeline = await prisma.matchTimeline.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MatchTimelineFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchTimelineFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MatchTimelineClient<$Result.GetResult<Prisma.$MatchTimelinePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MatchTimeline that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchTimelineFindFirstArgs} args - Arguments to find a MatchTimeline
     * @example
     * // Get one MatchTimeline
     * const matchTimeline = await prisma.matchTimeline.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MatchTimelineFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchTimelineFindFirstArgs<ExtArgs>>
    ): Prisma__MatchTimelineClient<$Result.GetResult<Prisma.$MatchTimelinePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MatchTimeline that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchTimelineFindFirstOrThrowArgs} args - Arguments to find a MatchTimeline
     * @example
     * // Get one MatchTimeline
     * const matchTimeline = await prisma.matchTimeline.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MatchTimelineFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchTimelineFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MatchTimelineClient<$Result.GetResult<Prisma.$MatchTimelinePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MatchTimelines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchTimelineFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatchTimelines
     * const matchTimelines = await prisma.matchTimeline.findMany()
     * 
     * // Get first 10 MatchTimelines
     * const matchTimelines = await prisma.matchTimeline.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchTimelineWithIdOnly = await prisma.matchTimeline.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MatchTimelineFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchTimelineFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchTimelinePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MatchTimeline.
     * @param {MatchTimelineCreateArgs} args - Arguments to create a MatchTimeline.
     * @example
     * // Create one MatchTimeline
     * const MatchTimeline = await prisma.matchTimeline.create({
     *   data: {
     *     // ... data to create a MatchTimeline
     *   }
     * })
     * 
    **/
    create<T extends MatchTimelineCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MatchTimelineCreateArgs<ExtArgs>>
    ): Prisma__MatchTimelineClient<$Result.GetResult<Prisma.$MatchTimelinePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many MatchTimelines.
     *     @param {MatchTimelineCreateManyArgs} args - Arguments to create many MatchTimelines.
     *     @example
     *     // Create many MatchTimelines
     *     const matchTimeline = await prisma.matchTimeline.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MatchTimelineCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchTimelineCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MatchTimeline.
     * @param {MatchTimelineDeleteArgs} args - Arguments to delete one MatchTimeline.
     * @example
     * // Delete one MatchTimeline
     * const MatchTimeline = await prisma.matchTimeline.delete({
     *   where: {
     *     // ... filter to delete one MatchTimeline
     *   }
     * })
     * 
    **/
    delete<T extends MatchTimelineDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MatchTimelineDeleteArgs<ExtArgs>>
    ): Prisma__MatchTimelineClient<$Result.GetResult<Prisma.$MatchTimelinePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MatchTimeline.
     * @param {MatchTimelineUpdateArgs} args - Arguments to update one MatchTimeline.
     * @example
     * // Update one MatchTimeline
     * const matchTimeline = await prisma.matchTimeline.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MatchTimelineUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MatchTimelineUpdateArgs<ExtArgs>>
    ): Prisma__MatchTimelineClient<$Result.GetResult<Prisma.$MatchTimelinePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MatchTimelines.
     * @param {MatchTimelineDeleteManyArgs} args - Arguments to filter MatchTimelines to delete.
     * @example
     * // Delete a few MatchTimelines
     * const { count } = await prisma.matchTimeline.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MatchTimelineDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MatchTimelineDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchTimelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchTimelineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatchTimelines
     * const matchTimeline = await prisma.matchTimeline.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MatchTimelineUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MatchTimelineUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MatchTimeline.
     * @param {MatchTimelineUpsertArgs} args - Arguments to update or create a MatchTimeline.
     * @example
     * // Update or create a MatchTimeline
     * const matchTimeline = await prisma.matchTimeline.upsert({
     *   create: {
     *     // ... data to create a MatchTimeline
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatchTimeline we want to update
     *   }
     * })
    **/
    upsert<T extends MatchTimelineUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MatchTimelineUpsertArgs<ExtArgs>>
    ): Prisma__MatchTimelineClient<$Result.GetResult<Prisma.$MatchTimelinePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MatchTimelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchTimelineCountArgs} args - Arguments to filter MatchTimelines to count.
     * @example
     * // Count the number of MatchTimelines
     * const count = await prisma.matchTimeline.count({
     *   where: {
     *     // ... the filter for the MatchTimelines we want to count
     *   }
     * })
    **/
    count<T extends MatchTimelineCountArgs>(
      args?: Subset<T, MatchTimelineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchTimelineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatchTimeline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchTimelineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchTimelineAggregateArgs>(args: Subset<T, MatchTimelineAggregateArgs>): Prisma.PrismaPromise<GetMatchTimelineAggregateType<T>>

    /**
     * Group by MatchTimeline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchTimelineGroupByArgs} args - Group by arguments.
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
      T extends MatchTimelineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchTimelineGroupByArgs['orderBy'] }
        : { orderBy?: MatchTimelineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatchTimelineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchTimelineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MatchTimeline model
   */
  readonly fields: MatchTimelineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatchTimeline.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchTimelineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    match<T extends MatchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatchDefaultArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    player<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MatchTimeline model
   */ 
  interface MatchTimelineFieldRefs {
    readonly id: FieldRef<"MatchTimeline", 'String'>
    readonly time: FieldRef<"MatchTimeline", 'Int'>
    readonly type: FieldRef<"MatchTimeline", 'MatchEvent'>
    readonly teamId: FieldRef<"MatchTimeline", 'String'>
    readonly matchId: FieldRef<"MatchTimeline", 'String'>
    readonly playerId: FieldRef<"MatchTimeline", 'String'>
  }
    

  // Custom InputTypes

  /**
   * MatchTimeline findUnique
   */
  export type MatchTimelineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchTimeline
     */
    select?: MatchTimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchTimelineInclude<ExtArgs> | null
    /**
     * Filter, which MatchTimeline to fetch.
     */
    where: MatchTimelineWhereUniqueInput
  }


  /**
   * MatchTimeline findUniqueOrThrow
   */
  export type MatchTimelineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchTimeline
     */
    select?: MatchTimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchTimelineInclude<ExtArgs> | null
    /**
     * Filter, which MatchTimeline to fetch.
     */
    where: MatchTimelineWhereUniqueInput
  }


  /**
   * MatchTimeline findFirst
   */
  export type MatchTimelineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchTimeline
     */
    select?: MatchTimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchTimelineInclude<ExtArgs> | null
    /**
     * Filter, which MatchTimeline to fetch.
     */
    where?: MatchTimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchTimelines to fetch.
     */
    orderBy?: MatchTimelineOrderByWithRelationInput | MatchTimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchTimelines.
     */
    cursor?: MatchTimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchTimelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchTimelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchTimelines.
     */
    distinct?: MatchTimelineScalarFieldEnum | MatchTimelineScalarFieldEnum[]
  }


  /**
   * MatchTimeline findFirstOrThrow
   */
  export type MatchTimelineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchTimeline
     */
    select?: MatchTimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchTimelineInclude<ExtArgs> | null
    /**
     * Filter, which MatchTimeline to fetch.
     */
    where?: MatchTimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchTimelines to fetch.
     */
    orderBy?: MatchTimelineOrderByWithRelationInput | MatchTimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchTimelines.
     */
    cursor?: MatchTimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchTimelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchTimelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchTimelines.
     */
    distinct?: MatchTimelineScalarFieldEnum | MatchTimelineScalarFieldEnum[]
  }


  /**
   * MatchTimeline findMany
   */
  export type MatchTimelineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchTimeline
     */
    select?: MatchTimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchTimelineInclude<ExtArgs> | null
    /**
     * Filter, which MatchTimelines to fetch.
     */
    where?: MatchTimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchTimelines to fetch.
     */
    orderBy?: MatchTimelineOrderByWithRelationInput | MatchTimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatchTimelines.
     */
    cursor?: MatchTimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchTimelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchTimelines.
     */
    skip?: number
    distinct?: MatchTimelineScalarFieldEnum | MatchTimelineScalarFieldEnum[]
  }


  /**
   * MatchTimeline create
   */
  export type MatchTimelineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchTimeline
     */
    select?: MatchTimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchTimelineInclude<ExtArgs> | null
    /**
     * The data needed to create a MatchTimeline.
     */
    data: XOR<MatchTimelineCreateInput, MatchTimelineUncheckedCreateInput>
  }


  /**
   * MatchTimeline createMany
   */
  export type MatchTimelineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatchTimelines.
     */
    data: MatchTimelineCreateManyInput | MatchTimelineCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * MatchTimeline update
   */
  export type MatchTimelineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchTimeline
     */
    select?: MatchTimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchTimelineInclude<ExtArgs> | null
    /**
     * The data needed to update a MatchTimeline.
     */
    data: XOR<MatchTimelineUpdateInput, MatchTimelineUncheckedUpdateInput>
    /**
     * Choose, which MatchTimeline to update.
     */
    where: MatchTimelineWhereUniqueInput
  }


  /**
   * MatchTimeline updateMany
   */
  export type MatchTimelineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatchTimelines.
     */
    data: XOR<MatchTimelineUpdateManyMutationInput, MatchTimelineUncheckedUpdateManyInput>
    /**
     * Filter which MatchTimelines to update
     */
    where?: MatchTimelineWhereInput
  }


  /**
   * MatchTimeline upsert
   */
  export type MatchTimelineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchTimeline
     */
    select?: MatchTimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchTimelineInclude<ExtArgs> | null
    /**
     * The filter to search for the MatchTimeline to update in case it exists.
     */
    where: MatchTimelineWhereUniqueInput
    /**
     * In case the MatchTimeline found by the `where` argument doesn't exist, create a new MatchTimeline with this data.
     */
    create: XOR<MatchTimelineCreateInput, MatchTimelineUncheckedCreateInput>
    /**
     * In case the MatchTimeline was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchTimelineUpdateInput, MatchTimelineUncheckedUpdateInput>
  }


  /**
   * MatchTimeline delete
   */
  export type MatchTimelineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchTimeline
     */
    select?: MatchTimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchTimelineInclude<ExtArgs> | null
    /**
     * Filter which MatchTimeline to delete.
     */
    where: MatchTimelineWhereUniqueInput
  }


  /**
   * MatchTimeline deleteMany
   */
  export type MatchTimelineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchTimelines to delete
     */
    where?: MatchTimelineWhereInput
  }


  /**
   * MatchTimeline without action
   */
  export type MatchTimelineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchTimeline
     */
    select?: MatchTimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MatchTimelineInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PlayerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId',
    teamId: 'teamId',
    isCaptain: 'isCaptain'
  };

  export type PlayerScalarFieldEnum = (typeof PlayerScalarFieldEnum)[keyof typeof PlayerScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const TournamentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status'
  };

  export type TournamentScalarFieldEnum = (typeof TournamentScalarFieldEnum)[keyof typeof TournamentScalarFieldEnum]


  export const TournamentApplicationScalarFieldEnum: {
    id: 'id',
    teamId: 'teamId',
    tournamentId: 'tournamentId',
    date: 'date'
  };

  export type TournamentApplicationScalarFieldEnum = (typeof TournamentApplicationScalarFieldEnum)[keyof typeof TournamentApplicationScalarFieldEnum]


  export const MatchScalarFieldEnum: {
    id: 'id',
    status: 'status',
    date: 'date',
    tournamentId: 'tournamentId',
    winnerId: 'winnerId'
  };

  export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum]


  export const MatchApplicationScalarFieldEnum: {
    id: 'id',
    teamId: 'teamId',
    matchID: 'matchID'
  };

  export type MatchApplicationScalarFieldEnum = (typeof MatchApplicationScalarFieldEnum)[keyof typeof MatchApplicationScalarFieldEnum]


  export const MatchTimelineScalarFieldEnum: {
    id: 'id',
    time: 'time',
    type: 'type',
    teamId: 'teamId',
    matchId: 'matchId',
    playerId: 'playerId'
  };

  export type MatchTimelineScalarFieldEnum = (typeof MatchTimelineScalarFieldEnum)[keyof typeof MatchTimelineScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TournamentStatus'
   */
  export type EnumTournamentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TournamentStatus'>
    


  /**
   * Reference to a field of type 'TournamentStatus[]'
   */
  export type ListEnumTournamentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TournamentStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'MatchStatus'
   */
  export type EnumMatchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchStatus'>
    


  /**
   * Reference to a field of type 'MatchStatus[]'
   */
  export type ListEnumMatchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'MatchEvent'
   */
  export type EnumMatchEventFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchEvent'>
    


  /**
   * Reference to a field of type 'MatchEvent[]'
   */
  export type ListEnumMatchEventFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchEvent[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    player?: XOR<PlayerNullableRelationFilter, PlayerWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    player?: PlayerOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    player?: XOR<PlayerNullableRelationFilter, PlayerWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type PlayerWhereInput = {
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    id?: StringFilter<"Player"> | string
    name?: StringFilter<"Player"> | string
    userId?: StringFilter<"Player"> | string
    teamId?: StringFilter<"Player"> | string
    isCaptain?: BoolFilter<"Player"> | boolean
    tournamentApplications?: TournamentApplicationListRelationFilter
    matchApplications?: MatchApplicationListRelationFilter
    matchTimeline?: MatchTimelineListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
    team?: XOR<TeamNullableRelationFilter, TeamWhereInput> | null
  }

  export type PlayerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    isCaptain?: SortOrder
    tournamentApplications?: TournamentApplicationOrderByRelationAggregateInput
    matchApplications?: MatchApplicationOrderByRelationAggregateInput
    matchTimeline?: MatchTimelineOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    team?: TeamOrderByWithRelationInput
  }

  export type PlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    name?: StringFilter<"Player"> | string
    teamId?: StringFilter<"Player"> | string
    isCaptain?: BoolFilter<"Player"> | boolean
    tournamentApplications?: TournamentApplicationListRelationFilter
    matchApplications?: MatchApplicationListRelationFilter
    matchTimeline?: MatchTimelineListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
    team?: XOR<TeamNullableRelationFilter, TeamWhereInput> | null
  }, "id" | "userId">

  export type PlayerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    isCaptain?: SortOrder
    _count?: PlayerCountOrderByAggregateInput
    _max?: PlayerMaxOrderByAggregateInput
    _min?: PlayerMinOrderByAggregateInput
  }

  export type PlayerScalarWhereWithAggregatesInput = {
    AND?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    OR?: PlayerScalarWhereWithAggregatesInput[]
    NOT?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Player"> | string
    name?: StringWithAggregatesFilter<"Player"> | string
    userId?: StringWithAggregatesFilter<"Player"> | string
    teamId?: StringWithAggregatesFilter<"Player"> | string
    isCaptain?: BoolWithAggregatesFilter<"Player"> | boolean
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    tournamentApplications?: TournamentApplicationListRelationFilter
    match?: MatchListRelationFilter
    matchApplications?: MatchApplicationListRelationFilter
    matchTimeline?: MatchTimelineListRelationFilter
    players?: PlayerListRelationFilter
    tournamentIds?: TournamentListRelationFilter
    wonMatchesIds?: MatchListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tournamentApplications?: TournamentApplicationOrderByRelationAggregateInput
    match?: MatchOrderByRelationAggregateInput
    matchApplications?: MatchApplicationOrderByRelationAggregateInput
    matchTimeline?: MatchTimelineOrderByRelationAggregateInput
    players?: PlayerOrderByRelationAggregateInput
    tournamentIds?: TournamentOrderByRelationAggregateInput
    wonMatchesIds?: MatchOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    name?: StringFilter<"Team"> | string
    tournamentApplications?: TournamentApplicationListRelationFilter
    match?: MatchListRelationFilter
    matchApplications?: MatchApplicationListRelationFilter
    matchTimeline?: MatchTimelineListRelationFilter
    players?: PlayerListRelationFilter
    tournamentIds?: TournamentListRelationFilter
    wonMatchesIds?: MatchListRelationFilter
  }, "id">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Team"> | string
    name?: StringWithAggregatesFilter<"Team"> | string
  }

  export type TournamentWhereInput = {
    AND?: TournamentWhereInput | TournamentWhereInput[]
    OR?: TournamentWhereInput[]
    NOT?: TournamentWhereInput | TournamentWhereInput[]
    id?: StringFilter<"Tournament"> | string
    name?: StringFilter<"Tournament"> | string
    status?: EnumTournamentStatusFilter<"Tournament"> | $Enums.TournamentStatus
    tournamentApplications?: TournamentApplicationListRelationFilter
    match?: MatchListRelationFilter
    teamIds?: TeamListRelationFilter
  }

  export type TournamentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    tournamentApplications?: TournamentApplicationOrderByRelationAggregateInput
    match?: MatchOrderByRelationAggregateInput
    teamIds?: TeamOrderByRelationAggregateInput
  }

  export type TournamentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TournamentWhereInput | TournamentWhereInput[]
    OR?: TournamentWhereInput[]
    NOT?: TournamentWhereInput | TournamentWhereInput[]
    name?: StringFilter<"Tournament"> | string
    status?: EnumTournamentStatusFilter<"Tournament"> | $Enums.TournamentStatus
    tournamentApplications?: TournamentApplicationListRelationFilter
    match?: MatchListRelationFilter
    teamIds?: TeamListRelationFilter
  }, "id">

  export type TournamentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    _count?: TournamentCountOrderByAggregateInput
    _max?: TournamentMaxOrderByAggregateInput
    _min?: TournamentMinOrderByAggregateInput
  }

  export type TournamentScalarWhereWithAggregatesInput = {
    AND?: TournamentScalarWhereWithAggregatesInput | TournamentScalarWhereWithAggregatesInput[]
    OR?: TournamentScalarWhereWithAggregatesInput[]
    NOT?: TournamentScalarWhereWithAggregatesInput | TournamentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tournament"> | string
    name?: StringWithAggregatesFilter<"Tournament"> | string
    status?: EnumTournamentStatusWithAggregatesFilter<"Tournament"> | $Enums.TournamentStatus
  }

  export type TournamentApplicationWhereInput = {
    AND?: TournamentApplicationWhereInput | TournamentApplicationWhereInput[]
    OR?: TournamentApplicationWhereInput[]
    NOT?: TournamentApplicationWhereInput | TournamentApplicationWhereInput[]
    id?: StringFilter<"TournamentApplication"> | string
    teamId?: StringFilter<"TournamentApplication"> | string
    tournamentId?: StringFilter<"TournamentApplication"> | string
    date?: DateTimeNullableFilter<"TournamentApplication"> | Date | string | null
    team?: XOR<TeamRelationFilter, TeamWhereInput>
    tournament?: XOR<TournamentRelationFilter, TournamentWhereInput>
    players?: PlayerListRelationFilter
  }

  export type TournamentApplicationOrderByWithRelationInput = {
    id?: SortOrder
    teamId?: SortOrder
    tournamentId?: SortOrder
    date?: SortOrderInput | SortOrder
    team?: TeamOrderByWithRelationInput
    tournament?: TournamentOrderByWithRelationInput
    players?: PlayerOrderByRelationAggregateInput
  }

  export type TournamentApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TournamentApplicationWhereInput | TournamentApplicationWhereInput[]
    OR?: TournamentApplicationWhereInput[]
    NOT?: TournamentApplicationWhereInput | TournamentApplicationWhereInput[]
    teamId?: StringFilter<"TournamentApplication"> | string
    tournamentId?: StringFilter<"TournamentApplication"> | string
    date?: DateTimeNullableFilter<"TournamentApplication"> | Date | string | null
    team?: XOR<TeamRelationFilter, TeamWhereInput>
    tournament?: XOR<TournamentRelationFilter, TournamentWhereInput>
    players?: PlayerListRelationFilter
  }, "id">

  export type TournamentApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    teamId?: SortOrder
    tournamentId?: SortOrder
    date?: SortOrderInput | SortOrder
    _count?: TournamentApplicationCountOrderByAggregateInput
    _max?: TournamentApplicationMaxOrderByAggregateInput
    _min?: TournamentApplicationMinOrderByAggregateInput
  }

  export type TournamentApplicationScalarWhereWithAggregatesInput = {
    AND?: TournamentApplicationScalarWhereWithAggregatesInput | TournamentApplicationScalarWhereWithAggregatesInput[]
    OR?: TournamentApplicationScalarWhereWithAggregatesInput[]
    NOT?: TournamentApplicationScalarWhereWithAggregatesInput | TournamentApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TournamentApplication"> | string
    teamId?: StringWithAggregatesFilter<"TournamentApplication"> | string
    tournamentId?: StringWithAggregatesFilter<"TournamentApplication"> | string
    date?: DateTimeNullableWithAggregatesFilter<"TournamentApplication"> | Date | string | null
  }

  export type MatchWhereInput = {
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    id?: StringFilter<"Match"> | string
    status?: EnumMatchStatusFilter<"Match"> | $Enums.MatchStatus
    date?: DateTimeNullableFilter<"Match"> | Date | string | null
    tournamentId?: StringFilter<"Match"> | string
    winnerId?: StringNullableFilter<"Match"> | string | null
    teams?: TeamListRelationFilter
    tournament?: XOR<TournamentRelationFilter, TournamentWhereInput>
    matchApplications?: MatchApplicationListRelationFilter
    matchTimeline?: MatchTimelineListRelationFilter
    winner?: XOR<TeamNullableRelationFilter, TeamWhereInput> | null
  }

  export type MatchOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    date?: SortOrderInput | SortOrder
    tournamentId?: SortOrder
    winnerId?: SortOrderInput | SortOrder
    teams?: TeamOrderByRelationAggregateInput
    tournament?: TournamentOrderByWithRelationInput
    matchApplications?: MatchApplicationOrderByRelationAggregateInput
    matchTimeline?: MatchTimelineOrderByRelationAggregateInput
    winner?: TeamOrderByWithRelationInput
  }

  export type MatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    status?: EnumMatchStatusFilter<"Match"> | $Enums.MatchStatus
    date?: DateTimeNullableFilter<"Match"> | Date | string | null
    tournamentId?: StringFilter<"Match"> | string
    winnerId?: StringNullableFilter<"Match"> | string | null
    teams?: TeamListRelationFilter
    tournament?: XOR<TournamentRelationFilter, TournamentWhereInput>
    matchApplications?: MatchApplicationListRelationFilter
    matchTimeline?: MatchTimelineListRelationFilter
    winner?: XOR<TeamNullableRelationFilter, TeamWhereInput> | null
  }, "id">

  export type MatchOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    date?: SortOrderInput | SortOrder
    tournamentId?: SortOrder
    winnerId?: SortOrderInput | SortOrder
    _count?: MatchCountOrderByAggregateInput
    _max?: MatchMaxOrderByAggregateInput
    _min?: MatchMinOrderByAggregateInput
  }

  export type MatchScalarWhereWithAggregatesInput = {
    AND?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    OR?: MatchScalarWhereWithAggregatesInput[]
    NOT?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Match"> | string
    status?: EnumMatchStatusWithAggregatesFilter<"Match"> | $Enums.MatchStatus
    date?: DateTimeNullableWithAggregatesFilter<"Match"> | Date | string | null
    tournamentId?: StringWithAggregatesFilter<"Match"> | string
    winnerId?: StringNullableWithAggregatesFilter<"Match"> | string | null
  }

  export type MatchApplicationWhereInput = {
    AND?: MatchApplicationWhereInput | MatchApplicationWhereInput[]
    OR?: MatchApplicationWhereInput[]
    NOT?: MatchApplicationWhereInput | MatchApplicationWhereInput[]
    id?: StringFilter<"MatchApplication"> | string
    teamId?: StringFilter<"MatchApplication"> | string
    matchID?: StringFilter<"MatchApplication"> | string
    team?: XOR<TeamRelationFilter, TeamWhereInput>
    match?: XOR<MatchRelationFilter, MatchWhereInput>
    players?: PlayerListRelationFilter
  }

  export type MatchApplicationOrderByWithRelationInput = {
    id?: SortOrder
    teamId?: SortOrder
    matchID?: SortOrder
    team?: TeamOrderByWithRelationInput
    match?: MatchOrderByWithRelationInput
    players?: PlayerOrderByRelationAggregateInput
  }

  export type MatchApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatchApplicationWhereInput | MatchApplicationWhereInput[]
    OR?: MatchApplicationWhereInput[]
    NOT?: MatchApplicationWhereInput | MatchApplicationWhereInput[]
    teamId?: StringFilter<"MatchApplication"> | string
    matchID?: StringFilter<"MatchApplication"> | string
    team?: XOR<TeamRelationFilter, TeamWhereInput>
    match?: XOR<MatchRelationFilter, MatchWhereInput>
    players?: PlayerListRelationFilter
  }, "id">

  export type MatchApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    teamId?: SortOrder
    matchID?: SortOrder
    _count?: MatchApplicationCountOrderByAggregateInput
    _max?: MatchApplicationMaxOrderByAggregateInput
    _min?: MatchApplicationMinOrderByAggregateInput
  }

  export type MatchApplicationScalarWhereWithAggregatesInput = {
    AND?: MatchApplicationScalarWhereWithAggregatesInput | MatchApplicationScalarWhereWithAggregatesInput[]
    OR?: MatchApplicationScalarWhereWithAggregatesInput[]
    NOT?: MatchApplicationScalarWhereWithAggregatesInput | MatchApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MatchApplication"> | string
    teamId?: StringWithAggregatesFilter<"MatchApplication"> | string
    matchID?: StringWithAggregatesFilter<"MatchApplication"> | string
  }

  export type MatchTimelineWhereInput = {
    AND?: MatchTimelineWhereInput | MatchTimelineWhereInput[]
    OR?: MatchTimelineWhereInput[]
    NOT?: MatchTimelineWhereInput | MatchTimelineWhereInput[]
    id?: StringFilter<"MatchTimeline"> | string
    time?: IntFilter<"MatchTimeline"> | number
    type?: EnumMatchEventFilter<"MatchTimeline"> | $Enums.MatchEvent
    teamId?: StringFilter<"MatchTimeline"> | string
    matchId?: StringFilter<"MatchTimeline"> | string
    playerId?: StringFilter<"MatchTimeline"> | string
    team?: XOR<TeamRelationFilter, TeamWhereInput>
    match?: XOR<MatchRelationFilter, MatchWhereInput>
    player?: XOR<PlayerRelationFilter, PlayerWhereInput>
  }

  export type MatchTimelineOrderByWithRelationInput = {
    id?: SortOrder
    time?: SortOrder
    type?: SortOrder
    teamId?: SortOrder
    matchId?: SortOrder
    playerId?: SortOrder
    team?: TeamOrderByWithRelationInput
    match?: MatchOrderByWithRelationInput
    player?: PlayerOrderByWithRelationInput
  }

  export type MatchTimelineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatchTimelineWhereInput | MatchTimelineWhereInput[]
    OR?: MatchTimelineWhereInput[]
    NOT?: MatchTimelineWhereInput | MatchTimelineWhereInput[]
    time?: IntFilter<"MatchTimeline"> | number
    type?: EnumMatchEventFilter<"MatchTimeline"> | $Enums.MatchEvent
    teamId?: StringFilter<"MatchTimeline"> | string
    matchId?: StringFilter<"MatchTimeline"> | string
    playerId?: StringFilter<"MatchTimeline"> | string
    team?: XOR<TeamRelationFilter, TeamWhereInput>
    match?: XOR<MatchRelationFilter, MatchWhereInput>
    player?: XOR<PlayerRelationFilter, PlayerWhereInput>
  }, "id">

  export type MatchTimelineOrderByWithAggregationInput = {
    id?: SortOrder
    time?: SortOrder
    type?: SortOrder
    teamId?: SortOrder
    matchId?: SortOrder
    playerId?: SortOrder
    _count?: MatchTimelineCountOrderByAggregateInput
    _avg?: MatchTimelineAvgOrderByAggregateInput
    _max?: MatchTimelineMaxOrderByAggregateInput
    _min?: MatchTimelineMinOrderByAggregateInput
    _sum?: MatchTimelineSumOrderByAggregateInput
  }

  export type MatchTimelineScalarWhereWithAggregatesInput = {
    AND?: MatchTimelineScalarWhereWithAggregatesInput | MatchTimelineScalarWhereWithAggregatesInput[]
    OR?: MatchTimelineScalarWhereWithAggregatesInput[]
    NOT?: MatchTimelineScalarWhereWithAggregatesInput | MatchTimelineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MatchTimeline"> | string
    time?: IntWithAggregatesFilter<"MatchTimeline"> | number
    type?: EnumMatchEventWithAggregatesFilter<"MatchTimeline"> | $Enums.MatchEvent
    teamId?: StringWithAggregatesFilter<"MatchTimeline"> | string
    matchId?: StringWithAggregatesFilter<"MatchTimeline"> | string
    playerId?: StringWithAggregatesFilter<"MatchTimeline"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    player?: PlayerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    player?: PlayerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    player?: PlayerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    player?: PlayerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type PlayerCreateInput = {
    id?: string
    name: string
    isCaptain?: boolean
    tournamentApplications?: TournamentApplicationCreateNestedManyWithoutPlayersInput
    matchApplications?: MatchApplicationCreateNestedManyWithoutPlayersInput
    matchTimeline?: MatchTimelineCreateNestedManyWithoutPlayerInput
    user: UserCreateNestedOneWithoutPlayerInput
    team?: TeamCreateNestedOneWithoutPlayersInput
  }

  export type PlayerUncheckedCreateInput = {
    id?: string
    name: string
    userId: string
    teamId: string
    isCaptain?: boolean
    tournamentApplications?: TournamentApplicationUncheckedCreateNestedManyWithoutPlayersInput
    matchApplications?: MatchApplicationUncheckedCreateNestedManyWithoutPlayersInput
    matchTimeline?: MatchTimelineUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isCaptain?: BoolFieldUpdateOperationsInput | boolean
    tournamentApplications?: TournamentApplicationUpdateManyWithoutPlayersNestedInput
    matchApplications?: MatchApplicationUpdateManyWithoutPlayersNestedInput
    matchTimeline?: MatchTimelineUpdateManyWithoutPlayerNestedInput
    user?: UserUpdateOneRequiredWithoutPlayerNestedInput
    team?: TeamUpdateOneWithoutPlayersNestedInput
  }

  export type PlayerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    isCaptain?: BoolFieldUpdateOperationsInput | boolean
    tournamentApplications?: TournamentApplicationUncheckedUpdateManyWithoutPlayersNestedInput
    matchApplications?: MatchApplicationUncheckedUpdateManyWithoutPlayersNestedInput
    matchTimeline?: MatchTimelineUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerCreateManyInput = {
    id?: string
    name: string
    userId: string
    teamId: string
    isCaptain?: boolean
  }

  export type PlayerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isCaptain?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PlayerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    isCaptain?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TeamCreateInput = {
    id?: string
    name: string
    tournamentApplications?: TournamentApplicationCreateNestedManyWithoutTeamInput
    match?: MatchCreateNestedManyWithoutTeamsInput
    matchApplications?: MatchApplicationCreateNestedManyWithoutTeamInput
    matchTimeline?: MatchTimelineCreateNestedManyWithoutTeamInput
    players?: PlayerCreateNestedManyWithoutTeamInput
    tournamentIds?: TournamentCreateNestedManyWithoutTeamIdsInput
    wonMatchesIds?: MatchCreateNestedManyWithoutWinnerInput
  }

  export type TeamUncheckedCreateInput = {
    id?: string
    name: string
    tournamentApplications?: TournamentApplicationUncheckedCreateNestedManyWithoutTeamInput
    match?: MatchUncheckedCreateNestedManyWithoutTeamsInput
    matchApplications?: MatchApplicationUncheckedCreateNestedManyWithoutTeamInput
    matchTimeline?: MatchTimelineUncheckedCreateNestedManyWithoutTeamInput
    players?: PlayerUncheckedCreateNestedManyWithoutTeamInput
    tournamentIds?: TournamentUncheckedCreateNestedManyWithoutTeamIdsInput
    wonMatchesIds?: MatchUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type TeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tournamentApplications?: TournamentApplicationUpdateManyWithoutTeamNestedInput
    match?: MatchUpdateManyWithoutTeamsNestedInput
    matchApplications?: MatchApplicationUpdateManyWithoutTeamNestedInput
    matchTimeline?: MatchTimelineUpdateManyWithoutTeamNestedInput
    players?: PlayerUpdateManyWithoutTeamNestedInput
    tournamentIds?: TournamentUpdateManyWithoutTeamIdsNestedInput
    wonMatchesIds?: MatchUpdateManyWithoutWinnerNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tournamentApplications?: TournamentApplicationUncheckedUpdateManyWithoutTeamNestedInput
    match?: MatchUncheckedUpdateManyWithoutTeamsNestedInput
    matchApplications?: MatchApplicationUncheckedUpdateManyWithoutTeamNestedInput
    matchTimeline?: MatchTimelineUncheckedUpdateManyWithoutTeamNestedInput
    players?: PlayerUncheckedUpdateManyWithoutTeamNestedInput
    tournamentIds?: TournamentUncheckedUpdateManyWithoutTeamIdsNestedInput
    wonMatchesIds?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type TeamCreateManyInput = {
    id?: string
    name: string
  }

  export type TeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TournamentCreateInput = {
    id?: string
    name: string
    status?: $Enums.TournamentStatus
    tournamentApplications?: TournamentApplicationCreateNestedManyWithoutTournamentInput
    match?: MatchCreateNestedManyWithoutTournamentInput
    teamIds?: TeamCreateNestedManyWithoutTournamentIdsInput
  }

  export type TournamentUncheckedCreateInput = {
    id?: string
    name: string
    status?: $Enums.TournamentStatus
    tournamentApplications?: TournamentApplicationUncheckedCreateNestedManyWithoutTournamentInput
    match?: MatchUncheckedCreateNestedManyWithoutTournamentInput
    teamIds?: TeamUncheckedCreateNestedManyWithoutTournamentIdsInput
  }

  export type TournamentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    tournamentApplications?: TournamentApplicationUpdateManyWithoutTournamentNestedInput
    match?: MatchUpdateManyWithoutTournamentNestedInput
    teamIds?: TeamUpdateManyWithoutTournamentIdsNestedInput
  }

  export type TournamentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    tournamentApplications?: TournamentApplicationUncheckedUpdateManyWithoutTournamentNestedInput
    match?: MatchUncheckedUpdateManyWithoutTournamentNestedInput
    teamIds?: TeamUncheckedUpdateManyWithoutTournamentIdsNestedInput
  }

  export type TournamentCreateManyInput = {
    id?: string
    name: string
    status?: $Enums.TournamentStatus
  }

  export type TournamentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
  }

  export type TournamentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
  }

  export type TournamentApplicationCreateInput = {
    id?: string
    date?: Date | string | null
    team: TeamCreateNestedOneWithoutTournamentApplicationsInput
    tournament: TournamentCreateNestedOneWithoutTournamentApplicationsInput
    players?: PlayerCreateNestedManyWithoutTournamentApplicationsInput
  }

  export type TournamentApplicationUncheckedCreateInput = {
    id?: string
    teamId: string
    tournamentId: string
    date?: Date | string | null
    players?: PlayerUncheckedCreateNestedManyWithoutTournamentApplicationsInput
  }

  export type TournamentApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team?: TeamUpdateOneRequiredWithoutTournamentApplicationsNestedInput
    tournament?: TournamentUpdateOneRequiredWithoutTournamentApplicationsNestedInput
    players?: PlayerUpdateManyWithoutTournamentApplicationsNestedInput
  }

  export type TournamentApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    tournamentId?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    players?: PlayerUncheckedUpdateManyWithoutTournamentApplicationsNestedInput
  }

  export type TournamentApplicationCreateManyInput = {
    id?: string
    teamId: string
    tournamentId: string
    date?: Date | string | null
  }

  export type TournamentApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TournamentApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    tournamentId?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MatchCreateInput = {
    id?: string
    status?: $Enums.MatchStatus
    date?: Date | string | null
    teams?: TeamCreateNestedManyWithoutMatchInput
    tournament: TournamentCreateNestedOneWithoutMatchInput
    matchApplications?: MatchApplicationCreateNestedManyWithoutMatchInput
    matchTimeline?: MatchTimelineCreateNestedManyWithoutMatchInput
    winner?: TeamCreateNestedOneWithoutWonMatchesIdsInput
  }

  export type MatchUncheckedCreateInput = {
    id?: string
    status?: $Enums.MatchStatus
    date?: Date | string | null
    tournamentId: string
    winnerId?: string | null
    teams?: TeamUncheckedCreateNestedManyWithoutMatchInput
    matchApplications?: MatchApplicationUncheckedCreateNestedManyWithoutMatchInput
    matchTimeline?: MatchTimelineUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teams?: TeamUpdateManyWithoutMatchNestedInput
    tournament?: TournamentUpdateOneRequiredWithoutMatchNestedInput
    matchApplications?: MatchApplicationUpdateManyWithoutMatchNestedInput
    matchTimeline?: MatchTimelineUpdateManyWithoutMatchNestedInput
    winner?: TeamUpdateOneWithoutWonMatchesIdsNestedInput
  }

  export type MatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tournamentId?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    teams?: TeamUncheckedUpdateManyWithoutMatchNestedInput
    matchApplications?: MatchApplicationUncheckedUpdateManyWithoutMatchNestedInput
    matchTimeline?: MatchTimelineUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchCreateManyInput = {
    id?: string
    status?: $Enums.MatchStatus
    date?: Date | string | null
    tournamentId: string
    winnerId?: string | null
  }

  export type MatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tournamentId?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchApplicationCreateInput = {
    id?: string
    team: TeamCreateNestedOneWithoutMatchApplicationsInput
    match: MatchCreateNestedOneWithoutMatchApplicationsInput
    players?: PlayerCreateNestedManyWithoutMatchApplicationsInput
  }

  export type MatchApplicationUncheckedCreateInput = {
    id?: string
    teamId: string
    matchID: string
    players?: PlayerUncheckedCreateNestedManyWithoutMatchApplicationsInput
  }

  export type MatchApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    team?: TeamUpdateOneRequiredWithoutMatchApplicationsNestedInput
    match?: MatchUpdateOneRequiredWithoutMatchApplicationsNestedInput
    players?: PlayerUpdateManyWithoutMatchApplicationsNestedInput
  }

  export type MatchApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    matchID?: StringFieldUpdateOperationsInput | string
    players?: PlayerUncheckedUpdateManyWithoutMatchApplicationsNestedInput
  }

  export type MatchApplicationCreateManyInput = {
    id?: string
    teamId: string
    matchID: string
  }

  export type MatchApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type MatchApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    matchID?: StringFieldUpdateOperationsInput | string
  }

  export type MatchTimelineCreateInput = {
    id?: string
    time: number
    type: $Enums.MatchEvent
    team: TeamCreateNestedOneWithoutMatchTimelineInput
    match: MatchCreateNestedOneWithoutMatchTimelineInput
    player: PlayerCreateNestedOneWithoutMatchTimelineInput
  }

  export type MatchTimelineUncheckedCreateInput = {
    id?: string
    time: number
    type: $Enums.MatchEvent
    teamId: string
    matchId: string
    playerId: string
  }

  export type MatchTimelineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    type?: EnumMatchEventFieldUpdateOperationsInput | $Enums.MatchEvent
    team?: TeamUpdateOneRequiredWithoutMatchTimelineNestedInput
    match?: MatchUpdateOneRequiredWithoutMatchTimelineNestedInput
    player?: PlayerUpdateOneRequiredWithoutMatchTimelineNestedInput
  }

  export type MatchTimelineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    type?: EnumMatchEventFieldUpdateOperationsInput | $Enums.MatchEvent
    teamId?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
  }

  export type MatchTimelineCreateManyInput = {
    id?: string
    time: number
    type: $Enums.MatchEvent
    teamId: string
    matchId: string
    playerId: string
  }

  export type MatchTimelineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    type?: EnumMatchEventFieldUpdateOperationsInput | $Enums.MatchEvent
  }

  export type MatchTimelineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    type?: EnumMatchEventFieldUpdateOperationsInput | $Enums.MatchEvent
    teamId?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type PlayerNullableRelationFilter = {
    is?: PlayerWhereInput | null
    isNot?: PlayerWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TournamentApplicationListRelationFilter = {
    every?: TournamentApplicationWhereInput
    some?: TournamentApplicationWhereInput
    none?: TournamentApplicationWhereInput
  }

  export type MatchApplicationListRelationFilter = {
    every?: MatchApplicationWhereInput
    some?: MatchApplicationWhereInput
    none?: MatchApplicationWhereInput
  }

  export type MatchTimelineListRelationFilter = {
    every?: MatchTimelineWhereInput
    some?: MatchTimelineWhereInput
    none?: MatchTimelineWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TeamNullableRelationFilter = {
    is?: TeamWhereInput | null
    isNot?: TeamWhereInput | null
  }

  export type TournamentApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchTimelineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    isCaptain?: SortOrder
  }

  export type PlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    isCaptain?: SortOrder
  }

  export type PlayerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    isCaptain?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MatchListRelationFilter = {
    every?: MatchWhereInput
    some?: MatchWhereInput
    none?: MatchWhereInput
  }

  export type PlayerListRelationFilter = {
    every?: PlayerWhereInput
    some?: PlayerWhereInput
    none?: PlayerWhereInput
  }

  export type TournamentListRelationFilter = {
    every?: TournamentWhereInput
    some?: TournamentWhereInput
    none?: TournamentWhereInput
  }

  export type MatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TournamentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EnumTournamentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TournamentStatus | EnumTournamentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTournamentStatusFilter<$PrismaModel> | $Enums.TournamentStatus
  }

  export type TeamListRelationFilter = {
    every?: TeamWhereInput
    some?: TeamWhereInput
    none?: TeamWhereInput
  }

  export type TeamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TournamentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
  }

  export type TournamentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
  }

  export type TournamentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
  }

  export type EnumTournamentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TournamentStatus | EnumTournamentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTournamentStatusWithAggregatesFilter<$PrismaModel> | $Enums.TournamentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTournamentStatusFilter<$PrismaModel>
    _max?: NestedEnumTournamentStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TeamRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type TournamentRelationFilter = {
    is?: TournamentWhereInput
    isNot?: TournamentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TournamentApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    tournamentId?: SortOrder
    date?: SortOrder
  }

  export type TournamentApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    tournamentId?: SortOrder
    date?: SortOrder
  }

  export type TournamentApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    tournamentId?: SortOrder
    date?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumMatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchStatusFilter<$PrismaModel> | $Enums.MatchStatus
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

  export type MatchCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    date?: SortOrder
    tournamentId?: SortOrder
    winnerId?: SortOrder
  }

  export type MatchMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    date?: SortOrder
    tournamentId?: SortOrder
    winnerId?: SortOrder
  }

  export type MatchMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    date?: SortOrder
    tournamentId?: SortOrder
    winnerId?: SortOrder
  }

  export type EnumMatchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel> | $Enums.MatchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchStatusFilter<$PrismaModel>
    _max?: NestedEnumMatchStatusFilter<$PrismaModel>
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

  export type MatchRelationFilter = {
    is?: MatchWhereInput
    isNot?: MatchWhereInput
  }

  export type MatchApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    matchID?: SortOrder
  }

  export type MatchApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    matchID?: SortOrder
  }

  export type MatchApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    matchID?: SortOrder
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

  export type EnumMatchEventFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchEvent | EnumMatchEventFieldRefInput<$PrismaModel>
    in?: $Enums.MatchEvent[] | ListEnumMatchEventFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchEvent[] | ListEnumMatchEventFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchEventFilter<$PrismaModel> | $Enums.MatchEvent
  }

  export type PlayerRelationFilter = {
    is?: PlayerWhereInput
    isNot?: PlayerWhereInput
  }

  export type MatchTimelineCountOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    type?: SortOrder
    teamId?: SortOrder
    matchId?: SortOrder
    playerId?: SortOrder
  }

  export type MatchTimelineAvgOrderByAggregateInput = {
    time?: SortOrder
  }

  export type MatchTimelineMaxOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    type?: SortOrder
    teamId?: SortOrder
    matchId?: SortOrder
    playerId?: SortOrder
  }

  export type MatchTimelineMinOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    type?: SortOrder
    teamId?: SortOrder
    matchId?: SortOrder
    playerId?: SortOrder
  }

  export type MatchTimelineSumOrderByAggregateInput = {
    time?: SortOrder
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

  export type EnumMatchEventWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchEvent | EnumMatchEventFieldRefInput<$PrismaModel>
    in?: $Enums.MatchEvent[] | ListEnumMatchEventFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchEvent[] | ListEnumMatchEventFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchEventWithAggregatesFilter<$PrismaModel> | $Enums.MatchEvent
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchEventFilter<$PrismaModel>
    _max?: NestedEnumMatchEventFilter<$PrismaModel>
  }

  export type PlayerCreateNestedOneWithoutUserInput = {
    create?: XOR<PlayerCreateWithoutUserInput, PlayerUncheckedCreateWithoutUserInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutUserInput
    connect?: PlayerWhereUniqueInput
  }

  export type PlayerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PlayerCreateWithoutUserInput, PlayerUncheckedCreateWithoutUserInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutUserInput
    connect?: PlayerWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type PlayerUpdateOneWithoutUserNestedInput = {
    create?: XOR<PlayerCreateWithoutUserInput, PlayerUncheckedCreateWithoutUserInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutUserInput
    upsert?: PlayerUpsertWithoutUserInput
    disconnect?: PlayerWhereInput | boolean
    delete?: PlayerWhereInput | boolean
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutUserInput, PlayerUpdateWithoutUserInput>, PlayerUncheckedUpdateWithoutUserInput>
  }

  export type PlayerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PlayerCreateWithoutUserInput, PlayerUncheckedCreateWithoutUserInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutUserInput
    upsert?: PlayerUpsertWithoutUserInput
    disconnect?: PlayerWhereInput | boolean
    delete?: PlayerWhereInput | boolean
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutUserInput, PlayerUpdateWithoutUserInput>, PlayerUncheckedUpdateWithoutUserInput>
  }

  export type TournamentApplicationCreateNestedManyWithoutPlayersInput = {
    create?: XOR<TournamentApplicationCreateWithoutPlayersInput, TournamentApplicationUncheckedCreateWithoutPlayersInput> | TournamentApplicationCreateWithoutPlayersInput[] | TournamentApplicationUncheckedCreateWithoutPlayersInput[]
    connectOrCreate?: TournamentApplicationCreateOrConnectWithoutPlayersInput | TournamentApplicationCreateOrConnectWithoutPlayersInput[]
    connect?: TournamentApplicationWhereUniqueInput | TournamentApplicationWhereUniqueInput[]
  }

  export type MatchApplicationCreateNestedManyWithoutPlayersInput = {
    create?: XOR<MatchApplicationCreateWithoutPlayersInput, MatchApplicationUncheckedCreateWithoutPlayersInput> | MatchApplicationCreateWithoutPlayersInput[] | MatchApplicationUncheckedCreateWithoutPlayersInput[]
    connectOrCreate?: MatchApplicationCreateOrConnectWithoutPlayersInput | MatchApplicationCreateOrConnectWithoutPlayersInput[]
    connect?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
  }

  export type MatchTimelineCreateNestedManyWithoutPlayerInput = {
    create?: XOR<MatchTimelineCreateWithoutPlayerInput, MatchTimelineUncheckedCreateWithoutPlayerInput> | MatchTimelineCreateWithoutPlayerInput[] | MatchTimelineUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: MatchTimelineCreateOrConnectWithoutPlayerInput | MatchTimelineCreateOrConnectWithoutPlayerInput[]
    createMany?: MatchTimelineCreateManyPlayerInputEnvelope
    connect?: MatchTimelineWhereUniqueInput | MatchTimelineWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPlayerInput = {
    create?: XOR<UserCreateWithoutPlayerInput, UserUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayerInput
    connect?: UserWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutPlayersInput = {
    create?: XOR<TeamCreateWithoutPlayersInput, TeamUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPlayersInput
    connect?: TeamWhereUniqueInput
  }

  export type TournamentApplicationUncheckedCreateNestedManyWithoutPlayersInput = {
    create?: XOR<TournamentApplicationCreateWithoutPlayersInput, TournamentApplicationUncheckedCreateWithoutPlayersInput> | TournamentApplicationCreateWithoutPlayersInput[] | TournamentApplicationUncheckedCreateWithoutPlayersInput[]
    connectOrCreate?: TournamentApplicationCreateOrConnectWithoutPlayersInput | TournamentApplicationCreateOrConnectWithoutPlayersInput[]
    connect?: TournamentApplicationWhereUniqueInput | TournamentApplicationWhereUniqueInput[]
  }

  export type MatchApplicationUncheckedCreateNestedManyWithoutPlayersInput = {
    create?: XOR<MatchApplicationCreateWithoutPlayersInput, MatchApplicationUncheckedCreateWithoutPlayersInput> | MatchApplicationCreateWithoutPlayersInput[] | MatchApplicationUncheckedCreateWithoutPlayersInput[]
    connectOrCreate?: MatchApplicationCreateOrConnectWithoutPlayersInput | MatchApplicationCreateOrConnectWithoutPlayersInput[]
    connect?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
  }

  export type MatchTimelineUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<MatchTimelineCreateWithoutPlayerInput, MatchTimelineUncheckedCreateWithoutPlayerInput> | MatchTimelineCreateWithoutPlayerInput[] | MatchTimelineUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: MatchTimelineCreateOrConnectWithoutPlayerInput | MatchTimelineCreateOrConnectWithoutPlayerInput[]
    createMany?: MatchTimelineCreateManyPlayerInputEnvelope
    connect?: MatchTimelineWhereUniqueInput | MatchTimelineWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TournamentApplicationUpdateManyWithoutPlayersNestedInput = {
    create?: XOR<TournamentApplicationCreateWithoutPlayersInput, TournamentApplicationUncheckedCreateWithoutPlayersInput> | TournamentApplicationCreateWithoutPlayersInput[] | TournamentApplicationUncheckedCreateWithoutPlayersInput[]
    connectOrCreate?: TournamentApplicationCreateOrConnectWithoutPlayersInput | TournamentApplicationCreateOrConnectWithoutPlayersInput[]
    upsert?: TournamentApplicationUpsertWithWhereUniqueWithoutPlayersInput | TournamentApplicationUpsertWithWhereUniqueWithoutPlayersInput[]
    set?: TournamentApplicationWhereUniqueInput | TournamentApplicationWhereUniqueInput[]
    disconnect?: TournamentApplicationWhereUniqueInput | TournamentApplicationWhereUniqueInput[]
    delete?: TournamentApplicationWhereUniqueInput | TournamentApplicationWhereUniqueInput[]
    connect?: TournamentApplicationWhereUniqueInput | TournamentApplicationWhereUniqueInput[]
    update?: TournamentApplicationUpdateWithWhereUniqueWithoutPlayersInput | TournamentApplicationUpdateWithWhereUniqueWithoutPlayersInput[]
    updateMany?: TournamentApplicationUpdateManyWithWhereWithoutPlayersInput | TournamentApplicationUpdateManyWithWhereWithoutPlayersInput[]
    deleteMany?: TournamentApplicationScalarWhereInput | TournamentApplicationScalarWhereInput[]
  }

  export type MatchApplicationUpdateManyWithoutPlayersNestedInput = {
    create?: XOR<MatchApplicationCreateWithoutPlayersInput, MatchApplicationUncheckedCreateWithoutPlayersInput> | MatchApplicationCreateWithoutPlayersInput[] | MatchApplicationUncheckedCreateWithoutPlayersInput[]
    connectOrCreate?: MatchApplicationCreateOrConnectWithoutPlayersInput | MatchApplicationCreateOrConnectWithoutPlayersInput[]
    upsert?: MatchApplicationUpsertWithWhereUniqueWithoutPlayersInput | MatchApplicationUpsertWithWhereUniqueWithoutPlayersInput[]
    set?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    disconnect?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    delete?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    connect?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    update?: MatchApplicationUpdateWithWhereUniqueWithoutPlayersInput | MatchApplicationUpdateWithWhereUniqueWithoutPlayersInput[]
    updateMany?: MatchApplicationUpdateManyWithWhereWithoutPlayersInput | MatchApplicationUpdateManyWithWhereWithoutPlayersInput[]
    deleteMany?: MatchApplicationScalarWhereInput | MatchApplicationScalarWhereInput[]
  }

  export type MatchTimelineUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<MatchTimelineCreateWithoutPlayerInput, MatchTimelineUncheckedCreateWithoutPlayerInput> | MatchTimelineCreateWithoutPlayerInput[] | MatchTimelineUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: MatchTimelineCreateOrConnectWithoutPlayerInput | MatchTimelineCreateOrConnectWithoutPlayerInput[]
    upsert?: MatchTimelineUpsertWithWhereUniqueWithoutPlayerInput | MatchTimelineUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: MatchTimelineCreateManyPlayerInputEnvelope
    set?: MatchTimelineWhereUniqueInput | MatchTimelineWhereUniqueInput[]
    disconnect?: MatchTimelineWhereUniqueInput | MatchTimelineWhereUniqueInput[]
    delete?: MatchTimelineWhereUniqueInput | MatchTimelineWhereUniqueInput[]
    connect?: MatchTimelineWhereUniqueInput | MatchTimelineWhereUniqueInput[]
    update?: MatchTimelineUpdateWithWhereUniqueWithoutPlayerInput | MatchTimelineUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: MatchTimelineUpdateManyWithWhereWithoutPlayerInput | MatchTimelineUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: MatchTimelineScalarWhereInput | MatchTimelineScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutPlayerNestedInput = {
    create?: XOR<UserCreateWithoutPlayerInput, UserUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayerInput
    upsert?: UserUpsertWithoutPlayerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlayerInput, UserUpdateWithoutPlayerInput>, UserUncheckedUpdateWithoutPlayerInput>
  }

  export type TeamUpdateOneWithoutPlayersNestedInput = {
    create?: XOR<TeamCreateWithoutPlayersInput, TeamUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPlayersInput
    upsert?: TeamUpsertWithoutPlayersInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutPlayersInput, TeamUpdateWithoutPlayersInput>, TeamUncheckedUpdateWithoutPlayersInput>
  }

  export type TournamentApplicationUncheckedUpdateManyWithoutPlayersNestedInput = {
    create?: XOR<TournamentApplicationCreateWithoutPlayersInput, TournamentApplicationUncheckedCreateWithoutPlayersInput> | TournamentApplicationCreateWithoutPlayersInput[] | TournamentApplicationUncheckedCreateWithoutPlayersInput[]
    connectOrCreate?: TournamentApplicationCreateOrConnectWithoutPlayersInput | TournamentApplicationCreateOrConnectWithoutPlayersInput[]
    upsert?: TournamentApplicationUpsertWithWhereUniqueWithoutPlayersInput | TournamentApplicationUpsertWithWhereUniqueWithoutPlayersInput[]
    set?: TournamentApplicationWhereUniqueInput | TournamentApplicationWhereUniqueInput[]
    disconnect?: TournamentApplicationWhereUniqueInput | TournamentApplicationWhereUniqueInput[]
    delete?: TournamentApplicationWhereUniqueInput | TournamentApplicationWhereUniqueInput[]
    connect?: TournamentApplicationWhereUniqueInput | TournamentApplicationWhereUniqueInput[]
    update?: TournamentApplicationUpdateWithWhereUniqueWithoutPlayersInput | TournamentApplicationUpdateWithWhereUniqueWithoutPlayersInput[]
    updateMany?: TournamentApplicationUpdateManyWithWhereWithoutPlayersInput | TournamentApplicationUpdateManyWithWhereWithoutPlayersInput[]
    deleteMany?: TournamentApplicationScalarWhereInput | TournamentApplicationScalarWhereInput[]
  }

  export type MatchApplicationUncheckedUpdateManyWithoutPlayersNestedInput = {
    create?: XOR<MatchApplicationCreateWithoutPlayersInput, MatchApplicationUncheckedCreateWithoutPlayersInput> | MatchApplicationCreateWithoutPlayersInput[] | MatchApplicationUncheckedCreateWithoutPlayersInput[]
    connectOrCreate?: MatchApplicationCreateOrConnectWithoutPlayersInput | MatchApplicationCreateOrConnectWithoutPlayersInput[]
    upsert?: MatchApplicationUpsertWithWhereUniqueWithoutPlayersInput | MatchApplicationUpsertWithWhereUniqueWithoutPlayersInput[]
    set?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    disconnect?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    delete?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    connect?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    update?: MatchApplicationUpdateWithWhereUniqueWithoutPlayersInput | MatchApplicationUpdateWithWhereUniqueWithoutPlayersInput[]
    updateMany?: MatchApplicationUpdateManyWithWhereWithoutPlayersInput | MatchApplicationUpdateManyWithWhereWithoutPlayersInput[]
    deleteMany?: MatchApplicationScalarWhereInput | MatchApplicationScalarWhereInput[]
  }

  export type MatchTimelineUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<MatchTimelineCreateWithoutPlayerInput, MatchTimelineUncheckedCreateWithoutPlayerInput> | MatchTimelineCreateWithoutPlayerInput[] | MatchTimelineUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: MatchTimelineCreateOrConnectWithoutPlayerInput | MatchTimelineCreateOrConnectWithoutPlayerInput[]
    upsert?: MatchTimelineUpsertWithWhereUniqueWithoutPlayerInput | MatchTimelineUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: MatchTimelineCreateManyPlayerInputEnvelope
    set?: MatchTimelineWhereUniqueInput | MatchTimelineWhereUniqueInput[]
    disconnect?: MatchTimelineWhereUniqueInput | MatchTimelineWhereUniqueInput[]
    delete?: MatchTimelineWhereUniqueInput | MatchTimelineWhereUniqueInput[]
    connect?: MatchTimelineWhereUniqueInput | MatchTimelineWhereUniqueInput[]
    update?: MatchTimelineUpdateWithWhereUniqueWithoutPlayerInput | MatchTimelineUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: MatchTimelineUpdateManyWithWhereWithoutPlayerInput | MatchTimelineUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: MatchTimelineScalarWhereInput | MatchTimelineScalarWhereInput[]
  }

  export type TournamentApplicationCreateNestedManyWithoutTeamInput = {
    create?: XOR<TournamentApplicationCreateWithoutTeamInput, TournamentApplicationUncheckedCreateWithoutTeamInput> | TournamentApplicationCreateWithoutTeamInput[] | TournamentApplicationUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TournamentApplicationCreateOrConnectWithoutTeamInput | TournamentApplicationCreateOrConnectWithoutTeamInput[]
    createMany?: TournamentApplicationCreateManyTeamInputEnvelope
    connect?: TournamentApplicationWhereUniqueInput | TournamentApplicationWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutTeamsInput = {
    create?: XOR<MatchCreateWithoutTeamsInput, MatchUncheckedCreateWithoutTeamsInput> | MatchCreateWithoutTeamsInput[] | MatchUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTeamsInput | MatchCreateOrConnectWithoutTeamsInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchApplicationCreateNestedManyWithoutTeamInput = {
    create?: XOR<MatchApplicationCreateWithoutTeamInput, MatchApplicationUncheckedCreateWithoutTeamInput> | MatchApplicationCreateWithoutTeamInput[] | MatchApplicationUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: MatchApplicationCreateOrConnectWithoutTeamInput | MatchApplicationCreateOrConnectWithoutTeamInput[]
    createMany?: MatchApplicationCreateManyTeamInputEnvelope
    connect?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
  }

  export type MatchTimelineCreateNestedManyWithoutTeamInput = {
    create?: XOR<MatchTimelineCreateWithoutTeamInput, MatchTimelineUncheckedCreateWithoutTeamInput> | MatchTimelineCreateWithoutTeamInput[] | MatchTimelineUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: MatchTimelineCreateOrConnectWithoutTeamInput | MatchTimelineCreateOrConnectWithoutTeamInput[]
    createMany?: MatchTimelineCreateManyTeamInputEnvelope
    connect?: MatchTimelineWhereUniqueInput | MatchTimelineWhereUniqueInput[]
  }

  export type PlayerCreateNestedManyWithoutTeamInput = {
    create?: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput> | PlayerCreateWithoutTeamInput[] | PlayerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutTeamInput | PlayerCreateOrConnectWithoutTeamInput[]
    createMany?: PlayerCreateManyTeamInputEnvelope
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
  }

  export type TournamentCreateNestedManyWithoutTeamIdsInput = {
    create?: XOR<TournamentCreateWithoutTeamIdsInput, TournamentUncheckedCreateWithoutTeamIdsInput> | TournamentCreateWithoutTeamIdsInput[] | TournamentUncheckedCreateWithoutTeamIdsInput[]
    connectOrCreate?: TournamentCreateOrConnectWithoutTeamIdsInput | TournamentCreateOrConnectWithoutTeamIdsInput[]
    connect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutWinnerInput = {
    create?: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput> | MatchCreateWithoutWinnerInput[] | MatchUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerInput | MatchCreateOrConnectWithoutWinnerInput[]
    createMany?: MatchCreateManyWinnerInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type TournamentApplicationUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<TournamentApplicationCreateWithoutTeamInput, TournamentApplicationUncheckedCreateWithoutTeamInput> | TournamentApplicationCreateWithoutTeamInput[] | TournamentApplicationUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TournamentApplicationCreateOrConnectWithoutTeamInput | TournamentApplicationCreateOrConnectWithoutTeamInput[]
    createMany?: TournamentApplicationCreateManyTeamInputEnvelope
    connect?: TournamentApplicationWhereUniqueInput | TournamentApplicationWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutTeamsInput = {
    create?: XOR<MatchCreateWithoutTeamsInput, MatchUncheckedCreateWithoutTeamsInput> | MatchCreateWithoutTeamsInput[] | MatchUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTeamsInput | MatchCreateOrConnectWithoutTeamsInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchApplicationUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<MatchApplicationCreateWithoutTeamInput, MatchApplicationUncheckedCreateWithoutTeamInput> | MatchApplicationCreateWithoutTeamInput[] | MatchApplicationUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: MatchApplicationCreateOrConnectWithoutTeamInput | MatchApplicationCreateOrConnectWithoutTeamInput[]
    createMany?: MatchApplicationCreateManyTeamInputEnvelope
    connect?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
  }

  export type MatchTimelineUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<MatchTimelineCreateWithoutTeamInput, MatchTimelineUncheckedCreateWithoutTeamInput> | MatchTimelineCreateWithoutTeamInput[] | MatchTimelineUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: MatchTimelineCreateOrConnectWithoutTeamInput | MatchTimelineCreateOrConnectWithoutTeamInput[]
    createMany?: MatchTimelineCreateManyTeamInputEnvelope
    connect?: MatchTimelineWhereUniqueInput | MatchTimelineWhereUniqueInput[]
  }

  export type PlayerUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput> | PlayerCreateWithoutTeamInput[] | PlayerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutTeamInput | PlayerCreateOrConnectWithoutTeamInput[]
    createMany?: PlayerCreateManyTeamInputEnvelope
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
  }

  export type TournamentUncheckedCreateNestedManyWithoutTeamIdsInput = {
    create?: XOR<TournamentCreateWithoutTeamIdsInput, TournamentUncheckedCreateWithoutTeamIdsInput> | TournamentCreateWithoutTeamIdsInput[] | TournamentUncheckedCreateWithoutTeamIdsInput[]
    connectOrCreate?: TournamentCreateOrConnectWithoutTeamIdsInput | TournamentCreateOrConnectWithoutTeamIdsInput[]
    connect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutWinnerInput = {
    create?: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput> | MatchCreateWithoutWinnerInput[] | MatchUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerInput | MatchCreateOrConnectWithoutWinnerInput[]
    createMany?: MatchCreateManyWinnerInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type TournamentApplicationUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TournamentApplicationCreateWithoutTeamInput, TournamentApplicationUncheckedCreateWithoutTeamInput> | TournamentApplicationCreateWithoutTeamInput[] | TournamentApplicationUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TournamentApplicationCreateOrConnectWithoutTeamInput | TournamentApplicationCreateOrConnectWithoutTeamInput[]
    upsert?: TournamentApplicationUpsertWithWhereUniqueWithoutTeamInput | TournamentApplicationUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TournamentApplicationCreateManyTeamInputEnvelope
    set?: TournamentApplicationWhereUniqueInput | TournamentApplicationWhereUniqueInput[]
    disconnect?: TournamentApplicationWhereUniqueInput | TournamentApplicationWhereUniqueInput[]
    delete?: TournamentApplicationWhereUniqueInput | TournamentApplicationWhereUniqueInput[]
    connect?: TournamentApplicationWhereUniqueInput | TournamentApplicationWhereUniqueInput[]
    update?: TournamentApplicationUpdateWithWhereUniqueWithoutTeamInput | TournamentApplicationUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TournamentApplicationUpdateManyWithWhereWithoutTeamInput | TournamentApplicationUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TournamentApplicationScalarWhereInput | TournamentApplicationScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<MatchCreateWithoutTeamsInput, MatchUncheckedCreateWithoutTeamsInput> | MatchCreateWithoutTeamsInput[] | MatchUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTeamsInput | MatchCreateOrConnectWithoutTeamsInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutTeamsInput | MatchUpsertWithWhereUniqueWithoutTeamsInput[]
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutTeamsInput | MatchUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutTeamsInput | MatchUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchApplicationUpdateManyWithoutTeamNestedInput = {
    create?: XOR<MatchApplicationCreateWithoutTeamInput, MatchApplicationUncheckedCreateWithoutTeamInput> | MatchApplicationCreateWithoutTeamInput[] | MatchApplicationUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: MatchApplicationCreateOrConnectWithoutTeamInput | MatchApplicationCreateOrConnectWithoutTeamInput[]
    upsert?: MatchApplicationUpsertWithWhereUniqueWithoutTeamInput | MatchApplicationUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: MatchApplicationCreateManyTeamInputEnvelope
    set?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    disconnect?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    delete?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    connect?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    update?: MatchApplicationUpdateWithWhereUniqueWithoutTeamInput | MatchApplicationUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: MatchApplicationUpdateManyWithWhereWithoutTeamInput | MatchApplicationUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: MatchApplicationScalarWhereInput | MatchApplicationScalarWhereInput[]
  }

  export type MatchTimelineUpdateManyWithoutTeamNestedInput = {
    create?: XOR<MatchTimelineCreateWithoutTeamInput, MatchTimelineUncheckedCreateWithoutTeamInput> | MatchTimelineCreateWithoutTeamInput[] | MatchTimelineUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: MatchTimelineCreateOrConnectWithoutTeamInput | MatchTimelineCreateOrConnectWithoutTeamInput[]
    upsert?: MatchTimelineUpsertWithWhereUniqueWithoutTeamInput | MatchTimelineUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: MatchTimelineCreateManyTeamInputEnvelope
    set?: MatchTimelineWhereUniqueInput | MatchTimelineWhereUniqueInput[]
    disconnect?: MatchTimelineWhereUniqueInput | MatchTimelineWhereUniqueInput[]
    delete?: MatchTimelineWhereUniqueInput | MatchTimelineWhereUniqueInput[]
    connect?: MatchTimelineWhereUniqueInput | MatchTimelineWhereUniqueInput[]
    update?: MatchTimelineUpdateWithWhereUniqueWithoutTeamInput | MatchTimelineUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: MatchTimelineUpdateManyWithWhereWithoutTeamInput | MatchTimelineUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: MatchTimelineScalarWhereInput | MatchTimelineScalarWhereInput[]
  }

  export type PlayerUpdateManyWithoutTeamNestedInput = {
    create?: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput> | PlayerCreateWithoutTeamInput[] | PlayerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutTeamInput | PlayerCreateOrConnectWithoutTeamInput[]
    upsert?: PlayerUpsertWithWhereUniqueWithoutTeamInput | PlayerUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: PlayerCreateManyTeamInputEnvelope
    set?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    disconnect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    delete?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    update?: PlayerUpdateWithWhereUniqueWithoutTeamInput | PlayerUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: PlayerUpdateManyWithWhereWithoutTeamInput | PlayerUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
  }

  export type TournamentUpdateManyWithoutTeamIdsNestedInput = {
    create?: XOR<TournamentCreateWithoutTeamIdsInput, TournamentUncheckedCreateWithoutTeamIdsInput> | TournamentCreateWithoutTeamIdsInput[] | TournamentUncheckedCreateWithoutTeamIdsInput[]
    connectOrCreate?: TournamentCreateOrConnectWithoutTeamIdsInput | TournamentCreateOrConnectWithoutTeamIdsInput[]
    upsert?: TournamentUpsertWithWhereUniqueWithoutTeamIdsInput | TournamentUpsertWithWhereUniqueWithoutTeamIdsInput[]
    set?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    disconnect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    delete?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    connect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    update?: TournamentUpdateWithWhereUniqueWithoutTeamIdsInput | TournamentUpdateWithWhereUniqueWithoutTeamIdsInput[]
    updateMany?: TournamentUpdateManyWithWhereWithoutTeamIdsInput | TournamentUpdateManyWithWhereWithoutTeamIdsInput[]
    deleteMany?: TournamentScalarWhereInput | TournamentScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput> | MatchCreateWithoutWinnerInput[] | MatchUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerInput | MatchCreateOrConnectWithoutWinnerInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutWinnerInput | MatchUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: MatchCreateManyWinnerInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutWinnerInput | MatchUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutWinnerInput | MatchUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type TournamentApplicationUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TournamentApplicationCreateWithoutTeamInput, TournamentApplicationUncheckedCreateWithoutTeamInput> | TournamentApplicationCreateWithoutTeamInput[] | TournamentApplicationUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TournamentApplicationCreateOrConnectWithoutTeamInput | TournamentApplicationCreateOrConnectWithoutTeamInput[]
    upsert?: TournamentApplicationUpsertWithWhereUniqueWithoutTeamInput | TournamentApplicationUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TournamentApplicationCreateManyTeamInputEnvelope
    set?: TournamentApplicationWhereUniqueInput | TournamentApplicationWhereUniqueInput[]
    disconnect?: TournamentApplicationWhereUniqueInput | TournamentApplicationWhereUniqueInput[]
    delete?: TournamentApplicationWhereUniqueInput | TournamentApplicationWhereUniqueInput[]
    connect?: TournamentApplicationWhereUniqueInput | TournamentApplicationWhereUniqueInput[]
    update?: TournamentApplicationUpdateWithWhereUniqueWithoutTeamInput | TournamentApplicationUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TournamentApplicationUpdateManyWithWhereWithoutTeamInput | TournamentApplicationUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TournamentApplicationScalarWhereInput | TournamentApplicationScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<MatchCreateWithoutTeamsInput, MatchUncheckedCreateWithoutTeamsInput> | MatchCreateWithoutTeamsInput[] | MatchUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTeamsInput | MatchCreateOrConnectWithoutTeamsInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutTeamsInput | MatchUpsertWithWhereUniqueWithoutTeamsInput[]
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutTeamsInput | MatchUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutTeamsInput | MatchUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchApplicationUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<MatchApplicationCreateWithoutTeamInput, MatchApplicationUncheckedCreateWithoutTeamInput> | MatchApplicationCreateWithoutTeamInput[] | MatchApplicationUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: MatchApplicationCreateOrConnectWithoutTeamInput | MatchApplicationCreateOrConnectWithoutTeamInput[]
    upsert?: MatchApplicationUpsertWithWhereUniqueWithoutTeamInput | MatchApplicationUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: MatchApplicationCreateManyTeamInputEnvelope
    set?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    disconnect?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    delete?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    connect?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    update?: MatchApplicationUpdateWithWhereUniqueWithoutTeamInput | MatchApplicationUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: MatchApplicationUpdateManyWithWhereWithoutTeamInput | MatchApplicationUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: MatchApplicationScalarWhereInput | MatchApplicationScalarWhereInput[]
  }

  export type MatchTimelineUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<MatchTimelineCreateWithoutTeamInput, MatchTimelineUncheckedCreateWithoutTeamInput> | MatchTimelineCreateWithoutTeamInput[] | MatchTimelineUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: MatchTimelineCreateOrConnectWithoutTeamInput | MatchTimelineCreateOrConnectWithoutTeamInput[]
    upsert?: MatchTimelineUpsertWithWhereUniqueWithoutTeamInput | MatchTimelineUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: MatchTimelineCreateManyTeamInputEnvelope
    set?: MatchTimelineWhereUniqueInput | MatchTimelineWhereUniqueInput[]
    disconnect?: MatchTimelineWhereUniqueInput | MatchTimelineWhereUniqueInput[]
    delete?: MatchTimelineWhereUniqueInput | MatchTimelineWhereUniqueInput[]
    connect?: MatchTimelineWhereUniqueInput | MatchTimelineWhereUniqueInput[]
    update?: MatchTimelineUpdateWithWhereUniqueWithoutTeamInput | MatchTimelineUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: MatchTimelineUpdateManyWithWhereWithoutTeamInput | MatchTimelineUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: MatchTimelineScalarWhereInput | MatchTimelineScalarWhereInput[]
  }

  export type PlayerUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput> | PlayerCreateWithoutTeamInput[] | PlayerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutTeamInput | PlayerCreateOrConnectWithoutTeamInput[]
    upsert?: PlayerUpsertWithWhereUniqueWithoutTeamInput | PlayerUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: PlayerCreateManyTeamInputEnvelope
    set?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    disconnect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    delete?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    update?: PlayerUpdateWithWhereUniqueWithoutTeamInput | PlayerUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: PlayerUpdateManyWithWhereWithoutTeamInput | PlayerUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
  }

  export type TournamentUncheckedUpdateManyWithoutTeamIdsNestedInput = {
    create?: XOR<TournamentCreateWithoutTeamIdsInput, TournamentUncheckedCreateWithoutTeamIdsInput> | TournamentCreateWithoutTeamIdsInput[] | TournamentUncheckedCreateWithoutTeamIdsInput[]
    connectOrCreate?: TournamentCreateOrConnectWithoutTeamIdsInput | TournamentCreateOrConnectWithoutTeamIdsInput[]
    upsert?: TournamentUpsertWithWhereUniqueWithoutTeamIdsInput | TournamentUpsertWithWhereUniqueWithoutTeamIdsInput[]
    set?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    disconnect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    delete?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    connect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[]
    update?: TournamentUpdateWithWhereUniqueWithoutTeamIdsInput | TournamentUpdateWithWhereUniqueWithoutTeamIdsInput[]
    updateMany?: TournamentUpdateManyWithWhereWithoutTeamIdsInput | TournamentUpdateManyWithWhereWithoutTeamIdsInput[]
    deleteMany?: TournamentScalarWhereInput | TournamentScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput> | MatchCreateWithoutWinnerInput[] | MatchUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerInput | MatchCreateOrConnectWithoutWinnerInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutWinnerInput | MatchUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: MatchCreateManyWinnerInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutWinnerInput | MatchUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutWinnerInput | MatchUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type TournamentApplicationCreateNestedManyWithoutTournamentInput = {
    create?: XOR<TournamentApplicationCreateWithoutTournamentInput, TournamentApplicationUncheckedCreateWithoutTournamentInput> | TournamentApplicationCreateWithoutTournamentInput[] | TournamentApplicationUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TournamentApplicationCreateOrConnectWithoutTournamentInput | TournamentApplicationCreateOrConnectWithoutTournamentInput[]
    createMany?: TournamentApplicationCreateManyTournamentInputEnvelope
    connect?: TournamentApplicationWhereUniqueInput | TournamentApplicationWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutTournamentInput = {
    create?: XOR<MatchCreateWithoutTournamentInput, MatchUncheckedCreateWithoutTournamentInput> | MatchCreateWithoutTournamentInput[] | MatchUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTournamentInput | MatchCreateOrConnectWithoutTournamentInput[]
    createMany?: MatchCreateManyTournamentInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type TeamCreateNestedManyWithoutTournamentIdsInput = {
    create?: XOR<TeamCreateWithoutTournamentIdsInput, TeamUncheckedCreateWithoutTournamentIdsInput> | TeamCreateWithoutTournamentIdsInput[] | TeamUncheckedCreateWithoutTournamentIdsInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutTournamentIdsInput | TeamCreateOrConnectWithoutTournamentIdsInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type TournamentApplicationUncheckedCreateNestedManyWithoutTournamentInput = {
    create?: XOR<TournamentApplicationCreateWithoutTournamentInput, TournamentApplicationUncheckedCreateWithoutTournamentInput> | TournamentApplicationCreateWithoutTournamentInput[] | TournamentApplicationUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TournamentApplicationCreateOrConnectWithoutTournamentInput | TournamentApplicationCreateOrConnectWithoutTournamentInput[]
    createMany?: TournamentApplicationCreateManyTournamentInputEnvelope
    connect?: TournamentApplicationWhereUniqueInput | TournamentApplicationWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutTournamentInput = {
    create?: XOR<MatchCreateWithoutTournamentInput, MatchUncheckedCreateWithoutTournamentInput> | MatchCreateWithoutTournamentInput[] | MatchUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTournamentInput | MatchCreateOrConnectWithoutTournamentInput[]
    createMany?: MatchCreateManyTournamentInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type TeamUncheckedCreateNestedManyWithoutTournamentIdsInput = {
    create?: XOR<TeamCreateWithoutTournamentIdsInput, TeamUncheckedCreateWithoutTournamentIdsInput> | TeamCreateWithoutTournamentIdsInput[] | TeamUncheckedCreateWithoutTournamentIdsInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutTournamentIdsInput | TeamCreateOrConnectWithoutTournamentIdsInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type EnumTournamentStatusFieldUpdateOperationsInput = {
    set?: $Enums.TournamentStatus
  }

  export type TournamentApplicationUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<TournamentApplicationCreateWithoutTournamentInput, TournamentApplicationUncheckedCreateWithoutTournamentInput> | TournamentApplicationCreateWithoutTournamentInput[] | TournamentApplicationUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TournamentApplicationCreateOrConnectWithoutTournamentInput | TournamentApplicationCreateOrConnectWithoutTournamentInput[]
    upsert?: TournamentApplicationUpsertWithWhereUniqueWithoutTournamentInput | TournamentApplicationUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: TournamentApplicationCreateManyTournamentInputEnvelope
    set?: TournamentApplicationWhereUniqueInput | TournamentApplicationWhereUniqueInput[]
    disconnect?: TournamentApplicationWhereUniqueInput | TournamentApplicationWhereUniqueInput[]
    delete?: TournamentApplicationWhereUniqueInput | TournamentApplicationWhereUniqueInput[]
    connect?: TournamentApplicationWhereUniqueInput | TournamentApplicationWhereUniqueInput[]
    update?: TournamentApplicationUpdateWithWhereUniqueWithoutTournamentInput | TournamentApplicationUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: TournamentApplicationUpdateManyWithWhereWithoutTournamentInput | TournamentApplicationUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: TournamentApplicationScalarWhereInput | TournamentApplicationScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<MatchCreateWithoutTournamentInput, MatchUncheckedCreateWithoutTournamentInput> | MatchCreateWithoutTournamentInput[] | MatchUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTournamentInput | MatchCreateOrConnectWithoutTournamentInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutTournamentInput | MatchUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: MatchCreateManyTournamentInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutTournamentInput | MatchUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutTournamentInput | MatchUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type TeamUpdateManyWithoutTournamentIdsNestedInput = {
    create?: XOR<TeamCreateWithoutTournamentIdsInput, TeamUncheckedCreateWithoutTournamentIdsInput> | TeamCreateWithoutTournamentIdsInput[] | TeamUncheckedCreateWithoutTournamentIdsInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutTournamentIdsInput | TeamCreateOrConnectWithoutTournamentIdsInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutTournamentIdsInput | TeamUpsertWithWhereUniqueWithoutTournamentIdsInput[]
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutTournamentIdsInput | TeamUpdateWithWhereUniqueWithoutTournamentIdsInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutTournamentIdsInput | TeamUpdateManyWithWhereWithoutTournamentIdsInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type TournamentApplicationUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<TournamentApplicationCreateWithoutTournamentInput, TournamentApplicationUncheckedCreateWithoutTournamentInput> | TournamentApplicationCreateWithoutTournamentInput[] | TournamentApplicationUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TournamentApplicationCreateOrConnectWithoutTournamentInput | TournamentApplicationCreateOrConnectWithoutTournamentInput[]
    upsert?: TournamentApplicationUpsertWithWhereUniqueWithoutTournamentInput | TournamentApplicationUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: TournamentApplicationCreateManyTournamentInputEnvelope
    set?: TournamentApplicationWhereUniqueInput | TournamentApplicationWhereUniqueInput[]
    disconnect?: TournamentApplicationWhereUniqueInput | TournamentApplicationWhereUniqueInput[]
    delete?: TournamentApplicationWhereUniqueInput | TournamentApplicationWhereUniqueInput[]
    connect?: TournamentApplicationWhereUniqueInput | TournamentApplicationWhereUniqueInput[]
    update?: TournamentApplicationUpdateWithWhereUniqueWithoutTournamentInput | TournamentApplicationUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: TournamentApplicationUpdateManyWithWhereWithoutTournamentInput | TournamentApplicationUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: TournamentApplicationScalarWhereInput | TournamentApplicationScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<MatchCreateWithoutTournamentInput, MatchUncheckedCreateWithoutTournamentInput> | MatchCreateWithoutTournamentInput[] | MatchUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutTournamentInput | MatchCreateOrConnectWithoutTournamentInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutTournamentInput | MatchUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: MatchCreateManyTournamentInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutTournamentInput | MatchUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutTournamentInput | MatchUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type TeamUncheckedUpdateManyWithoutTournamentIdsNestedInput = {
    create?: XOR<TeamCreateWithoutTournamentIdsInput, TeamUncheckedCreateWithoutTournamentIdsInput> | TeamCreateWithoutTournamentIdsInput[] | TeamUncheckedCreateWithoutTournamentIdsInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutTournamentIdsInput | TeamCreateOrConnectWithoutTournamentIdsInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutTournamentIdsInput | TeamUpsertWithWhereUniqueWithoutTournamentIdsInput[]
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutTournamentIdsInput | TeamUpdateWithWhereUniqueWithoutTournamentIdsInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutTournamentIdsInput | TeamUpdateManyWithWhereWithoutTournamentIdsInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type TeamCreateNestedOneWithoutTournamentApplicationsInput = {
    create?: XOR<TeamCreateWithoutTournamentApplicationsInput, TeamUncheckedCreateWithoutTournamentApplicationsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutTournamentApplicationsInput
    connect?: TeamWhereUniqueInput
  }

  export type TournamentCreateNestedOneWithoutTournamentApplicationsInput = {
    create?: XOR<TournamentCreateWithoutTournamentApplicationsInput, TournamentUncheckedCreateWithoutTournamentApplicationsInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutTournamentApplicationsInput
    connect?: TournamentWhereUniqueInput
  }

  export type PlayerCreateNestedManyWithoutTournamentApplicationsInput = {
    create?: XOR<PlayerCreateWithoutTournamentApplicationsInput, PlayerUncheckedCreateWithoutTournamentApplicationsInput> | PlayerCreateWithoutTournamentApplicationsInput[] | PlayerUncheckedCreateWithoutTournamentApplicationsInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutTournamentApplicationsInput | PlayerCreateOrConnectWithoutTournamentApplicationsInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
  }

  export type PlayerUncheckedCreateNestedManyWithoutTournamentApplicationsInput = {
    create?: XOR<PlayerCreateWithoutTournamentApplicationsInput, PlayerUncheckedCreateWithoutTournamentApplicationsInput> | PlayerCreateWithoutTournamentApplicationsInput[] | PlayerUncheckedCreateWithoutTournamentApplicationsInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutTournamentApplicationsInput | PlayerCreateOrConnectWithoutTournamentApplicationsInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TeamUpdateOneRequiredWithoutTournamentApplicationsNestedInput = {
    create?: XOR<TeamCreateWithoutTournamentApplicationsInput, TeamUncheckedCreateWithoutTournamentApplicationsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutTournamentApplicationsInput
    upsert?: TeamUpsertWithoutTournamentApplicationsInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutTournamentApplicationsInput, TeamUpdateWithoutTournamentApplicationsInput>, TeamUncheckedUpdateWithoutTournamentApplicationsInput>
  }

  export type TournamentUpdateOneRequiredWithoutTournamentApplicationsNestedInput = {
    create?: XOR<TournamentCreateWithoutTournamentApplicationsInput, TournamentUncheckedCreateWithoutTournamentApplicationsInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutTournamentApplicationsInput
    upsert?: TournamentUpsertWithoutTournamentApplicationsInput
    connect?: TournamentWhereUniqueInput
    update?: XOR<XOR<TournamentUpdateToOneWithWhereWithoutTournamentApplicationsInput, TournamentUpdateWithoutTournamentApplicationsInput>, TournamentUncheckedUpdateWithoutTournamentApplicationsInput>
  }

  export type PlayerUpdateManyWithoutTournamentApplicationsNestedInput = {
    create?: XOR<PlayerCreateWithoutTournamentApplicationsInput, PlayerUncheckedCreateWithoutTournamentApplicationsInput> | PlayerCreateWithoutTournamentApplicationsInput[] | PlayerUncheckedCreateWithoutTournamentApplicationsInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutTournamentApplicationsInput | PlayerCreateOrConnectWithoutTournamentApplicationsInput[]
    upsert?: PlayerUpsertWithWhereUniqueWithoutTournamentApplicationsInput | PlayerUpsertWithWhereUniqueWithoutTournamentApplicationsInput[]
    set?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    disconnect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    delete?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    update?: PlayerUpdateWithWhereUniqueWithoutTournamentApplicationsInput | PlayerUpdateWithWhereUniqueWithoutTournamentApplicationsInput[]
    updateMany?: PlayerUpdateManyWithWhereWithoutTournamentApplicationsInput | PlayerUpdateManyWithWhereWithoutTournamentApplicationsInput[]
    deleteMany?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
  }

  export type PlayerUncheckedUpdateManyWithoutTournamentApplicationsNestedInput = {
    create?: XOR<PlayerCreateWithoutTournamentApplicationsInput, PlayerUncheckedCreateWithoutTournamentApplicationsInput> | PlayerCreateWithoutTournamentApplicationsInput[] | PlayerUncheckedCreateWithoutTournamentApplicationsInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutTournamentApplicationsInput | PlayerCreateOrConnectWithoutTournamentApplicationsInput[]
    upsert?: PlayerUpsertWithWhereUniqueWithoutTournamentApplicationsInput | PlayerUpsertWithWhereUniqueWithoutTournamentApplicationsInput[]
    set?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    disconnect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    delete?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    update?: PlayerUpdateWithWhereUniqueWithoutTournamentApplicationsInput | PlayerUpdateWithWhereUniqueWithoutTournamentApplicationsInput[]
    updateMany?: PlayerUpdateManyWithWhereWithoutTournamentApplicationsInput | PlayerUpdateManyWithWhereWithoutTournamentApplicationsInput[]
    deleteMany?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
  }

  export type TeamCreateNestedManyWithoutMatchInput = {
    create?: XOR<TeamCreateWithoutMatchInput, TeamUncheckedCreateWithoutMatchInput> | TeamCreateWithoutMatchInput[] | TeamUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutMatchInput | TeamCreateOrConnectWithoutMatchInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type TournamentCreateNestedOneWithoutMatchInput = {
    create?: XOR<TournamentCreateWithoutMatchInput, TournamentUncheckedCreateWithoutMatchInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutMatchInput
    connect?: TournamentWhereUniqueInput
  }

  export type MatchApplicationCreateNestedManyWithoutMatchInput = {
    create?: XOR<MatchApplicationCreateWithoutMatchInput, MatchApplicationUncheckedCreateWithoutMatchInput> | MatchApplicationCreateWithoutMatchInput[] | MatchApplicationUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchApplicationCreateOrConnectWithoutMatchInput | MatchApplicationCreateOrConnectWithoutMatchInput[]
    createMany?: MatchApplicationCreateManyMatchInputEnvelope
    connect?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
  }

  export type MatchTimelineCreateNestedManyWithoutMatchInput = {
    create?: XOR<MatchTimelineCreateWithoutMatchInput, MatchTimelineUncheckedCreateWithoutMatchInput> | MatchTimelineCreateWithoutMatchInput[] | MatchTimelineUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchTimelineCreateOrConnectWithoutMatchInput | MatchTimelineCreateOrConnectWithoutMatchInput[]
    createMany?: MatchTimelineCreateManyMatchInputEnvelope
    connect?: MatchTimelineWhereUniqueInput | MatchTimelineWhereUniqueInput[]
  }

  export type TeamCreateNestedOneWithoutWonMatchesIdsInput = {
    create?: XOR<TeamCreateWithoutWonMatchesIdsInput, TeamUncheckedCreateWithoutWonMatchesIdsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutWonMatchesIdsInput
    connect?: TeamWhereUniqueInput
  }

  export type TeamUncheckedCreateNestedManyWithoutMatchInput = {
    create?: XOR<TeamCreateWithoutMatchInput, TeamUncheckedCreateWithoutMatchInput> | TeamCreateWithoutMatchInput[] | TeamUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutMatchInput | TeamCreateOrConnectWithoutMatchInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type MatchApplicationUncheckedCreateNestedManyWithoutMatchInput = {
    create?: XOR<MatchApplicationCreateWithoutMatchInput, MatchApplicationUncheckedCreateWithoutMatchInput> | MatchApplicationCreateWithoutMatchInput[] | MatchApplicationUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchApplicationCreateOrConnectWithoutMatchInput | MatchApplicationCreateOrConnectWithoutMatchInput[]
    createMany?: MatchApplicationCreateManyMatchInputEnvelope
    connect?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
  }

  export type MatchTimelineUncheckedCreateNestedManyWithoutMatchInput = {
    create?: XOR<MatchTimelineCreateWithoutMatchInput, MatchTimelineUncheckedCreateWithoutMatchInput> | MatchTimelineCreateWithoutMatchInput[] | MatchTimelineUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchTimelineCreateOrConnectWithoutMatchInput | MatchTimelineCreateOrConnectWithoutMatchInput[]
    createMany?: MatchTimelineCreateManyMatchInputEnvelope
    connect?: MatchTimelineWhereUniqueInput | MatchTimelineWhereUniqueInput[]
  }

  export type EnumMatchStatusFieldUpdateOperationsInput = {
    set?: $Enums.MatchStatus
  }

  export type TeamUpdateManyWithoutMatchNestedInput = {
    create?: XOR<TeamCreateWithoutMatchInput, TeamUncheckedCreateWithoutMatchInput> | TeamCreateWithoutMatchInput[] | TeamUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutMatchInput | TeamCreateOrConnectWithoutMatchInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutMatchInput | TeamUpsertWithWhereUniqueWithoutMatchInput[]
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutMatchInput | TeamUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutMatchInput | TeamUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type TournamentUpdateOneRequiredWithoutMatchNestedInput = {
    create?: XOR<TournamentCreateWithoutMatchInput, TournamentUncheckedCreateWithoutMatchInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutMatchInput
    upsert?: TournamentUpsertWithoutMatchInput
    connect?: TournamentWhereUniqueInput
    update?: XOR<XOR<TournamentUpdateToOneWithWhereWithoutMatchInput, TournamentUpdateWithoutMatchInput>, TournamentUncheckedUpdateWithoutMatchInput>
  }

  export type MatchApplicationUpdateManyWithoutMatchNestedInput = {
    create?: XOR<MatchApplicationCreateWithoutMatchInput, MatchApplicationUncheckedCreateWithoutMatchInput> | MatchApplicationCreateWithoutMatchInput[] | MatchApplicationUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchApplicationCreateOrConnectWithoutMatchInput | MatchApplicationCreateOrConnectWithoutMatchInput[]
    upsert?: MatchApplicationUpsertWithWhereUniqueWithoutMatchInput | MatchApplicationUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: MatchApplicationCreateManyMatchInputEnvelope
    set?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    disconnect?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    delete?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    connect?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    update?: MatchApplicationUpdateWithWhereUniqueWithoutMatchInput | MatchApplicationUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: MatchApplicationUpdateManyWithWhereWithoutMatchInput | MatchApplicationUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: MatchApplicationScalarWhereInput | MatchApplicationScalarWhereInput[]
  }

  export type MatchTimelineUpdateManyWithoutMatchNestedInput = {
    create?: XOR<MatchTimelineCreateWithoutMatchInput, MatchTimelineUncheckedCreateWithoutMatchInput> | MatchTimelineCreateWithoutMatchInput[] | MatchTimelineUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchTimelineCreateOrConnectWithoutMatchInput | MatchTimelineCreateOrConnectWithoutMatchInput[]
    upsert?: MatchTimelineUpsertWithWhereUniqueWithoutMatchInput | MatchTimelineUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: MatchTimelineCreateManyMatchInputEnvelope
    set?: MatchTimelineWhereUniqueInput | MatchTimelineWhereUniqueInput[]
    disconnect?: MatchTimelineWhereUniqueInput | MatchTimelineWhereUniqueInput[]
    delete?: MatchTimelineWhereUniqueInput | MatchTimelineWhereUniqueInput[]
    connect?: MatchTimelineWhereUniqueInput | MatchTimelineWhereUniqueInput[]
    update?: MatchTimelineUpdateWithWhereUniqueWithoutMatchInput | MatchTimelineUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: MatchTimelineUpdateManyWithWhereWithoutMatchInput | MatchTimelineUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: MatchTimelineScalarWhereInput | MatchTimelineScalarWhereInput[]
  }

  export type TeamUpdateOneWithoutWonMatchesIdsNestedInput = {
    create?: XOR<TeamCreateWithoutWonMatchesIdsInput, TeamUncheckedCreateWithoutWonMatchesIdsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutWonMatchesIdsInput
    upsert?: TeamUpsertWithoutWonMatchesIdsInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutWonMatchesIdsInput, TeamUpdateWithoutWonMatchesIdsInput>, TeamUncheckedUpdateWithoutWonMatchesIdsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TeamUncheckedUpdateManyWithoutMatchNestedInput = {
    create?: XOR<TeamCreateWithoutMatchInput, TeamUncheckedCreateWithoutMatchInput> | TeamCreateWithoutMatchInput[] | TeamUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutMatchInput | TeamCreateOrConnectWithoutMatchInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutMatchInput | TeamUpsertWithWhereUniqueWithoutMatchInput[]
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutMatchInput | TeamUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutMatchInput | TeamUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type MatchApplicationUncheckedUpdateManyWithoutMatchNestedInput = {
    create?: XOR<MatchApplicationCreateWithoutMatchInput, MatchApplicationUncheckedCreateWithoutMatchInput> | MatchApplicationCreateWithoutMatchInput[] | MatchApplicationUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchApplicationCreateOrConnectWithoutMatchInput | MatchApplicationCreateOrConnectWithoutMatchInput[]
    upsert?: MatchApplicationUpsertWithWhereUniqueWithoutMatchInput | MatchApplicationUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: MatchApplicationCreateManyMatchInputEnvelope
    set?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    disconnect?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    delete?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    connect?: MatchApplicationWhereUniqueInput | MatchApplicationWhereUniqueInput[]
    update?: MatchApplicationUpdateWithWhereUniqueWithoutMatchInput | MatchApplicationUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: MatchApplicationUpdateManyWithWhereWithoutMatchInput | MatchApplicationUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: MatchApplicationScalarWhereInput | MatchApplicationScalarWhereInput[]
  }

  export type MatchTimelineUncheckedUpdateManyWithoutMatchNestedInput = {
    create?: XOR<MatchTimelineCreateWithoutMatchInput, MatchTimelineUncheckedCreateWithoutMatchInput> | MatchTimelineCreateWithoutMatchInput[] | MatchTimelineUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchTimelineCreateOrConnectWithoutMatchInput | MatchTimelineCreateOrConnectWithoutMatchInput[]
    upsert?: MatchTimelineUpsertWithWhereUniqueWithoutMatchInput | MatchTimelineUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: MatchTimelineCreateManyMatchInputEnvelope
    set?: MatchTimelineWhereUniqueInput | MatchTimelineWhereUniqueInput[]
    disconnect?: MatchTimelineWhereUniqueInput | MatchTimelineWhereUniqueInput[]
    delete?: MatchTimelineWhereUniqueInput | MatchTimelineWhereUniqueInput[]
    connect?: MatchTimelineWhereUniqueInput | MatchTimelineWhereUniqueInput[]
    update?: MatchTimelineUpdateWithWhereUniqueWithoutMatchInput | MatchTimelineUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: MatchTimelineUpdateManyWithWhereWithoutMatchInput | MatchTimelineUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: MatchTimelineScalarWhereInput | MatchTimelineScalarWhereInput[]
  }

  export type TeamCreateNestedOneWithoutMatchApplicationsInput = {
    create?: XOR<TeamCreateWithoutMatchApplicationsInput, TeamUncheckedCreateWithoutMatchApplicationsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMatchApplicationsInput
    connect?: TeamWhereUniqueInput
  }

  export type MatchCreateNestedOneWithoutMatchApplicationsInput = {
    create?: XOR<MatchCreateWithoutMatchApplicationsInput, MatchUncheckedCreateWithoutMatchApplicationsInput>
    connectOrCreate?: MatchCreateOrConnectWithoutMatchApplicationsInput
    connect?: MatchWhereUniqueInput
  }

  export type PlayerCreateNestedManyWithoutMatchApplicationsInput = {
    create?: XOR<PlayerCreateWithoutMatchApplicationsInput, PlayerUncheckedCreateWithoutMatchApplicationsInput> | PlayerCreateWithoutMatchApplicationsInput[] | PlayerUncheckedCreateWithoutMatchApplicationsInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutMatchApplicationsInput | PlayerCreateOrConnectWithoutMatchApplicationsInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
  }

  export type PlayerUncheckedCreateNestedManyWithoutMatchApplicationsInput = {
    create?: XOR<PlayerCreateWithoutMatchApplicationsInput, PlayerUncheckedCreateWithoutMatchApplicationsInput> | PlayerCreateWithoutMatchApplicationsInput[] | PlayerUncheckedCreateWithoutMatchApplicationsInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutMatchApplicationsInput | PlayerCreateOrConnectWithoutMatchApplicationsInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
  }

  export type TeamUpdateOneRequiredWithoutMatchApplicationsNestedInput = {
    create?: XOR<TeamCreateWithoutMatchApplicationsInput, TeamUncheckedCreateWithoutMatchApplicationsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMatchApplicationsInput
    upsert?: TeamUpsertWithoutMatchApplicationsInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutMatchApplicationsInput, TeamUpdateWithoutMatchApplicationsInput>, TeamUncheckedUpdateWithoutMatchApplicationsInput>
  }

  export type MatchUpdateOneRequiredWithoutMatchApplicationsNestedInput = {
    create?: XOR<MatchCreateWithoutMatchApplicationsInput, MatchUncheckedCreateWithoutMatchApplicationsInput>
    connectOrCreate?: MatchCreateOrConnectWithoutMatchApplicationsInput
    upsert?: MatchUpsertWithoutMatchApplicationsInput
    connect?: MatchWhereUniqueInput
    update?: XOR<XOR<MatchUpdateToOneWithWhereWithoutMatchApplicationsInput, MatchUpdateWithoutMatchApplicationsInput>, MatchUncheckedUpdateWithoutMatchApplicationsInput>
  }

  export type PlayerUpdateManyWithoutMatchApplicationsNestedInput = {
    create?: XOR<PlayerCreateWithoutMatchApplicationsInput, PlayerUncheckedCreateWithoutMatchApplicationsInput> | PlayerCreateWithoutMatchApplicationsInput[] | PlayerUncheckedCreateWithoutMatchApplicationsInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutMatchApplicationsInput | PlayerCreateOrConnectWithoutMatchApplicationsInput[]
    upsert?: PlayerUpsertWithWhereUniqueWithoutMatchApplicationsInput | PlayerUpsertWithWhereUniqueWithoutMatchApplicationsInput[]
    set?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    disconnect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    delete?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    update?: PlayerUpdateWithWhereUniqueWithoutMatchApplicationsInput | PlayerUpdateWithWhereUniqueWithoutMatchApplicationsInput[]
    updateMany?: PlayerUpdateManyWithWhereWithoutMatchApplicationsInput | PlayerUpdateManyWithWhereWithoutMatchApplicationsInput[]
    deleteMany?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
  }

  export type PlayerUncheckedUpdateManyWithoutMatchApplicationsNestedInput = {
    create?: XOR<PlayerCreateWithoutMatchApplicationsInput, PlayerUncheckedCreateWithoutMatchApplicationsInput> | PlayerCreateWithoutMatchApplicationsInput[] | PlayerUncheckedCreateWithoutMatchApplicationsInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutMatchApplicationsInput | PlayerCreateOrConnectWithoutMatchApplicationsInput[]
    upsert?: PlayerUpsertWithWhereUniqueWithoutMatchApplicationsInput | PlayerUpsertWithWhereUniqueWithoutMatchApplicationsInput[]
    set?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    disconnect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    delete?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    update?: PlayerUpdateWithWhereUniqueWithoutMatchApplicationsInput | PlayerUpdateWithWhereUniqueWithoutMatchApplicationsInput[]
    updateMany?: PlayerUpdateManyWithWhereWithoutMatchApplicationsInput | PlayerUpdateManyWithWhereWithoutMatchApplicationsInput[]
    deleteMany?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
  }

  export type TeamCreateNestedOneWithoutMatchTimelineInput = {
    create?: XOR<TeamCreateWithoutMatchTimelineInput, TeamUncheckedCreateWithoutMatchTimelineInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMatchTimelineInput
    connect?: TeamWhereUniqueInput
  }

  export type MatchCreateNestedOneWithoutMatchTimelineInput = {
    create?: XOR<MatchCreateWithoutMatchTimelineInput, MatchUncheckedCreateWithoutMatchTimelineInput>
    connectOrCreate?: MatchCreateOrConnectWithoutMatchTimelineInput
    connect?: MatchWhereUniqueInput
  }

  export type PlayerCreateNestedOneWithoutMatchTimelineInput = {
    create?: XOR<PlayerCreateWithoutMatchTimelineInput, PlayerUncheckedCreateWithoutMatchTimelineInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutMatchTimelineInput
    connect?: PlayerWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumMatchEventFieldUpdateOperationsInput = {
    set?: $Enums.MatchEvent
  }

  export type TeamUpdateOneRequiredWithoutMatchTimelineNestedInput = {
    create?: XOR<TeamCreateWithoutMatchTimelineInput, TeamUncheckedCreateWithoutMatchTimelineInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMatchTimelineInput
    upsert?: TeamUpsertWithoutMatchTimelineInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutMatchTimelineInput, TeamUpdateWithoutMatchTimelineInput>, TeamUncheckedUpdateWithoutMatchTimelineInput>
  }

  export type MatchUpdateOneRequiredWithoutMatchTimelineNestedInput = {
    create?: XOR<MatchCreateWithoutMatchTimelineInput, MatchUncheckedCreateWithoutMatchTimelineInput>
    connectOrCreate?: MatchCreateOrConnectWithoutMatchTimelineInput
    upsert?: MatchUpsertWithoutMatchTimelineInput
    connect?: MatchWhereUniqueInput
    update?: XOR<XOR<MatchUpdateToOneWithWhereWithoutMatchTimelineInput, MatchUpdateWithoutMatchTimelineInput>, MatchUncheckedUpdateWithoutMatchTimelineInput>
  }

  export type PlayerUpdateOneRequiredWithoutMatchTimelineNestedInput = {
    create?: XOR<PlayerCreateWithoutMatchTimelineInput, PlayerUncheckedCreateWithoutMatchTimelineInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutMatchTimelineInput
    upsert?: PlayerUpsertWithoutMatchTimelineInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutMatchTimelineInput, PlayerUpdateWithoutMatchTimelineInput>, PlayerUncheckedUpdateWithoutMatchTimelineInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTournamentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TournamentStatus | EnumTournamentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTournamentStatusFilter<$PrismaModel> | $Enums.TournamentStatus
  }

  export type NestedEnumTournamentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TournamentStatus | EnumTournamentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTournamentStatusWithAggregatesFilter<$PrismaModel> | $Enums.TournamentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTournamentStatusFilter<$PrismaModel>
    _max?: NestedEnumTournamentStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedEnumMatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchStatusFilter<$PrismaModel> | $Enums.MatchStatus
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

  export type NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel> | $Enums.MatchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchStatusFilter<$PrismaModel>
    _max?: NestedEnumMatchStatusFilter<$PrismaModel>
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

  export type NestedEnumMatchEventFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchEvent | EnumMatchEventFieldRefInput<$PrismaModel>
    in?: $Enums.MatchEvent[] | ListEnumMatchEventFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchEvent[] | ListEnumMatchEventFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchEventFilter<$PrismaModel> | $Enums.MatchEvent
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

  export type NestedEnumMatchEventWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchEvent | EnumMatchEventFieldRefInput<$PrismaModel>
    in?: $Enums.MatchEvent[] | ListEnumMatchEventFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchEvent[] | ListEnumMatchEventFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchEventWithAggregatesFilter<$PrismaModel> | $Enums.MatchEvent
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchEventFilter<$PrismaModel>
    _max?: NestedEnumMatchEventFilter<$PrismaModel>
  }

  export type PlayerCreateWithoutUserInput = {
    id?: string
    name: string
    isCaptain?: boolean
    tournamentApplications?: TournamentApplicationCreateNestedManyWithoutPlayersInput
    matchApplications?: MatchApplicationCreateNestedManyWithoutPlayersInput
    matchTimeline?: MatchTimelineCreateNestedManyWithoutPlayerInput
    team?: TeamCreateNestedOneWithoutPlayersInput
  }

  export type PlayerUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    teamId: string
    isCaptain?: boolean
    tournamentApplications?: TournamentApplicationUncheckedCreateNestedManyWithoutPlayersInput
    matchApplications?: MatchApplicationUncheckedCreateNestedManyWithoutPlayersInput
    matchTimeline?: MatchTimelineUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutUserInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutUserInput, PlayerUncheckedCreateWithoutUserInput>
  }

  export type PlayerUpsertWithoutUserInput = {
    update: XOR<PlayerUpdateWithoutUserInput, PlayerUncheckedUpdateWithoutUserInput>
    create: XOR<PlayerCreateWithoutUserInput, PlayerUncheckedCreateWithoutUserInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutUserInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutUserInput, PlayerUncheckedUpdateWithoutUserInput>
  }

  export type PlayerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isCaptain?: BoolFieldUpdateOperationsInput | boolean
    tournamentApplications?: TournamentApplicationUpdateManyWithoutPlayersNestedInput
    matchApplications?: MatchApplicationUpdateManyWithoutPlayersNestedInput
    matchTimeline?: MatchTimelineUpdateManyWithoutPlayerNestedInput
    team?: TeamUpdateOneWithoutPlayersNestedInput
  }

  export type PlayerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    isCaptain?: BoolFieldUpdateOperationsInput | boolean
    tournamentApplications?: TournamentApplicationUncheckedUpdateManyWithoutPlayersNestedInput
    matchApplications?: MatchApplicationUncheckedUpdateManyWithoutPlayersNestedInput
    matchTimeline?: MatchTimelineUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type TournamentApplicationCreateWithoutPlayersInput = {
    id?: string
    date?: Date | string | null
    team: TeamCreateNestedOneWithoutTournamentApplicationsInput
    tournament: TournamentCreateNestedOneWithoutTournamentApplicationsInput
  }

  export type TournamentApplicationUncheckedCreateWithoutPlayersInput = {
    id?: string
    teamId: string
    tournamentId: string
    date?: Date | string | null
  }

  export type TournamentApplicationCreateOrConnectWithoutPlayersInput = {
    where: TournamentApplicationWhereUniqueInput
    create: XOR<TournamentApplicationCreateWithoutPlayersInput, TournamentApplicationUncheckedCreateWithoutPlayersInput>
  }

  export type MatchApplicationCreateWithoutPlayersInput = {
    id?: string
    team: TeamCreateNestedOneWithoutMatchApplicationsInput
    match: MatchCreateNestedOneWithoutMatchApplicationsInput
  }

  export type MatchApplicationUncheckedCreateWithoutPlayersInput = {
    id?: string
    teamId: string
    matchID: string
  }

  export type MatchApplicationCreateOrConnectWithoutPlayersInput = {
    where: MatchApplicationWhereUniqueInput
    create: XOR<MatchApplicationCreateWithoutPlayersInput, MatchApplicationUncheckedCreateWithoutPlayersInput>
  }

  export type MatchTimelineCreateWithoutPlayerInput = {
    id?: string
    time: number
    type: $Enums.MatchEvent
    team: TeamCreateNestedOneWithoutMatchTimelineInput
    match: MatchCreateNestedOneWithoutMatchTimelineInput
  }

  export type MatchTimelineUncheckedCreateWithoutPlayerInput = {
    id?: string
    time: number
    type: $Enums.MatchEvent
    teamId: string
    matchId: string
  }

  export type MatchTimelineCreateOrConnectWithoutPlayerInput = {
    where: MatchTimelineWhereUniqueInput
    create: XOR<MatchTimelineCreateWithoutPlayerInput, MatchTimelineUncheckedCreateWithoutPlayerInput>
  }

  export type MatchTimelineCreateManyPlayerInputEnvelope = {
    data: MatchTimelineCreateManyPlayerInput | MatchTimelineCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPlayerInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
  }

  export type UserUncheckedCreateWithoutPlayerInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
  }

  export type UserCreateOrConnectWithoutPlayerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlayerInput, UserUncheckedCreateWithoutPlayerInput>
  }

  export type TeamCreateWithoutPlayersInput = {
    id?: string
    name: string
    tournamentApplications?: TournamentApplicationCreateNestedManyWithoutTeamInput
    match?: MatchCreateNestedManyWithoutTeamsInput
    matchApplications?: MatchApplicationCreateNestedManyWithoutTeamInput
    matchTimeline?: MatchTimelineCreateNestedManyWithoutTeamInput
    tournamentIds?: TournamentCreateNestedManyWithoutTeamIdsInput
    wonMatchesIds?: MatchCreateNestedManyWithoutWinnerInput
  }

  export type TeamUncheckedCreateWithoutPlayersInput = {
    id?: string
    name: string
    tournamentApplications?: TournamentApplicationUncheckedCreateNestedManyWithoutTeamInput
    match?: MatchUncheckedCreateNestedManyWithoutTeamsInput
    matchApplications?: MatchApplicationUncheckedCreateNestedManyWithoutTeamInput
    matchTimeline?: MatchTimelineUncheckedCreateNestedManyWithoutTeamInput
    tournamentIds?: TournamentUncheckedCreateNestedManyWithoutTeamIdsInput
    wonMatchesIds?: MatchUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type TeamCreateOrConnectWithoutPlayersInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutPlayersInput, TeamUncheckedCreateWithoutPlayersInput>
  }

  export type TournamentApplicationUpsertWithWhereUniqueWithoutPlayersInput = {
    where: TournamentApplicationWhereUniqueInput
    update: XOR<TournamentApplicationUpdateWithoutPlayersInput, TournamentApplicationUncheckedUpdateWithoutPlayersInput>
    create: XOR<TournamentApplicationCreateWithoutPlayersInput, TournamentApplicationUncheckedCreateWithoutPlayersInput>
  }

  export type TournamentApplicationUpdateWithWhereUniqueWithoutPlayersInput = {
    where: TournamentApplicationWhereUniqueInput
    data: XOR<TournamentApplicationUpdateWithoutPlayersInput, TournamentApplicationUncheckedUpdateWithoutPlayersInput>
  }

  export type TournamentApplicationUpdateManyWithWhereWithoutPlayersInput = {
    where: TournamentApplicationScalarWhereInput
    data: XOR<TournamentApplicationUpdateManyMutationInput, TournamentApplicationUncheckedUpdateManyWithoutPlayersInput>
  }

  export type TournamentApplicationScalarWhereInput = {
    AND?: TournamentApplicationScalarWhereInput | TournamentApplicationScalarWhereInput[]
    OR?: TournamentApplicationScalarWhereInput[]
    NOT?: TournamentApplicationScalarWhereInput | TournamentApplicationScalarWhereInput[]
    id?: StringFilter<"TournamentApplication"> | string
    teamId?: StringFilter<"TournamentApplication"> | string
    tournamentId?: StringFilter<"TournamentApplication"> | string
    date?: DateTimeNullableFilter<"TournamentApplication"> | Date | string | null
  }

  export type MatchApplicationUpsertWithWhereUniqueWithoutPlayersInput = {
    where: MatchApplicationWhereUniqueInput
    update: XOR<MatchApplicationUpdateWithoutPlayersInput, MatchApplicationUncheckedUpdateWithoutPlayersInput>
    create: XOR<MatchApplicationCreateWithoutPlayersInput, MatchApplicationUncheckedCreateWithoutPlayersInput>
  }

  export type MatchApplicationUpdateWithWhereUniqueWithoutPlayersInput = {
    where: MatchApplicationWhereUniqueInput
    data: XOR<MatchApplicationUpdateWithoutPlayersInput, MatchApplicationUncheckedUpdateWithoutPlayersInput>
  }

  export type MatchApplicationUpdateManyWithWhereWithoutPlayersInput = {
    where: MatchApplicationScalarWhereInput
    data: XOR<MatchApplicationUpdateManyMutationInput, MatchApplicationUncheckedUpdateManyWithoutPlayersInput>
  }

  export type MatchApplicationScalarWhereInput = {
    AND?: MatchApplicationScalarWhereInput | MatchApplicationScalarWhereInput[]
    OR?: MatchApplicationScalarWhereInput[]
    NOT?: MatchApplicationScalarWhereInput | MatchApplicationScalarWhereInput[]
    id?: StringFilter<"MatchApplication"> | string
    teamId?: StringFilter<"MatchApplication"> | string
    matchID?: StringFilter<"MatchApplication"> | string
  }

  export type MatchTimelineUpsertWithWhereUniqueWithoutPlayerInput = {
    where: MatchTimelineWhereUniqueInput
    update: XOR<MatchTimelineUpdateWithoutPlayerInput, MatchTimelineUncheckedUpdateWithoutPlayerInput>
    create: XOR<MatchTimelineCreateWithoutPlayerInput, MatchTimelineUncheckedCreateWithoutPlayerInput>
  }

  export type MatchTimelineUpdateWithWhereUniqueWithoutPlayerInput = {
    where: MatchTimelineWhereUniqueInput
    data: XOR<MatchTimelineUpdateWithoutPlayerInput, MatchTimelineUncheckedUpdateWithoutPlayerInput>
  }

  export type MatchTimelineUpdateManyWithWhereWithoutPlayerInput = {
    where: MatchTimelineScalarWhereInput
    data: XOR<MatchTimelineUpdateManyMutationInput, MatchTimelineUncheckedUpdateManyWithoutPlayerInput>
  }

  export type MatchTimelineScalarWhereInput = {
    AND?: MatchTimelineScalarWhereInput | MatchTimelineScalarWhereInput[]
    OR?: MatchTimelineScalarWhereInput[]
    NOT?: MatchTimelineScalarWhereInput | MatchTimelineScalarWhereInput[]
    id?: StringFilter<"MatchTimeline"> | string
    time?: IntFilter<"MatchTimeline"> | number
    type?: EnumMatchEventFilter<"MatchTimeline"> | $Enums.MatchEvent
    teamId?: StringFilter<"MatchTimeline"> | string
    matchId?: StringFilter<"MatchTimeline"> | string
    playerId?: StringFilter<"MatchTimeline"> | string
  }

  export type UserUpsertWithoutPlayerInput = {
    update: XOR<UserUpdateWithoutPlayerInput, UserUncheckedUpdateWithoutPlayerInput>
    create: XOR<UserCreateWithoutPlayerInput, UserUncheckedCreateWithoutPlayerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlayerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlayerInput, UserUncheckedUpdateWithoutPlayerInput>
  }

  export type UserUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type TeamUpsertWithoutPlayersInput = {
    update: XOR<TeamUpdateWithoutPlayersInput, TeamUncheckedUpdateWithoutPlayersInput>
    create: XOR<TeamCreateWithoutPlayersInput, TeamUncheckedCreateWithoutPlayersInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutPlayersInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutPlayersInput, TeamUncheckedUpdateWithoutPlayersInput>
  }

  export type TeamUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tournamentApplications?: TournamentApplicationUpdateManyWithoutTeamNestedInput
    match?: MatchUpdateManyWithoutTeamsNestedInput
    matchApplications?: MatchApplicationUpdateManyWithoutTeamNestedInput
    matchTimeline?: MatchTimelineUpdateManyWithoutTeamNestedInput
    tournamentIds?: TournamentUpdateManyWithoutTeamIdsNestedInput
    wonMatchesIds?: MatchUpdateManyWithoutWinnerNestedInput
  }

  export type TeamUncheckedUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tournamentApplications?: TournamentApplicationUncheckedUpdateManyWithoutTeamNestedInput
    match?: MatchUncheckedUpdateManyWithoutTeamsNestedInput
    matchApplications?: MatchApplicationUncheckedUpdateManyWithoutTeamNestedInput
    matchTimeline?: MatchTimelineUncheckedUpdateManyWithoutTeamNestedInput
    tournamentIds?: TournamentUncheckedUpdateManyWithoutTeamIdsNestedInput
    wonMatchesIds?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type TournamentApplicationCreateWithoutTeamInput = {
    id?: string
    date?: Date | string | null
    tournament: TournamentCreateNestedOneWithoutTournamentApplicationsInput
    players?: PlayerCreateNestedManyWithoutTournamentApplicationsInput
  }

  export type TournamentApplicationUncheckedCreateWithoutTeamInput = {
    id?: string
    tournamentId: string
    date?: Date | string | null
    players?: PlayerUncheckedCreateNestedManyWithoutTournamentApplicationsInput
  }

  export type TournamentApplicationCreateOrConnectWithoutTeamInput = {
    where: TournamentApplicationWhereUniqueInput
    create: XOR<TournamentApplicationCreateWithoutTeamInput, TournamentApplicationUncheckedCreateWithoutTeamInput>
  }

  export type TournamentApplicationCreateManyTeamInputEnvelope = {
    data: TournamentApplicationCreateManyTeamInput | TournamentApplicationCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutTeamsInput = {
    id?: string
    status?: $Enums.MatchStatus
    date?: Date | string | null
    tournament: TournamentCreateNestedOneWithoutMatchInput
    matchApplications?: MatchApplicationCreateNestedManyWithoutMatchInput
    matchTimeline?: MatchTimelineCreateNestedManyWithoutMatchInput
    winner?: TeamCreateNestedOneWithoutWonMatchesIdsInput
  }

  export type MatchUncheckedCreateWithoutTeamsInput = {
    id?: string
    status?: $Enums.MatchStatus
    date?: Date | string | null
    tournamentId: string
    winnerId?: string | null
    matchApplications?: MatchApplicationUncheckedCreateNestedManyWithoutMatchInput
    matchTimeline?: MatchTimelineUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutTeamsInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutTeamsInput, MatchUncheckedCreateWithoutTeamsInput>
  }

  export type MatchApplicationCreateWithoutTeamInput = {
    id?: string
    match: MatchCreateNestedOneWithoutMatchApplicationsInput
    players?: PlayerCreateNestedManyWithoutMatchApplicationsInput
  }

  export type MatchApplicationUncheckedCreateWithoutTeamInput = {
    id?: string
    matchID: string
    players?: PlayerUncheckedCreateNestedManyWithoutMatchApplicationsInput
  }

  export type MatchApplicationCreateOrConnectWithoutTeamInput = {
    where: MatchApplicationWhereUniqueInput
    create: XOR<MatchApplicationCreateWithoutTeamInput, MatchApplicationUncheckedCreateWithoutTeamInput>
  }

  export type MatchApplicationCreateManyTeamInputEnvelope = {
    data: MatchApplicationCreateManyTeamInput | MatchApplicationCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type MatchTimelineCreateWithoutTeamInput = {
    id?: string
    time: number
    type: $Enums.MatchEvent
    match: MatchCreateNestedOneWithoutMatchTimelineInput
    player: PlayerCreateNestedOneWithoutMatchTimelineInput
  }

  export type MatchTimelineUncheckedCreateWithoutTeamInput = {
    id?: string
    time: number
    type: $Enums.MatchEvent
    matchId: string
    playerId: string
  }

  export type MatchTimelineCreateOrConnectWithoutTeamInput = {
    where: MatchTimelineWhereUniqueInput
    create: XOR<MatchTimelineCreateWithoutTeamInput, MatchTimelineUncheckedCreateWithoutTeamInput>
  }

  export type MatchTimelineCreateManyTeamInputEnvelope = {
    data: MatchTimelineCreateManyTeamInput | MatchTimelineCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type PlayerCreateWithoutTeamInput = {
    id?: string
    name: string
    isCaptain?: boolean
    tournamentApplications?: TournamentApplicationCreateNestedManyWithoutPlayersInput
    matchApplications?: MatchApplicationCreateNestedManyWithoutPlayersInput
    matchTimeline?: MatchTimelineCreateNestedManyWithoutPlayerInput
    user: UserCreateNestedOneWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutTeamInput = {
    id?: string
    name: string
    userId: string
    isCaptain?: boolean
    tournamentApplications?: TournamentApplicationUncheckedCreateNestedManyWithoutPlayersInput
    matchApplications?: MatchApplicationUncheckedCreateNestedManyWithoutPlayersInput
    matchTimeline?: MatchTimelineUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutTeamInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput>
  }

  export type PlayerCreateManyTeamInputEnvelope = {
    data: PlayerCreateManyTeamInput | PlayerCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type TournamentCreateWithoutTeamIdsInput = {
    id?: string
    name: string
    status?: $Enums.TournamentStatus
    tournamentApplications?: TournamentApplicationCreateNestedManyWithoutTournamentInput
    match?: MatchCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUncheckedCreateWithoutTeamIdsInput = {
    id?: string
    name: string
    status?: $Enums.TournamentStatus
    tournamentApplications?: TournamentApplicationUncheckedCreateNestedManyWithoutTournamentInput
    match?: MatchUncheckedCreateNestedManyWithoutTournamentInput
  }

  export type TournamentCreateOrConnectWithoutTeamIdsInput = {
    where: TournamentWhereUniqueInput
    create: XOR<TournamentCreateWithoutTeamIdsInput, TournamentUncheckedCreateWithoutTeamIdsInput>
  }

  export type MatchCreateWithoutWinnerInput = {
    id?: string
    status?: $Enums.MatchStatus
    date?: Date | string | null
    teams?: TeamCreateNestedManyWithoutMatchInput
    tournament: TournamentCreateNestedOneWithoutMatchInput
    matchApplications?: MatchApplicationCreateNestedManyWithoutMatchInput
    matchTimeline?: MatchTimelineCreateNestedManyWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutWinnerInput = {
    id?: string
    status?: $Enums.MatchStatus
    date?: Date | string | null
    tournamentId: string
    teams?: TeamUncheckedCreateNestedManyWithoutMatchInput
    matchApplications?: MatchApplicationUncheckedCreateNestedManyWithoutMatchInput
    matchTimeline?: MatchTimelineUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutWinnerInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput>
  }

  export type MatchCreateManyWinnerInputEnvelope = {
    data: MatchCreateManyWinnerInput | MatchCreateManyWinnerInput[]
    skipDuplicates?: boolean
  }

  export type TournamentApplicationUpsertWithWhereUniqueWithoutTeamInput = {
    where: TournamentApplicationWhereUniqueInput
    update: XOR<TournamentApplicationUpdateWithoutTeamInput, TournamentApplicationUncheckedUpdateWithoutTeamInput>
    create: XOR<TournamentApplicationCreateWithoutTeamInput, TournamentApplicationUncheckedCreateWithoutTeamInput>
  }

  export type TournamentApplicationUpdateWithWhereUniqueWithoutTeamInput = {
    where: TournamentApplicationWhereUniqueInput
    data: XOR<TournamentApplicationUpdateWithoutTeamInput, TournamentApplicationUncheckedUpdateWithoutTeamInput>
  }

  export type TournamentApplicationUpdateManyWithWhereWithoutTeamInput = {
    where: TournamentApplicationScalarWhereInput
    data: XOR<TournamentApplicationUpdateManyMutationInput, TournamentApplicationUncheckedUpdateManyWithoutTeamInput>
  }

  export type MatchUpsertWithWhereUniqueWithoutTeamsInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutTeamsInput, MatchUncheckedUpdateWithoutTeamsInput>
    create: XOR<MatchCreateWithoutTeamsInput, MatchUncheckedCreateWithoutTeamsInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutTeamsInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutTeamsInput, MatchUncheckedUpdateWithoutTeamsInput>
  }

  export type MatchUpdateManyWithWhereWithoutTeamsInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutTeamsInput>
  }

  export type MatchScalarWhereInput = {
    AND?: MatchScalarWhereInput | MatchScalarWhereInput[]
    OR?: MatchScalarWhereInput[]
    NOT?: MatchScalarWhereInput | MatchScalarWhereInput[]
    id?: StringFilter<"Match"> | string
    status?: EnumMatchStatusFilter<"Match"> | $Enums.MatchStatus
    date?: DateTimeNullableFilter<"Match"> | Date | string | null
    tournamentId?: StringFilter<"Match"> | string
    winnerId?: StringNullableFilter<"Match"> | string | null
  }

  export type MatchApplicationUpsertWithWhereUniqueWithoutTeamInput = {
    where: MatchApplicationWhereUniqueInput
    update: XOR<MatchApplicationUpdateWithoutTeamInput, MatchApplicationUncheckedUpdateWithoutTeamInput>
    create: XOR<MatchApplicationCreateWithoutTeamInput, MatchApplicationUncheckedCreateWithoutTeamInput>
  }

  export type MatchApplicationUpdateWithWhereUniqueWithoutTeamInput = {
    where: MatchApplicationWhereUniqueInput
    data: XOR<MatchApplicationUpdateWithoutTeamInput, MatchApplicationUncheckedUpdateWithoutTeamInput>
  }

  export type MatchApplicationUpdateManyWithWhereWithoutTeamInput = {
    where: MatchApplicationScalarWhereInput
    data: XOR<MatchApplicationUpdateManyMutationInput, MatchApplicationUncheckedUpdateManyWithoutTeamInput>
  }

  export type MatchTimelineUpsertWithWhereUniqueWithoutTeamInput = {
    where: MatchTimelineWhereUniqueInput
    update: XOR<MatchTimelineUpdateWithoutTeamInput, MatchTimelineUncheckedUpdateWithoutTeamInput>
    create: XOR<MatchTimelineCreateWithoutTeamInput, MatchTimelineUncheckedCreateWithoutTeamInput>
  }

  export type MatchTimelineUpdateWithWhereUniqueWithoutTeamInput = {
    where: MatchTimelineWhereUniqueInput
    data: XOR<MatchTimelineUpdateWithoutTeamInput, MatchTimelineUncheckedUpdateWithoutTeamInput>
  }

  export type MatchTimelineUpdateManyWithWhereWithoutTeamInput = {
    where: MatchTimelineScalarWhereInput
    data: XOR<MatchTimelineUpdateManyMutationInput, MatchTimelineUncheckedUpdateManyWithoutTeamInput>
  }

  export type PlayerUpsertWithWhereUniqueWithoutTeamInput = {
    where: PlayerWhereUniqueInput
    update: XOR<PlayerUpdateWithoutTeamInput, PlayerUncheckedUpdateWithoutTeamInput>
    create: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput>
  }

  export type PlayerUpdateWithWhereUniqueWithoutTeamInput = {
    where: PlayerWhereUniqueInput
    data: XOR<PlayerUpdateWithoutTeamInput, PlayerUncheckedUpdateWithoutTeamInput>
  }

  export type PlayerUpdateManyWithWhereWithoutTeamInput = {
    where: PlayerScalarWhereInput
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyWithoutTeamInput>
  }

  export type PlayerScalarWhereInput = {
    AND?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
    OR?: PlayerScalarWhereInput[]
    NOT?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
    id?: StringFilter<"Player"> | string
    name?: StringFilter<"Player"> | string
    userId?: StringFilter<"Player"> | string
    teamId?: StringFilter<"Player"> | string
    isCaptain?: BoolFilter<"Player"> | boolean
  }

  export type TournamentUpsertWithWhereUniqueWithoutTeamIdsInput = {
    where: TournamentWhereUniqueInput
    update: XOR<TournamentUpdateWithoutTeamIdsInput, TournamentUncheckedUpdateWithoutTeamIdsInput>
    create: XOR<TournamentCreateWithoutTeamIdsInput, TournamentUncheckedCreateWithoutTeamIdsInput>
  }

  export type TournamentUpdateWithWhereUniqueWithoutTeamIdsInput = {
    where: TournamentWhereUniqueInput
    data: XOR<TournamentUpdateWithoutTeamIdsInput, TournamentUncheckedUpdateWithoutTeamIdsInput>
  }

  export type TournamentUpdateManyWithWhereWithoutTeamIdsInput = {
    where: TournamentScalarWhereInput
    data: XOR<TournamentUpdateManyMutationInput, TournamentUncheckedUpdateManyWithoutTeamIdsInput>
  }

  export type TournamentScalarWhereInput = {
    AND?: TournamentScalarWhereInput | TournamentScalarWhereInput[]
    OR?: TournamentScalarWhereInput[]
    NOT?: TournamentScalarWhereInput | TournamentScalarWhereInput[]
    id?: StringFilter<"Tournament"> | string
    name?: StringFilter<"Tournament"> | string
    status?: EnumTournamentStatusFilter<"Tournament"> | $Enums.TournamentStatus
  }

  export type MatchUpsertWithWhereUniqueWithoutWinnerInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutWinnerInput, MatchUncheckedUpdateWithoutWinnerInput>
    create: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutWinnerInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutWinnerInput, MatchUncheckedUpdateWithoutWinnerInput>
  }

  export type MatchUpdateManyWithWhereWithoutWinnerInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutWinnerInput>
  }

  export type TournamentApplicationCreateWithoutTournamentInput = {
    id?: string
    date?: Date | string | null
    team: TeamCreateNestedOneWithoutTournamentApplicationsInput
    players?: PlayerCreateNestedManyWithoutTournamentApplicationsInput
  }

  export type TournamentApplicationUncheckedCreateWithoutTournamentInput = {
    id?: string
    teamId: string
    date?: Date | string | null
    players?: PlayerUncheckedCreateNestedManyWithoutTournamentApplicationsInput
  }

  export type TournamentApplicationCreateOrConnectWithoutTournamentInput = {
    where: TournamentApplicationWhereUniqueInput
    create: XOR<TournamentApplicationCreateWithoutTournamentInput, TournamentApplicationUncheckedCreateWithoutTournamentInput>
  }

  export type TournamentApplicationCreateManyTournamentInputEnvelope = {
    data: TournamentApplicationCreateManyTournamentInput | TournamentApplicationCreateManyTournamentInput[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutTournamentInput = {
    id?: string
    status?: $Enums.MatchStatus
    date?: Date | string | null
    teams?: TeamCreateNestedManyWithoutMatchInput
    matchApplications?: MatchApplicationCreateNestedManyWithoutMatchInput
    matchTimeline?: MatchTimelineCreateNestedManyWithoutMatchInput
    winner?: TeamCreateNestedOneWithoutWonMatchesIdsInput
  }

  export type MatchUncheckedCreateWithoutTournamentInput = {
    id?: string
    status?: $Enums.MatchStatus
    date?: Date | string | null
    winnerId?: string | null
    teams?: TeamUncheckedCreateNestedManyWithoutMatchInput
    matchApplications?: MatchApplicationUncheckedCreateNestedManyWithoutMatchInput
    matchTimeline?: MatchTimelineUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutTournamentInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutTournamentInput, MatchUncheckedCreateWithoutTournamentInput>
  }

  export type MatchCreateManyTournamentInputEnvelope = {
    data: MatchCreateManyTournamentInput | MatchCreateManyTournamentInput[]
    skipDuplicates?: boolean
  }

  export type TeamCreateWithoutTournamentIdsInput = {
    id?: string
    name: string
    tournamentApplications?: TournamentApplicationCreateNestedManyWithoutTeamInput
    match?: MatchCreateNestedManyWithoutTeamsInput
    matchApplications?: MatchApplicationCreateNestedManyWithoutTeamInput
    matchTimeline?: MatchTimelineCreateNestedManyWithoutTeamInput
    players?: PlayerCreateNestedManyWithoutTeamInput
    wonMatchesIds?: MatchCreateNestedManyWithoutWinnerInput
  }

  export type TeamUncheckedCreateWithoutTournamentIdsInput = {
    id?: string
    name: string
    tournamentApplications?: TournamentApplicationUncheckedCreateNestedManyWithoutTeamInput
    match?: MatchUncheckedCreateNestedManyWithoutTeamsInput
    matchApplications?: MatchApplicationUncheckedCreateNestedManyWithoutTeamInput
    matchTimeline?: MatchTimelineUncheckedCreateNestedManyWithoutTeamInput
    players?: PlayerUncheckedCreateNestedManyWithoutTeamInput
    wonMatchesIds?: MatchUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type TeamCreateOrConnectWithoutTournamentIdsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutTournamentIdsInput, TeamUncheckedCreateWithoutTournamentIdsInput>
  }

  export type TournamentApplicationUpsertWithWhereUniqueWithoutTournamentInput = {
    where: TournamentApplicationWhereUniqueInput
    update: XOR<TournamentApplicationUpdateWithoutTournamentInput, TournamentApplicationUncheckedUpdateWithoutTournamentInput>
    create: XOR<TournamentApplicationCreateWithoutTournamentInput, TournamentApplicationUncheckedCreateWithoutTournamentInput>
  }

  export type TournamentApplicationUpdateWithWhereUniqueWithoutTournamentInput = {
    where: TournamentApplicationWhereUniqueInput
    data: XOR<TournamentApplicationUpdateWithoutTournamentInput, TournamentApplicationUncheckedUpdateWithoutTournamentInput>
  }

  export type TournamentApplicationUpdateManyWithWhereWithoutTournamentInput = {
    where: TournamentApplicationScalarWhereInput
    data: XOR<TournamentApplicationUpdateManyMutationInput, TournamentApplicationUncheckedUpdateManyWithoutTournamentInput>
  }

  export type MatchUpsertWithWhereUniqueWithoutTournamentInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutTournamentInput, MatchUncheckedUpdateWithoutTournamentInput>
    create: XOR<MatchCreateWithoutTournamentInput, MatchUncheckedCreateWithoutTournamentInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutTournamentInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutTournamentInput, MatchUncheckedUpdateWithoutTournamentInput>
  }

  export type MatchUpdateManyWithWhereWithoutTournamentInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutTournamentInput>
  }

  export type TeamUpsertWithWhereUniqueWithoutTournamentIdsInput = {
    where: TeamWhereUniqueInput
    update: XOR<TeamUpdateWithoutTournamentIdsInput, TeamUncheckedUpdateWithoutTournamentIdsInput>
    create: XOR<TeamCreateWithoutTournamentIdsInput, TeamUncheckedCreateWithoutTournamentIdsInput>
  }

  export type TeamUpdateWithWhereUniqueWithoutTournamentIdsInput = {
    where: TeamWhereUniqueInput
    data: XOR<TeamUpdateWithoutTournamentIdsInput, TeamUncheckedUpdateWithoutTournamentIdsInput>
  }

  export type TeamUpdateManyWithWhereWithoutTournamentIdsInput = {
    where: TeamScalarWhereInput
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyWithoutTournamentIdsInput>
  }

  export type TeamScalarWhereInput = {
    AND?: TeamScalarWhereInput | TeamScalarWhereInput[]
    OR?: TeamScalarWhereInput[]
    NOT?: TeamScalarWhereInput | TeamScalarWhereInput[]
    id?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
  }

  export type TeamCreateWithoutTournamentApplicationsInput = {
    id?: string
    name: string
    match?: MatchCreateNestedManyWithoutTeamsInput
    matchApplications?: MatchApplicationCreateNestedManyWithoutTeamInput
    matchTimeline?: MatchTimelineCreateNestedManyWithoutTeamInput
    players?: PlayerCreateNestedManyWithoutTeamInput
    tournamentIds?: TournamentCreateNestedManyWithoutTeamIdsInput
    wonMatchesIds?: MatchCreateNestedManyWithoutWinnerInput
  }

  export type TeamUncheckedCreateWithoutTournamentApplicationsInput = {
    id?: string
    name: string
    match?: MatchUncheckedCreateNestedManyWithoutTeamsInput
    matchApplications?: MatchApplicationUncheckedCreateNestedManyWithoutTeamInput
    matchTimeline?: MatchTimelineUncheckedCreateNestedManyWithoutTeamInput
    players?: PlayerUncheckedCreateNestedManyWithoutTeamInput
    tournamentIds?: TournamentUncheckedCreateNestedManyWithoutTeamIdsInput
    wonMatchesIds?: MatchUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type TeamCreateOrConnectWithoutTournamentApplicationsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutTournamentApplicationsInput, TeamUncheckedCreateWithoutTournamentApplicationsInput>
  }

  export type TournamentCreateWithoutTournamentApplicationsInput = {
    id?: string
    name: string
    status?: $Enums.TournamentStatus
    match?: MatchCreateNestedManyWithoutTournamentInput
    teamIds?: TeamCreateNestedManyWithoutTournamentIdsInput
  }

  export type TournamentUncheckedCreateWithoutTournamentApplicationsInput = {
    id?: string
    name: string
    status?: $Enums.TournamentStatus
    match?: MatchUncheckedCreateNestedManyWithoutTournamentInput
    teamIds?: TeamUncheckedCreateNestedManyWithoutTournamentIdsInput
  }

  export type TournamentCreateOrConnectWithoutTournamentApplicationsInput = {
    where: TournamentWhereUniqueInput
    create: XOR<TournamentCreateWithoutTournamentApplicationsInput, TournamentUncheckedCreateWithoutTournamentApplicationsInput>
  }

  export type PlayerCreateWithoutTournamentApplicationsInput = {
    id?: string
    name: string
    isCaptain?: boolean
    matchApplications?: MatchApplicationCreateNestedManyWithoutPlayersInput
    matchTimeline?: MatchTimelineCreateNestedManyWithoutPlayerInput
    user: UserCreateNestedOneWithoutPlayerInput
    team?: TeamCreateNestedOneWithoutPlayersInput
  }

  export type PlayerUncheckedCreateWithoutTournamentApplicationsInput = {
    id?: string
    name: string
    userId: string
    teamId: string
    isCaptain?: boolean
    matchApplications?: MatchApplicationUncheckedCreateNestedManyWithoutPlayersInput
    matchTimeline?: MatchTimelineUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutTournamentApplicationsInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutTournamentApplicationsInput, PlayerUncheckedCreateWithoutTournamentApplicationsInput>
  }

  export type TeamUpsertWithoutTournamentApplicationsInput = {
    update: XOR<TeamUpdateWithoutTournamentApplicationsInput, TeamUncheckedUpdateWithoutTournamentApplicationsInput>
    create: XOR<TeamCreateWithoutTournamentApplicationsInput, TeamUncheckedCreateWithoutTournamentApplicationsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutTournamentApplicationsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutTournamentApplicationsInput, TeamUncheckedUpdateWithoutTournamentApplicationsInput>
  }

  export type TeamUpdateWithoutTournamentApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    match?: MatchUpdateManyWithoutTeamsNestedInput
    matchApplications?: MatchApplicationUpdateManyWithoutTeamNestedInput
    matchTimeline?: MatchTimelineUpdateManyWithoutTeamNestedInput
    players?: PlayerUpdateManyWithoutTeamNestedInput
    tournamentIds?: TournamentUpdateManyWithoutTeamIdsNestedInput
    wonMatchesIds?: MatchUpdateManyWithoutWinnerNestedInput
  }

  export type TeamUncheckedUpdateWithoutTournamentApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    match?: MatchUncheckedUpdateManyWithoutTeamsNestedInput
    matchApplications?: MatchApplicationUncheckedUpdateManyWithoutTeamNestedInput
    matchTimeline?: MatchTimelineUncheckedUpdateManyWithoutTeamNestedInput
    players?: PlayerUncheckedUpdateManyWithoutTeamNestedInput
    tournamentIds?: TournamentUncheckedUpdateManyWithoutTeamIdsNestedInput
    wonMatchesIds?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type TournamentUpsertWithoutTournamentApplicationsInput = {
    update: XOR<TournamentUpdateWithoutTournamentApplicationsInput, TournamentUncheckedUpdateWithoutTournamentApplicationsInput>
    create: XOR<TournamentCreateWithoutTournamentApplicationsInput, TournamentUncheckedCreateWithoutTournamentApplicationsInput>
    where?: TournamentWhereInput
  }

  export type TournamentUpdateToOneWithWhereWithoutTournamentApplicationsInput = {
    where?: TournamentWhereInput
    data: XOR<TournamentUpdateWithoutTournamentApplicationsInput, TournamentUncheckedUpdateWithoutTournamentApplicationsInput>
  }

  export type TournamentUpdateWithoutTournamentApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    match?: MatchUpdateManyWithoutTournamentNestedInput
    teamIds?: TeamUpdateManyWithoutTournamentIdsNestedInput
  }

  export type TournamentUncheckedUpdateWithoutTournamentApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    match?: MatchUncheckedUpdateManyWithoutTournamentNestedInput
    teamIds?: TeamUncheckedUpdateManyWithoutTournamentIdsNestedInput
  }

  export type PlayerUpsertWithWhereUniqueWithoutTournamentApplicationsInput = {
    where: PlayerWhereUniqueInput
    update: XOR<PlayerUpdateWithoutTournamentApplicationsInput, PlayerUncheckedUpdateWithoutTournamentApplicationsInput>
    create: XOR<PlayerCreateWithoutTournamentApplicationsInput, PlayerUncheckedCreateWithoutTournamentApplicationsInput>
  }

  export type PlayerUpdateWithWhereUniqueWithoutTournamentApplicationsInput = {
    where: PlayerWhereUniqueInput
    data: XOR<PlayerUpdateWithoutTournamentApplicationsInput, PlayerUncheckedUpdateWithoutTournamentApplicationsInput>
  }

  export type PlayerUpdateManyWithWhereWithoutTournamentApplicationsInput = {
    where: PlayerScalarWhereInput
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyWithoutTournamentApplicationsInput>
  }

  export type TeamCreateWithoutMatchInput = {
    id?: string
    name: string
    tournamentApplications?: TournamentApplicationCreateNestedManyWithoutTeamInput
    matchApplications?: MatchApplicationCreateNestedManyWithoutTeamInput
    matchTimeline?: MatchTimelineCreateNestedManyWithoutTeamInput
    players?: PlayerCreateNestedManyWithoutTeamInput
    tournamentIds?: TournamentCreateNestedManyWithoutTeamIdsInput
    wonMatchesIds?: MatchCreateNestedManyWithoutWinnerInput
  }

  export type TeamUncheckedCreateWithoutMatchInput = {
    id?: string
    name: string
    tournamentApplications?: TournamentApplicationUncheckedCreateNestedManyWithoutTeamInput
    matchApplications?: MatchApplicationUncheckedCreateNestedManyWithoutTeamInput
    matchTimeline?: MatchTimelineUncheckedCreateNestedManyWithoutTeamInput
    players?: PlayerUncheckedCreateNestedManyWithoutTeamInput
    tournamentIds?: TournamentUncheckedCreateNestedManyWithoutTeamIdsInput
    wonMatchesIds?: MatchUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type TeamCreateOrConnectWithoutMatchInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutMatchInput, TeamUncheckedCreateWithoutMatchInput>
  }

  export type TournamentCreateWithoutMatchInput = {
    id?: string
    name: string
    status?: $Enums.TournamentStatus
    tournamentApplications?: TournamentApplicationCreateNestedManyWithoutTournamentInput
    teamIds?: TeamCreateNestedManyWithoutTournamentIdsInput
  }

  export type TournamentUncheckedCreateWithoutMatchInput = {
    id?: string
    name: string
    status?: $Enums.TournamentStatus
    tournamentApplications?: TournamentApplicationUncheckedCreateNestedManyWithoutTournamentInput
    teamIds?: TeamUncheckedCreateNestedManyWithoutTournamentIdsInput
  }

  export type TournamentCreateOrConnectWithoutMatchInput = {
    where: TournamentWhereUniqueInput
    create: XOR<TournamentCreateWithoutMatchInput, TournamentUncheckedCreateWithoutMatchInput>
  }

  export type MatchApplicationCreateWithoutMatchInput = {
    id?: string
    team: TeamCreateNestedOneWithoutMatchApplicationsInput
    players?: PlayerCreateNestedManyWithoutMatchApplicationsInput
  }

  export type MatchApplicationUncheckedCreateWithoutMatchInput = {
    id?: string
    teamId: string
    players?: PlayerUncheckedCreateNestedManyWithoutMatchApplicationsInput
  }

  export type MatchApplicationCreateOrConnectWithoutMatchInput = {
    where: MatchApplicationWhereUniqueInput
    create: XOR<MatchApplicationCreateWithoutMatchInput, MatchApplicationUncheckedCreateWithoutMatchInput>
  }

  export type MatchApplicationCreateManyMatchInputEnvelope = {
    data: MatchApplicationCreateManyMatchInput | MatchApplicationCreateManyMatchInput[]
    skipDuplicates?: boolean
  }

  export type MatchTimelineCreateWithoutMatchInput = {
    id?: string
    time: number
    type: $Enums.MatchEvent
    team: TeamCreateNestedOneWithoutMatchTimelineInput
    player: PlayerCreateNestedOneWithoutMatchTimelineInput
  }

  export type MatchTimelineUncheckedCreateWithoutMatchInput = {
    id?: string
    time: number
    type: $Enums.MatchEvent
    teamId: string
    playerId: string
  }

  export type MatchTimelineCreateOrConnectWithoutMatchInput = {
    where: MatchTimelineWhereUniqueInput
    create: XOR<MatchTimelineCreateWithoutMatchInput, MatchTimelineUncheckedCreateWithoutMatchInput>
  }

  export type MatchTimelineCreateManyMatchInputEnvelope = {
    data: MatchTimelineCreateManyMatchInput | MatchTimelineCreateManyMatchInput[]
    skipDuplicates?: boolean
  }

  export type TeamCreateWithoutWonMatchesIdsInput = {
    id?: string
    name: string
    tournamentApplications?: TournamentApplicationCreateNestedManyWithoutTeamInput
    match?: MatchCreateNestedManyWithoutTeamsInput
    matchApplications?: MatchApplicationCreateNestedManyWithoutTeamInput
    matchTimeline?: MatchTimelineCreateNestedManyWithoutTeamInput
    players?: PlayerCreateNestedManyWithoutTeamInput
    tournamentIds?: TournamentCreateNestedManyWithoutTeamIdsInput
  }

  export type TeamUncheckedCreateWithoutWonMatchesIdsInput = {
    id?: string
    name: string
    tournamentApplications?: TournamentApplicationUncheckedCreateNestedManyWithoutTeamInput
    match?: MatchUncheckedCreateNestedManyWithoutTeamsInput
    matchApplications?: MatchApplicationUncheckedCreateNestedManyWithoutTeamInput
    matchTimeline?: MatchTimelineUncheckedCreateNestedManyWithoutTeamInput
    players?: PlayerUncheckedCreateNestedManyWithoutTeamInput
    tournamentIds?: TournamentUncheckedCreateNestedManyWithoutTeamIdsInput
  }

  export type TeamCreateOrConnectWithoutWonMatchesIdsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutWonMatchesIdsInput, TeamUncheckedCreateWithoutWonMatchesIdsInput>
  }

  export type TeamUpsertWithWhereUniqueWithoutMatchInput = {
    where: TeamWhereUniqueInput
    update: XOR<TeamUpdateWithoutMatchInput, TeamUncheckedUpdateWithoutMatchInput>
    create: XOR<TeamCreateWithoutMatchInput, TeamUncheckedCreateWithoutMatchInput>
  }

  export type TeamUpdateWithWhereUniqueWithoutMatchInput = {
    where: TeamWhereUniqueInput
    data: XOR<TeamUpdateWithoutMatchInput, TeamUncheckedUpdateWithoutMatchInput>
  }

  export type TeamUpdateManyWithWhereWithoutMatchInput = {
    where: TeamScalarWhereInput
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyWithoutMatchInput>
  }

  export type TournamentUpsertWithoutMatchInput = {
    update: XOR<TournamentUpdateWithoutMatchInput, TournamentUncheckedUpdateWithoutMatchInput>
    create: XOR<TournamentCreateWithoutMatchInput, TournamentUncheckedCreateWithoutMatchInput>
    where?: TournamentWhereInput
  }

  export type TournamentUpdateToOneWithWhereWithoutMatchInput = {
    where?: TournamentWhereInput
    data: XOR<TournamentUpdateWithoutMatchInput, TournamentUncheckedUpdateWithoutMatchInput>
  }

  export type TournamentUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    tournamentApplications?: TournamentApplicationUpdateManyWithoutTournamentNestedInput
    teamIds?: TeamUpdateManyWithoutTournamentIdsNestedInput
  }

  export type TournamentUncheckedUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    tournamentApplications?: TournamentApplicationUncheckedUpdateManyWithoutTournamentNestedInput
    teamIds?: TeamUncheckedUpdateManyWithoutTournamentIdsNestedInput
  }

  export type MatchApplicationUpsertWithWhereUniqueWithoutMatchInput = {
    where: MatchApplicationWhereUniqueInput
    update: XOR<MatchApplicationUpdateWithoutMatchInput, MatchApplicationUncheckedUpdateWithoutMatchInput>
    create: XOR<MatchApplicationCreateWithoutMatchInput, MatchApplicationUncheckedCreateWithoutMatchInput>
  }

  export type MatchApplicationUpdateWithWhereUniqueWithoutMatchInput = {
    where: MatchApplicationWhereUniqueInput
    data: XOR<MatchApplicationUpdateWithoutMatchInput, MatchApplicationUncheckedUpdateWithoutMatchInput>
  }

  export type MatchApplicationUpdateManyWithWhereWithoutMatchInput = {
    where: MatchApplicationScalarWhereInput
    data: XOR<MatchApplicationUpdateManyMutationInput, MatchApplicationUncheckedUpdateManyWithoutMatchInput>
  }

  export type MatchTimelineUpsertWithWhereUniqueWithoutMatchInput = {
    where: MatchTimelineWhereUniqueInput
    update: XOR<MatchTimelineUpdateWithoutMatchInput, MatchTimelineUncheckedUpdateWithoutMatchInput>
    create: XOR<MatchTimelineCreateWithoutMatchInput, MatchTimelineUncheckedCreateWithoutMatchInput>
  }

  export type MatchTimelineUpdateWithWhereUniqueWithoutMatchInput = {
    where: MatchTimelineWhereUniqueInput
    data: XOR<MatchTimelineUpdateWithoutMatchInput, MatchTimelineUncheckedUpdateWithoutMatchInput>
  }

  export type MatchTimelineUpdateManyWithWhereWithoutMatchInput = {
    where: MatchTimelineScalarWhereInput
    data: XOR<MatchTimelineUpdateManyMutationInput, MatchTimelineUncheckedUpdateManyWithoutMatchInput>
  }

  export type TeamUpsertWithoutWonMatchesIdsInput = {
    update: XOR<TeamUpdateWithoutWonMatchesIdsInput, TeamUncheckedUpdateWithoutWonMatchesIdsInput>
    create: XOR<TeamCreateWithoutWonMatchesIdsInput, TeamUncheckedCreateWithoutWonMatchesIdsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutWonMatchesIdsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutWonMatchesIdsInput, TeamUncheckedUpdateWithoutWonMatchesIdsInput>
  }

  export type TeamUpdateWithoutWonMatchesIdsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tournamentApplications?: TournamentApplicationUpdateManyWithoutTeamNestedInput
    match?: MatchUpdateManyWithoutTeamsNestedInput
    matchApplications?: MatchApplicationUpdateManyWithoutTeamNestedInput
    matchTimeline?: MatchTimelineUpdateManyWithoutTeamNestedInput
    players?: PlayerUpdateManyWithoutTeamNestedInput
    tournamentIds?: TournamentUpdateManyWithoutTeamIdsNestedInput
  }

  export type TeamUncheckedUpdateWithoutWonMatchesIdsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tournamentApplications?: TournamentApplicationUncheckedUpdateManyWithoutTeamNestedInput
    match?: MatchUncheckedUpdateManyWithoutTeamsNestedInput
    matchApplications?: MatchApplicationUncheckedUpdateManyWithoutTeamNestedInput
    matchTimeline?: MatchTimelineUncheckedUpdateManyWithoutTeamNestedInput
    players?: PlayerUncheckedUpdateManyWithoutTeamNestedInput
    tournamentIds?: TournamentUncheckedUpdateManyWithoutTeamIdsNestedInput
  }

  export type TeamCreateWithoutMatchApplicationsInput = {
    id?: string
    name: string
    tournamentApplications?: TournamentApplicationCreateNestedManyWithoutTeamInput
    match?: MatchCreateNestedManyWithoutTeamsInput
    matchTimeline?: MatchTimelineCreateNestedManyWithoutTeamInput
    players?: PlayerCreateNestedManyWithoutTeamInput
    tournamentIds?: TournamentCreateNestedManyWithoutTeamIdsInput
    wonMatchesIds?: MatchCreateNestedManyWithoutWinnerInput
  }

  export type TeamUncheckedCreateWithoutMatchApplicationsInput = {
    id?: string
    name: string
    tournamentApplications?: TournamentApplicationUncheckedCreateNestedManyWithoutTeamInput
    match?: MatchUncheckedCreateNestedManyWithoutTeamsInput
    matchTimeline?: MatchTimelineUncheckedCreateNestedManyWithoutTeamInput
    players?: PlayerUncheckedCreateNestedManyWithoutTeamInput
    tournamentIds?: TournamentUncheckedCreateNestedManyWithoutTeamIdsInput
    wonMatchesIds?: MatchUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type TeamCreateOrConnectWithoutMatchApplicationsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutMatchApplicationsInput, TeamUncheckedCreateWithoutMatchApplicationsInput>
  }

  export type MatchCreateWithoutMatchApplicationsInput = {
    id?: string
    status?: $Enums.MatchStatus
    date?: Date | string | null
    teams?: TeamCreateNestedManyWithoutMatchInput
    tournament: TournamentCreateNestedOneWithoutMatchInput
    matchTimeline?: MatchTimelineCreateNestedManyWithoutMatchInput
    winner?: TeamCreateNestedOneWithoutWonMatchesIdsInput
  }

  export type MatchUncheckedCreateWithoutMatchApplicationsInput = {
    id?: string
    status?: $Enums.MatchStatus
    date?: Date | string | null
    tournamentId: string
    winnerId?: string | null
    teams?: TeamUncheckedCreateNestedManyWithoutMatchInput
    matchTimeline?: MatchTimelineUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutMatchApplicationsInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutMatchApplicationsInput, MatchUncheckedCreateWithoutMatchApplicationsInput>
  }

  export type PlayerCreateWithoutMatchApplicationsInput = {
    id?: string
    name: string
    isCaptain?: boolean
    tournamentApplications?: TournamentApplicationCreateNestedManyWithoutPlayersInput
    matchTimeline?: MatchTimelineCreateNestedManyWithoutPlayerInput
    user: UserCreateNestedOneWithoutPlayerInput
    team?: TeamCreateNestedOneWithoutPlayersInput
  }

  export type PlayerUncheckedCreateWithoutMatchApplicationsInput = {
    id?: string
    name: string
    userId: string
    teamId: string
    isCaptain?: boolean
    tournamentApplications?: TournamentApplicationUncheckedCreateNestedManyWithoutPlayersInput
    matchTimeline?: MatchTimelineUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutMatchApplicationsInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutMatchApplicationsInput, PlayerUncheckedCreateWithoutMatchApplicationsInput>
  }

  export type TeamUpsertWithoutMatchApplicationsInput = {
    update: XOR<TeamUpdateWithoutMatchApplicationsInput, TeamUncheckedUpdateWithoutMatchApplicationsInput>
    create: XOR<TeamCreateWithoutMatchApplicationsInput, TeamUncheckedCreateWithoutMatchApplicationsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutMatchApplicationsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutMatchApplicationsInput, TeamUncheckedUpdateWithoutMatchApplicationsInput>
  }

  export type TeamUpdateWithoutMatchApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tournamentApplications?: TournamentApplicationUpdateManyWithoutTeamNestedInput
    match?: MatchUpdateManyWithoutTeamsNestedInput
    matchTimeline?: MatchTimelineUpdateManyWithoutTeamNestedInput
    players?: PlayerUpdateManyWithoutTeamNestedInput
    tournamentIds?: TournamentUpdateManyWithoutTeamIdsNestedInput
    wonMatchesIds?: MatchUpdateManyWithoutWinnerNestedInput
  }

  export type TeamUncheckedUpdateWithoutMatchApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tournamentApplications?: TournamentApplicationUncheckedUpdateManyWithoutTeamNestedInput
    match?: MatchUncheckedUpdateManyWithoutTeamsNestedInput
    matchTimeline?: MatchTimelineUncheckedUpdateManyWithoutTeamNestedInput
    players?: PlayerUncheckedUpdateManyWithoutTeamNestedInput
    tournamentIds?: TournamentUncheckedUpdateManyWithoutTeamIdsNestedInput
    wonMatchesIds?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type MatchUpsertWithoutMatchApplicationsInput = {
    update: XOR<MatchUpdateWithoutMatchApplicationsInput, MatchUncheckedUpdateWithoutMatchApplicationsInput>
    create: XOR<MatchCreateWithoutMatchApplicationsInput, MatchUncheckedCreateWithoutMatchApplicationsInput>
    where?: MatchWhereInput
  }

  export type MatchUpdateToOneWithWhereWithoutMatchApplicationsInput = {
    where?: MatchWhereInput
    data: XOR<MatchUpdateWithoutMatchApplicationsInput, MatchUncheckedUpdateWithoutMatchApplicationsInput>
  }

  export type MatchUpdateWithoutMatchApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teams?: TeamUpdateManyWithoutMatchNestedInput
    tournament?: TournamentUpdateOneRequiredWithoutMatchNestedInput
    matchTimeline?: MatchTimelineUpdateManyWithoutMatchNestedInput
    winner?: TeamUpdateOneWithoutWonMatchesIdsNestedInput
  }

  export type MatchUncheckedUpdateWithoutMatchApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tournamentId?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    teams?: TeamUncheckedUpdateManyWithoutMatchNestedInput
    matchTimeline?: MatchTimelineUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type PlayerUpsertWithWhereUniqueWithoutMatchApplicationsInput = {
    where: PlayerWhereUniqueInput
    update: XOR<PlayerUpdateWithoutMatchApplicationsInput, PlayerUncheckedUpdateWithoutMatchApplicationsInput>
    create: XOR<PlayerCreateWithoutMatchApplicationsInput, PlayerUncheckedCreateWithoutMatchApplicationsInput>
  }

  export type PlayerUpdateWithWhereUniqueWithoutMatchApplicationsInput = {
    where: PlayerWhereUniqueInput
    data: XOR<PlayerUpdateWithoutMatchApplicationsInput, PlayerUncheckedUpdateWithoutMatchApplicationsInput>
  }

  export type PlayerUpdateManyWithWhereWithoutMatchApplicationsInput = {
    where: PlayerScalarWhereInput
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyWithoutMatchApplicationsInput>
  }

  export type TeamCreateWithoutMatchTimelineInput = {
    id?: string
    name: string
    tournamentApplications?: TournamentApplicationCreateNestedManyWithoutTeamInput
    match?: MatchCreateNestedManyWithoutTeamsInput
    matchApplications?: MatchApplicationCreateNestedManyWithoutTeamInput
    players?: PlayerCreateNestedManyWithoutTeamInput
    tournamentIds?: TournamentCreateNestedManyWithoutTeamIdsInput
    wonMatchesIds?: MatchCreateNestedManyWithoutWinnerInput
  }

  export type TeamUncheckedCreateWithoutMatchTimelineInput = {
    id?: string
    name: string
    tournamentApplications?: TournamentApplicationUncheckedCreateNestedManyWithoutTeamInput
    match?: MatchUncheckedCreateNestedManyWithoutTeamsInput
    matchApplications?: MatchApplicationUncheckedCreateNestedManyWithoutTeamInput
    players?: PlayerUncheckedCreateNestedManyWithoutTeamInput
    tournamentIds?: TournamentUncheckedCreateNestedManyWithoutTeamIdsInput
    wonMatchesIds?: MatchUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type TeamCreateOrConnectWithoutMatchTimelineInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutMatchTimelineInput, TeamUncheckedCreateWithoutMatchTimelineInput>
  }

  export type MatchCreateWithoutMatchTimelineInput = {
    id?: string
    status?: $Enums.MatchStatus
    date?: Date | string | null
    teams?: TeamCreateNestedManyWithoutMatchInput
    tournament: TournamentCreateNestedOneWithoutMatchInput
    matchApplications?: MatchApplicationCreateNestedManyWithoutMatchInput
    winner?: TeamCreateNestedOneWithoutWonMatchesIdsInput
  }

  export type MatchUncheckedCreateWithoutMatchTimelineInput = {
    id?: string
    status?: $Enums.MatchStatus
    date?: Date | string | null
    tournamentId: string
    winnerId?: string | null
    teams?: TeamUncheckedCreateNestedManyWithoutMatchInput
    matchApplications?: MatchApplicationUncheckedCreateNestedManyWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutMatchTimelineInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutMatchTimelineInput, MatchUncheckedCreateWithoutMatchTimelineInput>
  }

  export type PlayerCreateWithoutMatchTimelineInput = {
    id?: string
    name: string
    isCaptain?: boolean
    tournamentApplications?: TournamentApplicationCreateNestedManyWithoutPlayersInput
    matchApplications?: MatchApplicationCreateNestedManyWithoutPlayersInput
    user: UserCreateNestedOneWithoutPlayerInput
    team?: TeamCreateNestedOneWithoutPlayersInput
  }

  export type PlayerUncheckedCreateWithoutMatchTimelineInput = {
    id?: string
    name: string
    userId: string
    teamId: string
    isCaptain?: boolean
    tournamentApplications?: TournamentApplicationUncheckedCreateNestedManyWithoutPlayersInput
    matchApplications?: MatchApplicationUncheckedCreateNestedManyWithoutPlayersInput
  }

  export type PlayerCreateOrConnectWithoutMatchTimelineInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutMatchTimelineInput, PlayerUncheckedCreateWithoutMatchTimelineInput>
  }

  export type TeamUpsertWithoutMatchTimelineInput = {
    update: XOR<TeamUpdateWithoutMatchTimelineInput, TeamUncheckedUpdateWithoutMatchTimelineInput>
    create: XOR<TeamCreateWithoutMatchTimelineInput, TeamUncheckedCreateWithoutMatchTimelineInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutMatchTimelineInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutMatchTimelineInput, TeamUncheckedUpdateWithoutMatchTimelineInput>
  }

  export type TeamUpdateWithoutMatchTimelineInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tournamentApplications?: TournamentApplicationUpdateManyWithoutTeamNestedInput
    match?: MatchUpdateManyWithoutTeamsNestedInput
    matchApplications?: MatchApplicationUpdateManyWithoutTeamNestedInput
    players?: PlayerUpdateManyWithoutTeamNestedInput
    tournamentIds?: TournamentUpdateManyWithoutTeamIdsNestedInput
    wonMatchesIds?: MatchUpdateManyWithoutWinnerNestedInput
  }

  export type TeamUncheckedUpdateWithoutMatchTimelineInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tournamentApplications?: TournamentApplicationUncheckedUpdateManyWithoutTeamNestedInput
    match?: MatchUncheckedUpdateManyWithoutTeamsNestedInput
    matchApplications?: MatchApplicationUncheckedUpdateManyWithoutTeamNestedInput
    players?: PlayerUncheckedUpdateManyWithoutTeamNestedInput
    tournamentIds?: TournamentUncheckedUpdateManyWithoutTeamIdsNestedInput
    wonMatchesIds?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type MatchUpsertWithoutMatchTimelineInput = {
    update: XOR<MatchUpdateWithoutMatchTimelineInput, MatchUncheckedUpdateWithoutMatchTimelineInput>
    create: XOR<MatchCreateWithoutMatchTimelineInput, MatchUncheckedCreateWithoutMatchTimelineInput>
    where?: MatchWhereInput
  }

  export type MatchUpdateToOneWithWhereWithoutMatchTimelineInput = {
    where?: MatchWhereInput
    data: XOR<MatchUpdateWithoutMatchTimelineInput, MatchUncheckedUpdateWithoutMatchTimelineInput>
  }

  export type MatchUpdateWithoutMatchTimelineInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teams?: TeamUpdateManyWithoutMatchNestedInput
    tournament?: TournamentUpdateOneRequiredWithoutMatchNestedInput
    matchApplications?: MatchApplicationUpdateManyWithoutMatchNestedInput
    winner?: TeamUpdateOneWithoutWonMatchesIdsNestedInput
  }

  export type MatchUncheckedUpdateWithoutMatchTimelineInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tournamentId?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    teams?: TeamUncheckedUpdateManyWithoutMatchNestedInput
    matchApplications?: MatchApplicationUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type PlayerUpsertWithoutMatchTimelineInput = {
    update: XOR<PlayerUpdateWithoutMatchTimelineInput, PlayerUncheckedUpdateWithoutMatchTimelineInput>
    create: XOR<PlayerCreateWithoutMatchTimelineInput, PlayerUncheckedCreateWithoutMatchTimelineInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutMatchTimelineInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutMatchTimelineInput, PlayerUncheckedUpdateWithoutMatchTimelineInput>
  }

  export type PlayerUpdateWithoutMatchTimelineInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isCaptain?: BoolFieldUpdateOperationsInput | boolean
    tournamentApplications?: TournamentApplicationUpdateManyWithoutPlayersNestedInput
    matchApplications?: MatchApplicationUpdateManyWithoutPlayersNestedInput
    user?: UserUpdateOneRequiredWithoutPlayerNestedInput
    team?: TeamUpdateOneWithoutPlayersNestedInput
  }

  export type PlayerUncheckedUpdateWithoutMatchTimelineInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    isCaptain?: BoolFieldUpdateOperationsInput | boolean
    tournamentApplications?: TournamentApplicationUncheckedUpdateManyWithoutPlayersNestedInput
    matchApplications?: MatchApplicationUncheckedUpdateManyWithoutPlayersNestedInput
  }

  export type MatchTimelineCreateManyPlayerInput = {
    id?: string
    time: number
    type: $Enums.MatchEvent
    teamId: string
    matchId: string
  }

  export type TournamentApplicationUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team?: TeamUpdateOneRequiredWithoutTournamentApplicationsNestedInput
    tournament?: TournamentUpdateOneRequiredWithoutTournamentApplicationsNestedInput
  }

  export type TournamentApplicationUncheckedUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    tournamentId?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TournamentApplicationUncheckedUpdateManyWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    tournamentId?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MatchApplicationUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    team?: TeamUpdateOneRequiredWithoutMatchApplicationsNestedInput
    match?: MatchUpdateOneRequiredWithoutMatchApplicationsNestedInput
  }

  export type MatchApplicationUncheckedUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    matchID?: StringFieldUpdateOperationsInput | string
  }

  export type MatchApplicationUncheckedUpdateManyWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    matchID?: StringFieldUpdateOperationsInput | string
  }

  export type MatchTimelineUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    type?: EnumMatchEventFieldUpdateOperationsInput | $Enums.MatchEvent
    team?: TeamUpdateOneRequiredWithoutMatchTimelineNestedInput
    match?: MatchUpdateOneRequiredWithoutMatchTimelineNestedInput
  }

  export type MatchTimelineUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    type?: EnumMatchEventFieldUpdateOperationsInput | $Enums.MatchEvent
    teamId?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
  }

  export type MatchTimelineUncheckedUpdateManyWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    type?: EnumMatchEventFieldUpdateOperationsInput | $Enums.MatchEvent
    teamId?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
  }

  export type TournamentApplicationCreateManyTeamInput = {
    id?: string
    tournamentId: string
    date?: Date | string | null
  }

  export type MatchApplicationCreateManyTeamInput = {
    id?: string
    matchID: string
  }

  export type MatchTimelineCreateManyTeamInput = {
    id?: string
    time: number
    type: $Enums.MatchEvent
    matchId: string
    playerId: string
  }

  export type PlayerCreateManyTeamInput = {
    id?: string
    name: string
    userId: string
    isCaptain?: boolean
  }

  export type MatchCreateManyWinnerInput = {
    id?: string
    status?: $Enums.MatchStatus
    date?: Date | string | null
    tournamentId: string
  }

  export type TournamentApplicationUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tournament?: TournamentUpdateOneRequiredWithoutTournamentApplicationsNestedInput
    players?: PlayerUpdateManyWithoutTournamentApplicationsNestedInput
  }

  export type TournamentApplicationUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    tournamentId?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    players?: PlayerUncheckedUpdateManyWithoutTournamentApplicationsNestedInput
  }

  export type TournamentApplicationUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    tournamentId?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MatchUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tournament?: TournamentUpdateOneRequiredWithoutMatchNestedInput
    matchApplications?: MatchApplicationUpdateManyWithoutMatchNestedInput
    matchTimeline?: MatchTimelineUpdateManyWithoutMatchNestedInput
    winner?: TeamUpdateOneWithoutWonMatchesIdsNestedInput
  }

  export type MatchUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tournamentId?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    matchApplications?: MatchApplicationUncheckedUpdateManyWithoutMatchNestedInput
    matchTimeline?: MatchTimelineUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tournamentId?: StringFieldUpdateOperationsInput | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchApplicationUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    match?: MatchUpdateOneRequiredWithoutMatchApplicationsNestedInput
    players?: PlayerUpdateManyWithoutMatchApplicationsNestedInput
  }

  export type MatchApplicationUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchID?: StringFieldUpdateOperationsInput | string
    players?: PlayerUncheckedUpdateManyWithoutMatchApplicationsNestedInput
  }

  export type MatchApplicationUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchID?: StringFieldUpdateOperationsInput | string
  }

  export type MatchTimelineUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    type?: EnumMatchEventFieldUpdateOperationsInput | $Enums.MatchEvent
    match?: MatchUpdateOneRequiredWithoutMatchTimelineNestedInput
    player?: PlayerUpdateOneRequiredWithoutMatchTimelineNestedInput
  }

  export type MatchTimelineUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    type?: EnumMatchEventFieldUpdateOperationsInput | $Enums.MatchEvent
    matchId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
  }

  export type MatchTimelineUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    type?: EnumMatchEventFieldUpdateOperationsInput | $Enums.MatchEvent
    matchId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isCaptain?: BoolFieldUpdateOperationsInput | boolean
    tournamentApplications?: TournamentApplicationUpdateManyWithoutPlayersNestedInput
    matchApplications?: MatchApplicationUpdateManyWithoutPlayersNestedInput
    matchTimeline?: MatchTimelineUpdateManyWithoutPlayerNestedInput
    user?: UserUpdateOneRequiredWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isCaptain?: BoolFieldUpdateOperationsInput | boolean
    tournamentApplications?: TournamentApplicationUncheckedUpdateManyWithoutPlayersNestedInput
    matchApplications?: MatchApplicationUncheckedUpdateManyWithoutPlayersNestedInput
    matchTimeline?: MatchTimelineUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isCaptain?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TournamentUpdateWithoutTeamIdsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    tournamentApplications?: TournamentApplicationUpdateManyWithoutTournamentNestedInput
    match?: MatchUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateWithoutTeamIdsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    tournamentApplications?: TournamentApplicationUncheckedUpdateManyWithoutTournamentNestedInput
    match?: MatchUncheckedUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateManyWithoutTeamIdsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
  }

  export type MatchUpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teams?: TeamUpdateManyWithoutMatchNestedInput
    tournament?: TournamentUpdateOneRequiredWithoutMatchNestedInput
    matchApplications?: MatchApplicationUpdateManyWithoutMatchNestedInput
    matchTimeline?: MatchTimelineUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tournamentId?: StringFieldUpdateOperationsInput | string
    teams?: TeamUncheckedUpdateManyWithoutMatchNestedInput
    matchApplications?: MatchApplicationUncheckedUpdateManyWithoutMatchNestedInput
    matchTimeline?: MatchTimelineUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tournamentId?: StringFieldUpdateOperationsInput | string
  }

  export type TournamentApplicationCreateManyTournamentInput = {
    id?: string
    teamId: string
    date?: Date | string | null
  }

  export type MatchCreateManyTournamentInput = {
    id?: string
    status?: $Enums.MatchStatus
    date?: Date | string | null
    winnerId?: string | null
  }

  export type TournamentApplicationUpdateWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team?: TeamUpdateOneRequiredWithoutTournamentApplicationsNestedInput
    players?: PlayerUpdateManyWithoutTournamentApplicationsNestedInput
  }

  export type TournamentApplicationUncheckedUpdateWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    players?: PlayerUncheckedUpdateManyWithoutTournamentApplicationsNestedInput
  }

  export type TournamentApplicationUncheckedUpdateManyWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MatchUpdateWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teams?: TeamUpdateManyWithoutMatchNestedInput
    matchApplications?: MatchApplicationUpdateManyWithoutMatchNestedInput
    matchTimeline?: MatchTimelineUpdateManyWithoutMatchNestedInput
    winner?: TeamUpdateOneWithoutWonMatchesIdsNestedInput
  }

  export type MatchUncheckedUpdateWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    teams?: TeamUncheckedUpdateManyWithoutMatchNestedInput
    matchApplications?: MatchApplicationUncheckedUpdateManyWithoutMatchNestedInput
    matchTimeline?: MatchTimelineUncheckedUpdateManyWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateManyWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeamUpdateWithoutTournamentIdsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tournamentApplications?: TournamentApplicationUpdateManyWithoutTeamNestedInput
    match?: MatchUpdateManyWithoutTeamsNestedInput
    matchApplications?: MatchApplicationUpdateManyWithoutTeamNestedInput
    matchTimeline?: MatchTimelineUpdateManyWithoutTeamNestedInput
    players?: PlayerUpdateManyWithoutTeamNestedInput
    wonMatchesIds?: MatchUpdateManyWithoutWinnerNestedInput
  }

  export type TeamUncheckedUpdateWithoutTournamentIdsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tournamentApplications?: TournamentApplicationUncheckedUpdateManyWithoutTeamNestedInput
    match?: MatchUncheckedUpdateManyWithoutTeamsNestedInput
    matchApplications?: MatchApplicationUncheckedUpdateManyWithoutTeamNestedInput
    matchTimeline?: MatchTimelineUncheckedUpdateManyWithoutTeamNestedInput
    players?: PlayerUncheckedUpdateManyWithoutTeamNestedInput
    wonMatchesIds?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type TeamUncheckedUpdateManyWithoutTournamentIdsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerUpdateWithoutTournamentApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isCaptain?: BoolFieldUpdateOperationsInput | boolean
    matchApplications?: MatchApplicationUpdateManyWithoutPlayersNestedInput
    matchTimeline?: MatchTimelineUpdateManyWithoutPlayerNestedInput
    user?: UserUpdateOneRequiredWithoutPlayerNestedInput
    team?: TeamUpdateOneWithoutPlayersNestedInput
  }

  export type PlayerUncheckedUpdateWithoutTournamentApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    isCaptain?: BoolFieldUpdateOperationsInput | boolean
    matchApplications?: MatchApplicationUncheckedUpdateManyWithoutPlayersNestedInput
    matchTimeline?: MatchTimelineUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateManyWithoutTournamentApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    isCaptain?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MatchApplicationCreateManyMatchInput = {
    id?: string
    teamId: string
  }

  export type MatchTimelineCreateManyMatchInput = {
    id?: string
    time: number
    type: $Enums.MatchEvent
    teamId: string
    playerId: string
  }

  export type TeamUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tournamentApplications?: TournamentApplicationUpdateManyWithoutTeamNestedInput
    matchApplications?: MatchApplicationUpdateManyWithoutTeamNestedInput
    matchTimeline?: MatchTimelineUpdateManyWithoutTeamNestedInput
    players?: PlayerUpdateManyWithoutTeamNestedInput
    tournamentIds?: TournamentUpdateManyWithoutTeamIdsNestedInput
    wonMatchesIds?: MatchUpdateManyWithoutWinnerNestedInput
  }

  export type TeamUncheckedUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tournamentApplications?: TournamentApplicationUncheckedUpdateManyWithoutTeamNestedInput
    matchApplications?: MatchApplicationUncheckedUpdateManyWithoutTeamNestedInput
    matchTimeline?: MatchTimelineUncheckedUpdateManyWithoutTeamNestedInput
    players?: PlayerUncheckedUpdateManyWithoutTeamNestedInput
    tournamentIds?: TournamentUncheckedUpdateManyWithoutTeamIdsNestedInput
    wonMatchesIds?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type TeamUncheckedUpdateManyWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MatchApplicationUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    team?: TeamUpdateOneRequiredWithoutMatchApplicationsNestedInput
    players?: PlayerUpdateManyWithoutMatchApplicationsNestedInput
  }

  export type MatchApplicationUncheckedUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    players?: PlayerUncheckedUpdateManyWithoutMatchApplicationsNestedInput
  }

  export type MatchApplicationUncheckedUpdateManyWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type MatchTimelineUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    type?: EnumMatchEventFieldUpdateOperationsInput | $Enums.MatchEvent
    team?: TeamUpdateOneRequiredWithoutMatchTimelineNestedInput
    player?: PlayerUpdateOneRequiredWithoutMatchTimelineNestedInput
  }

  export type MatchTimelineUncheckedUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    type?: EnumMatchEventFieldUpdateOperationsInput | $Enums.MatchEvent
    teamId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
  }

  export type MatchTimelineUncheckedUpdateManyWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    type?: EnumMatchEventFieldUpdateOperationsInput | $Enums.MatchEvent
    teamId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerUpdateWithoutMatchApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isCaptain?: BoolFieldUpdateOperationsInput | boolean
    tournamentApplications?: TournamentApplicationUpdateManyWithoutPlayersNestedInput
    matchTimeline?: MatchTimelineUpdateManyWithoutPlayerNestedInput
    user?: UserUpdateOneRequiredWithoutPlayerNestedInput
    team?: TeamUpdateOneWithoutPlayersNestedInput
  }

  export type PlayerUncheckedUpdateWithoutMatchApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    isCaptain?: BoolFieldUpdateOperationsInput | boolean
    tournamentApplications?: TournamentApplicationUncheckedUpdateManyWithoutPlayersNestedInput
    matchTimeline?: MatchTimelineUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateManyWithoutMatchApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    isCaptain?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PlayerCountOutputTypeDefaultArgs instead
     */
    export type PlayerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlayerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeamCountOutputTypeDefaultArgs instead
     */
    export type TeamCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeamCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TournamentCountOutputTypeDefaultArgs instead
     */
    export type TournamentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TournamentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TournamentApplicationCountOutputTypeDefaultArgs instead
     */
    export type TournamentApplicationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TournamentApplicationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MatchCountOutputTypeDefaultArgs instead
     */
    export type MatchCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MatchCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MatchApplicationCountOutputTypeDefaultArgs instead
     */
    export type MatchApplicationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MatchApplicationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlayerDefaultArgs instead
     */
    export type PlayerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlayerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeamDefaultArgs instead
     */
    export type TeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeamDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TournamentDefaultArgs instead
     */
    export type TournamentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TournamentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TournamentApplicationDefaultArgs instead
     */
    export type TournamentApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TournamentApplicationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MatchDefaultArgs instead
     */
    export type MatchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MatchDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MatchApplicationDefaultArgs instead
     */
    export type MatchApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MatchApplicationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MatchTimelineDefaultArgs instead
     */
    export type MatchTimelineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MatchTimelineDefaultArgs<ExtArgs>

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
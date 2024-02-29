
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
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model orders
 * 
 */
export type orders = $Result.DefaultSelection<Prisma.$ordersPayload>
/**
 * Model friends_order
 * 
 */
export type friends_order = $Result.DefaultSelection<Prisma.$friends_orderPayload>
/**
 * Model friends
 * 
 */
export type friends = $Result.DefaultSelection<Prisma.$friendsPayload>
/**
 * Model bill
 * 
 */
export type bill = $Result.DefaultSelection<Prisma.$billPayload>
/**
 * Model payment_method
 * 
 */
export type payment_method = $Result.DefaultSelection<Prisma.$payment_methodPayload>
/**
 * Model payment_method_detail
 * 
 */
export type payment_method_detail = $Result.DefaultSelection<Prisma.$payment_method_detailPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Order_status_Enum: {
  paid: 'paid',
  unpaid: 'unpaid'
};

export type Order_status_Enum = (typeof Order_status_Enum)[keyof typeof Order_status_Enum]


export const Bill_status_Enum: {
  ongoing: 'ongoing',
  completed: 'completed'
};

export type Bill_status_Enum = (typeof Bill_status_Enum)[keyof typeof Bill_status_Enum]

}

export type Order_status_Enum = $Enums.Order_status_Enum

export const Order_status_Enum: typeof $Enums.Order_status_Enum

export type Bill_status_Enum = $Enums.Bill_status_Enum

export const Bill_status_Enum: typeof $Enums.Bill_status_Enum

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<ExtArgs>;

  /**
   * `prisma.friends_order`: Exposes CRUD operations for the **friends_order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friends_orders
    * const friends_orders = await prisma.friends_order.findMany()
    * ```
    */
  get friends_order(): Prisma.friends_orderDelegate<ExtArgs>;

  /**
   * `prisma.friends`: Exposes CRUD operations for the **friends** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friends
    * const friends = await prisma.friends.findMany()
    * ```
    */
  get friends(): Prisma.friendsDelegate<ExtArgs>;

  /**
   * `prisma.bill`: Exposes CRUD operations for the **bill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bills
    * const bills = await prisma.bill.findMany()
    * ```
    */
  get bill(): Prisma.billDelegate<ExtArgs>;

  /**
   * `prisma.payment_method`: Exposes CRUD operations for the **payment_method** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payment_methods
    * const payment_methods = await prisma.payment_method.findMany()
    * ```
    */
  get payment_method(): Prisma.payment_methodDelegate<ExtArgs>;

  /**
   * `prisma.payment_method_detail`: Exposes CRUD operations for the **payment_method_detail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payment_method_details
    * const payment_method_details = await prisma.payment_method_detail.findMany()
    * ```
    */
  get payment_method_detail(): Prisma.payment_method_detailDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.10.2
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
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
    users: 'users',
    orders: 'orders',
    friends_order: 'friends_order',
    friends: 'friends',
    bill: 'bill',
    payment_method: 'payment_method',
    payment_method_detail: 'payment_method_detail'
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
      modelProps: 'users' | 'orders' | 'friends_order' | 'friends' | 'bill' | 'payment_method' | 'payment_method_detail'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      orders: {
        payload: Prisma.$ordersPayload<ExtArgs>
        fields: Prisma.ordersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ordersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findFirst: {
            args: Prisma.ordersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findMany: {
            args: Prisma.ordersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          create: {
            args: Prisma.ordersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          createMany: {
            args: Prisma.ordersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ordersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          update: {
            args: Prisma.ordersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          deleteMany: {
            args: Prisma.ordersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ordersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ordersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.ordersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ordersCountArgs<ExtArgs>,
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      friends_order: {
        payload: Prisma.$friends_orderPayload<ExtArgs>
        fields: Prisma.friends_orderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.friends_orderFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friends_orderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.friends_orderFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friends_orderPayload>
          }
          findFirst: {
            args: Prisma.friends_orderFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friends_orderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.friends_orderFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friends_orderPayload>
          }
          findMany: {
            args: Prisma.friends_orderFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friends_orderPayload>[]
          }
          create: {
            args: Prisma.friends_orderCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friends_orderPayload>
          }
          createMany: {
            args: Prisma.friends_orderCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.friends_orderDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friends_orderPayload>
          }
          update: {
            args: Prisma.friends_orderUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friends_orderPayload>
          }
          deleteMany: {
            args: Prisma.friends_orderDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.friends_orderUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.friends_orderUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friends_orderPayload>
          }
          aggregate: {
            args: Prisma.Friends_orderAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFriends_order>
          }
          groupBy: {
            args: Prisma.friends_orderGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Friends_orderGroupByOutputType>[]
          }
          count: {
            args: Prisma.friends_orderCountArgs<ExtArgs>,
            result: $Utils.Optional<Friends_orderCountAggregateOutputType> | number
          }
        }
      }
      friends: {
        payload: Prisma.$friendsPayload<ExtArgs>
        fields: Prisma.friendsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.friendsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friendsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.friendsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>
          }
          findFirst: {
            args: Prisma.friendsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friendsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.friendsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>
          }
          findMany: {
            args: Prisma.friendsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>[]
          }
          create: {
            args: Prisma.friendsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>
          }
          createMany: {
            args: Prisma.friendsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.friendsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>
          }
          update: {
            args: Prisma.friendsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>
          }
          deleteMany: {
            args: Prisma.friendsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.friendsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.friendsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$friendsPayload>
          }
          aggregate: {
            args: Prisma.FriendsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFriends>
          }
          groupBy: {
            args: Prisma.friendsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FriendsGroupByOutputType>[]
          }
          count: {
            args: Prisma.friendsCountArgs<ExtArgs>,
            result: $Utils.Optional<FriendsCountAggregateOutputType> | number
          }
        }
      }
      bill: {
        payload: Prisma.$billPayload<ExtArgs>
        fields: Prisma.billFieldRefs
        operations: {
          findUnique: {
            args: Prisma.billFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$billPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.billFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$billPayload>
          }
          findFirst: {
            args: Prisma.billFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$billPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.billFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$billPayload>
          }
          findMany: {
            args: Prisma.billFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$billPayload>[]
          }
          create: {
            args: Prisma.billCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$billPayload>
          }
          createMany: {
            args: Prisma.billCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.billDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$billPayload>
          }
          update: {
            args: Prisma.billUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$billPayload>
          }
          deleteMany: {
            args: Prisma.billDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.billUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.billUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$billPayload>
          }
          aggregate: {
            args: Prisma.BillAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBill>
          }
          groupBy: {
            args: Prisma.billGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BillGroupByOutputType>[]
          }
          count: {
            args: Prisma.billCountArgs<ExtArgs>,
            result: $Utils.Optional<BillCountAggregateOutputType> | number
          }
        }
      }
      payment_method: {
        payload: Prisma.$payment_methodPayload<ExtArgs>
        fields: Prisma.payment_methodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.payment_methodFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$payment_methodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.payment_methodFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$payment_methodPayload>
          }
          findFirst: {
            args: Prisma.payment_methodFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$payment_methodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.payment_methodFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$payment_methodPayload>
          }
          findMany: {
            args: Prisma.payment_methodFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$payment_methodPayload>[]
          }
          create: {
            args: Prisma.payment_methodCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$payment_methodPayload>
          }
          createMany: {
            args: Prisma.payment_methodCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.payment_methodDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$payment_methodPayload>
          }
          update: {
            args: Prisma.payment_methodUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$payment_methodPayload>
          }
          deleteMany: {
            args: Prisma.payment_methodDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.payment_methodUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.payment_methodUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$payment_methodPayload>
          }
          aggregate: {
            args: Prisma.Payment_methodAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePayment_method>
          }
          groupBy: {
            args: Prisma.payment_methodGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Payment_methodGroupByOutputType>[]
          }
          count: {
            args: Prisma.payment_methodCountArgs<ExtArgs>,
            result: $Utils.Optional<Payment_methodCountAggregateOutputType> | number
          }
        }
      }
      payment_method_detail: {
        payload: Prisma.$payment_method_detailPayload<ExtArgs>
        fields: Prisma.payment_method_detailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.payment_method_detailFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$payment_method_detailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.payment_method_detailFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$payment_method_detailPayload>
          }
          findFirst: {
            args: Prisma.payment_method_detailFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$payment_method_detailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.payment_method_detailFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$payment_method_detailPayload>
          }
          findMany: {
            args: Prisma.payment_method_detailFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$payment_method_detailPayload>[]
          }
          create: {
            args: Prisma.payment_method_detailCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$payment_method_detailPayload>
          }
          createMany: {
            args: Prisma.payment_method_detailCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.payment_method_detailDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$payment_method_detailPayload>
          }
          update: {
            args: Prisma.payment_method_detailUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$payment_method_detailPayload>
          }
          deleteMany: {
            args: Prisma.payment_method_detailDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.payment_method_detailUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.payment_method_detailUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$payment_method_detailPayload>
          }
          aggregate: {
            args: Prisma.Payment_method_detailAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePayment_method_detail>
          }
          groupBy: {
            args: Prisma.payment_method_detailGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Payment_method_detailGroupByOutputType>[]
          }
          count: {
            args: Prisma.payment_method_detailCountArgs<ExtArgs>,
            result: $Utils.Optional<Payment_method_detailCountAggregateOutputType> | number
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    friends: number
    orders: number
    bill: number
    payment_method_detail: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    friends?: boolean | UsersCountOutputTypeCountFriendsArgs
    orders?: boolean | UsersCountOutputTypeCountOrdersArgs
    bill?: boolean | UsersCountOutputTypeCountBillArgs
    payment_method_detail?: boolean | UsersCountOutputTypeCountPayment_method_detailArgs
  }

  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFriendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: friendsWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: billWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPayment_method_detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: payment_method_detailWhereInput
  }



  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    friends_order: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    friends_order?: boolean | OrdersCountOutputTypeCountFriends_orderArgs
  }

  // Custom InputTypes

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountFriends_orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: friends_orderWhereInput
  }



  /**
   * Count Type FriendsCountOutputType
   */

  export type FriendsCountOutputType = {
    friends_order: number
  }

  export type FriendsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    friends_order?: boolean | FriendsCountOutputTypeCountFriends_orderArgs
  }

  // Custom InputTypes

  /**
   * FriendsCountOutputType without action
   */
  export type FriendsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendsCountOutputType
     */
    select?: FriendsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * FriendsCountOutputType without action
   */
  export type FriendsCountOutputTypeCountFriends_orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: friends_orderWhereInput
  }



  /**
   * Count Type BillCountOutputType
   */

  export type BillCountOutputType = {
    orders: number
  }

  export type BillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | BillCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes

  /**
   * BillCountOutputType without action
   */
  export type BillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillCountOutputType
     */
    select?: BillCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BillCountOutputType without action
   */
  export type BillCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }



  /**
   * Count Type Payment_methodCountOutputType
   */

  export type Payment_methodCountOutputType = {
    payment_method_detail: number
  }

  export type Payment_methodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment_method_detail?: boolean | Payment_methodCountOutputTypeCountPayment_method_detailArgs
  }

  // Custom InputTypes

  /**
   * Payment_methodCountOutputType without action
   */
  export type Payment_methodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment_methodCountOutputType
     */
    select?: Payment_methodCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Payment_methodCountOutputType without action
   */
  export type Payment_methodCountOutputTypeCountPayment_method_detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: payment_method_detailWhereInput
  }



  /**
   * Count Type Payment_method_detailCountOutputType
   */

  export type Payment_method_detailCountOutputType = {
    bill: number
  }

  export type Payment_method_detailCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | Payment_method_detailCountOutputTypeCountBillArgs
  }

  // Custom InputTypes

  /**
   * Payment_method_detailCountOutputType without action
   */
  export type Payment_method_detailCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment_method_detailCountOutputType
     */
    select?: Payment_method_detailCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Payment_method_detailCountOutputType without action
   */
  export type Payment_method_detailCountOutputTypeCountBillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: billWhereInput
  }



  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    fullname: string | null
    phone_number: string | null
    email: string | null
    password: string | null
    bio: string | null
    dob: Date | null
    photo_profile: string | null
    created_at: Date | null
    update_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    fullname: string | null
    phone_number: string | null
    email: string | null
    password: string | null
    bio: string | null
    dob: Date | null
    photo_profile: string | null
    created_at: Date | null
    update_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    fullname: number
    phone_number: number
    email: number
    password: number
    bio: number
    dob: number
    photo_profile: number
    created_at: number
    update_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    fullname?: true
    phone_number?: true
    email?: true
    password?: true
    bio?: true
    dob?: true
    photo_profile?: true
    created_at?: true
    update_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    fullname?: true
    phone_number?: true
    email?: true
    password?: true
    bio?: true
    dob?: true
    photo_profile?: true
    created_at?: true
    update_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    fullname?: true
    phone_number?: true
    email?: true
    password?: true
    bio?: true
    dob?: true
    photo_profile?: true
    created_at?: true
    update_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string
    fullname: string
    phone_number: string
    email: string | null
    password: string | null
    bio: string | null
    dob: Date | null
    photo_profile: string | null
    created_at: Date
    update_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    fullname?: boolean
    phone_number?: boolean
    email?: boolean
    password?: boolean
    bio?: boolean
    dob?: boolean
    photo_profile?: boolean
    created_at?: boolean
    update_at?: boolean
    friends?: boolean | users$friendsArgs<ExtArgs>
    orders?: boolean | users$ordersArgs<ExtArgs>
    bill?: boolean | users$billArgs<ExtArgs>
    payment_method_detail?: boolean | users$payment_method_detailArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    fullname?: boolean
    phone_number?: boolean
    email?: boolean
    password?: boolean
    bio?: boolean
    dob?: boolean
    photo_profile?: boolean
    created_at?: boolean
    update_at?: boolean
  }

  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    friends?: boolean | users$friendsArgs<ExtArgs>
    orders?: boolean | users$ordersArgs<ExtArgs>
    bill?: boolean | users$billArgs<ExtArgs>
    payment_method_detail?: boolean | users$payment_method_detailArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      friends: Prisma.$friendsPayload<ExtArgs>[]
      orders: Prisma.$ordersPayload<ExtArgs>[]
      bill: Prisma.$billPayload<ExtArgs>[]
      payment_method_detail: Prisma.$payment_method_detailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      fullname: string
      phone_number: string
      email: string | null
      password: string | null
      bio: string | null
      dob: Date | null
      photo_profile: string | null
      created_at: Date
      update_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usersCreateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usersDeleteArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpsertArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    friends<T extends users$friendsArgs<ExtArgs> = {}>(args?: Subset<T, users$friendsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, 'findMany'> | Null>;

    orders<T extends users$ordersArgs<ExtArgs> = {}>(args?: Subset<T, users$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'findMany'> | Null>;

    bill<T extends users$billArgs<ExtArgs> = {}>(args?: Subset<T, users$billArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$billPayload<ExtArgs>, T, 'findMany'> | Null>;

    payment_method_detail<T extends users$payment_method_detailArgs<ExtArgs> = {}>(args?: Subset<T, users$payment_method_detailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payment_method_detailPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly fullname: FieldRef<"users", 'String'>
    readonly phone_number: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly bio: FieldRef<"users", 'String'>
    readonly dob: FieldRef<"users", 'DateTime'>
    readonly photo_profile: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly update_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }


  /**
   * users.friends
   */
  export type users$friendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friendsInclude<ExtArgs> | null
    where?: friendsWhereInput
    orderBy?: friendsOrderByWithRelationInput | friendsOrderByWithRelationInput[]
    cursor?: friendsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }


  /**
   * users.orders
   */
  export type users$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }


  /**
   * users.bill
   */
  export type users$billArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill
     */
    select?: billSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billInclude<ExtArgs> | null
    where?: billWhereInput
    orderBy?: billOrderByWithRelationInput | billOrderByWithRelationInput[]
    cursor?: billWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }


  /**
   * users.payment_method_detail
   */
  export type users$payment_method_detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method_detail
     */
    select?: payment_method_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_method_detailInclude<ExtArgs> | null
    where?: payment_method_detailWhereInput
    orderBy?: payment_method_detailOrderByWithRelationInput | payment_method_detailOrderByWithRelationInput[]
    cursor?: payment_method_detailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Payment_method_detailScalarFieldEnum | Payment_method_detailScalarFieldEnum[]
  }


  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
  }



  /**
   * Model orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    bill_id: number | null
    qty: number | null
    price: number | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    bill_id: number | null
    qty: number | null
    price: bigint | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    bill_id: number | null
    menu_name: string | null
    qty: number | null
    price: bigint | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    bill_id: number | null
    menu_name: string | null
    qty: number | null
    price: bigint | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    user_id: number
    bill_id: number
    menu_name: number
    qty: number
    price: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
    user_id?: true
    bill_id?: true
    qty?: true
    price?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
    user_id?: true
    bill_id?: true
    qty?: true
    price?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    user_id?: true
    bill_id?: true
    menu_name?: true
    qty?: true
    price?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    user_id?: true
    bill_id?: true
    menu_name?: true
    qty?: true
    price?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    user_id?: true
    bill_id?: true
    menu_name?: true
    qty?: true
    price?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to aggregate.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type ordersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithAggregationInput | ordersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: number
    user_id: number | null
    bill_id: number | null
    menu_name: string
    qty: number
    price: bigint
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    bill_id?: boolean
    menu_name?: boolean
    qty?: boolean
    price?: boolean
    users?: boolean | orders$usersArgs<ExtArgs>
    bill?: boolean | orders$billArgs<ExtArgs>
    friends_order?: boolean | orders$friends_orderArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectScalar = {
    id?: boolean
    user_id?: boolean
    bill_id?: boolean
    menu_name?: boolean
    qty?: boolean
    price?: boolean
  }

  export type ordersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | orders$usersArgs<ExtArgs>
    bill?: boolean | orders$billArgs<ExtArgs>
    friends_order?: boolean | orders$friends_orderArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orders"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
      bill: Prisma.$billPayload<ExtArgs> | null
      friends_order: Prisma.$friends_orderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      bill_id: number | null
      menu_name: string
      qty: number
      price: bigint
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }


  type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = $Result.GetResult<Prisma.$ordersPayload, S>

  type ordersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ordersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface ordersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orders'], meta: { name: 'orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ordersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Orders that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ordersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ordersFindFirstArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ordersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ordersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
    **/
    create<T extends ordersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ordersCreateArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Orders.
     *     @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const orders = await prisma.orders.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ordersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ordersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
    **/
    delete<T extends ordersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ordersDeleteArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ordersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ordersUpdateArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ordersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ordersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
    **/
    upsert<T extends ordersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ordersUpsertArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersGroupByArgs} args - Group by arguments.
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
      T extends ordersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ordersGroupByArgs['orderBy'] }
        : { orderBy?: ordersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orders model
   */
  readonly fields: ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ordersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends orders$usersArgs<ExtArgs> = {}>(args?: Subset<T, orders$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    bill<T extends orders$billArgs<ExtArgs> = {}>(args?: Subset<T, orders$billArgs<ExtArgs>>): Prisma__billClient<$Result.GetResult<Prisma.$billPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    friends_order<T extends orders$friends_orderArgs<ExtArgs> = {}>(args?: Subset<T, orders$friends_orderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$friends_orderPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the orders model
   */ 
  interface ordersFieldRefs {
    readonly id: FieldRef<"orders", 'Int'>
    readonly user_id: FieldRef<"orders", 'Int'>
    readonly bill_id: FieldRef<"orders", 'Int'>
    readonly menu_name: FieldRef<"orders", 'String'>
    readonly qty: FieldRef<"orders", 'Int'>
    readonly price: FieldRef<"orders", 'BigInt'>
  }
    

  // Custom InputTypes

  /**
   * orders findUnique
   */
  export type ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }


  /**
   * orders findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }


  /**
   * orders findFirst
   */
  export type ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }


  /**
   * orders findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }


  /**
   * orders findMany
   */
  export type ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }


  /**
   * orders create
   */
  export type ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to create a orders.
     */
    data: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }


  /**
   * orders createMany
   */
  export type ordersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * orders update
   */
  export type ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to update a orders.
     */
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     */
    where: ordersWhereUniqueInput
  }


  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
  }


  /**
   * orders upsert
   */
  export type ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The filter to search for the orders to update in case it exists.
     */
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     */
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }


  /**
   * orders delete
   */
  export type ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter which orders to delete.
     */
    where: ordersWhereUniqueInput
  }


  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: ordersWhereInput
  }


  /**
   * orders.users
   */
  export type orders$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }


  /**
   * orders.bill
   */
  export type orders$billArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill
     */
    select?: billSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billInclude<ExtArgs> | null
    where?: billWhereInput
  }


  /**
   * orders.friends_order
   */
  export type orders$friends_orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends_order
     */
    select?: friends_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friends_orderInclude<ExtArgs> | null
    where?: friends_orderWhereInput
    orderBy?: friends_orderOrderByWithRelationInput | friends_orderOrderByWithRelationInput[]
    cursor?: friends_orderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Friends_orderScalarFieldEnum | Friends_orderScalarFieldEnum[]
  }


  /**
   * orders without action
   */
  export type ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
  }



  /**
   * Model friends_order
   */

  export type AggregateFriends_order = {
    _count: Friends_orderCountAggregateOutputType | null
    _avg: Friends_orderAvgAggregateOutputType | null
    _sum: Friends_orderSumAggregateOutputType | null
    _min: Friends_orderMinAggregateOutputType | null
    _max: Friends_orderMaxAggregateOutputType | null
  }

  export type Friends_orderAvgAggregateOutputType = {
    id: number | null
    orders_id: number | null
    friends_id: number | null
    friend_order_price: number | null
  }

  export type Friends_orderSumAggregateOutputType = {
    id: number | null
    orders_id: number | null
    friends_id: number | null
    friend_order_price: bigint | null
  }

  export type Friends_orderMinAggregateOutputType = {
    id: number | null
    orders_id: number | null
    friends_id: number | null
    friend_order_price: bigint | null
    status: $Enums.Order_status_Enum | null
    created_at: Date | null
    update_at: Date | null
  }

  export type Friends_orderMaxAggregateOutputType = {
    id: number | null
    orders_id: number | null
    friends_id: number | null
    friend_order_price: bigint | null
    status: $Enums.Order_status_Enum | null
    created_at: Date | null
    update_at: Date | null
  }

  export type Friends_orderCountAggregateOutputType = {
    id: number
    orders_id: number
    friends_id: number
    friend_order_price: number
    status: number
    created_at: number
    update_at: number
    _all: number
  }


  export type Friends_orderAvgAggregateInputType = {
    id?: true
    orders_id?: true
    friends_id?: true
    friend_order_price?: true
  }

  export type Friends_orderSumAggregateInputType = {
    id?: true
    orders_id?: true
    friends_id?: true
    friend_order_price?: true
  }

  export type Friends_orderMinAggregateInputType = {
    id?: true
    orders_id?: true
    friends_id?: true
    friend_order_price?: true
    status?: true
    created_at?: true
    update_at?: true
  }

  export type Friends_orderMaxAggregateInputType = {
    id?: true
    orders_id?: true
    friends_id?: true
    friend_order_price?: true
    status?: true
    created_at?: true
    update_at?: true
  }

  export type Friends_orderCountAggregateInputType = {
    id?: true
    orders_id?: true
    friends_id?: true
    friend_order_price?: true
    status?: true
    created_at?: true
    update_at?: true
    _all?: true
  }

  export type Friends_orderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which friends_order to aggregate.
     */
    where?: friends_orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friends_orders to fetch.
     */
    orderBy?: friends_orderOrderByWithRelationInput | friends_orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: friends_orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friends_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friends_orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned friends_orders
    **/
    _count?: true | Friends_orderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Friends_orderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Friends_orderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Friends_orderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Friends_orderMaxAggregateInputType
  }

  export type GetFriends_orderAggregateType<T extends Friends_orderAggregateArgs> = {
        [P in keyof T & keyof AggregateFriends_order]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriends_order[P]>
      : GetScalarType<T[P], AggregateFriends_order[P]>
  }




  export type friends_orderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: friends_orderWhereInput
    orderBy?: friends_orderOrderByWithAggregationInput | friends_orderOrderByWithAggregationInput[]
    by: Friends_orderScalarFieldEnum[] | Friends_orderScalarFieldEnum
    having?: friends_orderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Friends_orderCountAggregateInputType | true
    _avg?: Friends_orderAvgAggregateInputType
    _sum?: Friends_orderSumAggregateInputType
    _min?: Friends_orderMinAggregateInputType
    _max?: Friends_orderMaxAggregateInputType
  }

  export type Friends_orderGroupByOutputType = {
    id: number
    orders_id: number | null
    friends_id: number | null
    friend_order_price: bigint
    status: $Enums.Order_status_Enum
    created_at: Date
    update_at: Date
    _count: Friends_orderCountAggregateOutputType | null
    _avg: Friends_orderAvgAggregateOutputType | null
    _sum: Friends_orderSumAggregateOutputType | null
    _min: Friends_orderMinAggregateOutputType | null
    _max: Friends_orderMaxAggregateOutputType | null
  }

  type GetFriends_orderGroupByPayload<T extends friends_orderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Friends_orderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Friends_orderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Friends_orderGroupByOutputType[P]>
            : GetScalarType<T[P], Friends_orderGroupByOutputType[P]>
        }
      >
    >


  export type friends_orderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orders_id?: boolean
    friends_id?: boolean
    friend_order_price?: boolean
    status?: boolean
    created_at?: boolean
    update_at?: boolean
    orders?: boolean | friends_order$ordersArgs<ExtArgs>
    friends?: boolean | friends_order$friendsArgs<ExtArgs>
  }, ExtArgs["result"]["friends_order"]>

  export type friends_orderSelectScalar = {
    id?: boolean
    orders_id?: boolean
    friends_id?: boolean
    friend_order_price?: boolean
    status?: boolean
    created_at?: boolean
    update_at?: boolean
  }

  export type friends_orderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | friends_order$ordersArgs<ExtArgs>
    friends?: boolean | friends_order$friendsArgs<ExtArgs>
  }


  export type $friends_orderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "friends_order"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs> | null
      friends: Prisma.$friendsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orders_id: number | null
      friends_id: number | null
      friend_order_price: bigint
      status: $Enums.Order_status_Enum
      created_at: Date
      update_at: Date
    }, ExtArgs["result"]["friends_order"]>
    composites: {}
  }


  type friends_orderGetPayload<S extends boolean | null | undefined | friends_orderDefaultArgs> = $Result.GetResult<Prisma.$friends_orderPayload, S>

  type friends_orderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<friends_orderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Friends_orderCountAggregateInputType | true
    }

  export interface friends_orderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['friends_order'], meta: { name: 'friends_order' } }
    /**
     * Find zero or one Friends_order that matches the filter.
     * @param {friends_orderFindUniqueArgs} args - Arguments to find a Friends_order
     * @example
     * // Get one Friends_order
     * const friends_order = await prisma.friends_order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends friends_orderFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, friends_orderFindUniqueArgs<ExtArgs>>
    ): Prisma__friends_orderClient<$Result.GetResult<Prisma.$friends_orderPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Friends_order that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {friends_orderFindUniqueOrThrowArgs} args - Arguments to find a Friends_order
     * @example
     * // Get one Friends_order
     * const friends_order = await prisma.friends_order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends friends_orderFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, friends_orderFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__friends_orderClient<$Result.GetResult<Prisma.$friends_orderPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Friends_order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friends_orderFindFirstArgs} args - Arguments to find a Friends_order
     * @example
     * // Get one Friends_order
     * const friends_order = await prisma.friends_order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends friends_orderFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, friends_orderFindFirstArgs<ExtArgs>>
    ): Prisma__friends_orderClient<$Result.GetResult<Prisma.$friends_orderPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Friends_order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friends_orderFindFirstOrThrowArgs} args - Arguments to find a Friends_order
     * @example
     * // Get one Friends_order
     * const friends_order = await prisma.friends_order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends friends_orderFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, friends_orderFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__friends_orderClient<$Result.GetResult<Prisma.$friends_orderPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Friends_orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friends_orderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friends_orders
     * const friends_orders = await prisma.friends_order.findMany()
     * 
     * // Get first 10 Friends_orders
     * const friends_orders = await prisma.friends_order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friends_orderWithIdOnly = await prisma.friends_order.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends friends_orderFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, friends_orderFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$friends_orderPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Friends_order.
     * @param {friends_orderCreateArgs} args - Arguments to create a Friends_order.
     * @example
     * // Create one Friends_order
     * const Friends_order = await prisma.friends_order.create({
     *   data: {
     *     // ... data to create a Friends_order
     *   }
     * })
     * 
    **/
    create<T extends friends_orderCreateArgs<ExtArgs>>(
      args: SelectSubset<T, friends_orderCreateArgs<ExtArgs>>
    ): Prisma__friends_orderClient<$Result.GetResult<Prisma.$friends_orderPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Friends_orders.
     *     @param {friends_orderCreateManyArgs} args - Arguments to create many Friends_orders.
     *     @example
     *     // Create many Friends_orders
     *     const friends_order = await prisma.friends_order.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends friends_orderCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, friends_orderCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Friends_order.
     * @param {friends_orderDeleteArgs} args - Arguments to delete one Friends_order.
     * @example
     * // Delete one Friends_order
     * const Friends_order = await prisma.friends_order.delete({
     *   where: {
     *     // ... filter to delete one Friends_order
     *   }
     * })
     * 
    **/
    delete<T extends friends_orderDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, friends_orderDeleteArgs<ExtArgs>>
    ): Prisma__friends_orderClient<$Result.GetResult<Prisma.$friends_orderPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Friends_order.
     * @param {friends_orderUpdateArgs} args - Arguments to update one Friends_order.
     * @example
     * // Update one Friends_order
     * const friends_order = await prisma.friends_order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends friends_orderUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, friends_orderUpdateArgs<ExtArgs>>
    ): Prisma__friends_orderClient<$Result.GetResult<Prisma.$friends_orderPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Friends_orders.
     * @param {friends_orderDeleteManyArgs} args - Arguments to filter Friends_orders to delete.
     * @example
     * // Delete a few Friends_orders
     * const { count } = await prisma.friends_order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends friends_orderDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, friends_orderDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friends_orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friends_orderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friends_orders
     * const friends_order = await prisma.friends_order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends friends_orderUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, friends_orderUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Friends_order.
     * @param {friends_orderUpsertArgs} args - Arguments to update or create a Friends_order.
     * @example
     * // Update or create a Friends_order
     * const friends_order = await prisma.friends_order.upsert({
     *   create: {
     *     // ... data to create a Friends_order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friends_order we want to update
     *   }
     * })
    **/
    upsert<T extends friends_orderUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, friends_orderUpsertArgs<ExtArgs>>
    ): Prisma__friends_orderClient<$Result.GetResult<Prisma.$friends_orderPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Friends_orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friends_orderCountArgs} args - Arguments to filter Friends_orders to count.
     * @example
     * // Count the number of Friends_orders
     * const count = await prisma.friends_order.count({
     *   where: {
     *     // ... the filter for the Friends_orders we want to count
     *   }
     * })
    **/
    count<T extends friends_orderCountArgs>(
      args?: Subset<T, friends_orderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Friends_orderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friends_order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Friends_orderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Friends_orderAggregateArgs>(args: Subset<T, Friends_orderAggregateArgs>): Prisma.PrismaPromise<GetFriends_orderAggregateType<T>>

    /**
     * Group by Friends_order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friends_orderGroupByArgs} args - Group by arguments.
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
      T extends friends_orderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: friends_orderGroupByArgs['orderBy'] }
        : { orderBy?: friends_orderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, friends_orderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriends_orderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the friends_order model
   */
  readonly fields: friends_orderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for friends_order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__friends_orderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    orders<T extends friends_order$ordersArgs<ExtArgs> = {}>(args?: Subset<T, friends_order$ordersArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    friends<T extends friends_order$friendsArgs<ExtArgs> = {}>(args?: Subset<T, friends_order$friendsArgs<ExtArgs>>): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
   * Fields of the friends_order model
   */ 
  interface friends_orderFieldRefs {
    readonly id: FieldRef<"friends_order", 'Int'>
    readonly orders_id: FieldRef<"friends_order", 'Int'>
    readonly friends_id: FieldRef<"friends_order", 'Int'>
    readonly friend_order_price: FieldRef<"friends_order", 'BigInt'>
    readonly status: FieldRef<"friends_order", 'Order_status_Enum'>
    readonly created_at: FieldRef<"friends_order", 'DateTime'>
    readonly update_at: FieldRef<"friends_order", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * friends_order findUnique
   */
  export type friends_orderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends_order
     */
    select?: friends_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friends_orderInclude<ExtArgs> | null
    /**
     * Filter, which friends_order to fetch.
     */
    where: friends_orderWhereUniqueInput
  }


  /**
   * friends_order findUniqueOrThrow
   */
  export type friends_orderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends_order
     */
    select?: friends_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friends_orderInclude<ExtArgs> | null
    /**
     * Filter, which friends_order to fetch.
     */
    where: friends_orderWhereUniqueInput
  }


  /**
   * friends_order findFirst
   */
  export type friends_orderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends_order
     */
    select?: friends_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friends_orderInclude<ExtArgs> | null
    /**
     * Filter, which friends_order to fetch.
     */
    where?: friends_orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friends_orders to fetch.
     */
    orderBy?: friends_orderOrderByWithRelationInput | friends_orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for friends_orders.
     */
    cursor?: friends_orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friends_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friends_orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of friends_orders.
     */
    distinct?: Friends_orderScalarFieldEnum | Friends_orderScalarFieldEnum[]
  }


  /**
   * friends_order findFirstOrThrow
   */
  export type friends_orderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends_order
     */
    select?: friends_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friends_orderInclude<ExtArgs> | null
    /**
     * Filter, which friends_order to fetch.
     */
    where?: friends_orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friends_orders to fetch.
     */
    orderBy?: friends_orderOrderByWithRelationInput | friends_orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for friends_orders.
     */
    cursor?: friends_orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friends_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friends_orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of friends_orders.
     */
    distinct?: Friends_orderScalarFieldEnum | Friends_orderScalarFieldEnum[]
  }


  /**
   * friends_order findMany
   */
  export type friends_orderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends_order
     */
    select?: friends_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friends_orderInclude<ExtArgs> | null
    /**
     * Filter, which friends_orders to fetch.
     */
    where?: friends_orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friends_orders to fetch.
     */
    orderBy?: friends_orderOrderByWithRelationInput | friends_orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing friends_orders.
     */
    cursor?: friends_orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friends_orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friends_orders.
     */
    skip?: number
    distinct?: Friends_orderScalarFieldEnum | Friends_orderScalarFieldEnum[]
  }


  /**
   * friends_order create
   */
  export type friends_orderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends_order
     */
    select?: friends_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friends_orderInclude<ExtArgs> | null
    /**
     * The data needed to create a friends_order.
     */
    data: XOR<friends_orderCreateInput, friends_orderUncheckedCreateInput>
  }


  /**
   * friends_order createMany
   */
  export type friends_orderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many friends_orders.
     */
    data: friends_orderCreateManyInput | friends_orderCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * friends_order update
   */
  export type friends_orderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends_order
     */
    select?: friends_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friends_orderInclude<ExtArgs> | null
    /**
     * The data needed to update a friends_order.
     */
    data: XOR<friends_orderUpdateInput, friends_orderUncheckedUpdateInput>
    /**
     * Choose, which friends_order to update.
     */
    where: friends_orderWhereUniqueInput
  }


  /**
   * friends_order updateMany
   */
  export type friends_orderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update friends_orders.
     */
    data: XOR<friends_orderUpdateManyMutationInput, friends_orderUncheckedUpdateManyInput>
    /**
     * Filter which friends_orders to update
     */
    where?: friends_orderWhereInput
  }


  /**
   * friends_order upsert
   */
  export type friends_orderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends_order
     */
    select?: friends_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friends_orderInclude<ExtArgs> | null
    /**
     * The filter to search for the friends_order to update in case it exists.
     */
    where: friends_orderWhereUniqueInput
    /**
     * In case the friends_order found by the `where` argument doesn't exist, create a new friends_order with this data.
     */
    create: XOR<friends_orderCreateInput, friends_orderUncheckedCreateInput>
    /**
     * In case the friends_order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<friends_orderUpdateInput, friends_orderUncheckedUpdateInput>
  }


  /**
   * friends_order delete
   */
  export type friends_orderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends_order
     */
    select?: friends_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friends_orderInclude<ExtArgs> | null
    /**
     * Filter which friends_order to delete.
     */
    where: friends_orderWhereUniqueInput
  }


  /**
   * friends_order deleteMany
   */
  export type friends_orderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which friends_orders to delete
     */
    where?: friends_orderWhereInput
  }


  /**
   * friends_order.orders
   */
  export type friends_order$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
  }


  /**
   * friends_order.friends
   */
  export type friends_order$friendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friendsInclude<ExtArgs> | null
    where?: friendsWhereInput
  }


  /**
   * friends_order without action
   */
  export type friends_orderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends_order
     */
    select?: friends_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friends_orderInclude<ExtArgs> | null
  }



  /**
   * Model friends
   */

  export type AggregateFriends = {
    _count: FriendsCountAggregateOutputType | null
    _avg: FriendsAvgAggregateOutputType | null
    _sum: FriendsSumAggregateOutputType | null
    _min: FriendsMinAggregateOutputType | null
    _max: FriendsMaxAggregateOutputType | null
  }

  export type FriendsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type FriendsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type FriendsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    friends_name: string | null
    friends_photo: string | null
  }

  export type FriendsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    friends_name: string | null
    friends_photo: string | null
  }

  export type FriendsCountAggregateOutputType = {
    id: number
    user_id: number
    friends_name: number
    friends_photo: number
    _all: number
  }


  export type FriendsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type FriendsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type FriendsMinAggregateInputType = {
    id?: true
    user_id?: true
    friends_name?: true
    friends_photo?: true
  }

  export type FriendsMaxAggregateInputType = {
    id?: true
    user_id?: true
    friends_name?: true
    friends_photo?: true
  }

  export type FriendsCountAggregateInputType = {
    id?: true
    user_id?: true
    friends_name?: true
    friends_photo?: true
    _all?: true
  }

  export type FriendsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which friends to aggregate.
     */
    where?: friendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friends to fetch.
     */
    orderBy?: friendsOrderByWithRelationInput | friendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: friendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned friends
    **/
    _count?: true | FriendsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FriendsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FriendsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendsMaxAggregateInputType
  }

  export type GetFriendsAggregateType<T extends FriendsAggregateArgs> = {
        [P in keyof T & keyof AggregateFriends]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriends[P]>
      : GetScalarType<T[P], AggregateFriends[P]>
  }




  export type friendsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: friendsWhereInput
    orderBy?: friendsOrderByWithAggregationInput | friendsOrderByWithAggregationInput[]
    by: FriendsScalarFieldEnum[] | FriendsScalarFieldEnum
    having?: friendsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendsCountAggregateInputType | true
    _avg?: FriendsAvgAggregateInputType
    _sum?: FriendsSumAggregateInputType
    _min?: FriendsMinAggregateInputType
    _max?: FriendsMaxAggregateInputType
  }

  export type FriendsGroupByOutputType = {
    id: number
    user_id: number | null
    friends_name: string
    friends_photo: string | null
    _count: FriendsCountAggregateOutputType | null
    _avg: FriendsAvgAggregateOutputType | null
    _sum: FriendsSumAggregateOutputType | null
    _min: FriendsMinAggregateOutputType | null
    _max: FriendsMaxAggregateOutputType | null
  }

  type GetFriendsGroupByPayload<T extends friendsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendsGroupByOutputType[P]>
            : GetScalarType<T[P], FriendsGroupByOutputType[P]>
        }
      >
    >


  export type friendsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    friends_name?: boolean
    friends_photo?: boolean
    users?: boolean | friends$usersArgs<ExtArgs>
    friends_order?: boolean | friends$friends_orderArgs<ExtArgs>
    _count?: boolean | FriendsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friends"]>

  export type friendsSelectScalar = {
    id?: boolean
    user_id?: boolean
    friends_name?: boolean
    friends_photo?: boolean
  }

  export type friendsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | friends$usersArgs<ExtArgs>
    friends_order?: boolean | friends$friends_orderArgs<ExtArgs>
    _count?: boolean | FriendsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $friendsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "friends"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
      friends_order: Prisma.$friends_orderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      friends_name: string
      friends_photo: string | null
    }, ExtArgs["result"]["friends"]>
    composites: {}
  }


  type friendsGetPayload<S extends boolean | null | undefined | friendsDefaultArgs> = $Result.GetResult<Prisma.$friendsPayload, S>

  type friendsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<friendsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FriendsCountAggregateInputType | true
    }

  export interface friendsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['friends'], meta: { name: 'friends' } }
    /**
     * Find zero or one Friends that matches the filter.
     * @param {friendsFindUniqueArgs} args - Arguments to find a Friends
     * @example
     * // Get one Friends
     * const friends = await prisma.friends.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends friendsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, friendsFindUniqueArgs<ExtArgs>>
    ): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Friends that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {friendsFindUniqueOrThrowArgs} args - Arguments to find a Friends
     * @example
     * // Get one Friends
     * const friends = await prisma.friends.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends friendsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, friendsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Friends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendsFindFirstArgs} args - Arguments to find a Friends
     * @example
     * // Get one Friends
     * const friends = await prisma.friends.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends friendsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, friendsFindFirstArgs<ExtArgs>>
    ): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Friends that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendsFindFirstOrThrowArgs} args - Arguments to find a Friends
     * @example
     * // Get one Friends
     * const friends = await prisma.friends.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends friendsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, friendsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Friends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friends
     * const friends = await prisma.friends.findMany()
     * 
     * // Get first 10 Friends
     * const friends = await prisma.friends.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendsWithIdOnly = await prisma.friends.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends friendsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, friendsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Friends.
     * @param {friendsCreateArgs} args - Arguments to create a Friends.
     * @example
     * // Create one Friends
     * const Friends = await prisma.friends.create({
     *   data: {
     *     // ... data to create a Friends
     *   }
     * })
     * 
    **/
    create<T extends friendsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, friendsCreateArgs<ExtArgs>>
    ): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Friends.
     *     @param {friendsCreateManyArgs} args - Arguments to create many Friends.
     *     @example
     *     // Create many Friends
     *     const friends = await prisma.friends.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends friendsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, friendsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Friends.
     * @param {friendsDeleteArgs} args - Arguments to delete one Friends.
     * @example
     * // Delete one Friends
     * const Friends = await prisma.friends.delete({
     *   where: {
     *     // ... filter to delete one Friends
     *   }
     * })
     * 
    **/
    delete<T extends friendsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, friendsDeleteArgs<ExtArgs>>
    ): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Friends.
     * @param {friendsUpdateArgs} args - Arguments to update one Friends.
     * @example
     * // Update one Friends
     * const friends = await prisma.friends.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends friendsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, friendsUpdateArgs<ExtArgs>>
    ): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Friends.
     * @param {friendsDeleteManyArgs} args - Arguments to filter Friends to delete.
     * @example
     * // Delete a few Friends
     * const { count } = await prisma.friends.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends friendsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, friendsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friends
     * const friends = await prisma.friends.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends friendsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, friendsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Friends.
     * @param {friendsUpsertArgs} args - Arguments to update or create a Friends.
     * @example
     * // Update or create a Friends
     * const friends = await prisma.friends.upsert({
     *   create: {
     *     // ... data to create a Friends
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friends we want to update
     *   }
     * })
    **/
    upsert<T extends friendsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, friendsUpsertArgs<ExtArgs>>
    ): Prisma__friendsClient<$Result.GetResult<Prisma.$friendsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendsCountArgs} args - Arguments to filter Friends to count.
     * @example
     * // Count the number of Friends
     * const count = await prisma.friends.count({
     *   where: {
     *     // ... the filter for the Friends we want to count
     *   }
     * })
    **/
    count<T extends friendsCountArgs>(
      args?: Subset<T, friendsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FriendsAggregateArgs>(args: Subset<T, FriendsAggregateArgs>): Prisma.PrismaPromise<GetFriendsAggregateType<T>>

    /**
     * Group by Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendsGroupByArgs} args - Group by arguments.
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
      T extends friendsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: friendsGroupByArgs['orderBy'] }
        : { orderBy?: friendsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, friendsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the friends model
   */
  readonly fields: friendsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for friends.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__friendsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends friends$usersArgs<ExtArgs> = {}>(args?: Subset<T, friends$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    friends_order<T extends friends$friends_orderArgs<ExtArgs> = {}>(args?: Subset<T, friends$friends_orderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$friends_orderPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the friends model
   */ 
  interface friendsFieldRefs {
    readonly id: FieldRef<"friends", 'Int'>
    readonly user_id: FieldRef<"friends", 'Int'>
    readonly friends_name: FieldRef<"friends", 'String'>
    readonly friends_photo: FieldRef<"friends", 'String'>
  }
    

  // Custom InputTypes

  /**
   * friends findUnique
   */
  export type friendsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * Filter, which friends to fetch.
     */
    where: friendsWhereUniqueInput
  }


  /**
   * friends findUniqueOrThrow
   */
  export type friendsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * Filter, which friends to fetch.
     */
    where: friendsWhereUniqueInput
  }


  /**
   * friends findFirst
   */
  export type friendsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * Filter, which friends to fetch.
     */
    where?: friendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friends to fetch.
     */
    orderBy?: friendsOrderByWithRelationInput | friendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for friends.
     */
    cursor?: friendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of friends.
     */
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }


  /**
   * friends findFirstOrThrow
   */
  export type friendsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * Filter, which friends to fetch.
     */
    where?: friendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friends to fetch.
     */
    orderBy?: friendsOrderByWithRelationInput | friendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for friends.
     */
    cursor?: friendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of friends.
     */
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }


  /**
   * friends findMany
   */
  export type friendsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * Filter, which friends to fetch.
     */
    where?: friendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friends to fetch.
     */
    orderBy?: friendsOrderByWithRelationInput | friendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing friends.
     */
    cursor?: friendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friends.
     */
    skip?: number
    distinct?: FriendsScalarFieldEnum | FriendsScalarFieldEnum[]
  }


  /**
   * friends create
   */
  export type friendsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * The data needed to create a friends.
     */
    data: XOR<friendsCreateInput, friendsUncheckedCreateInput>
  }


  /**
   * friends createMany
   */
  export type friendsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many friends.
     */
    data: friendsCreateManyInput | friendsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * friends update
   */
  export type friendsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * The data needed to update a friends.
     */
    data: XOR<friendsUpdateInput, friendsUncheckedUpdateInput>
    /**
     * Choose, which friends to update.
     */
    where: friendsWhereUniqueInput
  }


  /**
   * friends updateMany
   */
  export type friendsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update friends.
     */
    data: XOR<friendsUpdateManyMutationInput, friendsUncheckedUpdateManyInput>
    /**
     * Filter which friends to update
     */
    where?: friendsWhereInput
  }


  /**
   * friends upsert
   */
  export type friendsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * The filter to search for the friends to update in case it exists.
     */
    where: friendsWhereUniqueInput
    /**
     * In case the friends found by the `where` argument doesn't exist, create a new friends with this data.
     */
    create: XOR<friendsCreateInput, friendsUncheckedCreateInput>
    /**
     * In case the friends was found with the provided `where` argument, update it with this data.
     */
    update: XOR<friendsUpdateInput, friendsUncheckedUpdateInput>
  }


  /**
   * friends delete
   */
  export type friendsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friendsInclude<ExtArgs> | null
    /**
     * Filter which friends to delete.
     */
    where: friendsWhereUniqueInput
  }


  /**
   * friends deleteMany
   */
  export type friendsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which friends to delete
     */
    where?: friendsWhereInput
  }


  /**
   * friends.users
   */
  export type friends$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }


  /**
   * friends.friends_order
   */
  export type friends$friends_orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends_order
     */
    select?: friends_orderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friends_orderInclude<ExtArgs> | null
    where?: friends_orderWhereInput
    orderBy?: friends_orderOrderByWithRelationInput | friends_orderOrderByWithRelationInput[]
    cursor?: friends_orderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Friends_orderScalarFieldEnum | Friends_orderScalarFieldEnum[]
  }


  /**
   * friends without action
   */
  export type friendsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friends
     */
    select?: friendsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: friendsInclude<ExtArgs> | null
  }



  /**
   * Model bill
   */

  export type AggregateBill = {
    _count: BillCountAggregateOutputType | null
    _avg: BillAvgAggregateOutputType | null
    _sum: BillSumAggregateOutputType | null
    _min: BillMinAggregateOutputType | null
    _max: BillMaxAggregateOutputType | null
  }

  export type BillAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    payment_method_id: number | null
    discount: number | null
    tax: number | null
    service: number | null
    total_price: number | null
  }

  export type BillSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    payment_method_id: number | null
    discount: number | null
    tax: number | null
    service: number | null
    total_price: bigint | null
  }

  export type BillMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    payment_method_id: number | null
    description: string | null
    discount: number | null
    tax: number | null
    service: number | null
    total_price: bigint | null
    date: Date | null
    status: $Enums.Bill_status_Enum | null
  }

  export type BillMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    payment_method_id: number | null
    description: string | null
    discount: number | null
    tax: number | null
    service: number | null
    total_price: bigint | null
    date: Date | null
    status: $Enums.Bill_status_Enum | null
  }

  export type BillCountAggregateOutputType = {
    id: number
    user_id: number
    payment_method_id: number
    description: number
    discount: number
    tax: number
    service: number
    total_price: number
    date: number
    status: number
    _all: number
  }


  export type BillAvgAggregateInputType = {
    id?: true
    user_id?: true
    payment_method_id?: true
    discount?: true
    tax?: true
    service?: true
    total_price?: true
  }

  export type BillSumAggregateInputType = {
    id?: true
    user_id?: true
    payment_method_id?: true
    discount?: true
    tax?: true
    service?: true
    total_price?: true
  }

  export type BillMinAggregateInputType = {
    id?: true
    user_id?: true
    payment_method_id?: true
    description?: true
    discount?: true
    tax?: true
    service?: true
    total_price?: true
    date?: true
    status?: true
  }

  export type BillMaxAggregateInputType = {
    id?: true
    user_id?: true
    payment_method_id?: true
    description?: true
    discount?: true
    tax?: true
    service?: true
    total_price?: true
    date?: true
    status?: true
  }

  export type BillCountAggregateInputType = {
    id?: true
    user_id?: true
    payment_method_id?: true
    description?: true
    discount?: true
    tax?: true
    service?: true
    total_price?: true
    date?: true
    status?: true
    _all?: true
  }

  export type BillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bill to aggregate.
     */
    where?: billWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bills to fetch.
     */
    orderBy?: billOrderByWithRelationInput | billOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: billWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bills
    **/
    _count?: true | BillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillMaxAggregateInputType
  }

  export type GetBillAggregateType<T extends BillAggregateArgs> = {
        [P in keyof T & keyof AggregateBill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBill[P]>
      : GetScalarType<T[P], AggregateBill[P]>
  }




  export type billGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: billWhereInput
    orderBy?: billOrderByWithAggregationInput | billOrderByWithAggregationInput[]
    by: BillScalarFieldEnum[] | BillScalarFieldEnum
    having?: billScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillCountAggregateInputType | true
    _avg?: BillAvgAggregateInputType
    _sum?: BillSumAggregateInputType
    _min?: BillMinAggregateInputType
    _max?: BillMaxAggregateInputType
  }

  export type BillGroupByOutputType = {
    id: number
    user_id: number | null
    payment_method_id: number | null
    description: string
    discount: number | null
    tax: number
    service: number | null
    total_price: bigint
    date: Date
    status: $Enums.Bill_status_Enum
    _count: BillCountAggregateOutputType | null
    _avg: BillAvgAggregateOutputType | null
    _sum: BillSumAggregateOutputType | null
    _min: BillMinAggregateOutputType | null
    _max: BillMaxAggregateOutputType | null
  }

  type GetBillGroupByPayload<T extends billGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillGroupByOutputType[P]>
            : GetScalarType<T[P], BillGroupByOutputType[P]>
        }
      >
    >


  export type billSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    payment_method_id?: boolean
    description?: boolean
    discount?: boolean
    tax?: boolean
    service?: boolean
    total_price?: boolean
    date?: boolean
    status?: boolean
    users?: boolean | bill$usersArgs<ExtArgs>
    payment_method_details?: boolean | bill$payment_method_detailsArgs<ExtArgs>
    orders?: boolean | bill$ordersArgs<ExtArgs>
    _count?: boolean | BillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bill"]>

  export type billSelectScalar = {
    id?: boolean
    user_id?: boolean
    payment_method_id?: boolean
    description?: boolean
    discount?: boolean
    tax?: boolean
    service?: boolean
    total_price?: boolean
    date?: boolean
    status?: boolean
  }

  export type billInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | bill$usersArgs<ExtArgs>
    payment_method_details?: boolean | bill$payment_method_detailsArgs<ExtArgs>
    orders?: boolean | bill$ordersArgs<ExtArgs>
    _count?: boolean | BillCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $billPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bill"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
      payment_method_details: Prisma.$payment_method_detailPayload<ExtArgs> | null
      orders: Prisma.$ordersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      payment_method_id: number | null
      description: string
      discount: number | null
      tax: number
      service: number | null
      total_price: bigint
      date: Date
      status: $Enums.Bill_status_Enum
    }, ExtArgs["result"]["bill"]>
    composites: {}
  }


  type billGetPayload<S extends boolean | null | undefined | billDefaultArgs> = $Result.GetResult<Prisma.$billPayload, S>

  type billCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<billFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BillCountAggregateInputType | true
    }

  export interface billDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bill'], meta: { name: 'bill' } }
    /**
     * Find zero or one Bill that matches the filter.
     * @param {billFindUniqueArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends billFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, billFindUniqueArgs<ExtArgs>>
    ): Prisma__billClient<$Result.GetResult<Prisma.$billPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Bill that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {billFindUniqueOrThrowArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends billFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, billFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__billClient<$Result.GetResult<Prisma.$billPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Bill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {billFindFirstArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends billFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, billFindFirstArgs<ExtArgs>>
    ): Prisma__billClient<$Result.GetResult<Prisma.$billPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Bill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {billFindFirstOrThrowArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends billFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, billFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__billClient<$Result.GetResult<Prisma.$billPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Bills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {billFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bills
     * const bills = await prisma.bill.findMany()
     * 
     * // Get first 10 Bills
     * const bills = await prisma.bill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billWithIdOnly = await prisma.bill.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends billFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, billFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$billPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Bill.
     * @param {billCreateArgs} args - Arguments to create a Bill.
     * @example
     * // Create one Bill
     * const Bill = await prisma.bill.create({
     *   data: {
     *     // ... data to create a Bill
     *   }
     * })
     * 
    **/
    create<T extends billCreateArgs<ExtArgs>>(
      args: SelectSubset<T, billCreateArgs<ExtArgs>>
    ): Prisma__billClient<$Result.GetResult<Prisma.$billPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Bills.
     *     @param {billCreateManyArgs} args - Arguments to create many Bills.
     *     @example
     *     // Create many Bills
     *     const bill = await prisma.bill.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends billCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, billCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bill.
     * @param {billDeleteArgs} args - Arguments to delete one Bill.
     * @example
     * // Delete one Bill
     * const Bill = await prisma.bill.delete({
     *   where: {
     *     // ... filter to delete one Bill
     *   }
     * })
     * 
    **/
    delete<T extends billDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, billDeleteArgs<ExtArgs>>
    ): Prisma__billClient<$Result.GetResult<Prisma.$billPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Bill.
     * @param {billUpdateArgs} args - Arguments to update one Bill.
     * @example
     * // Update one Bill
     * const bill = await prisma.bill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends billUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, billUpdateArgs<ExtArgs>>
    ): Prisma__billClient<$Result.GetResult<Prisma.$billPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Bills.
     * @param {billDeleteManyArgs} args - Arguments to filter Bills to delete.
     * @example
     * // Delete a few Bills
     * const { count } = await prisma.bill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends billDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, billDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {billUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bills
     * const bill = await prisma.bill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends billUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, billUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bill.
     * @param {billUpsertArgs} args - Arguments to update or create a Bill.
     * @example
     * // Update or create a Bill
     * const bill = await prisma.bill.upsert({
     *   create: {
     *     // ... data to create a Bill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bill we want to update
     *   }
     * })
    **/
    upsert<T extends billUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, billUpsertArgs<ExtArgs>>
    ): Prisma__billClient<$Result.GetResult<Prisma.$billPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {billCountArgs} args - Arguments to filter Bills to count.
     * @example
     * // Count the number of Bills
     * const count = await prisma.bill.count({
     *   where: {
     *     // ... the filter for the Bills we want to count
     *   }
     * })
    **/
    count<T extends billCountArgs>(
      args?: Subset<T, billCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BillAggregateArgs>(args: Subset<T, BillAggregateArgs>): Prisma.PrismaPromise<GetBillAggregateType<T>>

    /**
     * Group by Bill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {billGroupByArgs} args - Group by arguments.
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
      T extends billGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: billGroupByArgs['orderBy'] }
        : { orderBy?: billGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, billGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bill model
   */
  readonly fields: billFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__billClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends bill$usersArgs<ExtArgs> = {}>(args?: Subset<T, bill$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    payment_method_details<T extends bill$payment_method_detailsArgs<ExtArgs> = {}>(args?: Subset<T, bill$payment_method_detailsArgs<ExtArgs>>): Prisma__payment_method_detailClient<$Result.GetResult<Prisma.$payment_method_detailPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    orders<T extends bill$ordersArgs<ExtArgs> = {}>(args?: Subset<T, bill$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the bill model
   */ 
  interface billFieldRefs {
    readonly id: FieldRef<"bill", 'Int'>
    readonly user_id: FieldRef<"bill", 'Int'>
    readonly payment_method_id: FieldRef<"bill", 'Int'>
    readonly description: FieldRef<"bill", 'String'>
    readonly discount: FieldRef<"bill", 'Float'>
    readonly tax: FieldRef<"bill", 'Int'>
    readonly service: FieldRef<"bill", 'Float'>
    readonly total_price: FieldRef<"bill", 'BigInt'>
    readonly date: FieldRef<"bill", 'DateTime'>
    readonly status: FieldRef<"bill", 'Bill_status_Enum'>
  }
    

  // Custom InputTypes

  /**
   * bill findUnique
   */
  export type billFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill
     */
    select?: billSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billInclude<ExtArgs> | null
    /**
     * Filter, which bill to fetch.
     */
    where: billWhereUniqueInput
  }


  /**
   * bill findUniqueOrThrow
   */
  export type billFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill
     */
    select?: billSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billInclude<ExtArgs> | null
    /**
     * Filter, which bill to fetch.
     */
    where: billWhereUniqueInput
  }


  /**
   * bill findFirst
   */
  export type billFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill
     */
    select?: billSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billInclude<ExtArgs> | null
    /**
     * Filter, which bill to fetch.
     */
    where?: billWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bills to fetch.
     */
    orderBy?: billOrderByWithRelationInput | billOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bills.
     */
    cursor?: billWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bills.
     */
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }


  /**
   * bill findFirstOrThrow
   */
  export type billFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill
     */
    select?: billSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billInclude<ExtArgs> | null
    /**
     * Filter, which bill to fetch.
     */
    where?: billWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bills to fetch.
     */
    orderBy?: billOrderByWithRelationInput | billOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bills.
     */
    cursor?: billWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bills.
     */
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }


  /**
   * bill findMany
   */
  export type billFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill
     */
    select?: billSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billInclude<ExtArgs> | null
    /**
     * Filter, which bills to fetch.
     */
    where?: billWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bills to fetch.
     */
    orderBy?: billOrderByWithRelationInput | billOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bills.
     */
    cursor?: billWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bills.
     */
    skip?: number
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }


  /**
   * bill create
   */
  export type billCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill
     */
    select?: billSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billInclude<ExtArgs> | null
    /**
     * The data needed to create a bill.
     */
    data: XOR<billCreateInput, billUncheckedCreateInput>
  }


  /**
   * bill createMany
   */
  export type billCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bills.
     */
    data: billCreateManyInput | billCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * bill update
   */
  export type billUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill
     */
    select?: billSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billInclude<ExtArgs> | null
    /**
     * The data needed to update a bill.
     */
    data: XOR<billUpdateInput, billUncheckedUpdateInput>
    /**
     * Choose, which bill to update.
     */
    where: billWhereUniqueInput
  }


  /**
   * bill updateMany
   */
  export type billUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bills.
     */
    data: XOR<billUpdateManyMutationInput, billUncheckedUpdateManyInput>
    /**
     * Filter which bills to update
     */
    where?: billWhereInput
  }


  /**
   * bill upsert
   */
  export type billUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill
     */
    select?: billSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billInclude<ExtArgs> | null
    /**
     * The filter to search for the bill to update in case it exists.
     */
    where: billWhereUniqueInput
    /**
     * In case the bill found by the `where` argument doesn't exist, create a new bill with this data.
     */
    create: XOR<billCreateInput, billUncheckedCreateInput>
    /**
     * In case the bill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<billUpdateInput, billUncheckedUpdateInput>
  }


  /**
   * bill delete
   */
  export type billDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill
     */
    select?: billSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billInclude<ExtArgs> | null
    /**
     * Filter which bill to delete.
     */
    where: billWhereUniqueInput
  }


  /**
   * bill deleteMany
   */
  export type billDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bills to delete
     */
    where?: billWhereInput
  }


  /**
   * bill.users
   */
  export type bill$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }


  /**
   * bill.payment_method_details
   */
  export type bill$payment_method_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method_detail
     */
    select?: payment_method_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_method_detailInclude<ExtArgs> | null
    where?: payment_method_detailWhereInput
  }


  /**
   * bill.orders
   */
  export type bill$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }


  /**
   * bill without action
   */
  export type billDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill
     */
    select?: billSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billInclude<ExtArgs> | null
  }



  /**
   * Model payment_method
   */

  export type AggregatePayment_method = {
    _count: Payment_methodCountAggregateOutputType | null
    _avg: Payment_methodAvgAggregateOutputType | null
    _sum: Payment_methodSumAggregateOutputType | null
    _min: Payment_methodMinAggregateOutputType | null
    _max: Payment_methodMaxAggregateOutputType | null
  }

  export type Payment_methodAvgAggregateOutputType = {
    id: number | null
  }

  export type Payment_methodSumAggregateOutputType = {
    id: number | null
  }

  export type Payment_methodMinAggregateOutputType = {
    id: number | null
    payment_method_name: string | null
    payment_method_logo: string | null
  }

  export type Payment_methodMaxAggregateOutputType = {
    id: number | null
    payment_method_name: string | null
    payment_method_logo: string | null
  }

  export type Payment_methodCountAggregateOutputType = {
    id: number
    payment_method_name: number
    payment_method_logo: number
    _all: number
  }


  export type Payment_methodAvgAggregateInputType = {
    id?: true
  }

  export type Payment_methodSumAggregateInputType = {
    id?: true
  }

  export type Payment_methodMinAggregateInputType = {
    id?: true
    payment_method_name?: true
    payment_method_logo?: true
  }

  export type Payment_methodMaxAggregateInputType = {
    id?: true
    payment_method_name?: true
    payment_method_logo?: true
  }

  export type Payment_methodCountAggregateInputType = {
    id?: true
    payment_method_name?: true
    payment_method_logo?: true
    _all?: true
  }

  export type Payment_methodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment_method to aggregate.
     */
    where?: payment_methodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_methods to fetch.
     */
    orderBy?: payment_methodOrderByWithRelationInput | payment_methodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: payment_methodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_methods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_methods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payment_methods
    **/
    _count?: true | Payment_methodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Payment_methodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Payment_methodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Payment_methodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Payment_methodMaxAggregateInputType
  }

  export type GetPayment_methodAggregateType<T extends Payment_methodAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment_method]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment_method[P]>
      : GetScalarType<T[P], AggregatePayment_method[P]>
  }




  export type payment_methodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: payment_methodWhereInput
    orderBy?: payment_methodOrderByWithAggregationInput | payment_methodOrderByWithAggregationInput[]
    by: Payment_methodScalarFieldEnum[] | Payment_methodScalarFieldEnum
    having?: payment_methodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Payment_methodCountAggregateInputType | true
    _avg?: Payment_methodAvgAggregateInputType
    _sum?: Payment_methodSumAggregateInputType
    _min?: Payment_methodMinAggregateInputType
    _max?: Payment_methodMaxAggregateInputType
  }

  export type Payment_methodGroupByOutputType = {
    id: number
    payment_method_name: string
    payment_method_logo: string
    _count: Payment_methodCountAggregateOutputType | null
    _avg: Payment_methodAvgAggregateOutputType | null
    _sum: Payment_methodSumAggregateOutputType | null
    _min: Payment_methodMinAggregateOutputType | null
    _max: Payment_methodMaxAggregateOutputType | null
  }

  type GetPayment_methodGroupByPayload<T extends payment_methodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Payment_methodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Payment_methodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Payment_methodGroupByOutputType[P]>
            : GetScalarType<T[P], Payment_methodGroupByOutputType[P]>
        }
      >
    >


  export type payment_methodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    payment_method_name?: boolean
    payment_method_logo?: boolean
    payment_method_detail?: boolean | payment_method$payment_method_detailArgs<ExtArgs>
    _count?: boolean | Payment_methodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment_method"]>

  export type payment_methodSelectScalar = {
    id?: boolean
    payment_method_name?: boolean
    payment_method_logo?: boolean
  }

  export type payment_methodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment_method_detail?: boolean | payment_method$payment_method_detailArgs<ExtArgs>
    _count?: boolean | Payment_methodCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $payment_methodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payment_method"
    objects: {
      payment_method_detail: Prisma.$payment_method_detailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      payment_method_name: string
      payment_method_logo: string
    }, ExtArgs["result"]["payment_method"]>
    composites: {}
  }


  type payment_methodGetPayload<S extends boolean | null | undefined | payment_methodDefaultArgs> = $Result.GetResult<Prisma.$payment_methodPayload, S>

  type payment_methodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<payment_methodFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Payment_methodCountAggregateInputType | true
    }

  export interface payment_methodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payment_method'], meta: { name: 'payment_method' } }
    /**
     * Find zero or one Payment_method that matches the filter.
     * @param {payment_methodFindUniqueArgs} args - Arguments to find a Payment_method
     * @example
     * // Get one Payment_method
     * const payment_method = await prisma.payment_method.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends payment_methodFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, payment_methodFindUniqueArgs<ExtArgs>>
    ): Prisma__payment_methodClient<$Result.GetResult<Prisma.$payment_methodPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Payment_method that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {payment_methodFindUniqueOrThrowArgs} args - Arguments to find a Payment_method
     * @example
     * // Get one Payment_method
     * const payment_method = await prisma.payment_method.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends payment_methodFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, payment_methodFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__payment_methodClient<$Result.GetResult<Prisma.$payment_methodPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Payment_method that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_methodFindFirstArgs} args - Arguments to find a Payment_method
     * @example
     * // Get one Payment_method
     * const payment_method = await prisma.payment_method.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends payment_methodFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, payment_methodFindFirstArgs<ExtArgs>>
    ): Prisma__payment_methodClient<$Result.GetResult<Prisma.$payment_methodPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Payment_method that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_methodFindFirstOrThrowArgs} args - Arguments to find a Payment_method
     * @example
     * // Get one Payment_method
     * const payment_method = await prisma.payment_method.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends payment_methodFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, payment_methodFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__payment_methodClient<$Result.GetResult<Prisma.$payment_methodPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Payment_methods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_methodFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payment_methods
     * const payment_methods = await prisma.payment_method.findMany()
     * 
     * // Get first 10 Payment_methods
     * const payment_methods = await prisma.payment_method.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payment_methodWithIdOnly = await prisma.payment_method.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends payment_methodFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, payment_methodFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payment_methodPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Payment_method.
     * @param {payment_methodCreateArgs} args - Arguments to create a Payment_method.
     * @example
     * // Create one Payment_method
     * const Payment_method = await prisma.payment_method.create({
     *   data: {
     *     // ... data to create a Payment_method
     *   }
     * })
     * 
    **/
    create<T extends payment_methodCreateArgs<ExtArgs>>(
      args: SelectSubset<T, payment_methodCreateArgs<ExtArgs>>
    ): Prisma__payment_methodClient<$Result.GetResult<Prisma.$payment_methodPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Payment_methods.
     *     @param {payment_methodCreateManyArgs} args - Arguments to create many Payment_methods.
     *     @example
     *     // Create many Payment_methods
     *     const payment_method = await prisma.payment_method.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends payment_methodCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, payment_methodCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment_method.
     * @param {payment_methodDeleteArgs} args - Arguments to delete one Payment_method.
     * @example
     * // Delete one Payment_method
     * const Payment_method = await prisma.payment_method.delete({
     *   where: {
     *     // ... filter to delete one Payment_method
     *   }
     * })
     * 
    **/
    delete<T extends payment_methodDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, payment_methodDeleteArgs<ExtArgs>>
    ): Prisma__payment_methodClient<$Result.GetResult<Prisma.$payment_methodPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Payment_method.
     * @param {payment_methodUpdateArgs} args - Arguments to update one Payment_method.
     * @example
     * // Update one Payment_method
     * const payment_method = await prisma.payment_method.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends payment_methodUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, payment_methodUpdateArgs<ExtArgs>>
    ): Prisma__payment_methodClient<$Result.GetResult<Prisma.$payment_methodPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Payment_methods.
     * @param {payment_methodDeleteManyArgs} args - Arguments to filter Payment_methods to delete.
     * @example
     * // Delete a few Payment_methods
     * const { count } = await prisma.payment_method.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends payment_methodDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, payment_methodDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payment_methods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_methodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payment_methods
     * const payment_method = await prisma.payment_method.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends payment_methodUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, payment_methodUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment_method.
     * @param {payment_methodUpsertArgs} args - Arguments to update or create a Payment_method.
     * @example
     * // Update or create a Payment_method
     * const payment_method = await prisma.payment_method.upsert({
     *   create: {
     *     // ... data to create a Payment_method
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment_method we want to update
     *   }
     * })
    **/
    upsert<T extends payment_methodUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, payment_methodUpsertArgs<ExtArgs>>
    ): Prisma__payment_methodClient<$Result.GetResult<Prisma.$payment_methodPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Payment_methods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_methodCountArgs} args - Arguments to filter Payment_methods to count.
     * @example
     * // Count the number of Payment_methods
     * const count = await prisma.payment_method.count({
     *   where: {
     *     // ... the filter for the Payment_methods we want to count
     *   }
     * })
    **/
    count<T extends payment_methodCountArgs>(
      args?: Subset<T, payment_methodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Payment_methodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment_method.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Payment_methodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Payment_methodAggregateArgs>(args: Subset<T, Payment_methodAggregateArgs>): Prisma.PrismaPromise<GetPayment_methodAggregateType<T>>

    /**
     * Group by Payment_method.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_methodGroupByArgs} args - Group by arguments.
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
      T extends payment_methodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: payment_methodGroupByArgs['orderBy'] }
        : { orderBy?: payment_methodGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, payment_methodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayment_methodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payment_method model
   */
  readonly fields: payment_methodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payment_method.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__payment_methodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    payment_method_detail<T extends payment_method$payment_method_detailArgs<ExtArgs> = {}>(args?: Subset<T, payment_method$payment_method_detailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payment_method_detailPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the payment_method model
   */ 
  interface payment_methodFieldRefs {
    readonly id: FieldRef<"payment_method", 'Int'>
    readonly payment_method_name: FieldRef<"payment_method", 'String'>
    readonly payment_method_logo: FieldRef<"payment_method", 'String'>
  }
    

  // Custom InputTypes

  /**
   * payment_method findUnique
   */
  export type payment_methodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method
     */
    select?: payment_methodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_methodInclude<ExtArgs> | null
    /**
     * Filter, which payment_method to fetch.
     */
    where: payment_methodWhereUniqueInput
  }


  /**
   * payment_method findUniqueOrThrow
   */
  export type payment_methodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method
     */
    select?: payment_methodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_methodInclude<ExtArgs> | null
    /**
     * Filter, which payment_method to fetch.
     */
    where: payment_methodWhereUniqueInput
  }


  /**
   * payment_method findFirst
   */
  export type payment_methodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method
     */
    select?: payment_methodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_methodInclude<ExtArgs> | null
    /**
     * Filter, which payment_method to fetch.
     */
    where?: payment_methodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_methods to fetch.
     */
    orderBy?: payment_methodOrderByWithRelationInput | payment_methodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payment_methods.
     */
    cursor?: payment_methodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_methods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_methods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payment_methods.
     */
    distinct?: Payment_methodScalarFieldEnum | Payment_methodScalarFieldEnum[]
  }


  /**
   * payment_method findFirstOrThrow
   */
  export type payment_methodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method
     */
    select?: payment_methodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_methodInclude<ExtArgs> | null
    /**
     * Filter, which payment_method to fetch.
     */
    where?: payment_methodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_methods to fetch.
     */
    orderBy?: payment_methodOrderByWithRelationInput | payment_methodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payment_methods.
     */
    cursor?: payment_methodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_methods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_methods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payment_methods.
     */
    distinct?: Payment_methodScalarFieldEnum | Payment_methodScalarFieldEnum[]
  }


  /**
   * payment_method findMany
   */
  export type payment_methodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method
     */
    select?: payment_methodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_methodInclude<ExtArgs> | null
    /**
     * Filter, which payment_methods to fetch.
     */
    where?: payment_methodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_methods to fetch.
     */
    orderBy?: payment_methodOrderByWithRelationInput | payment_methodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payment_methods.
     */
    cursor?: payment_methodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_methods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_methods.
     */
    skip?: number
    distinct?: Payment_methodScalarFieldEnum | Payment_methodScalarFieldEnum[]
  }


  /**
   * payment_method create
   */
  export type payment_methodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method
     */
    select?: payment_methodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_methodInclude<ExtArgs> | null
    /**
     * The data needed to create a payment_method.
     */
    data: XOR<payment_methodCreateInput, payment_methodUncheckedCreateInput>
  }


  /**
   * payment_method createMany
   */
  export type payment_methodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payment_methods.
     */
    data: payment_methodCreateManyInput | payment_methodCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * payment_method update
   */
  export type payment_methodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method
     */
    select?: payment_methodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_methodInclude<ExtArgs> | null
    /**
     * The data needed to update a payment_method.
     */
    data: XOR<payment_methodUpdateInput, payment_methodUncheckedUpdateInput>
    /**
     * Choose, which payment_method to update.
     */
    where: payment_methodWhereUniqueInput
  }


  /**
   * payment_method updateMany
   */
  export type payment_methodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payment_methods.
     */
    data: XOR<payment_methodUpdateManyMutationInput, payment_methodUncheckedUpdateManyInput>
    /**
     * Filter which payment_methods to update
     */
    where?: payment_methodWhereInput
  }


  /**
   * payment_method upsert
   */
  export type payment_methodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method
     */
    select?: payment_methodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_methodInclude<ExtArgs> | null
    /**
     * The filter to search for the payment_method to update in case it exists.
     */
    where: payment_methodWhereUniqueInput
    /**
     * In case the payment_method found by the `where` argument doesn't exist, create a new payment_method with this data.
     */
    create: XOR<payment_methodCreateInput, payment_methodUncheckedCreateInput>
    /**
     * In case the payment_method was found with the provided `where` argument, update it with this data.
     */
    update: XOR<payment_methodUpdateInput, payment_methodUncheckedUpdateInput>
  }


  /**
   * payment_method delete
   */
  export type payment_methodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method
     */
    select?: payment_methodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_methodInclude<ExtArgs> | null
    /**
     * Filter which payment_method to delete.
     */
    where: payment_methodWhereUniqueInput
  }


  /**
   * payment_method deleteMany
   */
  export type payment_methodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment_methods to delete
     */
    where?: payment_methodWhereInput
  }


  /**
   * payment_method.payment_method_detail
   */
  export type payment_method$payment_method_detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method_detail
     */
    select?: payment_method_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_method_detailInclude<ExtArgs> | null
    where?: payment_method_detailWhereInput
    orderBy?: payment_method_detailOrderByWithRelationInput | payment_method_detailOrderByWithRelationInput[]
    cursor?: payment_method_detailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Payment_method_detailScalarFieldEnum | Payment_method_detailScalarFieldEnum[]
  }


  /**
   * payment_method without action
   */
  export type payment_methodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method
     */
    select?: payment_methodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_methodInclude<ExtArgs> | null
  }



  /**
   * Model payment_method_detail
   */

  export type AggregatePayment_method_detail = {
    _count: Payment_method_detailCountAggregateOutputType | null
    _avg: Payment_method_detailAvgAggregateOutputType | null
    _sum: Payment_method_detailSumAggregateOutputType | null
    _min: Payment_method_detailMinAggregateOutputType | null
    _max: Payment_method_detailMaxAggregateOutputType | null
  }

  export type Payment_method_detailAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    payment_method_id: number | null
    card_number: number | null
  }

  export type Payment_method_detailSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    payment_method_id: number | null
    card_number: bigint | null
  }

  export type Payment_method_detailMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    payment_method_id: number | null
    card_number: bigint | null
    card_name: string | null
  }

  export type Payment_method_detailMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    payment_method_id: number | null
    card_number: bigint | null
    card_name: string | null
  }

  export type Payment_method_detailCountAggregateOutputType = {
    id: number
    user_id: number
    payment_method_id: number
    card_number: number
    card_name: number
    _all: number
  }


  export type Payment_method_detailAvgAggregateInputType = {
    id?: true
    user_id?: true
    payment_method_id?: true
    card_number?: true
  }

  export type Payment_method_detailSumAggregateInputType = {
    id?: true
    user_id?: true
    payment_method_id?: true
    card_number?: true
  }

  export type Payment_method_detailMinAggregateInputType = {
    id?: true
    user_id?: true
    payment_method_id?: true
    card_number?: true
    card_name?: true
  }

  export type Payment_method_detailMaxAggregateInputType = {
    id?: true
    user_id?: true
    payment_method_id?: true
    card_number?: true
    card_name?: true
  }

  export type Payment_method_detailCountAggregateInputType = {
    id?: true
    user_id?: true
    payment_method_id?: true
    card_number?: true
    card_name?: true
    _all?: true
  }

  export type Payment_method_detailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment_method_detail to aggregate.
     */
    where?: payment_method_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_method_details to fetch.
     */
    orderBy?: payment_method_detailOrderByWithRelationInput | payment_method_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: payment_method_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_method_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_method_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payment_method_details
    **/
    _count?: true | Payment_method_detailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Payment_method_detailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Payment_method_detailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Payment_method_detailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Payment_method_detailMaxAggregateInputType
  }

  export type GetPayment_method_detailAggregateType<T extends Payment_method_detailAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment_method_detail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment_method_detail[P]>
      : GetScalarType<T[P], AggregatePayment_method_detail[P]>
  }




  export type payment_method_detailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: payment_method_detailWhereInput
    orderBy?: payment_method_detailOrderByWithAggregationInput | payment_method_detailOrderByWithAggregationInput[]
    by: Payment_method_detailScalarFieldEnum[] | Payment_method_detailScalarFieldEnum
    having?: payment_method_detailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Payment_method_detailCountAggregateInputType | true
    _avg?: Payment_method_detailAvgAggregateInputType
    _sum?: Payment_method_detailSumAggregateInputType
    _min?: Payment_method_detailMinAggregateInputType
    _max?: Payment_method_detailMaxAggregateInputType
  }

  export type Payment_method_detailGroupByOutputType = {
    id: number
    user_id: number | null
    payment_method_id: number | null
    card_number: bigint
    card_name: string
    _count: Payment_method_detailCountAggregateOutputType | null
    _avg: Payment_method_detailAvgAggregateOutputType | null
    _sum: Payment_method_detailSumAggregateOutputType | null
    _min: Payment_method_detailMinAggregateOutputType | null
    _max: Payment_method_detailMaxAggregateOutputType | null
  }

  type GetPayment_method_detailGroupByPayload<T extends payment_method_detailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Payment_method_detailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Payment_method_detailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Payment_method_detailGroupByOutputType[P]>
            : GetScalarType<T[P], Payment_method_detailGroupByOutputType[P]>
        }
      >
    >


  export type payment_method_detailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    payment_method_id?: boolean
    card_number?: boolean
    card_name?: boolean
    users?: boolean | payment_method_detail$usersArgs<ExtArgs>
    payment_method?: boolean | payment_method_detail$payment_methodArgs<ExtArgs>
    bill?: boolean | payment_method_detail$billArgs<ExtArgs>
    _count?: boolean | Payment_method_detailCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment_method_detail"]>

  export type payment_method_detailSelectScalar = {
    id?: boolean
    user_id?: boolean
    payment_method_id?: boolean
    card_number?: boolean
    card_name?: boolean
  }

  export type payment_method_detailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | payment_method_detail$usersArgs<ExtArgs>
    payment_method?: boolean | payment_method_detail$payment_methodArgs<ExtArgs>
    bill?: boolean | payment_method_detail$billArgs<ExtArgs>
    _count?: boolean | Payment_method_detailCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $payment_method_detailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payment_method_detail"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
      payment_method: Prisma.$payment_methodPayload<ExtArgs> | null
      bill: Prisma.$billPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      payment_method_id: number | null
      card_number: bigint
      card_name: string
    }, ExtArgs["result"]["payment_method_detail"]>
    composites: {}
  }


  type payment_method_detailGetPayload<S extends boolean | null | undefined | payment_method_detailDefaultArgs> = $Result.GetResult<Prisma.$payment_method_detailPayload, S>

  type payment_method_detailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<payment_method_detailFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Payment_method_detailCountAggregateInputType | true
    }

  export interface payment_method_detailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payment_method_detail'], meta: { name: 'payment_method_detail' } }
    /**
     * Find zero or one Payment_method_detail that matches the filter.
     * @param {payment_method_detailFindUniqueArgs} args - Arguments to find a Payment_method_detail
     * @example
     * // Get one Payment_method_detail
     * const payment_method_detail = await prisma.payment_method_detail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends payment_method_detailFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, payment_method_detailFindUniqueArgs<ExtArgs>>
    ): Prisma__payment_method_detailClient<$Result.GetResult<Prisma.$payment_method_detailPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Payment_method_detail that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {payment_method_detailFindUniqueOrThrowArgs} args - Arguments to find a Payment_method_detail
     * @example
     * // Get one Payment_method_detail
     * const payment_method_detail = await prisma.payment_method_detail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends payment_method_detailFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, payment_method_detailFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__payment_method_detailClient<$Result.GetResult<Prisma.$payment_method_detailPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Payment_method_detail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_method_detailFindFirstArgs} args - Arguments to find a Payment_method_detail
     * @example
     * // Get one Payment_method_detail
     * const payment_method_detail = await prisma.payment_method_detail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends payment_method_detailFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, payment_method_detailFindFirstArgs<ExtArgs>>
    ): Prisma__payment_method_detailClient<$Result.GetResult<Prisma.$payment_method_detailPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Payment_method_detail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_method_detailFindFirstOrThrowArgs} args - Arguments to find a Payment_method_detail
     * @example
     * // Get one Payment_method_detail
     * const payment_method_detail = await prisma.payment_method_detail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends payment_method_detailFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, payment_method_detailFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__payment_method_detailClient<$Result.GetResult<Prisma.$payment_method_detailPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Payment_method_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_method_detailFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payment_method_details
     * const payment_method_details = await prisma.payment_method_detail.findMany()
     * 
     * // Get first 10 Payment_method_details
     * const payment_method_details = await prisma.payment_method_detail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payment_method_detailWithIdOnly = await prisma.payment_method_detail.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends payment_method_detailFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, payment_method_detailFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payment_method_detailPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Payment_method_detail.
     * @param {payment_method_detailCreateArgs} args - Arguments to create a Payment_method_detail.
     * @example
     * // Create one Payment_method_detail
     * const Payment_method_detail = await prisma.payment_method_detail.create({
     *   data: {
     *     // ... data to create a Payment_method_detail
     *   }
     * })
     * 
    **/
    create<T extends payment_method_detailCreateArgs<ExtArgs>>(
      args: SelectSubset<T, payment_method_detailCreateArgs<ExtArgs>>
    ): Prisma__payment_method_detailClient<$Result.GetResult<Prisma.$payment_method_detailPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Payment_method_details.
     *     @param {payment_method_detailCreateManyArgs} args - Arguments to create many Payment_method_details.
     *     @example
     *     // Create many Payment_method_details
     *     const payment_method_detail = await prisma.payment_method_detail.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends payment_method_detailCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, payment_method_detailCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment_method_detail.
     * @param {payment_method_detailDeleteArgs} args - Arguments to delete one Payment_method_detail.
     * @example
     * // Delete one Payment_method_detail
     * const Payment_method_detail = await prisma.payment_method_detail.delete({
     *   where: {
     *     // ... filter to delete one Payment_method_detail
     *   }
     * })
     * 
    **/
    delete<T extends payment_method_detailDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, payment_method_detailDeleteArgs<ExtArgs>>
    ): Prisma__payment_method_detailClient<$Result.GetResult<Prisma.$payment_method_detailPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Payment_method_detail.
     * @param {payment_method_detailUpdateArgs} args - Arguments to update one Payment_method_detail.
     * @example
     * // Update one Payment_method_detail
     * const payment_method_detail = await prisma.payment_method_detail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends payment_method_detailUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, payment_method_detailUpdateArgs<ExtArgs>>
    ): Prisma__payment_method_detailClient<$Result.GetResult<Prisma.$payment_method_detailPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Payment_method_details.
     * @param {payment_method_detailDeleteManyArgs} args - Arguments to filter Payment_method_details to delete.
     * @example
     * // Delete a few Payment_method_details
     * const { count } = await prisma.payment_method_detail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends payment_method_detailDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, payment_method_detailDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payment_method_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_method_detailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payment_method_details
     * const payment_method_detail = await prisma.payment_method_detail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends payment_method_detailUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, payment_method_detailUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment_method_detail.
     * @param {payment_method_detailUpsertArgs} args - Arguments to update or create a Payment_method_detail.
     * @example
     * // Update or create a Payment_method_detail
     * const payment_method_detail = await prisma.payment_method_detail.upsert({
     *   create: {
     *     // ... data to create a Payment_method_detail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment_method_detail we want to update
     *   }
     * })
    **/
    upsert<T extends payment_method_detailUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, payment_method_detailUpsertArgs<ExtArgs>>
    ): Prisma__payment_method_detailClient<$Result.GetResult<Prisma.$payment_method_detailPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Payment_method_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_method_detailCountArgs} args - Arguments to filter Payment_method_details to count.
     * @example
     * // Count the number of Payment_method_details
     * const count = await prisma.payment_method_detail.count({
     *   where: {
     *     // ... the filter for the Payment_method_details we want to count
     *   }
     * })
    **/
    count<T extends payment_method_detailCountArgs>(
      args?: Subset<T, payment_method_detailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Payment_method_detailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment_method_detail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Payment_method_detailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Payment_method_detailAggregateArgs>(args: Subset<T, Payment_method_detailAggregateArgs>): Prisma.PrismaPromise<GetPayment_method_detailAggregateType<T>>

    /**
     * Group by Payment_method_detail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_method_detailGroupByArgs} args - Group by arguments.
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
      T extends payment_method_detailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: payment_method_detailGroupByArgs['orderBy'] }
        : { orderBy?: payment_method_detailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, payment_method_detailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayment_method_detailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payment_method_detail model
   */
  readonly fields: payment_method_detailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payment_method_detail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__payment_method_detailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends payment_method_detail$usersArgs<ExtArgs> = {}>(args?: Subset<T, payment_method_detail$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    payment_method<T extends payment_method_detail$payment_methodArgs<ExtArgs> = {}>(args?: Subset<T, payment_method_detail$payment_methodArgs<ExtArgs>>): Prisma__payment_methodClient<$Result.GetResult<Prisma.$payment_methodPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    bill<T extends payment_method_detail$billArgs<ExtArgs> = {}>(args?: Subset<T, payment_method_detail$billArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$billPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the payment_method_detail model
   */ 
  interface payment_method_detailFieldRefs {
    readonly id: FieldRef<"payment_method_detail", 'Int'>
    readonly user_id: FieldRef<"payment_method_detail", 'Int'>
    readonly payment_method_id: FieldRef<"payment_method_detail", 'Int'>
    readonly card_number: FieldRef<"payment_method_detail", 'BigInt'>
    readonly card_name: FieldRef<"payment_method_detail", 'String'>
  }
    

  // Custom InputTypes

  /**
   * payment_method_detail findUnique
   */
  export type payment_method_detailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method_detail
     */
    select?: payment_method_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_method_detailInclude<ExtArgs> | null
    /**
     * Filter, which payment_method_detail to fetch.
     */
    where: payment_method_detailWhereUniqueInput
  }


  /**
   * payment_method_detail findUniqueOrThrow
   */
  export type payment_method_detailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method_detail
     */
    select?: payment_method_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_method_detailInclude<ExtArgs> | null
    /**
     * Filter, which payment_method_detail to fetch.
     */
    where: payment_method_detailWhereUniqueInput
  }


  /**
   * payment_method_detail findFirst
   */
  export type payment_method_detailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method_detail
     */
    select?: payment_method_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_method_detailInclude<ExtArgs> | null
    /**
     * Filter, which payment_method_detail to fetch.
     */
    where?: payment_method_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_method_details to fetch.
     */
    orderBy?: payment_method_detailOrderByWithRelationInput | payment_method_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payment_method_details.
     */
    cursor?: payment_method_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_method_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_method_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payment_method_details.
     */
    distinct?: Payment_method_detailScalarFieldEnum | Payment_method_detailScalarFieldEnum[]
  }


  /**
   * payment_method_detail findFirstOrThrow
   */
  export type payment_method_detailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method_detail
     */
    select?: payment_method_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_method_detailInclude<ExtArgs> | null
    /**
     * Filter, which payment_method_detail to fetch.
     */
    where?: payment_method_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_method_details to fetch.
     */
    orderBy?: payment_method_detailOrderByWithRelationInput | payment_method_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payment_method_details.
     */
    cursor?: payment_method_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_method_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_method_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payment_method_details.
     */
    distinct?: Payment_method_detailScalarFieldEnum | Payment_method_detailScalarFieldEnum[]
  }


  /**
   * payment_method_detail findMany
   */
  export type payment_method_detailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method_detail
     */
    select?: payment_method_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_method_detailInclude<ExtArgs> | null
    /**
     * Filter, which payment_method_details to fetch.
     */
    where?: payment_method_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_method_details to fetch.
     */
    orderBy?: payment_method_detailOrderByWithRelationInput | payment_method_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payment_method_details.
     */
    cursor?: payment_method_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_method_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_method_details.
     */
    skip?: number
    distinct?: Payment_method_detailScalarFieldEnum | Payment_method_detailScalarFieldEnum[]
  }


  /**
   * payment_method_detail create
   */
  export type payment_method_detailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method_detail
     */
    select?: payment_method_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_method_detailInclude<ExtArgs> | null
    /**
     * The data needed to create a payment_method_detail.
     */
    data: XOR<payment_method_detailCreateInput, payment_method_detailUncheckedCreateInput>
  }


  /**
   * payment_method_detail createMany
   */
  export type payment_method_detailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payment_method_details.
     */
    data: payment_method_detailCreateManyInput | payment_method_detailCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * payment_method_detail update
   */
  export type payment_method_detailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method_detail
     */
    select?: payment_method_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_method_detailInclude<ExtArgs> | null
    /**
     * The data needed to update a payment_method_detail.
     */
    data: XOR<payment_method_detailUpdateInput, payment_method_detailUncheckedUpdateInput>
    /**
     * Choose, which payment_method_detail to update.
     */
    where: payment_method_detailWhereUniqueInput
  }


  /**
   * payment_method_detail updateMany
   */
  export type payment_method_detailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payment_method_details.
     */
    data: XOR<payment_method_detailUpdateManyMutationInput, payment_method_detailUncheckedUpdateManyInput>
    /**
     * Filter which payment_method_details to update
     */
    where?: payment_method_detailWhereInput
  }


  /**
   * payment_method_detail upsert
   */
  export type payment_method_detailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method_detail
     */
    select?: payment_method_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_method_detailInclude<ExtArgs> | null
    /**
     * The filter to search for the payment_method_detail to update in case it exists.
     */
    where: payment_method_detailWhereUniqueInput
    /**
     * In case the payment_method_detail found by the `where` argument doesn't exist, create a new payment_method_detail with this data.
     */
    create: XOR<payment_method_detailCreateInput, payment_method_detailUncheckedCreateInput>
    /**
     * In case the payment_method_detail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<payment_method_detailUpdateInput, payment_method_detailUncheckedUpdateInput>
  }


  /**
   * payment_method_detail delete
   */
  export type payment_method_detailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method_detail
     */
    select?: payment_method_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_method_detailInclude<ExtArgs> | null
    /**
     * Filter which payment_method_detail to delete.
     */
    where: payment_method_detailWhereUniqueInput
  }


  /**
   * payment_method_detail deleteMany
   */
  export type payment_method_detailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment_method_details to delete
     */
    where?: payment_method_detailWhereInput
  }


  /**
   * payment_method_detail.users
   */
  export type payment_method_detail$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }


  /**
   * payment_method_detail.payment_method
   */
  export type payment_method_detail$payment_methodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method
     */
    select?: payment_methodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_methodInclude<ExtArgs> | null
    where?: payment_methodWhereInput
  }


  /**
   * payment_method_detail.bill
   */
  export type payment_method_detail$billArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bill
     */
    select?: billSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billInclude<ExtArgs> | null
    where?: billWhereInput
    orderBy?: billOrderByWithRelationInput | billOrderByWithRelationInput[]
    cursor?: billWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }


  /**
   * payment_method_detail without action
   */
  export type payment_method_detailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_method_detail
     */
    select?: payment_method_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_method_detailInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    fullname: 'fullname',
    phone_number: 'phone_number',
    email: 'email',
    password: 'password',
    bio: 'bio',
    dob: 'dob',
    photo_profile: 'photo_profile',
    created_at: 'created_at',
    update_at: 'update_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    bill_id: 'bill_id',
    menu_name: 'menu_name',
    qty: 'qty',
    price: 'price'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const Friends_orderScalarFieldEnum: {
    id: 'id',
    orders_id: 'orders_id',
    friends_id: 'friends_id',
    friend_order_price: 'friend_order_price',
    status: 'status',
    created_at: 'created_at',
    update_at: 'update_at'
  };

  export type Friends_orderScalarFieldEnum = (typeof Friends_orderScalarFieldEnum)[keyof typeof Friends_orderScalarFieldEnum]


  export const FriendsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    friends_name: 'friends_name',
    friends_photo: 'friends_photo'
  };

  export type FriendsScalarFieldEnum = (typeof FriendsScalarFieldEnum)[keyof typeof FriendsScalarFieldEnum]


  export const BillScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    payment_method_id: 'payment_method_id',
    description: 'description',
    discount: 'discount',
    tax: 'tax',
    service: 'service',
    total_price: 'total_price',
    date: 'date',
    status: 'status'
  };

  export type BillScalarFieldEnum = (typeof BillScalarFieldEnum)[keyof typeof BillScalarFieldEnum]


  export const Payment_methodScalarFieldEnum: {
    id: 'id',
    payment_method_name: 'payment_method_name',
    payment_method_logo: 'payment_method_logo'
  };

  export type Payment_methodScalarFieldEnum = (typeof Payment_methodScalarFieldEnum)[keyof typeof Payment_methodScalarFieldEnum]


  export const Payment_method_detailScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    payment_method_id: 'payment_method_id',
    card_number: 'card_number',
    card_name: 'card_name'
  };

  export type Payment_method_detailScalarFieldEnum = (typeof Payment_method_detailScalarFieldEnum)[keyof typeof Payment_method_detailScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Order_status_Enum'
   */
  export type EnumOrder_status_EnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Order_status_Enum'>
    


  /**
   * Reference to a field of type 'Order_status_Enum[]'
   */
  export type ListEnumOrder_status_EnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Order_status_Enum[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Bill_status_Enum'
   */
  export type EnumBill_status_EnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bill_status_Enum'>
    


  /**
   * Reference to a field of type 'Bill_status_Enum[]'
   */
  export type ListEnumBill_status_EnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bill_status_Enum[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    username?: StringFilter<"users"> | string
    fullname?: StringFilter<"users"> | string
    phone_number?: StringFilter<"users"> | string
    email?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    bio?: StringNullableFilter<"users"> | string | null
    dob?: DateTimeNullableFilter<"users"> | Date | string | null
    photo_profile?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    update_at?: DateTimeFilter<"users"> | Date | string
    friends?: FriendsListRelationFilter
    orders?: OrdersListRelationFilter
    bill?: BillListRelationFilter
    payment_method_detail?: Payment_method_detailListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    fullname?: SortOrder
    phone_number?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    photo_profile?: SortOrderInput | SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    friends?: friendsOrderByRelationAggregateInput
    orders?: ordersOrderByRelationAggregateInput
    bill?: billOrderByRelationAggregateInput
    payment_method_detail?: payment_method_detailOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    fullname?: StringFilter<"users"> | string
    phone_number?: StringFilter<"users"> | string
    password?: StringNullableFilter<"users"> | string | null
    bio?: StringNullableFilter<"users"> | string | null
    dob?: DateTimeNullableFilter<"users"> | Date | string | null
    photo_profile?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    update_at?: DateTimeFilter<"users"> | Date | string
    friends?: FriendsListRelationFilter
    orders?: OrdersListRelationFilter
    bill?: BillListRelationFilter
    payment_method_detail?: Payment_method_detailListRelationFilter
  }, "id" | "username" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    fullname?: SortOrder
    phone_number?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    photo_profile?: SortOrderInput | SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    username?: StringWithAggregatesFilter<"users"> | string
    fullname?: StringWithAggregatesFilter<"users"> | string
    phone_number?: StringWithAggregatesFilter<"users"> | string
    email?: StringNullableWithAggregatesFilter<"users"> | string | null
    password?: StringNullableWithAggregatesFilter<"users"> | string | null
    bio?: StringNullableWithAggregatesFilter<"users"> | string | null
    dob?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    photo_profile?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    update_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type ordersWhereInput = {
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    id?: IntFilter<"orders"> | number
    user_id?: IntNullableFilter<"orders"> | number | null
    bill_id?: IntNullableFilter<"orders"> | number | null
    menu_name?: StringFilter<"orders"> | string
    qty?: IntFilter<"orders"> | number
    price?: BigIntFilter<"orders"> | bigint | number
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    bill?: XOR<BillNullableRelationFilter, billWhereInput> | null
    friends_order?: Friends_orderListRelationFilter
  }

  export type ordersOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    bill_id?: SortOrderInput | SortOrder
    menu_name?: SortOrder
    qty?: SortOrder
    price?: SortOrder
    users?: usersOrderByWithRelationInput
    bill?: billOrderByWithRelationInput
    friends_order?: friends_orderOrderByRelationAggregateInput
  }

  export type ordersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    user_id?: IntNullableFilter<"orders"> | number | null
    bill_id?: IntNullableFilter<"orders"> | number | null
    menu_name?: StringFilter<"orders"> | string
    qty?: IntFilter<"orders"> | number
    price?: BigIntFilter<"orders"> | bigint | number
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    bill?: XOR<BillNullableRelationFilter, billWhereInput> | null
    friends_order?: Friends_orderListRelationFilter
  }, "id">

  export type ordersOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    bill_id?: SortOrderInput | SortOrder
    menu_name?: SortOrder
    qty?: SortOrder
    price?: SortOrder
    _count?: ordersCountOrderByAggregateInput
    _avg?: ordersAvgOrderByAggregateInput
    _max?: ordersMaxOrderByAggregateInput
    _min?: ordersMinOrderByAggregateInput
    _sum?: ordersSumOrderByAggregateInput
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    OR?: ordersScalarWhereWithAggregatesInput[]
    NOT?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"orders"> | number
    user_id?: IntNullableWithAggregatesFilter<"orders"> | number | null
    bill_id?: IntNullableWithAggregatesFilter<"orders"> | number | null
    menu_name?: StringWithAggregatesFilter<"orders"> | string
    qty?: IntWithAggregatesFilter<"orders"> | number
    price?: BigIntWithAggregatesFilter<"orders"> | bigint | number
  }

  export type friends_orderWhereInput = {
    AND?: friends_orderWhereInput | friends_orderWhereInput[]
    OR?: friends_orderWhereInput[]
    NOT?: friends_orderWhereInput | friends_orderWhereInput[]
    id?: IntFilter<"friends_order"> | number
    orders_id?: IntNullableFilter<"friends_order"> | number | null
    friends_id?: IntNullableFilter<"friends_order"> | number | null
    friend_order_price?: BigIntFilter<"friends_order"> | bigint | number
    status?: EnumOrder_status_EnumFilter<"friends_order"> | $Enums.Order_status_Enum
    created_at?: DateTimeFilter<"friends_order"> | Date | string
    update_at?: DateTimeFilter<"friends_order"> | Date | string
    orders?: XOR<OrdersNullableRelationFilter, ordersWhereInput> | null
    friends?: XOR<FriendsNullableRelationFilter, friendsWhereInput> | null
  }

  export type friends_orderOrderByWithRelationInput = {
    id?: SortOrder
    orders_id?: SortOrderInput | SortOrder
    friends_id?: SortOrderInput | SortOrder
    friend_order_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    orders?: ordersOrderByWithRelationInput
    friends?: friendsOrderByWithRelationInput
  }

  export type friends_orderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: friends_orderWhereInput | friends_orderWhereInput[]
    OR?: friends_orderWhereInput[]
    NOT?: friends_orderWhereInput | friends_orderWhereInput[]
    orders_id?: IntNullableFilter<"friends_order"> | number | null
    friends_id?: IntNullableFilter<"friends_order"> | number | null
    friend_order_price?: BigIntFilter<"friends_order"> | bigint | number
    status?: EnumOrder_status_EnumFilter<"friends_order"> | $Enums.Order_status_Enum
    created_at?: DateTimeFilter<"friends_order"> | Date | string
    update_at?: DateTimeFilter<"friends_order"> | Date | string
    orders?: XOR<OrdersNullableRelationFilter, ordersWhereInput> | null
    friends?: XOR<FriendsNullableRelationFilter, friendsWhereInput> | null
  }, "id">

  export type friends_orderOrderByWithAggregationInput = {
    id?: SortOrder
    orders_id?: SortOrderInput | SortOrder
    friends_id?: SortOrderInput | SortOrder
    friend_order_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
    _count?: friends_orderCountOrderByAggregateInput
    _avg?: friends_orderAvgOrderByAggregateInput
    _max?: friends_orderMaxOrderByAggregateInput
    _min?: friends_orderMinOrderByAggregateInput
    _sum?: friends_orderSumOrderByAggregateInput
  }

  export type friends_orderScalarWhereWithAggregatesInput = {
    AND?: friends_orderScalarWhereWithAggregatesInput | friends_orderScalarWhereWithAggregatesInput[]
    OR?: friends_orderScalarWhereWithAggregatesInput[]
    NOT?: friends_orderScalarWhereWithAggregatesInput | friends_orderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"friends_order"> | number
    orders_id?: IntNullableWithAggregatesFilter<"friends_order"> | number | null
    friends_id?: IntNullableWithAggregatesFilter<"friends_order"> | number | null
    friend_order_price?: BigIntWithAggregatesFilter<"friends_order"> | bigint | number
    status?: EnumOrder_status_EnumWithAggregatesFilter<"friends_order"> | $Enums.Order_status_Enum
    created_at?: DateTimeWithAggregatesFilter<"friends_order"> | Date | string
    update_at?: DateTimeWithAggregatesFilter<"friends_order"> | Date | string
  }

  export type friendsWhereInput = {
    AND?: friendsWhereInput | friendsWhereInput[]
    OR?: friendsWhereInput[]
    NOT?: friendsWhereInput | friendsWhereInput[]
    id?: IntFilter<"friends"> | number
    user_id?: IntNullableFilter<"friends"> | number | null
    friends_name?: StringFilter<"friends"> | string
    friends_photo?: StringNullableFilter<"friends"> | string | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    friends_order?: Friends_orderListRelationFilter
  }

  export type friendsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    friends_name?: SortOrder
    friends_photo?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    friends_order?: friends_orderOrderByRelationAggregateInput
  }

  export type friendsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: friendsWhereInput | friendsWhereInput[]
    OR?: friendsWhereInput[]
    NOT?: friendsWhereInput | friendsWhereInput[]
    user_id?: IntNullableFilter<"friends"> | number | null
    friends_name?: StringFilter<"friends"> | string
    friends_photo?: StringNullableFilter<"friends"> | string | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    friends_order?: Friends_orderListRelationFilter
  }, "id">

  export type friendsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    friends_name?: SortOrder
    friends_photo?: SortOrderInput | SortOrder
    _count?: friendsCountOrderByAggregateInput
    _avg?: friendsAvgOrderByAggregateInput
    _max?: friendsMaxOrderByAggregateInput
    _min?: friendsMinOrderByAggregateInput
    _sum?: friendsSumOrderByAggregateInput
  }

  export type friendsScalarWhereWithAggregatesInput = {
    AND?: friendsScalarWhereWithAggregatesInput | friendsScalarWhereWithAggregatesInput[]
    OR?: friendsScalarWhereWithAggregatesInput[]
    NOT?: friendsScalarWhereWithAggregatesInput | friendsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"friends"> | number
    user_id?: IntNullableWithAggregatesFilter<"friends"> | number | null
    friends_name?: StringWithAggregatesFilter<"friends"> | string
    friends_photo?: StringNullableWithAggregatesFilter<"friends"> | string | null
  }

  export type billWhereInput = {
    AND?: billWhereInput | billWhereInput[]
    OR?: billWhereInput[]
    NOT?: billWhereInput | billWhereInput[]
    id?: IntFilter<"bill"> | number
    user_id?: IntNullableFilter<"bill"> | number | null
    payment_method_id?: IntNullableFilter<"bill"> | number | null
    description?: StringFilter<"bill"> | string
    discount?: FloatNullableFilter<"bill"> | number | null
    tax?: IntFilter<"bill"> | number
    service?: FloatNullableFilter<"bill"> | number | null
    total_price?: BigIntFilter<"bill"> | bigint | number
    date?: DateTimeFilter<"bill"> | Date | string
    status?: EnumBill_status_EnumFilter<"bill"> | $Enums.Bill_status_Enum
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    payment_method_details?: XOR<Payment_method_detailNullableRelationFilter, payment_method_detailWhereInput> | null
    orders?: OrdersListRelationFilter
  }

  export type billOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    payment_method_id?: SortOrderInput | SortOrder
    description?: SortOrder
    discount?: SortOrderInput | SortOrder
    tax?: SortOrder
    service?: SortOrderInput | SortOrder
    total_price?: SortOrder
    date?: SortOrder
    status?: SortOrder
    users?: usersOrderByWithRelationInput
    payment_method_details?: payment_method_detailOrderByWithRelationInput
    orders?: ordersOrderByRelationAggregateInput
  }

  export type billWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: billWhereInput | billWhereInput[]
    OR?: billWhereInput[]
    NOT?: billWhereInput | billWhereInput[]
    user_id?: IntNullableFilter<"bill"> | number | null
    payment_method_id?: IntNullableFilter<"bill"> | number | null
    description?: StringFilter<"bill"> | string
    discount?: FloatNullableFilter<"bill"> | number | null
    tax?: IntFilter<"bill"> | number
    service?: FloatNullableFilter<"bill"> | number | null
    total_price?: BigIntFilter<"bill"> | bigint | number
    date?: DateTimeFilter<"bill"> | Date | string
    status?: EnumBill_status_EnumFilter<"bill"> | $Enums.Bill_status_Enum
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    payment_method_details?: XOR<Payment_method_detailNullableRelationFilter, payment_method_detailWhereInput> | null
    orders?: OrdersListRelationFilter
  }, "id">

  export type billOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    payment_method_id?: SortOrderInput | SortOrder
    description?: SortOrder
    discount?: SortOrderInput | SortOrder
    tax?: SortOrder
    service?: SortOrderInput | SortOrder
    total_price?: SortOrder
    date?: SortOrder
    status?: SortOrder
    _count?: billCountOrderByAggregateInput
    _avg?: billAvgOrderByAggregateInput
    _max?: billMaxOrderByAggregateInput
    _min?: billMinOrderByAggregateInput
    _sum?: billSumOrderByAggregateInput
  }

  export type billScalarWhereWithAggregatesInput = {
    AND?: billScalarWhereWithAggregatesInput | billScalarWhereWithAggregatesInput[]
    OR?: billScalarWhereWithAggregatesInput[]
    NOT?: billScalarWhereWithAggregatesInput | billScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"bill"> | number
    user_id?: IntNullableWithAggregatesFilter<"bill"> | number | null
    payment_method_id?: IntNullableWithAggregatesFilter<"bill"> | number | null
    description?: StringWithAggregatesFilter<"bill"> | string
    discount?: FloatNullableWithAggregatesFilter<"bill"> | number | null
    tax?: IntWithAggregatesFilter<"bill"> | number
    service?: FloatNullableWithAggregatesFilter<"bill"> | number | null
    total_price?: BigIntWithAggregatesFilter<"bill"> | bigint | number
    date?: DateTimeWithAggregatesFilter<"bill"> | Date | string
    status?: EnumBill_status_EnumWithAggregatesFilter<"bill"> | $Enums.Bill_status_Enum
  }

  export type payment_methodWhereInput = {
    AND?: payment_methodWhereInput | payment_methodWhereInput[]
    OR?: payment_methodWhereInput[]
    NOT?: payment_methodWhereInput | payment_methodWhereInput[]
    id?: IntFilter<"payment_method"> | number
    payment_method_name?: StringFilter<"payment_method"> | string
    payment_method_logo?: StringFilter<"payment_method"> | string
    payment_method_detail?: Payment_method_detailListRelationFilter
  }

  export type payment_methodOrderByWithRelationInput = {
    id?: SortOrder
    payment_method_name?: SortOrder
    payment_method_logo?: SortOrder
    payment_method_detail?: payment_method_detailOrderByRelationAggregateInput
  }

  export type payment_methodWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: payment_methodWhereInput | payment_methodWhereInput[]
    OR?: payment_methodWhereInput[]
    NOT?: payment_methodWhereInput | payment_methodWhereInput[]
    payment_method_name?: StringFilter<"payment_method"> | string
    payment_method_logo?: StringFilter<"payment_method"> | string
    payment_method_detail?: Payment_method_detailListRelationFilter
  }, "id">

  export type payment_methodOrderByWithAggregationInput = {
    id?: SortOrder
    payment_method_name?: SortOrder
    payment_method_logo?: SortOrder
    _count?: payment_methodCountOrderByAggregateInput
    _avg?: payment_methodAvgOrderByAggregateInput
    _max?: payment_methodMaxOrderByAggregateInput
    _min?: payment_methodMinOrderByAggregateInput
    _sum?: payment_methodSumOrderByAggregateInput
  }

  export type payment_methodScalarWhereWithAggregatesInput = {
    AND?: payment_methodScalarWhereWithAggregatesInput | payment_methodScalarWhereWithAggregatesInput[]
    OR?: payment_methodScalarWhereWithAggregatesInput[]
    NOT?: payment_methodScalarWhereWithAggregatesInput | payment_methodScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"payment_method"> | number
    payment_method_name?: StringWithAggregatesFilter<"payment_method"> | string
    payment_method_logo?: StringWithAggregatesFilter<"payment_method"> | string
  }

  export type payment_method_detailWhereInput = {
    AND?: payment_method_detailWhereInput | payment_method_detailWhereInput[]
    OR?: payment_method_detailWhereInput[]
    NOT?: payment_method_detailWhereInput | payment_method_detailWhereInput[]
    id?: IntFilter<"payment_method_detail"> | number
    user_id?: IntNullableFilter<"payment_method_detail"> | number | null
    payment_method_id?: IntNullableFilter<"payment_method_detail"> | number | null
    card_number?: BigIntFilter<"payment_method_detail"> | bigint | number
    card_name?: StringFilter<"payment_method_detail"> | string
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    payment_method?: XOR<Payment_methodNullableRelationFilter, payment_methodWhereInput> | null
    bill?: BillListRelationFilter
  }

  export type payment_method_detailOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    payment_method_id?: SortOrderInput | SortOrder
    card_number?: SortOrder
    card_name?: SortOrder
    users?: usersOrderByWithRelationInput
    payment_method?: payment_methodOrderByWithRelationInput
    bill?: billOrderByRelationAggregateInput
  }

  export type payment_method_detailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: payment_method_detailWhereInput | payment_method_detailWhereInput[]
    OR?: payment_method_detailWhereInput[]
    NOT?: payment_method_detailWhereInput | payment_method_detailWhereInput[]
    user_id?: IntNullableFilter<"payment_method_detail"> | number | null
    payment_method_id?: IntNullableFilter<"payment_method_detail"> | number | null
    card_number?: BigIntFilter<"payment_method_detail"> | bigint | number
    card_name?: StringFilter<"payment_method_detail"> | string
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    payment_method?: XOR<Payment_methodNullableRelationFilter, payment_methodWhereInput> | null
    bill?: BillListRelationFilter
  }, "id">

  export type payment_method_detailOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    payment_method_id?: SortOrderInput | SortOrder
    card_number?: SortOrder
    card_name?: SortOrder
    _count?: payment_method_detailCountOrderByAggregateInput
    _avg?: payment_method_detailAvgOrderByAggregateInput
    _max?: payment_method_detailMaxOrderByAggregateInput
    _min?: payment_method_detailMinOrderByAggregateInput
    _sum?: payment_method_detailSumOrderByAggregateInput
  }

  export type payment_method_detailScalarWhereWithAggregatesInput = {
    AND?: payment_method_detailScalarWhereWithAggregatesInput | payment_method_detailScalarWhereWithAggregatesInput[]
    OR?: payment_method_detailScalarWhereWithAggregatesInput[]
    NOT?: payment_method_detailScalarWhereWithAggregatesInput | payment_method_detailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"payment_method_detail"> | number
    user_id?: IntNullableWithAggregatesFilter<"payment_method_detail"> | number | null
    payment_method_id?: IntNullableWithAggregatesFilter<"payment_method_detail"> | number | null
    card_number?: BigIntWithAggregatesFilter<"payment_method_detail"> | bigint | number
    card_name?: StringWithAggregatesFilter<"payment_method_detail"> | string
  }

  export type usersCreateInput = {
    username: string
    fullname: string
    phone_number: string
    email?: string | null
    password?: string | null
    bio?: string | null
    dob?: Date | string | null
    photo_profile?: string | null
    created_at?: Date | string
    update_at?: Date | string
    friends?: friendsCreateNestedManyWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
    bill?: billCreateNestedManyWithoutUsersInput
    payment_method_detail?: payment_method_detailCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    username: string
    fullname: string
    phone_number: string
    email?: string | null
    password?: string | null
    bio?: string | null
    dob?: Date | string | null
    photo_profile?: string | null
    created_at?: Date | string
    update_at?: Date | string
    friends?: friendsUncheckedCreateNestedManyWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
    bill?: billUncheckedCreateNestedManyWithoutUsersInput
    payment_method_detail?: payment_method_detailUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_profile?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    friends?: friendsUpdateManyWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
    bill?: billUpdateManyWithoutUsersNestedInput
    payment_method_detail?: payment_method_detailUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_profile?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    friends?: friendsUncheckedUpdateManyWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
    bill?: billUncheckedUpdateManyWithoutUsersNestedInput
    payment_method_detail?: payment_method_detailUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    username: string
    fullname: string
    phone_number: string
    email?: string | null
    password?: string | null
    bio?: string | null
    dob?: Date | string | null
    photo_profile?: string | null
    created_at?: Date | string
    update_at?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_profile?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_profile?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersCreateInput = {
    menu_name: string
    qty: number
    price: bigint | number
    users?: usersCreateNestedOneWithoutOrdersInput
    bill?: billCreateNestedOneWithoutOrdersInput
    friends_order?: friends_orderCreateNestedManyWithoutOrdersInput
  }

  export type ordersUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    bill_id?: number | null
    menu_name: string
    qty: number
    price: bigint | number
    friends_order?: friends_orderUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersUpdateInput = {
    menu_name?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    users?: usersUpdateOneWithoutOrdersNestedInput
    bill?: billUpdateOneWithoutOrdersNestedInput
    friends_order?: friends_orderUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    bill_id?: NullableIntFieldUpdateOperationsInput | number | null
    menu_name?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    friends_order?: friends_orderUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersCreateManyInput = {
    id?: number
    user_id?: number | null
    bill_id?: number | null
    menu_name: string
    qty: number
    price: bigint | number
  }

  export type ordersUpdateManyMutationInput = {
    menu_name?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    price?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ordersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    bill_id?: NullableIntFieldUpdateOperationsInput | number | null
    menu_name?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    price?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type friends_orderCreateInput = {
    friend_order_price: bigint | number
    status: $Enums.Order_status_Enum
    created_at?: Date | string
    update_at?: Date | string
    orders?: ordersCreateNestedOneWithoutFriends_orderInput
    friends?: friendsCreateNestedOneWithoutFriends_orderInput
  }

  export type friends_orderUncheckedCreateInput = {
    id?: number
    orders_id?: number | null
    friends_id?: number | null
    friend_order_price: bigint | number
    status: $Enums.Order_status_Enum
    created_at?: Date | string
    update_at?: Date | string
  }

  export type friends_orderUpdateInput = {
    friend_order_price?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumOrder_status_EnumFieldUpdateOperationsInput | $Enums.Order_status_Enum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUpdateOneWithoutFriends_orderNestedInput
    friends?: friendsUpdateOneWithoutFriends_orderNestedInput
  }

  export type friends_orderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orders_id?: NullableIntFieldUpdateOperationsInput | number | null
    friends_id?: NullableIntFieldUpdateOperationsInput | number | null
    friend_order_price?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumOrder_status_EnumFieldUpdateOperationsInput | $Enums.Order_status_Enum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type friends_orderCreateManyInput = {
    id?: number
    orders_id?: number | null
    friends_id?: number | null
    friend_order_price: bigint | number
    status: $Enums.Order_status_Enum
    created_at?: Date | string
    update_at?: Date | string
  }

  export type friends_orderUpdateManyMutationInput = {
    friend_order_price?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumOrder_status_EnumFieldUpdateOperationsInput | $Enums.Order_status_Enum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type friends_orderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orders_id?: NullableIntFieldUpdateOperationsInput | number | null
    friends_id?: NullableIntFieldUpdateOperationsInput | number | null
    friend_order_price?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumOrder_status_EnumFieldUpdateOperationsInput | $Enums.Order_status_Enum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type friendsCreateInput = {
    friends_name: string
    friends_photo?: string | null
    users?: usersCreateNestedOneWithoutFriendsInput
    friends_order?: friends_orderCreateNestedManyWithoutFriendsInput
  }

  export type friendsUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    friends_name: string
    friends_photo?: string | null
    friends_order?: friends_orderUncheckedCreateNestedManyWithoutFriendsInput
  }

  export type friendsUpdateInput = {
    friends_name?: StringFieldUpdateOperationsInput | string
    friends_photo?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneWithoutFriendsNestedInput
    friends_order?: friends_orderUpdateManyWithoutFriendsNestedInput
  }

  export type friendsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    friends_name?: StringFieldUpdateOperationsInput | string
    friends_photo?: NullableStringFieldUpdateOperationsInput | string | null
    friends_order?: friends_orderUncheckedUpdateManyWithoutFriendsNestedInput
  }

  export type friendsCreateManyInput = {
    id?: number
    user_id?: number | null
    friends_name: string
    friends_photo?: string | null
  }

  export type friendsUpdateManyMutationInput = {
    friends_name?: StringFieldUpdateOperationsInput | string
    friends_photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type friendsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    friends_name?: StringFieldUpdateOperationsInput | string
    friends_photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type billCreateInput = {
    description: string
    discount?: number | null
    tax: number
    service?: number | null
    total_price: bigint | number
    date?: Date | string
    status: $Enums.Bill_status_Enum
    users?: usersCreateNestedOneWithoutBillInput
    payment_method_details?: payment_method_detailCreateNestedOneWithoutBillInput
    orders?: ordersCreateNestedManyWithoutBillInput
  }

  export type billUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    payment_method_id?: number | null
    description: string
    discount?: number | null
    tax: number
    service?: number | null
    total_price: bigint | number
    date?: Date | string
    status: $Enums.Bill_status_Enum
    orders?: ordersUncheckedCreateNestedManyWithoutBillInput
  }

  export type billUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    tax?: IntFieldUpdateOperationsInput | number
    service?: NullableFloatFieldUpdateOperationsInput | number | null
    total_price?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBill_status_EnumFieldUpdateOperationsInput | $Enums.Bill_status_Enum
    users?: usersUpdateOneWithoutBillNestedInput
    payment_method_details?: payment_method_detailUpdateOneWithoutBillNestedInput
    orders?: ordersUpdateManyWithoutBillNestedInput
  }

  export type billUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    payment_method_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    tax?: IntFieldUpdateOperationsInput | number
    service?: NullableFloatFieldUpdateOperationsInput | number | null
    total_price?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBill_status_EnumFieldUpdateOperationsInput | $Enums.Bill_status_Enum
    orders?: ordersUncheckedUpdateManyWithoutBillNestedInput
  }

  export type billCreateManyInput = {
    id?: number
    user_id?: number | null
    payment_method_id?: number | null
    description: string
    discount?: number | null
    tax: number
    service?: number | null
    total_price: bigint | number
    date?: Date | string
    status: $Enums.Bill_status_Enum
  }

  export type billUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    tax?: IntFieldUpdateOperationsInput | number
    service?: NullableFloatFieldUpdateOperationsInput | number | null
    total_price?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBill_status_EnumFieldUpdateOperationsInput | $Enums.Bill_status_Enum
  }

  export type billUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    payment_method_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    tax?: IntFieldUpdateOperationsInput | number
    service?: NullableFloatFieldUpdateOperationsInput | number | null
    total_price?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBill_status_EnumFieldUpdateOperationsInput | $Enums.Bill_status_Enum
  }

  export type payment_methodCreateInput = {
    payment_method_name: string
    payment_method_logo: string
    payment_method_detail?: payment_method_detailCreateNestedManyWithoutPayment_methodInput
  }

  export type payment_methodUncheckedCreateInput = {
    id?: number
    payment_method_name: string
    payment_method_logo: string
    payment_method_detail?: payment_method_detailUncheckedCreateNestedManyWithoutPayment_methodInput
  }

  export type payment_methodUpdateInput = {
    payment_method_name?: StringFieldUpdateOperationsInput | string
    payment_method_logo?: StringFieldUpdateOperationsInput | string
    payment_method_detail?: payment_method_detailUpdateManyWithoutPayment_methodNestedInput
  }

  export type payment_methodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    payment_method_name?: StringFieldUpdateOperationsInput | string
    payment_method_logo?: StringFieldUpdateOperationsInput | string
    payment_method_detail?: payment_method_detailUncheckedUpdateManyWithoutPayment_methodNestedInput
  }

  export type payment_methodCreateManyInput = {
    id?: number
    payment_method_name: string
    payment_method_logo: string
  }

  export type payment_methodUpdateManyMutationInput = {
    payment_method_name?: StringFieldUpdateOperationsInput | string
    payment_method_logo?: StringFieldUpdateOperationsInput | string
  }

  export type payment_methodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    payment_method_name?: StringFieldUpdateOperationsInput | string
    payment_method_logo?: StringFieldUpdateOperationsInput | string
  }

  export type payment_method_detailCreateInput = {
    card_number: bigint | number
    card_name: string
    users?: usersCreateNestedOneWithoutPayment_method_detailInput
    payment_method?: payment_methodCreateNestedOneWithoutPayment_method_detailInput
    bill?: billCreateNestedManyWithoutPayment_method_detailsInput
  }

  export type payment_method_detailUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    payment_method_id?: number | null
    card_number: bigint | number
    card_name: string
    bill?: billUncheckedCreateNestedManyWithoutPayment_method_detailsInput
  }

  export type payment_method_detailUpdateInput = {
    card_number?: BigIntFieldUpdateOperationsInput | bigint | number
    card_name?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateOneWithoutPayment_method_detailNestedInput
    payment_method?: payment_methodUpdateOneWithoutPayment_method_detailNestedInput
    bill?: billUpdateManyWithoutPayment_method_detailsNestedInput
  }

  export type payment_method_detailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    payment_method_id?: NullableIntFieldUpdateOperationsInput | number | null
    card_number?: BigIntFieldUpdateOperationsInput | bigint | number
    card_name?: StringFieldUpdateOperationsInput | string
    bill?: billUncheckedUpdateManyWithoutPayment_method_detailsNestedInput
  }

  export type payment_method_detailCreateManyInput = {
    id?: number
    user_id?: number | null
    payment_method_id?: number | null
    card_number: bigint | number
    card_name: string
  }

  export type payment_method_detailUpdateManyMutationInput = {
    card_number?: BigIntFieldUpdateOperationsInput | bigint | number
    card_name?: StringFieldUpdateOperationsInput | string
  }

  export type payment_method_detailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    payment_method_id?: NullableIntFieldUpdateOperationsInput | number | null
    card_number?: BigIntFieldUpdateOperationsInput | bigint | number
    card_name?: StringFieldUpdateOperationsInput | string
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

  export type FriendsListRelationFilter = {
    every?: friendsWhereInput
    some?: friendsWhereInput
    none?: friendsWhereInput
  }

  export type OrdersListRelationFilter = {
    every?: ordersWhereInput
    some?: ordersWhereInput
    none?: ordersWhereInput
  }

  export type BillListRelationFilter = {
    every?: billWhereInput
    some?: billWhereInput
    none?: billWhereInput
  }

  export type Payment_method_detailListRelationFilter = {
    every?: payment_method_detailWhereInput
    some?: payment_method_detailWhereInput
    none?: payment_method_detailWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type friendsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ordersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type billOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type payment_method_detailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    fullname?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    password?: SortOrder
    bio?: SortOrder
    dob?: SortOrder
    photo_profile?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    fullname?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    password?: SortOrder
    bio?: SortOrder
    dob?: SortOrder
    photo_profile?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    fullname?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    password?: SortOrder
    bio?: SortOrder
    dob?: SortOrder
    photo_profile?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type UsersNullableRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type BillNullableRelationFilter = {
    is?: billWhereInput | null
    isNot?: billWhereInput | null
  }

  export type Friends_orderListRelationFilter = {
    every?: friends_orderWhereInput
    some?: friends_orderWhereInput
    none?: friends_orderWhereInput
  }

  export type friends_orderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ordersCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bill_id?: SortOrder
    menu_name?: SortOrder
    qty?: SortOrder
    price?: SortOrder
  }

  export type ordersAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bill_id?: SortOrder
    qty?: SortOrder
    price?: SortOrder
  }

  export type ordersMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bill_id?: SortOrder
    menu_name?: SortOrder
    qty?: SortOrder
    price?: SortOrder
  }

  export type ordersMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bill_id?: SortOrder
    menu_name?: SortOrder
    qty?: SortOrder
    price?: SortOrder
  }

  export type ordersSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bill_id?: SortOrder
    qty?: SortOrder
    price?: SortOrder
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

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type EnumOrder_status_EnumFilter<$PrismaModel = never> = {
    equals?: $Enums.Order_status_Enum | EnumOrder_status_EnumFieldRefInput<$PrismaModel>
    in?: $Enums.Order_status_Enum[] | ListEnumOrder_status_EnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.Order_status_Enum[] | ListEnumOrder_status_EnumFieldRefInput<$PrismaModel>
    not?: NestedEnumOrder_status_EnumFilter<$PrismaModel> | $Enums.Order_status_Enum
  }

  export type OrdersNullableRelationFilter = {
    is?: ordersWhereInput | null
    isNot?: ordersWhereInput | null
  }

  export type FriendsNullableRelationFilter = {
    is?: friendsWhereInput | null
    isNot?: friendsWhereInput | null
  }

  export type friends_orderCountOrderByAggregateInput = {
    id?: SortOrder
    orders_id?: SortOrder
    friends_id?: SortOrder
    friend_order_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type friends_orderAvgOrderByAggregateInput = {
    id?: SortOrder
    orders_id?: SortOrder
    friends_id?: SortOrder
    friend_order_price?: SortOrder
  }

  export type friends_orderMaxOrderByAggregateInput = {
    id?: SortOrder
    orders_id?: SortOrder
    friends_id?: SortOrder
    friend_order_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type friends_orderMinOrderByAggregateInput = {
    id?: SortOrder
    orders_id?: SortOrder
    friends_id?: SortOrder
    friend_order_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    update_at?: SortOrder
  }

  export type friends_orderSumOrderByAggregateInput = {
    id?: SortOrder
    orders_id?: SortOrder
    friends_id?: SortOrder
    friend_order_price?: SortOrder
  }

  export type EnumOrder_status_EnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Order_status_Enum | EnumOrder_status_EnumFieldRefInput<$PrismaModel>
    in?: $Enums.Order_status_Enum[] | ListEnumOrder_status_EnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.Order_status_Enum[] | ListEnumOrder_status_EnumFieldRefInput<$PrismaModel>
    not?: NestedEnumOrder_status_EnumWithAggregatesFilter<$PrismaModel> | $Enums.Order_status_Enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrder_status_EnumFilter<$PrismaModel>
    _max?: NestedEnumOrder_status_EnumFilter<$PrismaModel>
  }

  export type friendsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    friends_name?: SortOrder
    friends_photo?: SortOrder
  }

  export type friendsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type friendsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    friends_name?: SortOrder
    friends_photo?: SortOrder
  }

  export type friendsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    friends_name?: SortOrder
    friends_photo?: SortOrder
  }

  export type friendsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
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

  export type EnumBill_status_EnumFilter<$PrismaModel = never> = {
    equals?: $Enums.Bill_status_Enum | EnumBill_status_EnumFieldRefInput<$PrismaModel>
    in?: $Enums.Bill_status_Enum[] | ListEnumBill_status_EnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.Bill_status_Enum[] | ListEnumBill_status_EnumFieldRefInput<$PrismaModel>
    not?: NestedEnumBill_status_EnumFilter<$PrismaModel> | $Enums.Bill_status_Enum
  }

  export type Payment_method_detailNullableRelationFilter = {
    is?: payment_method_detailWhereInput | null
    isNot?: payment_method_detailWhereInput | null
  }

  export type billCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    payment_method_id?: SortOrder
    description?: SortOrder
    discount?: SortOrder
    tax?: SortOrder
    service?: SortOrder
    total_price?: SortOrder
    date?: SortOrder
    status?: SortOrder
  }

  export type billAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    payment_method_id?: SortOrder
    discount?: SortOrder
    tax?: SortOrder
    service?: SortOrder
    total_price?: SortOrder
  }

  export type billMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    payment_method_id?: SortOrder
    description?: SortOrder
    discount?: SortOrder
    tax?: SortOrder
    service?: SortOrder
    total_price?: SortOrder
    date?: SortOrder
    status?: SortOrder
  }

  export type billMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    payment_method_id?: SortOrder
    description?: SortOrder
    discount?: SortOrder
    tax?: SortOrder
    service?: SortOrder
    total_price?: SortOrder
    date?: SortOrder
    status?: SortOrder
  }

  export type billSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    payment_method_id?: SortOrder
    discount?: SortOrder
    tax?: SortOrder
    service?: SortOrder
    total_price?: SortOrder
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

  export type EnumBill_status_EnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Bill_status_Enum | EnumBill_status_EnumFieldRefInput<$PrismaModel>
    in?: $Enums.Bill_status_Enum[] | ListEnumBill_status_EnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.Bill_status_Enum[] | ListEnumBill_status_EnumFieldRefInput<$PrismaModel>
    not?: NestedEnumBill_status_EnumWithAggregatesFilter<$PrismaModel> | $Enums.Bill_status_Enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBill_status_EnumFilter<$PrismaModel>
    _max?: NestedEnumBill_status_EnumFilter<$PrismaModel>
  }

  export type payment_methodCountOrderByAggregateInput = {
    id?: SortOrder
    payment_method_name?: SortOrder
    payment_method_logo?: SortOrder
  }

  export type payment_methodAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type payment_methodMaxOrderByAggregateInput = {
    id?: SortOrder
    payment_method_name?: SortOrder
    payment_method_logo?: SortOrder
  }

  export type payment_methodMinOrderByAggregateInput = {
    id?: SortOrder
    payment_method_name?: SortOrder
    payment_method_logo?: SortOrder
  }

  export type payment_methodSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Payment_methodNullableRelationFilter = {
    is?: payment_methodWhereInput | null
    isNot?: payment_methodWhereInput | null
  }

  export type payment_method_detailCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    payment_method_id?: SortOrder
    card_number?: SortOrder
    card_name?: SortOrder
  }

  export type payment_method_detailAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    payment_method_id?: SortOrder
    card_number?: SortOrder
  }

  export type payment_method_detailMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    payment_method_id?: SortOrder
    card_number?: SortOrder
    card_name?: SortOrder
  }

  export type payment_method_detailMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    payment_method_id?: SortOrder
    card_number?: SortOrder
    card_name?: SortOrder
  }

  export type payment_method_detailSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    payment_method_id?: SortOrder
    card_number?: SortOrder
  }

  export type friendsCreateNestedManyWithoutUsersInput = {
    create?: XOR<friendsCreateWithoutUsersInput, friendsUncheckedCreateWithoutUsersInput> | friendsCreateWithoutUsersInput[] | friendsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: friendsCreateOrConnectWithoutUsersInput | friendsCreateOrConnectWithoutUsersInput[]
    createMany?: friendsCreateManyUsersInputEnvelope
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
  }

  export type ordersCreateNestedManyWithoutUsersInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type billCreateNestedManyWithoutUsersInput = {
    create?: XOR<billCreateWithoutUsersInput, billUncheckedCreateWithoutUsersInput> | billCreateWithoutUsersInput[] | billUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: billCreateOrConnectWithoutUsersInput | billCreateOrConnectWithoutUsersInput[]
    createMany?: billCreateManyUsersInputEnvelope
    connect?: billWhereUniqueInput | billWhereUniqueInput[]
  }

  export type payment_method_detailCreateNestedManyWithoutUsersInput = {
    create?: XOR<payment_method_detailCreateWithoutUsersInput, payment_method_detailUncheckedCreateWithoutUsersInput> | payment_method_detailCreateWithoutUsersInput[] | payment_method_detailUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: payment_method_detailCreateOrConnectWithoutUsersInput | payment_method_detailCreateOrConnectWithoutUsersInput[]
    createMany?: payment_method_detailCreateManyUsersInputEnvelope
    connect?: payment_method_detailWhereUniqueInput | payment_method_detailWhereUniqueInput[]
  }

  export type friendsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<friendsCreateWithoutUsersInput, friendsUncheckedCreateWithoutUsersInput> | friendsCreateWithoutUsersInput[] | friendsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: friendsCreateOrConnectWithoutUsersInput | friendsCreateOrConnectWithoutUsersInput[]
    createMany?: friendsCreateManyUsersInputEnvelope
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type billUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<billCreateWithoutUsersInput, billUncheckedCreateWithoutUsersInput> | billCreateWithoutUsersInput[] | billUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: billCreateOrConnectWithoutUsersInput | billCreateOrConnectWithoutUsersInput[]
    createMany?: billCreateManyUsersInputEnvelope
    connect?: billWhereUniqueInput | billWhereUniqueInput[]
  }

  export type payment_method_detailUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<payment_method_detailCreateWithoutUsersInput, payment_method_detailUncheckedCreateWithoutUsersInput> | payment_method_detailCreateWithoutUsersInput[] | payment_method_detailUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: payment_method_detailCreateOrConnectWithoutUsersInput | payment_method_detailCreateOrConnectWithoutUsersInput[]
    createMany?: payment_method_detailCreateManyUsersInputEnvelope
    connect?: payment_method_detailWhereUniqueInput | payment_method_detailWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type friendsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<friendsCreateWithoutUsersInput, friendsUncheckedCreateWithoutUsersInput> | friendsCreateWithoutUsersInput[] | friendsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: friendsCreateOrConnectWithoutUsersInput | friendsCreateOrConnectWithoutUsersInput[]
    upsert?: friendsUpsertWithWhereUniqueWithoutUsersInput | friendsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: friendsCreateManyUsersInputEnvelope
    set?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    disconnect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    delete?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    update?: friendsUpdateWithWhereUniqueWithoutUsersInput | friendsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: friendsUpdateManyWithWhereWithoutUsersInput | friendsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: friendsScalarWhereInput | friendsScalarWhereInput[]
  }

  export type ordersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUsersInput | ordersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUsersInput | ordersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUsersInput | ordersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type billUpdateManyWithoutUsersNestedInput = {
    create?: XOR<billCreateWithoutUsersInput, billUncheckedCreateWithoutUsersInput> | billCreateWithoutUsersInput[] | billUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: billCreateOrConnectWithoutUsersInput | billCreateOrConnectWithoutUsersInput[]
    upsert?: billUpsertWithWhereUniqueWithoutUsersInput | billUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: billCreateManyUsersInputEnvelope
    set?: billWhereUniqueInput | billWhereUniqueInput[]
    disconnect?: billWhereUniqueInput | billWhereUniqueInput[]
    delete?: billWhereUniqueInput | billWhereUniqueInput[]
    connect?: billWhereUniqueInput | billWhereUniqueInput[]
    update?: billUpdateWithWhereUniqueWithoutUsersInput | billUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: billUpdateManyWithWhereWithoutUsersInput | billUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: billScalarWhereInput | billScalarWhereInput[]
  }

  export type payment_method_detailUpdateManyWithoutUsersNestedInput = {
    create?: XOR<payment_method_detailCreateWithoutUsersInput, payment_method_detailUncheckedCreateWithoutUsersInput> | payment_method_detailCreateWithoutUsersInput[] | payment_method_detailUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: payment_method_detailCreateOrConnectWithoutUsersInput | payment_method_detailCreateOrConnectWithoutUsersInput[]
    upsert?: payment_method_detailUpsertWithWhereUniqueWithoutUsersInput | payment_method_detailUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: payment_method_detailCreateManyUsersInputEnvelope
    set?: payment_method_detailWhereUniqueInput | payment_method_detailWhereUniqueInput[]
    disconnect?: payment_method_detailWhereUniqueInput | payment_method_detailWhereUniqueInput[]
    delete?: payment_method_detailWhereUniqueInput | payment_method_detailWhereUniqueInput[]
    connect?: payment_method_detailWhereUniqueInput | payment_method_detailWhereUniqueInput[]
    update?: payment_method_detailUpdateWithWhereUniqueWithoutUsersInput | payment_method_detailUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: payment_method_detailUpdateManyWithWhereWithoutUsersInput | payment_method_detailUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: payment_method_detailScalarWhereInput | payment_method_detailScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type friendsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<friendsCreateWithoutUsersInput, friendsUncheckedCreateWithoutUsersInput> | friendsCreateWithoutUsersInput[] | friendsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: friendsCreateOrConnectWithoutUsersInput | friendsCreateOrConnectWithoutUsersInput[]
    upsert?: friendsUpsertWithWhereUniqueWithoutUsersInput | friendsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: friendsCreateManyUsersInputEnvelope
    set?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    disconnect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    delete?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    connect?: friendsWhereUniqueInput | friendsWhereUniqueInput[]
    update?: friendsUpdateWithWhereUniqueWithoutUsersInput | friendsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: friendsUpdateManyWithWhereWithoutUsersInput | friendsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: friendsScalarWhereInput | friendsScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUsersInput | ordersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUsersInput | ordersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUsersInput | ordersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type billUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<billCreateWithoutUsersInput, billUncheckedCreateWithoutUsersInput> | billCreateWithoutUsersInput[] | billUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: billCreateOrConnectWithoutUsersInput | billCreateOrConnectWithoutUsersInput[]
    upsert?: billUpsertWithWhereUniqueWithoutUsersInput | billUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: billCreateManyUsersInputEnvelope
    set?: billWhereUniqueInput | billWhereUniqueInput[]
    disconnect?: billWhereUniqueInput | billWhereUniqueInput[]
    delete?: billWhereUniqueInput | billWhereUniqueInput[]
    connect?: billWhereUniqueInput | billWhereUniqueInput[]
    update?: billUpdateWithWhereUniqueWithoutUsersInput | billUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: billUpdateManyWithWhereWithoutUsersInput | billUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: billScalarWhereInput | billScalarWhereInput[]
  }

  export type payment_method_detailUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<payment_method_detailCreateWithoutUsersInput, payment_method_detailUncheckedCreateWithoutUsersInput> | payment_method_detailCreateWithoutUsersInput[] | payment_method_detailUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: payment_method_detailCreateOrConnectWithoutUsersInput | payment_method_detailCreateOrConnectWithoutUsersInput[]
    upsert?: payment_method_detailUpsertWithWhereUniqueWithoutUsersInput | payment_method_detailUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: payment_method_detailCreateManyUsersInputEnvelope
    set?: payment_method_detailWhereUniqueInput | payment_method_detailWhereUniqueInput[]
    disconnect?: payment_method_detailWhereUniqueInput | payment_method_detailWhereUniqueInput[]
    delete?: payment_method_detailWhereUniqueInput | payment_method_detailWhereUniqueInput[]
    connect?: payment_method_detailWhereUniqueInput | payment_method_detailWhereUniqueInput[]
    update?: payment_method_detailUpdateWithWhereUniqueWithoutUsersInput | payment_method_detailUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: payment_method_detailUpdateManyWithWhereWithoutUsersInput | payment_method_detailUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: payment_method_detailScalarWhereInput | payment_method_detailScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrdersInput
    connect?: usersWhereUniqueInput
  }

  export type billCreateNestedOneWithoutOrdersInput = {
    create?: XOR<billCreateWithoutOrdersInput, billUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: billCreateOrConnectWithoutOrdersInput
    connect?: billWhereUniqueInput
  }

  export type friends_orderCreateNestedManyWithoutOrdersInput = {
    create?: XOR<friends_orderCreateWithoutOrdersInput, friends_orderUncheckedCreateWithoutOrdersInput> | friends_orderCreateWithoutOrdersInput[] | friends_orderUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: friends_orderCreateOrConnectWithoutOrdersInput | friends_orderCreateOrConnectWithoutOrdersInput[]
    createMany?: friends_orderCreateManyOrdersInputEnvelope
    connect?: friends_orderWhereUniqueInput | friends_orderWhereUniqueInput[]
  }

  export type friends_orderUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<friends_orderCreateWithoutOrdersInput, friends_orderUncheckedCreateWithoutOrdersInput> | friends_orderCreateWithoutOrdersInput[] | friends_orderUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: friends_orderCreateOrConnectWithoutOrdersInput | friends_orderCreateOrConnectWithoutOrdersInput[]
    createMany?: friends_orderCreateManyOrdersInputEnvelope
    connect?: friends_orderWhereUniqueInput | friends_orderWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type usersUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrdersInput
    upsert?: usersUpsertWithoutOrdersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutOrdersInput, usersUpdateWithoutOrdersInput>, usersUncheckedUpdateWithoutOrdersInput>
  }

  export type billUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<billCreateWithoutOrdersInput, billUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: billCreateOrConnectWithoutOrdersInput
    upsert?: billUpsertWithoutOrdersInput
    disconnect?: billWhereInput | boolean
    delete?: billWhereInput | boolean
    connect?: billWhereUniqueInput
    update?: XOR<XOR<billUpdateToOneWithWhereWithoutOrdersInput, billUpdateWithoutOrdersInput>, billUncheckedUpdateWithoutOrdersInput>
  }

  export type friends_orderUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<friends_orderCreateWithoutOrdersInput, friends_orderUncheckedCreateWithoutOrdersInput> | friends_orderCreateWithoutOrdersInput[] | friends_orderUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: friends_orderCreateOrConnectWithoutOrdersInput | friends_orderCreateOrConnectWithoutOrdersInput[]
    upsert?: friends_orderUpsertWithWhereUniqueWithoutOrdersInput | friends_orderUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: friends_orderCreateManyOrdersInputEnvelope
    set?: friends_orderWhereUniqueInput | friends_orderWhereUniqueInput[]
    disconnect?: friends_orderWhereUniqueInput | friends_orderWhereUniqueInput[]
    delete?: friends_orderWhereUniqueInput | friends_orderWhereUniqueInput[]
    connect?: friends_orderWhereUniqueInput | friends_orderWhereUniqueInput[]
    update?: friends_orderUpdateWithWhereUniqueWithoutOrdersInput | friends_orderUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: friends_orderUpdateManyWithWhereWithoutOrdersInput | friends_orderUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: friends_orderScalarWhereInput | friends_orderScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type friends_orderUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<friends_orderCreateWithoutOrdersInput, friends_orderUncheckedCreateWithoutOrdersInput> | friends_orderCreateWithoutOrdersInput[] | friends_orderUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: friends_orderCreateOrConnectWithoutOrdersInput | friends_orderCreateOrConnectWithoutOrdersInput[]
    upsert?: friends_orderUpsertWithWhereUniqueWithoutOrdersInput | friends_orderUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: friends_orderCreateManyOrdersInputEnvelope
    set?: friends_orderWhereUniqueInput | friends_orderWhereUniqueInput[]
    disconnect?: friends_orderWhereUniqueInput | friends_orderWhereUniqueInput[]
    delete?: friends_orderWhereUniqueInput | friends_orderWhereUniqueInput[]
    connect?: friends_orderWhereUniqueInput | friends_orderWhereUniqueInput[]
    update?: friends_orderUpdateWithWhereUniqueWithoutOrdersInput | friends_orderUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: friends_orderUpdateManyWithWhereWithoutOrdersInput | friends_orderUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: friends_orderScalarWhereInput | friends_orderScalarWhereInput[]
  }

  export type ordersCreateNestedOneWithoutFriends_orderInput = {
    create?: XOR<ordersCreateWithoutFriends_orderInput, ordersUncheckedCreateWithoutFriends_orderInput>
    connectOrCreate?: ordersCreateOrConnectWithoutFriends_orderInput
    connect?: ordersWhereUniqueInput
  }

  export type friendsCreateNestedOneWithoutFriends_orderInput = {
    create?: XOR<friendsCreateWithoutFriends_orderInput, friendsUncheckedCreateWithoutFriends_orderInput>
    connectOrCreate?: friendsCreateOrConnectWithoutFriends_orderInput
    connect?: friendsWhereUniqueInput
  }

  export type EnumOrder_status_EnumFieldUpdateOperationsInput = {
    set?: $Enums.Order_status_Enum
  }

  export type ordersUpdateOneWithoutFriends_orderNestedInput = {
    create?: XOR<ordersCreateWithoutFriends_orderInput, ordersUncheckedCreateWithoutFriends_orderInput>
    connectOrCreate?: ordersCreateOrConnectWithoutFriends_orderInput
    upsert?: ordersUpsertWithoutFriends_orderInput
    disconnect?: ordersWhereInput | boolean
    delete?: ordersWhereInput | boolean
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutFriends_orderInput, ordersUpdateWithoutFriends_orderInput>, ordersUncheckedUpdateWithoutFriends_orderInput>
  }

  export type friendsUpdateOneWithoutFriends_orderNestedInput = {
    create?: XOR<friendsCreateWithoutFriends_orderInput, friendsUncheckedCreateWithoutFriends_orderInput>
    connectOrCreate?: friendsCreateOrConnectWithoutFriends_orderInput
    upsert?: friendsUpsertWithoutFriends_orderInput
    disconnect?: friendsWhereInput | boolean
    delete?: friendsWhereInput | boolean
    connect?: friendsWhereUniqueInput
    update?: XOR<XOR<friendsUpdateToOneWithWhereWithoutFriends_orderInput, friendsUpdateWithoutFriends_orderInput>, friendsUncheckedUpdateWithoutFriends_orderInput>
  }

  export type usersCreateNestedOneWithoutFriendsInput = {
    create?: XOR<usersCreateWithoutFriendsInput, usersUncheckedCreateWithoutFriendsInput>
    connectOrCreate?: usersCreateOrConnectWithoutFriendsInput
    connect?: usersWhereUniqueInput
  }

  export type friends_orderCreateNestedManyWithoutFriendsInput = {
    create?: XOR<friends_orderCreateWithoutFriendsInput, friends_orderUncheckedCreateWithoutFriendsInput> | friends_orderCreateWithoutFriendsInput[] | friends_orderUncheckedCreateWithoutFriendsInput[]
    connectOrCreate?: friends_orderCreateOrConnectWithoutFriendsInput | friends_orderCreateOrConnectWithoutFriendsInput[]
    createMany?: friends_orderCreateManyFriendsInputEnvelope
    connect?: friends_orderWhereUniqueInput | friends_orderWhereUniqueInput[]
  }

  export type friends_orderUncheckedCreateNestedManyWithoutFriendsInput = {
    create?: XOR<friends_orderCreateWithoutFriendsInput, friends_orderUncheckedCreateWithoutFriendsInput> | friends_orderCreateWithoutFriendsInput[] | friends_orderUncheckedCreateWithoutFriendsInput[]
    connectOrCreate?: friends_orderCreateOrConnectWithoutFriendsInput | friends_orderCreateOrConnectWithoutFriendsInput[]
    createMany?: friends_orderCreateManyFriendsInputEnvelope
    connect?: friends_orderWhereUniqueInput | friends_orderWhereUniqueInput[]
  }

  export type usersUpdateOneWithoutFriendsNestedInput = {
    create?: XOR<usersCreateWithoutFriendsInput, usersUncheckedCreateWithoutFriendsInput>
    connectOrCreate?: usersCreateOrConnectWithoutFriendsInput
    upsert?: usersUpsertWithoutFriendsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutFriendsInput, usersUpdateWithoutFriendsInput>, usersUncheckedUpdateWithoutFriendsInput>
  }

  export type friends_orderUpdateManyWithoutFriendsNestedInput = {
    create?: XOR<friends_orderCreateWithoutFriendsInput, friends_orderUncheckedCreateWithoutFriendsInput> | friends_orderCreateWithoutFriendsInput[] | friends_orderUncheckedCreateWithoutFriendsInput[]
    connectOrCreate?: friends_orderCreateOrConnectWithoutFriendsInput | friends_orderCreateOrConnectWithoutFriendsInput[]
    upsert?: friends_orderUpsertWithWhereUniqueWithoutFriendsInput | friends_orderUpsertWithWhereUniqueWithoutFriendsInput[]
    createMany?: friends_orderCreateManyFriendsInputEnvelope
    set?: friends_orderWhereUniqueInput | friends_orderWhereUniqueInput[]
    disconnect?: friends_orderWhereUniqueInput | friends_orderWhereUniqueInput[]
    delete?: friends_orderWhereUniqueInput | friends_orderWhereUniqueInput[]
    connect?: friends_orderWhereUniqueInput | friends_orderWhereUniqueInput[]
    update?: friends_orderUpdateWithWhereUniqueWithoutFriendsInput | friends_orderUpdateWithWhereUniqueWithoutFriendsInput[]
    updateMany?: friends_orderUpdateManyWithWhereWithoutFriendsInput | friends_orderUpdateManyWithWhereWithoutFriendsInput[]
    deleteMany?: friends_orderScalarWhereInput | friends_orderScalarWhereInput[]
  }

  export type friends_orderUncheckedUpdateManyWithoutFriendsNestedInput = {
    create?: XOR<friends_orderCreateWithoutFriendsInput, friends_orderUncheckedCreateWithoutFriendsInput> | friends_orderCreateWithoutFriendsInput[] | friends_orderUncheckedCreateWithoutFriendsInput[]
    connectOrCreate?: friends_orderCreateOrConnectWithoutFriendsInput | friends_orderCreateOrConnectWithoutFriendsInput[]
    upsert?: friends_orderUpsertWithWhereUniqueWithoutFriendsInput | friends_orderUpsertWithWhereUniqueWithoutFriendsInput[]
    createMany?: friends_orderCreateManyFriendsInputEnvelope
    set?: friends_orderWhereUniqueInput | friends_orderWhereUniqueInput[]
    disconnect?: friends_orderWhereUniqueInput | friends_orderWhereUniqueInput[]
    delete?: friends_orderWhereUniqueInput | friends_orderWhereUniqueInput[]
    connect?: friends_orderWhereUniqueInput | friends_orderWhereUniqueInput[]
    update?: friends_orderUpdateWithWhereUniqueWithoutFriendsInput | friends_orderUpdateWithWhereUniqueWithoutFriendsInput[]
    updateMany?: friends_orderUpdateManyWithWhereWithoutFriendsInput | friends_orderUpdateManyWithWhereWithoutFriendsInput[]
    deleteMany?: friends_orderScalarWhereInput | friends_orderScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutBillInput = {
    create?: XOR<usersCreateWithoutBillInput, usersUncheckedCreateWithoutBillInput>
    connectOrCreate?: usersCreateOrConnectWithoutBillInput
    connect?: usersWhereUniqueInput
  }

  export type payment_method_detailCreateNestedOneWithoutBillInput = {
    create?: XOR<payment_method_detailCreateWithoutBillInput, payment_method_detailUncheckedCreateWithoutBillInput>
    connectOrCreate?: payment_method_detailCreateOrConnectWithoutBillInput
    connect?: payment_method_detailWhereUniqueInput
  }

  export type ordersCreateNestedManyWithoutBillInput = {
    create?: XOR<ordersCreateWithoutBillInput, ordersUncheckedCreateWithoutBillInput> | ordersCreateWithoutBillInput[] | ordersUncheckedCreateWithoutBillInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutBillInput | ordersCreateOrConnectWithoutBillInput[]
    createMany?: ordersCreateManyBillInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutBillInput = {
    create?: XOR<ordersCreateWithoutBillInput, ordersUncheckedCreateWithoutBillInput> | ordersCreateWithoutBillInput[] | ordersUncheckedCreateWithoutBillInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutBillInput | ordersCreateOrConnectWithoutBillInput[]
    createMany?: ordersCreateManyBillInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumBill_status_EnumFieldUpdateOperationsInput = {
    set?: $Enums.Bill_status_Enum
  }

  export type usersUpdateOneWithoutBillNestedInput = {
    create?: XOR<usersCreateWithoutBillInput, usersUncheckedCreateWithoutBillInput>
    connectOrCreate?: usersCreateOrConnectWithoutBillInput
    upsert?: usersUpsertWithoutBillInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutBillInput, usersUpdateWithoutBillInput>, usersUncheckedUpdateWithoutBillInput>
  }

  export type payment_method_detailUpdateOneWithoutBillNestedInput = {
    create?: XOR<payment_method_detailCreateWithoutBillInput, payment_method_detailUncheckedCreateWithoutBillInput>
    connectOrCreate?: payment_method_detailCreateOrConnectWithoutBillInput
    upsert?: payment_method_detailUpsertWithoutBillInput
    disconnect?: payment_method_detailWhereInput | boolean
    delete?: payment_method_detailWhereInput | boolean
    connect?: payment_method_detailWhereUniqueInput
    update?: XOR<XOR<payment_method_detailUpdateToOneWithWhereWithoutBillInput, payment_method_detailUpdateWithoutBillInput>, payment_method_detailUncheckedUpdateWithoutBillInput>
  }

  export type ordersUpdateManyWithoutBillNestedInput = {
    create?: XOR<ordersCreateWithoutBillInput, ordersUncheckedCreateWithoutBillInput> | ordersCreateWithoutBillInput[] | ordersUncheckedCreateWithoutBillInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutBillInput | ordersCreateOrConnectWithoutBillInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutBillInput | ordersUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: ordersCreateManyBillInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutBillInput | ordersUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutBillInput | ordersUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutBillNestedInput = {
    create?: XOR<ordersCreateWithoutBillInput, ordersUncheckedCreateWithoutBillInput> | ordersCreateWithoutBillInput[] | ordersUncheckedCreateWithoutBillInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutBillInput | ordersCreateOrConnectWithoutBillInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutBillInput | ordersUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: ordersCreateManyBillInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutBillInput | ordersUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutBillInput | ordersUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type payment_method_detailCreateNestedManyWithoutPayment_methodInput = {
    create?: XOR<payment_method_detailCreateWithoutPayment_methodInput, payment_method_detailUncheckedCreateWithoutPayment_methodInput> | payment_method_detailCreateWithoutPayment_methodInput[] | payment_method_detailUncheckedCreateWithoutPayment_methodInput[]
    connectOrCreate?: payment_method_detailCreateOrConnectWithoutPayment_methodInput | payment_method_detailCreateOrConnectWithoutPayment_methodInput[]
    createMany?: payment_method_detailCreateManyPayment_methodInputEnvelope
    connect?: payment_method_detailWhereUniqueInput | payment_method_detailWhereUniqueInput[]
  }

  export type payment_method_detailUncheckedCreateNestedManyWithoutPayment_methodInput = {
    create?: XOR<payment_method_detailCreateWithoutPayment_methodInput, payment_method_detailUncheckedCreateWithoutPayment_methodInput> | payment_method_detailCreateWithoutPayment_methodInput[] | payment_method_detailUncheckedCreateWithoutPayment_methodInput[]
    connectOrCreate?: payment_method_detailCreateOrConnectWithoutPayment_methodInput | payment_method_detailCreateOrConnectWithoutPayment_methodInput[]
    createMany?: payment_method_detailCreateManyPayment_methodInputEnvelope
    connect?: payment_method_detailWhereUniqueInput | payment_method_detailWhereUniqueInput[]
  }

  export type payment_method_detailUpdateManyWithoutPayment_methodNestedInput = {
    create?: XOR<payment_method_detailCreateWithoutPayment_methodInput, payment_method_detailUncheckedCreateWithoutPayment_methodInput> | payment_method_detailCreateWithoutPayment_methodInput[] | payment_method_detailUncheckedCreateWithoutPayment_methodInput[]
    connectOrCreate?: payment_method_detailCreateOrConnectWithoutPayment_methodInput | payment_method_detailCreateOrConnectWithoutPayment_methodInput[]
    upsert?: payment_method_detailUpsertWithWhereUniqueWithoutPayment_methodInput | payment_method_detailUpsertWithWhereUniqueWithoutPayment_methodInput[]
    createMany?: payment_method_detailCreateManyPayment_methodInputEnvelope
    set?: payment_method_detailWhereUniqueInput | payment_method_detailWhereUniqueInput[]
    disconnect?: payment_method_detailWhereUniqueInput | payment_method_detailWhereUniqueInput[]
    delete?: payment_method_detailWhereUniqueInput | payment_method_detailWhereUniqueInput[]
    connect?: payment_method_detailWhereUniqueInput | payment_method_detailWhereUniqueInput[]
    update?: payment_method_detailUpdateWithWhereUniqueWithoutPayment_methodInput | payment_method_detailUpdateWithWhereUniqueWithoutPayment_methodInput[]
    updateMany?: payment_method_detailUpdateManyWithWhereWithoutPayment_methodInput | payment_method_detailUpdateManyWithWhereWithoutPayment_methodInput[]
    deleteMany?: payment_method_detailScalarWhereInput | payment_method_detailScalarWhereInput[]
  }

  export type payment_method_detailUncheckedUpdateManyWithoutPayment_methodNestedInput = {
    create?: XOR<payment_method_detailCreateWithoutPayment_methodInput, payment_method_detailUncheckedCreateWithoutPayment_methodInput> | payment_method_detailCreateWithoutPayment_methodInput[] | payment_method_detailUncheckedCreateWithoutPayment_methodInput[]
    connectOrCreate?: payment_method_detailCreateOrConnectWithoutPayment_methodInput | payment_method_detailCreateOrConnectWithoutPayment_methodInput[]
    upsert?: payment_method_detailUpsertWithWhereUniqueWithoutPayment_methodInput | payment_method_detailUpsertWithWhereUniqueWithoutPayment_methodInput[]
    createMany?: payment_method_detailCreateManyPayment_methodInputEnvelope
    set?: payment_method_detailWhereUniqueInput | payment_method_detailWhereUniqueInput[]
    disconnect?: payment_method_detailWhereUniqueInput | payment_method_detailWhereUniqueInput[]
    delete?: payment_method_detailWhereUniqueInput | payment_method_detailWhereUniqueInput[]
    connect?: payment_method_detailWhereUniqueInput | payment_method_detailWhereUniqueInput[]
    update?: payment_method_detailUpdateWithWhereUniqueWithoutPayment_methodInput | payment_method_detailUpdateWithWhereUniqueWithoutPayment_methodInput[]
    updateMany?: payment_method_detailUpdateManyWithWhereWithoutPayment_methodInput | payment_method_detailUpdateManyWithWhereWithoutPayment_methodInput[]
    deleteMany?: payment_method_detailScalarWhereInput | payment_method_detailScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutPayment_method_detailInput = {
    create?: XOR<usersCreateWithoutPayment_method_detailInput, usersUncheckedCreateWithoutPayment_method_detailInput>
    connectOrCreate?: usersCreateOrConnectWithoutPayment_method_detailInput
    connect?: usersWhereUniqueInput
  }

  export type payment_methodCreateNestedOneWithoutPayment_method_detailInput = {
    create?: XOR<payment_methodCreateWithoutPayment_method_detailInput, payment_methodUncheckedCreateWithoutPayment_method_detailInput>
    connectOrCreate?: payment_methodCreateOrConnectWithoutPayment_method_detailInput
    connect?: payment_methodWhereUniqueInput
  }

  export type billCreateNestedManyWithoutPayment_method_detailsInput = {
    create?: XOR<billCreateWithoutPayment_method_detailsInput, billUncheckedCreateWithoutPayment_method_detailsInput> | billCreateWithoutPayment_method_detailsInput[] | billUncheckedCreateWithoutPayment_method_detailsInput[]
    connectOrCreate?: billCreateOrConnectWithoutPayment_method_detailsInput | billCreateOrConnectWithoutPayment_method_detailsInput[]
    createMany?: billCreateManyPayment_method_detailsInputEnvelope
    connect?: billWhereUniqueInput | billWhereUniqueInput[]
  }

  export type billUncheckedCreateNestedManyWithoutPayment_method_detailsInput = {
    create?: XOR<billCreateWithoutPayment_method_detailsInput, billUncheckedCreateWithoutPayment_method_detailsInput> | billCreateWithoutPayment_method_detailsInput[] | billUncheckedCreateWithoutPayment_method_detailsInput[]
    connectOrCreate?: billCreateOrConnectWithoutPayment_method_detailsInput | billCreateOrConnectWithoutPayment_method_detailsInput[]
    createMany?: billCreateManyPayment_method_detailsInputEnvelope
    connect?: billWhereUniqueInput | billWhereUniqueInput[]
  }

  export type usersUpdateOneWithoutPayment_method_detailNestedInput = {
    create?: XOR<usersCreateWithoutPayment_method_detailInput, usersUncheckedCreateWithoutPayment_method_detailInput>
    connectOrCreate?: usersCreateOrConnectWithoutPayment_method_detailInput
    upsert?: usersUpsertWithoutPayment_method_detailInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPayment_method_detailInput, usersUpdateWithoutPayment_method_detailInput>, usersUncheckedUpdateWithoutPayment_method_detailInput>
  }

  export type payment_methodUpdateOneWithoutPayment_method_detailNestedInput = {
    create?: XOR<payment_methodCreateWithoutPayment_method_detailInput, payment_methodUncheckedCreateWithoutPayment_method_detailInput>
    connectOrCreate?: payment_methodCreateOrConnectWithoutPayment_method_detailInput
    upsert?: payment_methodUpsertWithoutPayment_method_detailInput
    disconnect?: payment_methodWhereInput | boolean
    delete?: payment_methodWhereInput | boolean
    connect?: payment_methodWhereUniqueInput
    update?: XOR<XOR<payment_methodUpdateToOneWithWhereWithoutPayment_method_detailInput, payment_methodUpdateWithoutPayment_method_detailInput>, payment_methodUncheckedUpdateWithoutPayment_method_detailInput>
  }

  export type billUpdateManyWithoutPayment_method_detailsNestedInput = {
    create?: XOR<billCreateWithoutPayment_method_detailsInput, billUncheckedCreateWithoutPayment_method_detailsInput> | billCreateWithoutPayment_method_detailsInput[] | billUncheckedCreateWithoutPayment_method_detailsInput[]
    connectOrCreate?: billCreateOrConnectWithoutPayment_method_detailsInput | billCreateOrConnectWithoutPayment_method_detailsInput[]
    upsert?: billUpsertWithWhereUniqueWithoutPayment_method_detailsInput | billUpsertWithWhereUniqueWithoutPayment_method_detailsInput[]
    createMany?: billCreateManyPayment_method_detailsInputEnvelope
    set?: billWhereUniqueInput | billWhereUniqueInput[]
    disconnect?: billWhereUniqueInput | billWhereUniqueInput[]
    delete?: billWhereUniqueInput | billWhereUniqueInput[]
    connect?: billWhereUniqueInput | billWhereUniqueInput[]
    update?: billUpdateWithWhereUniqueWithoutPayment_method_detailsInput | billUpdateWithWhereUniqueWithoutPayment_method_detailsInput[]
    updateMany?: billUpdateManyWithWhereWithoutPayment_method_detailsInput | billUpdateManyWithWhereWithoutPayment_method_detailsInput[]
    deleteMany?: billScalarWhereInput | billScalarWhereInput[]
  }

  export type billUncheckedUpdateManyWithoutPayment_method_detailsNestedInput = {
    create?: XOR<billCreateWithoutPayment_method_detailsInput, billUncheckedCreateWithoutPayment_method_detailsInput> | billCreateWithoutPayment_method_detailsInput[] | billUncheckedCreateWithoutPayment_method_detailsInput[]
    connectOrCreate?: billCreateOrConnectWithoutPayment_method_detailsInput | billCreateOrConnectWithoutPayment_method_detailsInput[]
    upsert?: billUpsertWithWhereUniqueWithoutPayment_method_detailsInput | billUpsertWithWhereUniqueWithoutPayment_method_detailsInput[]
    createMany?: billCreateManyPayment_method_detailsInputEnvelope
    set?: billWhereUniqueInput | billWhereUniqueInput[]
    disconnect?: billWhereUniqueInput | billWhereUniqueInput[]
    delete?: billWhereUniqueInput | billWhereUniqueInput[]
    connect?: billWhereUniqueInput | billWhereUniqueInput[]
    update?: billUpdateWithWhereUniqueWithoutPayment_method_detailsInput | billUpdateWithWhereUniqueWithoutPayment_method_detailsInput[]
    updateMany?: billUpdateManyWithWhereWithoutPayment_method_detailsInput | billUpdateManyWithWhereWithoutPayment_method_detailsInput[]
    deleteMany?: billScalarWhereInput | billScalarWhereInput[]
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

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedEnumOrder_status_EnumFilter<$PrismaModel = never> = {
    equals?: $Enums.Order_status_Enum | EnumOrder_status_EnumFieldRefInput<$PrismaModel>
    in?: $Enums.Order_status_Enum[] | ListEnumOrder_status_EnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.Order_status_Enum[] | ListEnumOrder_status_EnumFieldRefInput<$PrismaModel>
    not?: NestedEnumOrder_status_EnumFilter<$PrismaModel> | $Enums.Order_status_Enum
  }

  export type NestedEnumOrder_status_EnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Order_status_Enum | EnumOrder_status_EnumFieldRefInput<$PrismaModel>
    in?: $Enums.Order_status_Enum[] | ListEnumOrder_status_EnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.Order_status_Enum[] | ListEnumOrder_status_EnumFieldRefInput<$PrismaModel>
    not?: NestedEnumOrder_status_EnumWithAggregatesFilter<$PrismaModel> | $Enums.Order_status_Enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrder_status_EnumFilter<$PrismaModel>
    _max?: NestedEnumOrder_status_EnumFilter<$PrismaModel>
  }

  export type NestedEnumBill_status_EnumFilter<$PrismaModel = never> = {
    equals?: $Enums.Bill_status_Enum | EnumBill_status_EnumFieldRefInput<$PrismaModel>
    in?: $Enums.Bill_status_Enum[] | ListEnumBill_status_EnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.Bill_status_Enum[] | ListEnumBill_status_EnumFieldRefInput<$PrismaModel>
    not?: NestedEnumBill_status_EnumFilter<$PrismaModel> | $Enums.Bill_status_Enum
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

  export type NestedEnumBill_status_EnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Bill_status_Enum | EnumBill_status_EnumFieldRefInput<$PrismaModel>
    in?: $Enums.Bill_status_Enum[] | ListEnumBill_status_EnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.Bill_status_Enum[] | ListEnumBill_status_EnumFieldRefInput<$PrismaModel>
    not?: NestedEnumBill_status_EnumWithAggregatesFilter<$PrismaModel> | $Enums.Bill_status_Enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBill_status_EnumFilter<$PrismaModel>
    _max?: NestedEnumBill_status_EnumFilter<$PrismaModel>
  }

  export type friendsCreateWithoutUsersInput = {
    friends_name: string
    friends_photo?: string | null
    friends_order?: friends_orderCreateNestedManyWithoutFriendsInput
  }

  export type friendsUncheckedCreateWithoutUsersInput = {
    id?: number
    friends_name: string
    friends_photo?: string | null
    friends_order?: friends_orderUncheckedCreateNestedManyWithoutFriendsInput
  }

  export type friendsCreateOrConnectWithoutUsersInput = {
    where: friendsWhereUniqueInput
    create: XOR<friendsCreateWithoutUsersInput, friendsUncheckedCreateWithoutUsersInput>
  }

  export type friendsCreateManyUsersInputEnvelope = {
    data: friendsCreateManyUsersInput | friendsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type ordersCreateWithoutUsersInput = {
    menu_name: string
    qty: number
    price: bigint | number
    bill?: billCreateNestedOneWithoutOrdersInput
    friends_order?: friends_orderCreateNestedManyWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutUsersInput = {
    id?: number
    bill_id?: number | null
    menu_name: string
    qty: number
    price: bigint | number
    friends_order?: friends_orderUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutUsersInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput>
  }

  export type ordersCreateManyUsersInputEnvelope = {
    data: ordersCreateManyUsersInput | ordersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type billCreateWithoutUsersInput = {
    description: string
    discount?: number | null
    tax: number
    service?: number | null
    total_price: bigint | number
    date?: Date | string
    status: $Enums.Bill_status_Enum
    payment_method_details?: payment_method_detailCreateNestedOneWithoutBillInput
    orders?: ordersCreateNestedManyWithoutBillInput
  }

  export type billUncheckedCreateWithoutUsersInput = {
    id?: number
    payment_method_id?: number | null
    description: string
    discount?: number | null
    tax: number
    service?: number | null
    total_price: bigint | number
    date?: Date | string
    status: $Enums.Bill_status_Enum
    orders?: ordersUncheckedCreateNestedManyWithoutBillInput
  }

  export type billCreateOrConnectWithoutUsersInput = {
    where: billWhereUniqueInput
    create: XOR<billCreateWithoutUsersInput, billUncheckedCreateWithoutUsersInput>
  }

  export type billCreateManyUsersInputEnvelope = {
    data: billCreateManyUsersInput | billCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type payment_method_detailCreateWithoutUsersInput = {
    card_number: bigint | number
    card_name: string
    payment_method?: payment_methodCreateNestedOneWithoutPayment_method_detailInput
    bill?: billCreateNestedManyWithoutPayment_method_detailsInput
  }

  export type payment_method_detailUncheckedCreateWithoutUsersInput = {
    id?: number
    payment_method_id?: number | null
    card_number: bigint | number
    card_name: string
    bill?: billUncheckedCreateNestedManyWithoutPayment_method_detailsInput
  }

  export type payment_method_detailCreateOrConnectWithoutUsersInput = {
    where: payment_method_detailWhereUniqueInput
    create: XOR<payment_method_detailCreateWithoutUsersInput, payment_method_detailUncheckedCreateWithoutUsersInput>
  }

  export type payment_method_detailCreateManyUsersInputEnvelope = {
    data: payment_method_detailCreateManyUsersInput | payment_method_detailCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type friendsUpsertWithWhereUniqueWithoutUsersInput = {
    where: friendsWhereUniqueInput
    update: XOR<friendsUpdateWithoutUsersInput, friendsUncheckedUpdateWithoutUsersInput>
    create: XOR<friendsCreateWithoutUsersInput, friendsUncheckedCreateWithoutUsersInput>
  }

  export type friendsUpdateWithWhereUniqueWithoutUsersInput = {
    where: friendsWhereUniqueInput
    data: XOR<friendsUpdateWithoutUsersInput, friendsUncheckedUpdateWithoutUsersInput>
  }

  export type friendsUpdateManyWithWhereWithoutUsersInput = {
    where: friendsScalarWhereInput
    data: XOR<friendsUpdateManyMutationInput, friendsUncheckedUpdateManyWithoutUsersInput>
  }

  export type friendsScalarWhereInput = {
    AND?: friendsScalarWhereInput | friendsScalarWhereInput[]
    OR?: friendsScalarWhereInput[]
    NOT?: friendsScalarWhereInput | friendsScalarWhereInput[]
    id?: IntFilter<"friends"> | number
    user_id?: IntNullableFilter<"friends"> | number | null
    friends_name?: StringFilter<"friends"> | string
    friends_photo?: StringNullableFilter<"friends"> | string | null
  }

  export type ordersUpsertWithWhereUniqueWithoutUsersInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutUsersInput, ordersUncheckedUpdateWithoutUsersInput>
    create: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutUsersInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutUsersInput, ordersUncheckedUpdateWithoutUsersInput>
  }

  export type ordersUpdateManyWithWhereWithoutUsersInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutUsersInput>
  }

  export type ordersScalarWhereInput = {
    AND?: ordersScalarWhereInput | ordersScalarWhereInput[]
    OR?: ordersScalarWhereInput[]
    NOT?: ordersScalarWhereInput | ordersScalarWhereInput[]
    id?: IntFilter<"orders"> | number
    user_id?: IntNullableFilter<"orders"> | number | null
    bill_id?: IntNullableFilter<"orders"> | number | null
    menu_name?: StringFilter<"orders"> | string
    qty?: IntFilter<"orders"> | number
    price?: BigIntFilter<"orders"> | bigint | number
  }

  export type billUpsertWithWhereUniqueWithoutUsersInput = {
    where: billWhereUniqueInput
    update: XOR<billUpdateWithoutUsersInput, billUncheckedUpdateWithoutUsersInput>
    create: XOR<billCreateWithoutUsersInput, billUncheckedCreateWithoutUsersInput>
  }

  export type billUpdateWithWhereUniqueWithoutUsersInput = {
    where: billWhereUniqueInput
    data: XOR<billUpdateWithoutUsersInput, billUncheckedUpdateWithoutUsersInput>
  }

  export type billUpdateManyWithWhereWithoutUsersInput = {
    where: billScalarWhereInput
    data: XOR<billUpdateManyMutationInput, billUncheckedUpdateManyWithoutUsersInput>
  }

  export type billScalarWhereInput = {
    AND?: billScalarWhereInput | billScalarWhereInput[]
    OR?: billScalarWhereInput[]
    NOT?: billScalarWhereInput | billScalarWhereInput[]
    id?: IntFilter<"bill"> | number
    user_id?: IntNullableFilter<"bill"> | number | null
    payment_method_id?: IntNullableFilter<"bill"> | number | null
    description?: StringFilter<"bill"> | string
    discount?: FloatNullableFilter<"bill"> | number | null
    tax?: IntFilter<"bill"> | number
    service?: FloatNullableFilter<"bill"> | number | null
    total_price?: BigIntFilter<"bill"> | bigint | number
    date?: DateTimeFilter<"bill"> | Date | string
    status?: EnumBill_status_EnumFilter<"bill"> | $Enums.Bill_status_Enum
  }

  export type payment_method_detailUpsertWithWhereUniqueWithoutUsersInput = {
    where: payment_method_detailWhereUniqueInput
    update: XOR<payment_method_detailUpdateWithoutUsersInput, payment_method_detailUncheckedUpdateWithoutUsersInput>
    create: XOR<payment_method_detailCreateWithoutUsersInput, payment_method_detailUncheckedCreateWithoutUsersInput>
  }

  export type payment_method_detailUpdateWithWhereUniqueWithoutUsersInput = {
    where: payment_method_detailWhereUniqueInput
    data: XOR<payment_method_detailUpdateWithoutUsersInput, payment_method_detailUncheckedUpdateWithoutUsersInput>
  }

  export type payment_method_detailUpdateManyWithWhereWithoutUsersInput = {
    where: payment_method_detailScalarWhereInput
    data: XOR<payment_method_detailUpdateManyMutationInput, payment_method_detailUncheckedUpdateManyWithoutUsersInput>
  }

  export type payment_method_detailScalarWhereInput = {
    AND?: payment_method_detailScalarWhereInput | payment_method_detailScalarWhereInput[]
    OR?: payment_method_detailScalarWhereInput[]
    NOT?: payment_method_detailScalarWhereInput | payment_method_detailScalarWhereInput[]
    id?: IntFilter<"payment_method_detail"> | number
    user_id?: IntNullableFilter<"payment_method_detail"> | number | null
    payment_method_id?: IntNullableFilter<"payment_method_detail"> | number | null
    card_number?: BigIntFilter<"payment_method_detail"> | bigint | number
    card_name?: StringFilter<"payment_method_detail"> | string
  }

  export type usersCreateWithoutOrdersInput = {
    username: string
    fullname: string
    phone_number: string
    email?: string | null
    password?: string | null
    bio?: string | null
    dob?: Date | string | null
    photo_profile?: string | null
    created_at?: Date | string
    update_at?: Date | string
    friends?: friendsCreateNestedManyWithoutUsersInput
    bill?: billCreateNestedManyWithoutUsersInput
    payment_method_detail?: payment_method_detailCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutOrdersInput = {
    id?: number
    username: string
    fullname: string
    phone_number: string
    email?: string | null
    password?: string | null
    bio?: string | null
    dob?: Date | string | null
    photo_profile?: string | null
    created_at?: Date | string
    update_at?: Date | string
    friends?: friendsUncheckedCreateNestedManyWithoutUsersInput
    bill?: billUncheckedCreateNestedManyWithoutUsersInput
    payment_method_detail?: payment_method_detailUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutOrdersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
  }

  export type billCreateWithoutOrdersInput = {
    description: string
    discount?: number | null
    tax: number
    service?: number | null
    total_price: bigint | number
    date?: Date | string
    status: $Enums.Bill_status_Enum
    users?: usersCreateNestedOneWithoutBillInput
    payment_method_details?: payment_method_detailCreateNestedOneWithoutBillInput
  }

  export type billUncheckedCreateWithoutOrdersInput = {
    id?: number
    user_id?: number | null
    payment_method_id?: number | null
    description: string
    discount?: number | null
    tax: number
    service?: number | null
    total_price: bigint | number
    date?: Date | string
    status: $Enums.Bill_status_Enum
  }

  export type billCreateOrConnectWithoutOrdersInput = {
    where: billWhereUniqueInput
    create: XOR<billCreateWithoutOrdersInput, billUncheckedCreateWithoutOrdersInput>
  }

  export type friends_orderCreateWithoutOrdersInput = {
    friend_order_price: bigint | number
    status: $Enums.Order_status_Enum
    created_at?: Date | string
    update_at?: Date | string
    friends?: friendsCreateNestedOneWithoutFriends_orderInput
  }

  export type friends_orderUncheckedCreateWithoutOrdersInput = {
    id?: number
    friends_id?: number | null
    friend_order_price: bigint | number
    status: $Enums.Order_status_Enum
    created_at?: Date | string
    update_at?: Date | string
  }

  export type friends_orderCreateOrConnectWithoutOrdersInput = {
    where: friends_orderWhereUniqueInput
    create: XOR<friends_orderCreateWithoutOrdersInput, friends_orderUncheckedCreateWithoutOrdersInput>
  }

  export type friends_orderCreateManyOrdersInputEnvelope = {
    data: friends_orderCreateManyOrdersInput | friends_orderCreateManyOrdersInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutOrdersInput = {
    update: XOR<usersUpdateWithoutOrdersInput, usersUncheckedUpdateWithoutOrdersInput>
    create: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutOrdersInput, usersUncheckedUpdateWithoutOrdersInput>
  }

  export type usersUpdateWithoutOrdersInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_profile?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    friends?: friendsUpdateManyWithoutUsersNestedInput
    bill?: billUpdateManyWithoutUsersNestedInput
    payment_method_detail?: payment_method_detailUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_profile?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    friends?: friendsUncheckedUpdateManyWithoutUsersNestedInput
    bill?: billUncheckedUpdateManyWithoutUsersNestedInput
    payment_method_detail?: payment_method_detailUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type billUpsertWithoutOrdersInput = {
    update: XOR<billUpdateWithoutOrdersInput, billUncheckedUpdateWithoutOrdersInput>
    create: XOR<billCreateWithoutOrdersInput, billUncheckedCreateWithoutOrdersInput>
    where?: billWhereInput
  }

  export type billUpdateToOneWithWhereWithoutOrdersInput = {
    where?: billWhereInput
    data: XOR<billUpdateWithoutOrdersInput, billUncheckedUpdateWithoutOrdersInput>
  }

  export type billUpdateWithoutOrdersInput = {
    description?: StringFieldUpdateOperationsInput | string
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    tax?: IntFieldUpdateOperationsInput | number
    service?: NullableFloatFieldUpdateOperationsInput | number | null
    total_price?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBill_status_EnumFieldUpdateOperationsInput | $Enums.Bill_status_Enum
    users?: usersUpdateOneWithoutBillNestedInput
    payment_method_details?: payment_method_detailUpdateOneWithoutBillNestedInput
  }

  export type billUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    payment_method_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    tax?: IntFieldUpdateOperationsInput | number
    service?: NullableFloatFieldUpdateOperationsInput | number | null
    total_price?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBill_status_EnumFieldUpdateOperationsInput | $Enums.Bill_status_Enum
  }

  export type friends_orderUpsertWithWhereUniqueWithoutOrdersInput = {
    where: friends_orderWhereUniqueInput
    update: XOR<friends_orderUpdateWithoutOrdersInput, friends_orderUncheckedUpdateWithoutOrdersInput>
    create: XOR<friends_orderCreateWithoutOrdersInput, friends_orderUncheckedCreateWithoutOrdersInput>
  }

  export type friends_orderUpdateWithWhereUniqueWithoutOrdersInput = {
    where: friends_orderWhereUniqueInput
    data: XOR<friends_orderUpdateWithoutOrdersInput, friends_orderUncheckedUpdateWithoutOrdersInput>
  }

  export type friends_orderUpdateManyWithWhereWithoutOrdersInput = {
    where: friends_orderScalarWhereInput
    data: XOR<friends_orderUpdateManyMutationInput, friends_orderUncheckedUpdateManyWithoutOrdersInput>
  }

  export type friends_orderScalarWhereInput = {
    AND?: friends_orderScalarWhereInput | friends_orderScalarWhereInput[]
    OR?: friends_orderScalarWhereInput[]
    NOT?: friends_orderScalarWhereInput | friends_orderScalarWhereInput[]
    id?: IntFilter<"friends_order"> | number
    orders_id?: IntNullableFilter<"friends_order"> | number | null
    friends_id?: IntNullableFilter<"friends_order"> | number | null
    friend_order_price?: BigIntFilter<"friends_order"> | bigint | number
    status?: EnumOrder_status_EnumFilter<"friends_order"> | $Enums.Order_status_Enum
    created_at?: DateTimeFilter<"friends_order"> | Date | string
    update_at?: DateTimeFilter<"friends_order"> | Date | string
  }

  export type ordersCreateWithoutFriends_orderInput = {
    menu_name: string
    qty: number
    price: bigint | number
    users?: usersCreateNestedOneWithoutOrdersInput
    bill?: billCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutFriends_orderInput = {
    id?: number
    user_id?: number | null
    bill_id?: number | null
    menu_name: string
    qty: number
    price: bigint | number
  }

  export type ordersCreateOrConnectWithoutFriends_orderInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutFriends_orderInput, ordersUncheckedCreateWithoutFriends_orderInput>
  }

  export type friendsCreateWithoutFriends_orderInput = {
    friends_name: string
    friends_photo?: string | null
    users?: usersCreateNestedOneWithoutFriendsInput
  }

  export type friendsUncheckedCreateWithoutFriends_orderInput = {
    id?: number
    user_id?: number | null
    friends_name: string
    friends_photo?: string | null
  }

  export type friendsCreateOrConnectWithoutFriends_orderInput = {
    where: friendsWhereUniqueInput
    create: XOR<friendsCreateWithoutFriends_orderInput, friendsUncheckedCreateWithoutFriends_orderInput>
  }

  export type ordersUpsertWithoutFriends_orderInput = {
    update: XOR<ordersUpdateWithoutFriends_orderInput, ordersUncheckedUpdateWithoutFriends_orderInput>
    create: XOR<ordersCreateWithoutFriends_orderInput, ordersUncheckedCreateWithoutFriends_orderInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutFriends_orderInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutFriends_orderInput, ordersUncheckedUpdateWithoutFriends_orderInput>
  }

  export type ordersUpdateWithoutFriends_orderInput = {
    menu_name?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    users?: usersUpdateOneWithoutOrdersNestedInput
    bill?: billUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutFriends_orderInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    bill_id?: NullableIntFieldUpdateOperationsInput | number | null
    menu_name?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    price?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type friendsUpsertWithoutFriends_orderInput = {
    update: XOR<friendsUpdateWithoutFriends_orderInput, friendsUncheckedUpdateWithoutFriends_orderInput>
    create: XOR<friendsCreateWithoutFriends_orderInput, friendsUncheckedCreateWithoutFriends_orderInput>
    where?: friendsWhereInput
  }

  export type friendsUpdateToOneWithWhereWithoutFriends_orderInput = {
    where?: friendsWhereInput
    data: XOR<friendsUpdateWithoutFriends_orderInput, friendsUncheckedUpdateWithoutFriends_orderInput>
  }

  export type friendsUpdateWithoutFriends_orderInput = {
    friends_name?: StringFieldUpdateOperationsInput | string
    friends_photo?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneWithoutFriendsNestedInput
  }

  export type friendsUncheckedUpdateWithoutFriends_orderInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    friends_name?: StringFieldUpdateOperationsInput | string
    friends_photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersCreateWithoutFriendsInput = {
    username: string
    fullname: string
    phone_number: string
    email?: string | null
    password?: string | null
    bio?: string | null
    dob?: Date | string | null
    photo_profile?: string | null
    created_at?: Date | string
    update_at?: Date | string
    orders?: ordersCreateNestedManyWithoutUsersInput
    bill?: billCreateNestedManyWithoutUsersInput
    payment_method_detail?: payment_method_detailCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutFriendsInput = {
    id?: number
    username: string
    fullname: string
    phone_number: string
    email?: string | null
    password?: string | null
    bio?: string | null
    dob?: Date | string | null
    photo_profile?: string | null
    created_at?: Date | string
    update_at?: Date | string
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
    bill?: billUncheckedCreateNestedManyWithoutUsersInput
    payment_method_detail?: payment_method_detailUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutFriendsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutFriendsInput, usersUncheckedCreateWithoutFriendsInput>
  }

  export type friends_orderCreateWithoutFriendsInput = {
    friend_order_price: bigint | number
    status: $Enums.Order_status_Enum
    created_at?: Date | string
    update_at?: Date | string
    orders?: ordersCreateNestedOneWithoutFriends_orderInput
  }

  export type friends_orderUncheckedCreateWithoutFriendsInput = {
    id?: number
    orders_id?: number | null
    friend_order_price: bigint | number
    status: $Enums.Order_status_Enum
    created_at?: Date | string
    update_at?: Date | string
  }

  export type friends_orderCreateOrConnectWithoutFriendsInput = {
    where: friends_orderWhereUniqueInput
    create: XOR<friends_orderCreateWithoutFriendsInput, friends_orderUncheckedCreateWithoutFriendsInput>
  }

  export type friends_orderCreateManyFriendsInputEnvelope = {
    data: friends_orderCreateManyFriendsInput | friends_orderCreateManyFriendsInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutFriendsInput = {
    update: XOR<usersUpdateWithoutFriendsInput, usersUncheckedUpdateWithoutFriendsInput>
    create: XOR<usersCreateWithoutFriendsInput, usersUncheckedCreateWithoutFriendsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutFriendsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutFriendsInput, usersUncheckedUpdateWithoutFriendsInput>
  }

  export type usersUpdateWithoutFriendsInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_profile?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUpdateManyWithoutUsersNestedInput
    bill?: billUpdateManyWithoutUsersNestedInput
    payment_method_detail?: payment_method_detailUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutFriendsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_profile?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
    bill?: billUncheckedUpdateManyWithoutUsersNestedInput
    payment_method_detail?: payment_method_detailUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type friends_orderUpsertWithWhereUniqueWithoutFriendsInput = {
    where: friends_orderWhereUniqueInput
    update: XOR<friends_orderUpdateWithoutFriendsInput, friends_orderUncheckedUpdateWithoutFriendsInput>
    create: XOR<friends_orderCreateWithoutFriendsInput, friends_orderUncheckedCreateWithoutFriendsInput>
  }

  export type friends_orderUpdateWithWhereUniqueWithoutFriendsInput = {
    where: friends_orderWhereUniqueInput
    data: XOR<friends_orderUpdateWithoutFriendsInput, friends_orderUncheckedUpdateWithoutFriendsInput>
  }

  export type friends_orderUpdateManyWithWhereWithoutFriendsInput = {
    where: friends_orderScalarWhereInput
    data: XOR<friends_orderUpdateManyMutationInput, friends_orderUncheckedUpdateManyWithoutFriendsInput>
  }

  export type usersCreateWithoutBillInput = {
    username: string
    fullname: string
    phone_number: string
    email?: string | null
    password?: string | null
    bio?: string | null
    dob?: Date | string | null
    photo_profile?: string | null
    created_at?: Date | string
    update_at?: Date | string
    friends?: friendsCreateNestedManyWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
    payment_method_detail?: payment_method_detailCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutBillInput = {
    id?: number
    username: string
    fullname: string
    phone_number: string
    email?: string | null
    password?: string | null
    bio?: string | null
    dob?: Date | string | null
    photo_profile?: string | null
    created_at?: Date | string
    update_at?: Date | string
    friends?: friendsUncheckedCreateNestedManyWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
    payment_method_detail?: payment_method_detailUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutBillInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutBillInput, usersUncheckedCreateWithoutBillInput>
  }

  export type payment_method_detailCreateWithoutBillInput = {
    card_number: bigint | number
    card_name: string
    users?: usersCreateNestedOneWithoutPayment_method_detailInput
    payment_method?: payment_methodCreateNestedOneWithoutPayment_method_detailInput
  }

  export type payment_method_detailUncheckedCreateWithoutBillInput = {
    id?: number
    user_id?: number | null
    payment_method_id?: number | null
    card_number: bigint | number
    card_name: string
  }

  export type payment_method_detailCreateOrConnectWithoutBillInput = {
    where: payment_method_detailWhereUniqueInput
    create: XOR<payment_method_detailCreateWithoutBillInput, payment_method_detailUncheckedCreateWithoutBillInput>
  }

  export type ordersCreateWithoutBillInput = {
    menu_name: string
    qty: number
    price: bigint | number
    users?: usersCreateNestedOneWithoutOrdersInput
    friends_order?: friends_orderCreateNestedManyWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutBillInput = {
    id?: number
    user_id?: number | null
    menu_name: string
    qty: number
    price: bigint | number
    friends_order?: friends_orderUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutBillInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutBillInput, ordersUncheckedCreateWithoutBillInput>
  }

  export type ordersCreateManyBillInputEnvelope = {
    data: ordersCreateManyBillInput | ordersCreateManyBillInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutBillInput = {
    update: XOR<usersUpdateWithoutBillInput, usersUncheckedUpdateWithoutBillInput>
    create: XOR<usersCreateWithoutBillInput, usersUncheckedCreateWithoutBillInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutBillInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutBillInput, usersUncheckedUpdateWithoutBillInput>
  }

  export type usersUpdateWithoutBillInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_profile?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    friends?: friendsUpdateManyWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
    payment_method_detail?: payment_method_detailUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutBillInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_profile?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    friends?: friendsUncheckedUpdateManyWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
    payment_method_detail?: payment_method_detailUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type payment_method_detailUpsertWithoutBillInput = {
    update: XOR<payment_method_detailUpdateWithoutBillInput, payment_method_detailUncheckedUpdateWithoutBillInput>
    create: XOR<payment_method_detailCreateWithoutBillInput, payment_method_detailUncheckedCreateWithoutBillInput>
    where?: payment_method_detailWhereInput
  }

  export type payment_method_detailUpdateToOneWithWhereWithoutBillInput = {
    where?: payment_method_detailWhereInput
    data: XOR<payment_method_detailUpdateWithoutBillInput, payment_method_detailUncheckedUpdateWithoutBillInput>
  }

  export type payment_method_detailUpdateWithoutBillInput = {
    card_number?: BigIntFieldUpdateOperationsInput | bigint | number
    card_name?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateOneWithoutPayment_method_detailNestedInput
    payment_method?: payment_methodUpdateOneWithoutPayment_method_detailNestedInput
  }

  export type payment_method_detailUncheckedUpdateWithoutBillInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    payment_method_id?: NullableIntFieldUpdateOperationsInput | number | null
    card_number?: BigIntFieldUpdateOperationsInput | bigint | number
    card_name?: StringFieldUpdateOperationsInput | string
  }

  export type ordersUpsertWithWhereUniqueWithoutBillInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutBillInput, ordersUncheckedUpdateWithoutBillInput>
    create: XOR<ordersCreateWithoutBillInput, ordersUncheckedCreateWithoutBillInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutBillInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutBillInput, ordersUncheckedUpdateWithoutBillInput>
  }

  export type ordersUpdateManyWithWhereWithoutBillInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutBillInput>
  }

  export type payment_method_detailCreateWithoutPayment_methodInput = {
    card_number: bigint | number
    card_name: string
    users?: usersCreateNestedOneWithoutPayment_method_detailInput
    bill?: billCreateNestedManyWithoutPayment_method_detailsInput
  }

  export type payment_method_detailUncheckedCreateWithoutPayment_methodInput = {
    id?: number
    user_id?: number | null
    card_number: bigint | number
    card_name: string
    bill?: billUncheckedCreateNestedManyWithoutPayment_method_detailsInput
  }

  export type payment_method_detailCreateOrConnectWithoutPayment_methodInput = {
    where: payment_method_detailWhereUniqueInput
    create: XOR<payment_method_detailCreateWithoutPayment_methodInput, payment_method_detailUncheckedCreateWithoutPayment_methodInput>
  }

  export type payment_method_detailCreateManyPayment_methodInputEnvelope = {
    data: payment_method_detailCreateManyPayment_methodInput | payment_method_detailCreateManyPayment_methodInput[]
    skipDuplicates?: boolean
  }

  export type payment_method_detailUpsertWithWhereUniqueWithoutPayment_methodInput = {
    where: payment_method_detailWhereUniqueInput
    update: XOR<payment_method_detailUpdateWithoutPayment_methodInput, payment_method_detailUncheckedUpdateWithoutPayment_methodInput>
    create: XOR<payment_method_detailCreateWithoutPayment_methodInput, payment_method_detailUncheckedCreateWithoutPayment_methodInput>
  }

  export type payment_method_detailUpdateWithWhereUniqueWithoutPayment_methodInput = {
    where: payment_method_detailWhereUniqueInput
    data: XOR<payment_method_detailUpdateWithoutPayment_methodInput, payment_method_detailUncheckedUpdateWithoutPayment_methodInput>
  }

  export type payment_method_detailUpdateManyWithWhereWithoutPayment_methodInput = {
    where: payment_method_detailScalarWhereInput
    data: XOR<payment_method_detailUpdateManyMutationInput, payment_method_detailUncheckedUpdateManyWithoutPayment_methodInput>
  }

  export type usersCreateWithoutPayment_method_detailInput = {
    username: string
    fullname: string
    phone_number: string
    email?: string | null
    password?: string | null
    bio?: string | null
    dob?: Date | string | null
    photo_profile?: string | null
    created_at?: Date | string
    update_at?: Date | string
    friends?: friendsCreateNestedManyWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
    bill?: billCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutPayment_method_detailInput = {
    id?: number
    username: string
    fullname: string
    phone_number: string
    email?: string | null
    password?: string | null
    bio?: string | null
    dob?: Date | string | null
    photo_profile?: string | null
    created_at?: Date | string
    update_at?: Date | string
    friends?: friendsUncheckedCreateNestedManyWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
    bill?: billUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutPayment_method_detailInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPayment_method_detailInput, usersUncheckedCreateWithoutPayment_method_detailInput>
  }

  export type payment_methodCreateWithoutPayment_method_detailInput = {
    payment_method_name: string
    payment_method_logo: string
  }

  export type payment_methodUncheckedCreateWithoutPayment_method_detailInput = {
    id?: number
    payment_method_name: string
    payment_method_logo: string
  }

  export type payment_methodCreateOrConnectWithoutPayment_method_detailInput = {
    where: payment_methodWhereUniqueInput
    create: XOR<payment_methodCreateWithoutPayment_method_detailInput, payment_methodUncheckedCreateWithoutPayment_method_detailInput>
  }

  export type billCreateWithoutPayment_method_detailsInput = {
    description: string
    discount?: number | null
    tax: number
    service?: number | null
    total_price: bigint | number
    date?: Date | string
    status: $Enums.Bill_status_Enum
    users?: usersCreateNestedOneWithoutBillInput
    orders?: ordersCreateNestedManyWithoutBillInput
  }

  export type billUncheckedCreateWithoutPayment_method_detailsInput = {
    id?: number
    user_id?: number | null
    description: string
    discount?: number | null
    tax: number
    service?: number | null
    total_price: bigint | number
    date?: Date | string
    status: $Enums.Bill_status_Enum
    orders?: ordersUncheckedCreateNestedManyWithoutBillInput
  }

  export type billCreateOrConnectWithoutPayment_method_detailsInput = {
    where: billWhereUniqueInput
    create: XOR<billCreateWithoutPayment_method_detailsInput, billUncheckedCreateWithoutPayment_method_detailsInput>
  }

  export type billCreateManyPayment_method_detailsInputEnvelope = {
    data: billCreateManyPayment_method_detailsInput | billCreateManyPayment_method_detailsInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutPayment_method_detailInput = {
    update: XOR<usersUpdateWithoutPayment_method_detailInput, usersUncheckedUpdateWithoutPayment_method_detailInput>
    create: XOR<usersCreateWithoutPayment_method_detailInput, usersUncheckedCreateWithoutPayment_method_detailInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPayment_method_detailInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPayment_method_detailInput, usersUncheckedUpdateWithoutPayment_method_detailInput>
  }

  export type usersUpdateWithoutPayment_method_detailInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_profile?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    friends?: friendsUpdateManyWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
    bill?: billUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutPayment_method_detailInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo_profile?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    friends?: friendsUncheckedUpdateManyWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
    bill?: billUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type payment_methodUpsertWithoutPayment_method_detailInput = {
    update: XOR<payment_methodUpdateWithoutPayment_method_detailInput, payment_methodUncheckedUpdateWithoutPayment_method_detailInput>
    create: XOR<payment_methodCreateWithoutPayment_method_detailInput, payment_methodUncheckedCreateWithoutPayment_method_detailInput>
    where?: payment_methodWhereInput
  }

  export type payment_methodUpdateToOneWithWhereWithoutPayment_method_detailInput = {
    where?: payment_methodWhereInput
    data: XOR<payment_methodUpdateWithoutPayment_method_detailInput, payment_methodUncheckedUpdateWithoutPayment_method_detailInput>
  }

  export type payment_methodUpdateWithoutPayment_method_detailInput = {
    payment_method_name?: StringFieldUpdateOperationsInput | string
    payment_method_logo?: StringFieldUpdateOperationsInput | string
  }

  export type payment_methodUncheckedUpdateWithoutPayment_method_detailInput = {
    id?: IntFieldUpdateOperationsInput | number
    payment_method_name?: StringFieldUpdateOperationsInput | string
    payment_method_logo?: StringFieldUpdateOperationsInput | string
  }

  export type billUpsertWithWhereUniqueWithoutPayment_method_detailsInput = {
    where: billWhereUniqueInput
    update: XOR<billUpdateWithoutPayment_method_detailsInput, billUncheckedUpdateWithoutPayment_method_detailsInput>
    create: XOR<billCreateWithoutPayment_method_detailsInput, billUncheckedCreateWithoutPayment_method_detailsInput>
  }

  export type billUpdateWithWhereUniqueWithoutPayment_method_detailsInput = {
    where: billWhereUniqueInput
    data: XOR<billUpdateWithoutPayment_method_detailsInput, billUncheckedUpdateWithoutPayment_method_detailsInput>
  }

  export type billUpdateManyWithWhereWithoutPayment_method_detailsInput = {
    where: billScalarWhereInput
    data: XOR<billUpdateManyMutationInput, billUncheckedUpdateManyWithoutPayment_method_detailsInput>
  }

  export type friendsCreateManyUsersInput = {
    id?: number
    friends_name: string
    friends_photo?: string | null
  }

  export type ordersCreateManyUsersInput = {
    id?: number
    bill_id?: number | null
    menu_name: string
    qty: number
    price: bigint | number
  }

  export type billCreateManyUsersInput = {
    id?: number
    payment_method_id?: number | null
    description: string
    discount?: number | null
    tax: number
    service?: number | null
    total_price: bigint | number
    date?: Date | string
    status: $Enums.Bill_status_Enum
  }

  export type payment_method_detailCreateManyUsersInput = {
    id?: number
    payment_method_id?: number | null
    card_number: bigint | number
    card_name: string
  }

  export type friendsUpdateWithoutUsersInput = {
    friends_name?: StringFieldUpdateOperationsInput | string
    friends_photo?: NullableStringFieldUpdateOperationsInput | string | null
    friends_order?: friends_orderUpdateManyWithoutFriendsNestedInput
  }

  export type friendsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    friends_name?: StringFieldUpdateOperationsInput | string
    friends_photo?: NullableStringFieldUpdateOperationsInput | string | null
    friends_order?: friends_orderUncheckedUpdateManyWithoutFriendsNestedInput
  }

  export type friendsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    friends_name?: StringFieldUpdateOperationsInput | string
    friends_photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ordersUpdateWithoutUsersInput = {
    menu_name?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    bill?: billUpdateOneWithoutOrdersNestedInput
    friends_order?: friends_orderUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    bill_id?: NullableIntFieldUpdateOperationsInput | number | null
    menu_name?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    friends_order?: friends_orderUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    bill_id?: NullableIntFieldUpdateOperationsInput | number | null
    menu_name?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    price?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type billUpdateWithoutUsersInput = {
    description?: StringFieldUpdateOperationsInput | string
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    tax?: IntFieldUpdateOperationsInput | number
    service?: NullableFloatFieldUpdateOperationsInput | number | null
    total_price?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBill_status_EnumFieldUpdateOperationsInput | $Enums.Bill_status_Enum
    payment_method_details?: payment_method_detailUpdateOneWithoutBillNestedInput
    orders?: ordersUpdateManyWithoutBillNestedInput
  }

  export type billUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    payment_method_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    tax?: IntFieldUpdateOperationsInput | number
    service?: NullableFloatFieldUpdateOperationsInput | number | null
    total_price?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBill_status_EnumFieldUpdateOperationsInput | $Enums.Bill_status_Enum
    orders?: ordersUncheckedUpdateManyWithoutBillNestedInput
  }

  export type billUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    payment_method_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    tax?: IntFieldUpdateOperationsInput | number
    service?: NullableFloatFieldUpdateOperationsInput | number | null
    total_price?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBill_status_EnumFieldUpdateOperationsInput | $Enums.Bill_status_Enum
  }

  export type payment_method_detailUpdateWithoutUsersInput = {
    card_number?: BigIntFieldUpdateOperationsInput | bigint | number
    card_name?: StringFieldUpdateOperationsInput | string
    payment_method?: payment_methodUpdateOneWithoutPayment_method_detailNestedInput
    bill?: billUpdateManyWithoutPayment_method_detailsNestedInput
  }

  export type payment_method_detailUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    payment_method_id?: NullableIntFieldUpdateOperationsInput | number | null
    card_number?: BigIntFieldUpdateOperationsInput | bigint | number
    card_name?: StringFieldUpdateOperationsInput | string
    bill?: billUncheckedUpdateManyWithoutPayment_method_detailsNestedInput
  }

  export type payment_method_detailUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    payment_method_id?: NullableIntFieldUpdateOperationsInput | number | null
    card_number?: BigIntFieldUpdateOperationsInput | bigint | number
    card_name?: StringFieldUpdateOperationsInput | string
  }

  export type friends_orderCreateManyOrdersInput = {
    id?: number
    friends_id?: number | null
    friend_order_price: bigint | number
    status: $Enums.Order_status_Enum
    created_at?: Date | string
    update_at?: Date | string
  }

  export type friends_orderUpdateWithoutOrdersInput = {
    friend_order_price?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumOrder_status_EnumFieldUpdateOperationsInput | $Enums.Order_status_Enum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    friends?: friendsUpdateOneWithoutFriends_orderNestedInput
  }

  export type friends_orderUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    friends_id?: NullableIntFieldUpdateOperationsInput | number | null
    friend_order_price?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumOrder_status_EnumFieldUpdateOperationsInput | $Enums.Order_status_Enum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type friends_orderUncheckedUpdateManyWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    friends_id?: NullableIntFieldUpdateOperationsInput | number | null
    friend_order_price?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumOrder_status_EnumFieldUpdateOperationsInput | $Enums.Order_status_Enum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type friends_orderCreateManyFriendsInput = {
    id?: number
    orders_id?: number | null
    friend_order_price: bigint | number
    status: $Enums.Order_status_Enum
    created_at?: Date | string
    update_at?: Date | string
  }

  export type friends_orderUpdateWithoutFriendsInput = {
    friend_order_price?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumOrder_status_EnumFieldUpdateOperationsInput | $Enums.Order_status_Enum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUpdateOneWithoutFriends_orderNestedInput
  }

  export type friends_orderUncheckedUpdateWithoutFriendsInput = {
    id?: IntFieldUpdateOperationsInput | number
    orders_id?: NullableIntFieldUpdateOperationsInput | number | null
    friend_order_price?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumOrder_status_EnumFieldUpdateOperationsInput | $Enums.Order_status_Enum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type friends_orderUncheckedUpdateManyWithoutFriendsInput = {
    id?: IntFieldUpdateOperationsInput | number
    orders_id?: NullableIntFieldUpdateOperationsInput | number | null
    friend_order_price?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumOrder_status_EnumFieldUpdateOperationsInput | $Enums.Order_status_Enum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersCreateManyBillInput = {
    id?: number
    user_id?: number | null
    menu_name: string
    qty: number
    price: bigint | number
  }

  export type ordersUpdateWithoutBillInput = {
    menu_name?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    users?: usersUpdateOneWithoutOrdersNestedInput
    friends_order?: friends_orderUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutBillInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    menu_name?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    friends_order?: friends_orderUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutBillInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    menu_name?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    price?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type payment_method_detailCreateManyPayment_methodInput = {
    id?: number
    user_id?: number | null
    card_number: bigint | number
    card_name: string
  }

  export type payment_method_detailUpdateWithoutPayment_methodInput = {
    card_number?: BigIntFieldUpdateOperationsInput | bigint | number
    card_name?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateOneWithoutPayment_method_detailNestedInput
    bill?: billUpdateManyWithoutPayment_method_detailsNestedInput
  }

  export type payment_method_detailUncheckedUpdateWithoutPayment_methodInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    card_number?: BigIntFieldUpdateOperationsInput | bigint | number
    card_name?: StringFieldUpdateOperationsInput | string
    bill?: billUncheckedUpdateManyWithoutPayment_method_detailsNestedInput
  }

  export type payment_method_detailUncheckedUpdateManyWithoutPayment_methodInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    card_number?: BigIntFieldUpdateOperationsInput | bigint | number
    card_name?: StringFieldUpdateOperationsInput | string
  }

  export type billCreateManyPayment_method_detailsInput = {
    id?: number
    user_id?: number | null
    description: string
    discount?: number | null
    tax: number
    service?: number | null
    total_price: bigint | number
    date?: Date | string
    status: $Enums.Bill_status_Enum
  }

  export type billUpdateWithoutPayment_method_detailsInput = {
    description?: StringFieldUpdateOperationsInput | string
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    tax?: IntFieldUpdateOperationsInput | number
    service?: NullableFloatFieldUpdateOperationsInput | number | null
    total_price?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBill_status_EnumFieldUpdateOperationsInput | $Enums.Bill_status_Enum
    users?: usersUpdateOneWithoutBillNestedInput
    orders?: ordersUpdateManyWithoutBillNestedInput
  }

  export type billUncheckedUpdateWithoutPayment_method_detailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    tax?: IntFieldUpdateOperationsInput | number
    service?: NullableFloatFieldUpdateOperationsInput | number | null
    total_price?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBill_status_EnumFieldUpdateOperationsInput | $Enums.Bill_status_Enum
    orders?: ordersUncheckedUpdateManyWithoutBillNestedInput
  }

  export type billUncheckedUpdateManyWithoutPayment_method_detailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    tax?: IntFieldUpdateOperationsInput | number
    service?: NullableFloatFieldUpdateOperationsInput | number | null
    total_price?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBill_status_EnumFieldUpdateOperationsInput | $Enums.Bill_status_Enum
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrdersCountOutputTypeDefaultArgs instead
     */
    export type OrdersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrdersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FriendsCountOutputTypeDefaultArgs instead
     */
    export type FriendsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FriendsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BillCountOutputTypeDefaultArgs instead
     */
    export type BillCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BillCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Payment_methodCountOutputTypeDefaultArgs instead
     */
    export type Payment_methodCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Payment_methodCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Payment_method_detailCountOutputTypeDefaultArgs instead
     */
    export type Payment_method_detailCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Payment_method_detailCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ordersDefaultArgs instead
     */
    export type ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ordersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use friends_orderDefaultArgs instead
     */
    export type friends_orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = friends_orderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use friendsDefaultArgs instead
     */
    export type friendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = friendsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use billDefaultArgs instead
     */
    export type billArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = billDefaultArgs<ExtArgs>
    /**
     * @deprecated Use payment_methodDefaultArgs instead
     */
    export type payment_methodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = payment_methodDefaultArgs<ExtArgs>
    /**
     * @deprecated Use payment_method_detailDefaultArgs instead
     */
    export type payment_method_detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = payment_method_detailDefaultArgs<ExtArgs>

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
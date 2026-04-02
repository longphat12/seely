
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
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ProjectMember
 * 
 */
export type ProjectMember = $Result.DefaultSelection<Prisma.$ProjectMemberPayload>
/**
 * Model Page
 * 
 */
export type Page = $Result.DefaultSelection<Prisma.$PagePayload>
/**
 * Model Audit
 * 
 */
export type Audit = $Result.DefaultSelection<Prisma.$AuditPayload>
/**
 * Model AuditMetrics
 * 
 */
export type AuditMetrics = $Result.DefaultSelection<Prisma.$AuditMetricsPayload>
/**
 * Model Issue
 * 
 */
export type Issue = $Result.DefaultSelection<Prisma.$IssuePayload>
/**
 * Model IssueStatusHistory
 * 
 */
export type IssueStatusHistory = $Result.DefaultSelection<Prisma.$IssueStatusHistoryPayload>
/**
 * Model AuditSnapshot
 * 
 */
export type AuditSnapshot = $Result.DefaultSelection<Prisma.$AuditSnapshotPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Severity: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

export type Severity = (typeof Severity)[keyof typeof Severity]


export const IssueStatus: {
  OPEN: 'OPEN',
  FIXED: 'FIXED',
  IGNORED: 'IGNORED'
};

export type IssueStatus = (typeof IssueStatus)[keyof typeof IssueStatus]


export const AuditSource: {
  EXTENSION: 'EXTENSION',
  MANUAL: 'MANUAL',
  SCHEDULED: 'SCHEDULED',
  API: 'API'
};

export type AuditSource = (typeof AuditSource)[keyof typeof AuditSource]

}

export type Severity = $Enums.Severity

export const Severity: typeof $Enums.Severity

export type IssueStatus = $Enums.IssueStatus

export const IssueStatus: typeof $Enums.IssueStatus

export type AuditSource = $Enums.AuditSource

export const AuditSource: typeof $Enums.AuditSource

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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectMember`: Exposes CRUD operations for the **ProjectMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectMembers
    * const projectMembers = await prisma.projectMember.findMany()
    * ```
    */
  get projectMember(): Prisma.ProjectMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.page`: Exposes CRUD operations for the **Page** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pages
    * const pages = await prisma.page.findMany()
    * ```
    */
  get page(): Prisma.PageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.audit`: Exposes CRUD operations for the **Audit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Audits
    * const audits = await prisma.audit.findMany()
    * ```
    */
  get audit(): Prisma.AuditDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditMetrics`: Exposes CRUD operations for the **AuditMetrics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditMetrics
    * const auditMetrics = await prisma.auditMetrics.findMany()
    * ```
    */
  get auditMetrics(): Prisma.AuditMetricsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.issue`: Exposes CRUD operations for the **Issue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Issues
    * const issues = await prisma.issue.findMany()
    * ```
    */
  get issue(): Prisma.IssueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.issueStatusHistory`: Exposes CRUD operations for the **IssueStatusHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IssueStatusHistories
    * const issueStatusHistories = await prisma.issueStatusHistory.findMany()
    * ```
    */
  get issueStatusHistory(): Prisma.IssueStatusHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditSnapshot`: Exposes CRUD operations for the **AuditSnapshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditSnapshots
    * const auditSnapshots = await prisma.auditSnapshot.findMany()
    * ```
    */
  get auditSnapshot(): Prisma.AuditSnapshotDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
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
    User: 'User',
    Project: 'Project',
    ProjectMember: 'ProjectMember',
    Page: 'Page',
    Audit: 'Audit',
    AuditMetrics: 'AuditMetrics',
    Issue: 'Issue',
    IssueStatusHistory: 'IssueStatusHistory',
    AuditSnapshot: 'AuditSnapshot'
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
      modelProps: "user" | "project" | "projectMember" | "page" | "audit" | "auditMetrics" | "issue" | "issueStatusHistory" | "auditSnapshot"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      ProjectMember: {
        payload: Prisma.$ProjectMemberPayload<ExtArgs>
        fields: Prisma.ProjectMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          findFirst: {
            args: Prisma.ProjectMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          findMany: {
            args: Prisma.ProjectMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>[]
          }
          create: {
            args: Prisma.ProjectMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          createMany: {
            args: Prisma.ProjectMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>[]
          }
          delete: {
            args: Prisma.ProjectMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          update: {
            args: Prisma.ProjectMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          deleteMany: {
            args: Prisma.ProjectMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>[]
          }
          upsert: {
            args: Prisma.ProjectMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          aggregate: {
            args: Prisma.ProjectMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectMember>
          }
          groupBy: {
            args: Prisma.ProjectMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectMemberCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectMemberCountAggregateOutputType> | number
          }
        }
      }
      Page: {
        payload: Prisma.$PagePayload<ExtArgs>
        fields: Prisma.PageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          findFirst: {
            args: Prisma.PageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          findMany: {
            args: Prisma.PageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          create: {
            args: Prisma.PageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          createMany: {
            args: Prisma.PageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          delete: {
            args: Prisma.PageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          update: {
            args: Prisma.PageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          deleteMany: {
            args: Prisma.PageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          upsert: {
            args: Prisma.PageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          aggregate: {
            args: Prisma.PageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePage>
          }
          groupBy: {
            args: Prisma.PageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PageCountArgs<ExtArgs>
            result: $Utils.Optional<PageCountAggregateOutputType> | number
          }
        }
      }
      Audit: {
        payload: Prisma.$AuditPayload<ExtArgs>
        fields: Prisma.AuditFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPayload>
          }
          findFirst: {
            args: Prisma.AuditFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPayload>
          }
          findMany: {
            args: Prisma.AuditFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPayload>[]
          }
          create: {
            args: Prisma.AuditCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPayload>
          }
          createMany: {
            args: Prisma.AuditCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPayload>[]
          }
          delete: {
            args: Prisma.AuditDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPayload>
          }
          update: {
            args: Prisma.AuditUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPayload>
          }
          deleteMany: {
            args: Prisma.AuditDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPayload>[]
          }
          upsert: {
            args: Prisma.AuditUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditPayload>
          }
          aggregate: {
            args: Prisma.AuditAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudit>
          }
          groupBy: {
            args: Prisma.AuditGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditCountArgs<ExtArgs>
            result: $Utils.Optional<AuditCountAggregateOutputType> | number
          }
        }
      }
      AuditMetrics: {
        payload: Prisma.$AuditMetricsPayload<ExtArgs>
        fields: Prisma.AuditMetricsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditMetricsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditMetricsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditMetricsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditMetricsPayload>
          }
          findFirst: {
            args: Prisma.AuditMetricsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditMetricsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditMetricsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditMetricsPayload>
          }
          findMany: {
            args: Prisma.AuditMetricsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditMetricsPayload>[]
          }
          create: {
            args: Prisma.AuditMetricsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditMetricsPayload>
          }
          createMany: {
            args: Prisma.AuditMetricsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditMetricsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditMetricsPayload>[]
          }
          delete: {
            args: Prisma.AuditMetricsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditMetricsPayload>
          }
          update: {
            args: Prisma.AuditMetricsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditMetricsPayload>
          }
          deleteMany: {
            args: Prisma.AuditMetricsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditMetricsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditMetricsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditMetricsPayload>[]
          }
          upsert: {
            args: Prisma.AuditMetricsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditMetricsPayload>
          }
          aggregate: {
            args: Prisma.AuditMetricsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditMetrics>
          }
          groupBy: {
            args: Prisma.AuditMetricsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditMetricsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditMetricsCountArgs<ExtArgs>
            result: $Utils.Optional<AuditMetricsCountAggregateOutputType> | number
          }
        }
      }
      Issue: {
        payload: Prisma.$IssuePayload<ExtArgs>
        fields: Prisma.IssueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IssueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IssueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          findFirst: {
            args: Prisma.IssueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IssueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          findMany: {
            args: Prisma.IssueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>[]
          }
          create: {
            args: Prisma.IssueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          createMany: {
            args: Prisma.IssueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IssueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>[]
          }
          delete: {
            args: Prisma.IssueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          update: {
            args: Prisma.IssueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          deleteMany: {
            args: Prisma.IssueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IssueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IssueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>[]
          }
          upsert: {
            args: Prisma.IssueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          aggregate: {
            args: Prisma.IssueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIssue>
          }
          groupBy: {
            args: Prisma.IssueGroupByArgs<ExtArgs>
            result: $Utils.Optional<IssueGroupByOutputType>[]
          }
          count: {
            args: Prisma.IssueCountArgs<ExtArgs>
            result: $Utils.Optional<IssueCountAggregateOutputType> | number
          }
        }
      }
      IssueStatusHistory: {
        payload: Prisma.$IssueStatusHistoryPayload<ExtArgs>
        fields: Prisma.IssueStatusHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IssueStatusHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssueStatusHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IssueStatusHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssueStatusHistoryPayload>
          }
          findFirst: {
            args: Prisma.IssueStatusHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssueStatusHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IssueStatusHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssueStatusHistoryPayload>
          }
          findMany: {
            args: Prisma.IssueStatusHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssueStatusHistoryPayload>[]
          }
          create: {
            args: Prisma.IssueStatusHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssueStatusHistoryPayload>
          }
          createMany: {
            args: Prisma.IssueStatusHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IssueStatusHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssueStatusHistoryPayload>[]
          }
          delete: {
            args: Prisma.IssueStatusHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssueStatusHistoryPayload>
          }
          update: {
            args: Prisma.IssueStatusHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssueStatusHistoryPayload>
          }
          deleteMany: {
            args: Prisma.IssueStatusHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IssueStatusHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IssueStatusHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssueStatusHistoryPayload>[]
          }
          upsert: {
            args: Prisma.IssueStatusHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssueStatusHistoryPayload>
          }
          aggregate: {
            args: Prisma.IssueStatusHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIssueStatusHistory>
          }
          groupBy: {
            args: Prisma.IssueStatusHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<IssueStatusHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.IssueStatusHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<IssueStatusHistoryCountAggregateOutputType> | number
          }
        }
      }
      AuditSnapshot: {
        payload: Prisma.$AuditSnapshotPayload<ExtArgs>
        fields: Prisma.AuditSnapshotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditSnapshotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditSnapshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditSnapshotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditSnapshotPayload>
          }
          findFirst: {
            args: Prisma.AuditSnapshotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditSnapshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditSnapshotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditSnapshotPayload>
          }
          findMany: {
            args: Prisma.AuditSnapshotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditSnapshotPayload>[]
          }
          create: {
            args: Prisma.AuditSnapshotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditSnapshotPayload>
          }
          createMany: {
            args: Prisma.AuditSnapshotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditSnapshotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditSnapshotPayload>[]
          }
          delete: {
            args: Prisma.AuditSnapshotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditSnapshotPayload>
          }
          update: {
            args: Prisma.AuditSnapshotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditSnapshotPayload>
          }
          deleteMany: {
            args: Prisma.AuditSnapshotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditSnapshotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditSnapshotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditSnapshotPayload>[]
          }
          upsert: {
            args: Prisma.AuditSnapshotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditSnapshotPayload>
          }
          aggregate: {
            args: Prisma.AuditSnapshotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditSnapshot>
          }
          groupBy: {
            args: Prisma.AuditSnapshotGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditSnapshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditSnapshotCountArgs<ExtArgs>
            result: $Utils.Optional<AuditSnapshotCountAggregateOutputType> | number
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
    user?: UserOmit
    project?: ProjectOmit
    projectMember?: ProjectMemberOmit
    page?: PageOmit
    audit?: AuditOmit
    auditMetrics?: AuditMetricsOmit
    issue?: IssueOmit
    issueStatusHistory?: IssueStatusHistoryOmit
    auditSnapshot?: AuditSnapshotOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    memberships: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | UserCountOutputTypeCountMembershipsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMemberWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    pages: number
    audits: number
    members: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pages?: boolean | ProjectCountOutputTypeCountPagesArgs
    audits?: boolean | ProjectCountOutputTypeCountAuditsArgs
    members?: boolean | ProjectCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountPagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountAuditsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMemberWhereInput
  }


  /**
   * Count Type PageCountOutputType
   */

  export type PageCountOutputType = {
    audits: number
  }

  export type PageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audits?: boolean | PageCountOutputTypeCountAuditsArgs
  }

  // Custom InputTypes
  /**
   * PageCountOutputType without action
   */
  export type PageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageCountOutputType
     */
    select?: PageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PageCountOutputType without action
   */
  export type PageCountOutputTypeCountAuditsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditWhereInput
  }


  /**
   * Count Type AuditCountOutputType
   */

  export type AuditCountOutputType = {
    issues: number
  }

  export type AuditCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issues?: boolean | AuditCountOutputTypeCountIssuesArgs
  }

  // Custom InputTypes
  /**
   * AuditCountOutputType without action
   */
  export type AuditCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditCountOutputType
     */
    select?: AuditCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuditCountOutputType without action
   */
  export type AuditCountOutputTypeCountIssuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssueWhereInput
  }


  /**
   * Count Type IssueCountOutputType
   */

  export type IssueCountOutputType = {
    history: number
  }

  export type IssueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | IssueCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * IssueCountOutputType without action
   */
  export type IssueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueCountOutputType
     */
    select?: IssueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IssueCountOutputType without action
   */
  export type IssueCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssueStatusHistoryWhereInput
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
    passwordHash: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    createdAt?: true
    updatedAt?: true
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
    passwordHash: string
    name: string | null
    createdAt: Date
    updatedAt: Date
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
    passwordHash?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      memberships: Prisma.$ProjectMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      name: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    memberships<T extends User$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.memberships
   */
  export type User$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    where?: ProjectMemberWhereInput
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    cursor?: ProjectMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    domain: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    domain: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    domain: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    domain: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pages?: boolean | Project$pagesArgs<ExtArgs>
    audits?: boolean | Project$auditsArgs<ExtArgs>
    members?: boolean | Project$membersArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    domain?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "domain" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pages?: boolean | Project$pagesArgs<ExtArgs>
    audits?: boolean | Project$auditsArgs<ExtArgs>
    members?: boolean | Project$membersArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      pages: Prisma.$PagePayload<ExtArgs>[]
      audits: Prisma.$AuditPayload<ExtArgs>[]
      members: Prisma.$ProjectMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      domain: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pages<T extends Project$pagesArgs<ExtArgs> = {}>(args?: Subset<T, Project$pagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    audits<T extends Project$auditsArgs<ExtArgs> = {}>(args?: Subset<T, Project$auditsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    members<T extends Project$membersArgs<ExtArgs> = {}>(args?: Subset<T, Project$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly domain: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.pages
   */
  export type Project$pagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    where?: PageWhereInput
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    cursor?: PageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Project.audits
   */
  export type Project$auditsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditInclude<ExtArgs> | null
    where?: AuditWhereInput
    orderBy?: AuditOrderByWithRelationInput | AuditOrderByWithRelationInput[]
    cursor?: AuditWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditScalarFieldEnum | AuditScalarFieldEnum[]
  }

  /**
   * Project.members
   */
  export type Project$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    where?: ProjectMemberWhereInput
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    cursor?: ProjectMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model ProjectMember
   */

  export type AggregateProjectMember = {
    _count: ProjectMemberCountAggregateOutputType | null
    _min: ProjectMemberMinAggregateOutputType | null
    _max: ProjectMemberMaxAggregateOutputType | null
  }

  export type ProjectMemberMinAggregateOutputType = {
    id: string | null
    userId: string | null
    projectId: string | null
    role: string | null
    createdAt: Date | null
  }

  export type ProjectMemberMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    projectId: string | null
    role: string | null
    createdAt: Date | null
  }

  export type ProjectMemberCountAggregateOutputType = {
    id: number
    userId: number
    projectId: number
    role: number
    createdAt: number
    _all: number
  }


  export type ProjectMemberMinAggregateInputType = {
    id?: true
    userId?: true
    projectId?: true
    role?: true
    createdAt?: true
  }

  export type ProjectMemberMaxAggregateInputType = {
    id?: true
    userId?: true
    projectId?: true
    role?: true
    createdAt?: true
  }

  export type ProjectMemberCountAggregateInputType = {
    id?: true
    userId?: true
    projectId?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectMember to aggregate.
     */
    where?: ProjectMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectMembers
    **/
    _count?: true | ProjectMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMemberMaxAggregateInputType
  }

  export type GetProjectMemberAggregateType<T extends ProjectMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectMember[P]>
      : GetScalarType<T[P], AggregateProjectMember[P]>
  }




  export type ProjectMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMemberWhereInput
    orderBy?: ProjectMemberOrderByWithAggregationInput | ProjectMemberOrderByWithAggregationInput[]
    by: ProjectMemberScalarFieldEnum[] | ProjectMemberScalarFieldEnum
    having?: ProjectMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectMemberCountAggregateInputType | true
    _min?: ProjectMemberMinAggregateInputType
    _max?: ProjectMemberMaxAggregateInputType
  }

  export type ProjectMemberGroupByOutputType = {
    id: string
    userId: string
    projectId: string
    role: string
    createdAt: Date
    _count: ProjectMemberCountAggregateOutputType | null
    _min: ProjectMemberMinAggregateOutputType | null
    _max: ProjectMemberMaxAggregateOutputType | null
  }

  type GetProjectMemberGroupByPayload<T extends ProjectMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectMemberGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectMemberGroupByOutputType[P]>
        }
      >
    >


  export type ProjectMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    projectId?: boolean
    role?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMember"]>

  export type ProjectMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    projectId?: boolean
    role?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMember"]>

  export type ProjectMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    projectId?: boolean
    role?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMember"]>

  export type ProjectMemberSelectScalar = {
    id?: boolean
    userId?: boolean
    projectId?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type ProjectMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "projectId" | "role" | "createdAt", ExtArgs["result"]["projectMember"]>
  export type ProjectMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectMember"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      projectId: string
      role: string
      createdAt: Date
    }, ExtArgs["result"]["projectMember"]>
    composites: {}
  }

  type ProjectMemberGetPayload<S extends boolean | null | undefined | ProjectMemberDefaultArgs> = $Result.GetResult<Prisma.$ProjectMemberPayload, S>

  type ProjectMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectMemberCountAggregateInputType | true
    }

  export interface ProjectMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectMember'], meta: { name: 'ProjectMember' } }
    /**
     * Find zero or one ProjectMember that matches the filter.
     * @param {ProjectMemberFindUniqueArgs} args - Arguments to find a ProjectMember
     * @example
     * // Get one ProjectMember
     * const projectMember = await prisma.projectMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectMemberFindUniqueArgs>(args: SelectSubset<T, ProjectMemberFindUniqueArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectMemberFindUniqueOrThrowArgs} args - Arguments to find a ProjectMember
     * @example
     * // Get one ProjectMember
     * const projectMember = await prisma.projectMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberFindFirstArgs} args - Arguments to find a ProjectMember
     * @example
     * // Get one ProjectMember
     * const projectMember = await prisma.projectMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectMemberFindFirstArgs>(args?: SelectSubset<T, ProjectMemberFindFirstArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberFindFirstOrThrowArgs} args - Arguments to find a ProjectMember
     * @example
     * // Get one ProjectMember
     * const projectMember = await prisma.projectMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectMembers
     * const projectMembers = await prisma.projectMember.findMany()
     * 
     * // Get first 10 ProjectMembers
     * const projectMembers = await prisma.projectMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectMemberWithIdOnly = await prisma.projectMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectMemberFindManyArgs>(args?: SelectSubset<T, ProjectMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectMember.
     * @param {ProjectMemberCreateArgs} args - Arguments to create a ProjectMember.
     * @example
     * // Create one ProjectMember
     * const ProjectMember = await prisma.projectMember.create({
     *   data: {
     *     // ... data to create a ProjectMember
     *   }
     * })
     * 
     */
    create<T extends ProjectMemberCreateArgs>(args: SelectSubset<T, ProjectMemberCreateArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectMembers.
     * @param {ProjectMemberCreateManyArgs} args - Arguments to create many ProjectMembers.
     * @example
     * // Create many ProjectMembers
     * const projectMember = await prisma.projectMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectMemberCreateManyArgs>(args?: SelectSubset<T, ProjectMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectMembers and returns the data saved in the database.
     * @param {ProjectMemberCreateManyAndReturnArgs} args - Arguments to create many ProjectMembers.
     * @example
     * // Create many ProjectMembers
     * const projectMember = await prisma.projectMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectMembers and only return the `id`
     * const projectMemberWithIdOnly = await prisma.projectMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectMember.
     * @param {ProjectMemberDeleteArgs} args - Arguments to delete one ProjectMember.
     * @example
     * // Delete one ProjectMember
     * const ProjectMember = await prisma.projectMember.delete({
     *   where: {
     *     // ... filter to delete one ProjectMember
     *   }
     * })
     * 
     */
    delete<T extends ProjectMemberDeleteArgs>(args: SelectSubset<T, ProjectMemberDeleteArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectMember.
     * @param {ProjectMemberUpdateArgs} args - Arguments to update one ProjectMember.
     * @example
     * // Update one ProjectMember
     * const projectMember = await prisma.projectMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectMemberUpdateArgs>(args: SelectSubset<T, ProjectMemberUpdateArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectMembers.
     * @param {ProjectMemberDeleteManyArgs} args - Arguments to filter ProjectMembers to delete.
     * @example
     * // Delete a few ProjectMembers
     * const { count } = await prisma.projectMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectMemberDeleteManyArgs>(args?: SelectSubset<T, ProjectMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectMembers
     * const projectMember = await prisma.projectMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectMemberUpdateManyArgs>(args: SelectSubset<T, ProjectMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectMembers and returns the data updated in the database.
     * @param {ProjectMemberUpdateManyAndReturnArgs} args - Arguments to update many ProjectMembers.
     * @example
     * // Update many ProjectMembers
     * const projectMember = await prisma.projectMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectMembers and only return the `id`
     * const projectMemberWithIdOnly = await prisma.projectMember.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectMember.
     * @param {ProjectMemberUpsertArgs} args - Arguments to update or create a ProjectMember.
     * @example
     * // Update or create a ProjectMember
     * const projectMember = await prisma.projectMember.upsert({
     *   create: {
     *     // ... data to create a ProjectMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectMember we want to update
     *   }
     * })
     */
    upsert<T extends ProjectMemberUpsertArgs>(args: SelectSubset<T, ProjectMemberUpsertArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberCountArgs} args - Arguments to filter ProjectMembers to count.
     * @example
     * // Count the number of ProjectMembers
     * const count = await prisma.projectMember.count({
     *   where: {
     *     // ... the filter for the ProjectMembers we want to count
     *   }
     * })
    **/
    count<T extends ProjectMemberCountArgs>(
      args?: Subset<T, ProjectMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectMemberAggregateArgs>(args: Subset<T, ProjectMemberAggregateArgs>): Prisma.PrismaPromise<GetProjectMemberAggregateType<T>>

    /**
     * Group by ProjectMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberGroupByArgs} args - Group by arguments.
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
      T extends ProjectMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectMemberGroupByArgs['orderBy'] }
        : { orderBy?: ProjectMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectMember model
   */
  readonly fields: ProjectMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProjectMember model
   */
  interface ProjectMemberFieldRefs {
    readonly id: FieldRef<"ProjectMember", 'String'>
    readonly userId: FieldRef<"ProjectMember", 'String'>
    readonly projectId: FieldRef<"ProjectMember", 'String'>
    readonly role: FieldRef<"ProjectMember", 'String'>
    readonly createdAt: FieldRef<"ProjectMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectMember findUnique
   */
  export type ProjectMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMember to fetch.
     */
    where: ProjectMemberWhereUniqueInput
  }

  /**
   * ProjectMember findUniqueOrThrow
   */
  export type ProjectMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMember to fetch.
     */
    where: ProjectMemberWhereUniqueInput
  }

  /**
   * ProjectMember findFirst
   */
  export type ProjectMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMember to fetch.
     */
    where?: ProjectMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectMembers.
     */
    cursor?: ProjectMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectMembers.
     */
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }

  /**
   * ProjectMember findFirstOrThrow
   */
  export type ProjectMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMember to fetch.
     */
    where?: ProjectMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectMembers.
     */
    cursor?: ProjectMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectMembers.
     */
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }

  /**
   * ProjectMember findMany
   */
  export type ProjectMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMembers to fetch.
     */
    where?: ProjectMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectMembers.
     */
    cursor?: ProjectMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMembers.
     */
    skip?: number
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }

  /**
   * ProjectMember create
   */
  export type ProjectMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectMember.
     */
    data: XOR<ProjectMemberCreateInput, ProjectMemberUncheckedCreateInput>
  }

  /**
   * ProjectMember createMany
   */
  export type ProjectMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectMembers.
     */
    data: ProjectMemberCreateManyInput | ProjectMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectMember createManyAndReturn
   */
  export type ProjectMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectMembers.
     */
    data: ProjectMemberCreateManyInput | ProjectMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectMember update
   */
  export type ProjectMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectMember.
     */
    data: XOR<ProjectMemberUpdateInput, ProjectMemberUncheckedUpdateInput>
    /**
     * Choose, which ProjectMember to update.
     */
    where: ProjectMemberWhereUniqueInput
  }

  /**
   * ProjectMember updateMany
   */
  export type ProjectMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectMembers.
     */
    data: XOR<ProjectMemberUpdateManyMutationInput, ProjectMemberUncheckedUpdateManyInput>
    /**
     * Filter which ProjectMembers to update
     */
    where?: ProjectMemberWhereInput
    /**
     * Limit how many ProjectMembers to update.
     */
    limit?: number
  }

  /**
   * ProjectMember updateManyAndReturn
   */
  export type ProjectMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * The data used to update ProjectMembers.
     */
    data: XOR<ProjectMemberUpdateManyMutationInput, ProjectMemberUncheckedUpdateManyInput>
    /**
     * Filter which ProjectMembers to update
     */
    where?: ProjectMemberWhereInput
    /**
     * Limit how many ProjectMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectMember upsert
   */
  export type ProjectMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectMember to update in case it exists.
     */
    where: ProjectMemberWhereUniqueInput
    /**
     * In case the ProjectMember found by the `where` argument doesn't exist, create a new ProjectMember with this data.
     */
    create: XOR<ProjectMemberCreateInput, ProjectMemberUncheckedCreateInput>
    /**
     * In case the ProjectMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectMemberUpdateInput, ProjectMemberUncheckedUpdateInput>
  }

  /**
   * ProjectMember delete
   */
  export type ProjectMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter which ProjectMember to delete.
     */
    where: ProjectMemberWhereUniqueInput
  }

  /**
   * ProjectMember deleteMany
   */
  export type ProjectMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectMembers to delete
     */
    where?: ProjectMemberWhereInput
    /**
     * Limit how many ProjectMembers to delete.
     */
    limit?: number
  }

  /**
   * ProjectMember without action
   */
  export type ProjectMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
  }


  /**
   * Model Page
   */

  export type AggregatePage = {
    _count: PageCountAggregateOutputType | null
    _min: PageMinAggregateOutputType | null
    _max: PageMaxAggregateOutputType | null
  }

  export type PageMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    normalizedUrl: string | null
    path: string | null
    firstSeenAt: Date | null
    lastSeenAt: Date | null
  }

  export type PageMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    normalizedUrl: string | null
    path: string | null
    firstSeenAt: Date | null
    lastSeenAt: Date | null
  }

  export type PageCountAggregateOutputType = {
    id: number
    projectId: number
    normalizedUrl: number
    path: number
    firstSeenAt: number
    lastSeenAt: number
    _all: number
  }


  export type PageMinAggregateInputType = {
    id?: true
    projectId?: true
    normalizedUrl?: true
    path?: true
    firstSeenAt?: true
    lastSeenAt?: true
  }

  export type PageMaxAggregateInputType = {
    id?: true
    projectId?: true
    normalizedUrl?: true
    path?: true
    firstSeenAt?: true
    lastSeenAt?: true
  }

  export type PageCountAggregateInputType = {
    id?: true
    projectId?: true
    normalizedUrl?: true
    path?: true
    firstSeenAt?: true
    lastSeenAt?: true
    _all?: true
  }

  export type PageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Page to aggregate.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pages
    **/
    _count?: true | PageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageMaxAggregateInputType
  }

  export type GetPageAggregateType<T extends PageAggregateArgs> = {
        [P in keyof T & keyof AggregatePage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePage[P]>
      : GetScalarType<T[P], AggregatePage[P]>
  }




  export type PageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageWhereInput
    orderBy?: PageOrderByWithAggregationInput | PageOrderByWithAggregationInput[]
    by: PageScalarFieldEnum[] | PageScalarFieldEnum
    having?: PageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageCountAggregateInputType | true
    _min?: PageMinAggregateInputType
    _max?: PageMaxAggregateInputType
  }

  export type PageGroupByOutputType = {
    id: string
    projectId: string
    normalizedUrl: string
    path: string
    firstSeenAt: Date
    lastSeenAt: Date
    _count: PageCountAggregateOutputType | null
    _min: PageMinAggregateOutputType | null
    _max: PageMaxAggregateOutputType | null
  }

  type GetPageGroupByPayload<T extends PageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageGroupByOutputType[P]>
            : GetScalarType<T[P], PageGroupByOutputType[P]>
        }
      >
    >


  export type PageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    normalizedUrl?: boolean
    path?: boolean
    firstSeenAt?: boolean
    lastSeenAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    audits?: boolean | Page$auditsArgs<ExtArgs>
    _count?: boolean | PageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["page"]>

  export type PageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    normalizedUrl?: boolean
    path?: boolean
    firstSeenAt?: boolean
    lastSeenAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["page"]>

  export type PageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    normalizedUrl?: boolean
    path?: boolean
    firstSeenAt?: boolean
    lastSeenAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["page"]>

  export type PageSelectScalar = {
    id?: boolean
    projectId?: boolean
    normalizedUrl?: boolean
    path?: boolean
    firstSeenAt?: boolean
    lastSeenAt?: boolean
  }

  export type PageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "normalizedUrl" | "path" | "firstSeenAt" | "lastSeenAt", ExtArgs["result"]["page"]>
  export type PageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    audits?: boolean | Page$auditsArgs<ExtArgs>
    _count?: boolean | PageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type PageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $PagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Page"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      audits: Prisma.$AuditPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      normalizedUrl: string
      path: string
      firstSeenAt: Date
      lastSeenAt: Date
    }, ExtArgs["result"]["page"]>
    composites: {}
  }

  type PageGetPayload<S extends boolean | null | undefined | PageDefaultArgs> = $Result.GetResult<Prisma.$PagePayload, S>

  type PageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PageCountAggregateInputType | true
    }

  export interface PageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Page'], meta: { name: 'Page' } }
    /**
     * Find zero or one Page that matches the filter.
     * @param {PageFindUniqueArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PageFindUniqueArgs>(args: SelectSubset<T, PageFindUniqueArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Page that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PageFindUniqueOrThrowArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PageFindUniqueOrThrowArgs>(args: SelectSubset<T, PageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Page that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindFirstArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PageFindFirstArgs>(args?: SelectSubset<T, PageFindFirstArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Page that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindFirstOrThrowArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PageFindFirstOrThrowArgs>(args?: SelectSubset<T, PageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pages
     * const pages = await prisma.page.findMany()
     * 
     * // Get first 10 Pages
     * const pages = await prisma.page.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageWithIdOnly = await prisma.page.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PageFindManyArgs>(args?: SelectSubset<T, PageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Page.
     * @param {PageCreateArgs} args - Arguments to create a Page.
     * @example
     * // Create one Page
     * const Page = await prisma.page.create({
     *   data: {
     *     // ... data to create a Page
     *   }
     * })
     * 
     */
    create<T extends PageCreateArgs>(args: SelectSubset<T, PageCreateArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pages.
     * @param {PageCreateManyArgs} args - Arguments to create many Pages.
     * @example
     * // Create many Pages
     * const page = await prisma.page.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PageCreateManyArgs>(args?: SelectSubset<T, PageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pages and returns the data saved in the database.
     * @param {PageCreateManyAndReturnArgs} args - Arguments to create many Pages.
     * @example
     * // Create many Pages
     * const page = await prisma.page.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pages and only return the `id`
     * const pageWithIdOnly = await prisma.page.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PageCreateManyAndReturnArgs>(args?: SelectSubset<T, PageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Page.
     * @param {PageDeleteArgs} args - Arguments to delete one Page.
     * @example
     * // Delete one Page
     * const Page = await prisma.page.delete({
     *   where: {
     *     // ... filter to delete one Page
     *   }
     * })
     * 
     */
    delete<T extends PageDeleteArgs>(args: SelectSubset<T, PageDeleteArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Page.
     * @param {PageUpdateArgs} args - Arguments to update one Page.
     * @example
     * // Update one Page
     * const page = await prisma.page.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PageUpdateArgs>(args: SelectSubset<T, PageUpdateArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pages.
     * @param {PageDeleteManyArgs} args - Arguments to filter Pages to delete.
     * @example
     * // Delete a few Pages
     * const { count } = await prisma.page.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PageDeleteManyArgs>(args?: SelectSubset<T, PageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pages
     * const page = await prisma.page.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PageUpdateManyArgs>(args: SelectSubset<T, PageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pages and returns the data updated in the database.
     * @param {PageUpdateManyAndReturnArgs} args - Arguments to update many Pages.
     * @example
     * // Update many Pages
     * const page = await prisma.page.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pages and only return the `id`
     * const pageWithIdOnly = await prisma.page.updateManyAndReturn({
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
    updateManyAndReturn<T extends PageUpdateManyAndReturnArgs>(args: SelectSubset<T, PageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Page.
     * @param {PageUpsertArgs} args - Arguments to update or create a Page.
     * @example
     * // Update or create a Page
     * const page = await prisma.page.upsert({
     *   create: {
     *     // ... data to create a Page
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Page we want to update
     *   }
     * })
     */
    upsert<T extends PageUpsertArgs>(args: SelectSubset<T, PageUpsertArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageCountArgs} args - Arguments to filter Pages to count.
     * @example
     * // Count the number of Pages
     * const count = await prisma.page.count({
     *   where: {
     *     // ... the filter for the Pages we want to count
     *   }
     * })
    **/
    count<T extends PageCountArgs>(
      args?: Subset<T, PageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Page.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PageAggregateArgs>(args: Subset<T, PageAggregateArgs>): Prisma.PrismaPromise<GetPageAggregateType<T>>

    /**
     * Group by Page.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageGroupByArgs} args - Group by arguments.
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
      T extends PageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageGroupByArgs['orderBy'] }
        : { orderBy?: PageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Page model
   */
  readonly fields: PageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Page.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    audits<T extends Page$auditsArgs<ExtArgs> = {}>(args?: Subset<T, Page$auditsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Page model
   */
  interface PageFieldRefs {
    readonly id: FieldRef<"Page", 'String'>
    readonly projectId: FieldRef<"Page", 'String'>
    readonly normalizedUrl: FieldRef<"Page", 'String'>
    readonly path: FieldRef<"Page", 'String'>
    readonly firstSeenAt: FieldRef<"Page", 'DateTime'>
    readonly lastSeenAt: FieldRef<"Page", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Page findUnique
   */
  export type PageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page findUniqueOrThrow
   */
  export type PageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page findFirst
   */
  export type PageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pages.
     */
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page findFirstOrThrow
   */
  export type PageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pages.
     */
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page findMany
   */
  export type PageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Pages to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page create
   */
  export type PageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * The data needed to create a Page.
     */
    data: XOR<PageCreateInput, PageUncheckedCreateInput>
  }

  /**
   * Page createMany
   */
  export type PageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pages.
     */
    data: PageCreateManyInput | PageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Page createManyAndReturn
   */
  export type PageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * The data used to create many Pages.
     */
    data: PageCreateManyInput | PageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Page update
   */
  export type PageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * The data needed to update a Page.
     */
    data: XOR<PageUpdateInput, PageUncheckedUpdateInput>
    /**
     * Choose, which Page to update.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page updateMany
   */
  export type PageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pages.
     */
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyInput>
    /**
     * Filter which Pages to update
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to update.
     */
    limit?: number
  }

  /**
   * Page updateManyAndReturn
   */
  export type PageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * The data used to update Pages.
     */
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyInput>
    /**
     * Filter which Pages to update
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Page upsert
   */
  export type PageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * The filter to search for the Page to update in case it exists.
     */
    where: PageWhereUniqueInput
    /**
     * In case the Page found by the `where` argument doesn't exist, create a new Page with this data.
     */
    create: XOR<PageCreateInput, PageUncheckedCreateInput>
    /**
     * In case the Page was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageUpdateInput, PageUncheckedUpdateInput>
  }

  /**
   * Page delete
   */
  export type PageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter which Page to delete.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page deleteMany
   */
  export type PageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pages to delete
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to delete.
     */
    limit?: number
  }

  /**
   * Page.audits
   */
  export type Page$auditsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditInclude<ExtArgs> | null
    where?: AuditWhereInput
    orderBy?: AuditOrderByWithRelationInput | AuditOrderByWithRelationInput[]
    cursor?: AuditWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditScalarFieldEnum | AuditScalarFieldEnum[]
  }

  /**
   * Page without action
   */
  export type PageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
  }


  /**
   * Model Audit
   */

  export type AggregateAudit = {
    _count: AuditCountAggregateOutputType | null
    _avg: AuditAvgAggregateOutputType | null
    _sum: AuditSumAggregateOutputType | null
    _min: AuditMinAggregateOutputType | null
    _max: AuditMaxAggregateOutputType | null
  }

  export type AuditAvgAggregateOutputType = {
    overallScore: number | null
    onPageScore: number | null
    technicalScore: number | null
    contentScore: number | null
    performanceScore: number | null
  }

  export type AuditSumAggregateOutputType = {
    overallScore: number | null
    onPageScore: number | null
    technicalScore: number | null
    contentScore: number | null
    performanceScore: number | null
  }

  export type AuditMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    pageId: string | null
    source: $Enums.AuditSource | null
    url: string | null
    title: string | null
    overallScore: number | null
    onPageScore: number | null
    technicalScore: number | null
    contentScore: number | null
    performanceScore: number | null
    createdAt: Date | null
  }

  export type AuditMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    pageId: string | null
    source: $Enums.AuditSource | null
    url: string | null
    title: string | null
    overallScore: number | null
    onPageScore: number | null
    technicalScore: number | null
    contentScore: number | null
    performanceScore: number | null
    createdAt: Date | null
  }

  export type AuditCountAggregateOutputType = {
    id: number
    projectId: number
    pageId: number
    source: number
    url: number
    title: number
    overallScore: number
    onPageScore: number
    technicalScore: number
    contentScore: number
    performanceScore: number
    createdAt: number
    _all: number
  }


  export type AuditAvgAggregateInputType = {
    overallScore?: true
    onPageScore?: true
    technicalScore?: true
    contentScore?: true
    performanceScore?: true
  }

  export type AuditSumAggregateInputType = {
    overallScore?: true
    onPageScore?: true
    technicalScore?: true
    contentScore?: true
    performanceScore?: true
  }

  export type AuditMinAggregateInputType = {
    id?: true
    projectId?: true
    pageId?: true
    source?: true
    url?: true
    title?: true
    overallScore?: true
    onPageScore?: true
    technicalScore?: true
    contentScore?: true
    performanceScore?: true
    createdAt?: true
  }

  export type AuditMaxAggregateInputType = {
    id?: true
    projectId?: true
    pageId?: true
    source?: true
    url?: true
    title?: true
    overallScore?: true
    onPageScore?: true
    technicalScore?: true
    contentScore?: true
    performanceScore?: true
    createdAt?: true
  }

  export type AuditCountAggregateInputType = {
    id?: true
    projectId?: true
    pageId?: true
    source?: true
    url?: true
    title?: true
    overallScore?: true
    onPageScore?: true
    technicalScore?: true
    contentScore?: true
    performanceScore?: true
    createdAt?: true
    _all?: true
  }

  export type AuditAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Audit to aggregate.
     */
    where?: AuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audits to fetch.
     */
    orderBy?: AuditOrderByWithRelationInput | AuditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Audits
    **/
    _count?: true | AuditCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditMaxAggregateInputType
  }

  export type GetAuditAggregateType<T extends AuditAggregateArgs> = {
        [P in keyof T & keyof AggregateAudit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudit[P]>
      : GetScalarType<T[P], AggregateAudit[P]>
  }




  export type AuditGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditWhereInput
    orderBy?: AuditOrderByWithAggregationInput | AuditOrderByWithAggregationInput[]
    by: AuditScalarFieldEnum[] | AuditScalarFieldEnum
    having?: AuditScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditCountAggregateInputType | true
    _avg?: AuditAvgAggregateInputType
    _sum?: AuditSumAggregateInputType
    _min?: AuditMinAggregateInputType
    _max?: AuditMaxAggregateInputType
  }

  export type AuditGroupByOutputType = {
    id: string
    projectId: string
    pageId: string | null
    source: $Enums.AuditSource
    url: string
    title: string | null
    overallScore: number
    onPageScore: number
    technicalScore: number
    contentScore: number
    performanceScore: number
    createdAt: Date
    _count: AuditCountAggregateOutputType | null
    _avg: AuditAvgAggregateOutputType | null
    _sum: AuditSumAggregateOutputType | null
    _min: AuditMinAggregateOutputType | null
    _max: AuditMaxAggregateOutputType | null
  }

  type GetAuditGroupByPayload<T extends AuditGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditGroupByOutputType[P]>
            : GetScalarType<T[P], AuditGroupByOutputType[P]>
        }
      >
    >


  export type AuditSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    pageId?: boolean
    source?: boolean
    url?: boolean
    title?: boolean
    overallScore?: boolean
    onPageScore?: boolean
    technicalScore?: boolean
    contentScore?: boolean
    performanceScore?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    page?: boolean | Audit$pageArgs<ExtArgs>
    metrics?: boolean | Audit$metricsArgs<ExtArgs>
    issues?: boolean | Audit$issuesArgs<ExtArgs>
    snapshot?: boolean | Audit$snapshotArgs<ExtArgs>
    _count?: boolean | AuditCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audit"]>

  export type AuditSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    pageId?: boolean
    source?: boolean
    url?: boolean
    title?: boolean
    overallScore?: boolean
    onPageScore?: boolean
    technicalScore?: boolean
    contentScore?: boolean
    performanceScore?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    page?: boolean | Audit$pageArgs<ExtArgs>
  }, ExtArgs["result"]["audit"]>

  export type AuditSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    pageId?: boolean
    source?: boolean
    url?: boolean
    title?: boolean
    overallScore?: boolean
    onPageScore?: boolean
    technicalScore?: boolean
    contentScore?: boolean
    performanceScore?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    page?: boolean | Audit$pageArgs<ExtArgs>
  }, ExtArgs["result"]["audit"]>

  export type AuditSelectScalar = {
    id?: boolean
    projectId?: boolean
    pageId?: boolean
    source?: boolean
    url?: boolean
    title?: boolean
    overallScore?: boolean
    onPageScore?: boolean
    technicalScore?: boolean
    contentScore?: boolean
    performanceScore?: boolean
    createdAt?: boolean
  }

  export type AuditOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "pageId" | "source" | "url" | "title" | "overallScore" | "onPageScore" | "technicalScore" | "contentScore" | "performanceScore" | "createdAt", ExtArgs["result"]["audit"]>
  export type AuditInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    page?: boolean | Audit$pageArgs<ExtArgs>
    metrics?: boolean | Audit$metricsArgs<ExtArgs>
    issues?: boolean | Audit$issuesArgs<ExtArgs>
    snapshot?: boolean | Audit$snapshotArgs<ExtArgs>
    _count?: boolean | AuditCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AuditIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    page?: boolean | Audit$pageArgs<ExtArgs>
  }
  export type AuditIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    page?: boolean | Audit$pageArgs<ExtArgs>
  }

  export type $AuditPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Audit"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      page: Prisma.$PagePayload<ExtArgs> | null
      metrics: Prisma.$AuditMetricsPayload<ExtArgs> | null
      issues: Prisma.$IssuePayload<ExtArgs>[]
      snapshot: Prisma.$AuditSnapshotPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      pageId: string | null
      source: $Enums.AuditSource
      url: string
      title: string | null
      overallScore: number
      onPageScore: number
      technicalScore: number
      contentScore: number
      performanceScore: number
      createdAt: Date
    }, ExtArgs["result"]["audit"]>
    composites: {}
  }

  type AuditGetPayload<S extends boolean | null | undefined | AuditDefaultArgs> = $Result.GetResult<Prisma.$AuditPayload, S>

  type AuditCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditCountAggregateInputType | true
    }

  export interface AuditDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Audit'], meta: { name: 'Audit' } }
    /**
     * Find zero or one Audit that matches the filter.
     * @param {AuditFindUniqueArgs} args - Arguments to find a Audit
     * @example
     * // Get one Audit
     * const audit = await prisma.audit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditFindUniqueArgs>(args: SelectSubset<T, AuditFindUniqueArgs<ExtArgs>>): Prisma__AuditClient<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Audit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditFindUniqueOrThrowArgs} args - Arguments to find a Audit
     * @example
     * // Get one Audit
     * const audit = await prisma.audit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditClient<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditFindFirstArgs} args - Arguments to find a Audit
     * @example
     * // Get one Audit
     * const audit = await prisma.audit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditFindFirstArgs>(args?: SelectSubset<T, AuditFindFirstArgs<ExtArgs>>): Prisma__AuditClient<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditFindFirstOrThrowArgs} args - Arguments to find a Audit
     * @example
     * // Get one Audit
     * const audit = await prisma.audit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditClient<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Audits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Audits
     * const audits = await prisma.audit.findMany()
     * 
     * // Get first 10 Audits
     * const audits = await prisma.audit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditWithIdOnly = await prisma.audit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditFindManyArgs>(args?: SelectSubset<T, AuditFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Audit.
     * @param {AuditCreateArgs} args - Arguments to create a Audit.
     * @example
     * // Create one Audit
     * const Audit = await prisma.audit.create({
     *   data: {
     *     // ... data to create a Audit
     *   }
     * })
     * 
     */
    create<T extends AuditCreateArgs>(args: SelectSubset<T, AuditCreateArgs<ExtArgs>>): Prisma__AuditClient<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Audits.
     * @param {AuditCreateManyArgs} args - Arguments to create many Audits.
     * @example
     * // Create many Audits
     * const audit = await prisma.audit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditCreateManyArgs>(args?: SelectSubset<T, AuditCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Audits and returns the data saved in the database.
     * @param {AuditCreateManyAndReturnArgs} args - Arguments to create many Audits.
     * @example
     * // Create many Audits
     * const audit = await prisma.audit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Audits and only return the `id`
     * const auditWithIdOnly = await prisma.audit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Audit.
     * @param {AuditDeleteArgs} args - Arguments to delete one Audit.
     * @example
     * // Delete one Audit
     * const Audit = await prisma.audit.delete({
     *   where: {
     *     // ... filter to delete one Audit
     *   }
     * })
     * 
     */
    delete<T extends AuditDeleteArgs>(args: SelectSubset<T, AuditDeleteArgs<ExtArgs>>): Prisma__AuditClient<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Audit.
     * @param {AuditUpdateArgs} args - Arguments to update one Audit.
     * @example
     * // Update one Audit
     * const audit = await prisma.audit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditUpdateArgs>(args: SelectSubset<T, AuditUpdateArgs<ExtArgs>>): Prisma__AuditClient<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Audits.
     * @param {AuditDeleteManyArgs} args - Arguments to filter Audits to delete.
     * @example
     * // Delete a few Audits
     * const { count } = await prisma.audit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditDeleteManyArgs>(args?: SelectSubset<T, AuditDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Audits
     * const audit = await prisma.audit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditUpdateManyArgs>(args: SelectSubset<T, AuditUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audits and returns the data updated in the database.
     * @param {AuditUpdateManyAndReturnArgs} args - Arguments to update many Audits.
     * @example
     * // Update many Audits
     * const audit = await prisma.audit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Audits and only return the `id`
     * const auditWithIdOnly = await prisma.audit.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuditUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Audit.
     * @param {AuditUpsertArgs} args - Arguments to update or create a Audit.
     * @example
     * // Update or create a Audit
     * const audit = await prisma.audit.upsert({
     *   create: {
     *     // ... data to create a Audit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Audit we want to update
     *   }
     * })
     */
    upsert<T extends AuditUpsertArgs>(args: SelectSubset<T, AuditUpsertArgs<ExtArgs>>): Prisma__AuditClient<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Audits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditCountArgs} args - Arguments to filter Audits to count.
     * @example
     * // Count the number of Audits
     * const count = await prisma.audit.count({
     *   where: {
     *     // ... the filter for the Audits we want to count
     *   }
     * })
    **/
    count<T extends AuditCountArgs>(
      args?: Subset<T, AuditCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Audit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditAggregateArgs>(args: Subset<T, AuditAggregateArgs>): Prisma.PrismaPromise<GetAuditAggregateType<T>>

    /**
     * Group by Audit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditGroupByArgs} args - Group by arguments.
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
      T extends AuditGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditGroupByArgs['orderBy'] }
        : { orderBy?: AuditGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Audit model
   */
  readonly fields: AuditFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Audit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    page<T extends Audit$pageArgs<ExtArgs> = {}>(args?: Subset<T, Audit$pageArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    metrics<T extends Audit$metricsArgs<ExtArgs> = {}>(args?: Subset<T, Audit$metricsArgs<ExtArgs>>): Prisma__AuditMetricsClient<$Result.GetResult<Prisma.$AuditMetricsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    issues<T extends Audit$issuesArgs<ExtArgs> = {}>(args?: Subset<T, Audit$issuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    snapshot<T extends Audit$snapshotArgs<ExtArgs> = {}>(args?: Subset<T, Audit$snapshotArgs<ExtArgs>>): Prisma__AuditSnapshotClient<$Result.GetResult<Prisma.$AuditSnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Audit model
   */
  interface AuditFieldRefs {
    readonly id: FieldRef<"Audit", 'String'>
    readonly projectId: FieldRef<"Audit", 'String'>
    readonly pageId: FieldRef<"Audit", 'String'>
    readonly source: FieldRef<"Audit", 'AuditSource'>
    readonly url: FieldRef<"Audit", 'String'>
    readonly title: FieldRef<"Audit", 'String'>
    readonly overallScore: FieldRef<"Audit", 'Int'>
    readonly onPageScore: FieldRef<"Audit", 'Int'>
    readonly technicalScore: FieldRef<"Audit", 'Int'>
    readonly contentScore: FieldRef<"Audit", 'Int'>
    readonly performanceScore: FieldRef<"Audit", 'Int'>
    readonly createdAt: FieldRef<"Audit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Audit findUnique
   */
  export type AuditFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditInclude<ExtArgs> | null
    /**
     * Filter, which Audit to fetch.
     */
    where: AuditWhereUniqueInput
  }

  /**
   * Audit findUniqueOrThrow
   */
  export type AuditFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditInclude<ExtArgs> | null
    /**
     * Filter, which Audit to fetch.
     */
    where: AuditWhereUniqueInput
  }

  /**
   * Audit findFirst
   */
  export type AuditFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditInclude<ExtArgs> | null
    /**
     * Filter, which Audit to fetch.
     */
    where?: AuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audits to fetch.
     */
    orderBy?: AuditOrderByWithRelationInput | AuditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Audits.
     */
    cursor?: AuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Audits.
     */
    distinct?: AuditScalarFieldEnum | AuditScalarFieldEnum[]
  }

  /**
   * Audit findFirstOrThrow
   */
  export type AuditFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditInclude<ExtArgs> | null
    /**
     * Filter, which Audit to fetch.
     */
    where?: AuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audits to fetch.
     */
    orderBy?: AuditOrderByWithRelationInput | AuditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Audits.
     */
    cursor?: AuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Audits.
     */
    distinct?: AuditScalarFieldEnum | AuditScalarFieldEnum[]
  }

  /**
   * Audit findMany
   */
  export type AuditFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditInclude<ExtArgs> | null
    /**
     * Filter, which Audits to fetch.
     */
    where?: AuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audits to fetch.
     */
    orderBy?: AuditOrderByWithRelationInput | AuditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Audits.
     */
    cursor?: AuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audits.
     */
    skip?: number
    distinct?: AuditScalarFieldEnum | AuditScalarFieldEnum[]
  }

  /**
   * Audit create
   */
  export type AuditCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditInclude<ExtArgs> | null
    /**
     * The data needed to create a Audit.
     */
    data: XOR<AuditCreateInput, AuditUncheckedCreateInput>
  }

  /**
   * Audit createMany
   */
  export type AuditCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Audits.
     */
    data: AuditCreateManyInput | AuditCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Audit createManyAndReturn
   */
  export type AuditCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * The data used to create many Audits.
     */
    data: AuditCreateManyInput | AuditCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Audit update
   */
  export type AuditUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditInclude<ExtArgs> | null
    /**
     * The data needed to update a Audit.
     */
    data: XOR<AuditUpdateInput, AuditUncheckedUpdateInput>
    /**
     * Choose, which Audit to update.
     */
    where: AuditWhereUniqueInput
  }

  /**
   * Audit updateMany
   */
  export type AuditUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Audits.
     */
    data: XOR<AuditUpdateManyMutationInput, AuditUncheckedUpdateManyInput>
    /**
     * Filter which Audits to update
     */
    where?: AuditWhereInput
    /**
     * Limit how many Audits to update.
     */
    limit?: number
  }

  /**
   * Audit updateManyAndReturn
   */
  export type AuditUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * The data used to update Audits.
     */
    data: XOR<AuditUpdateManyMutationInput, AuditUncheckedUpdateManyInput>
    /**
     * Filter which Audits to update
     */
    where?: AuditWhereInput
    /**
     * Limit how many Audits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Audit upsert
   */
  export type AuditUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditInclude<ExtArgs> | null
    /**
     * The filter to search for the Audit to update in case it exists.
     */
    where: AuditWhereUniqueInput
    /**
     * In case the Audit found by the `where` argument doesn't exist, create a new Audit with this data.
     */
    create: XOR<AuditCreateInput, AuditUncheckedCreateInput>
    /**
     * In case the Audit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditUpdateInput, AuditUncheckedUpdateInput>
  }

  /**
   * Audit delete
   */
  export type AuditDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditInclude<ExtArgs> | null
    /**
     * Filter which Audit to delete.
     */
    where: AuditWhereUniqueInput
  }

  /**
   * Audit deleteMany
   */
  export type AuditDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Audits to delete
     */
    where?: AuditWhereInput
    /**
     * Limit how many Audits to delete.
     */
    limit?: number
  }

  /**
   * Audit.page
   */
  export type Audit$pageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    where?: PageWhereInput
  }

  /**
   * Audit.metrics
   */
  export type Audit$metricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditMetrics
     */
    select?: AuditMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditMetrics
     */
    omit?: AuditMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditMetricsInclude<ExtArgs> | null
    where?: AuditMetricsWhereInput
  }

  /**
   * Audit.issues
   */
  export type Audit$issuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    where?: IssueWhereInput
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    cursor?: IssueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }

  /**
   * Audit.snapshot
   */
  export type Audit$snapshotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSnapshot
     */
    select?: AuditSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSnapshot
     */
    omit?: AuditSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSnapshotInclude<ExtArgs> | null
    where?: AuditSnapshotWhereInput
  }

  /**
   * Audit without action
   */
  export type AuditDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit
     */
    select?: AuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit
     */
    omit?: AuditOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditInclude<ExtArgs> | null
  }


  /**
   * Model AuditMetrics
   */

  export type AggregateAuditMetrics = {
    _count: AuditMetricsCountAggregateOutputType | null
    _avg: AuditMetricsAvgAggregateOutputType | null
    _sum: AuditMetricsSumAggregateOutputType | null
    _min: AuditMetricsMinAggregateOutputType | null
    _max: AuditMetricsMaxAggregateOutputType | null
  }

  export type AuditMetricsAvgAggregateOutputType = {
    titleLength: number | null
    metaDescriptionLength: number | null
    h1Count: number | null
    h2Count: number | null
    h3Count: number | null
    imagesTotal: number | null
    imagesWithoutAlt: number | null
    internalLinks: number | null
    externalLinks: number | null
    wordCount: number | null
    lcpEstimateMs: number | null
    domNodeCount: number | null
    jsRequestCount: number | null
    cssRequestCount: number | null
  }

  export type AuditMetricsSumAggregateOutputType = {
    titleLength: number | null
    metaDescriptionLength: number | null
    h1Count: number | null
    h2Count: number | null
    h3Count: number | null
    imagesTotal: number | null
    imagesWithoutAlt: number | null
    internalLinks: number | null
    externalLinks: number | null
    wordCount: number | null
    lcpEstimateMs: number | null
    domNodeCount: number | null
    jsRequestCount: number | null
    cssRequestCount: number | null
  }

  export type AuditMetricsMinAggregateOutputType = {
    id: string | null
    auditId: string | null
    metaDescription: string | null
    titleLength: number | null
    metaDescriptionLength: number | null
    h1Count: number | null
    h2Count: number | null
    h3Count: number | null
    imagesTotal: number | null
    imagesWithoutAlt: number | null
    internalLinks: number | null
    externalLinks: number | null
    wordCount: number | null
    hasCanonical: boolean | null
    canonicalUrl: string | null
    hasMetaRobots: boolean | null
    metaRobotsContent: string | null
    hasViewport: boolean | null
    hasSchema: boolean | null
    openGraphPresent: boolean | null
    ogImage: string | null
    twitterCardPresent: boolean | null
    lcpEstimateMs: number | null
    domNodeCount: number | null
    jsRequestCount: number | null
    cssRequestCount: number | null
  }

  export type AuditMetricsMaxAggregateOutputType = {
    id: string | null
    auditId: string | null
    metaDescription: string | null
    titleLength: number | null
    metaDescriptionLength: number | null
    h1Count: number | null
    h2Count: number | null
    h3Count: number | null
    imagesTotal: number | null
    imagesWithoutAlt: number | null
    internalLinks: number | null
    externalLinks: number | null
    wordCount: number | null
    hasCanonical: boolean | null
    canonicalUrl: string | null
    hasMetaRobots: boolean | null
    metaRobotsContent: string | null
    hasViewport: boolean | null
    hasSchema: boolean | null
    openGraphPresent: boolean | null
    ogImage: string | null
    twitterCardPresent: boolean | null
    lcpEstimateMs: number | null
    domNodeCount: number | null
    jsRequestCount: number | null
    cssRequestCount: number | null
  }

  export type AuditMetricsCountAggregateOutputType = {
    id: number
    auditId: number
    metaDescription: number
    titleLength: number
    metaDescriptionLength: number
    h1Count: number
    h2Count: number
    h3Count: number
    imagesTotal: number
    imagesWithoutAlt: number
    internalLinks: number
    externalLinks: number
    wordCount: number
    hasCanonical: number
    canonicalUrl: number
    hasMetaRobots: number
    metaRobotsContent: number
    hasViewport: number
    hasSchema: number
    schemaTypes: number
    openGraphPresent: number
    ogImage: number
    twitterCardPresent: number
    lcpEstimateMs: number
    domNodeCount: number
    jsRequestCount: number
    cssRequestCount: number
    _all: number
  }


  export type AuditMetricsAvgAggregateInputType = {
    titleLength?: true
    metaDescriptionLength?: true
    h1Count?: true
    h2Count?: true
    h3Count?: true
    imagesTotal?: true
    imagesWithoutAlt?: true
    internalLinks?: true
    externalLinks?: true
    wordCount?: true
    lcpEstimateMs?: true
    domNodeCount?: true
    jsRequestCount?: true
    cssRequestCount?: true
  }

  export type AuditMetricsSumAggregateInputType = {
    titleLength?: true
    metaDescriptionLength?: true
    h1Count?: true
    h2Count?: true
    h3Count?: true
    imagesTotal?: true
    imagesWithoutAlt?: true
    internalLinks?: true
    externalLinks?: true
    wordCount?: true
    lcpEstimateMs?: true
    domNodeCount?: true
    jsRequestCount?: true
    cssRequestCount?: true
  }

  export type AuditMetricsMinAggregateInputType = {
    id?: true
    auditId?: true
    metaDescription?: true
    titleLength?: true
    metaDescriptionLength?: true
    h1Count?: true
    h2Count?: true
    h3Count?: true
    imagesTotal?: true
    imagesWithoutAlt?: true
    internalLinks?: true
    externalLinks?: true
    wordCount?: true
    hasCanonical?: true
    canonicalUrl?: true
    hasMetaRobots?: true
    metaRobotsContent?: true
    hasViewport?: true
    hasSchema?: true
    openGraphPresent?: true
    ogImage?: true
    twitterCardPresent?: true
    lcpEstimateMs?: true
    domNodeCount?: true
    jsRequestCount?: true
    cssRequestCount?: true
  }

  export type AuditMetricsMaxAggregateInputType = {
    id?: true
    auditId?: true
    metaDescription?: true
    titleLength?: true
    metaDescriptionLength?: true
    h1Count?: true
    h2Count?: true
    h3Count?: true
    imagesTotal?: true
    imagesWithoutAlt?: true
    internalLinks?: true
    externalLinks?: true
    wordCount?: true
    hasCanonical?: true
    canonicalUrl?: true
    hasMetaRobots?: true
    metaRobotsContent?: true
    hasViewport?: true
    hasSchema?: true
    openGraphPresent?: true
    ogImage?: true
    twitterCardPresent?: true
    lcpEstimateMs?: true
    domNodeCount?: true
    jsRequestCount?: true
    cssRequestCount?: true
  }

  export type AuditMetricsCountAggregateInputType = {
    id?: true
    auditId?: true
    metaDescription?: true
    titleLength?: true
    metaDescriptionLength?: true
    h1Count?: true
    h2Count?: true
    h3Count?: true
    imagesTotal?: true
    imagesWithoutAlt?: true
    internalLinks?: true
    externalLinks?: true
    wordCount?: true
    hasCanonical?: true
    canonicalUrl?: true
    hasMetaRobots?: true
    metaRobotsContent?: true
    hasViewport?: true
    hasSchema?: true
    schemaTypes?: true
    openGraphPresent?: true
    ogImage?: true
    twitterCardPresent?: true
    lcpEstimateMs?: true
    domNodeCount?: true
    jsRequestCount?: true
    cssRequestCount?: true
    _all?: true
  }

  export type AuditMetricsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditMetrics to aggregate.
     */
    where?: AuditMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditMetrics to fetch.
     */
    orderBy?: AuditMetricsOrderByWithRelationInput | AuditMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditMetrics
    **/
    _count?: true | AuditMetricsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditMetricsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditMetricsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditMetricsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditMetricsMaxAggregateInputType
  }

  export type GetAuditMetricsAggregateType<T extends AuditMetricsAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditMetrics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditMetrics[P]>
      : GetScalarType<T[P], AggregateAuditMetrics[P]>
  }




  export type AuditMetricsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditMetricsWhereInput
    orderBy?: AuditMetricsOrderByWithAggregationInput | AuditMetricsOrderByWithAggregationInput[]
    by: AuditMetricsScalarFieldEnum[] | AuditMetricsScalarFieldEnum
    having?: AuditMetricsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditMetricsCountAggregateInputType | true
    _avg?: AuditMetricsAvgAggregateInputType
    _sum?: AuditMetricsSumAggregateInputType
    _min?: AuditMetricsMinAggregateInputType
    _max?: AuditMetricsMaxAggregateInputType
  }

  export type AuditMetricsGroupByOutputType = {
    id: string
    auditId: string
    metaDescription: string | null
    titleLength: number | null
    metaDescriptionLength: number | null
    h1Count: number | null
    h2Count: number | null
    h3Count: number | null
    imagesTotal: number | null
    imagesWithoutAlt: number | null
    internalLinks: number | null
    externalLinks: number | null
    wordCount: number | null
    hasCanonical: boolean | null
    canonicalUrl: string | null
    hasMetaRobots: boolean | null
    metaRobotsContent: string | null
    hasViewport: boolean | null
    hasSchema: boolean | null
    schemaTypes: JsonValue | null
    openGraphPresent: boolean | null
    ogImage: string | null
    twitterCardPresent: boolean | null
    lcpEstimateMs: number | null
    domNodeCount: number | null
    jsRequestCount: number | null
    cssRequestCount: number | null
    _count: AuditMetricsCountAggregateOutputType | null
    _avg: AuditMetricsAvgAggregateOutputType | null
    _sum: AuditMetricsSumAggregateOutputType | null
    _min: AuditMetricsMinAggregateOutputType | null
    _max: AuditMetricsMaxAggregateOutputType | null
  }

  type GetAuditMetricsGroupByPayload<T extends AuditMetricsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditMetricsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditMetricsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditMetricsGroupByOutputType[P]>
            : GetScalarType<T[P], AuditMetricsGroupByOutputType[P]>
        }
      >
    >


  export type AuditMetricsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auditId?: boolean
    metaDescription?: boolean
    titleLength?: boolean
    metaDescriptionLength?: boolean
    h1Count?: boolean
    h2Count?: boolean
    h3Count?: boolean
    imagesTotal?: boolean
    imagesWithoutAlt?: boolean
    internalLinks?: boolean
    externalLinks?: boolean
    wordCount?: boolean
    hasCanonical?: boolean
    canonicalUrl?: boolean
    hasMetaRobots?: boolean
    metaRobotsContent?: boolean
    hasViewport?: boolean
    hasSchema?: boolean
    schemaTypes?: boolean
    openGraphPresent?: boolean
    ogImage?: boolean
    twitterCardPresent?: boolean
    lcpEstimateMs?: boolean
    domNodeCount?: boolean
    jsRequestCount?: boolean
    cssRequestCount?: boolean
    audit?: boolean | AuditDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditMetrics"]>

  export type AuditMetricsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auditId?: boolean
    metaDescription?: boolean
    titleLength?: boolean
    metaDescriptionLength?: boolean
    h1Count?: boolean
    h2Count?: boolean
    h3Count?: boolean
    imagesTotal?: boolean
    imagesWithoutAlt?: boolean
    internalLinks?: boolean
    externalLinks?: boolean
    wordCount?: boolean
    hasCanonical?: boolean
    canonicalUrl?: boolean
    hasMetaRobots?: boolean
    metaRobotsContent?: boolean
    hasViewport?: boolean
    hasSchema?: boolean
    schemaTypes?: boolean
    openGraphPresent?: boolean
    ogImage?: boolean
    twitterCardPresent?: boolean
    lcpEstimateMs?: boolean
    domNodeCount?: boolean
    jsRequestCount?: boolean
    cssRequestCount?: boolean
    audit?: boolean | AuditDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditMetrics"]>

  export type AuditMetricsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auditId?: boolean
    metaDescription?: boolean
    titleLength?: boolean
    metaDescriptionLength?: boolean
    h1Count?: boolean
    h2Count?: boolean
    h3Count?: boolean
    imagesTotal?: boolean
    imagesWithoutAlt?: boolean
    internalLinks?: boolean
    externalLinks?: boolean
    wordCount?: boolean
    hasCanonical?: boolean
    canonicalUrl?: boolean
    hasMetaRobots?: boolean
    metaRobotsContent?: boolean
    hasViewport?: boolean
    hasSchema?: boolean
    schemaTypes?: boolean
    openGraphPresent?: boolean
    ogImage?: boolean
    twitterCardPresent?: boolean
    lcpEstimateMs?: boolean
    domNodeCount?: boolean
    jsRequestCount?: boolean
    cssRequestCount?: boolean
    audit?: boolean | AuditDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditMetrics"]>

  export type AuditMetricsSelectScalar = {
    id?: boolean
    auditId?: boolean
    metaDescription?: boolean
    titleLength?: boolean
    metaDescriptionLength?: boolean
    h1Count?: boolean
    h2Count?: boolean
    h3Count?: boolean
    imagesTotal?: boolean
    imagesWithoutAlt?: boolean
    internalLinks?: boolean
    externalLinks?: boolean
    wordCount?: boolean
    hasCanonical?: boolean
    canonicalUrl?: boolean
    hasMetaRobots?: boolean
    metaRobotsContent?: boolean
    hasViewport?: boolean
    hasSchema?: boolean
    schemaTypes?: boolean
    openGraphPresent?: boolean
    ogImage?: boolean
    twitterCardPresent?: boolean
    lcpEstimateMs?: boolean
    domNodeCount?: boolean
    jsRequestCount?: boolean
    cssRequestCount?: boolean
  }

  export type AuditMetricsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "auditId" | "metaDescription" | "titleLength" | "metaDescriptionLength" | "h1Count" | "h2Count" | "h3Count" | "imagesTotal" | "imagesWithoutAlt" | "internalLinks" | "externalLinks" | "wordCount" | "hasCanonical" | "canonicalUrl" | "hasMetaRobots" | "metaRobotsContent" | "hasViewport" | "hasSchema" | "schemaTypes" | "openGraphPresent" | "ogImage" | "twitterCardPresent" | "lcpEstimateMs" | "domNodeCount" | "jsRequestCount" | "cssRequestCount", ExtArgs["result"]["auditMetrics"]>
  export type AuditMetricsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit?: boolean | AuditDefaultArgs<ExtArgs>
  }
  export type AuditMetricsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit?: boolean | AuditDefaultArgs<ExtArgs>
  }
  export type AuditMetricsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit?: boolean | AuditDefaultArgs<ExtArgs>
  }

  export type $AuditMetricsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditMetrics"
    objects: {
      audit: Prisma.$AuditPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      auditId: string
      metaDescription: string | null
      titleLength: number | null
      metaDescriptionLength: number | null
      h1Count: number | null
      h2Count: number | null
      h3Count: number | null
      imagesTotal: number | null
      imagesWithoutAlt: number | null
      internalLinks: number | null
      externalLinks: number | null
      wordCount: number | null
      hasCanonical: boolean | null
      canonicalUrl: string | null
      hasMetaRobots: boolean | null
      metaRobotsContent: string | null
      hasViewport: boolean | null
      hasSchema: boolean | null
      schemaTypes: Prisma.JsonValue | null
      openGraphPresent: boolean | null
      ogImage: string | null
      twitterCardPresent: boolean | null
      lcpEstimateMs: number | null
      domNodeCount: number | null
      jsRequestCount: number | null
      cssRequestCount: number | null
    }, ExtArgs["result"]["auditMetrics"]>
    composites: {}
  }

  type AuditMetricsGetPayload<S extends boolean | null | undefined | AuditMetricsDefaultArgs> = $Result.GetResult<Prisma.$AuditMetricsPayload, S>

  type AuditMetricsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditMetricsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditMetricsCountAggregateInputType | true
    }

  export interface AuditMetricsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditMetrics'], meta: { name: 'AuditMetrics' } }
    /**
     * Find zero or one AuditMetrics that matches the filter.
     * @param {AuditMetricsFindUniqueArgs} args - Arguments to find a AuditMetrics
     * @example
     * // Get one AuditMetrics
     * const auditMetrics = await prisma.auditMetrics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditMetricsFindUniqueArgs>(args: SelectSubset<T, AuditMetricsFindUniqueArgs<ExtArgs>>): Prisma__AuditMetricsClient<$Result.GetResult<Prisma.$AuditMetricsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditMetrics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditMetricsFindUniqueOrThrowArgs} args - Arguments to find a AuditMetrics
     * @example
     * // Get one AuditMetrics
     * const auditMetrics = await prisma.auditMetrics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditMetricsFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditMetricsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditMetricsClient<$Result.GetResult<Prisma.$AuditMetricsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditMetricsFindFirstArgs} args - Arguments to find a AuditMetrics
     * @example
     * // Get one AuditMetrics
     * const auditMetrics = await prisma.auditMetrics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditMetricsFindFirstArgs>(args?: SelectSubset<T, AuditMetricsFindFirstArgs<ExtArgs>>): Prisma__AuditMetricsClient<$Result.GetResult<Prisma.$AuditMetricsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditMetrics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditMetricsFindFirstOrThrowArgs} args - Arguments to find a AuditMetrics
     * @example
     * // Get one AuditMetrics
     * const auditMetrics = await prisma.auditMetrics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditMetricsFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditMetricsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditMetricsClient<$Result.GetResult<Prisma.$AuditMetricsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditMetricsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditMetrics
     * const auditMetrics = await prisma.auditMetrics.findMany()
     * 
     * // Get first 10 AuditMetrics
     * const auditMetrics = await prisma.auditMetrics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditMetricsWithIdOnly = await prisma.auditMetrics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditMetricsFindManyArgs>(args?: SelectSubset<T, AuditMetricsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditMetricsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditMetrics.
     * @param {AuditMetricsCreateArgs} args - Arguments to create a AuditMetrics.
     * @example
     * // Create one AuditMetrics
     * const AuditMetrics = await prisma.auditMetrics.create({
     *   data: {
     *     // ... data to create a AuditMetrics
     *   }
     * })
     * 
     */
    create<T extends AuditMetricsCreateArgs>(args: SelectSubset<T, AuditMetricsCreateArgs<ExtArgs>>): Prisma__AuditMetricsClient<$Result.GetResult<Prisma.$AuditMetricsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditMetrics.
     * @param {AuditMetricsCreateManyArgs} args - Arguments to create many AuditMetrics.
     * @example
     * // Create many AuditMetrics
     * const auditMetrics = await prisma.auditMetrics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditMetricsCreateManyArgs>(args?: SelectSubset<T, AuditMetricsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditMetrics and returns the data saved in the database.
     * @param {AuditMetricsCreateManyAndReturnArgs} args - Arguments to create many AuditMetrics.
     * @example
     * // Create many AuditMetrics
     * const auditMetrics = await prisma.auditMetrics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditMetrics and only return the `id`
     * const auditMetricsWithIdOnly = await prisma.auditMetrics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditMetricsCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditMetricsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditMetricsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditMetrics.
     * @param {AuditMetricsDeleteArgs} args - Arguments to delete one AuditMetrics.
     * @example
     * // Delete one AuditMetrics
     * const AuditMetrics = await prisma.auditMetrics.delete({
     *   where: {
     *     // ... filter to delete one AuditMetrics
     *   }
     * })
     * 
     */
    delete<T extends AuditMetricsDeleteArgs>(args: SelectSubset<T, AuditMetricsDeleteArgs<ExtArgs>>): Prisma__AuditMetricsClient<$Result.GetResult<Prisma.$AuditMetricsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditMetrics.
     * @param {AuditMetricsUpdateArgs} args - Arguments to update one AuditMetrics.
     * @example
     * // Update one AuditMetrics
     * const auditMetrics = await prisma.auditMetrics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditMetricsUpdateArgs>(args: SelectSubset<T, AuditMetricsUpdateArgs<ExtArgs>>): Prisma__AuditMetricsClient<$Result.GetResult<Prisma.$AuditMetricsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditMetrics.
     * @param {AuditMetricsDeleteManyArgs} args - Arguments to filter AuditMetrics to delete.
     * @example
     * // Delete a few AuditMetrics
     * const { count } = await prisma.auditMetrics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditMetricsDeleteManyArgs>(args?: SelectSubset<T, AuditMetricsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditMetricsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditMetrics
     * const auditMetrics = await prisma.auditMetrics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditMetricsUpdateManyArgs>(args: SelectSubset<T, AuditMetricsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditMetrics and returns the data updated in the database.
     * @param {AuditMetricsUpdateManyAndReturnArgs} args - Arguments to update many AuditMetrics.
     * @example
     * // Update many AuditMetrics
     * const auditMetrics = await prisma.auditMetrics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditMetrics and only return the `id`
     * const auditMetricsWithIdOnly = await prisma.auditMetrics.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuditMetricsUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditMetricsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditMetricsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditMetrics.
     * @param {AuditMetricsUpsertArgs} args - Arguments to update or create a AuditMetrics.
     * @example
     * // Update or create a AuditMetrics
     * const auditMetrics = await prisma.auditMetrics.upsert({
     *   create: {
     *     // ... data to create a AuditMetrics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditMetrics we want to update
     *   }
     * })
     */
    upsert<T extends AuditMetricsUpsertArgs>(args: SelectSubset<T, AuditMetricsUpsertArgs<ExtArgs>>): Prisma__AuditMetricsClient<$Result.GetResult<Prisma.$AuditMetricsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditMetricsCountArgs} args - Arguments to filter AuditMetrics to count.
     * @example
     * // Count the number of AuditMetrics
     * const count = await prisma.auditMetrics.count({
     *   where: {
     *     // ... the filter for the AuditMetrics we want to count
     *   }
     * })
    **/
    count<T extends AuditMetricsCountArgs>(
      args?: Subset<T, AuditMetricsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditMetricsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditMetricsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditMetricsAggregateArgs>(args: Subset<T, AuditMetricsAggregateArgs>): Prisma.PrismaPromise<GetAuditMetricsAggregateType<T>>

    /**
     * Group by AuditMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditMetricsGroupByArgs} args - Group by arguments.
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
      T extends AuditMetricsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditMetricsGroupByArgs['orderBy'] }
        : { orderBy?: AuditMetricsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditMetricsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditMetricsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditMetrics model
   */
  readonly fields: AuditMetricsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditMetrics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditMetricsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    audit<T extends AuditDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuditDefaultArgs<ExtArgs>>): Prisma__AuditClient<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AuditMetrics model
   */
  interface AuditMetricsFieldRefs {
    readonly id: FieldRef<"AuditMetrics", 'String'>
    readonly auditId: FieldRef<"AuditMetrics", 'String'>
    readonly metaDescription: FieldRef<"AuditMetrics", 'String'>
    readonly titleLength: FieldRef<"AuditMetrics", 'Int'>
    readonly metaDescriptionLength: FieldRef<"AuditMetrics", 'Int'>
    readonly h1Count: FieldRef<"AuditMetrics", 'Int'>
    readonly h2Count: FieldRef<"AuditMetrics", 'Int'>
    readonly h3Count: FieldRef<"AuditMetrics", 'Int'>
    readonly imagesTotal: FieldRef<"AuditMetrics", 'Int'>
    readonly imagesWithoutAlt: FieldRef<"AuditMetrics", 'Int'>
    readonly internalLinks: FieldRef<"AuditMetrics", 'Int'>
    readonly externalLinks: FieldRef<"AuditMetrics", 'Int'>
    readonly wordCount: FieldRef<"AuditMetrics", 'Int'>
    readonly hasCanonical: FieldRef<"AuditMetrics", 'Boolean'>
    readonly canonicalUrl: FieldRef<"AuditMetrics", 'String'>
    readonly hasMetaRobots: FieldRef<"AuditMetrics", 'Boolean'>
    readonly metaRobotsContent: FieldRef<"AuditMetrics", 'String'>
    readonly hasViewport: FieldRef<"AuditMetrics", 'Boolean'>
    readonly hasSchema: FieldRef<"AuditMetrics", 'Boolean'>
    readonly schemaTypes: FieldRef<"AuditMetrics", 'Json'>
    readonly openGraphPresent: FieldRef<"AuditMetrics", 'Boolean'>
    readonly ogImage: FieldRef<"AuditMetrics", 'String'>
    readonly twitterCardPresent: FieldRef<"AuditMetrics", 'Boolean'>
    readonly lcpEstimateMs: FieldRef<"AuditMetrics", 'Int'>
    readonly domNodeCount: FieldRef<"AuditMetrics", 'Int'>
    readonly jsRequestCount: FieldRef<"AuditMetrics", 'Int'>
    readonly cssRequestCount: FieldRef<"AuditMetrics", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AuditMetrics findUnique
   */
  export type AuditMetricsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditMetrics
     */
    select?: AuditMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditMetrics
     */
    omit?: AuditMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditMetricsInclude<ExtArgs> | null
    /**
     * Filter, which AuditMetrics to fetch.
     */
    where: AuditMetricsWhereUniqueInput
  }

  /**
   * AuditMetrics findUniqueOrThrow
   */
  export type AuditMetricsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditMetrics
     */
    select?: AuditMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditMetrics
     */
    omit?: AuditMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditMetricsInclude<ExtArgs> | null
    /**
     * Filter, which AuditMetrics to fetch.
     */
    where: AuditMetricsWhereUniqueInput
  }

  /**
   * AuditMetrics findFirst
   */
  export type AuditMetricsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditMetrics
     */
    select?: AuditMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditMetrics
     */
    omit?: AuditMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditMetricsInclude<ExtArgs> | null
    /**
     * Filter, which AuditMetrics to fetch.
     */
    where?: AuditMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditMetrics to fetch.
     */
    orderBy?: AuditMetricsOrderByWithRelationInput | AuditMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditMetrics.
     */
    cursor?: AuditMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditMetrics.
     */
    distinct?: AuditMetricsScalarFieldEnum | AuditMetricsScalarFieldEnum[]
  }

  /**
   * AuditMetrics findFirstOrThrow
   */
  export type AuditMetricsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditMetrics
     */
    select?: AuditMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditMetrics
     */
    omit?: AuditMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditMetricsInclude<ExtArgs> | null
    /**
     * Filter, which AuditMetrics to fetch.
     */
    where?: AuditMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditMetrics to fetch.
     */
    orderBy?: AuditMetricsOrderByWithRelationInput | AuditMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditMetrics.
     */
    cursor?: AuditMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditMetrics.
     */
    distinct?: AuditMetricsScalarFieldEnum | AuditMetricsScalarFieldEnum[]
  }

  /**
   * AuditMetrics findMany
   */
  export type AuditMetricsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditMetrics
     */
    select?: AuditMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditMetrics
     */
    omit?: AuditMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditMetricsInclude<ExtArgs> | null
    /**
     * Filter, which AuditMetrics to fetch.
     */
    where?: AuditMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditMetrics to fetch.
     */
    orderBy?: AuditMetricsOrderByWithRelationInput | AuditMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditMetrics.
     */
    cursor?: AuditMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditMetrics.
     */
    skip?: number
    distinct?: AuditMetricsScalarFieldEnum | AuditMetricsScalarFieldEnum[]
  }

  /**
   * AuditMetrics create
   */
  export type AuditMetricsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditMetrics
     */
    select?: AuditMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditMetrics
     */
    omit?: AuditMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditMetricsInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditMetrics.
     */
    data: XOR<AuditMetricsCreateInput, AuditMetricsUncheckedCreateInput>
  }

  /**
   * AuditMetrics createMany
   */
  export type AuditMetricsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditMetrics.
     */
    data: AuditMetricsCreateManyInput | AuditMetricsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditMetrics createManyAndReturn
   */
  export type AuditMetricsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditMetrics
     */
    select?: AuditMetricsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditMetrics
     */
    omit?: AuditMetricsOmit<ExtArgs> | null
    /**
     * The data used to create many AuditMetrics.
     */
    data: AuditMetricsCreateManyInput | AuditMetricsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditMetricsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditMetrics update
   */
  export type AuditMetricsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditMetrics
     */
    select?: AuditMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditMetrics
     */
    omit?: AuditMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditMetricsInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditMetrics.
     */
    data: XOR<AuditMetricsUpdateInput, AuditMetricsUncheckedUpdateInput>
    /**
     * Choose, which AuditMetrics to update.
     */
    where: AuditMetricsWhereUniqueInput
  }

  /**
   * AuditMetrics updateMany
   */
  export type AuditMetricsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditMetrics.
     */
    data: XOR<AuditMetricsUpdateManyMutationInput, AuditMetricsUncheckedUpdateManyInput>
    /**
     * Filter which AuditMetrics to update
     */
    where?: AuditMetricsWhereInput
    /**
     * Limit how many AuditMetrics to update.
     */
    limit?: number
  }

  /**
   * AuditMetrics updateManyAndReturn
   */
  export type AuditMetricsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditMetrics
     */
    select?: AuditMetricsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditMetrics
     */
    omit?: AuditMetricsOmit<ExtArgs> | null
    /**
     * The data used to update AuditMetrics.
     */
    data: XOR<AuditMetricsUpdateManyMutationInput, AuditMetricsUncheckedUpdateManyInput>
    /**
     * Filter which AuditMetrics to update
     */
    where?: AuditMetricsWhereInput
    /**
     * Limit how many AuditMetrics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditMetricsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditMetrics upsert
   */
  export type AuditMetricsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditMetrics
     */
    select?: AuditMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditMetrics
     */
    omit?: AuditMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditMetricsInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditMetrics to update in case it exists.
     */
    where: AuditMetricsWhereUniqueInput
    /**
     * In case the AuditMetrics found by the `where` argument doesn't exist, create a new AuditMetrics with this data.
     */
    create: XOR<AuditMetricsCreateInput, AuditMetricsUncheckedCreateInput>
    /**
     * In case the AuditMetrics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditMetricsUpdateInput, AuditMetricsUncheckedUpdateInput>
  }

  /**
   * AuditMetrics delete
   */
  export type AuditMetricsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditMetrics
     */
    select?: AuditMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditMetrics
     */
    omit?: AuditMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditMetricsInclude<ExtArgs> | null
    /**
     * Filter which AuditMetrics to delete.
     */
    where: AuditMetricsWhereUniqueInput
  }

  /**
   * AuditMetrics deleteMany
   */
  export type AuditMetricsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditMetrics to delete
     */
    where?: AuditMetricsWhereInput
    /**
     * Limit how many AuditMetrics to delete.
     */
    limit?: number
  }

  /**
   * AuditMetrics without action
   */
  export type AuditMetricsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditMetrics
     */
    select?: AuditMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditMetrics
     */
    omit?: AuditMetricsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditMetricsInclude<ExtArgs> | null
  }


  /**
   * Model Issue
   */

  export type AggregateIssue = {
    _count: IssueCountAggregateOutputType | null
    _min: IssueMinAggregateOutputType | null
    _max: IssueMaxAggregateOutputType | null
  }

  export type IssueMinAggregateOutputType = {
    id: string | null
    auditId: string | null
    code: string | null
    category: string | null
    severity: $Enums.Severity | null
    status: $Enums.IssueStatus | null
    title: string | null
    message: string | null
    recommendation: string | null
    selector: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IssueMaxAggregateOutputType = {
    id: string | null
    auditId: string | null
    code: string | null
    category: string | null
    severity: $Enums.Severity | null
    status: $Enums.IssueStatus | null
    title: string | null
    message: string | null
    recommendation: string | null
    selector: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IssueCountAggregateOutputType = {
    id: number
    auditId: number
    code: number
    category: number
    severity: number
    status: number
    title: number
    message: number
    recommendation: number
    selector: number
    evidence: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IssueMinAggregateInputType = {
    id?: true
    auditId?: true
    code?: true
    category?: true
    severity?: true
    status?: true
    title?: true
    message?: true
    recommendation?: true
    selector?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IssueMaxAggregateInputType = {
    id?: true
    auditId?: true
    code?: true
    category?: true
    severity?: true
    status?: true
    title?: true
    message?: true
    recommendation?: true
    selector?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IssueCountAggregateInputType = {
    id?: true
    auditId?: true
    code?: true
    category?: true
    severity?: true
    status?: true
    title?: true
    message?: true
    recommendation?: true
    selector?: true
    evidence?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IssueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Issue to aggregate.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Issues
    **/
    _count?: true | IssueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IssueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IssueMaxAggregateInputType
  }

  export type GetIssueAggregateType<T extends IssueAggregateArgs> = {
        [P in keyof T & keyof AggregateIssue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIssue[P]>
      : GetScalarType<T[P], AggregateIssue[P]>
  }




  export type IssueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssueWhereInput
    orderBy?: IssueOrderByWithAggregationInput | IssueOrderByWithAggregationInput[]
    by: IssueScalarFieldEnum[] | IssueScalarFieldEnum
    having?: IssueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IssueCountAggregateInputType | true
    _min?: IssueMinAggregateInputType
    _max?: IssueMaxAggregateInputType
  }

  export type IssueGroupByOutputType = {
    id: string
    auditId: string
    code: string
    category: string
    severity: $Enums.Severity
    status: $Enums.IssueStatus
    title: string
    message: string
    recommendation: string
    selector: string | null
    evidence: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: IssueCountAggregateOutputType | null
    _min: IssueMinAggregateOutputType | null
    _max: IssueMaxAggregateOutputType | null
  }

  type GetIssueGroupByPayload<T extends IssueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IssueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IssueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IssueGroupByOutputType[P]>
            : GetScalarType<T[P], IssueGroupByOutputType[P]>
        }
      >
    >


  export type IssueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auditId?: boolean
    code?: boolean
    category?: boolean
    severity?: boolean
    status?: boolean
    title?: boolean
    message?: boolean
    recommendation?: boolean
    selector?: boolean
    evidence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    audit?: boolean | AuditDefaultArgs<ExtArgs>
    history?: boolean | Issue$historyArgs<ExtArgs>
    _count?: boolean | IssueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issue"]>

  export type IssueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auditId?: boolean
    code?: boolean
    category?: boolean
    severity?: boolean
    status?: boolean
    title?: boolean
    message?: boolean
    recommendation?: boolean
    selector?: boolean
    evidence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    audit?: boolean | AuditDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issue"]>

  export type IssueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auditId?: boolean
    code?: boolean
    category?: boolean
    severity?: boolean
    status?: boolean
    title?: boolean
    message?: boolean
    recommendation?: boolean
    selector?: boolean
    evidence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    audit?: boolean | AuditDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issue"]>

  export type IssueSelectScalar = {
    id?: boolean
    auditId?: boolean
    code?: boolean
    category?: boolean
    severity?: boolean
    status?: boolean
    title?: boolean
    message?: boolean
    recommendation?: boolean
    selector?: boolean
    evidence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IssueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "auditId" | "code" | "category" | "severity" | "status" | "title" | "message" | "recommendation" | "selector" | "evidence" | "createdAt" | "updatedAt", ExtArgs["result"]["issue"]>
  export type IssueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit?: boolean | AuditDefaultArgs<ExtArgs>
    history?: boolean | Issue$historyArgs<ExtArgs>
    _count?: boolean | IssueCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IssueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit?: boolean | AuditDefaultArgs<ExtArgs>
  }
  export type IssueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit?: boolean | AuditDefaultArgs<ExtArgs>
  }

  export type $IssuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Issue"
    objects: {
      audit: Prisma.$AuditPayload<ExtArgs>
      history: Prisma.$IssueStatusHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      auditId: string
      code: string
      category: string
      severity: $Enums.Severity
      status: $Enums.IssueStatus
      title: string
      message: string
      recommendation: string
      selector: string | null
      evidence: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["issue"]>
    composites: {}
  }

  type IssueGetPayload<S extends boolean | null | undefined | IssueDefaultArgs> = $Result.GetResult<Prisma.$IssuePayload, S>

  type IssueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IssueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IssueCountAggregateInputType | true
    }

  export interface IssueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Issue'], meta: { name: 'Issue' } }
    /**
     * Find zero or one Issue that matches the filter.
     * @param {IssueFindUniqueArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IssueFindUniqueArgs>(args: SelectSubset<T, IssueFindUniqueArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Issue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IssueFindUniqueOrThrowArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IssueFindUniqueOrThrowArgs>(args: SelectSubset<T, IssueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Issue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueFindFirstArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IssueFindFirstArgs>(args?: SelectSubset<T, IssueFindFirstArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Issue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueFindFirstOrThrowArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IssueFindFirstOrThrowArgs>(args?: SelectSubset<T, IssueFindFirstOrThrowArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Issues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Issues
     * const issues = await prisma.issue.findMany()
     * 
     * // Get first 10 Issues
     * const issues = await prisma.issue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const issueWithIdOnly = await prisma.issue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IssueFindManyArgs>(args?: SelectSubset<T, IssueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Issue.
     * @param {IssueCreateArgs} args - Arguments to create a Issue.
     * @example
     * // Create one Issue
     * const Issue = await prisma.issue.create({
     *   data: {
     *     // ... data to create a Issue
     *   }
     * })
     * 
     */
    create<T extends IssueCreateArgs>(args: SelectSubset<T, IssueCreateArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Issues.
     * @param {IssueCreateManyArgs} args - Arguments to create many Issues.
     * @example
     * // Create many Issues
     * const issue = await prisma.issue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IssueCreateManyArgs>(args?: SelectSubset<T, IssueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Issues and returns the data saved in the database.
     * @param {IssueCreateManyAndReturnArgs} args - Arguments to create many Issues.
     * @example
     * // Create many Issues
     * const issue = await prisma.issue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Issues and only return the `id`
     * const issueWithIdOnly = await prisma.issue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IssueCreateManyAndReturnArgs>(args?: SelectSubset<T, IssueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Issue.
     * @param {IssueDeleteArgs} args - Arguments to delete one Issue.
     * @example
     * // Delete one Issue
     * const Issue = await prisma.issue.delete({
     *   where: {
     *     // ... filter to delete one Issue
     *   }
     * })
     * 
     */
    delete<T extends IssueDeleteArgs>(args: SelectSubset<T, IssueDeleteArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Issue.
     * @param {IssueUpdateArgs} args - Arguments to update one Issue.
     * @example
     * // Update one Issue
     * const issue = await prisma.issue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IssueUpdateArgs>(args: SelectSubset<T, IssueUpdateArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Issues.
     * @param {IssueDeleteManyArgs} args - Arguments to filter Issues to delete.
     * @example
     * // Delete a few Issues
     * const { count } = await prisma.issue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IssueDeleteManyArgs>(args?: SelectSubset<T, IssueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Issues
     * const issue = await prisma.issue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IssueUpdateManyArgs>(args: SelectSubset<T, IssueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Issues and returns the data updated in the database.
     * @param {IssueUpdateManyAndReturnArgs} args - Arguments to update many Issues.
     * @example
     * // Update many Issues
     * const issue = await prisma.issue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Issues and only return the `id`
     * const issueWithIdOnly = await prisma.issue.updateManyAndReturn({
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
    updateManyAndReturn<T extends IssueUpdateManyAndReturnArgs>(args: SelectSubset<T, IssueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Issue.
     * @param {IssueUpsertArgs} args - Arguments to update or create a Issue.
     * @example
     * // Update or create a Issue
     * const issue = await prisma.issue.upsert({
     *   create: {
     *     // ... data to create a Issue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Issue we want to update
     *   }
     * })
     */
    upsert<T extends IssueUpsertArgs>(args: SelectSubset<T, IssueUpsertArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueCountArgs} args - Arguments to filter Issues to count.
     * @example
     * // Count the number of Issues
     * const count = await prisma.issue.count({
     *   where: {
     *     // ... the filter for the Issues we want to count
     *   }
     * })
    **/
    count<T extends IssueCountArgs>(
      args?: Subset<T, IssueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IssueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Issue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IssueAggregateArgs>(args: Subset<T, IssueAggregateArgs>): Prisma.PrismaPromise<GetIssueAggregateType<T>>

    /**
     * Group by Issue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueGroupByArgs} args - Group by arguments.
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
      T extends IssueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IssueGroupByArgs['orderBy'] }
        : { orderBy?: IssueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IssueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIssueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Issue model
   */
  readonly fields: IssueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Issue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IssueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    audit<T extends AuditDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuditDefaultArgs<ExtArgs>>): Prisma__AuditClient<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    history<T extends Issue$historyArgs<ExtArgs> = {}>(args?: Subset<T, Issue$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssueStatusHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Issue model
   */
  interface IssueFieldRefs {
    readonly id: FieldRef<"Issue", 'String'>
    readonly auditId: FieldRef<"Issue", 'String'>
    readonly code: FieldRef<"Issue", 'String'>
    readonly category: FieldRef<"Issue", 'String'>
    readonly severity: FieldRef<"Issue", 'Severity'>
    readonly status: FieldRef<"Issue", 'IssueStatus'>
    readonly title: FieldRef<"Issue", 'String'>
    readonly message: FieldRef<"Issue", 'String'>
    readonly recommendation: FieldRef<"Issue", 'String'>
    readonly selector: FieldRef<"Issue", 'String'>
    readonly evidence: FieldRef<"Issue", 'Json'>
    readonly createdAt: FieldRef<"Issue", 'DateTime'>
    readonly updatedAt: FieldRef<"Issue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Issue findUnique
   */
  export type IssueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where: IssueWhereUniqueInput
  }

  /**
   * Issue findUniqueOrThrow
   */
  export type IssueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where: IssueWhereUniqueInput
  }

  /**
   * Issue findFirst
   */
  export type IssueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Issues.
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Issues.
     */
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }

  /**
   * Issue findFirstOrThrow
   */
  export type IssueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Issues.
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Issues.
     */
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }

  /**
   * Issue findMany
   */
  export type IssueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issues to fetch.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Issues.
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }

  /**
   * Issue create
   */
  export type IssueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * The data needed to create a Issue.
     */
    data: XOR<IssueCreateInput, IssueUncheckedCreateInput>
  }

  /**
   * Issue createMany
   */
  export type IssueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Issues.
     */
    data: IssueCreateManyInput | IssueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Issue createManyAndReturn
   */
  export type IssueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * The data used to create many Issues.
     */
    data: IssueCreateManyInput | IssueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Issue update
   */
  export type IssueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * The data needed to update a Issue.
     */
    data: XOR<IssueUpdateInput, IssueUncheckedUpdateInput>
    /**
     * Choose, which Issue to update.
     */
    where: IssueWhereUniqueInput
  }

  /**
   * Issue updateMany
   */
  export type IssueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Issues.
     */
    data: XOR<IssueUpdateManyMutationInput, IssueUncheckedUpdateManyInput>
    /**
     * Filter which Issues to update
     */
    where?: IssueWhereInput
    /**
     * Limit how many Issues to update.
     */
    limit?: number
  }

  /**
   * Issue updateManyAndReturn
   */
  export type IssueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * The data used to update Issues.
     */
    data: XOR<IssueUpdateManyMutationInput, IssueUncheckedUpdateManyInput>
    /**
     * Filter which Issues to update
     */
    where?: IssueWhereInput
    /**
     * Limit how many Issues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Issue upsert
   */
  export type IssueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * The filter to search for the Issue to update in case it exists.
     */
    where: IssueWhereUniqueInput
    /**
     * In case the Issue found by the `where` argument doesn't exist, create a new Issue with this data.
     */
    create: XOR<IssueCreateInput, IssueUncheckedCreateInput>
    /**
     * In case the Issue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IssueUpdateInput, IssueUncheckedUpdateInput>
  }

  /**
   * Issue delete
   */
  export type IssueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter which Issue to delete.
     */
    where: IssueWhereUniqueInput
  }

  /**
   * Issue deleteMany
   */
  export type IssueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Issues to delete
     */
    where?: IssueWhereInput
    /**
     * Limit how many Issues to delete.
     */
    limit?: number
  }

  /**
   * Issue.history
   */
  export type Issue$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueStatusHistory
     */
    select?: IssueStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssueStatusHistory
     */
    omit?: IssueStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueStatusHistoryInclude<ExtArgs> | null
    where?: IssueStatusHistoryWhereInput
    orderBy?: IssueStatusHistoryOrderByWithRelationInput | IssueStatusHistoryOrderByWithRelationInput[]
    cursor?: IssueStatusHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IssueStatusHistoryScalarFieldEnum | IssueStatusHistoryScalarFieldEnum[]
  }

  /**
   * Issue without action
   */
  export type IssueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
  }


  /**
   * Model IssueStatusHistory
   */

  export type AggregateIssueStatusHistory = {
    _count: IssueStatusHistoryCountAggregateOutputType | null
    _min: IssueStatusHistoryMinAggregateOutputType | null
    _max: IssueStatusHistoryMaxAggregateOutputType | null
  }

  export type IssueStatusHistoryMinAggregateOutputType = {
    id: string | null
    issueId: string | null
    fromStatus: $Enums.IssueStatus | null
    toStatus: $Enums.IssueStatus | null
    changedById: string | null
    changedAt: Date | null
  }

  export type IssueStatusHistoryMaxAggregateOutputType = {
    id: string | null
    issueId: string | null
    fromStatus: $Enums.IssueStatus | null
    toStatus: $Enums.IssueStatus | null
    changedById: string | null
    changedAt: Date | null
  }

  export type IssueStatusHistoryCountAggregateOutputType = {
    id: number
    issueId: number
    fromStatus: number
    toStatus: number
    changedById: number
    changedAt: number
    _all: number
  }


  export type IssueStatusHistoryMinAggregateInputType = {
    id?: true
    issueId?: true
    fromStatus?: true
    toStatus?: true
    changedById?: true
    changedAt?: true
  }

  export type IssueStatusHistoryMaxAggregateInputType = {
    id?: true
    issueId?: true
    fromStatus?: true
    toStatus?: true
    changedById?: true
    changedAt?: true
  }

  export type IssueStatusHistoryCountAggregateInputType = {
    id?: true
    issueId?: true
    fromStatus?: true
    toStatus?: true
    changedById?: true
    changedAt?: true
    _all?: true
  }

  export type IssueStatusHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IssueStatusHistory to aggregate.
     */
    where?: IssueStatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IssueStatusHistories to fetch.
     */
    orderBy?: IssueStatusHistoryOrderByWithRelationInput | IssueStatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IssueStatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IssueStatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IssueStatusHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IssueStatusHistories
    **/
    _count?: true | IssueStatusHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IssueStatusHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IssueStatusHistoryMaxAggregateInputType
  }

  export type GetIssueStatusHistoryAggregateType<T extends IssueStatusHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateIssueStatusHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIssueStatusHistory[P]>
      : GetScalarType<T[P], AggregateIssueStatusHistory[P]>
  }




  export type IssueStatusHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssueStatusHistoryWhereInput
    orderBy?: IssueStatusHistoryOrderByWithAggregationInput | IssueStatusHistoryOrderByWithAggregationInput[]
    by: IssueStatusHistoryScalarFieldEnum[] | IssueStatusHistoryScalarFieldEnum
    having?: IssueStatusHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IssueStatusHistoryCountAggregateInputType | true
    _min?: IssueStatusHistoryMinAggregateInputType
    _max?: IssueStatusHistoryMaxAggregateInputType
  }

  export type IssueStatusHistoryGroupByOutputType = {
    id: string
    issueId: string
    fromStatus: $Enums.IssueStatus | null
    toStatus: $Enums.IssueStatus
    changedById: string | null
    changedAt: Date
    _count: IssueStatusHistoryCountAggregateOutputType | null
    _min: IssueStatusHistoryMinAggregateOutputType | null
    _max: IssueStatusHistoryMaxAggregateOutputType | null
  }

  type GetIssueStatusHistoryGroupByPayload<T extends IssueStatusHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IssueStatusHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IssueStatusHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IssueStatusHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], IssueStatusHistoryGroupByOutputType[P]>
        }
      >
    >


  export type IssueStatusHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    issueId?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    changedById?: boolean
    changedAt?: boolean
    issue?: boolean | IssueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issueStatusHistory"]>

  export type IssueStatusHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    issueId?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    changedById?: boolean
    changedAt?: boolean
    issue?: boolean | IssueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issueStatusHistory"]>

  export type IssueStatusHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    issueId?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    changedById?: boolean
    changedAt?: boolean
    issue?: boolean | IssueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issueStatusHistory"]>

  export type IssueStatusHistorySelectScalar = {
    id?: boolean
    issueId?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    changedById?: boolean
    changedAt?: boolean
  }

  export type IssueStatusHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "issueId" | "fromStatus" | "toStatus" | "changedById" | "changedAt", ExtArgs["result"]["issueStatusHistory"]>
  export type IssueStatusHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issue?: boolean | IssueDefaultArgs<ExtArgs>
  }
  export type IssueStatusHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issue?: boolean | IssueDefaultArgs<ExtArgs>
  }
  export type IssueStatusHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issue?: boolean | IssueDefaultArgs<ExtArgs>
  }

  export type $IssueStatusHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IssueStatusHistory"
    objects: {
      issue: Prisma.$IssuePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      issueId: string
      fromStatus: $Enums.IssueStatus | null
      toStatus: $Enums.IssueStatus
      changedById: string | null
      changedAt: Date
    }, ExtArgs["result"]["issueStatusHistory"]>
    composites: {}
  }

  type IssueStatusHistoryGetPayload<S extends boolean | null | undefined | IssueStatusHistoryDefaultArgs> = $Result.GetResult<Prisma.$IssueStatusHistoryPayload, S>

  type IssueStatusHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IssueStatusHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IssueStatusHistoryCountAggregateInputType | true
    }

  export interface IssueStatusHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IssueStatusHistory'], meta: { name: 'IssueStatusHistory' } }
    /**
     * Find zero or one IssueStatusHistory that matches the filter.
     * @param {IssueStatusHistoryFindUniqueArgs} args - Arguments to find a IssueStatusHistory
     * @example
     * // Get one IssueStatusHistory
     * const issueStatusHistory = await prisma.issueStatusHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IssueStatusHistoryFindUniqueArgs>(args: SelectSubset<T, IssueStatusHistoryFindUniqueArgs<ExtArgs>>): Prisma__IssueStatusHistoryClient<$Result.GetResult<Prisma.$IssueStatusHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IssueStatusHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IssueStatusHistoryFindUniqueOrThrowArgs} args - Arguments to find a IssueStatusHistory
     * @example
     * // Get one IssueStatusHistory
     * const issueStatusHistory = await prisma.issueStatusHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IssueStatusHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, IssueStatusHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IssueStatusHistoryClient<$Result.GetResult<Prisma.$IssueStatusHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IssueStatusHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueStatusHistoryFindFirstArgs} args - Arguments to find a IssueStatusHistory
     * @example
     * // Get one IssueStatusHistory
     * const issueStatusHistory = await prisma.issueStatusHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IssueStatusHistoryFindFirstArgs>(args?: SelectSubset<T, IssueStatusHistoryFindFirstArgs<ExtArgs>>): Prisma__IssueStatusHistoryClient<$Result.GetResult<Prisma.$IssueStatusHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IssueStatusHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueStatusHistoryFindFirstOrThrowArgs} args - Arguments to find a IssueStatusHistory
     * @example
     * // Get one IssueStatusHistory
     * const issueStatusHistory = await prisma.issueStatusHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IssueStatusHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, IssueStatusHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__IssueStatusHistoryClient<$Result.GetResult<Prisma.$IssueStatusHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IssueStatusHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueStatusHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IssueStatusHistories
     * const issueStatusHistories = await prisma.issueStatusHistory.findMany()
     * 
     * // Get first 10 IssueStatusHistories
     * const issueStatusHistories = await prisma.issueStatusHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const issueStatusHistoryWithIdOnly = await prisma.issueStatusHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IssueStatusHistoryFindManyArgs>(args?: SelectSubset<T, IssueStatusHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssueStatusHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IssueStatusHistory.
     * @param {IssueStatusHistoryCreateArgs} args - Arguments to create a IssueStatusHistory.
     * @example
     * // Create one IssueStatusHistory
     * const IssueStatusHistory = await prisma.issueStatusHistory.create({
     *   data: {
     *     // ... data to create a IssueStatusHistory
     *   }
     * })
     * 
     */
    create<T extends IssueStatusHistoryCreateArgs>(args: SelectSubset<T, IssueStatusHistoryCreateArgs<ExtArgs>>): Prisma__IssueStatusHistoryClient<$Result.GetResult<Prisma.$IssueStatusHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IssueStatusHistories.
     * @param {IssueStatusHistoryCreateManyArgs} args - Arguments to create many IssueStatusHistories.
     * @example
     * // Create many IssueStatusHistories
     * const issueStatusHistory = await prisma.issueStatusHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IssueStatusHistoryCreateManyArgs>(args?: SelectSubset<T, IssueStatusHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IssueStatusHistories and returns the data saved in the database.
     * @param {IssueStatusHistoryCreateManyAndReturnArgs} args - Arguments to create many IssueStatusHistories.
     * @example
     * // Create many IssueStatusHistories
     * const issueStatusHistory = await prisma.issueStatusHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IssueStatusHistories and only return the `id`
     * const issueStatusHistoryWithIdOnly = await prisma.issueStatusHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IssueStatusHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, IssueStatusHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssueStatusHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IssueStatusHistory.
     * @param {IssueStatusHistoryDeleteArgs} args - Arguments to delete one IssueStatusHistory.
     * @example
     * // Delete one IssueStatusHistory
     * const IssueStatusHistory = await prisma.issueStatusHistory.delete({
     *   where: {
     *     // ... filter to delete one IssueStatusHistory
     *   }
     * })
     * 
     */
    delete<T extends IssueStatusHistoryDeleteArgs>(args: SelectSubset<T, IssueStatusHistoryDeleteArgs<ExtArgs>>): Prisma__IssueStatusHistoryClient<$Result.GetResult<Prisma.$IssueStatusHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IssueStatusHistory.
     * @param {IssueStatusHistoryUpdateArgs} args - Arguments to update one IssueStatusHistory.
     * @example
     * // Update one IssueStatusHistory
     * const issueStatusHistory = await prisma.issueStatusHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IssueStatusHistoryUpdateArgs>(args: SelectSubset<T, IssueStatusHistoryUpdateArgs<ExtArgs>>): Prisma__IssueStatusHistoryClient<$Result.GetResult<Prisma.$IssueStatusHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IssueStatusHistories.
     * @param {IssueStatusHistoryDeleteManyArgs} args - Arguments to filter IssueStatusHistories to delete.
     * @example
     * // Delete a few IssueStatusHistories
     * const { count } = await prisma.issueStatusHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IssueStatusHistoryDeleteManyArgs>(args?: SelectSubset<T, IssueStatusHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IssueStatusHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueStatusHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IssueStatusHistories
     * const issueStatusHistory = await prisma.issueStatusHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IssueStatusHistoryUpdateManyArgs>(args: SelectSubset<T, IssueStatusHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IssueStatusHistories and returns the data updated in the database.
     * @param {IssueStatusHistoryUpdateManyAndReturnArgs} args - Arguments to update many IssueStatusHistories.
     * @example
     * // Update many IssueStatusHistories
     * const issueStatusHistory = await prisma.issueStatusHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IssueStatusHistories and only return the `id`
     * const issueStatusHistoryWithIdOnly = await prisma.issueStatusHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends IssueStatusHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, IssueStatusHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssueStatusHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IssueStatusHistory.
     * @param {IssueStatusHistoryUpsertArgs} args - Arguments to update or create a IssueStatusHistory.
     * @example
     * // Update or create a IssueStatusHistory
     * const issueStatusHistory = await prisma.issueStatusHistory.upsert({
     *   create: {
     *     // ... data to create a IssueStatusHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IssueStatusHistory we want to update
     *   }
     * })
     */
    upsert<T extends IssueStatusHistoryUpsertArgs>(args: SelectSubset<T, IssueStatusHistoryUpsertArgs<ExtArgs>>): Prisma__IssueStatusHistoryClient<$Result.GetResult<Prisma.$IssueStatusHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IssueStatusHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueStatusHistoryCountArgs} args - Arguments to filter IssueStatusHistories to count.
     * @example
     * // Count the number of IssueStatusHistories
     * const count = await prisma.issueStatusHistory.count({
     *   where: {
     *     // ... the filter for the IssueStatusHistories we want to count
     *   }
     * })
    **/
    count<T extends IssueStatusHistoryCountArgs>(
      args?: Subset<T, IssueStatusHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IssueStatusHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IssueStatusHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueStatusHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IssueStatusHistoryAggregateArgs>(args: Subset<T, IssueStatusHistoryAggregateArgs>): Prisma.PrismaPromise<GetIssueStatusHistoryAggregateType<T>>

    /**
     * Group by IssueStatusHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueStatusHistoryGroupByArgs} args - Group by arguments.
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
      T extends IssueStatusHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IssueStatusHistoryGroupByArgs['orderBy'] }
        : { orderBy?: IssueStatusHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IssueStatusHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIssueStatusHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IssueStatusHistory model
   */
  readonly fields: IssueStatusHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IssueStatusHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IssueStatusHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    issue<T extends IssueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IssueDefaultArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the IssueStatusHistory model
   */
  interface IssueStatusHistoryFieldRefs {
    readonly id: FieldRef<"IssueStatusHistory", 'String'>
    readonly issueId: FieldRef<"IssueStatusHistory", 'String'>
    readonly fromStatus: FieldRef<"IssueStatusHistory", 'IssueStatus'>
    readonly toStatus: FieldRef<"IssueStatusHistory", 'IssueStatus'>
    readonly changedById: FieldRef<"IssueStatusHistory", 'String'>
    readonly changedAt: FieldRef<"IssueStatusHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IssueStatusHistory findUnique
   */
  export type IssueStatusHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueStatusHistory
     */
    select?: IssueStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssueStatusHistory
     */
    omit?: IssueStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which IssueStatusHistory to fetch.
     */
    where: IssueStatusHistoryWhereUniqueInput
  }

  /**
   * IssueStatusHistory findUniqueOrThrow
   */
  export type IssueStatusHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueStatusHistory
     */
    select?: IssueStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssueStatusHistory
     */
    omit?: IssueStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which IssueStatusHistory to fetch.
     */
    where: IssueStatusHistoryWhereUniqueInput
  }

  /**
   * IssueStatusHistory findFirst
   */
  export type IssueStatusHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueStatusHistory
     */
    select?: IssueStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssueStatusHistory
     */
    omit?: IssueStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which IssueStatusHistory to fetch.
     */
    where?: IssueStatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IssueStatusHistories to fetch.
     */
    orderBy?: IssueStatusHistoryOrderByWithRelationInput | IssueStatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IssueStatusHistories.
     */
    cursor?: IssueStatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IssueStatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IssueStatusHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IssueStatusHistories.
     */
    distinct?: IssueStatusHistoryScalarFieldEnum | IssueStatusHistoryScalarFieldEnum[]
  }

  /**
   * IssueStatusHistory findFirstOrThrow
   */
  export type IssueStatusHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueStatusHistory
     */
    select?: IssueStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssueStatusHistory
     */
    omit?: IssueStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which IssueStatusHistory to fetch.
     */
    where?: IssueStatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IssueStatusHistories to fetch.
     */
    orderBy?: IssueStatusHistoryOrderByWithRelationInput | IssueStatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IssueStatusHistories.
     */
    cursor?: IssueStatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IssueStatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IssueStatusHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IssueStatusHistories.
     */
    distinct?: IssueStatusHistoryScalarFieldEnum | IssueStatusHistoryScalarFieldEnum[]
  }

  /**
   * IssueStatusHistory findMany
   */
  export type IssueStatusHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueStatusHistory
     */
    select?: IssueStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssueStatusHistory
     */
    omit?: IssueStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter, which IssueStatusHistories to fetch.
     */
    where?: IssueStatusHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IssueStatusHistories to fetch.
     */
    orderBy?: IssueStatusHistoryOrderByWithRelationInput | IssueStatusHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IssueStatusHistories.
     */
    cursor?: IssueStatusHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IssueStatusHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IssueStatusHistories.
     */
    skip?: number
    distinct?: IssueStatusHistoryScalarFieldEnum | IssueStatusHistoryScalarFieldEnum[]
  }

  /**
   * IssueStatusHistory create
   */
  export type IssueStatusHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueStatusHistory
     */
    select?: IssueStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssueStatusHistory
     */
    omit?: IssueStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueStatusHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a IssueStatusHistory.
     */
    data: XOR<IssueStatusHistoryCreateInput, IssueStatusHistoryUncheckedCreateInput>
  }

  /**
   * IssueStatusHistory createMany
   */
  export type IssueStatusHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IssueStatusHistories.
     */
    data: IssueStatusHistoryCreateManyInput | IssueStatusHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IssueStatusHistory createManyAndReturn
   */
  export type IssueStatusHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueStatusHistory
     */
    select?: IssueStatusHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IssueStatusHistory
     */
    omit?: IssueStatusHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many IssueStatusHistories.
     */
    data: IssueStatusHistoryCreateManyInput | IssueStatusHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueStatusHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IssueStatusHistory update
   */
  export type IssueStatusHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueStatusHistory
     */
    select?: IssueStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssueStatusHistory
     */
    omit?: IssueStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueStatusHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a IssueStatusHistory.
     */
    data: XOR<IssueStatusHistoryUpdateInput, IssueStatusHistoryUncheckedUpdateInput>
    /**
     * Choose, which IssueStatusHistory to update.
     */
    where: IssueStatusHistoryWhereUniqueInput
  }

  /**
   * IssueStatusHistory updateMany
   */
  export type IssueStatusHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IssueStatusHistories.
     */
    data: XOR<IssueStatusHistoryUpdateManyMutationInput, IssueStatusHistoryUncheckedUpdateManyInput>
    /**
     * Filter which IssueStatusHistories to update
     */
    where?: IssueStatusHistoryWhereInput
    /**
     * Limit how many IssueStatusHistories to update.
     */
    limit?: number
  }

  /**
   * IssueStatusHistory updateManyAndReturn
   */
  export type IssueStatusHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueStatusHistory
     */
    select?: IssueStatusHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IssueStatusHistory
     */
    omit?: IssueStatusHistoryOmit<ExtArgs> | null
    /**
     * The data used to update IssueStatusHistories.
     */
    data: XOR<IssueStatusHistoryUpdateManyMutationInput, IssueStatusHistoryUncheckedUpdateManyInput>
    /**
     * Filter which IssueStatusHistories to update
     */
    where?: IssueStatusHistoryWhereInput
    /**
     * Limit how many IssueStatusHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueStatusHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IssueStatusHistory upsert
   */
  export type IssueStatusHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueStatusHistory
     */
    select?: IssueStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssueStatusHistory
     */
    omit?: IssueStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueStatusHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the IssueStatusHistory to update in case it exists.
     */
    where: IssueStatusHistoryWhereUniqueInput
    /**
     * In case the IssueStatusHistory found by the `where` argument doesn't exist, create a new IssueStatusHistory with this data.
     */
    create: XOR<IssueStatusHistoryCreateInput, IssueStatusHistoryUncheckedCreateInput>
    /**
     * In case the IssueStatusHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IssueStatusHistoryUpdateInput, IssueStatusHistoryUncheckedUpdateInput>
  }

  /**
   * IssueStatusHistory delete
   */
  export type IssueStatusHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueStatusHistory
     */
    select?: IssueStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssueStatusHistory
     */
    omit?: IssueStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueStatusHistoryInclude<ExtArgs> | null
    /**
     * Filter which IssueStatusHistory to delete.
     */
    where: IssueStatusHistoryWhereUniqueInput
  }

  /**
   * IssueStatusHistory deleteMany
   */
  export type IssueStatusHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IssueStatusHistories to delete
     */
    where?: IssueStatusHistoryWhereInput
    /**
     * Limit how many IssueStatusHistories to delete.
     */
    limit?: number
  }

  /**
   * IssueStatusHistory without action
   */
  export type IssueStatusHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueStatusHistory
     */
    select?: IssueStatusHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IssueStatusHistory
     */
    omit?: IssueStatusHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueStatusHistoryInclude<ExtArgs> | null
  }


  /**
   * Model AuditSnapshot
   */

  export type AggregateAuditSnapshot = {
    _count: AuditSnapshotCountAggregateOutputType | null
    _min: AuditSnapshotMinAggregateOutputType | null
    _max: AuditSnapshotMaxAggregateOutputType | null
  }

  export type AuditSnapshotMinAggregateOutputType = {
    id: string | null
    auditId: string | null
    createdAt: Date | null
  }

  export type AuditSnapshotMaxAggregateOutputType = {
    id: string | null
    auditId: string | null
    createdAt: Date | null
  }

  export type AuditSnapshotCountAggregateOutputType = {
    id: number
    auditId: number
    rawPayload: number
    createdAt: number
    _all: number
  }


  export type AuditSnapshotMinAggregateInputType = {
    id?: true
    auditId?: true
    createdAt?: true
  }

  export type AuditSnapshotMaxAggregateInputType = {
    id?: true
    auditId?: true
    createdAt?: true
  }

  export type AuditSnapshotCountAggregateInputType = {
    id?: true
    auditId?: true
    rawPayload?: true
    createdAt?: true
    _all?: true
  }

  export type AuditSnapshotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditSnapshot to aggregate.
     */
    where?: AuditSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditSnapshots to fetch.
     */
    orderBy?: AuditSnapshotOrderByWithRelationInput | AuditSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditSnapshots
    **/
    _count?: true | AuditSnapshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditSnapshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditSnapshotMaxAggregateInputType
  }

  export type GetAuditSnapshotAggregateType<T extends AuditSnapshotAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditSnapshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditSnapshot[P]>
      : GetScalarType<T[P], AggregateAuditSnapshot[P]>
  }




  export type AuditSnapshotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditSnapshotWhereInput
    orderBy?: AuditSnapshotOrderByWithAggregationInput | AuditSnapshotOrderByWithAggregationInput[]
    by: AuditSnapshotScalarFieldEnum[] | AuditSnapshotScalarFieldEnum
    having?: AuditSnapshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditSnapshotCountAggregateInputType | true
    _min?: AuditSnapshotMinAggregateInputType
    _max?: AuditSnapshotMaxAggregateInputType
  }

  export type AuditSnapshotGroupByOutputType = {
    id: string
    auditId: string
    rawPayload: JsonValue
    createdAt: Date
    _count: AuditSnapshotCountAggregateOutputType | null
    _min: AuditSnapshotMinAggregateOutputType | null
    _max: AuditSnapshotMaxAggregateOutputType | null
  }

  type GetAuditSnapshotGroupByPayload<T extends AuditSnapshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditSnapshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditSnapshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditSnapshotGroupByOutputType[P]>
            : GetScalarType<T[P], AuditSnapshotGroupByOutputType[P]>
        }
      >
    >


  export type AuditSnapshotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auditId?: boolean
    rawPayload?: boolean
    createdAt?: boolean
    audit?: boolean | AuditDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditSnapshot"]>

  export type AuditSnapshotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auditId?: boolean
    rawPayload?: boolean
    createdAt?: boolean
    audit?: boolean | AuditDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditSnapshot"]>

  export type AuditSnapshotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auditId?: boolean
    rawPayload?: boolean
    createdAt?: boolean
    audit?: boolean | AuditDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditSnapshot"]>

  export type AuditSnapshotSelectScalar = {
    id?: boolean
    auditId?: boolean
    rawPayload?: boolean
    createdAt?: boolean
  }

  export type AuditSnapshotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "auditId" | "rawPayload" | "createdAt", ExtArgs["result"]["auditSnapshot"]>
  export type AuditSnapshotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit?: boolean | AuditDefaultArgs<ExtArgs>
  }
  export type AuditSnapshotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit?: boolean | AuditDefaultArgs<ExtArgs>
  }
  export type AuditSnapshotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit?: boolean | AuditDefaultArgs<ExtArgs>
  }

  export type $AuditSnapshotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditSnapshot"
    objects: {
      audit: Prisma.$AuditPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      auditId: string
      rawPayload: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["auditSnapshot"]>
    composites: {}
  }

  type AuditSnapshotGetPayload<S extends boolean | null | undefined | AuditSnapshotDefaultArgs> = $Result.GetResult<Prisma.$AuditSnapshotPayload, S>

  type AuditSnapshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditSnapshotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditSnapshotCountAggregateInputType | true
    }

  export interface AuditSnapshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditSnapshot'], meta: { name: 'AuditSnapshot' } }
    /**
     * Find zero or one AuditSnapshot that matches the filter.
     * @param {AuditSnapshotFindUniqueArgs} args - Arguments to find a AuditSnapshot
     * @example
     * // Get one AuditSnapshot
     * const auditSnapshot = await prisma.auditSnapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditSnapshotFindUniqueArgs>(args: SelectSubset<T, AuditSnapshotFindUniqueArgs<ExtArgs>>): Prisma__AuditSnapshotClient<$Result.GetResult<Prisma.$AuditSnapshotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditSnapshot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditSnapshotFindUniqueOrThrowArgs} args - Arguments to find a AuditSnapshot
     * @example
     * // Get one AuditSnapshot
     * const auditSnapshot = await prisma.auditSnapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditSnapshotFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditSnapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditSnapshotClient<$Result.GetResult<Prisma.$AuditSnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditSnapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditSnapshotFindFirstArgs} args - Arguments to find a AuditSnapshot
     * @example
     * // Get one AuditSnapshot
     * const auditSnapshot = await prisma.auditSnapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditSnapshotFindFirstArgs>(args?: SelectSubset<T, AuditSnapshotFindFirstArgs<ExtArgs>>): Prisma__AuditSnapshotClient<$Result.GetResult<Prisma.$AuditSnapshotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditSnapshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditSnapshotFindFirstOrThrowArgs} args - Arguments to find a AuditSnapshot
     * @example
     * // Get one AuditSnapshot
     * const auditSnapshot = await prisma.auditSnapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditSnapshotFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditSnapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditSnapshotClient<$Result.GetResult<Prisma.$AuditSnapshotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditSnapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditSnapshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditSnapshots
     * const auditSnapshots = await prisma.auditSnapshot.findMany()
     * 
     * // Get first 10 AuditSnapshots
     * const auditSnapshots = await prisma.auditSnapshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditSnapshotWithIdOnly = await prisma.auditSnapshot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditSnapshotFindManyArgs>(args?: SelectSubset<T, AuditSnapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditSnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditSnapshot.
     * @param {AuditSnapshotCreateArgs} args - Arguments to create a AuditSnapshot.
     * @example
     * // Create one AuditSnapshot
     * const AuditSnapshot = await prisma.auditSnapshot.create({
     *   data: {
     *     // ... data to create a AuditSnapshot
     *   }
     * })
     * 
     */
    create<T extends AuditSnapshotCreateArgs>(args: SelectSubset<T, AuditSnapshotCreateArgs<ExtArgs>>): Prisma__AuditSnapshotClient<$Result.GetResult<Prisma.$AuditSnapshotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditSnapshots.
     * @param {AuditSnapshotCreateManyArgs} args - Arguments to create many AuditSnapshots.
     * @example
     * // Create many AuditSnapshots
     * const auditSnapshot = await prisma.auditSnapshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditSnapshotCreateManyArgs>(args?: SelectSubset<T, AuditSnapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditSnapshots and returns the data saved in the database.
     * @param {AuditSnapshotCreateManyAndReturnArgs} args - Arguments to create many AuditSnapshots.
     * @example
     * // Create many AuditSnapshots
     * const auditSnapshot = await prisma.auditSnapshot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditSnapshots and only return the `id`
     * const auditSnapshotWithIdOnly = await prisma.auditSnapshot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditSnapshotCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditSnapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditSnapshotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditSnapshot.
     * @param {AuditSnapshotDeleteArgs} args - Arguments to delete one AuditSnapshot.
     * @example
     * // Delete one AuditSnapshot
     * const AuditSnapshot = await prisma.auditSnapshot.delete({
     *   where: {
     *     // ... filter to delete one AuditSnapshot
     *   }
     * })
     * 
     */
    delete<T extends AuditSnapshotDeleteArgs>(args: SelectSubset<T, AuditSnapshotDeleteArgs<ExtArgs>>): Prisma__AuditSnapshotClient<$Result.GetResult<Prisma.$AuditSnapshotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditSnapshot.
     * @param {AuditSnapshotUpdateArgs} args - Arguments to update one AuditSnapshot.
     * @example
     * // Update one AuditSnapshot
     * const auditSnapshot = await prisma.auditSnapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditSnapshotUpdateArgs>(args: SelectSubset<T, AuditSnapshotUpdateArgs<ExtArgs>>): Prisma__AuditSnapshotClient<$Result.GetResult<Prisma.$AuditSnapshotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditSnapshots.
     * @param {AuditSnapshotDeleteManyArgs} args - Arguments to filter AuditSnapshots to delete.
     * @example
     * // Delete a few AuditSnapshots
     * const { count } = await prisma.auditSnapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditSnapshotDeleteManyArgs>(args?: SelectSubset<T, AuditSnapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditSnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditSnapshots
     * const auditSnapshot = await prisma.auditSnapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditSnapshotUpdateManyArgs>(args: SelectSubset<T, AuditSnapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditSnapshots and returns the data updated in the database.
     * @param {AuditSnapshotUpdateManyAndReturnArgs} args - Arguments to update many AuditSnapshots.
     * @example
     * // Update many AuditSnapshots
     * const auditSnapshot = await prisma.auditSnapshot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditSnapshots and only return the `id`
     * const auditSnapshotWithIdOnly = await prisma.auditSnapshot.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuditSnapshotUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditSnapshotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditSnapshotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditSnapshot.
     * @param {AuditSnapshotUpsertArgs} args - Arguments to update or create a AuditSnapshot.
     * @example
     * // Update or create a AuditSnapshot
     * const auditSnapshot = await prisma.auditSnapshot.upsert({
     *   create: {
     *     // ... data to create a AuditSnapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditSnapshot we want to update
     *   }
     * })
     */
    upsert<T extends AuditSnapshotUpsertArgs>(args: SelectSubset<T, AuditSnapshotUpsertArgs<ExtArgs>>): Prisma__AuditSnapshotClient<$Result.GetResult<Prisma.$AuditSnapshotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditSnapshotCountArgs} args - Arguments to filter AuditSnapshots to count.
     * @example
     * // Count the number of AuditSnapshots
     * const count = await prisma.auditSnapshot.count({
     *   where: {
     *     // ... the filter for the AuditSnapshots we want to count
     *   }
     * })
    **/
    count<T extends AuditSnapshotCountArgs>(
      args?: Subset<T, AuditSnapshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditSnapshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditSnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditSnapshotAggregateArgs>(args: Subset<T, AuditSnapshotAggregateArgs>): Prisma.PrismaPromise<GetAuditSnapshotAggregateType<T>>

    /**
     * Group by AuditSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditSnapshotGroupByArgs} args - Group by arguments.
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
      T extends AuditSnapshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditSnapshotGroupByArgs['orderBy'] }
        : { orderBy?: AuditSnapshotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditSnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditSnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditSnapshot model
   */
  readonly fields: AuditSnapshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditSnapshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditSnapshotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    audit<T extends AuditDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuditDefaultArgs<ExtArgs>>): Prisma__AuditClient<$Result.GetResult<Prisma.$AuditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AuditSnapshot model
   */
  interface AuditSnapshotFieldRefs {
    readonly id: FieldRef<"AuditSnapshot", 'String'>
    readonly auditId: FieldRef<"AuditSnapshot", 'String'>
    readonly rawPayload: FieldRef<"AuditSnapshot", 'Json'>
    readonly createdAt: FieldRef<"AuditSnapshot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditSnapshot findUnique
   */
  export type AuditSnapshotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSnapshot
     */
    select?: AuditSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSnapshot
     */
    omit?: AuditSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which AuditSnapshot to fetch.
     */
    where: AuditSnapshotWhereUniqueInput
  }

  /**
   * AuditSnapshot findUniqueOrThrow
   */
  export type AuditSnapshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSnapshot
     */
    select?: AuditSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSnapshot
     */
    omit?: AuditSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which AuditSnapshot to fetch.
     */
    where: AuditSnapshotWhereUniqueInput
  }

  /**
   * AuditSnapshot findFirst
   */
  export type AuditSnapshotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSnapshot
     */
    select?: AuditSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSnapshot
     */
    omit?: AuditSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which AuditSnapshot to fetch.
     */
    where?: AuditSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditSnapshots to fetch.
     */
    orderBy?: AuditSnapshotOrderByWithRelationInput | AuditSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditSnapshots.
     */
    cursor?: AuditSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditSnapshots.
     */
    distinct?: AuditSnapshotScalarFieldEnum | AuditSnapshotScalarFieldEnum[]
  }

  /**
   * AuditSnapshot findFirstOrThrow
   */
  export type AuditSnapshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSnapshot
     */
    select?: AuditSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSnapshot
     */
    omit?: AuditSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which AuditSnapshot to fetch.
     */
    where?: AuditSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditSnapshots to fetch.
     */
    orderBy?: AuditSnapshotOrderByWithRelationInput | AuditSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditSnapshots.
     */
    cursor?: AuditSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditSnapshots.
     */
    distinct?: AuditSnapshotScalarFieldEnum | AuditSnapshotScalarFieldEnum[]
  }

  /**
   * AuditSnapshot findMany
   */
  export type AuditSnapshotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSnapshot
     */
    select?: AuditSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSnapshot
     */
    omit?: AuditSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which AuditSnapshots to fetch.
     */
    where?: AuditSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditSnapshots to fetch.
     */
    orderBy?: AuditSnapshotOrderByWithRelationInput | AuditSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditSnapshots.
     */
    cursor?: AuditSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditSnapshots.
     */
    skip?: number
    distinct?: AuditSnapshotScalarFieldEnum | AuditSnapshotScalarFieldEnum[]
  }

  /**
   * AuditSnapshot create
   */
  export type AuditSnapshotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSnapshot
     */
    select?: AuditSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSnapshot
     */
    omit?: AuditSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSnapshotInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditSnapshot.
     */
    data: XOR<AuditSnapshotCreateInput, AuditSnapshotUncheckedCreateInput>
  }

  /**
   * AuditSnapshot createMany
   */
  export type AuditSnapshotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditSnapshots.
     */
    data: AuditSnapshotCreateManyInput | AuditSnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditSnapshot createManyAndReturn
   */
  export type AuditSnapshotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSnapshot
     */
    select?: AuditSnapshotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSnapshot
     */
    omit?: AuditSnapshotOmit<ExtArgs> | null
    /**
     * The data used to create many AuditSnapshots.
     */
    data: AuditSnapshotCreateManyInput | AuditSnapshotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSnapshotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditSnapshot update
   */
  export type AuditSnapshotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSnapshot
     */
    select?: AuditSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSnapshot
     */
    omit?: AuditSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSnapshotInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditSnapshot.
     */
    data: XOR<AuditSnapshotUpdateInput, AuditSnapshotUncheckedUpdateInput>
    /**
     * Choose, which AuditSnapshot to update.
     */
    where: AuditSnapshotWhereUniqueInput
  }

  /**
   * AuditSnapshot updateMany
   */
  export type AuditSnapshotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditSnapshots.
     */
    data: XOR<AuditSnapshotUpdateManyMutationInput, AuditSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which AuditSnapshots to update
     */
    where?: AuditSnapshotWhereInput
    /**
     * Limit how many AuditSnapshots to update.
     */
    limit?: number
  }

  /**
   * AuditSnapshot updateManyAndReturn
   */
  export type AuditSnapshotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSnapshot
     */
    select?: AuditSnapshotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSnapshot
     */
    omit?: AuditSnapshotOmit<ExtArgs> | null
    /**
     * The data used to update AuditSnapshots.
     */
    data: XOR<AuditSnapshotUpdateManyMutationInput, AuditSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which AuditSnapshots to update
     */
    where?: AuditSnapshotWhereInput
    /**
     * Limit how many AuditSnapshots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSnapshotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditSnapshot upsert
   */
  export type AuditSnapshotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSnapshot
     */
    select?: AuditSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSnapshot
     */
    omit?: AuditSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSnapshotInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditSnapshot to update in case it exists.
     */
    where: AuditSnapshotWhereUniqueInput
    /**
     * In case the AuditSnapshot found by the `where` argument doesn't exist, create a new AuditSnapshot with this data.
     */
    create: XOR<AuditSnapshotCreateInput, AuditSnapshotUncheckedCreateInput>
    /**
     * In case the AuditSnapshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditSnapshotUpdateInput, AuditSnapshotUncheckedUpdateInput>
  }

  /**
   * AuditSnapshot delete
   */
  export type AuditSnapshotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSnapshot
     */
    select?: AuditSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSnapshot
     */
    omit?: AuditSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSnapshotInclude<ExtArgs> | null
    /**
     * Filter which AuditSnapshot to delete.
     */
    where: AuditSnapshotWhereUniqueInput
  }

  /**
   * AuditSnapshot deleteMany
   */
  export type AuditSnapshotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditSnapshots to delete
     */
    where?: AuditSnapshotWhereInput
    /**
     * Limit how many AuditSnapshots to delete.
     */
    limit?: number
  }

  /**
   * AuditSnapshot without action
   */
  export type AuditSnapshotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditSnapshot
     */
    select?: AuditSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditSnapshot
     */
    omit?: AuditSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditSnapshotInclude<ExtArgs> | null
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
    passwordHash: 'passwordHash',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    domain: 'domain',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectMemberScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    projectId: 'projectId',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type ProjectMemberScalarFieldEnum = (typeof ProjectMemberScalarFieldEnum)[keyof typeof ProjectMemberScalarFieldEnum]


  export const PageScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    normalizedUrl: 'normalizedUrl',
    path: 'path',
    firstSeenAt: 'firstSeenAt',
    lastSeenAt: 'lastSeenAt'
  };

  export type PageScalarFieldEnum = (typeof PageScalarFieldEnum)[keyof typeof PageScalarFieldEnum]


  export const AuditScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    pageId: 'pageId',
    source: 'source',
    url: 'url',
    title: 'title',
    overallScore: 'overallScore',
    onPageScore: 'onPageScore',
    technicalScore: 'technicalScore',
    contentScore: 'contentScore',
    performanceScore: 'performanceScore',
    createdAt: 'createdAt'
  };

  export type AuditScalarFieldEnum = (typeof AuditScalarFieldEnum)[keyof typeof AuditScalarFieldEnum]


  export const AuditMetricsScalarFieldEnum: {
    id: 'id',
    auditId: 'auditId',
    metaDescription: 'metaDescription',
    titleLength: 'titleLength',
    metaDescriptionLength: 'metaDescriptionLength',
    h1Count: 'h1Count',
    h2Count: 'h2Count',
    h3Count: 'h3Count',
    imagesTotal: 'imagesTotal',
    imagesWithoutAlt: 'imagesWithoutAlt',
    internalLinks: 'internalLinks',
    externalLinks: 'externalLinks',
    wordCount: 'wordCount',
    hasCanonical: 'hasCanonical',
    canonicalUrl: 'canonicalUrl',
    hasMetaRobots: 'hasMetaRobots',
    metaRobotsContent: 'metaRobotsContent',
    hasViewport: 'hasViewport',
    hasSchema: 'hasSchema',
    schemaTypes: 'schemaTypes',
    openGraphPresent: 'openGraphPresent',
    ogImage: 'ogImage',
    twitterCardPresent: 'twitterCardPresent',
    lcpEstimateMs: 'lcpEstimateMs',
    domNodeCount: 'domNodeCount',
    jsRequestCount: 'jsRequestCount',
    cssRequestCount: 'cssRequestCount'
  };

  export type AuditMetricsScalarFieldEnum = (typeof AuditMetricsScalarFieldEnum)[keyof typeof AuditMetricsScalarFieldEnum]


  export const IssueScalarFieldEnum: {
    id: 'id',
    auditId: 'auditId',
    code: 'code',
    category: 'category',
    severity: 'severity',
    status: 'status',
    title: 'title',
    message: 'message',
    recommendation: 'recommendation',
    selector: 'selector',
    evidence: 'evidence',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IssueScalarFieldEnum = (typeof IssueScalarFieldEnum)[keyof typeof IssueScalarFieldEnum]


  export const IssueStatusHistoryScalarFieldEnum: {
    id: 'id',
    issueId: 'issueId',
    fromStatus: 'fromStatus',
    toStatus: 'toStatus',
    changedById: 'changedById',
    changedAt: 'changedAt'
  };

  export type IssueStatusHistoryScalarFieldEnum = (typeof IssueStatusHistoryScalarFieldEnum)[keyof typeof IssueStatusHistoryScalarFieldEnum]


  export const AuditSnapshotScalarFieldEnum: {
    id: 'id',
    auditId: 'auditId',
    rawPayload: 'rawPayload',
    createdAt: 'createdAt'
  };

  export type AuditSnapshotScalarFieldEnum = (typeof AuditSnapshotScalarFieldEnum)[keyof typeof AuditSnapshotScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AuditSource'
   */
  export type EnumAuditSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditSource'>
    


  /**
   * Reference to a field of type 'AuditSource[]'
   */
  export type ListEnumAuditSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditSource[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Severity'
   */
  export type EnumSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Severity'>
    


  /**
   * Reference to a field of type 'Severity[]'
   */
  export type ListEnumSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Severity[]'>
    


  /**
   * Reference to a field of type 'IssueStatus'
   */
  export type EnumIssueStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IssueStatus'>
    


  /**
   * Reference to a field of type 'IssueStatus[]'
   */
  export type ListEnumIssueStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IssueStatus[]'>
    


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
    passwordHash?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    memberships?: ProjectMemberListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    memberships?: ProjectMemberOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    memberships?: ProjectMemberListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    domain?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    pages?: PageListRelationFilter
    audits?: AuditListRelationFilter
    members?: ProjectMemberListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pages?: PageOrderByRelationAggregateInput
    audits?: AuditOrderByRelationAggregateInput
    members?: ProjectMemberOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    domain?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    pages?: PageListRelationFilter
    audits?: AuditListRelationFilter
    members?: ProjectMemberListRelationFilter
  }, "id" | "domain">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    domain?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ProjectMemberWhereInput = {
    AND?: ProjectMemberWhereInput | ProjectMemberWhereInput[]
    OR?: ProjectMemberWhereInput[]
    NOT?: ProjectMemberWhereInput | ProjectMemberWhereInput[]
    id?: StringFilter<"ProjectMember"> | string
    userId?: StringFilter<"ProjectMember"> | string
    projectId?: StringFilter<"ProjectMember"> | string
    role?: StringFilter<"ProjectMember"> | string
    createdAt?: DateTimeFilter<"ProjectMember"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ProjectMemberOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
  }

  export type ProjectMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_projectId?: ProjectMemberUserIdProjectIdCompoundUniqueInput
    AND?: ProjectMemberWhereInput | ProjectMemberWhereInput[]
    OR?: ProjectMemberWhereInput[]
    NOT?: ProjectMemberWhereInput | ProjectMemberWhereInput[]
    userId?: StringFilter<"ProjectMember"> | string
    projectId?: StringFilter<"ProjectMember"> | string
    role?: StringFilter<"ProjectMember"> | string
    createdAt?: DateTimeFilter<"ProjectMember"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id" | "userId_projectId">

  export type ProjectMemberOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: ProjectMemberCountOrderByAggregateInput
    _max?: ProjectMemberMaxOrderByAggregateInput
    _min?: ProjectMemberMinOrderByAggregateInput
  }

  export type ProjectMemberScalarWhereWithAggregatesInput = {
    AND?: ProjectMemberScalarWhereWithAggregatesInput | ProjectMemberScalarWhereWithAggregatesInput[]
    OR?: ProjectMemberScalarWhereWithAggregatesInput[]
    NOT?: ProjectMemberScalarWhereWithAggregatesInput | ProjectMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectMember"> | string
    userId?: StringWithAggregatesFilter<"ProjectMember"> | string
    projectId?: StringWithAggregatesFilter<"ProjectMember"> | string
    role?: StringWithAggregatesFilter<"ProjectMember"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProjectMember"> | Date | string
  }

  export type PageWhereInput = {
    AND?: PageWhereInput | PageWhereInput[]
    OR?: PageWhereInput[]
    NOT?: PageWhereInput | PageWhereInput[]
    id?: StringFilter<"Page"> | string
    projectId?: StringFilter<"Page"> | string
    normalizedUrl?: StringFilter<"Page"> | string
    path?: StringFilter<"Page"> | string
    firstSeenAt?: DateTimeFilter<"Page"> | Date | string
    lastSeenAt?: DateTimeFilter<"Page"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    audits?: AuditListRelationFilter
  }

  export type PageOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    normalizedUrl?: SortOrder
    path?: SortOrder
    firstSeenAt?: SortOrder
    lastSeenAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    audits?: AuditOrderByRelationAggregateInput
  }

  export type PageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId_normalizedUrl?: PageProjectIdNormalizedUrlCompoundUniqueInput
    AND?: PageWhereInput | PageWhereInput[]
    OR?: PageWhereInput[]
    NOT?: PageWhereInput | PageWhereInput[]
    projectId?: StringFilter<"Page"> | string
    normalizedUrl?: StringFilter<"Page"> | string
    path?: StringFilter<"Page"> | string
    firstSeenAt?: DateTimeFilter<"Page"> | Date | string
    lastSeenAt?: DateTimeFilter<"Page"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    audits?: AuditListRelationFilter
  }, "id" | "projectId_normalizedUrl">

  export type PageOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    normalizedUrl?: SortOrder
    path?: SortOrder
    firstSeenAt?: SortOrder
    lastSeenAt?: SortOrder
    _count?: PageCountOrderByAggregateInput
    _max?: PageMaxOrderByAggregateInput
    _min?: PageMinOrderByAggregateInput
  }

  export type PageScalarWhereWithAggregatesInput = {
    AND?: PageScalarWhereWithAggregatesInput | PageScalarWhereWithAggregatesInput[]
    OR?: PageScalarWhereWithAggregatesInput[]
    NOT?: PageScalarWhereWithAggregatesInput | PageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Page"> | string
    projectId?: StringWithAggregatesFilter<"Page"> | string
    normalizedUrl?: StringWithAggregatesFilter<"Page"> | string
    path?: StringWithAggregatesFilter<"Page"> | string
    firstSeenAt?: DateTimeWithAggregatesFilter<"Page"> | Date | string
    lastSeenAt?: DateTimeWithAggregatesFilter<"Page"> | Date | string
  }

  export type AuditWhereInput = {
    AND?: AuditWhereInput | AuditWhereInput[]
    OR?: AuditWhereInput[]
    NOT?: AuditWhereInput | AuditWhereInput[]
    id?: StringFilter<"Audit"> | string
    projectId?: StringFilter<"Audit"> | string
    pageId?: StringNullableFilter<"Audit"> | string | null
    source?: EnumAuditSourceFilter<"Audit"> | $Enums.AuditSource
    url?: StringFilter<"Audit"> | string
    title?: StringNullableFilter<"Audit"> | string | null
    overallScore?: IntFilter<"Audit"> | number
    onPageScore?: IntFilter<"Audit"> | number
    technicalScore?: IntFilter<"Audit"> | number
    contentScore?: IntFilter<"Audit"> | number
    performanceScore?: IntFilter<"Audit"> | number
    createdAt?: DateTimeFilter<"Audit"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    page?: XOR<PageNullableScalarRelationFilter, PageWhereInput> | null
    metrics?: XOR<AuditMetricsNullableScalarRelationFilter, AuditMetricsWhereInput> | null
    issues?: IssueListRelationFilter
    snapshot?: XOR<AuditSnapshotNullableScalarRelationFilter, AuditSnapshotWhereInput> | null
  }

  export type AuditOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    pageId?: SortOrderInput | SortOrder
    source?: SortOrder
    url?: SortOrder
    title?: SortOrderInput | SortOrder
    overallScore?: SortOrder
    onPageScore?: SortOrder
    technicalScore?: SortOrder
    contentScore?: SortOrder
    performanceScore?: SortOrder
    createdAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    page?: PageOrderByWithRelationInput
    metrics?: AuditMetricsOrderByWithRelationInput
    issues?: IssueOrderByRelationAggregateInput
    snapshot?: AuditSnapshotOrderByWithRelationInput
  }

  export type AuditWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditWhereInput | AuditWhereInput[]
    OR?: AuditWhereInput[]
    NOT?: AuditWhereInput | AuditWhereInput[]
    projectId?: StringFilter<"Audit"> | string
    pageId?: StringNullableFilter<"Audit"> | string | null
    source?: EnumAuditSourceFilter<"Audit"> | $Enums.AuditSource
    url?: StringFilter<"Audit"> | string
    title?: StringNullableFilter<"Audit"> | string | null
    overallScore?: IntFilter<"Audit"> | number
    onPageScore?: IntFilter<"Audit"> | number
    technicalScore?: IntFilter<"Audit"> | number
    contentScore?: IntFilter<"Audit"> | number
    performanceScore?: IntFilter<"Audit"> | number
    createdAt?: DateTimeFilter<"Audit"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    page?: XOR<PageNullableScalarRelationFilter, PageWhereInput> | null
    metrics?: XOR<AuditMetricsNullableScalarRelationFilter, AuditMetricsWhereInput> | null
    issues?: IssueListRelationFilter
    snapshot?: XOR<AuditSnapshotNullableScalarRelationFilter, AuditSnapshotWhereInput> | null
  }, "id">

  export type AuditOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    pageId?: SortOrderInput | SortOrder
    source?: SortOrder
    url?: SortOrder
    title?: SortOrderInput | SortOrder
    overallScore?: SortOrder
    onPageScore?: SortOrder
    technicalScore?: SortOrder
    contentScore?: SortOrder
    performanceScore?: SortOrder
    createdAt?: SortOrder
    _count?: AuditCountOrderByAggregateInput
    _avg?: AuditAvgOrderByAggregateInput
    _max?: AuditMaxOrderByAggregateInput
    _min?: AuditMinOrderByAggregateInput
    _sum?: AuditSumOrderByAggregateInput
  }

  export type AuditScalarWhereWithAggregatesInput = {
    AND?: AuditScalarWhereWithAggregatesInput | AuditScalarWhereWithAggregatesInput[]
    OR?: AuditScalarWhereWithAggregatesInput[]
    NOT?: AuditScalarWhereWithAggregatesInput | AuditScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Audit"> | string
    projectId?: StringWithAggregatesFilter<"Audit"> | string
    pageId?: StringNullableWithAggregatesFilter<"Audit"> | string | null
    source?: EnumAuditSourceWithAggregatesFilter<"Audit"> | $Enums.AuditSource
    url?: StringWithAggregatesFilter<"Audit"> | string
    title?: StringNullableWithAggregatesFilter<"Audit"> | string | null
    overallScore?: IntWithAggregatesFilter<"Audit"> | number
    onPageScore?: IntWithAggregatesFilter<"Audit"> | number
    technicalScore?: IntWithAggregatesFilter<"Audit"> | number
    contentScore?: IntWithAggregatesFilter<"Audit"> | number
    performanceScore?: IntWithAggregatesFilter<"Audit"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Audit"> | Date | string
  }

  export type AuditMetricsWhereInput = {
    AND?: AuditMetricsWhereInput | AuditMetricsWhereInput[]
    OR?: AuditMetricsWhereInput[]
    NOT?: AuditMetricsWhereInput | AuditMetricsWhereInput[]
    id?: StringFilter<"AuditMetrics"> | string
    auditId?: StringFilter<"AuditMetrics"> | string
    metaDescription?: StringNullableFilter<"AuditMetrics"> | string | null
    titleLength?: IntNullableFilter<"AuditMetrics"> | number | null
    metaDescriptionLength?: IntNullableFilter<"AuditMetrics"> | number | null
    h1Count?: IntNullableFilter<"AuditMetrics"> | number | null
    h2Count?: IntNullableFilter<"AuditMetrics"> | number | null
    h3Count?: IntNullableFilter<"AuditMetrics"> | number | null
    imagesTotal?: IntNullableFilter<"AuditMetrics"> | number | null
    imagesWithoutAlt?: IntNullableFilter<"AuditMetrics"> | number | null
    internalLinks?: IntNullableFilter<"AuditMetrics"> | number | null
    externalLinks?: IntNullableFilter<"AuditMetrics"> | number | null
    wordCount?: IntNullableFilter<"AuditMetrics"> | number | null
    hasCanonical?: BoolNullableFilter<"AuditMetrics"> | boolean | null
    canonicalUrl?: StringNullableFilter<"AuditMetrics"> | string | null
    hasMetaRobots?: BoolNullableFilter<"AuditMetrics"> | boolean | null
    metaRobotsContent?: StringNullableFilter<"AuditMetrics"> | string | null
    hasViewport?: BoolNullableFilter<"AuditMetrics"> | boolean | null
    hasSchema?: BoolNullableFilter<"AuditMetrics"> | boolean | null
    schemaTypes?: JsonNullableFilter<"AuditMetrics">
    openGraphPresent?: BoolNullableFilter<"AuditMetrics"> | boolean | null
    ogImage?: StringNullableFilter<"AuditMetrics"> | string | null
    twitterCardPresent?: BoolNullableFilter<"AuditMetrics"> | boolean | null
    lcpEstimateMs?: IntNullableFilter<"AuditMetrics"> | number | null
    domNodeCount?: IntNullableFilter<"AuditMetrics"> | number | null
    jsRequestCount?: IntNullableFilter<"AuditMetrics"> | number | null
    cssRequestCount?: IntNullableFilter<"AuditMetrics"> | number | null
    audit?: XOR<AuditScalarRelationFilter, AuditWhereInput>
  }

  export type AuditMetricsOrderByWithRelationInput = {
    id?: SortOrder
    auditId?: SortOrder
    metaDescription?: SortOrderInput | SortOrder
    titleLength?: SortOrderInput | SortOrder
    metaDescriptionLength?: SortOrderInput | SortOrder
    h1Count?: SortOrderInput | SortOrder
    h2Count?: SortOrderInput | SortOrder
    h3Count?: SortOrderInput | SortOrder
    imagesTotal?: SortOrderInput | SortOrder
    imagesWithoutAlt?: SortOrderInput | SortOrder
    internalLinks?: SortOrderInput | SortOrder
    externalLinks?: SortOrderInput | SortOrder
    wordCount?: SortOrderInput | SortOrder
    hasCanonical?: SortOrderInput | SortOrder
    canonicalUrl?: SortOrderInput | SortOrder
    hasMetaRobots?: SortOrderInput | SortOrder
    metaRobotsContent?: SortOrderInput | SortOrder
    hasViewport?: SortOrderInput | SortOrder
    hasSchema?: SortOrderInput | SortOrder
    schemaTypes?: SortOrderInput | SortOrder
    openGraphPresent?: SortOrderInput | SortOrder
    ogImage?: SortOrderInput | SortOrder
    twitterCardPresent?: SortOrderInput | SortOrder
    lcpEstimateMs?: SortOrderInput | SortOrder
    domNodeCount?: SortOrderInput | SortOrder
    jsRequestCount?: SortOrderInput | SortOrder
    cssRequestCount?: SortOrderInput | SortOrder
    audit?: AuditOrderByWithRelationInput
  }

  export type AuditMetricsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    auditId?: string
    AND?: AuditMetricsWhereInput | AuditMetricsWhereInput[]
    OR?: AuditMetricsWhereInput[]
    NOT?: AuditMetricsWhereInput | AuditMetricsWhereInput[]
    metaDescription?: StringNullableFilter<"AuditMetrics"> | string | null
    titleLength?: IntNullableFilter<"AuditMetrics"> | number | null
    metaDescriptionLength?: IntNullableFilter<"AuditMetrics"> | number | null
    h1Count?: IntNullableFilter<"AuditMetrics"> | number | null
    h2Count?: IntNullableFilter<"AuditMetrics"> | number | null
    h3Count?: IntNullableFilter<"AuditMetrics"> | number | null
    imagesTotal?: IntNullableFilter<"AuditMetrics"> | number | null
    imagesWithoutAlt?: IntNullableFilter<"AuditMetrics"> | number | null
    internalLinks?: IntNullableFilter<"AuditMetrics"> | number | null
    externalLinks?: IntNullableFilter<"AuditMetrics"> | number | null
    wordCount?: IntNullableFilter<"AuditMetrics"> | number | null
    hasCanonical?: BoolNullableFilter<"AuditMetrics"> | boolean | null
    canonicalUrl?: StringNullableFilter<"AuditMetrics"> | string | null
    hasMetaRobots?: BoolNullableFilter<"AuditMetrics"> | boolean | null
    metaRobotsContent?: StringNullableFilter<"AuditMetrics"> | string | null
    hasViewport?: BoolNullableFilter<"AuditMetrics"> | boolean | null
    hasSchema?: BoolNullableFilter<"AuditMetrics"> | boolean | null
    schemaTypes?: JsonNullableFilter<"AuditMetrics">
    openGraphPresent?: BoolNullableFilter<"AuditMetrics"> | boolean | null
    ogImage?: StringNullableFilter<"AuditMetrics"> | string | null
    twitterCardPresent?: BoolNullableFilter<"AuditMetrics"> | boolean | null
    lcpEstimateMs?: IntNullableFilter<"AuditMetrics"> | number | null
    domNodeCount?: IntNullableFilter<"AuditMetrics"> | number | null
    jsRequestCount?: IntNullableFilter<"AuditMetrics"> | number | null
    cssRequestCount?: IntNullableFilter<"AuditMetrics"> | number | null
    audit?: XOR<AuditScalarRelationFilter, AuditWhereInput>
  }, "id" | "auditId">

  export type AuditMetricsOrderByWithAggregationInput = {
    id?: SortOrder
    auditId?: SortOrder
    metaDescription?: SortOrderInput | SortOrder
    titleLength?: SortOrderInput | SortOrder
    metaDescriptionLength?: SortOrderInput | SortOrder
    h1Count?: SortOrderInput | SortOrder
    h2Count?: SortOrderInput | SortOrder
    h3Count?: SortOrderInput | SortOrder
    imagesTotal?: SortOrderInput | SortOrder
    imagesWithoutAlt?: SortOrderInput | SortOrder
    internalLinks?: SortOrderInput | SortOrder
    externalLinks?: SortOrderInput | SortOrder
    wordCount?: SortOrderInput | SortOrder
    hasCanonical?: SortOrderInput | SortOrder
    canonicalUrl?: SortOrderInput | SortOrder
    hasMetaRobots?: SortOrderInput | SortOrder
    metaRobotsContent?: SortOrderInput | SortOrder
    hasViewport?: SortOrderInput | SortOrder
    hasSchema?: SortOrderInput | SortOrder
    schemaTypes?: SortOrderInput | SortOrder
    openGraphPresent?: SortOrderInput | SortOrder
    ogImage?: SortOrderInput | SortOrder
    twitterCardPresent?: SortOrderInput | SortOrder
    lcpEstimateMs?: SortOrderInput | SortOrder
    domNodeCount?: SortOrderInput | SortOrder
    jsRequestCount?: SortOrderInput | SortOrder
    cssRequestCount?: SortOrderInput | SortOrder
    _count?: AuditMetricsCountOrderByAggregateInput
    _avg?: AuditMetricsAvgOrderByAggregateInput
    _max?: AuditMetricsMaxOrderByAggregateInput
    _min?: AuditMetricsMinOrderByAggregateInput
    _sum?: AuditMetricsSumOrderByAggregateInput
  }

  export type AuditMetricsScalarWhereWithAggregatesInput = {
    AND?: AuditMetricsScalarWhereWithAggregatesInput | AuditMetricsScalarWhereWithAggregatesInput[]
    OR?: AuditMetricsScalarWhereWithAggregatesInput[]
    NOT?: AuditMetricsScalarWhereWithAggregatesInput | AuditMetricsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditMetrics"> | string
    auditId?: StringWithAggregatesFilter<"AuditMetrics"> | string
    metaDescription?: StringNullableWithAggregatesFilter<"AuditMetrics"> | string | null
    titleLength?: IntNullableWithAggregatesFilter<"AuditMetrics"> | number | null
    metaDescriptionLength?: IntNullableWithAggregatesFilter<"AuditMetrics"> | number | null
    h1Count?: IntNullableWithAggregatesFilter<"AuditMetrics"> | number | null
    h2Count?: IntNullableWithAggregatesFilter<"AuditMetrics"> | number | null
    h3Count?: IntNullableWithAggregatesFilter<"AuditMetrics"> | number | null
    imagesTotal?: IntNullableWithAggregatesFilter<"AuditMetrics"> | number | null
    imagesWithoutAlt?: IntNullableWithAggregatesFilter<"AuditMetrics"> | number | null
    internalLinks?: IntNullableWithAggregatesFilter<"AuditMetrics"> | number | null
    externalLinks?: IntNullableWithAggregatesFilter<"AuditMetrics"> | number | null
    wordCount?: IntNullableWithAggregatesFilter<"AuditMetrics"> | number | null
    hasCanonical?: BoolNullableWithAggregatesFilter<"AuditMetrics"> | boolean | null
    canonicalUrl?: StringNullableWithAggregatesFilter<"AuditMetrics"> | string | null
    hasMetaRobots?: BoolNullableWithAggregatesFilter<"AuditMetrics"> | boolean | null
    metaRobotsContent?: StringNullableWithAggregatesFilter<"AuditMetrics"> | string | null
    hasViewport?: BoolNullableWithAggregatesFilter<"AuditMetrics"> | boolean | null
    hasSchema?: BoolNullableWithAggregatesFilter<"AuditMetrics"> | boolean | null
    schemaTypes?: JsonNullableWithAggregatesFilter<"AuditMetrics">
    openGraphPresent?: BoolNullableWithAggregatesFilter<"AuditMetrics"> | boolean | null
    ogImage?: StringNullableWithAggregatesFilter<"AuditMetrics"> | string | null
    twitterCardPresent?: BoolNullableWithAggregatesFilter<"AuditMetrics"> | boolean | null
    lcpEstimateMs?: IntNullableWithAggregatesFilter<"AuditMetrics"> | number | null
    domNodeCount?: IntNullableWithAggregatesFilter<"AuditMetrics"> | number | null
    jsRequestCount?: IntNullableWithAggregatesFilter<"AuditMetrics"> | number | null
    cssRequestCount?: IntNullableWithAggregatesFilter<"AuditMetrics"> | number | null
  }

  export type IssueWhereInput = {
    AND?: IssueWhereInput | IssueWhereInput[]
    OR?: IssueWhereInput[]
    NOT?: IssueWhereInput | IssueWhereInput[]
    id?: StringFilter<"Issue"> | string
    auditId?: StringFilter<"Issue"> | string
    code?: StringFilter<"Issue"> | string
    category?: StringFilter<"Issue"> | string
    severity?: EnumSeverityFilter<"Issue"> | $Enums.Severity
    status?: EnumIssueStatusFilter<"Issue"> | $Enums.IssueStatus
    title?: StringFilter<"Issue"> | string
    message?: StringFilter<"Issue"> | string
    recommendation?: StringFilter<"Issue"> | string
    selector?: StringNullableFilter<"Issue"> | string | null
    evidence?: JsonNullableFilter<"Issue">
    createdAt?: DateTimeFilter<"Issue"> | Date | string
    updatedAt?: DateTimeFilter<"Issue"> | Date | string
    audit?: XOR<AuditScalarRelationFilter, AuditWhereInput>
    history?: IssueStatusHistoryListRelationFilter
  }

  export type IssueOrderByWithRelationInput = {
    id?: SortOrder
    auditId?: SortOrder
    code?: SortOrder
    category?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    title?: SortOrder
    message?: SortOrder
    recommendation?: SortOrder
    selector?: SortOrderInput | SortOrder
    evidence?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    audit?: AuditOrderByWithRelationInput
    history?: IssueStatusHistoryOrderByRelationAggregateInput
  }

  export type IssueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IssueWhereInput | IssueWhereInput[]
    OR?: IssueWhereInput[]
    NOT?: IssueWhereInput | IssueWhereInput[]
    auditId?: StringFilter<"Issue"> | string
    code?: StringFilter<"Issue"> | string
    category?: StringFilter<"Issue"> | string
    severity?: EnumSeverityFilter<"Issue"> | $Enums.Severity
    status?: EnumIssueStatusFilter<"Issue"> | $Enums.IssueStatus
    title?: StringFilter<"Issue"> | string
    message?: StringFilter<"Issue"> | string
    recommendation?: StringFilter<"Issue"> | string
    selector?: StringNullableFilter<"Issue"> | string | null
    evidence?: JsonNullableFilter<"Issue">
    createdAt?: DateTimeFilter<"Issue"> | Date | string
    updatedAt?: DateTimeFilter<"Issue"> | Date | string
    audit?: XOR<AuditScalarRelationFilter, AuditWhereInput>
    history?: IssueStatusHistoryListRelationFilter
  }, "id">

  export type IssueOrderByWithAggregationInput = {
    id?: SortOrder
    auditId?: SortOrder
    code?: SortOrder
    category?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    title?: SortOrder
    message?: SortOrder
    recommendation?: SortOrder
    selector?: SortOrderInput | SortOrder
    evidence?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IssueCountOrderByAggregateInput
    _max?: IssueMaxOrderByAggregateInput
    _min?: IssueMinOrderByAggregateInput
  }

  export type IssueScalarWhereWithAggregatesInput = {
    AND?: IssueScalarWhereWithAggregatesInput | IssueScalarWhereWithAggregatesInput[]
    OR?: IssueScalarWhereWithAggregatesInput[]
    NOT?: IssueScalarWhereWithAggregatesInput | IssueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Issue"> | string
    auditId?: StringWithAggregatesFilter<"Issue"> | string
    code?: StringWithAggregatesFilter<"Issue"> | string
    category?: StringWithAggregatesFilter<"Issue"> | string
    severity?: EnumSeverityWithAggregatesFilter<"Issue"> | $Enums.Severity
    status?: EnumIssueStatusWithAggregatesFilter<"Issue"> | $Enums.IssueStatus
    title?: StringWithAggregatesFilter<"Issue"> | string
    message?: StringWithAggregatesFilter<"Issue"> | string
    recommendation?: StringWithAggregatesFilter<"Issue"> | string
    selector?: StringNullableWithAggregatesFilter<"Issue"> | string | null
    evidence?: JsonNullableWithAggregatesFilter<"Issue">
    createdAt?: DateTimeWithAggregatesFilter<"Issue"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Issue"> | Date | string
  }

  export type IssueStatusHistoryWhereInput = {
    AND?: IssueStatusHistoryWhereInput | IssueStatusHistoryWhereInput[]
    OR?: IssueStatusHistoryWhereInput[]
    NOT?: IssueStatusHistoryWhereInput | IssueStatusHistoryWhereInput[]
    id?: StringFilter<"IssueStatusHistory"> | string
    issueId?: StringFilter<"IssueStatusHistory"> | string
    fromStatus?: EnumIssueStatusNullableFilter<"IssueStatusHistory"> | $Enums.IssueStatus | null
    toStatus?: EnumIssueStatusFilter<"IssueStatusHistory"> | $Enums.IssueStatus
    changedById?: StringNullableFilter<"IssueStatusHistory"> | string | null
    changedAt?: DateTimeFilter<"IssueStatusHistory"> | Date | string
    issue?: XOR<IssueScalarRelationFilter, IssueWhereInput>
  }

  export type IssueStatusHistoryOrderByWithRelationInput = {
    id?: SortOrder
    issueId?: SortOrder
    fromStatus?: SortOrderInput | SortOrder
    toStatus?: SortOrder
    changedById?: SortOrderInput | SortOrder
    changedAt?: SortOrder
    issue?: IssueOrderByWithRelationInput
  }

  export type IssueStatusHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IssueStatusHistoryWhereInput | IssueStatusHistoryWhereInput[]
    OR?: IssueStatusHistoryWhereInput[]
    NOT?: IssueStatusHistoryWhereInput | IssueStatusHistoryWhereInput[]
    issueId?: StringFilter<"IssueStatusHistory"> | string
    fromStatus?: EnumIssueStatusNullableFilter<"IssueStatusHistory"> | $Enums.IssueStatus | null
    toStatus?: EnumIssueStatusFilter<"IssueStatusHistory"> | $Enums.IssueStatus
    changedById?: StringNullableFilter<"IssueStatusHistory"> | string | null
    changedAt?: DateTimeFilter<"IssueStatusHistory"> | Date | string
    issue?: XOR<IssueScalarRelationFilter, IssueWhereInput>
  }, "id">

  export type IssueStatusHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    issueId?: SortOrder
    fromStatus?: SortOrderInput | SortOrder
    toStatus?: SortOrder
    changedById?: SortOrderInput | SortOrder
    changedAt?: SortOrder
    _count?: IssueStatusHistoryCountOrderByAggregateInput
    _max?: IssueStatusHistoryMaxOrderByAggregateInput
    _min?: IssueStatusHistoryMinOrderByAggregateInput
  }

  export type IssueStatusHistoryScalarWhereWithAggregatesInput = {
    AND?: IssueStatusHistoryScalarWhereWithAggregatesInput | IssueStatusHistoryScalarWhereWithAggregatesInput[]
    OR?: IssueStatusHistoryScalarWhereWithAggregatesInput[]
    NOT?: IssueStatusHistoryScalarWhereWithAggregatesInput | IssueStatusHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IssueStatusHistory"> | string
    issueId?: StringWithAggregatesFilter<"IssueStatusHistory"> | string
    fromStatus?: EnumIssueStatusNullableWithAggregatesFilter<"IssueStatusHistory"> | $Enums.IssueStatus | null
    toStatus?: EnumIssueStatusWithAggregatesFilter<"IssueStatusHistory"> | $Enums.IssueStatus
    changedById?: StringNullableWithAggregatesFilter<"IssueStatusHistory"> | string | null
    changedAt?: DateTimeWithAggregatesFilter<"IssueStatusHistory"> | Date | string
  }

  export type AuditSnapshotWhereInput = {
    AND?: AuditSnapshotWhereInput | AuditSnapshotWhereInput[]
    OR?: AuditSnapshotWhereInput[]
    NOT?: AuditSnapshotWhereInput | AuditSnapshotWhereInput[]
    id?: StringFilter<"AuditSnapshot"> | string
    auditId?: StringFilter<"AuditSnapshot"> | string
    rawPayload?: JsonFilter<"AuditSnapshot">
    createdAt?: DateTimeFilter<"AuditSnapshot"> | Date | string
    audit?: XOR<AuditScalarRelationFilter, AuditWhereInput>
  }

  export type AuditSnapshotOrderByWithRelationInput = {
    id?: SortOrder
    auditId?: SortOrder
    rawPayload?: SortOrder
    createdAt?: SortOrder
    audit?: AuditOrderByWithRelationInput
  }

  export type AuditSnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    auditId?: string
    AND?: AuditSnapshotWhereInput | AuditSnapshotWhereInput[]
    OR?: AuditSnapshotWhereInput[]
    NOT?: AuditSnapshotWhereInput | AuditSnapshotWhereInput[]
    rawPayload?: JsonFilter<"AuditSnapshot">
    createdAt?: DateTimeFilter<"AuditSnapshot"> | Date | string
    audit?: XOR<AuditScalarRelationFilter, AuditWhereInput>
  }, "id" | "auditId">

  export type AuditSnapshotOrderByWithAggregationInput = {
    id?: SortOrder
    auditId?: SortOrder
    rawPayload?: SortOrder
    createdAt?: SortOrder
    _count?: AuditSnapshotCountOrderByAggregateInput
    _max?: AuditSnapshotMaxOrderByAggregateInput
    _min?: AuditSnapshotMinOrderByAggregateInput
  }

  export type AuditSnapshotScalarWhereWithAggregatesInput = {
    AND?: AuditSnapshotScalarWhereWithAggregatesInput | AuditSnapshotScalarWhereWithAggregatesInput[]
    OR?: AuditSnapshotScalarWhereWithAggregatesInput[]
    NOT?: AuditSnapshotScalarWhereWithAggregatesInput | AuditSnapshotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditSnapshot"> | string
    auditId?: StringWithAggregatesFilter<"AuditSnapshot"> | string
    rawPayload?: JsonWithAggregatesFilter<"AuditSnapshot">
    createdAt?: DateTimeWithAggregatesFilter<"AuditSnapshot"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: ProjectMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: ProjectMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    domain: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pages?: PageCreateNestedManyWithoutProjectInput
    audits?: AuditCreateNestedManyWithoutProjectInput
    members?: ProjectMemberCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    domain: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pages?: PageUncheckedCreateNestedManyWithoutProjectInput
    audits?: AuditUncheckedCreateNestedManyWithoutProjectInput
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: PageUpdateManyWithoutProjectNestedInput
    audits?: AuditUpdateManyWithoutProjectNestedInput
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: PageUncheckedUpdateManyWithoutProjectNestedInput
    audits?: AuditUncheckedUpdateManyWithoutProjectNestedInput
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    name: string
    domain: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMemberCreateInput = {
    id?: string
    role: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMembershipsInput
    project: ProjectCreateNestedOneWithoutMembersInput
  }

  export type ProjectMemberUncheckedCreateInput = {
    id?: string
    userId: string
    projectId: string
    role: string
    createdAt?: Date | string
  }

  export type ProjectMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
    project?: ProjectUpdateOneRequiredWithoutMembersNestedInput
  }

  export type ProjectMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMemberCreateManyInput = {
    id?: string
    userId: string
    projectId: string
    role: string
    createdAt?: Date | string
  }

  export type ProjectMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageCreateInput = {
    id?: string
    normalizedUrl: string
    path: string
    firstSeenAt?: Date | string
    lastSeenAt?: Date | string
    project: ProjectCreateNestedOneWithoutPagesInput
    audits?: AuditCreateNestedManyWithoutPageInput
  }

  export type PageUncheckedCreateInput = {
    id?: string
    projectId: string
    normalizedUrl: string
    path: string
    firstSeenAt?: Date | string
    lastSeenAt?: Date | string
    audits?: AuditUncheckedCreateNestedManyWithoutPageInput
  }

  export type PageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    normalizedUrl?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutPagesNestedInput
    audits?: AuditUpdateManyWithoutPageNestedInput
  }

  export type PageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    normalizedUrl?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    audits?: AuditUncheckedUpdateManyWithoutPageNestedInput
  }

  export type PageCreateManyInput = {
    id?: string
    projectId: string
    normalizedUrl: string
    path: string
    firstSeenAt?: Date | string
    lastSeenAt?: Date | string
  }

  export type PageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    normalizedUrl?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    normalizedUrl?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditCreateInput = {
    id?: string
    source?: $Enums.AuditSource
    url: string
    title?: string | null
    overallScore: number
    onPageScore: number
    technicalScore: number
    contentScore: number
    performanceScore: number
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutAuditsInput
    page?: PageCreateNestedOneWithoutAuditsInput
    metrics?: AuditMetricsCreateNestedOneWithoutAuditInput
    issues?: IssueCreateNestedManyWithoutAuditInput
    snapshot?: AuditSnapshotCreateNestedOneWithoutAuditInput
  }

  export type AuditUncheckedCreateInput = {
    id?: string
    projectId: string
    pageId?: string | null
    source?: $Enums.AuditSource
    url: string
    title?: string | null
    overallScore: number
    onPageScore: number
    technicalScore: number
    contentScore: number
    performanceScore: number
    createdAt?: Date | string
    metrics?: AuditMetricsUncheckedCreateNestedOneWithoutAuditInput
    issues?: IssueUncheckedCreateNestedManyWithoutAuditInput
    snapshot?: AuditSnapshotUncheckedCreateNestedOneWithoutAuditInput
  }

  export type AuditUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumAuditSourceFieldUpdateOperationsInput | $Enums.AuditSource
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    overallScore?: IntFieldUpdateOperationsInput | number
    onPageScore?: IntFieldUpdateOperationsInput | number
    technicalScore?: IntFieldUpdateOperationsInput | number
    contentScore?: IntFieldUpdateOperationsInput | number
    performanceScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutAuditsNestedInput
    page?: PageUpdateOneWithoutAuditsNestedInput
    metrics?: AuditMetricsUpdateOneWithoutAuditNestedInput
    issues?: IssueUpdateManyWithoutAuditNestedInput
    snapshot?: AuditSnapshotUpdateOneWithoutAuditNestedInput
  }

  export type AuditUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    pageId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumAuditSourceFieldUpdateOperationsInput | $Enums.AuditSource
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    overallScore?: IntFieldUpdateOperationsInput | number
    onPageScore?: IntFieldUpdateOperationsInput | number
    technicalScore?: IntFieldUpdateOperationsInput | number
    contentScore?: IntFieldUpdateOperationsInput | number
    performanceScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metrics?: AuditMetricsUncheckedUpdateOneWithoutAuditNestedInput
    issues?: IssueUncheckedUpdateManyWithoutAuditNestedInput
    snapshot?: AuditSnapshotUncheckedUpdateOneWithoutAuditNestedInput
  }

  export type AuditCreateManyInput = {
    id?: string
    projectId: string
    pageId?: string | null
    source?: $Enums.AuditSource
    url: string
    title?: string | null
    overallScore: number
    onPageScore: number
    technicalScore: number
    contentScore: number
    performanceScore: number
    createdAt?: Date | string
  }

  export type AuditUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumAuditSourceFieldUpdateOperationsInput | $Enums.AuditSource
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    overallScore?: IntFieldUpdateOperationsInput | number
    onPageScore?: IntFieldUpdateOperationsInput | number
    technicalScore?: IntFieldUpdateOperationsInput | number
    contentScore?: IntFieldUpdateOperationsInput | number
    performanceScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    pageId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumAuditSourceFieldUpdateOperationsInput | $Enums.AuditSource
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    overallScore?: IntFieldUpdateOperationsInput | number
    onPageScore?: IntFieldUpdateOperationsInput | number
    technicalScore?: IntFieldUpdateOperationsInput | number
    contentScore?: IntFieldUpdateOperationsInput | number
    performanceScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditMetricsCreateInput = {
    id?: string
    metaDescription?: string | null
    titleLength?: number | null
    metaDescriptionLength?: number | null
    h1Count?: number | null
    h2Count?: number | null
    h3Count?: number | null
    imagesTotal?: number | null
    imagesWithoutAlt?: number | null
    internalLinks?: number | null
    externalLinks?: number | null
    wordCount?: number | null
    hasCanonical?: boolean | null
    canonicalUrl?: string | null
    hasMetaRobots?: boolean | null
    metaRobotsContent?: string | null
    hasViewport?: boolean | null
    hasSchema?: boolean | null
    schemaTypes?: NullableJsonNullValueInput | InputJsonValue
    openGraphPresent?: boolean | null
    ogImage?: string | null
    twitterCardPresent?: boolean | null
    lcpEstimateMs?: number | null
    domNodeCount?: number | null
    jsRequestCount?: number | null
    cssRequestCount?: number | null
    audit: AuditCreateNestedOneWithoutMetricsInput
  }

  export type AuditMetricsUncheckedCreateInput = {
    id?: string
    auditId: string
    metaDescription?: string | null
    titleLength?: number | null
    metaDescriptionLength?: number | null
    h1Count?: number | null
    h2Count?: number | null
    h3Count?: number | null
    imagesTotal?: number | null
    imagesWithoutAlt?: number | null
    internalLinks?: number | null
    externalLinks?: number | null
    wordCount?: number | null
    hasCanonical?: boolean | null
    canonicalUrl?: string | null
    hasMetaRobots?: boolean | null
    metaRobotsContent?: string | null
    hasViewport?: boolean | null
    hasSchema?: boolean | null
    schemaTypes?: NullableJsonNullValueInput | InputJsonValue
    openGraphPresent?: boolean | null
    ogImage?: string | null
    twitterCardPresent?: boolean | null
    lcpEstimateMs?: number | null
    domNodeCount?: number | null
    jsRequestCount?: number | null
    cssRequestCount?: number | null
  }

  export type AuditMetricsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    titleLength?: NullableIntFieldUpdateOperationsInput | number | null
    metaDescriptionLength?: NullableIntFieldUpdateOperationsInput | number | null
    h1Count?: NullableIntFieldUpdateOperationsInput | number | null
    h2Count?: NullableIntFieldUpdateOperationsInput | number | null
    h3Count?: NullableIntFieldUpdateOperationsInput | number | null
    imagesTotal?: NullableIntFieldUpdateOperationsInput | number | null
    imagesWithoutAlt?: NullableIntFieldUpdateOperationsInput | number | null
    internalLinks?: NullableIntFieldUpdateOperationsInput | number | null
    externalLinks?: NullableIntFieldUpdateOperationsInput | number | null
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    hasCanonical?: NullableBoolFieldUpdateOperationsInput | boolean | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasMetaRobots?: NullableBoolFieldUpdateOperationsInput | boolean | null
    metaRobotsContent?: NullableStringFieldUpdateOperationsInput | string | null
    hasViewport?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasSchema?: NullableBoolFieldUpdateOperationsInput | boolean | null
    schemaTypes?: NullableJsonNullValueInput | InputJsonValue
    openGraphPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    twitterCardPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lcpEstimateMs?: NullableIntFieldUpdateOperationsInput | number | null
    domNodeCount?: NullableIntFieldUpdateOperationsInput | number | null
    jsRequestCount?: NullableIntFieldUpdateOperationsInput | number | null
    cssRequestCount?: NullableIntFieldUpdateOperationsInput | number | null
    audit?: AuditUpdateOneRequiredWithoutMetricsNestedInput
  }

  export type AuditMetricsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    auditId?: StringFieldUpdateOperationsInput | string
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    titleLength?: NullableIntFieldUpdateOperationsInput | number | null
    metaDescriptionLength?: NullableIntFieldUpdateOperationsInput | number | null
    h1Count?: NullableIntFieldUpdateOperationsInput | number | null
    h2Count?: NullableIntFieldUpdateOperationsInput | number | null
    h3Count?: NullableIntFieldUpdateOperationsInput | number | null
    imagesTotal?: NullableIntFieldUpdateOperationsInput | number | null
    imagesWithoutAlt?: NullableIntFieldUpdateOperationsInput | number | null
    internalLinks?: NullableIntFieldUpdateOperationsInput | number | null
    externalLinks?: NullableIntFieldUpdateOperationsInput | number | null
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    hasCanonical?: NullableBoolFieldUpdateOperationsInput | boolean | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasMetaRobots?: NullableBoolFieldUpdateOperationsInput | boolean | null
    metaRobotsContent?: NullableStringFieldUpdateOperationsInput | string | null
    hasViewport?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasSchema?: NullableBoolFieldUpdateOperationsInput | boolean | null
    schemaTypes?: NullableJsonNullValueInput | InputJsonValue
    openGraphPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    twitterCardPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lcpEstimateMs?: NullableIntFieldUpdateOperationsInput | number | null
    domNodeCount?: NullableIntFieldUpdateOperationsInput | number | null
    jsRequestCount?: NullableIntFieldUpdateOperationsInput | number | null
    cssRequestCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AuditMetricsCreateManyInput = {
    id?: string
    auditId: string
    metaDescription?: string | null
    titleLength?: number | null
    metaDescriptionLength?: number | null
    h1Count?: number | null
    h2Count?: number | null
    h3Count?: number | null
    imagesTotal?: number | null
    imagesWithoutAlt?: number | null
    internalLinks?: number | null
    externalLinks?: number | null
    wordCount?: number | null
    hasCanonical?: boolean | null
    canonicalUrl?: string | null
    hasMetaRobots?: boolean | null
    metaRobotsContent?: string | null
    hasViewport?: boolean | null
    hasSchema?: boolean | null
    schemaTypes?: NullableJsonNullValueInput | InputJsonValue
    openGraphPresent?: boolean | null
    ogImage?: string | null
    twitterCardPresent?: boolean | null
    lcpEstimateMs?: number | null
    domNodeCount?: number | null
    jsRequestCount?: number | null
    cssRequestCount?: number | null
  }

  export type AuditMetricsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    titleLength?: NullableIntFieldUpdateOperationsInput | number | null
    metaDescriptionLength?: NullableIntFieldUpdateOperationsInput | number | null
    h1Count?: NullableIntFieldUpdateOperationsInput | number | null
    h2Count?: NullableIntFieldUpdateOperationsInput | number | null
    h3Count?: NullableIntFieldUpdateOperationsInput | number | null
    imagesTotal?: NullableIntFieldUpdateOperationsInput | number | null
    imagesWithoutAlt?: NullableIntFieldUpdateOperationsInput | number | null
    internalLinks?: NullableIntFieldUpdateOperationsInput | number | null
    externalLinks?: NullableIntFieldUpdateOperationsInput | number | null
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    hasCanonical?: NullableBoolFieldUpdateOperationsInput | boolean | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasMetaRobots?: NullableBoolFieldUpdateOperationsInput | boolean | null
    metaRobotsContent?: NullableStringFieldUpdateOperationsInput | string | null
    hasViewport?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasSchema?: NullableBoolFieldUpdateOperationsInput | boolean | null
    schemaTypes?: NullableJsonNullValueInput | InputJsonValue
    openGraphPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    twitterCardPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lcpEstimateMs?: NullableIntFieldUpdateOperationsInput | number | null
    domNodeCount?: NullableIntFieldUpdateOperationsInput | number | null
    jsRequestCount?: NullableIntFieldUpdateOperationsInput | number | null
    cssRequestCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AuditMetricsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    auditId?: StringFieldUpdateOperationsInput | string
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    titleLength?: NullableIntFieldUpdateOperationsInput | number | null
    metaDescriptionLength?: NullableIntFieldUpdateOperationsInput | number | null
    h1Count?: NullableIntFieldUpdateOperationsInput | number | null
    h2Count?: NullableIntFieldUpdateOperationsInput | number | null
    h3Count?: NullableIntFieldUpdateOperationsInput | number | null
    imagesTotal?: NullableIntFieldUpdateOperationsInput | number | null
    imagesWithoutAlt?: NullableIntFieldUpdateOperationsInput | number | null
    internalLinks?: NullableIntFieldUpdateOperationsInput | number | null
    externalLinks?: NullableIntFieldUpdateOperationsInput | number | null
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    hasCanonical?: NullableBoolFieldUpdateOperationsInput | boolean | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasMetaRobots?: NullableBoolFieldUpdateOperationsInput | boolean | null
    metaRobotsContent?: NullableStringFieldUpdateOperationsInput | string | null
    hasViewport?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasSchema?: NullableBoolFieldUpdateOperationsInput | boolean | null
    schemaTypes?: NullableJsonNullValueInput | InputJsonValue
    openGraphPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    twitterCardPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lcpEstimateMs?: NullableIntFieldUpdateOperationsInput | number | null
    domNodeCount?: NullableIntFieldUpdateOperationsInput | number | null
    jsRequestCount?: NullableIntFieldUpdateOperationsInput | number | null
    cssRequestCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IssueCreateInput = {
    id?: string
    code: string
    category: string
    severity: $Enums.Severity
    status?: $Enums.IssueStatus
    title: string
    message: string
    recommendation: string
    selector?: string | null
    evidence?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    audit: AuditCreateNestedOneWithoutIssuesInput
    history?: IssueStatusHistoryCreateNestedManyWithoutIssueInput
  }

  export type IssueUncheckedCreateInput = {
    id?: string
    auditId: string
    code: string
    category: string
    severity: $Enums.Severity
    status?: $Enums.IssueStatus
    title: string
    message: string
    recommendation: string
    selector?: string | null
    evidence?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: IssueStatusHistoryUncheckedCreateNestedManyWithoutIssueInput
  }

  export type IssueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    recommendation?: StringFieldUpdateOperationsInput | string
    selector?: NullableStringFieldUpdateOperationsInput | string | null
    evidence?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    audit?: AuditUpdateOneRequiredWithoutIssuesNestedInput
    history?: IssueStatusHistoryUpdateManyWithoutIssueNestedInput
  }

  export type IssueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    auditId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    recommendation?: StringFieldUpdateOperationsInput | string
    selector?: NullableStringFieldUpdateOperationsInput | string | null
    evidence?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: IssueStatusHistoryUncheckedUpdateManyWithoutIssueNestedInput
  }

  export type IssueCreateManyInput = {
    id?: string
    auditId: string
    code: string
    category: string
    severity: $Enums.Severity
    status?: $Enums.IssueStatus
    title: string
    message: string
    recommendation: string
    selector?: string | null
    evidence?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IssueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    recommendation?: StringFieldUpdateOperationsInput | string
    selector?: NullableStringFieldUpdateOperationsInput | string | null
    evidence?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    auditId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    recommendation?: StringFieldUpdateOperationsInput | string
    selector?: NullableStringFieldUpdateOperationsInput | string | null
    evidence?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssueStatusHistoryCreateInput = {
    id?: string
    fromStatus?: $Enums.IssueStatus | null
    toStatus: $Enums.IssueStatus
    changedById?: string | null
    changedAt?: Date | string
    issue: IssueCreateNestedOneWithoutHistoryInput
  }

  export type IssueStatusHistoryUncheckedCreateInput = {
    id?: string
    issueId: string
    fromStatus?: $Enums.IssueStatus | null
    toStatus: $Enums.IssueStatus
    changedById?: string | null
    changedAt?: Date | string
  }

  export type IssueStatusHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus | null
    toStatus?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    changedById?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issue?: IssueUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type IssueStatusHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    issueId?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus | null
    toStatus?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    changedById?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssueStatusHistoryCreateManyInput = {
    id?: string
    issueId: string
    fromStatus?: $Enums.IssueStatus | null
    toStatus: $Enums.IssueStatus
    changedById?: string | null
    changedAt?: Date | string
  }

  export type IssueStatusHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus | null
    toStatus?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    changedById?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssueStatusHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    issueId?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus | null
    toStatus?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    changedById?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditSnapshotCreateInput = {
    id?: string
    rawPayload: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    audit: AuditCreateNestedOneWithoutSnapshotInput
  }

  export type AuditSnapshotUncheckedCreateInput = {
    id?: string
    auditId: string
    rawPayload: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditSnapshotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawPayload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    audit?: AuditUpdateOneRequiredWithoutSnapshotNestedInput
  }

  export type AuditSnapshotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    auditId?: StringFieldUpdateOperationsInput | string
    rawPayload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditSnapshotCreateManyInput = {
    id?: string
    auditId: string
    rawPayload: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditSnapshotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawPayload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditSnapshotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    auditId?: StringFieldUpdateOperationsInput | string
    rawPayload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ProjectMemberListRelationFilter = {
    every?: ProjectMemberWhereInput
    some?: ProjectMemberWhereInput
    none?: ProjectMemberWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type PageListRelationFilter = {
    every?: PageWhereInput
    some?: PageWhereInput
    none?: PageWhereInput
  }

  export type AuditListRelationFilter = {
    every?: AuditWhereInput
    some?: AuditWhereInput
    none?: AuditWhereInput
  }

  export type PageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ProjectMemberUserIdProjectIdCompoundUniqueInput = {
    userId: string
    projectId: string
  }

  export type ProjectMemberCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectMemberMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type PageProjectIdNormalizedUrlCompoundUniqueInput = {
    projectId: string
    normalizedUrl: string
  }

  export type PageCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    normalizedUrl?: SortOrder
    path?: SortOrder
    firstSeenAt?: SortOrder
    lastSeenAt?: SortOrder
  }

  export type PageMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    normalizedUrl?: SortOrder
    path?: SortOrder
    firstSeenAt?: SortOrder
    lastSeenAt?: SortOrder
  }

  export type PageMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    normalizedUrl?: SortOrder
    path?: SortOrder
    firstSeenAt?: SortOrder
    lastSeenAt?: SortOrder
  }

  export type EnumAuditSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditSource | EnumAuditSourceFieldRefInput<$PrismaModel>
    in?: $Enums.AuditSource[] | ListEnumAuditSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditSource[] | ListEnumAuditSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditSourceFilter<$PrismaModel> | $Enums.AuditSource
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

  export type PageNullableScalarRelationFilter = {
    is?: PageWhereInput | null
    isNot?: PageWhereInput | null
  }

  export type AuditMetricsNullableScalarRelationFilter = {
    is?: AuditMetricsWhereInput | null
    isNot?: AuditMetricsWhereInput | null
  }

  export type IssueListRelationFilter = {
    every?: IssueWhereInput
    some?: IssueWhereInput
    none?: IssueWhereInput
  }

  export type AuditSnapshotNullableScalarRelationFilter = {
    is?: AuditSnapshotWhereInput | null
    isNot?: AuditSnapshotWhereInput | null
  }

  export type IssueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    pageId?: SortOrder
    source?: SortOrder
    url?: SortOrder
    title?: SortOrder
    overallScore?: SortOrder
    onPageScore?: SortOrder
    technicalScore?: SortOrder
    contentScore?: SortOrder
    performanceScore?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditAvgOrderByAggregateInput = {
    overallScore?: SortOrder
    onPageScore?: SortOrder
    technicalScore?: SortOrder
    contentScore?: SortOrder
    performanceScore?: SortOrder
  }

  export type AuditMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    pageId?: SortOrder
    source?: SortOrder
    url?: SortOrder
    title?: SortOrder
    overallScore?: SortOrder
    onPageScore?: SortOrder
    technicalScore?: SortOrder
    contentScore?: SortOrder
    performanceScore?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    pageId?: SortOrder
    source?: SortOrder
    url?: SortOrder
    title?: SortOrder
    overallScore?: SortOrder
    onPageScore?: SortOrder
    technicalScore?: SortOrder
    contentScore?: SortOrder
    performanceScore?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditSumOrderByAggregateInput = {
    overallScore?: SortOrder
    onPageScore?: SortOrder
    technicalScore?: SortOrder
    contentScore?: SortOrder
    performanceScore?: SortOrder
  }

  export type EnumAuditSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditSource | EnumAuditSourceFieldRefInput<$PrismaModel>
    in?: $Enums.AuditSource[] | ListEnumAuditSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditSource[] | ListEnumAuditSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditSourceWithAggregatesFilter<$PrismaModel> | $Enums.AuditSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditSourceFilter<$PrismaModel>
    _max?: NestedEnumAuditSourceFilter<$PrismaModel>
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AuditScalarRelationFilter = {
    is?: AuditWhereInput
    isNot?: AuditWhereInput
  }

  export type AuditMetricsCountOrderByAggregateInput = {
    id?: SortOrder
    auditId?: SortOrder
    metaDescription?: SortOrder
    titleLength?: SortOrder
    metaDescriptionLength?: SortOrder
    h1Count?: SortOrder
    h2Count?: SortOrder
    h3Count?: SortOrder
    imagesTotal?: SortOrder
    imagesWithoutAlt?: SortOrder
    internalLinks?: SortOrder
    externalLinks?: SortOrder
    wordCount?: SortOrder
    hasCanonical?: SortOrder
    canonicalUrl?: SortOrder
    hasMetaRobots?: SortOrder
    metaRobotsContent?: SortOrder
    hasViewport?: SortOrder
    hasSchema?: SortOrder
    schemaTypes?: SortOrder
    openGraphPresent?: SortOrder
    ogImage?: SortOrder
    twitterCardPresent?: SortOrder
    lcpEstimateMs?: SortOrder
    domNodeCount?: SortOrder
    jsRequestCount?: SortOrder
    cssRequestCount?: SortOrder
  }

  export type AuditMetricsAvgOrderByAggregateInput = {
    titleLength?: SortOrder
    metaDescriptionLength?: SortOrder
    h1Count?: SortOrder
    h2Count?: SortOrder
    h3Count?: SortOrder
    imagesTotal?: SortOrder
    imagesWithoutAlt?: SortOrder
    internalLinks?: SortOrder
    externalLinks?: SortOrder
    wordCount?: SortOrder
    lcpEstimateMs?: SortOrder
    domNodeCount?: SortOrder
    jsRequestCount?: SortOrder
    cssRequestCount?: SortOrder
  }

  export type AuditMetricsMaxOrderByAggregateInput = {
    id?: SortOrder
    auditId?: SortOrder
    metaDescription?: SortOrder
    titleLength?: SortOrder
    metaDescriptionLength?: SortOrder
    h1Count?: SortOrder
    h2Count?: SortOrder
    h3Count?: SortOrder
    imagesTotal?: SortOrder
    imagesWithoutAlt?: SortOrder
    internalLinks?: SortOrder
    externalLinks?: SortOrder
    wordCount?: SortOrder
    hasCanonical?: SortOrder
    canonicalUrl?: SortOrder
    hasMetaRobots?: SortOrder
    metaRobotsContent?: SortOrder
    hasViewport?: SortOrder
    hasSchema?: SortOrder
    openGraphPresent?: SortOrder
    ogImage?: SortOrder
    twitterCardPresent?: SortOrder
    lcpEstimateMs?: SortOrder
    domNodeCount?: SortOrder
    jsRequestCount?: SortOrder
    cssRequestCount?: SortOrder
  }

  export type AuditMetricsMinOrderByAggregateInput = {
    id?: SortOrder
    auditId?: SortOrder
    metaDescription?: SortOrder
    titleLength?: SortOrder
    metaDescriptionLength?: SortOrder
    h1Count?: SortOrder
    h2Count?: SortOrder
    h3Count?: SortOrder
    imagesTotal?: SortOrder
    imagesWithoutAlt?: SortOrder
    internalLinks?: SortOrder
    externalLinks?: SortOrder
    wordCount?: SortOrder
    hasCanonical?: SortOrder
    canonicalUrl?: SortOrder
    hasMetaRobots?: SortOrder
    metaRobotsContent?: SortOrder
    hasViewport?: SortOrder
    hasSchema?: SortOrder
    openGraphPresent?: SortOrder
    ogImage?: SortOrder
    twitterCardPresent?: SortOrder
    lcpEstimateMs?: SortOrder
    domNodeCount?: SortOrder
    jsRequestCount?: SortOrder
    cssRequestCount?: SortOrder
  }

  export type AuditMetricsSumOrderByAggregateInput = {
    titleLength?: SortOrder
    metaDescriptionLength?: SortOrder
    h1Count?: SortOrder
    h2Count?: SortOrder
    h3Count?: SortOrder
    imagesTotal?: SortOrder
    imagesWithoutAlt?: SortOrder
    internalLinks?: SortOrder
    externalLinks?: SortOrder
    wordCount?: SortOrder
    lcpEstimateMs?: SortOrder
    domNodeCount?: SortOrder
    jsRequestCount?: SortOrder
    cssRequestCount?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityFilter<$PrismaModel> | $Enums.Severity
  }

  export type EnumIssueStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IssueStatus | EnumIssueStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IssueStatus[] | ListEnumIssueStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IssueStatus[] | ListEnumIssueStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIssueStatusFilter<$PrismaModel> | $Enums.IssueStatus
  }

  export type IssueStatusHistoryListRelationFilter = {
    every?: IssueStatusHistoryWhereInput
    some?: IssueStatusHistoryWhereInput
    none?: IssueStatusHistoryWhereInput
  }

  export type IssueStatusHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IssueCountOrderByAggregateInput = {
    id?: SortOrder
    auditId?: SortOrder
    code?: SortOrder
    category?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    title?: SortOrder
    message?: SortOrder
    recommendation?: SortOrder
    selector?: SortOrder
    evidence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IssueMaxOrderByAggregateInput = {
    id?: SortOrder
    auditId?: SortOrder
    code?: SortOrder
    category?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    title?: SortOrder
    message?: SortOrder
    recommendation?: SortOrder
    selector?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IssueMinOrderByAggregateInput = {
    id?: SortOrder
    auditId?: SortOrder
    code?: SortOrder
    category?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    title?: SortOrder
    message?: SortOrder
    recommendation?: SortOrder
    selector?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityWithAggregatesFilter<$PrismaModel> | $Enums.Severity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeverityFilter<$PrismaModel>
    _max?: NestedEnumSeverityFilter<$PrismaModel>
  }

  export type EnumIssueStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IssueStatus | EnumIssueStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IssueStatus[] | ListEnumIssueStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IssueStatus[] | ListEnumIssueStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIssueStatusWithAggregatesFilter<$PrismaModel> | $Enums.IssueStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIssueStatusFilter<$PrismaModel>
    _max?: NestedEnumIssueStatusFilter<$PrismaModel>
  }

  export type EnumIssueStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.IssueStatus | EnumIssueStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.IssueStatus[] | ListEnumIssueStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.IssueStatus[] | ListEnumIssueStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIssueStatusNullableFilter<$PrismaModel> | $Enums.IssueStatus | null
  }

  export type IssueScalarRelationFilter = {
    is?: IssueWhereInput
    isNot?: IssueWhereInput
  }

  export type IssueStatusHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    issueId?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    changedById?: SortOrder
    changedAt?: SortOrder
  }

  export type IssueStatusHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    issueId?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    changedById?: SortOrder
    changedAt?: SortOrder
  }

  export type IssueStatusHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    issueId?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    changedById?: SortOrder
    changedAt?: SortOrder
  }

  export type EnumIssueStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IssueStatus | EnumIssueStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.IssueStatus[] | ListEnumIssueStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.IssueStatus[] | ListEnumIssueStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIssueStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.IssueStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumIssueStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumIssueStatusNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AuditSnapshotCountOrderByAggregateInput = {
    id?: SortOrder
    auditId?: SortOrder
    rawPayload?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditSnapshotMaxOrderByAggregateInput = {
    id?: SortOrder
    auditId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditSnapshotMinOrderByAggregateInput = {
    id?: SortOrder
    auditId?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type ProjectMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput> | ProjectMemberCreateWithoutUserInput[] | ProjectMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutUserInput | ProjectMemberCreateOrConnectWithoutUserInput[]
    createMany?: ProjectMemberCreateManyUserInputEnvelope
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
  }

  export type ProjectMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput> | ProjectMemberCreateWithoutUserInput[] | ProjectMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutUserInput | ProjectMemberCreateOrConnectWithoutUserInput[]
    createMany?: ProjectMemberCreateManyUserInputEnvelope
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProjectMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput> | ProjectMemberCreateWithoutUserInput[] | ProjectMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutUserInput | ProjectMemberCreateOrConnectWithoutUserInput[]
    upsert?: ProjectMemberUpsertWithWhereUniqueWithoutUserInput | ProjectMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectMemberCreateManyUserInputEnvelope
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    disconnect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    update?: ProjectMemberUpdateWithWhereUniqueWithoutUserInput | ProjectMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectMemberUpdateManyWithWhereWithoutUserInput | ProjectMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
  }

  export type ProjectMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput> | ProjectMemberCreateWithoutUserInput[] | ProjectMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutUserInput | ProjectMemberCreateOrConnectWithoutUserInput[]
    upsert?: ProjectMemberUpsertWithWhereUniqueWithoutUserInput | ProjectMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectMemberCreateManyUserInputEnvelope
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    disconnect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    update?: ProjectMemberUpdateWithWhereUniqueWithoutUserInput | ProjectMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectMemberUpdateManyWithWhereWithoutUserInput | ProjectMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
  }

  export type PageCreateNestedManyWithoutProjectInput = {
    create?: XOR<PageCreateWithoutProjectInput, PageUncheckedCreateWithoutProjectInput> | PageCreateWithoutProjectInput[] | PageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PageCreateOrConnectWithoutProjectInput | PageCreateOrConnectWithoutProjectInput[]
    createMany?: PageCreateManyProjectInputEnvelope
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[]
  }

  export type AuditCreateNestedManyWithoutProjectInput = {
    create?: XOR<AuditCreateWithoutProjectInput, AuditUncheckedCreateWithoutProjectInput> | AuditCreateWithoutProjectInput[] | AuditUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: AuditCreateOrConnectWithoutProjectInput | AuditCreateOrConnectWithoutProjectInput[]
    createMany?: AuditCreateManyProjectInputEnvelope
    connect?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
  }

  export type ProjectMemberCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput> | ProjectMemberCreateWithoutProjectInput[] | ProjectMemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutProjectInput | ProjectMemberCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
  }

  export type PageUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<PageCreateWithoutProjectInput, PageUncheckedCreateWithoutProjectInput> | PageCreateWithoutProjectInput[] | PageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PageCreateOrConnectWithoutProjectInput | PageCreateOrConnectWithoutProjectInput[]
    createMany?: PageCreateManyProjectInputEnvelope
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[]
  }

  export type AuditUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<AuditCreateWithoutProjectInput, AuditUncheckedCreateWithoutProjectInput> | AuditCreateWithoutProjectInput[] | AuditUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: AuditCreateOrConnectWithoutProjectInput | AuditCreateOrConnectWithoutProjectInput[]
    createMany?: AuditCreateManyProjectInputEnvelope
    connect?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
  }

  export type ProjectMemberUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput> | ProjectMemberCreateWithoutProjectInput[] | ProjectMemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutProjectInput | ProjectMemberCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
  }

  export type PageUpdateManyWithoutProjectNestedInput = {
    create?: XOR<PageCreateWithoutProjectInput, PageUncheckedCreateWithoutProjectInput> | PageCreateWithoutProjectInput[] | PageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PageCreateOrConnectWithoutProjectInput | PageCreateOrConnectWithoutProjectInput[]
    upsert?: PageUpsertWithWhereUniqueWithoutProjectInput | PageUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: PageCreateManyProjectInputEnvelope
    set?: PageWhereUniqueInput | PageWhereUniqueInput[]
    disconnect?: PageWhereUniqueInput | PageWhereUniqueInput[]
    delete?: PageWhereUniqueInput | PageWhereUniqueInput[]
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[]
    update?: PageUpdateWithWhereUniqueWithoutProjectInput | PageUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: PageUpdateManyWithWhereWithoutProjectInput | PageUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: PageScalarWhereInput | PageScalarWhereInput[]
  }

  export type AuditUpdateManyWithoutProjectNestedInput = {
    create?: XOR<AuditCreateWithoutProjectInput, AuditUncheckedCreateWithoutProjectInput> | AuditCreateWithoutProjectInput[] | AuditUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: AuditCreateOrConnectWithoutProjectInput | AuditCreateOrConnectWithoutProjectInput[]
    upsert?: AuditUpsertWithWhereUniqueWithoutProjectInput | AuditUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: AuditCreateManyProjectInputEnvelope
    set?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    disconnect?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    delete?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    connect?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    update?: AuditUpdateWithWhereUniqueWithoutProjectInput | AuditUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: AuditUpdateManyWithWhereWithoutProjectInput | AuditUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: AuditScalarWhereInput | AuditScalarWhereInput[]
  }

  export type ProjectMemberUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput> | ProjectMemberCreateWithoutProjectInput[] | ProjectMemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutProjectInput | ProjectMemberCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectMemberUpsertWithWhereUniqueWithoutProjectInput | ProjectMemberUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    disconnect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    update?: ProjectMemberUpdateWithWhereUniqueWithoutProjectInput | ProjectMemberUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectMemberUpdateManyWithWhereWithoutProjectInput | ProjectMemberUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
  }

  export type PageUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<PageCreateWithoutProjectInput, PageUncheckedCreateWithoutProjectInput> | PageCreateWithoutProjectInput[] | PageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PageCreateOrConnectWithoutProjectInput | PageCreateOrConnectWithoutProjectInput[]
    upsert?: PageUpsertWithWhereUniqueWithoutProjectInput | PageUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: PageCreateManyProjectInputEnvelope
    set?: PageWhereUniqueInput | PageWhereUniqueInput[]
    disconnect?: PageWhereUniqueInput | PageWhereUniqueInput[]
    delete?: PageWhereUniqueInput | PageWhereUniqueInput[]
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[]
    update?: PageUpdateWithWhereUniqueWithoutProjectInput | PageUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: PageUpdateManyWithWhereWithoutProjectInput | PageUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: PageScalarWhereInput | PageScalarWhereInput[]
  }

  export type AuditUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<AuditCreateWithoutProjectInput, AuditUncheckedCreateWithoutProjectInput> | AuditCreateWithoutProjectInput[] | AuditUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: AuditCreateOrConnectWithoutProjectInput | AuditCreateOrConnectWithoutProjectInput[]
    upsert?: AuditUpsertWithWhereUniqueWithoutProjectInput | AuditUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: AuditCreateManyProjectInputEnvelope
    set?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    disconnect?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    delete?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    connect?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    update?: AuditUpdateWithWhereUniqueWithoutProjectInput | AuditUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: AuditUpdateManyWithWhereWithoutProjectInput | AuditUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: AuditScalarWhereInput | AuditScalarWhereInput[]
  }

  export type ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput> | ProjectMemberCreateWithoutProjectInput[] | ProjectMemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutProjectInput | ProjectMemberCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectMemberUpsertWithWhereUniqueWithoutProjectInput | ProjectMemberUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    disconnect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    update?: ProjectMemberUpdateWithWhereUniqueWithoutProjectInput | ProjectMemberUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectMemberUpdateManyWithWhereWithoutProjectInput | ProjectMemberUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutMembersInput = {
    create?: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMembersInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    upsert?: UserUpsertWithoutMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMembershipsInput, UserUpdateWithoutMembershipsInput>, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type ProjectUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMembersInput
    upsert?: ProjectUpsertWithoutMembersInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutMembersInput, ProjectUpdateWithoutMembersInput>, ProjectUncheckedUpdateWithoutMembersInput>
  }

  export type ProjectCreateNestedOneWithoutPagesInput = {
    create?: XOR<ProjectCreateWithoutPagesInput, ProjectUncheckedCreateWithoutPagesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPagesInput
    connect?: ProjectWhereUniqueInput
  }

  export type AuditCreateNestedManyWithoutPageInput = {
    create?: XOR<AuditCreateWithoutPageInput, AuditUncheckedCreateWithoutPageInput> | AuditCreateWithoutPageInput[] | AuditUncheckedCreateWithoutPageInput[]
    connectOrCreate?: AuditCreateOrConnectWithoutPageInput | AuditCreateOrConnectWithoutPageInput[]
    createMany?: AuditCreateManyPageInputEnvelope
    connect?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
  }

  export type AuditUncheckedCreateNestedManyWithoutPageInput = {
    create?: XOR<AuditCreateWithoutPageInput, AuditUncheckedCreateWithoutPageInput> | AuditCreateWithoutPageInput[] | AuditUncheckedCreateWithoutPageInput[]
    connectOrCreate?: AuditCreateOrConnectWithoutPageInput | AuditCreateOrConnectWithoutPageInput[]
    createMany?: AuditCreateManyPageInputEnvelope
    connect?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
  }

  export type ProjectUpdateOneRequiredWithoutPagesNestedInput = {
    create?: XOR<ProjectCreateWithoutPagesInput, ProjectUncheckedCreateWithoutPagesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPagesInput
    upsert?: ProjectUpsertWithoutPagesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutPagesInput, ProjectUpdateWithoutPagesInput>, ProjectUncheckedUpdateWithoutPagesInput>
  }

  export type AuditUpdateManyWithoutPageNestedInput = {
    create?: XOR<AuditCreateWithoutPageInput, AuditUncheckedCreateWithoutPageInput> | AuditCreateWithoutPageInput[] | AuditUncheckedCreateWithoutPageInput[]
    connectOrCreate?: AuditCreateOrConnectWithoutPageInput | AuditCreateOrConnectWithoutPageInput[]
    upsert?: AuditUpsertWithWhereUniqueWithoutPageInput | AuditUpsertWithWhereUniqueWithoutPageInput[]
    createMany?: AuditCreateManyPageInputEnvelope
    set?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    disconnect?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    delete?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    connect?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    update?: AuditUpdateWithWhereUniqueWithoutPageInput | AuditUpdateWithWhereUniqueWithoutPageInput[]
    updateMany?: AuditUpdateManyWithWhereWithoutPageInput | AuditUpdateManyWithWhereWithoutPageInput[]
    deleteMany?: AuditScalarWhereInput | AuditScalarWhereInput[]
  }

  export type AuditUncheckedUpdateManyWithoutPageNestedInput = {
    create?: XOR<AuditCreateWithoutPageInput, AuditUncheckedCreateWithoutPageInput> | AuditCreateWithoutPageInput[] | AuditUncheckedCreateWithoutPageInput[]
    connectOrCreate?: AuditCreateOrConnectWithoutPageInput | AuditCreateOrConnectWithoutPageInput[]
    upsert?: AuditUpsertWithWhereUniqueWithoutPageInput | AuditUpsertWithWhereUniqueWithoutPageInput[]
    createMany?: AuditCreateManyPageInputEnvelope
    set?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    disconnect?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    delete?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    connect?: AuditWhereUniqueInput | AuditWhereUniqueInput[]
    update?: AuditUpdateWithWhereUniqueWithoutPageInput | AuditUpdateWithWhereUniqueWithoutPageInput[]
    updateMany?: AuditUpdateManyWithWhereWithoutPageInput | AuditUpdateManyWithWhereWithoutPageInput[]
    deleteMany?: AuditScalarWhereInput | AuditScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutAuditsInput = {
    create?: XOR<ProjectCreateWithoutAuditsInput, ProjectUncheckedCreateWithoutAuditsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutAuditsInput
    connect?: ProjectWhereUniqueInput
  }

  export type PageCreateNestedOneWithoutAuditsInput = {
    create?: XOR<PageCreateWithoutAuditsInput, PageUncheckedCreateWithoutAuditsInput>
    connectOrCreate?: PageCreateOrConnectWithoutAuditsInput
    connect?: PageWhereUniqueInput
  }

  export type AuditMetricsCreateNestedOneWithoutAuditInput = {
    create?: XOR<AuditMetricsCreateWithoutAuditInput, AuditMetricsUncheckedCreateWithoutAuditInput>
    connectOrCreate?: AuditMetricsCreateOrConnectWithoutAuditInput
    connect?: AuditMetricsWhereUniqueInput
  }

  export type IssueCreateNestedManyWithoutAuditInput = {
    create?: XOR<IssueCreateWithoutAuditInput, IssueUncheckedCreateWithoutAuditInput> | IssueCreateWithoutAuditInput[] | IssueUncheckedCreateWithoutAuditInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutAuditInput | IssueCreateOrConnectWithoutAuditInput[]
    createMany?: IssueCreateManyAuditInputEnvelope
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
  }

  export type AuditSnapshotCreateNestedOneWithoutAuditInput = {
    create?: XOR<AuditSnapshotCreateWithoutAuditInput, AuditSnapshotUncheckedCreateWithoutAuditInput>
    connectOrCreate?: AuditSnapshotCreateOrConnectWithoutAuditInput
    connect?: AuditSnapshotWhereUniqueInput
  }

  export type AuditMetricsUncheckedCreateNestedOneWithoutAuditInput = {
    create?: XOR<AuditMetricsCreateWithoutAuditInput, AuditMetricsUncheckedCreateWithoutAuditInput>
    connectOrCreate?: AuditMetricsCreateOrConnectWithoutAuditInput
    connect?: AuditMetricsWhereUniqueInput
  }

  export type IssueUncheckedCreateNestedManyWithoutAuditInput = {
    create?: XOR<IssueCreateWithoutAuditInput, IssueUncheckedCreateWithoutAuditInput> | IssueCreateWithoutAuditInput[] | IssueUncheckedCreateWithoutAuditInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutAuditInput | IssueCreateOrConnectWithoutAuditInput[]
    createMany?: IssueCreateManyAuditInputEnvelope
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
  }

  export type AuditSnapshotUncheckedCreateNestedOneWithoutAuditInput = {
    create?: XOR<AuditSnapshotCreateWithoutAuditInput, AuditSnapshotUncheckedCreateWithoutAuditInput>
    connectOrCreate?: AuditSnapshotCreateOrConnectWithoutAuditInput
    connect?: AuditSnapshotWhereUniqueInput
  }

  export type EnumAuditSourceFieldUpdateOperationsInput = {
    set?: $Enums.AuditSource
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUpdateOneRequiredWithoutAuditsNestedInput = {
    create?: XOR<ProjectCreateWithoutAuditsInput, ProjectUncheckedCreateWithoutAuditsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutAuditsInput
    upsert?: ProjectUpsertWithoutAuditsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutAuditsInput, ProjectUpdateWithoutAuditsInput>, ProjectUncheckedUpdateWithoutAuditsInput>
  }

  export type PageUpdateOneWithoutAuditsNestedInput = {
    create?: XOR<PageCreateWithoutAuditsInput, PageUncheckedCreateWithoutAuditsInput>
    connectOrCreate?: PageCreateOrConnectWithoutAuditsInput
    upsert?: PageUpsertWithoutAuditsInput
    disconnect?: PageWhereInput | boolean
    delete?: PageWhereInput | boolean
    connect?: PageWhereUniqueInput
    update?: XOR<XOR<PageUpdateToOneWithWhereWithoutAuditsInput, PageUpdateWithoutAuditsInput>, PageUncheckedUpdateWithoutAuditsInput>
  }

  export type AuditMetricsUpdateOneWithoutAuditNestedInput = {
    create?: XOR<AuditMetricsCreateWithoutAuditInput, AuditMetricsUncheckedCreateWithoutAuditInput>
    connectOrCreate?: AuditMetricsCreateOrConnectWithoutAuditInput
    upsert?: AuditMetricsUpsertWithoutAuditInput
    disconnect?: AuditMetricsWhereInput | boolean
    delete?: AuditMetricsWhereInput | boolean
    connect?: AuditMetricsWhereUniqueInput
    update?: XOR<XOR<AuditMetricsUpdateToOneWithWhereWithoutAuditInput, AuditMetricsUpdateWithoutAuditInput>, AuditMetricsUncheckedUpdateWithoutAuditInput>
  }

  export type IssueUpdateManyWithoutAuditNestedInput = {
    create?: XOR<IssueCreateWithoutAuditInput, IssueUncheckedCreateWithoutAuditInput> | IssueCreateWithoutAuditInput[] | IssueUncheckedCreateWithoutAuditInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutAuditInput | IssueCreateOrConnectWithoutAuditInput[]
    upsert?: IssueUpsertWithWhereUniqueWithoutAuditInput | IssueUpsertWithWhereUniqueWithoutAuditInput[]
    createMany?: IssueCreateManyAuditInputEnvelope
    set?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    disconnect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    delete?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    update?: IssueUpdateWithWhereUniqueWithoutAuditInput | IssueUpdateWithWhereUniqueWithoutAuditInput[]
    updateMany?: IssueUpdateManyWithWhereWithoutAuditInput | IssueUpdateManyWithWhereWithoutAuditInput[]
    deleteMany?: IssueScalarWhereInput | IssueScalarWhereInput[]
  }

  export type AuditSnapshotUpdateOneWithoutAuditNestedInput = {
    create?: XOR<AuditSnapshotCreateWithoutAuditInput, AuditSnapshotUncheckedCreateWithoutAuditInput>
    connectOrCreate?: AuditSnapshotCreateOrConnectWithoutAuditInput
    upsert?: AuditSnapshotUpsertWithoutAuditInput
    disconnect?: AuditSnapshotWhereInput | boolean
    delete?: AuditSnapshotWhereInput | boolean
    connect?: AuditSnapshotWhereUniqueInput
    update?: XOR<XOR<AuditSnapshotUpdateToOneWithWhereWithoutAuditInput, AuditSnapshotUpdateWithoutAuditInput>, AuditSnapshotUncheckedUpdateWithoutAuditInput>
  }

  export type AuditMetricsUncheckedUpdateOneWithoutAuditNestedInput = {
    create?: XOR<AuditMetricsCreateWithoutAuditInput, AuditMetricsUncheckedCreateWithoutAuditInput>
    connectOrCreate?: AuditMetricsCreateOrConnectWithoutAuditInput
    upsert?: AuditMetricsUpsertWithoutAuditInput
    disconnect?: AuditMetricsWhereInput | boolean
    delete?: AuditMetricsWhereInput | boolean
    connect?: AuditMetricsWhereUniqueInput
    update?: XOR<XOR<AuditMetricsUpdateToOneWithWhereWithoutAuditInput, AuditMetricsUpdateWithoutAuditInput>, AuditMetricsUncheckedUpdateWithoutAuditInput>
  }

  export type IssueUncheckedUpdateManyWithoutAuditNestedInput = {
    create?: XOR<IssueCreateWithoutAuditInput, IssueUncheckedCreateWithoutAuditInput> | IssueCreateWithoutAuditInput[] | IssueUncheckedCreateWithoutAuditInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutAuditInput | IssueCreateOrConnectWithoutAuditInput[]
    upsert?: IssueUpsertWithWhereUniqueWithoutAuditInput | IssueUpsertWithWhereUniqueWithoutAuditInput[]
    createMany?: IssueCreateManyAuditInputEnvelope
    set?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    disconnect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    delete?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    update?: IssueUpdateWithWhereUniqueWithoutAuditInput | IssueUpdateWithWhereUniqueWithoutAuditInput[]
    updateMany?: IssueUpdateManyWithWhereWithoutAuditInput | IssueUpdateManyWithWhereWithoutAuditInput[]
    deleteMany?: IssueScalarWhereInput | IssueScalarWhereInput[]
  }

  export type AuditSnapshotUncheckedUpdateOneWithoutAuditNestedInput = {
    create?: XOR<AuditSnapshotCreateWithoutAuditInput, AuditSnapshotUncheckedCreateWithoutAuditInput>
    connectOrCreate?: AuditSnapshotCreateOrConnectWithoutAuditInput
    upsert?: AuditSnapshotUpsertWithoutAuditInput
    disconnect?: AuditSnapshotWhereInput | boolean
    delete?: AuditSnapshotWhereInput | boolean
    connect?: AuditSnapshotWhereUniqueInput
    update?: XOR<XOR<AuditSnapshotUpdateToOneWithWhereWithoutAuditInput, AuditSnapshotUpdateWithoutAuditInput>, AuditSnapshotUncheckedUpdateWithoutAuditInput>
  }

  export type AuditCreateNestedOneWithoutMetricsInput = {
    create?: XOR<AuditCreateWithoutMetricsInput, AuditUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: AuditCreateOrConnectWithoutMetricsInput
    connect?: AuditWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type AuditUpdateOneRequiredWithoutMetricsNestedInput = {
    create?: XOR<AuditCreateWithoutMetricsInput, AuditUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: AuditCreateOrConnectWithoutMetricsInput
    upsert?: AuditUpsertWithoutMetricsInput
    connect?: AuditWhereUniqueInput
    update?: XOR<XOR<AuditUpdateToOneWithWhereWithoutMetricsInput, AuditUpdateWithoutMetricsInput>, AuditUncheckedUpdateWithoutMetricsInput>
  }

  export type AuditCreateNestedOneWithoutIssuesInput = {
    create?: XOR<AuditCreateWithoutIssuesInput, AuditUncheckedCreateWithoutIssuesInput>
    connectOrCreate?: AuditCreateOrConnectWithoutIssuesInput
    connect?: AuditWhereUniqueInput
  }

  export type IssueStatusHistoryCreateNestedManyWithoutIssueInput = {
    create?: XOR<IssueStatusHistoryCreateWithoutIssueInput, IssueStatusHistoryUncheckedCreateWithoutIssueInput> | IssueStatusHistoryCreateWithoutIssueInput[] | IssueStatusHistoryUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: IssueStatusHistoryCreateOrConnectWithoutIssueInput | IssueStatusHistoryCreateOrConnectWithoutIssueInput[]
    createMany?: IssueStatusHistoryCreateManyIssueInputEnvelope
    connect?: IssueStatusHistoryWhereUniqueInput | IssueStatusHistoryWhereUniqueInput[]
  }

  export type IssueStatusHistoryUncheckedCreateNestedManyWithoutIssueInput = {
    create?: XOR<IssueStatusHistoryCreateWithoutIssueInput, IssueStatusHistoryUncheckedCreateWithoutIssueInput> | IssueStatusHistoryCreateWithoutIssueInput[] | IssueStatusHistoryUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: IssueStatusHistoryCreateOrConnectWithoutIssueInput | IssueStatusHistoryCreateOrConnectWithoutIssueInput[]
    createMany?: IssueStatusHistoryCreateManyIssueInputEnvelope
    connect?: IssueStatusHistoryWhereUniqueInput | IssueStatusHistoryWhereUniqueInput[]
  }

  export type EnumSeverityFieldUpdateOperationsInput = {
    set?: $Enums.Severity
  }

  export type EnumIssueStatusFieldUpdateOperationsInput = {
    set?: $Enums.IssueStatus
  }

  export type AuditUpdateOneRequiredWithoutIssuesNestedInput = {
    create?: XOR<AuditCreateWithoutIssuesInput, AuditUncheckedCreateWithoutIssuesInput>
    connectOrCreate?: AuditCreateOrConnectWithoutIssuesInput
    upsert?: AuditUpsertWithoutIssuesInput
    connect?: AuditWhereUniqueInput
    update?: XOR<XOR<AuditUpdateToOneWithWhereWithoutIssuesInput, AuditUpdateWithoutIssuesInput>, AuditUncheckedUpdateWithoutIssuesInput>
  }

  export type IssueStatusHistoryUpdateManyWithoutIssueNestedInput = {
    create?: XOR<IssueStatusHistoryCreateWithoutIssueInput, IssueStatusHistoryUncheckedCreateWithoutIssueInput> | IssueStatusHistoryCreateWithoutIssueInput[] | IssueStatusHistoryUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: IssueStatusHistoryCreateOrConnectWithoutIssueInput | IssueStatusHistoryCreateOrConnectWithoutIssueInput[]
    upsert?: IssueStatusHistoryUpsertWithWhereUniqueWithoutIssueInput | IssueStatusHistoryUpsertWithWhereUniqueWithoutIssueInput[]
    createMany?: IssueStatusHistoryCreateManyIssueInputEnvelope
    set?: IssueStatusHistoryWhereUniqueInput | IssueStatusHistoryWhereUniqueInput[]
    disconnect?: IssueStatusHistoryWhereUniqueInput | IssueStatusHistoryWhereUniqueInput[]
    delete?: IssueStatusHistoryWhereUniqueInput | IssueStatusHistoryWhereUniqueInput[]
    connect?: IssueStatusHistoryWhereUniqueInput | IssueStatusHistoryWhereUniqueInput[]
    update?: IssueStatusHistoryUpdateWithWhereUniqueWithoutIssueInput | IssueStatusHistoryUpdateWithWhereUniqueWithoutIssueInput[]
    updateMany?: IssueStatusHistoryUpdateManyWithWhereWithoutIssueInput | IssueStatusHistoryUpdateManyWithWhereWithoutIssueInput[]
    deleteMany?: IssueStatusHistoryScalarWhereInput | IssueStatusHistoryScalarWhereInput[]
  }

  export type IssueStatusHistoryUncheckedUpdateManyWithoutIssueNestedInput = {
    create?: XOR<IssueStatusHistoryCreateWithoutIssueInput, IssueStatusHistoryUncheckedCreateWithoutIssueInput> | IssueStatusHistoryCreateWithoutIssueInput[] | IssueStatusHistoryUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: IssueStatusHistoryCreateOrConnectWithoutIssueInput | IssueStatusHistoryCreateOrConnectWithoutIssueInput[]
    upsert?: IssueStatusHistoryUpsertWithWhereUniqueWithoutIssueInput | IssueStatusHistoryUpsertWithWhereUniqueWithoutIssueInput[]
    createMany?: IssueStatusHistoryCreateManyIssueInputEnvelope
    set?: IssueStatusHistoryWhereUniqueInput | IssueStatusHistoryWhereUniqueInput[]
    disconnect?: IssueStatusHistoryWhereUniqueInput | IssueStatusHistoryWhereUniqueInput[]
    delete?: IssueStatusHistoryWhereUniqueInput | IssueStatusHistoryWhereUniqueInput[]
    connect?: IssueStatusHistoryWhereUniqueInput | IssueStatusHistoryWhereUniqueInput[]
    update?: IssueStatusHistoryUpdateWithWhereUniqueWithoutIssueInput | IssueStatusHistoryUpdateWithWhereUniqueWithoutIssueInput[]
    updateMany?: IssueStatusHistoryUpdateManyWithWhereWithoutIssueInput | IssueStatusHistoryUpdateManyWithWhereWithoutIssueInput[]
    deleteMany?: IssueStatusHistoryScalarWhereInput | IssueStatusHistoryScalarWhereInput[]
  }

  export type IssueCreateNestedOneWithoutHistoryInput = {
    create?: XOR<IssueCreateWithoutHistoryInput, IssueUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: IssueCreateOrConnectWithoutHistoryInput
    connect?: IssueWhereUniqueInput
  }

  export type NullableEnumIssueStatusFieldUpdateOperationsInput = {
    set?: $Enums.IssueStatus | null
  }

  export type IssueUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<IssueCreateWithoutHistoryInput, IssueUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: IssueCreateOrConnectWithoutHistoryInput
    upsert?: IssueUpsertWithoutHistoryInput
    connect?: IssueWhereUniqueInput
    update?: XOR<XOR<IssueUpdateToOneWithWhereWithoutHistoryInput, IssueUpdateWithoutHistoryInput>, IssueUncheckedUpdateWithoutHistoryInput>
  }

  export type AuditCreateNestedOneWithoutSnapshotInput = {
    create?: XOR<AuditCreateWithoutSnapshotInput, AuditUncheckedCreateWithoutSnapshotInput>
    connectOrCreate?: AuditCreateOrConnectWithoutSnapshotInput
    connect?: AuditWhereUniqueInput
  }

  export type AuditUpdateOneRequiredWithoutSnapshotNestedInput = {
    create?: XOR<AuditCreateWithoutSnapshotInput, AuditUncheckedCreateWithoutSnapshotInput>
    connectOrCreate?: AuditCreateOrConnectWithoutSnapshotInput
    upsert?: AuditUpsertWithoutSnapshotInput
    connect?: AuditWhereUniqueInput
    update?: XOR<XOR<AuditUpdateToOneWithWhereWithoutSnapshotInput, AuditUpdateWithoutSnapshotInput>, AuditUncheckedUpdateWithoutSnapshotInput>
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

  export type NestedEnumAuditSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditSource | EnumAuditSourceFieldRefInput<$PrismaModel>
    in?: $Enums.AuditSource[] | ListEnumAuditSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditSource[] | ListEnumAuditSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditSourceFilter<$PrismaModel> | $Enums.AuditSource
  }

  export type NestedEnumAuditSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditSource | EnumAuditSourceFieldRefInput<$PrismaModel>
    in?: $Enums.AuditSource[] | ListEnumAuditSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditSource[] | ListEnumAuditSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditSourceWithAggregatesFilter<$PrismaModel> | $Enums.AuditSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditSourceFilter<$PrismaModel>
    _max?: NestedEnumAuditSourceFilter<$PrismaModel>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityFilter<$PrismaModel> | $Enums.Severity
  }

  export type NestedEnumIssueStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IssueStatus | EnumIssueStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IssueStatus[] | ListEnumIssueStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IssueStatus[] | ListEnumIssueStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIssueStatusFilter<$PrismaModel> | $Enums.IssueStatus
  }

  export type NestedEnumSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Severity | EnumSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Severity[] | ListEnumSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityWithAggregatesFilter<$PrismaModel> | $Enums.Severity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeverityFilter<$PrismaModel>
    _max?: NestedEnumSeverityFilter<$PrismaModel>
  }

  export type NestedEnumIssueStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IssueStatus | EnumIssueStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IssueStatus[] | ListEnumIssueStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IssueStatus[] | ListEnumIssueStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIssueStatusWithAggregatesFilter<$PrismaModel> | $Enums.IssueStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIssueStatusFilter<$PrismaModel>
    _max?: NestedEnumIssueStatusFilter<$PrismaModel>
  }

  export type NestedEnumIssueStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.IssueStatus | EnumIssueStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.IssueStatus[] | ListEnumIssueStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.IssueStatus[] | ListEnumIssueStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIssueStatusNullableFilter<$PrismaModel> | $Enums.IssueStatus | null
  }

  export type NestedEnumIssueStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IssueStatus | EnumIssueStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.IssueStatus[] | ListEnumIssueStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.IssueStatus[] | ListEnumIssueStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIssueStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.IssueStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumIssueStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumIssueStatusNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProjectMemberCreateWithoutUserInput = {
    id?: string
    role: string
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutMembersInput
  }

  export type ProjectMemberUncheckedCreateWithoutUserInput = {
    id?: string
    projectId: string
    role: string
    createdAt?: Date | string
  }

  export type ProjectMemberCreateOrConnectWithoutUserInput = {
    where: ProjectMemberWhereUniqueInput
    create: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput>
  }

  export type ProjectMemberCreateManyUserInputEnvelope = {
    data: ProjectMemberCreateManyUserInput | ProjectMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectMemberWhereUniqueInput
    update: XOR<ProjectMemberUpdateWithoutUserInput, ProjectMemberUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput>
  }

  export type ProjectMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectMemberWhereUniqueInput
    data: XOR<ProjectMemberUpdateWithoutUserInput, ProjectMemberUncheckedUpdateWithoutUserInput>
  }

  export type ProjectMemberUpdateManyWithWhereWithoutUserInput = {
    where: ProjectMemberScalarWhereInput
    data: XOR<ProjectMemberUpdateManyMutationInput, ProjectMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectMemberScalarWhereInput = {
    AND?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
    OR?: ProjectMemberScalarWhereInput[]
    NOT?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
    id?: StringFilter<"ProjectMember"> | string
    userId?: StringFilter<"ProjectMember"> | string
    projectId?: StringFilter<"ProjectMember"> | string
    role?: StringFilter<"ProjectMember"> | string
    createdAt?: DateTimeFilter<"ProjectMember"> | Date | string
  }

  export type PageCreateWithoutProjectInput = {
    id?: string
    normalizedUrl: string
    path: string
    firstSeenAt?: Date | string
    lastSeenAt?: Date | string
    audits?: AuditCreateNestedManyWithoutPageInput
  }

  export type PageUncheckedCreateWithoutProjectInput = {
    id?: string
    normalizedUrl: string
    path: string
    firstSeenAt?: Date | string
    lastSeenAt?: Date | string
    audits?: AuditUncheckedCreateNestedManyWithoutPageInput
  }

  export type PageCreateOrConnectWithoutProjectInput = {
    where: PageWhereUniqueInput
    create: XOR<PageCreateWithoutProjectInput, PageUncheckedCreateWithoutProjectInput>
  }

  export type PageCreateManyProjectInputEnvelope = {
    data: PageCreateManyProjectInput | PageCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type AuditCreateWithoutProjectInput = {
    id?: string
    source?: $Enums.AuditSource
    url: string
    title?: string | null
    overallScore: number
    onPageScore: number
    technicalScore: number
    contentScore: number
    performanceScore: number
    createdAt?: Date | string
    page?: PageCreateNestedOneWithoutAuditsInput
    metrics?: AuditMetricsCreateNestedOneWithoutAuditInput
    issues?: IssueCreateNestedManyWithoutAuditInput
    snapshot?: AuditSnapshotCreateNestedOneWithoutAuditInput
  }

  export type AuditUncheckedCreateWithoutProjectInput = {
    id?: string
    pageId?: string | null
    source?: $Enums.AuditSource
    url: string
    title?: string | null
    overallScore: number
    onPageScore: number
    technicalScore: number
    contentScore: number
    performanceScore: number
    createdAt?: Date | string
    metrics?: AuditMetricsUncheckedCreateNestedOneWithoutAuditInput
    issues?: IssueUncheckedCreateNestedManyWithoutAuditInput
    snapshot?: AuditSnapshotUncheckedCreateNestedOneWithoutAuditInput
  }

  export type AuditCreateOrConnectWithoutProjectInput = {
    where: AuditWhereUniqueInput
    create: XOR<AuditCreateWithoutProjectInput, AuditUncheckedCreateWithoutProjectInput>
  }

  export type AuditCreateManyProjectInputEnvelope = {
    data: AuditCreateManyProjectInput | AuditCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectMemberCreateWithoutProjectInput = {
    id?: string
    role: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMembershipsInput
  }

  export type ProjectMemberUncheckedCreateWithoutProjectInput = {
    id?: string
    userId: string
    role: string
    createdAt?: Date | string
  }

  export type ProjectMemberCreateOrConnectWithoutProjectInput = {
    where: ProjectMemberWhereUniqueInput
    create: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput>
  }

  export type ProjectMemberCreateManyProjectInputEnvelope = {
    data: ProjectMemberCreateManyProjectInput | ProjectMemberCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type PageUpsertWithWhereUniqueWithoutProjectInput = {
    where: PageWhereUniqueInput
    update: XOR<PageUpdateWithoutProjectInput, PageUncheckedUpdateWithoutProjectInput>
    create: XOR<PageCreateWithoutProjectInput, PageUncheckedCreateWithoutProjectInput>
  }

  export type PageUpdateWithWhereUniqueWithoutProjectInput = {
    where: PageWhereUniqueInput
    data: XOR<PageUpdateWithoutProjectInput, PageUncheckedUpdateWithoutProjectInput>
  }

  export type PageUpdateManyWithWhereWithoutProjectInput = {
    where: PageScalarWhereInput
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyWithoutProjectInput>
  }

  export type PageScalarWhereInput = {
    AND?: PageScalarWhereInput | PageScalarWhereInput[]
    OR?: PageScalarWhereInput[]
    NOT?: PageScalarWhereInput | PageScalarWhereInput[]
    id?: StringFilter<"Page"> | string
    projectId?: StringFilter<"Page"> | string
    normalizedUrl?: StringFilter<"Page"> | string
    path?: StringFilter<"Page"> | string
    firstSeenAt?: DateTimeFilter<"Page"> | Date | string
    lastSeenAt?: DateTimeFilter<"Page"> | Date | string
  }

  export type AuditUpsertWithWhereUniqueWithoutProjectInput = {
    where: AuditWhereUniqueInput
    update: XOR<AuditUpdateWithoutProjectInput, AuditUncheckedUpdateWithoutProjectInput>
    create: XOR<AuditCreateWithoutProjectInput, AuditUncheckedCreateWithoutProjectInput>
  }

  export type AuditUpdateWithWhereUniqueWithoutProjectInput = {
    where: AuditWhereUniqueInput
    data: XOR<AuditUpdateWithoutProjectInput, AuditUncheckedUpdateWithoutProjectInput>
  }

  export type AuditUpdateManyWithWhereWithoutProjectInput = {
    where: AuditScalarWhereInput
    data: XOR<AuditUpdateManyMutationInput, AuditUncheckedUpdateManyWithoutProjectInput>
  }

  export type AuditScalarWhereInput = {
    AND?: AuditScalarWhereInput | AuditScalarWhereInput[]
    OR?: AuditScalarWhereInput[]
    NOT?: AuditScalarWhereInput | AuditScalarWhereInput[]
    id?: StringFilter<"Audit"> | string
    projectId?: StringFilter<"Audit"> | string
    pageId?: StringNullableFilter<"Audit"> | string | null
    source?: EnumAuditSourceFilter<"Audit"> | $Enums.AuditSource
    url?: StringFilter<"Audit"> | string
    title?: StringNullableFilter<"Audit"> | string | null
    overallScore?: IntFilter<"Audit"> | number
    onPageScore?: IntFilter<"Audit"> | number
    technicalScore?: IntFilter<"Audit"> | number
    contentScore?: IntFilter<"Audit"> | number
    performanceScore?: IntFilter<"Audit"> | number
    createdAt?: DateTimeFilter<"Audit"> | Date | string
  }

  export type ProjectMemberUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectMemberWhereUniqueInput
    update: XOR<ProjectMemberUpdateWithoutProjectInput, ProjectMemberUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput>
  }

  export type ProjectMemberUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectMemberWhereUniqueInput
    data: XOR<ProjectMemberUpdateWithoutProjectInput, ProjectMemberUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectMemberUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectMemberScalarWhereInput
    data: XOR<ProjectMemberUpdateManyMutationInput, ProjectMemberUncheckedUpdateManyWithoutProjectInput>
  }

  export type UserCreateWithoutMembershipsInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutMembershipsInput = {
    id?: string
    email: string
    passwordHash: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
  }

  export type ProjectCreateWithoutMembersInput = {
    id?: string
    name: string
    domain: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pages?: PageCreateNestedManyWithoutProjectInput
    audits?: AuditCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    domain: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pages?: PageUncheckedCreateNestedManyWithoutProjectInput
    audits?: AuditUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutMembersInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput>
  }

  export type UserUpsertWithoutMembershipsInput = {
    update: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type UserUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpsertWithoutMembersInput = {
    update: XOR<ProjectUpdateWithoutMembersInput, ProjectUncheckedUpdateWithoutMembersInput>
    create: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutMembersInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutMembersInput, ProjectUncheckedUpdateWithoutMembersInput>
  }

  export type ProjectUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: PageUpdateManyWithoutProjectNestedInput
    audits?: AuditUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: PageUncheckedUpdateManyWithoutProjectNestedInput
    audits?: AuditUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutPagesInput = {
    id?: string
    name: string
    domain: string
    createdAt?: Date | string
    updatedAt?: Date | string
    audits?: AuditCreateNestedManyWithoutProjectInput
    members?: ProjectMemberCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutPagesInput = {
    id?: string
    name: string
    domain: string
    createdAt?: Date | string
    updatedAt?: Date | string
    audits?: AuditUncheckedCreateNestedManyWithoutProjectInput
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutPagesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutPagesInput, ProjectUncheckedCreateWithoutPagesInput>
  }

  export type AuditCreateWithoutPageInput = {
    id?: string
    source?: $Enums.AuditSource
    url: string
    title?: string | null
    overallScore: number
    onPageScore: number
    technicalScore: number
    contentScore: number
    performanceScore: number
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutAuditsInput
    metrics?: AuditMetricsCreateNestedOneWithoutAuditInput
    issues?: IssueCreateNestedManyWithoutAuditInput
    snapshot?: AuditSnapshotCreateNestedOneWithoutAuditInput
  }

  export type AuditUncheckedCreateWithoutPageInput = {
    id?: string
    projectId: string
    source?: $Enums.AuditSource
    url: string
    title?: string | null
    overallScore: number
    onPageScore: number
    technicalScore: number
    contentScore: number
    performanceScore: number
    createdAt?: Date | string
    metrics?: AuditMetricsUncheckedCreateNestedOneWithoutAuditInput
    issues?: IssueUncheckedCreateNestedManyWithoutAuditInput
    snapshot?: AuditSnapshotUncheckedCreateNestedOneWithoutAuditInput
  }

  export type AuditCreateOrConnectWithoutPageInput = {
    where: AuditWhereUniqueInput
    create: XOR<AuditCreateWithoutPageInput, AuditUncheckedCreateWithoutPageInput>
  }

  export type AuditCreateManyPageInputEnvelope = {
    data: AuditCreateManyPageInput | AuditCreateManyPageInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutPagesInput = {
    update: XOR<ProjectUpdateWithoutPagesInput, ProjectUncheckedUpdateWithoutPagesInput>
    create: XOR<ProjectCreateWithoutPagesInput, ProjectUncheckedCreateWithoutPagesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutPagesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutPagesInput, ProjectUncheckedUpdateWithoutPagesInput>
  }

  export type ProjectUpdateWithoutPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    audits?: AuditUpdateManyWithoutProjectNestedInput
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    audits?: AuditUncheckedUpdateManyWithoutProjectNestedInput
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type AuditUpsertWithWhereUniqueWithoutPageInput = {
    where: AuditWhereUniqueInput
    update: XOR<AuditUpdateWithoutPageInput, AuditUncheckedUpdateWithoutPageInput>
    create: XOR<AuditCreateWithoutPageInput, AuditUncheckedCreateWithoutPageInput>
  }

  export type AuditUpdateWithWhereUniqueWithoutPageInput = {
    where: AuditWhereUniqueInput
    data: XOR<AuditUpdateWithoutPageInput, AuditUncheckedUpdateWithoutPageInput>
  }

  export type AuditUpdateManyWithWhereWithoutPageInput = {
    where: AuditScalarWhereInput
    data: XOR<AuditUpdateManyMutationInput, AuditUncheckedUpdateManyWithoutPageInput>
  }

  export type ProjectCreateWithoutAuditsInput = {
    id?: string
    name: string
    domain: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pages?: PageCreateNestedManyWithoutProjectInput
    members?: ProjectMemberCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutAuditsInput = {
    id?: string
    name: string
    domain: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pages?: PageUncheckedCreateNestedManyWithoutProjectInput
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutAuditsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutAuditsInput, ProjectUncheckedCreateWithoutAuditsInput>
  }

  export type PageCreateWithoutAuditsInput = {
    id?: string
    normalizedUrl: string
    path: string
    firstSeenAt?: Date | string
    lastSeenAt?: Date | string
    project: ProjectCreateNestedOneWithoutPagesInput
  }

  export type PageUncheckedCreateWithoutAuditsInput = {
    id?: string
    projectId: string
    normalizedUrl: string
    path: string
    firstSeenAt?: Date | string
    lastSeenAt?: Date | string
  }

  export type PageCreateOrConnectWithoutAuditsInput = {
    where: PageWhereUniqueInput
    create: XOR<PageCreateWithoutAuditsInput, PageUncheckedCreateWithoutAuditsInput>
  }

  export type AuditMetricsCreateWithoutAuditInput = {
    id?: string
    metaDescription?: string | null
    titleLength?: number | null
    metaDescriptionLength?: number | null
    h1Count?: number | null
    h2Count?: number | null
    h3Count?: number | null
    imagesTotal?: number | null
    imagesWithoutAlt?: number | null
    internalLinks?: number | null
    externalLinks?: number | null
    wordCount?: number | null
    hasCanonical?: boolean | null
    canonicalUrl?: string | null
    hasMetaRobots?: boolean | null
    metaRobotsContent?: string | null
    hasViewport?: boolean | null
    hasSchema?: boolean | null
    schemaTypes?: NullableJsonNullValueInput | InputJsonValue
    openGraphPresent?: boolean | null
    ogImage?: string | null
    twitterCardPresent?: boolean | null
    lcpEstimateMs?: number | null
    domNodeCount?: number | null
    jsRequestCount?: number | null
    cssRequestCount?: number | null
  }

  export type AuditMetricsUncheckedCreateWithoutAuditInput = {
    id?: string
    metaDescription?: string | null
    titleLength?: number | null
    metaDescriptionLength?: number | null
    h1Count?: number | null
    h2Count?: number | null
    h3Count?: number | null
    imagesTotal?: number | null
    imagesWithoutAlt?: number | null
    internalLinks?: number | null
    externalLinks?: number | null
    wordCount?: number | null
    hasCanonical?: boolean | null
    canonicalUrl?: string | null
    hasMetaRobots?: boolean | null
    metaRobotsContent?: string | null
    hasViewport?: boolean | null
    hasSchema?: boolean | null
    schemaTypes?: NullableJsonNullValueInput | InputJsonValue
    openGraphPresent?: boolean | null
    ogImage?: string | null
    twitterCardPresent?: boolean | null
    lcpEstimateMs?: number | null
    domNodeCount?: number | null
    jsRequestCount?: number | null
    cssRequestCount?: number | null
  }

  export type AuditMetricsCreateOrConnectWithoutAuditInput = {
    where: AuditMetricsWhereUniqueInput
    create: XOR<AuditMetricsCreateWithoutAuditInput, AuditMetricsUncheckedCreateWithoutAuditInput>
  }

  export type IssueCreateWithoutAuditInput = {
    id?: string
    code: string
    category: string
    severity: $Enums.Severity
    status?: $Enums.IssueStatus
    title: string
    message: string
    recommendation: string
    selector?: string | null
    evidence?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: IssueStatusHistoryCreateNestedManyWithoutIssueInput
  }

  export type IssueUncheckedCreateWithoutAuditInput = {
    id?: string
    code: string
    category: string
    severity: $Enums.Severity
    status?: $Enums.IssueStatus
    title: string
    message: string
    recommendation: string
    selector?: string | null
    evidence?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: IssueStatusHistoryUncheckedCreateNestedManyWithoutIssueInput
  }

  export type IssueCreateOrConnectWithoutAuditInput = {
    where: IssueWhereUniqueInput
    create: XOR<IssueCreateWithoutAuditInput, IssueUncheckedCreateWithoutAuditInput>
  }

  export type IssueCreateManyAuditInputEnvelope = {
    data: IssueCreateManyAuditInput | IssueCreateManyAuditInput[]
    skipDuplicates?: boolean
  }

  export type AuditSnapshotCreateWithoutAuditInput = {
    id?: string
    rawPayload: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditSnapshotUncheckedCreateWithoutAuditInput = {
    id?: string
    rawPayload: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditSnapshotCreateOrConnectWithoutAuditInput = {
    where: AuditSnapshotWhereUniqueInput
    create: XOR<AuditSnapshotCreateWithoutAuditInput, AuditSnapshotUncheckedCreateWithoutAuditInput>
  }

  export type ProjectUpsertWithoutAuditsInput = {
    update: XOR<ProjectUpdateWithoutAuditsInput, ProjectUncheckedUpdateWithoutAuditsInput>
    create: XOR<ProjectCreateWithoutAuditsInput, ProjectUncheckedCreateWithoutAuditsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutAuditsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutAuditsInput, ProjectUncheckedUpdateWithoutAuditsInput>
  }

  export type ProjectUpdateWithoutAuditsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: PageUpdateManyWithoutProjectNestedInput
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutAuditsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: PageUncheckedUpdateManyWithoutProjectNestedInput
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type PageUpsertWithoutAuditsInput = {
    update: XOR<PageUpdateWithoutAuditsInput, PageUncheckedUpdateWithoutAuditsInput>
    create: XOR<PageCreateWithoutAuditsInput, PageUncheckedCreateWithoutAuditsInput>
    where?: PageWhereInput
  }

  export type PageUpdateToOneWithWhereWithoutAuditsInput = {
    where?: PageWhereInput
    data: XOR<PageUpdateWithoutAuditsInput, PageUncheckedUpdateWithoutAuditsInput>
  }

  export type PageUpdateWithoutAuditsInput = {
    id?: StringFieldUpdateOperationsInput | string
    normalizedUrl?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutPagesNestedInput
  }

  export type PageUncheckedUpdateWithoutAuditsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    normalizedUrl?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditMetricsUpsertWithoutAuditInput = {
    update: XOR<AuditMetricsUpdateWithoutAuditInput, AuditMetricsUncheckedUpdateWithoutAuditInput>
    create: XOR<AuditMetricsCreateWithoutAuditInput, AuditMetricsUncheckedCreateWithoutAuditInput>
    where?: AuditMetricsWhereInput
  }

  export type AuditMetricsUpdateToOneWithWhereWithoutAuditInput = {
    where?: AuditMetricsWhereInput
    data: XOR<AuditMetricsUpdateWithoutAuditInput, AuditMetricsUncheckedUpdateWithoutAuditInput>
  }

  export type AuditMetricsUpdateWithoutAuditInput = {
    id?: StringFieldUpdateOperationsInput | string
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    titleLength?: NullableIntFieldUpdateOperationsInput | number | null
    metaDescriptionLength?: NullableIntFieldUpdateOperationsInput | number | null
    h1Count?: NullableIntFieldUpdateOperationsInput | number | null
    h2Count?: NullableIntFieldUpdateOperationsInput | number | null
    h3Count?: NullableIntFieldUpdateOperationsInput | number | null
    imagesTotal?: NullableIntFieldUpdateOperationsInput | number | null
    imagesWithoutAlt?: NullableIntFieldUpdateOperationsInput | number | null
    internalLinks?: NullableIntFieldUpdateOperationsInput | number | null
    externalLinks?: NullableIntFieldUpdateOperationsInput | number | null
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    hasCanonical?: NullableBoolFieldUpdateOperationsInput | boolean | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasMetaRobots?: NullableBoolFieldUpdateOperationsInput | boolean | null
    metaRobotsContent?: NullableStringFieldUpdateOperationsInput | string | null
    hasViewport?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasSchema?: NullableBoolFieldUpdateOperationsInput | boolean | null
    schemaTypes?: NullableJsonNullValueInput | InputJsonValue
    openGraphPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    twitterCardPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lcpEstimateMs?: NullableIntFieldUpdateOperationsInput | number | null
    domNodeCount?: NullableIntFieldUpdateOperationsInput | number | null
    jsRequestCount?: NullableIntFieldUpdateOperationsInput | number | null
    cssRequestCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AuditMetricsUncheckedUpdateWithoutAuditInput = {
    id?: StringFieldUpdateOperationsInput | string
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    titleLength?: NullableIntFieldUpdateOperationsInput | number | null
    metaDescriptionLength?: NullableIntFieldUpdateOperationsInput | number | null
    h1Count?: NullableIntFieldUpdateOperationsInput | number | null
    h2Count?: NullableIntFieldUpdateOperationsInput | number | null
    h3Count?: NullableIntFieldUpdateOperationsInput | number | null
    imagesTotal?: NullableIntFieldUpdateOperationsInput | number | null
    imagesWithoutAlt?: NullableIntFieldUpdateOperationsInput | number | null
    internalLinks?: NullableIntFieldUpdateOperationsInput | number | null
    externalLinks?: NullableIntFieldUpdateOperationsInput | number | null
    wordCount?: NullableIntFieldUpdateOperationsInput | number | null
    hasCanonical?: NullableBoolFieldUpdateOperationsInput | boolean | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasMetaRobots?: NullableBoolFieldUpdateOperationsInput | boolean | null
    metaRobotsContent?: NullableStringFieldUpdateOperationsInput | string | null
    hasViewport?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hasSchema?: NullableBoolFieldUpdateOperationsInput | boolean | null
    schemaTypes?: NullableJsonNullValueInput | InputJsonValue
    openGraphPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    twitterCardPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lcpEstimateMs?: NullableIntFieldUpdateOperationsInput | number | null
    domNodeCount?: NullableIntFieldUpdateOperationsInput | number | null
    jsRequestCount?: NullableIntFieldUpdateOperationsInput | number | null
    cssRequestCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IssueUpsertWithWhereUniqueWithoutAuditInput = {
    where: IssueWhereUniqueInput
    update: XOR<IssueUpdateWithoutAuditInput, IssueUncheckedUpdateWithoutAuditInput>
    create: XOR<IssueCreateWithoutAuditInput, IssueUncheckedCreateWithoutAuditInput>
  }

  export type IssueUpdateWithWhereUniqueWithoutAuditInput = {
    where: IssueWhereUniqueInput
    data: XOR<IssueUpdateWithoutAuditInput, IssueUncheckedUpdateWithoutAuditInput>
  }

  export type IssueUpdateManyWithWhereWithoutAuditInput = {
    where: IssueScalarWhereInput
    data: XOR<IssueUpdateManyMutationInput, IssueUncheckedUpdateManyWithoutAuditInput>
  }

  export type IssueScalarWhereInput = {
    AND?: IssueScalarWhereInput | IssueScalarWhereInput[]
    OR?: IssueScalarWhereInput[]
    NOT?: IssueScalarWhereInput | IssueScalarWhereInput[]
    id?: StringFilter<"Issue"> | string
    auditId?: StringFilter<"Issue"> | string
    code?: StringFilter<"Issue"> | string
    category?: StringFilter<"Issue"> | string
    severity?: EnumSeverityFilter<"Issue"> | $Enums.Severity
    status?: EnumIssueStatusFilter<"Issue"> | $Enums.IssueStatus
    title?: StringFilter<"Issue"> | string
    message?: StringFilter<"Issue"> | string
    recommendation?: StringFilter<"Issue"> | string
    selector?: StringNullableFilter<"Issue"> | string | null
    evidence?: JsonNullableFilter<"Issue">
    createdAt?: DateTimeFilter<"Issue"> | Date | string
    updatedAt?: DateTimeFilter<"Issue"> | Date | string
  }

  export type AuditSnapshotUpsertWithoutAuditInput = {
    update: XOR<AuditSnapshotUpdateWithoutAuditInput, AuditSnapshotUncheckedUpdateWithoutAuditInput>
    create: XOR<AuditSnapshotCreateWithoutAuditInput, AuditSnapshotUncheckedCreateWithoutAuditInput>
    where?: AuditSnapshotWhereInput
  }

  export type AuditSnapshotUpdateToOneWithWhereWithoutAuditInput = {
    where?: AuditSnapshotWhereInput
    data: XOR<AuditSnapshotUpdateWithoutAuditInput, AuditSnapshotUncheckedUpdateWithoutAuditInput>
  }

  export type AuditSnapshotUpdateWithoutAuditInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawPayload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditSnapshotUncheckedUpdateWithoutAuditInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawPayload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditCreateWithoutMetricsInput = {
    id?: string
    source?: $Enums.AuditSource
    url: string
    title?: string | null
    overallScore: number
    onPageScore: number
    technicalScore: number
    contentScore: number
    performanceScore: number
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutAuditsInput
    page?: PageCreateNestedOneWithoutAuditsInput
    issues?: IssueCreateNestedManyWithoutAuditInput
    snapshot?: AuditSnapshotCreateNestedOneWithoutAuditInput
  }

  export type AuditUncheckedCreateWithoutMetricsInput = {
    id?: string
    projectId: string
    pageId?: string | null
    source?: $Enums.AuditSource
    url: string
    title?: string | null
    overallScore: number
    onPageScore: number
    technicalScore: number
    contentScore: number
    performanceScore: number
    createdAt?: Date | string
    issues?: IssueUncheckedCreateNestedManyWithoutAuditInput
    snapshot?: AuditSnapshotUncheckedCreateNestedOneWithoutAuditInput
  }

  export type AuditCreateOrConnectWithoutMetricsInput = {
    where: AuditWhereUniqueInput
    create: XOR<AuditCreateWithoutMetricsInput, AuditUncheckedCreateWithoutMetricsInput>
  }

  export type AuditUpsertWithoutMetricsInput = {
    update: XOR<AuditUpdateWithoutMetricsInput, AuditUncheckedUpdateWithoutMetricsInput>
    create: XOR<AuditCreateWithoutMetricsInput, AuditUncheckedCreateWithoutMetricsInput>
    where?: AuditWhereInput
  }

  export type AuditUpdateToOneWithWhereWithoutMetricsInput = {
    where?: AuditWhereInput
    data: XOR<AuditUpdateWithoutMetricsInput, AuditUncheckedUpdateWithoutMetricsInput>
  }

  export type AuditUpdateWithoutMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumAuditSourceFieldUpdateOperationsInput | $Enums.AuditSource
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    overallScore?: IntFieldUpdateOperationsInput | number
    onPageScore?: IntFieldUpdateOperationsInput | number
    technicalScore?: IntFieldUpdateOperationsInput | number
    contentScore?: IntFieldUpdateOperationsInput | number
    performanceScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutAuditsNestedInput
    page?: PageUpdateOneWithoutAuditsNestedInput
    issues?: IssueUpdateManyWithoutAuditNestedInput
    snapshot?: AuditSnapshotUpdateOneWithoutAuditNestedInput
  }

  export type AuditUncheckedUpdateWithoutMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    pageId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumAuditSourceFieldUpdateOperationsInput | $Enums.AuditSource
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    overallScore?: IntFieldUpdateOperationsInput | number
    onPageScore?: IntFieldUpdateOperationsInput | number
    technicalScore?: IntFieldUpdateOperationsInput | number
    contentScore?: IntFieldUpdateOperationsInput | number
    performanceScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issues?: IssueUncheckedUpdateManyWithoutAuditNestedInput
    snapshot?: AuditSnapshotUncheckedUpdateOneWithoutAuditNestedInput
  }

  export type AuditCreateWithoutIssuesInput = {
    id?: string
    source?: $Enums.AuditSource
    url: string
    title?: string | null
    overallScore: number
    onPageScore: number
    technicalScore: number
    contentScore: number
    performanceScore: number
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutAuditsInput
    page?: PageCreateNestedOneWithoutAuditsInput
    metrics?: AuditMetricsCreateNestedOneWithoutAuditInput
    snapshot?: AuditSnapshotCreateNestedOneWithoutAuditInput
  }

  export type AuditUncheckedCreateWithoutIssuesInput = {
    id?: string
    projectId: string
    pageId?: string | null
    source?: $Enums.AuditSource
    url: string
    title?: string | null
    overallScore: number
    onPageScore: number
    technicalScore: number
    contentScore: number
    performanceScore: number
    createdAt?: Date | string
    metrics?: AuditMetricsUncheckedCreateNestedOneWithoutAuditInput
    snapshot?: AuditSnapshotUncheckedCreateNestedOneWithoutAuditInput
  }

  export type AuditCreateOrConnectWithoutIssuesInput = {
    where: AuditWhereUniqueInput
    create: XOR<AuditCreateWithoutIssuesInput, AuditUncheckedCreateWithoutIssuesInput>
  }

  export type IssueStatusHistoryCreateWithoutIssueInput = {
    id?: string
    fromStatus?: $Enums.IssueStatus | null
    toStatus: $Enums.IssueStatus
    changedById?: string | null
    changedAt?: Date | string
  }

  export type IssueStatusHistoryUncheckedCreateWithoutIssueInput = {
    id?: string
    fromStatus?: $Enums.IssueStatus | null
    toStatus: $Enums.IssueStatus
    changedById?: string | null
    changedAt?: Date | string
  }

  export type IssueStatusHistoryCreateOrConnectWithoutIssueInput = {
    where: IssueStatusHistoryWhereUniqueInput
    create: XOR<IssueStatusHistoryCreateWithoutIssueInput, IssueStatusHistoryUncheckedCreateWithoutIssueInput>
  }

  export type IssueStatusHistoryCreateManyIssueInputEnvelope = {
    data: IssueStatusHistoryCreateManyIssueInput | IssueStatusHistoryCreateManyIssueInput[]
    skipDuplicates?: boolean
  }

  export type AuditUpsertWithoutIssuesInput = {
    update: XOR<AuditUpdateWithoutIssuesInput, AuditUncheckedUpdateWithoutIssuesInput>
    create: XOR<AuditCreateWithoutIssuesInput, AuditUncheckedCreateWithoutIssuesInput>
    where?: AuditWhereInput
  }

  export type AuditUpdateToOneWithWhereWithoutIssuesInput = {
    where?: AuditWhereInput
    data: XOR<AuditUpdateWithoutIssuesInput, AuditUncheckedUpdateWithoutIssuesInput>
  }

  export type AuditUpdateWithoutIssuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumAuditSourceFieldUpdateOperationsInput | $Enums.AuditSource
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    overallScore?: IntFieldUpdateOperationsInput | number
    onPageScore?: IntFieldUpdateOperationsInput | number
    technicalScore?: IntFieldUpdateOperationsInput | number
    contentScore?: IntFieldUpdateOperationsInput | number
    performanceScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutAuditsNestedInput
    page?: PageUpdateOneWithoutAuditsNestedInput
    metrics?: AuditMetricsUpdateOneWithoutAuditNestedInput
    snapshot?: AuditSnapshotUpdateOneWithoutAuditNestedInput
  }

  export type AuditUncheckedUpdateWithoutIssuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    pageId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumAuditSourceFieldUpdateOperationsInput | $Enums.AuditSource
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    overallScore?: IntFieldUpdateOperationsInput | number
    onPageScore?: IntFieldUpdateOperationsInput | number
    technicalScore?: IntFieldUpdateOperationsInput | number
    contentScore?: IntFieldUpdateOperationsInput | number
    performanceScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metrics?: AuditMetricsUncheckedUpdateOneWithoutAuditNestedInput
    snapshot?: AuditSnapshotUncheckedUpdateOneWithoutAuditNestedInput
  }

  export type IssueStatusHistoryUpsertWithWhereUniqueWithoutIssueInput = {
    where: IssueStatusHistoryWhereUniqueInput
    update: XOR<IssueStatusHistoryUpdateWithoutIssueInput, IssueStatusHistoryUncheckedUpdateWithoutIssueInput>
    create: XOR<IssueStatusHistoryCreateWithoutIssueInput, IssueStatusHistoryUncheckedCreateWithoutIssueInput>
  }

  export type IssueStatusHistoryUpdateWithWhereUniqueWithoutIssueInput = {
    where: IssueStatusHistoryWhereUniqueInput
    data: XOR<IssueStatusHistoryUpdateWithoutIssueInput, IssueStatusHistoryUncheckedUpdateWithoutIssueInput>
  }

  export type IssueStatusHistoryUpdateManyWithWhereWithoutIssueInput = {
    where: IssueStatusHistoryScalarWhereInput
    data: XOR<IssueStatusHistoryUpdateManyMutationInput, IssueStatusHistoryUncheckedUpdateManyWithoutIssueInput>
  }

  export type IssueStatusHistoryScalarWhereInput = {
    AND?: IssueStatusHistoryScalarWhereInput | IssueStatusHistoryScalarWhereInput[]
    OR?: IssueStatusHistoryScalarWhereInput[]
    NOT?: IssueStatusHistoryScalarWhereInput | IssueStatusHistoryScalarWhereInput[]
    id?: StringFilter<"IssueStatusHistory"> | string
    issueId?: StringFilter<"IssueStatusHistory"> | string
    fromStatus?: EnumIssueStatusNullableFilter<"IssueStatusHistory"> | $Enums.IssueStatus | null
    toStatus?: EnumIssueStatusFilter<"IssueStatusHistory"> | $Enums.IssueStatus
    changedById?: StringNullableFilter<"IssueStatusHistory"> | string | null
    changedAt?: DateTimeFilter<"IssueStatusHistory"> | Date | string
  }

  export type IssueCreateWithoutHistoryInput = {
    id?: string
    code: string
    category: string
    severity: $Enums.Severity
    status?: $Enums.IssueStatus
    title: string
    message: string
    recommendation: string
    selector?: string | null
    evidence?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    audit: AuditCreateNestedOneWithoutIssuesInput
  }

  export type IssueUncheckedCreateWithoutHistoryInput = {
    id?: string
    auditId: string
    code: string
    category: string
    severity: $Enums.Severity
    status?: $Enums.IssueStatus
    title: string
    message: string
    recommendation: string
    selector?: string | null
    evidence?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IssueCreateOrConnectWithoutHistoryInput = {
    where: IssueWhereUniqueInput
    create: XOR<IssueCreateWithoutHistoryInput, IssueUncheckedCreateWithoutHistoryInput>
  }

  export type IssueUpsertWithoutHistoryInput = {
    update: XOR<IssueUpdateWithoutHistoryInput, IssueUncheckedUpdateWithoutHistoryInput>
    create: XOR<IssueCreateWithoutHistoryInput, IssueUncheckedCreateWithoutHistoryInput>
    where?: IssueWhereInput
  }

  export type IssueUpdateToOneWithWhereWithoutHistoryInput = {
    where?: IssueWhereInput
    data: XOR<IssueUpdateWithoutHistoryInput, IssueUncheckedUpdateWithoutHistoryInput>
  }

  export type IssueUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    recommendation?: StringFieldUpdateOperationsInput | string
    selector?: NullableStringFieldUpdateOperationsInput | string | null
    evidence?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    audit?: AuditUpdateOneRequiredWithoutIssuesNestedInput
  }

  export type IssueUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    auditId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    recommendation?: StringFieldUpdateOperationsInput | string
    selector?: NullableStringFieldUpdateOperationsInput | string | null
    evidence?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditCreateWithoutSnapshotInput = {
    id?: string
    source?: $Enums.AuditSource
    url: string
    title?: string | null
    overallScore: number
    onPageScore: number
    technicalScore: number
    contentScore: number
    performanceScore: number
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutAuditsInput
    page?: PageCreateNestedOneWithoutAuditsInput
    metrics?: AuditMetricsCreateNestedOneWithoutAuditInput
    issues?: IssueCreateNestedManyWithoutAuditInput
  }

  export type AuditUncheckedCreateWithoutSnapshotInput = {
    id?: string
    projectId: string
    pageId?: string | null
    source?: $Enums.AuditSource
    url: string
    title?: string | null
    overallScore: number
    onPageScore: number
    technicalScore: number
    contentScore: number
    performanceScore: number
    createdAt?: Date | string
    metrics?: AuditMetricsUncheckedCreateNestedOneWithoutAuditInput
    issues?: IssueUncheckedCreateNestedManyWithoutAuditInput
  }

  export type AuditCreateOrConnectWithoutSnapshotInput = {
    where: AuditWhereUniqueInput
    create: XOR<AuditCreateWithoutSnapshotInput, AuditUncheckedCreateWithoutSnapshotInput>
  }

  export type AuditUpsertWithoutSnapshotInput = {
    update: XOR<AuditUpdateWithoutSnapshotInput, AuditUncheckedUpdateWithoutSnapshotInput>
    create: XOR<AuditCreateWithoutSnapshotInput, AuditUncheckedCreateWithoutSnapshotInput>
    where?: AuditWhereInput
  }

  export type AuditUpdateToOneWithWhereWithoutSnapshotInput = {
    where?: AuditWhereInput
    data: XOR<AuditUpdateWithoutSnapshotInput, AuditUncheckedUpdateWithoutSnapshotInput>
  }

  export type AuditUpdateWithoutSnapshotInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumAuditSourceFieldUpdateOperationsInput | $Enums.AuditSource
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    overallScore?: IntFieldUpdateOperationsInput | number
    onPageScore?: IntFieldUpdateOperationsInput | number
    technicalScore?: IntFieldUpdateOperationsInput | number
    contentScore?: IntFieldUpdateOperationsInput | number
    performanceScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutAuditsNestedInput
    page?: PageUpdateOneWithoutAuditsNestedInput
    metrics?: AuditMetricsUpdateOneWithoutAuditNestedInput
    issues?: IssueUpdateManyWithoutAuditNestedInput
  }

  export type AuditUncheckedUpdateWithoutSnapshotInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    pageId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumAuditSourceFieldUpdateOperationsInput | $Enums.AuditSource
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    overallScore?: IntFieldUpdateOperationsInput | number
    onPageScore?: IntFieldUpdateOperationsInput | number
    technicalScore?: IntFieldUpdateOperationsInput | number
    contentScore?: IntFieldUpdateOperationsInput | number
    performanceScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metrics?: AuditMetricsUncheckedUpdateOneWithoutAuditNestedInput
    issues?: IssueUncheckedUpdateManyWithoutAuditNestedInput
  }

  export type ProjectMemberCreateManyUserInput = {
    id?: string
    projectId: string
    role: string
    createdAt?: Date | string
  }

  export type ProjectMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutMembersNestedInput
  }

  export type ProjectMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageCreateManyProjectInput = {
    id?: string
    normalizedUrl: string
    path: string
    firstSeenAt?: Date | string
    lastSeenAt?: Date | string
  }

  export type AuditCreateManyProjectInput = {
    id?: string
    pageId?: string | null
    source?: $Enums.AuditSource
    url: string
    title?: string | null
    overallScore: number
    onPageScore: number
    technicalScore: number
    contentScore: number
    performanceScore: number
    createdAt?: Date | string
  }

  export type ProjectMemberCreateManyProjectInput = {
    id?: string
    userId: string
    role: string
    createdAt?: Date | string
  }

  export type PageUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    normalizedUrl?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    audits?: AuditUpdateManyWithoutPageNestedInput
  }

  export type PageUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    normalizedUrl?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    audits?: AuditUncheckedUpdateManyWithoutPageNestedInput
  }

  export type PageUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    normalizedUrl?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumAuditSourceFieldUpdateOperationsInput | $Enums.AuditSource
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    overallScore?: IntFieldUpdateOperationsInput | number
    onPageScore?: IntFieldUpdateOperationsInput | number
    technicalScore?: IntFieldUpdateOperationsInput | number
    contentScore?: IntFieldUpdateOperationsInput | number
    performanceScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    page?: PageUpdateOneWithoutAuditsNestedInput
    metrics?: AuditMetricsUpdateOneWithoutAuditNestedInput
    issues?: IssueUpdateManyWithoutAuditNestedInput
    snapshot?: AuditSnapshotUpdateOneWithoutAuditNestedInput
  }

  export type AuditUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumAuditSourceFieldUpdateOperationsInput | $Enums.AuditSource
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    overallScore?: IntFieldUpdateOperationsInput | number
    onPageScore?: IntFieldUpdateOperationsInput | number
    technicalScore?: IntFieldUpdateOperationsInput | number
    contentScore?: IntFieldUpdateOperationsInput | number
    performanceScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metrics?: AuditMetricsUncheckedUpdateOneWithoutAuditNestedInput
    issues?: IssueUncheckedUpdateManyWithoutAuditNestedInput
    snapshot?: AuditSnapshotUncheckedUpdateOneWithoutAuditNestedInput
  }

  export type AuditUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumAuditSourceFieldUpdateOperationsInput | $Enums.AuditSource
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    overallScore?: IntFieldUpdateOperationsInput | number
    onPageScore?: IntFieldUpdateOperationsInput | number
    technicalScore?: IntFieldUpdateOperationsInput | number
    contentScore?: IntFieldUpdateOperationsInput | number
    performanceScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMemberUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type ProjectMemberUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMemberUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditCreateManyPageInput = {
    id?: string
    projectId: string
    source?: $Enums.AuditSource
    url: string
    title?: string | null
    overallScore: number
    onPageScore: number
    technicalScore: number
    contentScore: number
    performanceScore: number
    createdAt?: Date | string
  }

  export type AuditUpdateWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumAuditSourceFieldUpdateOperationsInput | $Enums.AuditSource
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    overallScore?: IntFieldUpdateOperationsInput | number
    onPageScore?: IntFieldUpdateOperationsInput | number
    technicalScore?: IntFieldUpdateOperationsInput | number
    contentScore?: IntFieldUpdateOperationsInput | number
    performanceScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutAuditsNestedInput
    metrics?: AuditMetricsUpdateOneWithoutAuditNestedInput
    issues?: IssueUpdateManyWithoutAuditNestedInput
    snapshot?: AuditSnapshotUpdateOneWithoutAuditNestedInput
  }

  export type AuditUncheckedUpdateWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    source?: EnumAuditSourceFieldUpdateOperationsInput | $Enums.AuditSource
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    overallScore?: IntFieldUpdateOperationsInput | number
    onPageScore?: IntFieldUpdateOperationsInput | number
    technicalScore?: IntFieldUpdateOperationsInput | number
    contentScore?: IntFieldUpdateOperationsInput | number
    performanceScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metrics?: AuditMetricsUncheckedUpdateOneWithoutAuditNestedInput
    issues?: IssueUncheckedUpdateManyWithoutAuditNestedInput
    snapshot?: AuditSnapshotUncheckedUpdateOneWithoutAuditNestedInput
  }

  export type AuditUncheckedUpdateManyWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    source?: EnumAuditSourceFieldUpdateOperationsInput | $Enums.AuditSource
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    overallScore?: IntFieldUpdateOperationsInput | number
    onPageScore?: IntFieldUpdateOperationsInput | number
    technicalScore?: IntFieldUpdateOperationsInput | number
    contentScore?: IntFieldUpdateOperationsInput | number
    performanceScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssueCreateManyAuditInput = {
    id?: string
    code: string
    category: string
    severity: $Enums.Severity
    status?: $Enums.IssueStatus
    title: string
    message: string
    recommendation: string
    selector?: string | null
    evidence?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IssueUpdateWithoutAuditInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    recommendation?: StringFieldUpdateOperationsInput | string
    selector?: NullableStringFieldUpdateOperationsInput | string | null
    evidence?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: IssueStatusHistoryUpdateManyWithoutIssueNestedInput
  }

  export type IssueUncheckedUpdateWithoutAuditInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    recommendation?: StringFieldUpdateOperationsInput | string
    selector?: NullableStringFieldUpdateOperationsInput | string | null
    evidence?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: IssueStatusHistoryUncheckedUpdateManyWithoutIssueNestedInput
  }

  export type IssueUncheckedUpdateManyWithoutAuditInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityFieldUpdateOperationsInput | $Enums.Severity
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    recommendation?: StringFieldUpdateOperationsInput | string
    selector?: NullableStringFieldUpdateOperationsInput | string | null
    evidence?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssueStatusHistoryCreateManyIssueInput = {
    id?: string
    fromStatus?: $Enums.IssueStatus | null
    toStatus: $Enums.IssueStatus
    changedById?: string | null
    changedAt?: Date | string
  }

  export type IssueStatusHistoryUpdateWithoutIssueInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus | null
    toStatus?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    changedById?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssueStatusHistoryUncheckedUpdateWithoutIssueInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus | null
    toStatus?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    changedById?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssueStatusHistoryUncheckedUpdateManyWithoutIssueInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus | null
    toStatus?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    changedById?: NullableStringFieldUpdateOperationsInput | string | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
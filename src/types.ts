export interface Type<T = any> extends Function {
  new (...args: any[]): T;
}
export type JsonResponse<T = any> = Record<string, T>;
export type AllowableKeys<T> = keyof T;

export type CamelToSnakeCase<S extends string> = S extends `${infer T}${infer U}`
  ? `${T extends Capitalize<T> ? '_' : ''}${Lowercase<T>}${CamelToSnakeCase<U>}`
  : S;
export type CamelCaseObject<T> = { [K in keyof T as CamelToSnakeCase<K & string>]?: string | number };

export type OptionalObject<T> = { [K in keyof T]?: T[K] };
export type Nullable<T> = T | null;
export type Mutable<T> = {
  -readonly [K in keyof T]: Nullable<T[K]>;
};

// https://github.com/Microsoft/TypeScript/issues/27024#issuecomment-421529650
export type IfEquals<X, Y, A, B> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? A : B;
export type WritableKeysOf<T> = {
  [P in keyof T]: IfEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, P, never>;
}[keyof T];
export type WritablePart<T> = Pick<T, WritableKeysOf<T>>;

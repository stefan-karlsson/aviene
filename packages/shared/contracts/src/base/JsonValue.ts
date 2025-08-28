type Scalar = null | boolean | number | string;

export type JsonValue<T> = [T] extends [Scalar | undefined]
  ? Scalar
  : [T] extends [Record<number, unknown>]
    ? { [K in keyof T]: JsonValue<T[K]> }
    : never;

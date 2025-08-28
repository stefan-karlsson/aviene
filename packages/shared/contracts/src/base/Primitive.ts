/**
 * Represents any JavaScript primitive.
 *
 * Includes: string, number, bigint, boolean, undefined, symbol, and null.
 *
 * @remarks
 * Useful for generic utilities, serialization, and type guards where only primitive are allowed.
 *
 * @example
 * ```typescript
 * function isPrimitive(val: unknown): val is Primitive {
 *   return (
 *     val === null ||
 *     ['string', 'number', 'bigint', 'boolean', 'undefined', 'symbol'].includes(typeof val)
 *   );
 * }
 * ```
 *
 * @tip
 * Use {@link NonNullable} with Primitive to exclude `null` and `undefined`.
 */
export type Primitive =
  | string
  | number
  | bigint
  | boolean
  | undefined
  | symbol
  | null;

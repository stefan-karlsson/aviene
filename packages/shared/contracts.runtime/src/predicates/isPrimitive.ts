import type { Primitive } from '@aviene/contracts/Primitive';

/**
 * Determines if a value is a JavaScript primitive.
 *
 * @param val - The value to check.
 * @returns True if the value is a primitive (string, number, bigint, boolean, undefined, symbol, or null).
 */
export function isPrimitive(val: unknown): val is Primitive {
  return (
    val === null ||
    ['string', 'number', 'bigint', 'boolean', 'undefined', 'symbol'].includes(
      typeof val,
    )
  );
}

import type { Primitive } from '@aviene/contracts';
import { isPresent } from './isPresent.ts';
import { isPrimitive } from './isPrimitive.ts';

/**
 * Type guard that checks if a value is both present (not null or undefined)
 * and a primitive value (string, number, boolean, bigint, symbol).
 *
 * @param value - The value to check.
 * @returns True if the value is a present primitive, otherwise false.
 */
export function isPresentPrimitive(
  value: unknown,
): value is NonNullable<Primitive> {
  return isPresent(value) && isPrimitive(value);
}

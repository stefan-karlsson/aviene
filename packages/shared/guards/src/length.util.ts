import type { LengthCheckable } from '#root/types.js';
import { isEmpty } from './is-empty.util.js';

export function lengthIsBetween(
  value: LengthCheckable,
  min: number,
  max: number,
): boolean {
  if (isEmpty(value)) {
    throw new Error('Cannot check length of a value. Provided value is empty');
  }

  const valueLength =
    typeof value === 'number' ? value.toString().length : value.length;

  return valueLength >= min && valueLength <= max;
}

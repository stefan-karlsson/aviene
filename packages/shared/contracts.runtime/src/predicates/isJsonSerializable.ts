import type { JsonSerializable } from '@aviene/contracts/JsonSerializable';
import { isObject } from './isObject.ts';

/**
 * Type guard to check if a value implements the JsonSerializable interface.
 *
 * Returns true if the provided item is an object and has a `toJSON` method,
 * indicating it can be serialized to JSON using `JSON.stringify`.
 *
 * @param item - The value to check for JSON serializability.
 * @returns True if the item is JsonSerializable, otherwise false.
 */
export function isJsonSerializable(value: unknown): value is JsonSerializable {
  if (isObject(value)) {
    return 'toJSON' in value;
  }

  return false;
}

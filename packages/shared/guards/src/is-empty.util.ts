/**
 * Determines whether a given value is considered "empty".
 *
 * - Returns `true` for: `undefined`, `null`, empty strings, empty arrays,
 *   arrays where all items are empty, and empty objects.
 * - Returns `false` for: numbers, booleans, dates, and non-empty objects/arrays/strings.
 *
 * @param value - The value to check for emptiness.
 * @returns `true` if the value is empty, otherwise `false`.
 */
export function isEmpty(value: unknown) {
  if (typeof value === 'number' || typeof value === 'boolean') {
    return false;
  }

  if (typeof value === 'undefined' || value === null) {
    return true;
  }

  if (value instanceof Date) {
    return false;
  }

  if (Array.isArray(value)) {
    if (value.length === 0) return true;
    if (value.every((item) => isEmpty(item))) return true;
  }

  if (value instanceof Object && Object.keys(value).length === 0) {
    return true;
  }

  if (value === '') {
    return true;
  }

  return false;
}

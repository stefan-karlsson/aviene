/**
 * Asserts that the provided value is neither `null` nor `undefined`.
 *
 * @typeParam T - The type of the value being checked.
 * @param value - The value to assert as non-nullable.
 * @throws {TypeError} If the value is `null` or `undefined`.
 * @remarks
 * This function is useful for narrowing types in TypeScript and will throw
 * a `TypeError` if the value is nullable.
 */
export function assertNotNullable<T>(
  value: T,
): asserts value is NonNullable<T> {
  if (value === null || value === undefined) {
    throw new TypeError(
      `Expected value to be non-nullable, but received a null or undefined value.`,
    );
  }
}

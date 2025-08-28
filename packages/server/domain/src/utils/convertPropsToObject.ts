import { isJsonSerializable, isObject } from '@aviene/contracts.runtime';

function convertToRaw(item: unknown) {
  if (isJsonSerializable(item)) {
    return item.toJSON();
  }

  return item;
}
// TODO: Move to its own util library.

/**
 * Converts a given props object to a plain object, recursively converting array elements
 * and serializable objects using their `toJSON` method if available.
 *
 * @param props - The input value expected to be an object whose properties may include arrays or serializable objects.
 * @returns A new plain object with all properties and nested array elements converted to raw values.
 * @throws {TypeError} If the input is not an object.
 */
export function convertPropsToObject(props: unknown) {
  if (!isObject(props)) {
    throw new TypeError(
      `Unable to convert props type <${typeof props}> to object`,
    );
  }

  const propsCopy = { ...props };

  for (const prop in propsCopy) {
    if (Array.isArray(propsCopy[prop])) {
      propsCopy[prop] = propsCopy[prop].map((item) => {
        return convertToRaw(item);
      });
    }

    propsCopy[prop] = convertToRaw(propsCopy[prop]);
  }

  return propsCopy;
}

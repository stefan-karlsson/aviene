/**
 * Represents an object that can be serialized to JSON.
 *
 * Implement this interface to provide a custom `toJSON` method
 * for controlling how the object is converted to JSON format.
 */
export interface JsonSerializable {
  toJSON: () => unknown;
}

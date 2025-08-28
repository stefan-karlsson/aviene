export type GenericRecord<
  K extends PropertyKey = PropertyKey,
  V = unknown,
> = Record<K, V>;

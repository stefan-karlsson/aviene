import type { Primitive } from '@aviene/contracts';

/**
 * Represents a domain value object primitive.
 *
 * @typeParam T - The underlying primitive type or Date.
 *
 * Used to wrap primitive values or Date objects in the domain layer,
 * ensuring type safety and value object semantics.
 */
export interface DomainPrimitive<T extends NonNullable<Primitive> | Date> {
  value: T;
}

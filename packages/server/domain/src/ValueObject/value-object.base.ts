import { type Primitive } from '@aviene/contracts';
import { isPresent } from '@aviene/contracts.runtime';
import { ArgumentNotProvidedException } from '@aviene/exceptions';
import { isEmpty } from '@aviene/guards/isEmpty';
import type { DomainPrimitive } from '../types.ts';
import { convertPropsToObject } from '../utils/convertPropsToObject.ts';

/**
 * Defines the shape of properties accepted by a ValueObject.
 * If T is a non nullable primitive or Date, wraps it in DomainPrimitive<T>.
 * Otherwise, uses T directly.
 */
type ValueObjectProps<T> = T extends NonNullable<Primitive> | Date
  ? DomainPrimitive<T>
  : T;

type PartialValueObjectProps<T> = T extends NonNullable<Primitive> | Date
  ? DomainPrimitive<T>
  : Partial<T>;

export abstract class ValueObject<T> {
  protected readonly props: ValueObjectProps<T>;

  constructor(props: ValueObjectProps<T>) {
    this.checkIfEmpty(props);
    this.validate(props);

    this.props = props;
  }

  protected abstract validate(props: ValueObjectProps<T>): void;

  static isValueObject(obj: unknown): obj is ValueObject<unknown> {
    return obj instanceof ValueObject;
  }

  /**
   *  Check if two Value Objects are equal. Checks structural equality.
   * @param valueObject ValueObject
   */
  equals(vo: unknown) {
    if (!isPresent(vo)) {
      return false;
    }

    return JSON.stringify(this) === JSON.stringify(vo);
  }

  toString() {
    if (this.isDomainPrimitive(this.props)) {
      return String(this.props.value);
    }

    return JSON.stringify(this.toJSON());
  }

  /**
   * Converts the value object to a plain JSON representation.
   * If the value object wraps a primitive (DomainPrimitive), returns its value directly.
   * Otherwise, returns a frozen shallow copy of the object's properties.
   *
   * @returnsThe JSON-serializable representation of the value object.
   */
  toJSON() {
    if (this.isDomainPrimitive(this.props)) {
      return this.props.value;
    }

    const propsCopy = convertPropsToObject(this.props);

    return Object.freeze(propsCopy as T);
  }

  /**
   * Creates a shallow clone of the current ValueObject, overriding properties with the provided partial props.
   *
   * @typeParam C - The concrete ValueObject type.
   * @param props - Partial properties to override in the cloned ValueObject.
   * @returns A new instance of the ValueObject with merged properties.
   */
  clone<C extends ValueObject<T>>(
    this: C,
    props: PartialValueObjectProps<T>,
  ): C {
    const ctor = this.constructor as new (props: ValueObjectProps<T>) => C;

    return new ctor({
      ...this.props,
      ...props,
    });
  }

  private checkIfEmpty(props: ValueObjectProps<T>): void {
    if (
      isEmpty(props) ||
      (this.isDomainPrimitive(props) && isEmpty(props.value))
    ) {
      throw new ArgumentNotProvidedException('Property cannot be empty');
    }
  }

  private isDomainPrimitive(
    obj: unknown,
  ): obj is DomainPrimitive<T & (NonNullable<Primitive> | Date)> {
    if (Object.prototype.hasOwnProperty.call(obj, 'value')) {
      return true;
    }

    return false;
  }
}

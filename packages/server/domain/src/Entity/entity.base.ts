import { convertPropsToObject } from '#root/utils/convertPropsToObject.js';
import { isObject } from '@aviene/contracts.runtime';
import {
  ArgumentInvalidException,
  ArgumentNotProvidedException,
  ArgumentOutOfRangeException,
} from '@aviene/exceptions';
import { isEmpty } from '@aviene/guards/isEmpty';

export type EntityId = string;

interface CreateEntityProps<EntityProps> {
  id: EntityId;
  props: EntityProps;
  createdAt?: Date;
  updatedAt?: Date;
}

export abstract class Entity<EntityProps> {
  /**
   * The domain-specific properties of the entity.
   * These are provided at construction and define the entity's state,
   * excluding base properties like id, createdAt, and updatedAt.
   * Immutable after construction.
   */
  protected readonly props: EntityProps;

  /**
   * Unique identifier for the entity.
   *
   * Id is set in the concrete entity implementation to support
   * different Id types depending on your needs.
   * For example, it could be a UUID for aggregate roots,
   * and shortid/nanoid for child entities.
   */
  private _id!: EntityId;

  private _createdAt: Date;
  private _updatedAt: Date;

  constructor(input: CreateEntityProps<EntityProps>) {
    const { id, createdAt, updatedAt, props } = input;

    this._id = id;

    this.validateProps(props);

    const now = new Date();
    this._createdAt = createdAt ?? now;
    this._updatedAt = updatedAt ?? now;

    this.props = props;

    this.validate();
  }

  /**
   * Abstract method to validate the entity.
   * Should be implemented by subclasses to enforce entity invariants.
   */
  abstract validate(): void;

  /**
   * Gets the unique identifier of the entity.
   *
   * @returns The entity's unique identifier.
   */
  get id() {
    return this._id;
  }

  /**
   * Gets the date when the entity was created.
   *
   * @returns The entity's creation date.
   */
  get createdAt() {
    return this._createdAt;
  }

  /**
   * Gets the date when the entity was last updated.
   *
   * @returns The entity's last updated date.
   */
  get updatedAt() {
    return this._updatedAt;
  }

  /**
   * Determines if the given object is an instance of Entity.
   *
   * @param entity - The object to check.
   * @returns True if the object is an Entity, false otherwise.
   */
  static isEntity(entity: unknown): entity is Entity<unknown> {
    return entity instanceof Entity;
  }

  /**
   * Compares this entity to another for equality based on their IDs.
   *
   * @param object - The entity to compare with.
   * @returns True if both entities have the same ID, false otherwise.
   */
  equals(object: Entity<EntityProps> | undefined) {
    if (object === undefined) {
      return false;
    }

    if (this === object) {
      return true;
    }

    if (!Entity.isEntity(object)) {
      return false;
    }

    return this.id ? this.id === object.id : false;
  }

  /**
   * Creates a new instance of the entity with updated properties.
   * The clone will have the same type and base properties as the original,
   * but with the provided partial properties merged in.
   *
   * @typeParam C - The concrete entity type.
   * @param props - Partial properties to override in the cloned entity.
   * @returns A new instance of the entity with merged properties.
   */
  clone<C extends Entity<EntityProps>>(
    this: C,
    props: Partial<EntityProps>,
  ): C {
    const ctor = this.constructor as new (
      props: CreateEntityProps<EntityProps>,
    ) => C;

    return new ctor({
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      props: {
        ...this.props,
        ...props,
      },
    });
  }

  /**
   * Converts the entity's properties to a plain, deeply frozen object suitable for serialization.
   * Only the domain-specific properties are included (not id, createdAt, or updatedAt).
   *
   * @returns A frozen plain object copy of the entity's properties.
   */
  public toJson() {
    const propsCopy = convertPropsToObject(this.props);

    const frozenCopy = Object.freeze(propsCopy);

    return frozenCopy;
  }

  /**
   * Returns a string representation of the entity.
   *
   * @remarks
   * The string is a JSON serialization of the entity's domain-specific properties,
   * as returned by {@link Entity.toJson}. This is useful for logging or debugging.
   *
   * @returns The JSON string representation of the entity's properties.
   */
  public toString(): string {
    return JSON.stringify(this.toJson());
  }

  /**
   * Converts the entity to a plain object, including all properties.
   *
   * @returns A frozen plain object representation of the entity.
   */
  toObject() {
    const plainProps = convertPropsToObject(this.props);

    const result = {
      id: this._id,
      createdAt: this._createdAt,
      updatedAt: this._updatedAt,
      ...plainProps,
    };
    return Object.freeze(result);
  }

  /**
   * Validates the entity's properties.
   * Throws an exception if the properties are invalid.
   *
   * @param props - The properties to validate.
   * @throws {ArgumentNotProvidedException} If props are empty.
   * @throws {ArgumentInvalidException} If props are not an object.
   * @throws {ArgumentOutOfRangeException} If props exceed the allowed number.
   */
  private validateProps(props: EntityProps) {
    const MAX_PROPS = 50;

    if (isEmpty(props)) {
      throw new ArgumentNotProvidedException(
        'Entity props should not be empty',
      );
    }

    if (!isObject(props)) {
      throw new ArgumentInvalidException('Entity props should be an object');
    }

    if (Object.keys(props).length > MAX_PROPS) {
      throw new ArgumentOutOfRangeException(
        `Entity props should not have more than ${MAX_PROPS.toString()} properties`,
      );
    }
  }
}

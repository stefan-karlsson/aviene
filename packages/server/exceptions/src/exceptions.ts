import { ExceptionBase } from './exception.base.js';
import {
  ARGUMENT_INVALID,
  ARGUMENT_NOT_PROVIDED,
  ARGUMENT_OUT_OF_RANGE,
  CONFLICT,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
} from './exception.codes.js';

/**
 * Thrown when an invalid argument is provided to a method, function, or constructor.
 *
 * @example
 * throw new ArgumentInvalidException('The provided email is not valid.');
 */
export class ArgumentInvalidException extends ExceptionBase {
  readonly code = ARGUMENT_INVALID;
}

/**
 * Thrown when a required argument is missing, null, undefined, or an empty object/array.
 *
 * @example
 * throw new ArgumentNotProvidedException('Username must be provided.');
 */
export class ArgumentNotProvidedException extends ExceptionBase {
  readonly code = ARGUMENT_NOT_PROVIDED;
}

/**
 * Thrown when an argument is outside the allowed range (e.g., string/array length, number bounds).
 *
 * @example
 * throw new ArgumentOutOfRangeException('Age must be between 18 and 99.');
 */
export class ArgumentOutOfRangeException extends ExceptionBase {
  readonly code = ARGUMENT_OUT_OF_RANGE;
}

/**
 * Thrown when a conflict occurs, typically due to conflicting entities in the database.
 *
 * @example
 * throw new ConflictException('Email address already exists.');
 */
export class ConflictException extends ExceptionBase {
  readonly code = CONFLICT;
}

/**
 * Thrown when an entity or resource is not found.
 *
 * @example
 * throw new NotFoundException('User not found.');
 */
export class NotFoundException extends ExceptionBase {
  static readonly message = 'Not found';

  /**
   * @param message Optional custom error message.
   */
  constructor(message = NotFoundException.message) {
    super(message);
  }

  readonly code = NOT_FOUND;
}

/**
 * Thrown for unexpected internal server errors that do not fit other categories.
 *
 * @example
 * throw new InternalServerErrorException('Unexpected error occurred.');
 */
export class InternalServerErrorException extends ExceptionBase {
  static readonly message = 'Internal server error';

  /**
   * @param message Optional custom error message.
   */
  constructor(message = InternalServerErrorException.message) {
    super(message);
  }

  readonly code = INTERNAL_SERVER_ERROR;
}

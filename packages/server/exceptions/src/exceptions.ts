import {
  ARGUMENT_INVALID,
  ARGUMENT_NOT_PROVIDED,
  ARGUMENT_OUT_OF_RANGE,
  CONFLICT,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
} from './exception.codes.js';
import { ExceptionBase } from './exception.base.js';

/**
 * Exception thrown when an invalid argument is provided to a method, function, or constructor.
 *
 * @example
 * throw new ArgumentInvalidException('The provided email is not valid.');
 *
 * @class ArgumentInvalidException
 * @extends {ExceptionBase}
 */
export class ArgumentInvalidException extends ExceptionBase {
  readonly code = ARGUMENT_INVALID;
}

/**
 * Exception thrown when a required argument is missing, null, undefined, or an empty object/array.
 *
 * @example
 * throw new ArgumentNotProvidedException('Username must be provided.');
 *
 * @class ArgumentNotProvidedException
 * @extends {ExceptionBase}
 */
export class ArgumentNotProvidedException extends ExceptionBase {
  readonly code = ARGUMENT_NOT_PROVIDED;
}

/**
 * Exception thrown when an argument is outside the allowed range.
 * For example: string/array length constraints, or a number not within min/max bounds.
 *
 * @example
 * throw new ArgumentOutOfRangeException('Age must be between 18 and 99.');
 *
 * @class ArgumentOutOfRangeException
 * @extends {ExceptionBase}
 */
export class ArgumentOutOfRangeException extends ExceptionBase {
  readonly code = ARGUMENT_OUT_OF_RANGE;
}

/**
 * Exception thrown when a conflict occurs, typically due to conflicting entities in the database.
 *
 * @example
 * throw new ConflictException('Email address already exists.');
 *
 * @class ConflictException
 * @extends {ExceptionBase}
 */
export class ConflictException extends ExceptionBase {
  readonly code = CONFLICT;
}

/**
 * Exception thrown when an entity or resource is not found.
 *
 * @example
 * throw new NotFoundException('User not found.');
 *
 * @class NotFoundException
 * @extends {ExceptionBase}
 */
export class NotFoundException extends ExceptionBase {
  /**
   * Default not found message.
   */
  static readonly message = 'Not found';

  /**
   * Creates a new NotFoundException.
   * @param message Optional custom error message.
   */
  constructor(message = NotFoundException.message) {
    super(message);
  }

  readonly code = NOT_FOUND;
}

/**
 * Exception thrown for unexpected internal server errors that do not fit other categories.
 *
 * @example
 * throw new InternalServerErrorException('Unexpected error occurred.');
 *
 * @class InternalServerErrorException
 * @extends {ExceptionBase}
 */
export class InternalServerErrorException extends ExceptionBase {
  /**
   * Default internal server error message.
   */
  static readonly message = 'Internal server error';

  /**
   * Creates a new InternalServerErrorException.
   * @param message Optional custom error message.
   */
  constructor(message = InternalServerErrorException.message) {
    super(message);
  }

  readonly code = INTERNAL_SERVER_ERROR;
}

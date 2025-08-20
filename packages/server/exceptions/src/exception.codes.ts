/**
 * Exception Code Constants
 *
 * Each exported constant represents a unique string code for a specific type of exception.
 * Using string codes for exceptions is a best practice, especially in distributed systems,
 * because:
 *   - When exceptions are transferred between processes or over the network,
 *     JavaScript's `instanceof` checks are no longer reliable.
 *   - String codes provide a stable, language-agnostic way to identify error types.
 *   - Codes can be shared between server and client, or across microservices,
 *     enabling consistent error handling and mapping.
 *
 * Usage:
 *   - Attach the relevant code to your custom exceptions.
 *   - On the receiving side, check the `code` property to handle specific errors.
 *   - These constants can be imported wherever error handling logic is implemented.
 */

export const ARGUMENT_INVALID = 'GENERIC.ARGUMENT_INVALID';
export const ARGUMENT_OUT_OF_RANGE = 'GENERIC.ARGUMENT_OUT_OF_RANGE';
export const ARGUMENT_NOT_PROVIDED = 'GENERIC.ARGUMENT_NOT_PROVIDED';
export const NOT_FOUND = 'GENERIC.NOT_FOUND';
export const CONFLICT = 'GENERIC.CONFLICT';
export const INTERNAL_SERVER_ERROR = 'GENERIC.INTERNAL_SERVER_ERROR';

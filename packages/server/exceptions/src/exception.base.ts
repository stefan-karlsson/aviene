/**
 * Represents the serialized form of an exception.
 * Useful for transferring exception data across process boundaries,
 * logging, or returning structured error information in APIs.
 */
export interface SerializedException {
  /** Exception message describing the error. */
  message: string;

  /** Application-specific or domain-specific error code. */
  code: string;

  /** Unique identifier for correlating logs and tracing requests. */
  correlationId: string;

  /** Optional stack trace for debugging (omit in production responses). */
  stack?: string | undefined;

  /** Optional stringified cause of the exception, if any. */
  cause?: string | undefined;

  /** Optional metadata with additional technical details (avoid sensitive data). */
  metadata?: unknown;
}

/**
 * Base class for all custom exceptions in the application.
 * Extends the built-in Error class and adds support for error codes,
 * correlation IDs, causes, and metadata.
 */
export abstract class ExceptionBase extends Error {
  private readonly _message: string;
  private readonly _cause: Error | undefined;
  private readonly _metadata?: unknown;

  /** Application-specific or domain-specific error code. */
  abstract code: string;

  /** Unique identifier for correlating logs and tracing requests. */
  public readonly correlationId!: string; // TODO: Needs to be implemented

  /**
   * Constructs a new ExceptionBase.
   * @param {string} message - Human-readable error message.
   * @param {Error} [cause] - Optional underlying error that caused this exception.
   * @param {unknown} [metadata] - Optional non-sensitive technical details for debugging.
   *
   * **Security Note:** Do not include sensitive information in 'metadata'
   * as exception data may be logged or exposed. Only include non-sensitive
   * information that aids debugging.
   */
  constructor(message: string, cause?: Error, metadata?: unknown) {
    super(message);

    this._message = message;
    this._cause = cause;
    this._metadata = metadata;

    Error.captureStackTrace(this, this.constructor);
    // const ctx = RequestContextService.getContext();
    // this.correlationId = ctx.requestId;
  }

  /**
   * Serializes the exception to a plain object.
   * This is necessary because Node.js Error objects are not
   * properly serialized by default when sending to external processes.
   *
   * @returns {SerializedException} The serialized exception.
   *
   * @remarks
   * Be careful not to expose stack traces or sensitive data in production environments.
   */
  toJSON(): SerializedException {
    return {
      message: this._message,
      code: this.code,
      stack: this.stack,
      correlationId: this.correlationId,
      cause: JSON.stringify(this._cause),
      metadata: this._metadata,
    };
  }
}

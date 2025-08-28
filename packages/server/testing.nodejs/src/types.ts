import type { UnknownFunction } from '@aviene/contracts';

export interface MockFunctionCall<
  F extends UnknownFunction,
  ReturnType = F extends (...args: unknown[]) => infer T
    ? T
    : F extends abstract new (...args: unknown[]) => infer T
      ? T
      : unknown,
  Args = F extends (...args: infer Y) => unknown
    ? Y
    : F extends abstract new (...args: infer Y) => unknown
      ? Y
      : unknown[],
> {
  /**
   * An array of the arguments passed to the mock function.
   */
  arguments: Args;
  /**
   * If the mocked function threw then this property contains the thrown value.
   */
  error: unknown;
  /**
   * The value returned by the mocked function.
   *
   * If the mocked function threw, it will be `undefined`.
   */
  result: ReturnType | undefined;
  /**
   * An `Error` object whose stack can be used to determine the callsite of the mocked function invocation.
   */
  stack: Error;
  /**
   * If the mocked function is a constructor, this field contains the class being constructed.
   * Otherwise this will be `undefined`.
   */
  target: F extends abstract new (...args: unknown[]) => unknown
    ? F
    : undefined;
  /**
   * The mocked function's `this` value.
   */
  this: unknown;
}

export type MockedFunction<T extends UnknownFunction> = T & {
  mock: { calls: MockFunctionCall<T>[] };
};

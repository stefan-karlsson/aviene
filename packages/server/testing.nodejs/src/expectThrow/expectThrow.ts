import assert from 'node:assert/strict';

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
export function expectThrow<T extends Error>(
  fn: () => unknown,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ctor: new (...args: any[]) => T,
) {
  assert.throws(fn, (e) => e instanceof ctor);
}

import type { MockedFunction } from '#root/types';
import type { UnknownFunction } from '@aviene/contracts/UnknownFunction';
import assert from 'node:assert';

const deepEquals = (left: unknown, right: unknown): boolean => {
  try {
    assert.deepEqual(left, right);
    return true;
  } catch {
    return false;
  }
};

export function verifyThat<T extends UnknownFunction>(fn: MockedFunction<T>) {
  function calledWith(...args: Parameters<T>) {
    assert.ok(
      fn.mock.calls.length >= 1 &&
        fn.mock.calls.some((call) => deepEquals(call.arguments, args)),
    );
  }

  function calledTimes(times: number) {
    assert.equal(fn.mock.calls.length, times);
  }

  function notCalled() {
    assert.equal(fn.mock.calls.length, 0);
  }

  function called() {
    assert.ok(fn.mock.calls.length > 0);
  }

  return {
    calledWith,
    calledTimes,
    notCalled,
    called,
  };
}

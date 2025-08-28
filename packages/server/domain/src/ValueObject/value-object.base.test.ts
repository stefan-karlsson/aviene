import type { DomainPrimitive } from '#root/types.js';
import { ArgumentNotProvidedException } from '@aviene/exceptions';
import { verifyThat } from '@aviene/testing.nodejs';
import assert from 'node:assert/strict';

import { describe, test } from 'node:test';
import { ValueObject } from './value-object.base.js';

await describe('ValueObject', async () => {
  await test('throws when constructed with no props', () => {
    class A extends ValueObject<void> {
      protected validate() {
        return;
      }
    }

    assert.throws(() => new A(), ArgumentNotProvidedException);
  });

  await describe('Primitive ValueObject', async () => {
    await test('throws if validation fails', () => {
      class A extends ValueObject<string> {
        protected validate(props: DomainPrimitive<string>) {
          if (props.value.length < 3) throw new Error('Invalid value');
        }
      }
      assert.throws(() => new A({ value: 'a' }), /Invalid value/);
    });

    await test('is a value object', () => {
      class A extends ValueObject<string> {
        protected validate(): void {
          return;
        }
      }

      const a = new A({ value: 'foo' });

      assert.ok(ValueObject.isValueObject(a));
    });

    await test('calls validate with correct props', (t) => {
      const spy = t.mock.fn();
      const params = { value: 'foo' };

      class A extends ValueObject<string> {
        protected validate(props: DomainPrimitive<string>): void {
          // Used to ensure method is called
          spy(props);
        }
      }

      new A(params);
      // TODO: ensure typesafety

      verifyThat(spy).calledWith(params);
    });

    await test('structural equality works', () => {
      class A extends ValueObject<string> {
        protected validate(): void {
          return;
        }
      }

      class B extends ValueObject<string> {
        protected validate(): void {
          return;
        }
      }

      const a = new A({ value: 'foo' });
      const b = new B({ value: 'foo' });

      assert.ok(a.equals(b));
    });

    await test('is not equal to null', () => {
      class A extends ValueObject<string> {
        protected validate(): void {
          return;
        }
      }

      const a = new A({ value: 'foo' });

      assert.ok(!a.equals(null));
    });

    await test('converts to string correctly', () => {
      class A extends ValueObject<string> {
        protected validate(): void {
          return;
        }
      }

      const a = new A({ value: 'foo' });

      const stringValue = a.toString();

      assert.equal(stringValue, 'foo');
    });

    await test('serializes to JSON correctly', () => {
      class A extends ValueObject<string> {
        protected validate(): void {
          return;
        }
      }

      const a = new A({ value: 'foo' });
      const jsonValue = a.toJSON();

      assert.deepEqual(jsonValue, 'foo');
    });

    await test('clones with override', () => {
      class A extends ValueObject<string> {
        protected validate(): void {
          return;
        }
      }

      const a = new A({ value: 'foo' });
      const b = a.clone({ value: 'bar' });

      const jsonValue = b.toJSON();

      assert.deepStrictEqual(jsonValue, 'bar');
      assert.ok(b instanceof A);
    });
  });

  await describe('Object ValueObject', async () => {
    await test('throws if validation fails', () => {
      interface Props {
        foo: string;
      }
      class A extends ValueObject<Props> {
        protected validate() {
          throw new Error('Validation failed');
        }
      }

      assert.throws(() => new A({ foo: 'bar' }), /Validation failed/);
    });

    await test('is a value object', () => {
      interface Props {
        foo: string;
      }
      class A extends ValueObject<Props> {
        protected validate(): void {
          return;
        }
      }

      const a = new A({ foo: 'foo' });

      assert.ok(ValueObject.isValueObject(a));
    });

    await test('calls validate with correct props', (t) => {
      const spy = t.mock.fn();

      interface Props {
        foo: string;
      }

      class A extends ValueObject<Props> {
        protected validate(props: Props) {
          spy(props);
        }
      }
      const props = { foo: 'bar' };
      new A(props);

      verifyThat(spy).calledWith(props);
    });

    await test('structural equality works', () => {
      interface Props {
        foo: string;
      }

      class A extends ValueObject<Props> {
        protected validate(): void {
          return;
        }
      }

      class B extends ValueObject<Props> {
        protected validate(): void {
          return;
        }
      }

      const a = new A({ foo: 'bar' });
      const b = new B({ foo: 'bar' });

      assert.ok(a.equals(b));
    });

    await test('is not equal to null', () => {
      interface Props {
        foo: string;
      }

      class A extends ValueObject<Props> {
        protected validate(): void {
          return;
        }
      }

      const a = new A({ foo: 'bar' });

      assert.ok(!a.equals(null));
    });

    await test('converts to string correctly', () => {
      interface Props {
        foo: string;
      }

      class A extends ValueObject<Props> {
        protected validate(): void {
          return;
        }
      }

      const a = new A({ foo: 'bar' });

      const stringValue = a.toString();
      assert.equal(stringValue, '{"foo":"bar"}');
    });

    await test('serializes to JSON correctly', () => {
      interface Props {
        foo: string;
      }

      class A extends ValueObject<Props> {
        protected validate(): void {
          return;
        }
      }

      const a = new A({ foo: 'bar' });
      const jsonValue = a.toJSON();

      assert.deepStrictEqual(jsonValue, { foo: 'bar' });
    });

    await test('clones with override', () => {
      interface Props {
        foo: string;
        bar: string;
      }

      class A extends ValueObject<Props> {
        protected validate(): void {
          return;
        }
      }

      const a = new A({ foo: 'foo', bar: 'bar' });
      const b = a.clone({ foo: 'bar' });

      const jsonValue = b.toJSON();

      assert.deepStrictEqual(jsonValue, { foo: 'bar', bar: 'bar' });
      assert.ok(b instanceof A);
    });
  });
});

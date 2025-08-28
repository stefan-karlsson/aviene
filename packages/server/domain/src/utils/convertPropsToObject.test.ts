import assert from 'node:assert';
import { describe, test } from 'node:test';
import { convertPropsToObject } from './convertPropsToObject.ts';

await describe('convertPropsToObject', async () => {
  // eslint-disable-next-line @typescript-eslint/no-extraneous-class
  class Foo {}

  class Serializable {
    toJSON() {
      return 'serializable';
    }
  }

  await describe('valid usage', async () => {
    await test('converts mixed primitive/object/instance/serializable props to plain object', () => {
      // Arrange
      const props = {
        primitive: 'bar',
        array: [1, 2, 3],
        object: { foo: 'bar' },
        instance: new Foo(),
        serializable: new Serializable(),
      };

      // Act
      const result = convertPropsToObject(props);

      // Assert: check structural transformation
      assert.deepStrictEqual(
        { ...result, instance: undefined }, // override instance for structural check
        {
          primitive: 'bar',
          array: [1, 2, 3],
          object: { foo: 'bar' },
          serializable: 'serializable',
          instance: undefined,
        },
        'Expected to convert all serializable and plain props correctly',
      );

      // Assert: check type integrity
      assert.ok(
        result['instance'] instanceof Foo,
        'Expected "instance" to preserve class type',
      );
    });
  });

  await describe('invalid usage', async () => {
    await test('throws TypeError when props is not an object', () => {
      assert.throws(
        () => convertPropsToObject('foo'),
        TypeError,
        'Expected TypeError for non-object input',
      );
    });

    await test('throws TypeError for null input', () => {
      assert.throws(
        () => convertPropsToObject(null),
        TypeError,
        'Expected TypeError for null input',
      );
    });
  });
});

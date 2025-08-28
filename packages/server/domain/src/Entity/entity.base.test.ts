// entity.test.ts
import { expectThrow } from '@aviene/testing.nodejs';
import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { beforeEach, describe, test } from 'node:test';

import {
  TestEntity,
  type TestEntityProps,
} from '#tests/entities/test.entity.js';
import {
  ArgumentNotProvidedException,
  ArgumentOutOfRangeException,
} from '@aviene/exceptions';
import { Entity } from './entity.base.js';

void describe('Entity', () => {
  let email: string;
  let role: TestEntityProps['role'];
  let now: Date;

  beforeEach(() => {
    email = 'my@email.test';
    role = 'user';
    now = new Date();
  });

  void describe('Construction and Accessors', () => {
    void test('create successfully with valid props', () => {
      const entity = TestEntity.create({ email });

      assert.ok(entity.id);
      assert.equal(entity.createdAt instanceof Date, true);
      assert.equal(entity.updatedAt instanceof Date, true);

      const json = entity.toJson();
      assert.deepStrictEqual(json, { email, role });
      assert.equal(
        Object.isFrozen(json),
        true,
        'toJson() must return a frozen snapshot',
      );
    });

    void test('preserves custom createdAt/updatedAt if provided', () => {
      const id = randomUUID();
      const entity = new TestEntity({
        id,
        props: { email: 'bar', role: 'user' },
        createdAt: now,
        updatedAt: now,
      });

      assert.strictEqual(entity.createdAt, now);
      assert.strictEqual(entity.updatedAt, now);
    });
  });

  void describe('Validation', () => {
    void test('throws if props are empty', () => {
      const id = randomUUID();
      const props = {} as unknown as TestEntityProps;

      const createUser = () => new TestEntity({ id, props });
      expectThrow(createUser, ArgumentNotProvidedException);
    });

    void test('throws if props is null', () => {
      const id = randomUUID();
      const props = null as unknown as TestEntityProps;

      const createUser = () => new TestEntity({ id, props });
      expectThrow(createUser, ArgumentNotProvidedException);
    });

    void test('throws if too many props are passed', () => {
      const id = randomUUID();
      const props = Object.fromEntries(
        Array.from({ length: 51 }, (_, i) => [`key${i.toString()}`, 'value']),
      ) as unknown as TestEntityProps;

      const createUser = () => new TestEntity({ id, props });
      expectThrow(createUser, ArgumentOutOfRangeException);
    });

    void test('throws if validation fails in subclass', () => {
      const id = randomUUID();
      const props: TestEntityProps = { role: '', email };

      const createUser = () => new TestEntity({ id, props });
      expectThrow(createUser, ArgumentNotProvidedException);
    });
  });

  void describe('Equality', () => {
    void test('equals() returns true for same ID and class', () => {
      const id = randomUUID();
      const e1 = new TestEntity({ id, props: { role: 'user', email } });
      const e2 = new TestEntity({ id, props: { role: 'admin', email } });

      assert.ok(e1.equals(e2));
    });

    void test('equals() returns false for different IDs', () => {
      const props: TestEntityProps = { role, email };

      const e1 = new TestEntity({ id: randomUUID(), props });
      const e2 = new TestEntity({ id: randomUUID(), props });

      assert.ok(!e1.equals(e2));
    });

    void test('equals() returns false for null/undefined', () => {
      const props: TestEntityProps = { role, email };
      const e1 = new TestEntity({ id: randomUUID(), props });

      // @ts-expect-error - testing null
      assert.ok(!e1.equals(null));
      assert.ok(!e1.equals(undefined));
    });

    void test('equals() returns true for same instance', () => {
      const props: TestEntityProps = { role, email };
      const e1 = new TestEntity({ id: randomUUID(), props });

      assert.ok(e1.equals(e1));
    });
  });

  void describe('Cloning', () => {
    void test('clone() creates a new entity with overridden props', () => {
      const id = randomUUID();
      const props: TestEntityProps = { role, email };
      const newEmail = 'new@email.test';

      const original = new TestEntity({ id, props });
      const clone = original.clone({ email: newEmail });

      assert.notStrictEqual(clone, original);
      assert.ok(clone instanceof TestEntity);
      assert.deepStrictEqual(clone.toJson(), { role, email: newEmail });
      assert.equal(Object.isFrozen(clone.toJson()), true);

      assert.strictEqual(clone.id, original.id, 'clone should preserve id');
      assert.ok(clone.createdAt instanceof Date);
      assert.ok(clone.updatedAt instanceof Date);
    });
  });

  void describe('Serialization', () => {
    void test('toJson() returns frozen props', () => {
      const id = randomUUID();
      const props: TestEntityProps = { role, email };

      const entity = new TestEntity({ id, props });
      const json = entity.toJson();

      assert.deepStrictEqual(json, props);
      assert.equal(Object.isFrozen(json), true);

      assert.throws(() => {
        json.email = 'mutated@email.test';
      }, /Cannot assign to read only property|read only/);
    });

    void test('toString() returns JSON string of props', () => {
      const id = randomUUID();
      const props: TestEntityProps = { role, email };

      const entity = new TestEntity({ id, props });
      assert.strictEqual(entity.toString(), JSON.stringify(props));
    });

    void test('toObject() includes id and timestamps and is frozen', () => {
      const id = randomUUID();
      const props: TestEntityProps = { role, email };
      const createdAt = now;
      const updatedAt = now;

      const entity = new TestEntity({
        id,
        props,
        createdAt,
        updatedAt,
      });

      const result = entity.toObject();

      assert.deepStrictEqual(result, {
        id,
        createdAt,
        updatedAt,
        ...props,
      });

      assert.equal(Object.isFrozen(result), true);

      assert.throws(() => {
        result.role = 'admin';
      }, /Cannot assign to read only property|read only/);
    });
  });

  void describe('Type Guards', () => {
    void test('isEntity() returns true for entity instances', () => {
      const id = randomUUID();
      const props: TestEntityProps = { role, email };

      const e = new TestEntity({ id, props });
      assert.ok(Entity.isEntity(e));
    });

    void test('isEntity() returns false for non-entities', () => {
      assert.ok(!Entity.isEntity({}));
      assert.ok(!Entity.isEntity('string'));
      assert.ok(!Entity.isEntity(null));
      assert.ok(!Entity.isEntity(undefined));
    });
  });
});

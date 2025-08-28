import { Entity } from '#root/Entity/entity.base.js';
import { ArgumentNotProvidedException } from '@aviene/exceptions';
import { isEmpty } from '@aviene/guards/isEmpty';
import { randomUUID } from 'node:crypto';

export interface TestEntityProps {
  role: string;
  email: string;
}

interface CreateTestEntityProps {
  email: string;
}

export class TestEntity extends Entity<TestEntityProps> {
  static create(create: CreateTestEntityProps): TestEntity {
    const id = randomUUID();

    const props: TestEntityProps = { ...create, role: 'user' };

    const user = new TestEntity({ id, props });

    return user;
  }

  override validate() {
    const { role } = this.props;

    if (isEmpty(role)) {
      throw new ArgumentNotProvidedException('Role must be provided');
    }
  }
}

import type { ObjectLiteral } from '@aviene/contracts';
import { isPresent } from './isPresent.ts';

export function isObject(obj: unknown): obj is ObjectLiteral {
  return isPresent(obj) && !Array.isArray(obj) && typeof obj === 'object';
}

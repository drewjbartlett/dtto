import { copyWith } from './copy-with';
import { Type, WritablePart } from './types';

/**
 * Make an object by passing an object rather than the constructor
 * for better type inference.
 */
export function make<T>(Model: Type<T>, values: WritablePart<T>): T {
  const instance = new Model() as T;

  return copyWith(instance, values);
}

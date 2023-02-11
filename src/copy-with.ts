import { TransformResponse } from './transform-api';
import { OptionalObject, WritablePart } from './types';

/**
 * The models are technically immutable. Though you can technically mutate JS objects / models we want to try to
 * enforce immutability. This allows us to copy an object to a new object without modifying the original
 * object, hence, making it immutable.
 */
export function copyWith<T>(model: T, values: OptionalObject<WritablePart<T>>): T {
  const clone = Object.create(Object.getPrototypeOf(model), Object.getOwnPropertyDescriptors(model));
  const fields = {
    ...clone,
    ...values,
  };

  Object.keys(fields).forEach((key) => {
    Object.defineProperty(clone, key, {
      value: fields[key],
    });
  });

  return clone;
}

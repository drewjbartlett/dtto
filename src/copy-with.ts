import { Mutable, OptionalObject, WritablePart } from './types';
import { deepFreeze } from './utils/deep-freeze';
import { unfreeze } from './utils/unfreeze';

/**
 * The models are technically immutable. Though you can technically mutate JS objects / models we want to try to
 * enforce immutability. This allows us to copy an object to a new object without modifying the original
 * object, hence, making it immutable.
 */
export function copyWith<T extends Record<string, any>>(
  model: T,
  values: OptionalObject<WritablePart<T>>,
): Readonly<T> {
  const m = Object.isFrozen(model) ? unfreeze(model) : model;
  const clone = Object.create(Object.getPrototypeOf(m), Object.getOwnPropertyDescriptors(m));
  const fields = {
    ...clone,
    ...values,
  };

  Object.keys(fields).forEach((key) => {
    Object.defineProperty(clone, key, {
      value: fields[key],
    });
  });

  return deepFreeze(clone);
}

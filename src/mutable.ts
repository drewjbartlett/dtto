import { Mutable, OptionalObject, Type, WritablePart } from './types';

/**
 * Create an instance of a model with all null keys.
 */
export function mutable<T, Values extends OptionalObject<WritablePart<T>>>(
  KlassName: Type<T>,
  values?: Values,
): Mutable<T> {
  const instance = new KlassName() as T;
  const propertyKeys = Object.getOwnPropertyNames(instance);

  propertyKeys.forEach((k) => {
    Object.defineProperty(instance, k, {
      value: values && k in values ? values[k] : null,
    });
  });

  return instance as Mutable<T & Values>;
}

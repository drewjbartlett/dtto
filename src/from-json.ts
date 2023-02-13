import { createTransformAPI } from './transform-api';
import { getTransform } from './transform-map';
import { JsonResponse, Type } from './types';
import { deepFreeze } from './utils/deep-freeze';
import { isNullOrUndefined } from './utils/is-null-or-undefined';

/**
 * Parse the passed json response into a the given model.
 */
export function fromJson<T extends Record<string, any>>(KlassName: Type<T>, json: JsonResponse): Readonly<T> {
  const instance = new KlassName() as T;
  const propertyKeys = Object.getOwnPropertyNames(instance);
  const transformer = getTransform(KlassName);
  const transform = transformer ? transformer(json, createTransformAPI(instance, json)) : {};

  propertyKeys.forEach((k) => {
    let value: any;

    if (k in transform) {
      value = transform[k];
    } else {
      value = isNullOrUndefined(json) ? null : json[k];
    }

    Object.defineProperty(instance, k, {
      value,
    });
  });

  return deepFreeze(instance);
}

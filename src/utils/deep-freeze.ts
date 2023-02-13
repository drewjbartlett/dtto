import { Type } from '../types';
import { isObject } from './is-object';

export function deepFreeze<T extends Record<string, any>>(obj: T): Readonly<T> {
  Object.keys(obj).forEach((prop) => {
    if (isObject(obj[prop])) {
      return deepFreeze(obj[prop]);
    }
  });

  return Object.freeze(obj);
}

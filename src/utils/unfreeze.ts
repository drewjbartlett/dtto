import { Mutable } from '../types';
import { isObject } from './is-object';

/**
 * Unfreeze an object.
 */
export function unfreeze<T extends Record<string, any>>(source: T): Mutable<T> {
  let target: Record<string, any> = {};

  for (const property in source) {
    if (source.hasOwnProperty(property)) {
      target[property] = isObject(source[property]) ? unfreeze(source[property]) : source[property];
    }
  }

  Object.setPrototypeOf(target, Object.getPrototypeOf(source));

  return target as T;
}

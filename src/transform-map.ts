import { TransformerDefinition } from './transform-api';
import { Type } from './types';

const transformMap = new Map<Type<any>, TransformerDefinition<any>>();

/**
 * Define a transform method in the map.
 * This is a way for us to store a transform method for a given model
 * and later read it out when parsing from json.
 */
export function defineTransform<T>(Klass: Type<T>, transform: TransformerDefinition<T>): void {
  transformMap.set(Klass, transform);
}

/**
 * Get the transform method for the given model.
 */
export function getTransform<T>(Klass: Type<T>): TransformerDefinition<T> | undefined {
  return transformMap.get(Klass);
}

import { AllowableKeys, fromJson, JsonResponse, Type } from '.';
import { getTransform } from './transform-map';
import { Nullable } from './types';
import { snakeCase } from './utils/snake-case';

export type TransformResponse<T> = {
  [k in AllowableKeys<T>]?: T[k];
};

export type Transform<T> = () => T;

export type TransformerDefinition<T> = (json: JsonResponse, api: TransformAPI) => TransformResponse<T>;

export interface TransformAPI {
  /**
   * Allows for returning null if the value is set to null. Otherwise the the transform method is invoked
   * and the value is returned.
   */
  nullOr: <T>(nullable: Nullable<any>, transform: Transform<T>) => Nullable<T>;

  /**
   * Allows for returning a default value if the given value is set to null. Otherwise the the transform method is invoked
   * and the value return from that is returned.
   */
  withDefault: <T, D>(nullable: Nullable<any>, transform: Transform<T>, defaultVal: D) => T | D;

  /**
   * Allows for multiple keys to be passed an converted from whatever casing to snake_case.
   * This is useful when many of your attributes are returned in something like snake_case.
   * If keys is omitted, all keys will be read from snake_case json values.
   *
   * This is shorthand for doing:
   *
   * ```
   * return {
   *    userId: json.user_id,
   *    firstName: json.first_name,
   *    lastName: json.last_name,
   * }
   * ```
   */
  fromSnakeCaseKeys<T>(keys?: AllowableKeys<T>[]): TransformResponse<T>;
}

let calls = 0;

/**
 * The factory method to create the transform API.
 * This uses currying so we can leverage the current model as part of the context.
 */
export function createTransformAPI<T>(model: T, json: JsonResponse): TransformAPI {
  function nullOr<T>(nullable: Nullable<any>, transform: Transform<T>): Nullable<T> {
    return withDefault(nullable, transform, null);
  }

  function withDefault<T, D>(nullable: Nullable<any>, transform: Transform<T>, defaultVal: D): T | D {
    if (nullable === null || typeof nullable === 'undefined') {
      return defaultVal;
    }

    return transform();
  }

  function fromSnakeCaseKeys<T>(keys?: AllowableKeys<T>[]): TransformResponse<T> {
    const transforms: TransformResponse<T> = {};

    if (keys) {
      keys.forEach((key) => {
        transforms[key as string] = json[snakeCase(key as string)];
      });
    } else {
      const modelKeys = Object.getOwnPropertyNames(model);

      modelKeys.forEach((key) => {
        transforms[key as string] = json[snakeCase(key as string)];
      });
    }

    return transforms;
  }

  return {
    nullOr,
    withDefault,
    fromSnakeCaseKeys,
  };
}

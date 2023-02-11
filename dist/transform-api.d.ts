import { AllowableKeys, JsonResponse } from '.';
import { Nullable } from './types';
export type TransformResponse<T> = {
    [k in AllowableKeys<T>]?: T[k];
};
export type Transform<T> = () => T;
export type TransformerDefinition<T> = (json: JsonResponse, api: TransformAPI) => TransformResponse<T>;
export interface TransformAPI {
    nullOr: <T>(nullable: Nullable<any>, transform: Transform<T>) => Nullable<T>;
    withDefault: <T, D>(nullable: Nullable<any>, transform: Transform<T>, defaultVal: D) => T | D;
    fromSnakeCaseKeys<T>(keys?: AllowableKeys<T>[]): TransformResponse<T>;
}
export declare function createTransformAPI<T>(model: T, json: JsonResponse): TransformAPI;

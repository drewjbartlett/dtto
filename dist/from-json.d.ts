import { JsonResponse, Type } from './types';
export declare function fromJson<T extends Record<string, any>>(KlassName: Type<T>, json: JsonResponse): Readonly<T>;

import { OptionalObject, WritablePart } from './types';
export declare function copyWith<T extends Record<string, any>>(model: T, values: OptionalObject<WritablePart<T>>): Readonly<T>;

import { Mutable, OptionalObject, Type, WritablePart } from './types';
export declare function mutable<T, Values extends OptionalObject<WritablePart<T>>>(KlassName: Type<T>, values?: Values): Mutable<T>;

import { Mutable, OptionalObject, Type, WritablePart } from './types';
export declare function nullable<T, Values extends OptionalObject<WritablePart<T>>>(KlassName: Type<T>, values?: Values): Mutable<T>;

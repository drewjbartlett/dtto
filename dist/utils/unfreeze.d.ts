import { Mutable } from '../types';
export declare function unfreeze<T extends Record<string, any>>(source: T): Mutable<T>;

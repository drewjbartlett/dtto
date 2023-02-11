import { TransformerDefinition } from './transform-api';
import { Type } from './types';
export declare function defineTransform<T>(Klass: Type<T>, transform: TransformerDefinition<T>): void;
export declare function getTransform<T>(Klass: Type<T>): TransformerDefinition<T> | undefined;

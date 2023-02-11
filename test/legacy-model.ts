import { defineTransform, fromJson, JsonResponse, TransformAPI, TransformResponse } from '../src';
import { Comment } from './comment';
import { User } from './user';

export class LegacyModel {
  constructor(
    public readonly id: number,
    public readonly aLongKey: string,
    public readonly longerKeyNameWithRelationship: User,
    public readonly evenLongerKeyNameWithMappedRelationship: Comment[],
  ) {}
}

defineTransform(LegacyModel, (json, { fromSnakeCaseKeys }) => {
  return {
    ...fromSnakeCaseKeys(['aLongKey']),
    longerKeyNameWithRelationship: fromJson(User, json.longer_key_name_with_relationship),
    evenLongerKeyNameWithMappedRelationship: json.even_longer_key_name_with_mapped_relationship.map((c) =>
      fromJson(Comment, c),
    ),
  };
});

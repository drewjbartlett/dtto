import { fromJson } from '../src';
import { defineTransform } from '../src/transform-map';
import { Comment } from './comment';
import { User } from './user';

export class Photo {
  constructor(
    public readonly id: number,
    public readonly path: string,
    public readonly user: User,
    public readonly comments: Comment[],
  ) {}
}

defineTransform(Photo, (json, api) => {
  return {
    user: fromJson(User, json.user),
    comments: json.comments.map((c) => fromJson(Comment, c)),
  };
});

import { defineTransform, Nullable, fromJson, make } from '../src';
import { User } from './user';

export class Comment {
  constructor(
    public readonly id: number,
    public readonly parent: Nullable<Comment>,
    public readonly content: string,
    public readonly user: Nullable<User>,
  ) {}
}

const guestUser = make(User, { id: 0, username: 'Guest' });

defineTransform(Comment, (json, { nullOr, withDefault }) => {
  return {
    parent: nullOr(json.parent, () => fromJson(Comment, json.parent)),
    user: withDefault(json.user, () => fromJson(User, json.user), guestUser),
  };
});

import { fromJson } from './from-json';
import { User } from '../test/user';
import { Comment } from '../test/comment';
import { Photo } from '../test/photo';
import { LegacyModel } from '../test/legacy-model';

const photoJson = require('../test/fixtures/photo/photo.json');
const photoWithCommentsJson = require('../test/fixtures/photo/photo-with-comments.json');
const userJson = require('../test/fixtures/user/user.json');
const commentWithNoUserJson = require('../test/fixtures/comment/comment-with-deleted-user.json');
const legacyModelJson = require('../test/fixtures/legacy-model/legacy-model.json');

describe('fromJson', () => {
  it('should parse a model from json', () => {
    const user = fromJson(User, userJson);

    expect(user).toMatchObject({
      id: userJson.id,
      username: userJson.username,
    });
  });

  it('should parse photo with a user and no comments', () => {
    const photo = fromJson(Photo, photoJson);

    expect(photo).toMatchObject({
      id: photoJson.id,
      path: photoJson.path,
      user: {
        id: photoJson.user.id,
        username: photoJson.user.username,
      },
      comments: [],
    });

    expect(photo.comments).toHaveLength(photoJson.comments.length);
    expect(photo.user).toBeInstanceOf(User);
  });

  it('should parse photo with a user and no comments', () => {
    const photo = fromJson(Photo, photoWithCommentsJson);

    expect(photo).toMatchObject({
      id: photoJson.id,
      path: photoJson.path,
      user: {
        id: photoJson.user.id,
        username: photoJson.user.username,
      },
      comments: expect.arrayContaining([expect.any(Comment), expect.any(Comment)]),
    });

    expect(photo.comments).toHaveLength(photoWithCommentsJson.comments.length);
    expect(photo.user).toBeInstanceOf(User);

    expect(photo.comments[0].parent).toBeInstanceOf(Comment);
    expect(photo.comments[0].parent?.parent).toBeInstanceOf(Comment);
    expect(photo.comments[1].parent).toBeNull();
  });

  it('parse a model with withDefault', () => {
    const comment = fromJson(Comment, commentWithNoUserJson);

    expect(comment.user).toMatchObject({
      id: 0,
      username: 'Guest',
    });
    expect(comment.user).toBeInstanceOf(User);
  });

  it('should parse a model with nullOr', () => {
    const comment = fromJson(Comment, commentWithNoUserJson);

    expect(comment.parent).toBeNull();
  });

  it('should parse a model with fromSnakeCaseKeys', () => {
    const legacyModel = fromJson(LegacyModel, legacyModelJson);

    expect(legacyModel).toMatchObject({
      id: legacyModelJson.id,
      aLongKey: legacyModelJson.a_long_key,
      longerKeyNameWithRelationship: {
        id: legacyModelJson.longer_key_name_with_relationship.id,
        username: legacyModelJson.longer_key_name_with_relationship.username,
      },
      evenLongerKeyNameWithMappedRelationship: expect.arrayContaining([
        expect.any(Comment),
        expect.any(Comment),
        expect.any(Comment),
      ]),
    });
  });
});

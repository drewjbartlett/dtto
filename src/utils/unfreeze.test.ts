import { User } from '../../test/user';
import { fromJson } from '../from-json';
import { deepFreeze } from './deep-freeze';
import { unfreeze } from './unfreeze';

const userJson = require('../../test/fixtures/user/user.json');

describe('unfreeze', () => {
  it.only('should unfreeze an object', () => {
    const frozen = fromJson(User, userJson);

    expect(() => {
      // @ts-ignore
      frozen.id = 1234;
    }).toThrow();

    const unfrozen = unfreeze(frozen);

    expect(() => {
      unfrozen.id = 1234;
    }).not.toThrow();

    unfrozen.id = 9999;
    unfrozen.username = 'new username';

    expect(unfrozen).toMatchObject({
      id: 9999,
      username: 'new username',
    });
  });

  it('should deeply unfreeze', () => {
    const obj = {
      user: {
        id: 1,
        location: {
          lat: 1,
          lng: 2,
        },
      },
    };

    const frozen = deepFreeze(obj);

    expect(() => {
      // @ts-ignore
      frozen.user.id = 1234;
    }).toThrow();

    const unfrozen = unfreeze(frozen);

    expect(() => {
      unfrozen.user!.id = 1234;
    }).not.toThrow();

    unfrozen.user!.id = 9999;
    unfrozen.user!.location!.lat = 2222;
    unfrozen.user!.location!.lng = 3333;

    expect(unfrozen).toMatchObject({
      user: {
        id: 9999,
        location: {
          lat: 2222,
          lng: 3333,
        },
      },
    });
  });
});

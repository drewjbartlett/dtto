import { deepFreeze } from './deep-freeze';

describe('deepFreeze', () => {
  it('should deeply freeze an object', () => {
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

    expect(Object.isFrozen(frozen)).toBe(true);
    expect(Object.isFrozen(frozen.user)).toBe(true);
    expect(Object.isFrozen(frozen.user.location)).toBe(true);
  });
});

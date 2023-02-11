import { mutable } from './mutable';
import { House } from '../test/house';
import { Person } from '../test/person';

describe('mutable', () => {
  it('should mutable with all values null', () => {
    const tom = mutable(Person);

    expect(tom).toMatchObject({ firstName: null, lastName: null, age: null, fullName: 'null null' });
  });

  it('should set the values passed the rest null', () => {
    const house = mutable(House, { address: '123 Main St' });

    expect(house).toMatchObject({
      address: '123 Main St',
      owner: null,
    });

    const tom = mutable(Person, { age: 65 });

    expect(tom).toMatchObject({ firstName: null, lastName: null, age: 65, fullName: 'null null' });
  });
});

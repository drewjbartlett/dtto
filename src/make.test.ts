import { make } from './make';
import { House } from '../test/house';
import { Person } from '../test/person';

describe('make', () => {
  it('should make an object with values passed', () => {
    const tom = make(Person, { firstName: 'Tom', lastName: 'Jones', age: 65 });

    expect(tom).toMatchObject({ firstName: 'Tom', lastName: 'Jones', age: 65, fullName: 'Tom Jones' });
  });

  it('should work with nested objects', () => {
    const house = make(House, {
      address: '123 Main St',
      owner: make(Person, { firstName: 'Tom', lastName: 'Jones', age: 65 }),
    });

    expect(house).toMatchObject({
      address: '123 Main St',
      owner: { firstName: 'Tom', lastName: 'Jones', age: 65, fullName: 'Tom Jones' },
    });
    expect(house.owner).toBeInstanceOf(Person);
  });
});

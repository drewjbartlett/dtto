import { House } from '../test/house';
import { Person } from '../test/person';
import { copyWith } from './copy-with';
import { fromJson } from './from-json';

describe('copyWith', () => {
  it('should copy an instance of a model with new values', () => {
    const tom = new Person('Tom', 'Jones', 65);
    const tom2 = copyWith(tom, { age: 66 });

    expect(tom2).toMatchObject({ firstName: 'Tom', lastName: 'Jones', age: 66, fullName: 'Tom Jones' });
  });

  it('should preserve getters', () => {
    const tom = new Person('Tom', 'Jones', 65);
    const tom2 = copyWith(tom, { firstName: 'Thomas' });

    expect(tom2).toMatchObject({ firstName: 'Thomas', lastName: 'Jones', age: 65, fullName: 'Thomas Jones' });
  });

  it('should preserve objects', () => {
    const house = new House('123 Main St', new Person('Tom', 'Jones', 65));
    const house2 = copyWith(house, { address: '456 Main St' });

    expect(house2).toMatchObject({
      address: '456 Main St',
      owner: { firstName: 'Tom', lastName: 'Jones', age: 65, fullName: 'Tom Jones' },
    });
    expect(house2.owner).toBeInstanceOf(Person);
  });

  it('should work on a frozen object', () => {
    const tom = fromJson(Person, { firstName: 'Tom', lastName: 'Jones', age: 65 });
    const tom2 = copyWith(tom, { firstName: 'Thomas' });

    expect(tom2).toMatchObject({ firstName: 'Thomas', lastName: 'Jones', age: 65, fullName: 'Thomas Jones' });
  });
});

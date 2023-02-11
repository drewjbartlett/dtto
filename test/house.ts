import { Person } from './person';

export class House {
  constructor(public readonly address: string, public readonly owner: Person) {}
}

export class Person {
  constructor(public readonly firstName: string, public readonly lastName: string, public readonly age: number) {}

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

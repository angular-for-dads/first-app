/** @format */

export class Person {
  name: string;
  age: number;

  // Not strictly necessary, but nice to have in most use cases
  constructor(model: Person) {
    this.name = model && model.name;
    this.age = model && model.age;
  }
}

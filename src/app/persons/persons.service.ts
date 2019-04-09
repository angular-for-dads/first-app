/** @format */

import { Injectable } from '@angular/core';

// App Models
import { Person } from './person.model';

@Injectable()
export class PersonsService {
  // In the future, this will fetch data from a REST endpoint
  getPersons(): Person[] {
    const persons: Person[] = [
      new Person({ name: 'William', age: 41 }),
      new Person({ name: 'Mickey', age: 90 }),
      new Person({ name: 'Donald', age: 85 }),
    ];

    return persons;
  }
}

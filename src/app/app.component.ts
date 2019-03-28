/** @format */

import { Component } from '@angular/core';

// App Models
import { Person } from './persons/person.model';

@Component({
  selector: 'ng4d-root',
  template: `
    <ng4d-greeting-card [person]="person1"></ng4d-greeting-card>
    <ng4d-greeting-card [person]="person2"></ng4d-greeting-card>
    <ng4d-greeting-card [person]="person3"></ng4d-greeting-card>
  `,
  styles: [],
})
export class AppComponent {
  person1 = new Person({ name: 'William', age: 41 });
  person2 = new Person({ name: 'Mickey', age: 90 });
  person3 = new Person({ name: 'Donald', age: 85 });
}

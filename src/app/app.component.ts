/** @format */

import { Component } from '@angular/core';

// App Models
import { Person } from './persons/person.model';

// App Services
import { PersonsService } from './persons/persons.service';

@Component({
  selector: 'ng4d-root',
  template: `
    <ng4d-greeting-card *ngFor="let person of persons" [person]="person"></ng4d-greeting-card>
  `,
})
export class AppComponent {
  persons: Person[];

  constructor(private personsService: PersonsService) {
    this.persons = this.personsService.getPersons();
  }
}

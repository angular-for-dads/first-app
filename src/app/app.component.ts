/** @format */

import { Component } from '@angular/core';

// rxjs
import { Observable } from 'rxjs';

// App Models
import { Person } from './persons/person.model';

// App Services
import { PersonsService } from './persons/persons.service';

@Component({
  selector: 'ng4d-root',
  template: `
    <ng4d-greeting-card
      *ngFor="let person of (persons$ | async)"
      [person]="person"
    ></ng4d-greeting-card>
  `,
})
export class AppComponent {
  // Always append a `$` - for stream - to an Observable property, for clarity
  persons$: Observable<Person[]>;

  constructor(private personsService: PersonsService) {
    this.persons$ = this.personsService.getPersons();
  }
}

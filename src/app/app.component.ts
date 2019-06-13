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
    <main class="container-fluid">
      <div class="alert alert-success" *ngIf="newPerson$ | async as newPerson">
        Added: {{ newPerson.name }}, {{ newPerson.age }}
      </div>

      <ng4d-greeting-cards-list
        [persons]="persons$ | async"
        (dataRequested)="requestData()"
        (newPerson)="createNewPerson($event)"
      >
      </ng4d-greeting-cards-list>
    </main>
  `,
})
export class AppComponent {
  // Always append a `$` - for stream - to an Observable property, for clarity
  persons$: Observable<Person[]>;
  newPerson$: Observable<Person>;

  constructor(private personsService: PersonsService) {}

  requestData() {
    this.persons$ = this.personsService.getPersons();
  }

  createNewPerson(newPerson: Person) {
    this.newPerson$ = this.personsService.createNewPerson(newPerson);
  }
}

/** @format */

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

// App Models
import { Person } from '../persons/person.model';

@Component({
  selector: 'ng4d-greeting-cards-list',
  template: `
    <section *ngIf="persons && persons.length > 0; else emptyStateTemplate">
      <ng4d-person-form
        [formGroup]="newPersonFormGroup"
        (newPerson)="emitNewPerson($event)"
      ></ng4d-person-form>

      <ng4d-greeting-cards-item
        *ngFor="let person of persons"
        [person]="person"
      ></ng4d-greeting-cards-item>
    </section>

    <ng-template #emptyStateTemplate>
      <ng4d-greeting-cards-empty-state
        (dataRequested)="emitDataRequested()"
      ></ng4d-greeting-cards-empty-state>
    </ng-template>
  `,
})
export class GreetingCardsListComponent {
  @Input() persons: Person[];

  @Output() dataRequested = new EventEmitter<void>();
  @Output() newPerson = new EventEmitter<Person>();

  newPersonFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  emitDataRequested() {
    this.dataRequested.emit();
  }

  emitNewPerson(newPerson: Person) {
    this.newPerson.emit(newPerson);
  }

  private buildForm() {
    this.newPersonFormGroup = this.formBuilder.group(new Person({ name: '', age: 0 }));
  }
}

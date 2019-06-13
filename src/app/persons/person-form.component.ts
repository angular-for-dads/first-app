/** @format */

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

// App Models
import { Person } from './person.model';

@Component({
  selector: 'ng4d-person-form',
  template: `
    <form [formGroup]="formGroup" (ngSubmit)="onSubmit($event)">
      <div class="form-group">
        <label for="name">Name</label>:
        <input [formControl]="nameFormControl" type="text" class="form-control" id="name" />
      </div>

      <div class="form-group">
        <label for="age">Age</label>:
        <input [formControl]="ageFormControl" type="number" class="form-control" id="age" />
      </div>

      <p>
        <button type="submit" class="btn btn-success">Save</button>
      </p>
    </form>
  `,
})
export class PersonFormComponent {
  @Input() formGroup: FormGroup;

  @Output() newPerson = new EventEmitter<Person>();

  get nameFormControl(): FormControl {
    return this.formGroup.get('name') as FormControl;
  }

  get ageFormControl(): FormControl {
    return this.formGroup.get('age') as FormControl;
  }

  onSubmit(event: Event) {
    event.preventDefault();

    this.newPerson.emit(
      new Person({
        name: this.nameFormControl.value,
        age: this.ageFormControl.value,
      })
    );
  }
}

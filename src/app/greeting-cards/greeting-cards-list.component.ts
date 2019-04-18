/** @format */

import { Component, Input, Output, EventEmitter } from '@angular/core';

// App Models
import { Person } from '../persons/person.model';

@Component({
  selector: 'ng4d-greeting-cards-list',
  template: `
    <section *ngIf="persons && persons.length > 0; else emptyStateTemplate">
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

  emitDataRequested() {
    this.dataRequested.emit();
  }
}

/** @format */

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ng4d-greeting-cards-empty-state',
  template: `
    <p>There nothing to see here :-(</p>
    <p>
      <button type="button" (click)="emitDataRequested($event)">Load greeting cards</button>
    </p>
  `,
})
export class GreetingCardsEmptyStateComponent {
  @Output() dataRequested = new EventEmitter<void>();

  emitDataRequested(event: Event) {
    event.preventDefault();

    this.dataRequested.emit();
  }
}

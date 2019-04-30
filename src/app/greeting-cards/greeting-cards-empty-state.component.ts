/** @format */

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ng4d-greeting-cards-empty-state',
  template: `
    <article class="alert alert-info my-3">
      <p>There nothing to see here :-(</p>
      <p class="mb-0">
        <button class="btn btn-primary btn-lg" type="button" (click)="emitDataRequested($event)">
          Load greeting cards
        </button>
      </p>
    </article>
  `,
})
export class GreetingCardsEmptyStateComponent {
  @Output() dataRequested = new EventEmitter<void>();

  emitDataRequested(event: Event) {
    event.preventDefault();

    this.dataRequested.emit();
  }
}

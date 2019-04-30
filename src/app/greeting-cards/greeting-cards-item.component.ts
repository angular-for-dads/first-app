/** @format */

import { Component, Input } from '@angular/core';

// App Models
import { Person } from '../persons/person.model';

@Component({
  selector: 'ng4d-greeting-cards-item',
  template: `
    <article class="card my-3 w-50 mx-auto">
      <div class="card-body">
        <h1 class="card-title h5">Hello, I'm {{ person.name }}!</h1>
        <p class="card-text">And I'm a {{ person.age }} years old dad.</p>
      </div>
    </article>
  `,
})
export class GreetingCardsItemComponent {
  @Input() person: Person;
}

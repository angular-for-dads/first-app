/** @format */

import { Component, Input } from '@angular/core';

// App Models
import { Person } from '../persons/person.model';

@Component({
  selector: 'ng4d-greeting-cards-item',
  template: `
    <article>
      <h1>Hello, I'm {{ person.name }}!</h1>
      <p>And I'm a {{ person.age }} years old dad.</p>
    </article>
  `,
  styles: [
    `
      article {
        width: 30%;
        margin: 2rem auto;
        padding: 1rem 2rem;
        font-family: sans-serif;
        border: 1px solid #cccccc;
      }

      h1 {
        font-family: serif;
        margin: 0 0 1rem 0;
      }

      p {
        margin: 0;
      }
    `,
  ],
})
export class GreetingCardsItemComponent {
  @Input() person: Person;
}

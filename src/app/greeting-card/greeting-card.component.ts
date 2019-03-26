/** @format */

import { Component } from '@angular/core';

@Component({
  selector: 'ng4d-greeting-card',
  template: `
    <article>
      <h1>Hello, I'm William!</h1>
      <p>And I'm a 41 years old dad.</p>
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
export class GreetingCardComponent {}

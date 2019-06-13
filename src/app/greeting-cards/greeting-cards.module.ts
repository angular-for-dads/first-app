/** @format */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// App Components
import { GreetingCardsListComponent } from './greeting-cards-list.component';
import { GreetingCardsItemComponent } from './greeting-cards-item.component';
import { GreetingCardsEmptyStateComponent } from './greeting-cards-empty-state.component';

// App Modules
import { PersonsModule } from '../persons/persons.module';

@NgModule({
  exports: [GreetingCardsListComponent],
  declarations: [
    GreetingCardsListComponent,
    GreetingCardsItemComponent,
    GreetingCardsEmptyStateComponent,
  ],
  imports: [CommonModule, PersonsModule],
})
export class GreetingCardsModule {}

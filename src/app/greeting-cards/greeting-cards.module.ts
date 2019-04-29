/** @format */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// App Components
import { GreetingCardsListComponent } from './greeting-cards-list.component';
import { GreetingCardsItemComponent } from './greeting-cards-item.component';
import { GreetingCardsEmptyStateComponent } from './greeting-cards-empty-state.component';

@NgModule({
  exports: [GreetingCardsListComponent],
  declarations: [
    GreetingCardsListComponent,
    GreetingCardsItemComponent,
    GreetingCardsEmptyStateComponent,
  ],
  imports: [CommonModule],
})
export class GreetingCardsModule {}

/** @format */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// App Components
import { AppComponent } from './app.component';

// App Modules
import { PersonsModule } from './persons/persons.module';
import { GreetingCardsModule } from './greeting-cards/greeting-cards.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PersonsModule, HttpClientModule, GreetingCardsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

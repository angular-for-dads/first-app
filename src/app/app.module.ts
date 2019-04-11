/** @format */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// App Components
import { AppComponent } from './app.component';
import { GreetingCardComponent } from './greeting-card/greeting-card.component';

// App Modules
import { PersonsModule } from './persons/persons.module';

@NgModule({
  declarations: [AppComponent, GreetingCardComponent],
  imports: [BrowserModule, PersonsModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

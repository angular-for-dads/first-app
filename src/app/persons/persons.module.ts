/** @format */

import { NgModule } from '@angular/core';

// App Services
import { PersonsService } from './persons.service';

@NgModule({
  providers: [PersonsService],
})
export class PersonsModule {}

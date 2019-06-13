/** @format */

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// App Components
import { PersonFormComponent } from './person-form.component';

// App Services
import { PersonsService } from './persons.service';

@NgModule({
  providers: [PersonsService],
  declarations: [PersonFormComponent],
  exports: [PersonFormComponent],
  imports: [ReactiveFormsModule, CommonModule],
})
export class PersonsModule {}

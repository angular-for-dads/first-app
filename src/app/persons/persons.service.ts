/** @format */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// rxjs
import { Observable } from 'rxjs';

// App Configurations
import { apiEndpointPersons } from '../config/api.config';

// App Models
import { Person } from './person.model';

@Injectable()
export class PersonsService {
  constructor(private httpClient: HttpClient) {}

  getPersons(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(apiEndpointPersons);
  }
}

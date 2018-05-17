import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthProvider } from '../auth/auth';

/*
  Generated class for the CalificarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CalificarProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CalificarProvider Provider');
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const API_URL= "http://localhost:3000/api/" 
/*
  Generated class for the ConsejoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConsejoProvider {
URL_consejo= "consejo"

  constructor(public http: HttpClient) {
    console.log('Hello ConsejoProvider Provider');
  }

getConsejo(){
  return this.http.get(API_URL+this.URL_consejo);
}

}

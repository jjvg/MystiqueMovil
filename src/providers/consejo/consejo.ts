import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthProvider } from '../auth/auth';

/*
  Generated class for the ConsejoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConsejoProvider {
URL_consejo= "consejo"
<<<<<<< HEAD
  constructor(public http: HttpClient,public authService:AuthProvider) {
    
=======

  constructor(public http: HttpClient) {
    console.log('Hello ConsejoProvider Provider');
>>>>>>> 4b46be66f9aa469d5a9299827c862ac47be2b1f9
  }

getConsejo(){
  return this.http.get(this.authService.ApiUrl()+this.URL_consejo);
}

}

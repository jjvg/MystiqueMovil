import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const API_URL= "http://localhost:3000/api/"
/*
  Generated class for the PromocionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PromocionProvider {
  URL_promocion= "promocion"
  constructor(public http: HttpClient) {
    console.log('Hello PromocionProvider Provider');
  }
  getPromocion(){
  return this.http.get(API_URL+this.URL_promocion);
}

}

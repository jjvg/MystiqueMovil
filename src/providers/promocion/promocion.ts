import { AuthProvider } from './../auth/auth';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PromocionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PromocionProvider {
  URL_promocion='v_promocion_detalle'
  constructor(public http: HttpClient, public authPro: AuthProvider) {
    
  }
  getPromocion(){
  return this.http.get(this.authPro.ApiUrl()+this.URL_promocion);
}

}

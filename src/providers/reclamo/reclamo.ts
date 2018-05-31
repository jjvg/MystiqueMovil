import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ServicioRProvider} from '../servicio-r/servicio-r';
import {AuthProvi}
const API_URL= "http://localhost:3000/api/" 

/*
  Generated class for the ReclamoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReclamoProvider {
URL_respuestar= "respuesta_reclamo"
  constructor(public http: HttpClient) {
    console.log('Hello ReclamoProvider Provider');
  }

  getRespuesta(){
    return this.http.get(API_URL+this.URL_respuestar);
  }
  getOrenGarantia(){
  	this.
  }
}

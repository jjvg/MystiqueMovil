import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SolicitudProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SolicitudProvider {
  solicitud:any

  constructor(public http: HttpClient) {
    this.solicitud={
      fecha:'10/10/2018',
      hora:'8:00 am',
      empleado:'Montes Ana',
      servicios:[
        {nombre:'Secado', costo:10000},
        {nombre:'Planchado', costo:30000},
        {nombre:'Keratina Especial', costo:50000}
      ]}
    console.log('Hello SolicitudProvider Provider');
    console.log(this.solicitud);
  }
  getSolicitud(){
    return this.solicitud;
  }

}

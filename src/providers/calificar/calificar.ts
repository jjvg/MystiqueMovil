import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthProvider } from '../auth/auth';
const port = '3000';
const API_URL = 'http://localhost:'+port+'/api/';

/*
  Generated class for the CalificarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CalificarProvider {
  url_calificar : '/gestion_calificacion';
   
  calificar:{
    id_orden_servicio:number,
    servicios
  }

  constructor(public http: HttpClient) {

    }
  }


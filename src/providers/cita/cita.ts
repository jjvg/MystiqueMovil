import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const API_URL= "http://localhost:3000/api/"
/*
  Generated class for the CitaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CitaProvider {
URL_orden= "orden_servicio"
URL_empleado= "empleado_asignado"
URL_solicitud= "solicitud"
URL_servicioS= "servicio_solicitado"
URL_servicio= "servicio"
URL_tservicio= "tipo_servicio"
URL_presupuesto= "presupuesto"
URL_empleados= "empleado"
URL_cita= "cita"
  constructor(public http: HttpClient) {
    console.log('Hello CitaProvider Provider');
  }

  getCita(){
    return this.http.get(API_URL+this.URL_cita);
  }

  getOrden(){
    return this.http.get(API_URL+this.URL_orden);
  }
  
  getEmpleado(){
    return this.http.get(API_URL+this.URL_empleado);
  }

  getSolicitud(){
    return this.http.get(API_URL+this.URL_solicitud);
  }

  getServicioS(){
    return this.http.get(API_URL+this.URL_servicioS);
  }
  getServicio(){
    return this.http.get(API_URL+this.URL_servicio);
  }
  getTServicio(){
    return this.http.get(API_URL+this.URL_tservicio);
  }

  getPresupuesto(){
    return this.http.get(API_URL+this.URL_presupuesto);
  }
 
  getEmpleados(){
    return this.http.get(API_URL+this.URL_empleados);
  }
  Aincidencia(id,inc){
    return this.http.put(API_URL+'orden_servicio/'+id,inc);
  }

  Acita(id,cit){
    return this.http.put(API_URL+'cita/'+id,cit);
  }
}

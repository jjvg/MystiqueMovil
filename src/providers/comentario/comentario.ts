import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ComentarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ComentarioProvider {
  comentario:{
    tipo:string,
    dirigido:string,
    contenido:string,
    empleado:string,
    servicio:string,
  }
  constructor(public http: HttpClient) {
   this.comentario={
      tipo:"",
      dirigido:"",
      contenido:"",
      empleado:"",
      servicio:""
    } 
    console.log('Hello ComentarioProvider Provider');
  }
  setValor(tipo,dir){
    this.comentario.tipo=tipo;
    this.comentario.dirigido=dir;
  }
  getComent(){
    return this.comentario;
  }
  setEmpleado(data){
    this.comentario.empleado=data;
  }
  setServicio(data){
    this.comentario.servicio=data;
  }

}

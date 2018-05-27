import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const API_URL= "http://localhost:3000/api/" 
/*
  Generated class for the ComentarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ComentarioProvider {
  URL_comentario= "comentario"
  URL_tipoc= "tipo_comentario"
  URL_RSugerencia ="respuesta_comentario"
  URL_TRSugerencia = "tipo_respuesta_comentario"
  comentarios:{
    idC : number,
    tipo:number,
    contenido:string,
    estatus:string,
    fechaC:string,
  }
  constructor(public http: HttpClient) {
   this.comentarios={
    idC : 0,
    tipo:0,
    contenido:"",
    estatus:"",
    fechaC: "",
    } 
    console.log('Hello ComentarioProvider Provider');
  }
  setValor(tipo){//,dir){
    this.comentarios.tipo=tipo;
    //this.comentarios.dirigido=dir;
  }
  getComent(){
    return this.comentarios;
  }
  
  Ncomentario(comentarios){
    console.log(API_URL+'comentario')
    return this.http.post(API_URL+'comentario',comentarios);
  }
  getComentario(){
    return this.http.get(API_URL+this.URL_comentario);
  }
  getTComentario(){
    return this.http.get(API_URL+this.URL_tipoc);
  }
  getRSugerencia(){
    return this.http.get(API_URL+this.URL_RSugerencia);
  }
  getTRSugerencia(){
    return this.http.get(API_URL+this.URL_TRSugerencia);
  }
  ApiUrl(){
    return API_URL;
  }
}

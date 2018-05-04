import { AuthProvider } from './../auth/auth';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the ClienteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClienteProvider {
  url_user : string = 'cliente/'
  url_perfil:string = 'perfil/'
  perfil:any;

  cliente:{
    id:string,
    nombre:string,
    apellido:string,
    cedula:string,
    telefono:string,
    direccion:string,
    id_ciudad:number,
    fecha_nacimiento:string,
    tipo_cliente:string,
    id_usuario:number,
    estatus:string,
    auth:Boolean,
    correo:string
  }
  constructor(public http: HttpClient, public authService:AuthProvider) {
    this.cliente={
      id:'',
      nombre:'',
      apellido:'',
      cedula:'',
      telefono:'',
      direccion:'',
      id_ciudad:0,
      fecha_nacimiento:'',
      tipo_cliente:'',
      id_usuario:0,
      estatus:'',
      auth:false,
      correo:'',
      
    }
    console.log('Hello ClienteProvider Provider');
  }
  getUser(id){
    return this.http.get(this.authService.ApiUrl()+'cliente/'+id)
  }
  setCliente(user){
    this.cliente=user;
  }
  setClienteAuth(){
    this.cliente.auth=true;
  }
  getCliente(){
    return this.cliente;
  }
  getPerfilUser(){
    return this.http.get(this.authService.ApiUrl()+'perfil/'+this.cliente.id)
  }
  setPerfil(){
      this.getPerfilUser().subscribe(
        (data)=>{
          this.perfil=data['data']
          console.log(this.perfil);
        },(error)=>{
        console.log(error);
        }
      )
    }
    getPerfil(){
      return this.perfil;
    }
    setCorreo(correo){
      this.cliente.correo=correo;
    }


}

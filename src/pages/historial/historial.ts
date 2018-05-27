import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {ServicioRProvider } from '../../providers/servicio-r/servicio-r';
import {AuthProvider} from './../../providers/auth/auth';
import {ClienteProvider} from '../../providers/cliente/cliente';

/**
 * Generated class for the HistorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historial',
  templateUrl: 'historial.html',
})
export class HistorialPage {

  url_api:any;

  serviciosr:{
    id:number,
    nombre:string,
    apellido:string,
    cedula:string,
    telefono:number,
    direccion:string,
    tipo_cliente:string,
    ordenes:Array<{
      id:string,
      id_solicitud,
      estado:string}>
  }
  ordenes_en_espera:any[];
  ordenes_realizadas:any[];
  ordenes_calificadas:any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public serviciosrProvider: ServicioRProvider,
    public authService: AuthProvider,
    public clienteProvider: ClienteProvider){

      this.serviciosr={
        id:0,
        nombre:'',
        apellido:'',
        cedula:'',
        telefono:0,
        direccion:'',
        tipo_cliente:'',
        ordenes:[]
      }
      this.ordenes_en_espera=[];
      this.ordenes_realizadas=[];
      this.ordenes_calificadas=[];
  }

  ionViewDidLoad() {
    this.url_api= this.authService.ApiUrl();
    console.log(this.serviciosr);
    this.getOrdenes(); }
  
  llenarArray(){
  this.ordenes_en_espera=[];
  this.ordenes_realizadas=[];
  this.ordenes_calificadas=[];
    console.log(this.serviciosr.ordenes);

  for (let i = 0; i < this.serviciosr.ordenes.length; i++) {
    if(this.serviciosr.ordenes[i].estado==='R'){
      this.ordenes_realizadas.push(this.serviciosr.ordenes[i]);
    }else{
      if(this.serviciosr.ordenes[i].estado==='E'){
        this.ordenes_en_espera.push(this.serviciosr.ordenes[i].estado);
      }
    }
  }
  console.log(this.ordenes_en_espera);
  console.log(this.ordenes_realizadas);
}
getOrdenes(){
  this.serviciosrProvider.getServiciosR(this.clienteProvider.getCliente().id).subscribe(
    (data)=>{
      this.serviciosr=data['data'];
      console.log(this.serviciosr)
      this.llenarArray();  
    },(error)=>{console.log(error)} 
  );}
}

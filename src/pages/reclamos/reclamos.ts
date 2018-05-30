import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AgendaPage} from './../agenda/agenda';
import{ReclamoProvider} from '../../providers/reclamo/reclamo';
/**
 * Generated class for the ReclamosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reclamos',
  templateUrl: 'reclamos.html',
})
export class ReclamosPage {
  recla:any;
  respuesta:any;

  ordenGarantia:{
   
    codigo:string;
    id_ordenGarantia:string;
    servicios:Array<{nombre:string,costo:Number,id_servicio:string}>;
    cita:{fecha:string,hora:string,id_cita:string};
    empleado:string;
    montoTotal:Number;
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public reclamoService: ReclamoProvider) {
 this.RespuestaR();
    this.recla=[{
   "descripcion":"Rechazado",
   "fecha_creacion":"2018/06/03",

}];
  }

  RespuestaR(){
    this.reclamoService.getRespuesta().subscribe(
      (data)=>{
        this.respuesta=data['data'];
        console.log(this.respuesta)
      },(error)=>{console.log(error)}
      
    );
  
  }
  

  ionViewDidLoad() {
    this.RespuestaR();
    console.log('ionViewDidLoad ReclamosPage');
    console.log(this.ordenGarantia)
  }
  verCita()
  {
    this.navCtrl.push(AgendaPage,this.ordenGarantia)
  }
}

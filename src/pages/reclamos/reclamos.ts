import { ServicioRProvider } from './../../providers/servicio-r/servicio-r';
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
  ordenes:any[];
  orden:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public reclamoService: ReclamoProvider,
  public serviRService:ServicioRProvider) {
    this.ordenes=[];
    this.orden=null;
 this.RespuestaR();
 this.getOrenes();
  }

  RespuestaR(){
    this.reclamoService.getRespuesta().subscribe(
      (data)=>{
        this.respuesta=data['data'];
        console.log(this.respuesta)
      },(error)=>{
        console.log(error)
      });
  }
  getOrenes(){
    let i = 0;
    i=Number(localStorage.getItem('id_cliente'));
    this.serviRService.getServiciosR(i).subscribe((resp)=>{
      this.ordenes=resp['data'];
      this.encontrarOren();
    },(error)=>{
      console.log(error);
    });
  }

  ionViewDidLoad() {
    this.RespuestaR();
    console.log('ionViewDidLoad ReclamosPage');
    console.log(this.orden)
  }
  verCita()
  {
    this.navCtrl.push(AgendaPage,this.orden)
  }
encontrarOren(){
  for (let i = 0; i <this.ordenes.length; i++) {
      if (this.ordenes[i].estado==='G') {
        this.orden=this.ordenes[i];
        break;
      }
    }
  }
}

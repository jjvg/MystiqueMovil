import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GarantiaPage } from './../garantia/garantia';
import {AgendaPage} from './../agenda/agenda';
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

  ordenGarantia:{
    codigo:string;
    id_ordenGarantia:string;
    servicios:Array<{nombre:string,costo:Number,id_servicio:string}>;
    cita:{fecha:string,hora:string,id_cita:string};
    empleado:string;
    montoTotal:Number;
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.ordenGarantia={
      codigo: "0001",
      id_ordenGarantia:'00023',
      servicios:[
        {nombre:'secado',costo:10000,id_servicio:'1234'},
        {nombre:'tinte',costo:10000,id_servicio:'5543'},
        {nombre:'mechas',costo:10000,id_servicio:'1245'},
      ],
      cita:{
        fecha:'',
        hora:'',
        id_cita:''
      },
      empleado:'',
      montoTotal:30000

    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReclamosPage');
    console.log(this.ordenGarantia)
  }
  verCita()
  {
    this.navCtrl.push(AgendaPage,this.ordenGarantia)
  }
}

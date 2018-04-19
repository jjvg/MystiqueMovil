import { SolicitudProvider } from './../../providers/solicitud/solicitud';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { RechazoComponent } from '../../components/rechazo/rechazo';
import { AgendaPage } from '../agenda/agenda';

/**
 * Generated class for the PresupuestoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-presupuesto',
  templateUrl: 'presupuesto.html',
})
export class PresupuestoPage {
  
  total:any;
  ser:any;
solicitud:{
  fecha:string;
  hora:string;
  empleado:string;
  servicios:Array<{nombre:string, costo:Number}>
}
  constructor(public navCtrl: NavController, public navParams: NavParams, public dataSolicitud: SolicitudProvider,public modalCtrl: ModalController) {
    this.solicitud={
      fecha:'',
      hora:'',
      empleado:'',
      servicios:[],
      
    };
    this.cargarSolicitud();
    this.total=this.calTotal();
    this.ser=this.solicitud['servicios'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresupuestoPage');
    this.cargarSolicitud();
    //
    
  }
  cargarSolicitud(){
    this.solicitud=this.dataSolicitud.getSolicitud();
  }
  calTotal():Number{
    var suma :Number=0;
    let array:any[]= this.solicitud['servicios'];
    console.log(array[0].costo);
    for (let i = 0; i < array.length; i++) {
       suma = suma + array[i].costo;
    }
    return suma;
    
  }
  rechazar(){
 
      let profileModal = this.modalCtrl.create(RechazoComponent);
      profileModal.present();
    
  }
  agendar(){
    this.navCtrl.push(AgendaPage);
  }
}

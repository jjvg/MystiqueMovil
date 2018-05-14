
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { RechazoPage } from './../rechazo/rechazo';
import { PresupuestoPage } from './../presupuesto/presupuesto';
import { SolicitudPage } from '../solicitud/solicitud';
/**
 * Generated class for the SolicitudesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solicitudes',
  templateUrl: 'solicitudes.html',
})
export class SolicitudesPage {
  public loading:Loading;
  solicitudes:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SolicitudesPage');
  }
  verPresupuesto(){
    this.navCtrl.push(PresupuestoPage)
    
  }
  verDetalle()
  {
    this.navCtrl.push(RechazoPage)
  }
  gotoSolicitud(){
    this.navCtrl.push(SolicitudPage)
    this.loading = this.loadingCtrl.create({
      dismissOnPageChange: true,
    });
    this.loading.present();
  }
  getSolicitudes(){

  }
}

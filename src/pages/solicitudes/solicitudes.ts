import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RechazoPage } from './../rechazo/rechazo';
import { PresupuestoPage } from './../presupuesto/presupuesto';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
}

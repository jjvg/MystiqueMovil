import { CalificarPage } from './../calificar/calificar';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ReclamogenerarPage } from './../reclamogenerar/reclamogenerar';
/**
 * Generated class for the ServiciosRPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-servicios-r',
  templateUrl: 'servicios-r.html',
})
export class ServiciosRPage {

  servicios:string = "calificar";
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiciosRPage');
  }
  Reclamo(){
    let alert = this.alertCtrl.create({
      title: 'Aviso!',
      subTitle: 'Por Favor Califica nuestros Servicios para poder realizar un reclamo, Gracias',
      buttons: ['Cerrar']
    });
    alert.present();
  }

  
  calificar(id: number){
    this.navCtrl.push(CalificarPage)
  }
  Reclamo1(){
    this.navCtrl.push(ReclamogenerarPage);
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiciosRPage');
  }
  Reclamo(){
    this.navCtrl.push(ReclamogenerarPage)
  }

  Reclamo1(){
    this.navCtrl.push(ReclamogenerarPage)
  }
}

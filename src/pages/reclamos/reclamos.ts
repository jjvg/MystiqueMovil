import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GarantiaPage } from './../garantia/garantia';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReclamosPage');
  }
  verCita()
  {
    this.navCtrl.push(GarantiaPage)
  }
}

import { CancelarcitaComponent } from './../../components/cancelarcita/cancelarcita';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

/**
 * Generated class for the CitasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-citas',
  templateUrl: 'citas.html',
})
export class CitasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController,) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CitasPage');
  }
  cancelarCita() {
    let profileModal = this.modalCtrl.create(CancelarcitaComponent);
    profileModal.present();
  }

}

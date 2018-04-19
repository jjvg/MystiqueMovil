import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the CalificarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calificar',
  templateUrl: 'calificar.html',
})
export class CalificarPage {
  calificacion: any;
  color: { backgroundcolor: '#fd0087' };
  visible: Boolean = true;
  Serviciovisible: Boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.calificacion = {
      lugar: null,
      ambientacion: null,
      infraestructura: null,
      secado: null,
      tinte: null
    };
  }


  ionViewDidLoad() {

    console.log('ionViewDidLoad CalificarPage');
  }

  verServicio() {
    this.visible = false;
    this.Serviciovisible = true;
  }
}


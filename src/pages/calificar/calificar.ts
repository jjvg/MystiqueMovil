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
  id: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = this.navParams.data.id;
    this.calificacion = {
      lugar: 4,
      ambientacion: 4,
      infraestructura: 4,
      secado: 4,
      lavado: 4,
      tinte: 4
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


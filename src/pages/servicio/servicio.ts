import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ServicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-servicio',
  templateUrl: 'servicio.html',
})
export class ServicioPage {

    tipo: string = "peluqueria";
    speluqueria: Array<{name: string, descripcion: string}>;
    smaquillaje: Array<{name: string, descripcion: string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.speluqueria=[
      {name: 'Corte bajo', descripcion:'Corte hecho con maquinas'},
      {name: 'Trensado especial', descripcion:'Perfecto para salir de noche'}
    ];
    this.smaquillaje=[
      {name: 'Maquillaje Ecologico', descripcion:'Facil de Remover'},
      {name: 'Ojos Brillantes', descripcion:'Para resaltar tu mirada'}
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicioPage');
  }

}

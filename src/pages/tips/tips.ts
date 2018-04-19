import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TipsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tips',
  templateUrl: 'tips.html',
})
export class TipsPage {
  items:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items=[{
      "nombre":"Masaje Capilar",
      "content":"Existe una nueva tecnica para realizar masajes capilares a nuestros clientes enterate mas aqui",
      "img":"assets/imgs/masajecapilar.jpg"
    },
  {
    "nombre":"Rutina de belleza",
    "content":"En ocaciones la clave tener un bello rostro es seguir una rutina de belleza ",
    "img":"assets/imgs/rutinas.jpg"
  },
  {
    "nombre":"Exfoliante Natural",
    "content":"Perfecto para un rostro un poco grasoso, es importante utilizar exfoliantes para eliminar de nuestra piel las inpuresas que dia a dia recogemos en las calles ",
    "img":"assets/imgs/exfoliante.png"
  }];    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TipsPage');
  }

}

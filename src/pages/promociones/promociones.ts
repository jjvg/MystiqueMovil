
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SolicitudPage } from '../solicitud/solicitud';
import {PromocionProvider} from '../../providers/promocion/promocion';

/**
 * Generated class for the PromocionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-promociones',
  templateUrl: 'promociones.html',
})
export class PromocionesPage {
  items:any;
  promociones: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public promocionService: PromocionProvider) {
   this.promocion();
    this.items=[{
      "nombre":"Promocion 2x1",
      "content":"Existe una nueva tecnica para realizar masajes capilares a nuestros clientes enterate mas aqui",
      "img":"assets/imgs/Promocion.jpg",
      'duracion':'2 semanas',
      'tipo':'promocion'
    },
  {
    "nombre":"Promocion 2x1",
    "content":"En ocaciones la clave tener un bello rostro es seguir una rutina de belleza ",
    "img":"assets/imgs/Promocion.jpg",
    'duracion':'2 semanas',
    'tipo':'promocion'
  },
  {
    "nombre":"Promocion 2x1",
    "content":"Perfecto para un rostro un poco grasoso, es importante utilizar exfoliantes para eliminar de nuestra piel las inpuresas que dia a dia recogemos en las calles ",
    "img":"assets/imgs/Promocion.jpg",
    'duracion': '2 semanas',
    'tipo':'promocion'
  }];
  }
  promocion(){
    this.promocionService.getPromocion().subscribe(
      (data)=>{
        this.promociones=data['data'];
      },(error)=>{console.log(error)}
    );
  
  }
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad PromocionesPage');
    this.promocion();
    console.log(this.promociones);
  }
  adquirirPromo(data){
    this.navCtrl.push(SolicitudPage,data)
  }

}

import { PromocionProvider } from './../../providers/promocion/promocion';
import { SolicitudPage } from './../solicitud/solicitud';
import { AuthProvider} from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
promo:{
  id:number,
  imagen:string,
};
promociones:Array<{
  id:number,
  id_servicio:number;
  nombre:string;
  descripcion:number,
  porcentaje_descuento:number,
  imagen:string,
}>;
longitu:number;
url_files:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public promoService:PromocionProvider,
  public authService: AuthProvider) {
    this.promociones=[];
    this.promo={
      id: 0,
      imagen:''
    }
 
  }

  ionViewDidLoad() {
    this.promo = {
      id:null,
      imagen:''
    }
    this.url_files=this.authService.ApiFile();
    this.getPromociones();
    console.log('ionViewDidLoad HomePage');
  }
  gotoSolicitud(){
    this.navCtrl.push(SolicitudPage);
  }

getPromociones(){
  this.promoService.getPromocion().subscribe((resp)=>{
    this.promociones=resp['data'];
    console.log(this.promociones);
    this.promociones.reverse();
    this.promo.id=this.promociones[0].id;
    this.promo.imagen=this.promociones[0].imagen;
    console.log(this.promo);
  },(error)=>{
    console.log(error);
  });
}
}

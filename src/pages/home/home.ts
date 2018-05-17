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
  id:string,
  imagen:string,
};
promociones:any[];
longitu:number;
url_files:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public promoService:PromocionProvider,
  public authService: AuthProvider) {
    this.promo = {
      id:'',
      imagen:''
    }
    this.getPromociones();
  }

  ionViewDidLoad() {
    this.promo = {
      id:'',
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
    this.longitu=this.promociones.length;
    this.promo.id=this.promociones[this.longitu-1].id;
    this.promo.imagen=this.promociones[this.longitu-1].imagen;
    console.log(this.promo);
  },(error)=>{
    console.log(error);
  });
}
}

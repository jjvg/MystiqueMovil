import { AuthProvider } from './../../providers/auth/auth';

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
  url_api:any
  promociones: any;
  url_files:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public promocionService: PromocionProvider,
  public authService: AuthProvider) {
  }
  getPromociones(){
    this.promocionService.getPromocion().subscribe(
      (data)=>{
        this.promociones=data['data'];
      },(error)=>{console.log(error)}
    );
  
  }
  doRefresh(refresher){
    this.promocionService.getPromocion().subscribe(
      (data)=>{
        this.promociones=data['data'];
      },(error)=>{console.log(error)}
    );
    setTimeout(() => {
      refresher.complete();
    }, 3000);
  }
  ionViewDidLoad() {
    this.promociones=[]
    this.url_api= this.authService.ApiUrl();
    this.url_files=this.authService.ApiFile();
    this.getPromociones();
   
   
    console.log(this.promociones);
  }
  adquirirPromo(data){
    this.navCtrl.push(SolicitudPage,data)
  }

}

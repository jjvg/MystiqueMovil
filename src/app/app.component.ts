import { PrincipalPage } from './../pages/principal/principal';
import { PromocionesPage } from './../pages/promociones/promociones';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from "../pages/login/login";
import { PerfilPage } from '../pages/perfil/perfil';
import { SolicitudesPage } from '../pages/solicitudes/solicitudes';
import { TipsPage } from '../pages/tips/tips';
import {ReclamosPage} from '../pages/reclamos/reclamos';
import {ServiciosRPage} from '../pages/servicios-r/servicios-r';
import {CitasPage} from '../pages/citas/citas';
import {SugerenciasPage} from '../pages/sugerencias/sugerencias';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;
  pages: Array<{title: string, component: any,icon:string, bage:number}>

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public loadingCtrl:LoadingController) {

    this.pages=[
      {title: 'Inicio', component: PrincipalPage, icon:'home', bage:null},
      {title: 'Perfil', component: PerfilPage, icon:'contact', bage:null},
      {title: 'Citas', component:CitasPage,icon:'calendar', bage:null},
      {title: 'Solicitudes',component:SolicitudesPage,icon:'paper-plane', bage:null},
      {title: 'Reclamos',component: ReclamosPage,icon:'filing',bage:null},
      {title: 'Servicios Recibidos',component: ServiciosRPage,icon:'list-box', bage:null},
      {title: 'Buzon de Comentarios',component:SugerenciasPage,icon:'mail', bage:null},
      {title: 'Promociones',component:PromocionesPage,icon:'star', bage:null},
      {title: 'Consejos',component:TipsPage,icon:'megaphone', bage:null}
    ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    

    }
    Loading(p) {
      let loading = this.loadingCtrl.create({
        spinner: 'crescent',
      });
    
      loading.present();
    
      setTimeout(() => {
        this.nav.setRoot(p.component);
      }, 1000);
    
      setTimeout(() => {
        loading.dismiss();
      }, 5000);
    }
    //openPage(p){
     // this.nav.setRoot(p.component);
 // }
  exit(){
    this.nav.setRoot(LoginPage);
  }
}

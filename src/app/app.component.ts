import { NotificacionProvider } from './../providers/notificacion/notificacion';
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
import { LocalNotifications } from '@ionic-native/local-notifications';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;
  pages: Array<{title: string, component: any,icon:string, bage:number}>
  notificacion:any[];
  auxnotificaciones: any[];
  nuevanotificacion;
  constructor(platform: Platform, statusBar: StatusBar,
     splashScreen: SplashScreen,
     public loadingCtrl:LoadingController,
     private localNotifications: LocalNotifications,
    private notiService:NotificacionProvider) {

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
      setInterval(() => { 
        this.consultarNotificaciones();
     }, 10000);
    });
    

    }
    Loading(p) {
      let loading = this.loadingCtrl.create({
        spinner: 'crescent',
      });
    
      loading.present();
    
      setTimeout(() => {
        this.nav.setRoot(p.component);
      }, 2000);
    
      setTimeout(() => {
        loading.dismiss();
      }, 5000);
    }
    //openPage(p){
     // this.nav.setRoot(p.component);
 // }
  exit(){
    localStorage.clear();
    this.nav.setRoot(LoginPage);
  }
  consultarNotificaciones(){
    this.auxnotificaciones=this.notificacion;
    this.notiService.getNotificaciones().subscribe((resp)=>{
      this.notificacion=resp['data'];
      this.comparacion();    
    },(error)=>{
      console.log(error);
    })
  }
  comparacion(){
    if(this.auxnotificaciones){
      if(this.auxnotificaciones.length !== this.notificacion.length){
        this.nuevanotificacion = this.notificacion[this.notificacion.length-1];
      }
    }
  }
}

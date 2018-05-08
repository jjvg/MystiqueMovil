import { PrincipalPage } from './../pages/principal/principal';
import { PromocionesPage } from './../pages/promociones/promociones';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
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
  pages: Array<{title: string, component: any,icon:string }>

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    this.pages=[
      {title: 'Inicio', component: PrincipalPage, icon:'home'},
      {title: 'Perfil', component: PerfilPage, icon:'contact'},
      {title: 'Citas', component:CitasPage,icon:'calendar'},
      {title: 'Solicitudes',component:SolicitudesPage,icon:'paper-plane'},
      {title: 'Reclamos',component: ReclamosPage,icon:'filing'},
      {title: 'Servicios Recibidos',component: ServiciosRPage,icon:'list-box'},
      {title: 'Buzon de Comentarios',component:SugerenciasPage,icon:'mail' },
      {title: 'Promociones',component:PromocionesPage,icon:'star'},
      {title: 'Consejos',component:TipsPage,icon:'megaphone'}
    ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    

    }
    openPage(p){
      this.nav.setRoot(p.component);
  }
  exit(){
    this.nav.setRoot(LoginPage);
  }
}

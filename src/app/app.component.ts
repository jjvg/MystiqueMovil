import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from "../pages/login/login";
import { PerfilPage } from '../pages/perfil/perfil';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;
  pages: Array<{title: string, component: any,icon:string }>

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    this.pages=[
      {title: 'Perfil', component: PerfilPage, icon:'contact'},
      {title: 'Citas', component:'',icon:'calendar'},
      {title: 'Mensajes',component:'',icon:'mail' },
      {title: 'Reclamos',component:'',icon:'filing'},
      {title: 'Solicitudes',component:'',icon:'paper-plane'},
      {title: 'Servicios Recibidos',component:'',icon:'list-box'},
      {title: 'Promociones',component:'',icon:'star'},
      {title: 'Consejos para Ti',component:'',icon:'megaphone'}
    ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

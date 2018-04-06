
//Modulos , librerias
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { Ionic2RatingModule } from 'ionic2-rating';
import { DatePickerModule } from 'ion-datepicker';
// Pages
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage} from '../pages/login/login';
import { ServicioPage } from '../pages/servicio/servicio';
import { SolicitudPage } from './../pages/solicitud/solicitud';
import { PrincipalPage } from './../pages/principal/principal';
import { HistorialPage } from './../pages/historial/historial';
//Componentes
import { ServrecomendadoComponent } from '../components/servrecomendado/servrecomendado';
import { ArtrecomendadoComponent} from '../components/artrecomendado/artrecomendado'
// Nativos
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//Providers
import { ServiciosProvider } from '../providers/servicios/servicios';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    TabsPage,
    ServicioPage,
    ServrecomendadoComponent,
    ArtrecomendadoComponent,
    SolicitudPage,
    PrincipalPage,
    HistorialPage
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    Ionic2RatingModule,
    DatePickerModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    TabsPage,
    ServicioPage,
    SolicitudPage,
    PrincipalPage,
    HistorialPage
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiciosProvider,
   
    
  ]
})
export class AppModule {}

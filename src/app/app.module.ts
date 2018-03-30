

//Modulos , librerias
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http'
// Pages
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage} from '../pages/login/login';
import { ServicioPage } from '../pages/servicio/servicio';
//Componentes
import { ServrecomendadoComponent } from '../components/servrecomendado/servrecomendado';
import { ArtrecomendadoComponent} from '../components/artrecomendado/artrecomendado'
// Nativos
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServiciosProvider } from '../providers/servicios/servicios';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    TabsPage,
    ServicioPage,
    ServrecomendadoComponent,
    ArtrecomendadoComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    TabsPage,
    ServicioPage,
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiciosProvider
  ]
})
export class AppModule {}

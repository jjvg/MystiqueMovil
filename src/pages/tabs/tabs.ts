<<<<<<< HEAD
import { Component } from '@angular/core';
import {IonicPage} from 'ionic-angular';


import { HomePage } from '../home/home';
import { ServicioPage } from '../servicio/servicio';
import { HistorialPage } from '../historial/historial';
import { PresupuestoPage } from '../presupuesto/presupuesto';

=======
import { HistorialPage } from './../historial/historial';
import { Component } from '@angular/core';
import {IonicPage} from 'ionic-angular';
import { HomePage } from '../home/home';
import { ServicioPage } from '../servicio/servicio';
>>>>>>> 9d13c177e8340533ad235ff754b4b58761e6d55e


@IonicPage()
@Component({
 selector:'tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ServicioPage;
  tab3Root = HistorialPage;
<<<<<<< HEAD
  tab4Root = PresupuestoPage;
=======
  tab4Root ='';
>>>>>>> 9d13c177e8340533ad235ff754b4b58761e6d55e
 

  constructor() {

  }
 
}


import { ClienteProvider } from './../../providers/cliente/cliente';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { RechazoPage } from './../rechazo/rechazo';
import { PresupuestoPage } from './../presupuesto/presupuesto';
import { SolicitudPage } from '../solicitud/solicitud';
import { SolicitudProvider } from '../../providers/solicitud/solicitud';
/**
 * Generated class for the SolicitudesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solicitudes',
  templateUrl: 'solicitudes.html',
})
export class SolicitudesPage {
  public loading:Loading;
  solicitudes:Array<{
    
  }>;
  cliente:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public solicitudServicio: SolicitudProvider,
    public clienteServicio:ClienteProvider) {
      this.cliente= this.clienteServicio.getCliente().id
  }

  ionViewDidLoad() {
    this.getSolicitudes();
    console.log('ionViewDidLoad SolicitudesPage');
  }
  verPresupuesto(){
    this.navCtrl.push(PresupuestoPage)
    
  }
  verDetalle()
  {
    this.navCtrl.push(RechazoPage)
  }
  gotoSolicitud(){
    this.navCtrl.push(SolicitudPage)
    this.loading = this.loadingCtrl.create({
      dismissOnPageChange: true,
    });
    this.loading.present();
  }
  getSolicitudes(){
    this.solicitudServicio.getSolicitud(this.cliente).subscribe((resp)=>{
      this.solicitudes=resp['data'].solicitudes;
      console.log(this.solicitudes);
    },(error)=>{
      console.log(error);
    });
  }
}

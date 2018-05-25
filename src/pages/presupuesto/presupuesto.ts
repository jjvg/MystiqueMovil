import { ServicioRProvider } from './../../providers/servicio-r/servicio-r';
import { EmpleadoProvider } from './../../providers/empleado/empleado';
import { PresupuestoProvider } from './../../providers/presupuesto/presupuesto';
import { SolicitudProvider } from './../../providers/solicitud/solicitud';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { RechazoComponent } from '../../components/rechazo/rechazo';
import { AgendaPage } from '../agenda/agenda';

/**
 * Generated class for the PresupuestoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-presupuesto',
  templateUrl: 'presupuesto.html',
})
export class PresupuestoPage {
  
  total:any;
  ser:any;
solicitud:{
  apellido:string,
cantidad_servicios:number,
empleado:any[],
estado:string
fecha_creacion:Date,
id:number,
id_cliente:number,
id_promocion:number,
nombre:string,
servicios_solicitados:any[],
sexo:string
};
presupuesto:{
  id:number,
  id_solicitud:number,
  monto_total:number,
  fecha_creacion:Date,
  estado:string
};
oren:{
  id_solicitud:number,
  empleados_asignados:number[];
}
empleaos:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public dataSolicitud: SolicitudProvider,public modalCtrl: ModalController,
    public presuService:PresupuestoProvider,
  public empleadoService:EmpleadoProvider,
  public orenService:ServicioRProvider) {
    this.solicitud={
      apellido:'',
      cantidad_servicios:0,
      empleado:[],
      estado:'',
      fecha_creacion:null,
      id:0,
      id_cliente:0,
      id_promocion:0,
      nombre:'',
      servicios_solicitados:[],
      sexo:''
      };
      this.solicitud=this.navParams.data;
      this.oren.id_solicitud=this.solicitud.id;
      this.oren.empleados_asignados=this.solicitud.empleado;
    }
   

  cargarSolicitud(){
    this.solicitud=this.dataSolicitud.getSolicitud();
  }
obtenerPresupuesto(){
  this.presuService.getPresupuesto(this.solicitud.id).subscribe((resp)=>{
    this.presupuesto=resp['data'];
    console.log(this.presupuesto);
  },(error)=>{
    console.log(error);
  })
}
  rechazar(){
      let profileModal = this.modalCtrl.create(RechazoComponent);
      profileModal.present();
  }
  agendar(){
    this.presupuesto.estado='A',
    this.presuService.updatedPresupuesto(this.presupuesto).subscribe((pre)=>{
      console.log(pre);
      this.crearOrden();
      this.navCtrl.push(AgendaPage,this.solicitud);
    },(error)=>{
      console.log(error);
    });
  }
  crearOrden(){
    this.orenService.newOrden(this.oren).subscribe((resp)=>{
      console.log(resp);
    },(error)=>{
      console.log(error);
    })
  }
}

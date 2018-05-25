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
empleaos:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public dataSolicitud: SolicitudProvider,public modalCtrl: ModalController,
    public presuService:PresupuestoProvider,
  public empleadoService:EmpleadoProvider) {
    this.solicitud={
      apellido:'',
      cantidad_servicios:null,
      empleado:[],
      estado:'',
      fecha_creacion:null,
      id:null,
      id_cliente:null,
      id_promocion:null,
      nombre:'',
      servicios_solicitados:[],
      sexo:''
      };
    this.solicitud=this.navParams.data
    this.empleaos=[];
    this.presupuesto={
      id:null,
      id_solicitud:null,
      monto_total:null,
      fecha_creacion:null,
      estado:''
    };
  }

  ionViewDidLoad() {
    console.log(this.solicitud)
    console.log('ionViewDidLoad PresupuestoPage');
    this.cargarPresupuesto();
    this.cargarEmple();    
    this.solicitud.servicios_solicitados.reverse();
  }
  cargarPresupuesto(){
    this.presuService.getPresupuesto(this.solicitud.id).subscribe((ata)=>{
      this.presupuesto=ata['data'];
      console.log(this.presupuesto)
    },(error)=>{
      console.log(error);
    })
  } 
  cargarEmple(){
    for (let i = 0; i < this.solicitud.empleado.length; i++) {
      this.empleadoService.getEmpleado(this.solicitud.empleado[i]).subscribe((empe)=>{
        this.empleaos.push(empe['data']);
        console.log(this.empleaos)
      },(error)=>{
        console.log(error);
      })
    }
  }
  rechazar(){
    this.presuService.setPresu(this.presupuesto);
      let profileModal = this.modalCtrl.create(RechazoComponent);
      profileModal.present();
    }
  agendar(){
    this.presupuesto.estado='A',
    this.presuService.updatedPresupuesto(this.presupuesto).subscribe((pre)=>{
      console.log(pre);
    },(error)=>{
      console.log(error);
    });
    this.navCtrl.push(AgendaPage);
  }
}

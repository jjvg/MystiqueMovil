import { CancelarcitaComponent } from './../../components/cancelarcita/cancelarcita';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CitaProvider } from './../../providers/cita/cita';
import { ClienteProvider } from './../../providers/cliente/cliente';

/**
 * Generated class for the CitasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-citas',
  templateUrl: 'citas.html',
})
export class CitasPage {
id_cli:number;
orden:any;
empleado:any;
solicitud:any;
servicioS:any;
servicio:any;
serviciot:any;
presupuesto:any;
empleados:any;
citas :any[];
tips :any;
id_cita :number;
ordenS:{

  estado: string;
}
citaA:{

  estado: string;
}

or_id:number;
or:{
  id:number,
}
Cita:{
  empleado:string,
}
constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController, public citaP: CitaProvider, public cliProvider: ClienteProvider) {
this.obOrden();
this.obEmpleado();
this.obSolicitud();
this.obServicioS();
this.obServicio();
this.obServicioT();
this.obPresupuesto();
this.obEmpleados();
this.ordenS={
  estado: "",
}
this.or={
  id:0,
}
this.Cita={
  empleado : "",
}
this.citaA={

  estado: "",
}
this.tips=[{
  "fecha":"20/05/2018",
  "total":"20.000",
  "hora":"8:00 am",
  "servicios":"Peinado",
  "encargado":"Maria Perez",
}];

  }

  ionViewDidLoad() {
    this.obOrden();
this.obEmpleado();
this.obSolicitud();
this.obServicioS();
this.obServicio();
this.obServicioT();
this.obPresupuesto();
this.obEmpleados();

this.citas=[];
this.obCita();
    console.log('ionViewDidLoad CitasPage');
  }
  obOrden(){
    this.citaP.getOrden().subscribe(
      (data)=>{
        this.orden=data['data'];
        console.log(this.orden)
      },(error)=>{console.log(error)}
      
    );
  }

  obCita(){
    this.citaP.getCita().subscribe(
      (data)=>{
        this.citas=data['data'];
        console.log(this.citas)
      },(error)=>{console.log(error)}
      
    );
  }
  
  obEmpleados(){
    this.citaP.getEmpleados().subscribe(
      (data)=>{
        this.empleados=data['data'];
        console.log(this.empleados)
      },(error)=>{console.log(error)}
      
    );
  }
  obEmpleado(){
    this.citaP.getEmpleado().subscribe(
      (data)=>{
        this.empleado=data['data'];
        console.log(this.empleado)
      },(error)=>{console.log(error)}
      
    );
  }
  obSolicitud(){
    this.id_cli=this.cliProvider.getCliente().id;
    this.citaP.getSolicitud().subscribe(
      (data)=>{
        this.solicitud=data['data'];
        console.log(this.solicitud)
      },(error)=>{console.log(error)}
      
    );
  }
  obServicioS(){
    this.citaP.getServicioS().subscribe(
      (data)=>{
        this.servicioS=data['data'];
        console.log(this.orden)
      },(error)=>{console.log(error)}
      
    );
  }
  obServicio(){
    this.citaP.getServicio().subscribe(
      (data)=>{
        this.servicio=data['data'];
        console.log(this.servicio)
      },(error)=>{console.log(error)}
      
    );
  }
  obServicioT(){
    this.citaP.getTServicio().subscribe(
      (data)=>{
        this.serviciot=data['data'];
        console.log(this.serviciot)
      },(error)=>{console.log(error)}
      
    );
  }

  obPresupuesto(){
    this.citaP.getPresupuesto().subscribe(
      (data)=>{
        this.presupuesto=data['data'];
        console.log(this.presupuesto)
      },(error)=>{console.log(error)}
      
    );
  }
  ActualizarOrden(id){
    this.ordenS.estado='K';
    this.citaP.Aincidencia(id, this.ordenS).subscribe((data)=>{
      console.log(data);
    },(error)=>{
      console.log(error);
    })
  }
  ActualizarCita(a){
    this.citaA.estado='K';
    for (let i = 0; i < this.citas.length; i++)
     if(this.citas[i].id_orden_servicio==a){
       this.id_cita=this.citas[i].id_orden_servicio;
         this.citaP.Acita(this.id_cita, this.citaA).subscribe((data)=>{
           console.log(data);
         },(error)=>{
           console.log(error);
         })
       
   }
  }
 
  cancelarCita(or) {
    console.log(this.citas);
    this.ActualizarCita(or.id);
    this.ActualizarOrden(or.id);
    console.log(or);
    console.log(this.or.id);
    let profileModal = this.modalCtrl.create(CancelarcitaComponent,or);
    profileModal.present();
  }

}

import { CancelarcitaComponent } from './../../components/cancelarcita/cancelarcita';
import { Component } from '@angular/core';
import { AuthProvider } from './../../providers/auth/auth';
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
  tips :any;
  url_api:any;
  citaE:any[];
  ordenesE:any[];
  citas:any[];
  ordenF:any[];
  citaT :any[];
  empleados:any;
  id_cliente:number;
  ordenS:{

    estado: string;
  }
  citaA:{
  
    estado: string;
  }
  or:{
    id:number,
  }
  id_cita :number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController, public citaProvider: CitaProvider,
    public clienteProvider: ClienteProvider,
    public authService: AuthProvider) {
      this.getOrdenes();
      this.obCitaT();
      this.obEmpleados();
      this.citas=[];
      this.citaE=[];
      this.ordenesE=[];
      this.ordenF=[];
      this.citaT=[];
      this.id_cliente= this.clienteProvider.getCliente().id;
      this.ordenS={
        estado: "",
      }
      this.or={
        id:0,
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


  ionViewDidLoad() {function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
  
  }

  this.url_api= this.authService.ApiUrl();

    console.log('ionViewDidLoad CitasPage');
  }

  obEmpleados(){
    this.citaProvider.getEmpleado().subscribe(
      (data)=>{
        this.empleados=data['data'];
        console.log(this.empleados)
      },(error)=>{console.log(error)}
      
    );
  }

  obCitaT(){
    this.citaProvider.getCitaT().subscribe(
      (data)=>{
        this.citaT=data['data'];
        console.log(this.citaT)
      },(error)=>{console.log(error)}
      
    );
  }

  llenarArray(){ 
  if(this.citaE){  
  for(let j = 0; j < this.citaE.length; j++ ){
    if(this.citaE[j].id_cliente==this.id_cliente){
      this.ordenesE.push(this.citaE[j]);
      
    }
  }
}
  console.log(this.ordenesE);
}
  
  llenar(){
    if(this.ordenesE){
    for(let i = 0; i < this.ordenesE.length; i++){
      if(this.ordenesE[i].citas[0].estado==='E'){
        this.ordenF.push(this.ordenesE[i]);
      }
    }
  }
    console.log(this.ordenF);
   }

  getOrdenes(){
    this.citaProvider.getCitas().subscribe(
      (data)=>{
        this.citaE=data['data'];
        console.log(this.citaE)
        this.llenarArray();
        this.llenar();
      },(error)=>{console.log(error)} 
    );}

    ActualizarOrden(id){
      this.ordenS.estado='K';
      this.citaProvider.Aincidencia(id, this.ordenS).subscribe((data)=>{
        console.log(data);
      },(error)=>{
        console.log(error);
      })
    }
    ActualizarCita(a){
      this.citaA.estado='K';
      console.log(this.citaT);
      for (let i = 0; i < this.citaT.length; i++)
      
       if(this.citaT[i].id_orden_servicio==a){
         this.id_cita=this.citaT[i].id_orden_servicio;
           this.citaProvider.Acita(this.id_cita, this.citaA).subscribe((data)=>{
             console.log(data);
           },(error)=>{
             console.log(error);
           })
         
     }
    }
   
    cancelarCita(or) {
      console.log(this.empleados);
      console.log(this.citas);
      this.ActualizarCita(or.id);
      this.ActualizarOrden(or.id);
      console.log(or);
      console.log(this.or.id);
      let profileModal = this.modalCtrl.create(CancelarcitaComponent,or);
      profileModal.present();
    }
  
  

}

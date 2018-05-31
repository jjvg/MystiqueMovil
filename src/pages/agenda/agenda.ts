import { EmpleadoProvider } from './../../providers/empleado/empleado';
import { ClienteProvider } from './../../providers/cliente/cliente';
import { ServicioRProvider } from './../../providers/servicio-r/servicio-r';
import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { DatePickerDirective } from 'ion-datepicker';
import 'rxjs/add/operator/debounceTime';
import { AgendaProvider } from '../../providers/agenda/agenda';
import { PrincipalPage } from '../principal/principal';
//import {PrincipalPage} from '../principal/principal';
/**
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {

@ViewChild(DatePickerDirective) private datepicker: DatePickerDirective;
public localDate: Date = new Date();
public initDate: Date = new Date();
public localeString = {
  monday: true,
  weekdays: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
  months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
};
  color:{ background:'#fd0087'}
visible : Boolean=true;
horavisible: Boolean;
empleadovisible:Boolean;
Fechavisible:Boolean;
preferenciaAtencion:Boolean;
public maxDate: Date = new Date(new Date().setDate(new Date().getDate() + 30));
public min: Date = new Date()
fecha: any;
fecha2:Date = new Date();
bloques:any[];
cliente:number;
ordenes:any[];
soli:number;
orden:any;
emplea:number[]
horario_emplea:any[];
grupoFecha:any[];
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
 fechaid:number;
 hora_bloque:any[];
 fechasnodisponibles:Date[];
 dias_laborables:Array<{id:number,fecha_creacion:Date,estatus:string,dia:Date}>;
 dia_id:number;
 bloques_hora:any[];
 bloques_total:any[];
 citas:Array<{
  bloques_requeridos:number,
   id_orden_servicio:number,
   hora_inicio:string;
   hora_fin:string;
   horarios:any[];
 }>
 aux:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,
  public serviRec:ServicioRProvider, public clienteService:ClienteProvider, 
  public empleadoServic:EmpleadoProvider, public agendaService:AgendaProvider,
  public loadingCtrl:LoadingController) {
    this.bloques=[];
    this.fecha = this.localDate.toLocaleString()
    this.cliente=null;
    this.fecha2= null;
    this.soli=null;
    this.orden=null;
    this.emplea=[];
    this.grupoFecha=[];
    this.dias_laborables=[];
    this.dia_id=0;
    this.bloques_hora=[];
    this.bloques_total=[];
    this.hora_bloque=[];
    this.citas=[];
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
      this.ordenes=[];
      this.aux=[];
      this.fechaid=0;
      this.cliente=this.clienteService.getCliente().id;
      console.log(this.cliente);
      this.buscarOren();

  }
  

  ionViewDidLoad() {
    this.fechasnodisponibles=[];
    console.log('ionViewDidLoad AgendaPage');
    console.log(this.navParams.data);
    this.cliente=this.clienteService.getCliente().id;
    this.solicitud=this.navParams.data;
    this.emplea=this.solicitud.empleado;
    this.horariogeneral();
    this.buscarOren();
    this.getHorarios();
    this.obtenerLabo();
  }
  openDate(){
    this.datepicker.open();
    this.datepicker.changed.subscribe(() => {
      this.horavisible=true;
      console.log(this.horavisible);
      this.obtenerBolques();
      console.log('test')
    });
  }
  public event(data: Date): void {
    this.localDate = data;
  }
  setDate(date: Date) {
    console.log(date);
    this.initDate = date;
    this.fecha=this.initDate.toLocaleString();
  };
 
      gotoGuardar(){
        let alert = this.alertCtrl.create({
          title: 'Confirmacion',
          subTitle: 'Su cita a sido agendada, Gracias por escoger nuestros servicios',
          buttons: [{
            text:'Cerrar',
          handler:()=>{
            let navTran=alert.dismiss();
              navTran.then(()=>{
                this.navCtrl.popToRoot();
              });
            return false;
          }
          }],
        });
        alert.present()
      }
      verFecha(){
        this.Fechavisible=true;
        this.empleadovisible=false
      }
      buscarOren(){
        this.serviRec.getServiciosR(this.cliente).subscribe((resp)=>{
          this.aux=[];
          this.aux=resp['data'].ordenes;
          console.log(this.aux);
          this.ordenes=this.aux;
          console.log(this.ordenes);
          this.asignarUnaOrden();
        },(error)=>{
          console.log(error);
        })
      }

      asignarUnaOrden(){
        this.orden=null;
        for (let i = 0; i < this.ordenes.length; i++) {
          if(this.ordenes[i].id_solicitud===this.solicitud.id){
            this.orden=this.ordenes[i];
            break;
          }
          
        }
      }
      getHorarios(){
        this.horario_emplea=[];
        for (let i = 0; i <this.emplea.length; i++) {
          this.empleadoServic.getHorarioEmpleado(this.emplea[i]).subscribe((resp)=>{
            this.horario_emplea=resp['data'].horarios;
            this.organizar();
            
          })  
        }
        
        
      }
      organizar(){
        this.grupoFecha=[];
        
        for (let i = 0; i <this.horario_emplea.length; i++) {
          if(this.fechaid != this.horario_emplea[i].id_dia_laborable){
              let fecha = this.horario_emplea[i].id_dia_laborable;  
                for (let j = 0; j < this.horario_emplea.length; j++) {
                  if(fecha===this.horario_emplea[i].id_dia_laborable){
                    this.grupoFecha.push(this.horario_emplea[i]);
                   
                  }         
              }
              this.filtro()
          }
        }
    }
    filtro(){
      let cont=0;
      
      for (let i = 0; i < this.grupoFecha.length; i++) {
        if(this.grupoFecha[i].id_cita===null){
          cont++;
       
        }        
      }
     
      if(cont<this.solicitud.cantidad_servicios){
        this.fechasnodisponibles.push(this.grupoFecha[0].dia)
      }
      this.fechaid=this.grupoFecha[0].id_dia_laborable;
      this.grupoFecha=[];  
    }
    obtenerBolques(){
      
      this.horavisible=true;
      this.agruparBloques();
      this.bloquesPordia();
      this.cargarGranbloque();
      console.log(this.bloques_total);
    }
    obtenerLabo(){
      this.agendaService.getLaborables().subscribe((resp)=>{
        this.dias_laborables=resp['data'];
      },(error)=>{
        console.log(error);
      })
    }
    horariogeneral(){
      this.agendaService.getHorario().subscribe((resp)=>{
        this.hora_bloque=resp['data'];
        console.log(this.hora_bloque);
      })
    }
    agruparBloques(){
      let fecha=this.initDate.toISOString();
      for (let i = 0; i < this.dias_laborables.length; i++) {
          if(String(fecha) === String(this.dias_laborables[i].dia)){
              this.dia_id=this.dias_laborables[i].id;
              break;             
            }
      }
    }
    bloquesPordia(){
      console.log(this.dia_id);
      for (let j = 0; j < this.horario_emplea.length; j++) {
        if(this.horario_emplea[j].id_dia_laborable===this.dia_id){
          console.log('estoy aqui pana ale ');
          this.bloques_hora.push(this.horario_emplea[j]);
        }
      }
    }
    cargarGranbloque(){
      
      console.log(this.bloques_hora);
      for (let i = 0; i <this.solicitud.cantidad_servicios; i++) {
        this.bloques.push(this.bloques_hora[i]);
        this.bloques_hora.splice(i,1);
      }
      console.log(this.bloques)
      
      this.citasbloque();
  }
  citasbloque(){
    let c={
      
      bloques_requeridos:0,
      id_orden_servicio:0,
      hora_inicio:null,
      hora_fin:null,
      horarios:[]
    }
    c.bloques_requeridos=Number(this.solicitud.cantidad_servicios);
    c.hora_inicio=this.bloques[0].hora_inicio;
    let tama=this.bloques.length;
    console.log(tama);
    c.hora_fin=this.bloques[tama-1].hora_fin;
    c.id_orden_servicio=this.orden.id;
    for (let i = 0; i < this.bloques.length; i++) {
        c.horarios.push(this.bloques[i].id);
    }
    this.citas.push(c);
    this.bloques=[];
    if(this.solicitud.cantidad_servicios<=this.bloques_hora.length){
      this.cargarGranbloque(); 
    }
    console.log(this.citas)
  }
  saveCita(cita){
    this.agendaService.newCita(cita).subscribe((resp)=>{
      console.log(resp);
      this.mensaje();
    },(error)=>{
      console.log(error);
      this.mensajeError();
    })
  }
  mensaje(){
    let alert = this.alertCtrl.create({
      title: 'Confirmacion',
      subTitle: 'Gracias por preferirnos',
      buttons: [{
        text:'Cerrar',
      handler:()=>{
       this.Loading();
          }
      }],
    });
    alert.present()
  }
  mensajeError(){
    let alert = this.alertCtrl.create({
      title: 'Disculpe',
      subTitle:'Falla en el servidor intente mas tarde ',
      buttons:[{
        text:'Cerrar',
        handler:()=>{
           this.Loading();
        }
      }]
    })
    alert.present();
  }
  Loading() {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
    });
  
    loading.present();
  
    setTimeout(() => {
      this.navCtrl.popTo(PrincipalPage);
    }, 3000);
  
    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }
}

import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Component,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatePickerDirective } from 'ion-datepicker';
//import{ FormBuilder, Validators} from '@angular/forms';
//import {FormGroup } from '@angular/forms/src/model';
/**
 * Generated class for the SolicitudPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solicitud',
  templateUrl: 'solicitud.html',
})
export class SolicitudPage {
  //solicitudForm:FormGroup;
  
  public serSelec:Array<{}>;
  empleadosDisponibles:any;
  bloques:any[];
  @ViewChild(DatePickerDirective) private datepicker: DatePickerDirective;
  public localDate: Date = new Date();
  public initDate: Date = new Date();
  public localeString = {
    monday: true,
    weekdays: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  };
  visible : Boolean;
  horavisible: Boolean;
  empleadovisible:Boolean;
  public maxDate: Date = new Date(new Date().setDate(new Date().getDate() + 30));
  public min: Date = new Date()
  fecha: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams ,public alertCtrl: AlertController) {
  this.bloques=['8:00 am','9:00 am','11:00 am','1:00 pm','3:00 pm'];
  this.fecha= this.localDate.toLocaleString()
  this.horavisible=false;
  this.empleadovisible=false;
  this.visible=true;
  this.empleadosDisponibles=[
    {
      nombre:'Claudia Moreno',
      foto :'assets/imgs/peluquera1.jpg',
      especialidad:'Peinados',
    },
    {
      nombre:'Lorena Rojas',
      foto :'assets/imgs/peluquera2.jpg',
      especialidad:'Cortes',
    },
    {
      nombre:'Maria Navarro',
      foto :'assets/imgs/peluquera3.jpg',
      especialidad:'Quimicos Capilares',
    },

  ]
  }

  ionViewDidLoad() {
    console.log(this.initDate);
    console.log(this.localDate);
    console.log('ionViewDidLoad SolicitudPage'+this.fecha);
  }
  openDate(){
    this.datepicker.open();
    this.datepicker.changed.subscribe(() => {
      this.horavisible=true;
      console.log(this.horavisible);
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
  verConfirmacion()
  {
    let confir= this.alertCtrl.create({
      title: 'Seleccione una opción',
      message:'¿Desea selecionar un empleado en particular?',
      buttons:[
              {
                text:'SI',
                handler:()=>{
                console.log('Dijo que si');
                this.horavisible=false;
                this.visible=false;
                this.empleadovisible=true;
                console.log(this.empleadovisible);
                  }
              },
              {
                text: 'NO',
                handler:()=>{
                console.log('Dijo que no');
                //this.asignarAleatorio();
                //this.guardarSolicitud();
                 }
              }
          ]
    });
    confir.present();
  }
 /* Discutir calcularHoras(){
    let acum:Number;
    for(let i=0; i<this.serSelec.length; i++){
      acum =+ this.serSelec[i].duracion;
    }
    return acum;
  }*/
  obtenerBloques(){
    //this.dataAgenda.getBloquesDispo(this.initDate).subscribe(
      //(data)=>{
        //this.bloques=data;
        this.horavisible=true;
      }
    
  
}

import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DatePickerDirective } from 'ion-datepicker';
import 'rxjs/add/operator/debounceTime';
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
  color:{ backgroundcolor:'#fd0087'}
visible : Boolean=true;
horavisible: Boolean;
empleadovisible:Boolean;
Fechavisible:Boolean;
preferenciaAtencion:Boolean;
public maxDate: Date = new Date(new Date().setDate(new Date().getDate() + 30));
public min: Date = new Date()
fecha: any;
bloques:any[];
 empleadosDisponibles:any;
 d:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    this.bloques=['8:00 am','1:00 pm'];
    this.fecha = this.localDate.toLocaleString()
    this.d = this.navParams.get('empleado');
    console.log(this.d)
    if (this.navParams.data.empleado =='') {
      this.empleadovisible=true;
      this.Fechavisible=false;
    }else{
      this.empleadovisible=false;
      this.Fechavisible=true
    }
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
    console.log('ionViewDidLoad AgendaPage');
    console.log(this.navParams.data)
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
  obtenerBloques(){
    //this.dataAgenda.getBloquesDispo(this.initDate).subscribe(
      //(data)=>{
        //this.bloques=data;
        this.horavisible=true;
      }
      gotoGuardar(){
        let alert = this.alertCtrl.create({
          title: 'Confirmacion',
          subTitle: 'Gracias por escojer nuestros servicios',
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

}


import { Component,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatePickerDirective } from 'ion-datepicker';
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
  @ViewChild(DatePickerDirective) private datepicker: DatePickerDirective;
  public localDate: Date = new Date();
  public initDate: Date = new Date();
  public localeString = {
    monday: true,
    weekdays: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  };
  public maxDate: Date = new Date(new Date().setDate(new Date().getDate() + 30));
  public min: Date = new Date()
  fecha: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.fecha= this.localDate.toLocaleString()
  }

  ionViewDidLoad() {
    console.log(this.initDate);
    console.log(this.localDate);
    console.log('ionViewDidLoad SolicitudPage'+this.fecha);
  }
  openDate(){
    this.datepicker.open();
    this.datepicker.changed.subscribe(() => console.log('test'));
  }

  public event(data: Date): void {
    this.localDate = data;
  }
  setDate(date: Date) {
    console.log(date);
    this.initDate = date;
    this.fecha=this.initDate.toLocaleString();
  }
  
 
}

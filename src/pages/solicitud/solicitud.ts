
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ServiciosProvider } from '../../providers/servicios/servicios';
import 'rxjs/add/operator/debounceTime';
import { FormControl } from '@angular/forms';
//import { PrincipalPage } from '../principal/principal';
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
  searchTerm: string = '';
  servicios:any;
  searchControl: FormControl;
  searching: any = false;
  public serSelec:Array<{}>;
  empleadosDisponibles:any;
 visible:Boolean=true;
 preferenciaAtencion:Boolean;
 empleadovisible:Boolean;
  
  constructor(public navCtrl: NavController, public navParams: NavParams ,public alertCtrl: AlertController, public dataSer: ServiciosProvider) {
  
  this.searchControl = new FormControl();
 
  console.log(this.navParams.data)
  if (this.navParams.data.tipo=="promocion") {
    console.log(this.navParams.data)
    this.visible=false;
    this.empleadovisible=true;  
  }else{
    this.empleadovisible=false;
  }
  this.preferenciaAtencion=false;
  
  
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
    this.setFilteredItems();
    this.searchControl.valueChanges.debounceTime(700).subscribe(search  => {
      this.searching = false;
      this.setFilteredItems();
      });

    console.log('ionViewDidLoad SolicitudPage');
  }


  
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
                this.visible=false;
                this.preferenciaAtencion=false;
                this.empleadovisible=true;
                console.log(this.empleadovisible);
                  }
              },
              {
                text: 'NO',
                handler:()=>{
                
                  this.visible=true;
                  this.preferenciaAtencion=false;
                  this.empleadovisible=false;
                console.log('Dijo que no');
                //this.asignarAleatorio();
                //this.guardarSolicitud();
                this.gotoGuardar();
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
    onSearchInput(){
      this.searching = true;
     }
    setFilteredItems() {
      this.servicios = this.dataSer.filterItems(this.searchTerm);
      }
      verFecha(){
        this.visible=false;
      }
      verPreferencia(){
        this.visible=false;
        this.preferenciaAtencion=true;
      }
  }

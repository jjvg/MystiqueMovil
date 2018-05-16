import {CalificarPage} from './../calificar/calificar';
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {ReclamogenerarPage} from './../reclamogenerar/reclamogenerar';
import {ServiciosProvider} from '../../providers/servicios/servicios';

/**
 * Generated class for the ServiciosRPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-servicios-r',
  templateUrl: 'servicios-r.html',
})
export class ServiciosRPage {

  pestana: string = "calificar";
  servicios: any = [];
  cliente:{
    i;
    nombre,
    apellio,
    ceula,
    telefono,
    irecion,
    fecha_nacimiento,
    tipo_cliente,
    estatus,
    orenes:Array<{i:string,i_soliciut,estao:string}>
  }
  oreenes_no_calificaa:any[];
  orene_calificaas:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public serviciosProvider: ServiciosProvider) {
  }


  ionViewDidLoad() {
    function flatten(arr) {
      return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
      }, []);
    
    }
    this.llenarArray();  
  }
    llenarArray(){
    for (let i = 0; i < this.cliente.orenes.length; i++) {
      if(this.cliente.orenes[i].estao==='R'){
        this.oreenes_no_calificaa.push(this.cliente.orenes[i]);
      }else{
        if(this.cliente.orenes[i].estao==='C'){
          this.orene_calificaas.push(this.cliente.orenes[i].estao);
        }
      }
    }
  }
   /* this.serviciosProvider.getServiciosRecibidos().subscribe(
      result => {

        if (result.error) {
          console.log(result);
        } else {
          this.servicios = flatten(result.data.map(function (i) {
            return i.detalle_servicio.map(function (j) {
              let servicio = j.servicio_solicitado.servicio;
              servicio.fecha = j.fecha_creacion;
              servicio.id_detalle_servicio = j.id;
              return servicio;
            })
          }));


        }

      },
      error => {
        console.log(<any>error);
      }
    );


  } */
  Reclamo() {
    let alert = this.alertCtrl.create({
      title: 'Aviso!',
      subTitle: 'Por Favor Califica nuestros Servicios para poder realizar un reclamo, Gracias',
      buttons: ['Cerrar']
    });
    alert.present();
  }
  calificar(id: number) {
    this.navCtrl.push(CalificarPage,id)
  }
  Reclamo1() {
    this.navCtrl.push(ReclamogenerarPage);
  }
}

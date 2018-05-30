import { Component } from '@angular/core';
import {ReclamoProvider} from '../../providers/reclamo/reclamo';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from './../../providers/auth/auth';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

/**
 * Generated class for the ReclamogenerarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reclamogenerar',
  templateUrl: 'reclamogenerar.html',
})
export class ReclamogenerarPage {
  opinion: string;
  tipo_reclamo:any[];
  comentario: any[];
  reclamo: {
    id_detalle_sevicio:number;
    id_tipo_reclamo:number;
    descripcion:string;
  }
  url_api:any;
  orden:{
    id:number,
    nombre:string,
    apellido:string,
    id_cliente:number,
    id_solicitud:number,
    estado:string,
    tipo_cliente:string,
    servicios_realizados:any[];
  }

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public alertCtrl: AlertController,
     public reclamoProvider: ReclamoProvider,
     public authService: AuthProvider,) {
       this.tipo_reclamo=[];
       this.comentario=[];
       this.reclamo={
         id_detalle_sevicio:0,
         id_tipo_reclamo:0,
         descripcion:'',
       }
       this.orden={
        id:0,
        nombre:"",
        apellido:'',
        id_cliente:0,
        id_solicitud:0,
        estado:'',
        tipo_cliente:'',
        servicios_realizados:[]
      }
      this.orden=this.navParams.data;
      console.log(this.orden)
        }

        getTiporeclamo(){
    this.reclamoProvider.getTipo_reclamo().subscribe((data)=>
    { this.tipo_reclamo=data['data'];
      console.log(this.tipo_reclamo)
      },(error)=>{console.log(error)} 
    );}

    CambiarEstado(){
      this.orden.estado='G';
      this.reclamoProvider.ActOden(this.orden.id, this.orden).subscribe((data)=>{
        console.log(data);
      },(error)=>{
        console.log(error);
      })
    }

    guardarReclamo(){
      console.log(this.reclamo);
      this.CambiarEstado()
     this.reclamoProvider.DescripcionReclamo(this.reclamo).subscribe((data)=>{
       console.log(data);
     },(error)=>{
       console.log(error);
     })
      let alert = this.alertCtrl.create({
          title: 'Holis!!',
          subTitle: 'Solicitud de garantia exitosa, Gracias por preferirnos',
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


  ionViewDidLoad() {
    this.url_api= this.authService.ApiUrl();
    console.log(this.getTiporeclamo);
    this.getTiporeclamo();
    console.log('ionViewDidLoad CalificarPage');
  }

}

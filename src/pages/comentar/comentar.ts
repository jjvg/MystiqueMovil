import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { ComentarioProvider } from './../../providers/comentario/comentario';
import { EmpleadosPage } from './../empleados/empleados';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SugerenciasPage } from '../sugerencias/sugerencias';
import { ServiciosPage } from '../servicios/servicios';


/**
 * Generated class for the ComentarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comentar',
  templateUrl: 'comentar.html',
})
export class ComentarPage {
visibleE: Boolean=false;
visibleS: Boolean=false;
visibleEm: Boolean=false;
ver:Boolean=true;
 direccion:string="";
tipos:string = "";
item:any;
dir:any;
comen:{
  tipo:string,
  nombre:string,
}
coment:any
text:Boolean=false;
text2:Boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public comenProvider: ComentarioProvider, public alertCtrl:AlertController) {
  console.log(this.direccion);
  this.comen={
    tipo:'',
    nombre:'',
  };
  this.coment=this.comenProvider.getComent();
  //if(this.comen.tipo != ""){
    //this.ver=false
  //}
  this.item={
    nombre:"",
    codigo:'',
  };
  this.item.nombre=this.navParams.data.nombre;
  this.item.codigo=this.navParams.data.codigo;
  console.log(this.item);
  }

  ionViewDidLoad() {
  	console.log(this.direccion)
    console.log('ionViewDidLoad ComentarPage');
    console.log (this.dir);
    this.tipos=this.coment.tipo;
    this.direccion=this.coment.dirigido;
  }
  ionViewWillEnter(){
    console.log(this.navParams.data);
    this.coment=this.comenProvider.getComent();
    console.log(this.coment)
  } 
  cambiar(){
  	 if(this.direccion === 'e'){
       //this.ver=false;
      this.visibleE=true;
      this.visibleS=false;
      this.comenProvider.setValor(this.tipos,this.direccion);
      
		 }else{
       if(this.direccion === 's'){
        this.comenProvider.setValor(this.tipos,this.direccion);
        this.visibleE=false;
       this.visibleS=true;     
       }else{
         if(this.direccion === 'em'){
          this.comenProvider.setValor(this.tipos,this.direccion);
           this.visibleEm=true;
           this.visibleE=false;
           this.visibleS=false; 
         }
       }
    }
     console.log(this.direccion);
     console.log(this.navParams.data);
  }
  selecEmpleado(){
    this.navCtrl.push(EmpleadosPage);
    this.visibleE=false
    this.text=true;
  }
  selecServicio(){
    this.navCtrl.push(ServiciosPage);
    this.visibleS=false;
    this.text2=true;
  }
  guardar(){
    let alert = this.alertCtrl.create({
        title: 'Hola!!',
        subTitle: 'Gracias por tu Comentario, TLo estaremos atendiendo',
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

 }
  


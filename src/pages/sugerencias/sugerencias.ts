import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Refresher } from 'ionic-angular';
import {ComentarPage} from '../comentar/comentar';
import { ComentarioProvider } from './../../providers/comentario/comentario';
import { ClienteProvider } from './../../providers/cliente/cliente';

/**
 * Generated class for the SugerenciasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sugerencias',
  templateUrl: 'sugerencias.html',
})
export class SugerenciasPage {
  id_cli:number;
  id_comen : any;
  tcomentarios:any;
  Sugerencias:any;
  RSugerencias:any;
  Comentario:any[];
  lista: Array<{id_co: number }>=[];
  respuesta:any;
  historico:any[]=[];
  respuestas:any[]=[];
 
  comentarios:string='historico';
  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController, public navParams: NavParams,public comenProvider: ComentarioProvider, public cliProvider: ClienteProvider ) {
   this.Respuestas();
   this.comentario();
   this.tcomentario();
  }
  comentario(){
   this.id_cli=this.cliProvider.getCliente().id;
    this.comenProvider.getComentario().subscribe(
      (data)=>{
        this.Comentario=data['data'];
        this.Comentario.reverse();
        console.log(this.Comentario)
      },(error)=>{console.log(error)}
      
    );
  }
  tcomentario(){
    this.comenProvider.getTComentario().subscribe(
      (data)=>{
        this.tcomentarios=data['data'];
        console.log(this.tcomentarios)
      },(error)=>{console.log(error)}
      
    );
  
  }
  Respuestas(){
    this.comenProvider.getRSugerencia().subscribe(
      (data)=>{
        this.RSugerencias=data['data'];
        this.id_comen=this.RSugerencias.id_comentario;
        console.log(this.RSugerencias)
  },(error)=>{console.log(error)}
      
);
    
  }
  ionViewDidLoad() {
    this.Respuestas();
    this.comentario();
    this.tcomentario();
    console.log('ionViewDidLoad SugerenciasPage');
    console.log(this.RSugerencias);
  }
  loading(){
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
    });
  
    loading.present();
  
    setTimeout(() => {
      this.gotoNuevoComentario();
    }, 1000);
  
    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }
  gotoNuevoComentario(){
    this.navCtrl.push(ComentarPage);
  }
  doRefresh(refresher: Refresher){
    this.Respuestas();
    this.comentario();
    this.tcomentario();
    setTimeout(() => {
      refresher.complete();
    }, 5000);
  }
}

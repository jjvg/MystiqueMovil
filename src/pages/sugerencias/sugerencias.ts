import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  Comentario:any;
  lista: Array<{id_co: number }>=[];
  respuesta:any;
  historico:any[]=[];
  respuestas:any[]=[];
 
  comentarios:string='historico';
  constructor(public navCtrl: NavController, public navParams: NavParams,public comenProvider: ComentarioProvider, public cliProvider: ClienteProvider ) {
   this.Respuestas();
   this.comentario();
   this.tcomentario();
    this.historico=[
      {id_comentario:'0001',id_tipo_comentario:'1',descripcionTipo:'Queja',area:'Ambiente',contenido:'Las paredes estan siempre muy sucias',fecha:'18/04/2018',estatus:'en espera'},
      {id_comentario:'0003',id_tipo_comentario:'2',descripcionTipo:'Sugerencia',area:'Servicio',contenido:'Me gustaria que empiecen a ofertar cortes para Afro', fecha:'16/04/2018',estatus:'en espera'},
      {id_comentario:'0005',id_tipo_comentario:'1',descripcionTipo:'Queja',area:'Ambiente',contenido:'Los Baños no tiene papel nunca', fecha:'01/04/2018',estatus:'Atendida'},
    ]
    this.respuestas=[
      {id_respuesta:'0002',id_comentario:'0002',tipo:'afirmativa',fecha:'02/02/2018',contenido:'Su sugerencia ha sido muy bien recibida estaremos capacitando a nuestro personal en masajes capilares, Muchas Gracias'},
      {id_respuesta:'0004',id_comentario:'0006',tipo:'negativa',fecha:'03/12/2017',contenido:'Lamentablemente su queja no puede ser atendida por nuestro personal en estos momentos, Muchas Gracias'},
      {id_respuesta:'0006',id_comentario:'0007',tipo:'afirmativa',fecha:'31/11/2017',contenido:'Su sugerencia ha sido muy bien recibida estaremos adquiriendo nuevos equipos, Muchas Gracias'},
    
    ]
  }
  comentario(){
   this.id_cli=this.cliProvider.getCliente().id;
    this.comenProvider.getComentario().subscribe(
      (data)=>{
        this.Comentario=data['data'];
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
  gotoNuevoComentario(){
    this.navCtrl.push(ComentarPage);
  }
}

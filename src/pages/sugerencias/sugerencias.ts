import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  historico:any[]=[];
  respuestas:any[]=[];
  comentarios:string='historico';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad SugerenciasPage');
  }

}

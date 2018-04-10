import { Component } from '@angular/core';

/**
 * Generated class for the ServrecomendadoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'servrecomendado',
  templateUrl: 'servrecomendado.html'
})
export class ServrecomendadoComponent {

  text: string;
  collection:any;
    constructor() {
      this.collection=[{
        "nombre":"Alisado Chino",
        "subtitulo":"Para cabellos rebeldes",
        "img":"assets/imgs/alisado.jpg"
      },
    {
      "nombre":"Peinado Romantico",
      "subtitulo":"Para cabellos ondulados",
      "img":"assets/imgs/pelo-rizado-peinado.jpg"
    },
    {
      "nombre":"Contouring Redondo",
      "subtitulo":"Para rostros redondos",
      "img":"assets/imgs/maquillaje-noche.jpg"
    },
  
  ]
    console.log('Hello ServrecomendadoComponent Component');
    this.text = 'Hello World';
  }

}

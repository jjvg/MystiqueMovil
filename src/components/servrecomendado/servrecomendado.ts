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
      }]
    console.log('Hello ServrecomendadoComponent Component');
    this.text = 'Hello World';
  }

}

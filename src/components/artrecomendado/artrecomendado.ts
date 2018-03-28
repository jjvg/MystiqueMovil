import { Component } from '@angular/core';

/**
 * Generated class for the ArtrecomendadoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'artrecomendado',
  templateUrl: 'artrecomendado.html'
})
export class ArtrecomendadoComponent {

  text: string;

  constructor() {
    console.log('Hello ArtrecomendadoComponent Component');
    this.text = 'Hello World';
  }

}

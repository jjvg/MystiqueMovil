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
  items:any;
  constructor() {
    
    this.items=[{
      "nombre":"Masaje Capilar",
      "content":"Existe una nueva tecnica para realizar masajes capilares a nuestros clientes enterate mas aqui",
      "img":"assets/imgs/masajecapilar.jpg"
    },
  {
    "nombre":"Rutina de belleza",
    "content":"En ocaciones la clave tener un bello rostro es seguir una rutina de belleza ",
    "img":"assets/imgs/rutinas.jpg"
  },
  {
    "nombre":"Exfoliante Natural",
    "content":"Perfecto para un rostro un poco grasoso, es importante utilizar exfoliantes para eliminar de nuestra piel las inpuresas que dia a dia recogemos en las calles ",
    "img":"assets/imgs/exfoliante.png"
  }];    
    console.log('Hello ArtrecomendadoComponent Component');
    this.text = 'Hello World';
  }

}

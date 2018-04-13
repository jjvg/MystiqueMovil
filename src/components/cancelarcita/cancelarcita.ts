import { Component } from '@angular/core';

/**
 * Generated class for the CancelarcitaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cancelarcita',
  templateUrl: 'cancelarcita.html'
})
export class CancelarcitaComponent {

  text: string;
  items:any;

  constructor() {
  
    this.items=[{
      "motivo":"Por falta de dinero",
      "content":"Presupuesto elevado",
      
    },
  {
    "motivo":"Por falta de tiempo",
    "content":"Las fechas disponibles para el servicio no son convenientes",
    
  },
  {
    "motivo":"Por otros motivos",
    "content":"Motivos personales ajenos a la empresa",
    
  }];    

    console.log('Hello CancelarcitaComponent Component');
    this.text = 'Hello World';
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the ServiciosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiciosProvider {
  servs:any;
  constructor(public http: HttpClient) {
    this.servs=[
      {name: 'Corte bajo', descripcion:'Corte hecho con maquinas',categoria: 'Peluqueria',url:'assets/imgs/Peinado1.png',rate:3},
      {name: 'Trensado especial', descripcion:'Perfecto para salir de noche',categoria: 'Peluqueria',url:'assets/imgs/Peinado2.png',rate:2},
      {name: 'Maquillaje Ecologico', descripcion:'Facil de Remover',categoria: 'Maquillaje',url: 'assets/imgs/maquilla.png',rate:4},
      {name: 'Ojos Brillantes', descripcion:'Para resaltar tu mirada',categoria: 'Maquillaje',url:'assets/imgs/maquillaje2.png',rate:5}
    ]
    console.log('Hello ServiciosProvider Provider');
  }
  filterItems(searchTerm){
    return this.servs.filter((item) => {
     return item.name.toLowerCase().
     indexOf(searchTerm.toLowerCase()) > -1 ||
        item.categoria.toLowerCase().
        indexOf(searchTerm.toLowerCase()) > -1;;
     });
    }

}

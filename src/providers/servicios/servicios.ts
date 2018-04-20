import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators'
import 'rxjs/add/operator/map';
/*
  Generated class for the ServiciosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiciosProvider {
  private apiUrl = 'https://restcountries.eu/rest/v2/all';
  servs:any;
  serv2:any;
  constructor(public http: HttpClient) {
    this.servs=[
      {name: 'Corte bajo', descripcion:'Corte hecho con maquinas',categoria: 'Peluqueria',url:'assets/imgs/Peinado1.png',rate:3},
      {name: 'Trensado especial', descripcion:'Perfecto para salir de noche',categoria: 'Peluqueria',url:'assets/imgs/peinado2.png',rate:2},
      {name: 'Maquillaje Ecologico', descripcion:'Facil de Remover',categoria: 'Maquillaje',url: 'assets/imgs/maquilla.png',rate:4},
      {name: 'Ojos Brillantes', descripcion:'Para resaltar tu mirada',categoria: 'Maquillaje',url:'assets/imgs/maquillaje2.png',rate:5}
    ]
    this.getCountries();
    console.log('Hello ServiciosProvider Provider');

 
  }
  getServicios(){
    return this.servs;
  }
  filterItems(searchTerm){
    return this.servs.filter((item) => {
     return item.name.toLowerCase().
     indexOf(searchTerm.toLowerCase()) > -1 ||
        item.categoria.toLowerCase().
        indexOf(searchTerm.toLowerCase()) > -1;;
     });
    }
    getCountries(): Observable<{}> {
      return this.http.get(this.apiUrl).pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
    }
    private extractData(res: Response) {
      let body = res;
      return body || { };
    }
    
    private handleError (error: Response | any) {
      let errMsg: string;
      if (error instanceof Response) {
        const err = error || '';
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Observable.throw(errMsg);
    }

}

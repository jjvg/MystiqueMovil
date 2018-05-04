var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map';
/*
  Generated class for the ServiciosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServiciosProvider = /** @class */ (function () {
    function ServiciosProvider(http) {
        this.http = http;
        this.apiUrl = 'https://restcountries.eu/rest/v2/all';
        this.servs = [
            { name: 'Corte bajo', descripcion: 'Corte hecho con maquinas', categoria: 'Peluqueria', url: 'assets/imgs/Peinado1.png', rate: 3 },
            { name: 'Trensado especial', descripcion: 'Perfecto para salir de noche', categoria: 'Peluqueria', url: 'assets/imgs/peinado2.png', rate: 2 },
            { name: 'Maquillaje Ecologico', descripcion: 'Facil de Remover', categoria: 'Maquillaje', url: 'assets/imgs/maquilla.png', rate: 4 },
            { name: 'Ojos Brillantes', descripcion: 'Para resaltar tu mirada', categoria: 'Maquillaje', url: 'assets/imgs/maquillaje2.png', rate: 5 }
        ];
        this.getCountries();
        console.log('Hello ServiciosProvider Provider');
    }
    ServiciosProvider.prototype.getServicios = function () {
        return this.servs;
    };
    ServiciosProvider.prototype.filterItems = function (searchTerm) {
        return this.servs.filter(function (item) {
            return item.name.toLowerCase().
                indexOf(searchTerm.toLowerCase()) > -1 ||
                item.categoria.toLowerCase().
                    indexOf(searchTerm.toLowerCase()) > -1;
            ;
        });
    };
    ServiciosProvider.prototype.getCountries = function () {
        return this.http.get(this.apiUrl).pipe(map(this.extractData), catchError(this.handleError));
    };
    ServiciosProvider.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ServiciosProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var err = error || '';
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    };
    ServiciosProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], ServiciosProvider);
    return ServiciosProvider;
}());
export { ServiciosProvider };
//# sourceMappingURL=servicios.js.map
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
/*
  Generated class for the SolicitudProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SolicitudProvider = /** @class */ (function () {
    function SolicitudProvider(http) {
        this.http = http;
        this.solicitud = {
            fecha: '10/10/2018',
            hora: '8:00 am',
            empleado: 'Montes Ana',
            servicios: [
                { nombre: 'Secado', costo: 10000 },
                { nombre: 'Planchado', costo: 30000 },
                { nombre: 'Keratina Especial', costo: 50000 }
            ]
        };
        console.log('Hello SolicitudProvider Provider');
        console.log(this.solicitud);
    }
    SolicitudProvider.prototype.getSolicitud = function () {
        return this.solicitud;
    };
    SolicitudProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], SolicitudProvider);
    return SolicitudProvider;
}());
export { SolicitudProvider };
//# sourceMappingURL=solicitud.js.map
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
  Generated class for the ComentarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ComentarioProvider = /** @class */ (function () {
    function ComentarioProvider(http) {
        this.http = http;
        this.comentario = {
            tipo: "",
            dirigido: "",
            contenido: "",
            empleado: "",
            servicio: ""
        };
        console.log('Hello ComentarioProvider Provider');
    }
    ComentarioProvider.prototype.setValor = function (tipo, dir) {
        this.comentario.tipo = tipo;
        this.comentario.dirigido = dir;
    };
    ComentarioProvider.prototype.getComent = function () {
        return this.comentario;
    };
    ComentarioProvider.prototype.setEmpleado = function (data) {
        this.comentario.empleado = data;
    };
    ComentarioProvider.prototype.setServicio = function (data) {
        this.comentario.servicio = data;
    };
    ComentarioProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], ComentarioProvider);
    return ComentarioProvider;
}());
export { ComentarioProvider };
//# sourceMappingURL=comentario.js.map
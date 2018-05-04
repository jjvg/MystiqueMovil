var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AuthProvider } from './../auth/auth';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the ClienteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ClienteProvider = /** @class */ (function () {
    function ClienteProvider(http, authService) {
        this.http = http;
        this.authService = authService;
        this.url_user = 'cliente/';
        this.url_perfil = 'perfil/';
        this.user = {
            id: '',
            nombre: '',
            apellido: '',
            cedula: '',
            telefono: '',
            direccion: '',
            id_ciudad: 0,
            fecha_nacimiento: '',
            tipo_cliente: '',
            id_usuario: 0,
            estatus: '',
            auth: false
        };
        console.log('Hello ClienteProvider Provider');
    }
    ClienteProvider.prototype.getUser = function (id) {
        return this.http.get(this.authService.ApiUrl() + 'cliente/' + id);
    };
    ClienteProvider.prototype.setCliente = function (user) {
        this.user = user;
        this.setClienteAuth();
    };
    ClienteProvider.prototype.setClienteAuth = function () {
        this.user.auth = true;
    };
    ClienteProvider.prototype.getCliente = function () {
        return this.user;
    };
    ClienteProvider.prototype.getPerfilUser = function () {
        return this.http.get(this.authService.ApiUrl() + this.url_perfil + this.user.id);
    };
    ClienteProvider.prototype.setPerfil = function () {
        var _this = this;
        this.getPerfilUser().subscribe(function (data) {
            _this.perfil = data['data'];
            console.log(_this.perfil);
        }, function (error) {
            console.log(error);
        });
    };
    ClienteProvider.prototype.getPerfil = function () {
        return this.perfil;
    };
    ClienteProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, AuthProvider])
    ], ClienteProvider);
    return ClienteProvider;
}());
export { ClienteProvider };
//# sourceMappingURL=cliente.js.map
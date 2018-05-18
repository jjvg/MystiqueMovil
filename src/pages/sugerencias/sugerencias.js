var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComentarPage } from '../comentar/comentar';
/**
 * Generated class for the SugerenciasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SugerenciasPage = /** @class */ (function () {
    function SugerenciasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.historico = [];
        this.respuestas = [];
        this.comentarios = 'historico';
        this.historico = [
            { id_comentario: '0001', id_tipo_comentario: '1', descripcionTipo: 'Queja', area: 'Ambiente', contenido: 'Las paredes estan siempre muy sucias', fecha: '18/04/2018', estatus: 'en espera' },
            { id_comentario: '0003', id_tipo_comentario: '2', descripcionTipo: 'Sugerencia', area: 'Servicio', contenido: 'Me gustaria que empiecen a ofertar cortes para Afro', fecha: '16/04/2018', estatus: 'en espera' },
            { id_comentario: '0005', id_tipo_comentario: '1', descripcionTipo: 'Queja', area: 'Ambiente', contenido: 'Los Baños no tiene papel nunca', fecha: '01/04/2018', estatus: 'Atendida' },
        ];
        this.respuestas = [
            { id_respuesta: '0002', id_comentario: '0002', tipo: 'afirmativa', fecha: '02/02/2018', contenido: 'Su sugerencia ha sido muy bien recibida estaremos capacitando a nuestro personal en masajes capilares, Muchas Gracias' },
            { id_respuesta: '0004', id_comentario: '0006', tipo: 'negativa', fecha: '03/12/2017', contenido: 'Lamentablemente su queja no puede ser atendida por nuestro personal en estos momentos, Muchas Gracias' },
            { id_respuesta: '0006', id_comentario: '0007', tipo: 'afirmativa', fecha: '31/11/2017', contenido: 'Su sugerencia ha sido muy bien recibida estaremos adquiriendo nuevos equipos, Muchas Gracias' },
        ];
    }
    SugerenciasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SugerenciasPage');
    };
    SugerenciasPage.prototype.gotoNuevoComentario = function () {
        this.navCtrl.push(ComentarPage);
    };
    SugerenciasPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-sugerencias',
            templateUrl: 'sugerencias.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], SugerenciasPage);
    return SugerenciasPage;
}());
export { SugerenciasPage };
//# sourceMappingURL=sugerencias.js.map
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
import { AgendaPage } from './../agenda/agenda';
/**
 * Generated class for the ReclamosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReclamosPage = /** @class */ (function () {
    function ReclamosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ordenGarantia = {
            codigo: "0001",
            id_ordenGarantia: '00023',
            servicios: [
                { nombre: 'secado', costo: 10000, id_servicio: '1234' },
                { nombre: 'tinte', costo: 10000, id_servicio: '5543' },
                { nombre: 'mechas', costo: 10000, id_servicio: '1245' },
            ],
            cita: {
                fecha: '',
                hora: '',
                id_cita: ''
            },
            empleado: '',
            montoTotal: 30000
        };
    }
    ReclamosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReclamosPage');
        console.log(this.ordenGarantia);
    };
    ReclamosPage.prototype.verCita = function () {
        this.navCtrl.push(AgendaPage, this.ordenGarantia);
    };
    ReclamosPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-reclamos',
            templateUrl: 'reclamos.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], ReclamosPage);
    return ReclamosPage;
}());
export { ReclamosPage };
//# sourceMappingURL=reclamos.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ComentarioProvider } from './../../providers/comentario/comentario';
import { ComentarPage } from './../comentar/comentar';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the EmpleadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmpleadosPage = /** @class */ (function () {
    function EmpleadosPage(navCtrl, navParams, comentProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.comentProvider = comentProvider;
        this.empleados = [
            {
                nombre: 'Claudia Moreno',
                foto: 'assets/imgs/peluquera1.jpg',
                especialidad: 'Peinados',
                codigo: '0001'
            },
            {
                nombre: 'Lorena Rojas',
                foto: 'assets/imgs/peluquera2.jpg',
                especialidad: 'Cortes',
                codigo: '0004'
            },
            {
                nombre: 'Maria Navarro',
                foto: 'assets/imgs/peluquera3.jpg',
                especialidad: 'Quimicos Capilares',
                codigo: '0002'
            },
        ];
    }
    EmpleadosPage.prototype.Cerrar = function (data) {
        this.comentProvider.setEmpleado(data);
        this.navCtrl.push(ComentarPage, data);
    };
    EmpleadosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EmpleadosPage');
    };
    EmpleadosPage.prototype.ionViewWillEnter = function () {
        console.log(this.navParams.data);
    };
    EmpleadosPage.prototype.ionViewWillLeave = function (data) {
    };
    EmpleadosPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-empleados',
            templateUrl: 'empleados.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ComentarioProvider])
    ], EmpleadosPage);
    return EmpleadosPage;
}());
export { EmpleadosPage };
//# sourceMappingURL=empleados.js.map
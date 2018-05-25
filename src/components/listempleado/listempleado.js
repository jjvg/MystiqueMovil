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
import { NavController } from 'ionic-angular';
import { ComentarPage } from '../../pages/comentar/comentar';
/**
 * Generated class for the ListempleadoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ListempleadoComponent = /** @class */ (function () {
    function ListempleadoComponent(navCtrl) {
        this.navCtrl = navCtrl;
        console.log('Hello ListempleadoComponent Component');
        this.text = 'Hello World';
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
            }
        ];
    }
    ListempleadoComponent.prototype.Cerrar = function (data) {
        this.navCtrl.popTo(ComentarPage, data);
    };
    ListempleadoComponent = __decorate([
        Component({
            selector: 'listempleado',
            templateUrl: 'listempleado.html'
        }),
        __metadata("design:paramtypes", [NavController])
    ], ListempleadoComponent);
    return ListempleadoComponent;
}());
export { ListempleadoComponent };
//# sourceMappingURL=listempleado.js.map
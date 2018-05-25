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
/**
 * Generated class for the ServrecomendadoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ServrecomendadoComponent = /** @class */ (function () {
    function ServrecomendadoComponent() {
        this.collection = [{
                "nombre": "Alisado Chino",
                "subtitulo": "Para cabellos rebeldes",
                "img": "assets/imgs/alisado.jpg"
            },
            {
                "nombre": "Peinado Romantico",
                "subtitulo": "Para cabellos ondulados",
                "img": "assets/imgs/pelo-rizado-peinado.jpg"
            },
            {
                "nombre": "Contouring Redondo",
                "subtitulo": "Para rostros redondos",
                "img": "assets/imgs/maquillaje-noche.jpg"
            },
        ];
        console.log('Hello ServrecomendadoComponent Component');
        this.text = 'Hello World';
    }
    ServrecomendadoComponent = __decorate([
        Component({
            selector: 'servrecomendado',
            templateUrl: 'servrecomendado.html'
        }),
        __metadata("design:paramtypes", [])
    ], ServrecomendadoComponent);
    return ServrecomendadoComponent;
}());
export { ServrecomendadoComponent };
//# sourceMappingURL=servrecomendado.js.map
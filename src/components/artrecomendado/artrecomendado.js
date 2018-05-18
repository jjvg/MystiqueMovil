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
 * Generated class for the ArtrecomendadoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ArtrecomendadoComponent = /** @class */ (function () {
    function ArtrecomendadoComponent() {
        this.items = [{
                "nombre": "Masaje Capilar",
                "content": "Existe una nueva tecnica para realizar masajes capilares a nuestros clientes enterate mas aqui",
                "img": "assets/imgs/masajecapilar.jpg"
            },
            {
                "nombre": "Rutina de belleza",
                "content": "En ocaciones la clave tener un bello rostro es seguir una rutina de belleza ",
                "img": "assets/imgs/rutinas.jpg"
            },
            {
                "nombre": "Exfoliante Natural",
                "content": "Perfecto para un rostro un poco grasoso, es importante utilizar exfoliantes para eliminar de nuestra piel las inpuresas que dia a dia recogemos en las calles ",
                "img": "assets/imgs/exfoliante.png"
            }];
        console.log('Hello ArtrecomendadoComponent Component');
        this.text = 'Hello World';
    }
    ArtrecomendadoComponent = __decorate([
        Component({
            selector: 'artrecomendado',
            templateUrl: 'artrecomendado.html'
        }),
        __metadata("design:paramtypes", [])
    ], ArtrecomendadoComponent);
    return ArtrecomendadoComponent;
}());
export { ArtrecomendadoComponent };
//# sourceMappingURL=artrecomendado.js.map
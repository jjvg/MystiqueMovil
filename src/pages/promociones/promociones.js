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
import { SolicitudPage } from '../solicitud/solicitud';
import { PromocionProvider } from '../../providers/promocion/promocion';
/**
 * Generated class for the PromocionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PromocionesPage = /** @class */ (function () {
    function PromocionesPage(navCtrl, navParams, promocionService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.promocionService = promocionService;
        this.promocion();
        this.items = [{
                "nombre": "Promocion 2x1",
                "content": "Existe una nueva tecnica para realizar masajes capilares a nuestros clientes enterate mas aqui",
                "img": "assets/imgs/Promocion.jpg",
                'duracion': '2 semanas',
                'tipo': 'promocion'
            },
            {
                "nombre": "Promocion 2x1",
                "content": "En ocaciones la clave tener un bello rostro es seguir una rutina de belleza ",
                "img": "assets/imgs/Promocion.jpg",
                'duracion': '2 semanas',
                'tipo': 'promocion'
            },
            {
                "nombre": "Promocion 2x1",
                "content": "Perfecto para un rostro un poco grasoso, es importante utilizar exfoliantes para eliminar de nuestra piel las inpuresas que dia a dia recogemos en las calles ",
                "img": "assets/imgs/Promocion.jpg",
                'duracion': '2 semanas',
                'tipo': 'promocion'
            }];
    }
    PromocionesPage.prototype.promocion = function () {
        var _this = this;
        this.promocionService.getPromocion().subscribe(function (data) {
            _this.promociones = data['data'];
        }, function (error) { console.log(error); });
    };
    PromocionesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PromocionesPage');
        this.promocion();
        console.log(this.promociones);
    };
    PromocionesPage.prototype.adquirirPromo = function (data) {
        this.navCtrl.push(SolicitudPage, data);
    };
    PromocionesPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-promociones',
            templateUrl: 'promociones.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, PromocionProvider])
    ], PromocionesPage);
    return PromocionesPage;
}());
export { PromocionesPage };
//# sourceMappingURL=promociones.js.map
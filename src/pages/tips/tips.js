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
import { ConsejoProvider } from '../../providers/consejo/consejo';
/**
 * Generated class for the TipsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TipsPage = /** @class */ (function () {
    function TipsPage(navCtrl, navParams, consejoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.consejoService = consejoService;
        this.consejo();
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
    }
    TipsPage.prototype.consejo = function () {
        var _this = this;
        this.consejoService.getConsejo().subscribe(function (data) {
            _this.tips = data['data'];
            console.log(_this.tips);
        }, function (error) { console.log(error); });
    };
    TipsPage.prototype.ionViewDidLoad = function () {
        this.consejo();
        console.log('ionViewDidLoad TipsPage');
        console.log(this.tips);
    };
    TipsPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-tips',
            templateUrl: 'tips.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ConsejoProvider])
    ], TipsPage);
    return TipsPage;
}());
export { TipsPage };
//# sourceMappingURL=tips.js.map
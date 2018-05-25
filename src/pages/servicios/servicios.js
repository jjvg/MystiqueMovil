var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ServiciosProvider } from './../../providers/servicios/servicios';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComentarioProvider } from '../../providers/comentario/comentario';
/**
 * Generated class for the ServiciosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServiciosPage = /** @class */ (function () {
    function ServiciosPage(navCtrl, navParams, dataSer, comentService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataSer = dataSer;
        this.comentService = comentService;
        this.serv = this.dataSer.getServicios();
    }
    ServiciosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServiciosPage');
    };
    ServiciosPage.prototype.Cerrar = function (data) {
        //this.comentService.setServicio(data);
        this.navCtrl.pop();
    };
    ServiciosPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-servicios',
            templateUrl: 'servicios.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams,
            ServiciosProvider,
            ComentarioProvider])
    ], ServiciosPage);
    return ServiciosPage;
}());
export { ServiciosPage };
//# sourceMappingURL=servicios.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { CalificarPage } from './../calificar/calificar';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ReclamogenerarPage } from './../reclamogenerar/reclamogenerar';
/**
 * Generated class for the ServiciosRPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServiciosRPage = /** @class */ (function () {
    function ServiciosRPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.servicios = "calificar";
    }
    ServiciosRPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServiciosRPage');
    };
    ServiciosRPage.prototype.Reclamo = function () {
        var alert = this.alertCtrl.create({
            title: 'Aviso!',
            subTitle: 'Por Favor Califica nuestros Servicios para poder realizar un reclamo, Gracias',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    ServiciosRPage.prototype.calificar = function (id) {
        this.navCtrl.push(CalificarPage);
    };
    ServiciosRPage.prototype.Reclamo1 = function () {
        this.navCtrl.push(ReclamogenerarPage);
    };
    ServiciosRPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-servicios-r',
            templateUrl: 'servicios-r.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AlertController])
    ], ServiciosRPage);
    return ServiciosRPage;
}());
export { ServiciosRPage };
//# sourceMappingURL=servicios-r.js.map
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
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RechazoPage } from './../rechazo/rechazo';
import { PresupuestoPage } from './../presupuesto/presupuesto';
import { SolicitudPage } from '../solicitud/solicitud';
/**
 * Generated class for the SolicitudesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SolicitudesPage = /** @class */ (function () {
    function SolicitudesPage(navCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
    }
    SolicitudesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SolicitudesPage');
    };
    SolicitudesPage.prototype.verPresupuesto = function () {
        this.navCtrl.push(PresupuestoPage);
    };
    SolicitudesPage.prototype.verDetalle = function () {
        this.navCtrl.push(RechazoPage);
    };
    SolicitudesPage.prototype.gotoSolicitud = function () {
        this.navCtrl.push(SolicitudPage);
        this.loading = this.loadingCtrl.create({
            dismissOnPageChange: true,
        });
        this.loading.present();
    };
    SolicitudesPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-solicitudes',
            templateUrl: 'solicitudes.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, LoadingController])
    ], SolicitudesPage);
    return SolicitudesPage;
}());
export { SolicitudesPage };
//# sourceMappingURL=solicitudes.js.map
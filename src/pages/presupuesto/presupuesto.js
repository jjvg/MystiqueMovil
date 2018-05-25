var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SolicitudProvider } from './../../providers/solicitud/solicitud';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { RechazoComponent } from '../../components/rechazo/rechazo';
import { AgendaPage } from '../agenda/agenda';
/**
 * Generated class for the PresupuestoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PresupuestoPage = /** @class */ (function () {
    function PresupuestoPage(navCtrl, navParams, dataSolicitud, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataSolicitud = dataSolicitud;
        this.modalCtrl = modalCtrl;
        this.solicitud = {
            fecha: '',
            hora: '',
            empleado: '',
            servicios: [],
        };
        this.cargarSolicitud();
        this.total = this.calTotal();
        this.ser = this.solicitud['servicios'];
    }
    PresupuestoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PresupuestoPage');
        this.cargarSolicitud();
        //
    };
    PresupuestoPage.prototype.cargarSolicitud = function () {
        this.solicitud = this.dataSolicitud.getSolicitud();
    };
    PresupuestoPage.prototype.calTotal = function () {
        var suma = 0;
        var array = this.solicitud['servicios'];
        console.log(array[0].costo);
        for (var i = 0; i < array.length; i++) {
            suma = suma + array[i].costo;
        }
        return suma;
    };
    PresupuestoPage.prototype.rechazar = function () {
        var profileModal = this.modalCtrl.create(RechazoComponent);
        profileModal.present();
    };
    PresupuestoPage.prototype.agendar = function () {
        this.navCtrl.push(AgendaPage);
    };
    PresupuestoPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-presupuesto',
            templateUrl: 'presupuesto.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, SolicitudProvider, ModalController])
    ], PresupuestoPage);
    return PresupuestoPage;
}());
export { PresupuestoPage };
//# sourceMappingURL=presupuesto.js.map
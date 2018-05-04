var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { CancelarcitaComponent } from './../../components/cancelarcita/cancelarcita';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
/**
 * Generated class for the CitasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CitasPage = /** @class */ (function () {
    function CitasPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    CitasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CitasPage');
    };
    CitasPage.prototype.cancelarCita = function () {
        var profileModal = this.modalCtrl.create(CancelarcitaComponent);
        profileModal.present();
    };
    CitasPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-citas',
            templateUrl: 'citas.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ModalController])
    ], CitasPage);
    return CitasPage;
}());
export { CitasPage };
//# sourceMappingURL=citas.js.map
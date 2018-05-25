var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';
import { PrincipalPage } from '../../pages/principal/principal';
/**
 * Generated class for the CancelarcitaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CancelarcitaComponent = /** @class */ (function () {
    function CancelarcitaComponent(viewCtrl, navCtrl, alertCtrl) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.items = [{
                "motivo": "Falta de dinero",
            },
            {
                "motivo": "Falta de tiempo",
            },
            {
                "motivo": "Otros motivos",
            }];
        console.log('Hello CancelarcitaComponent Component');
        this.text = 'Hello World';
    }
    CancelarcitaComponent.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    CancelarcitaComponent.prototype.cancelarcita = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '',
            message: '¿Seguro que desea cancelr su cita?',
            buttons: [
                {
                    text: 'SI',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.gotoGuardar();
                        _this.viewCtrl.dismiss();
                    }
                },
                {
                    text: 'No',
                    handler: function () {
                        console.log('Buy clicked');
                        _this.viewCtrl.dismiss();
                    }
                }
            ]
        });
        alert.present();
    };
    CancelarcitaComponent.prototype.gotoGuardar = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmacion',
            subTitle: 'Su cita ha sido Cancelada',
            buttons: [{
                    text: 'Cerrar',
                    handler: function () {
                        var navTran = alert.dismiss();
                        navTran.then(function () {
                            _this.navCtrl.setRoot(PrincipalPage);
                        });
                        return false;
                    }
                }],
        });
        alert.present();
    };
    CancelarcitaComponent = __decorate([
        Component({
            selector: 'cancelarcita',
            templateUrl: 'cancelarcita.html'
        }),
        __metadata("design:paramtypes", [ViewController, NavController, AlertController])
    ], CancelarcitaComponent);
    return CancelarcitaComponent;
}());
export { CancelarcitaComponent };
//# sourceMappingURL=cancelarcita.js.map
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
import { AlertController, NavController, ViewController } from 'ionic-angular';
import { PrincipalPage } from '../../pages/principal/principal';
/**
 * Generated class for the RechazoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var RechazoComponent = /** @class */ (function () {
    function RechazoComponent(viewCtrl, navCtrl, alertCtrl) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        console.log('Hello RechazoComponent Component');
        this.text = 'Hello World';
    }
    RechazoComponent.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    RechazoComponent.prototype.confirmar = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '',
            message: '¿Seguro que desea Rechazar?',
            buttons: [
                {
                    text: 'SI',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.GuardarRechazo();
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
    RechazoComponent.prototype.GuardarRechazo = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmacion',
            subTitle: 'Continuaremos Trabajando para usted, Gracias',
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
    RechazoComponent = __decorate([
        Component({
            selector: 'rechazo',
            templateUrl: 'rechazo.html'
        }),
        __metadata("design:paramtypes", [ViewController, NavController, AlertController])
    ], RechazoComponent);
    return RechazoComponent;
}());
export { RechazoComponent };
//# sourceMappingURL=rechazo.js.map
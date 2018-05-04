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
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
/**
 * Generated class for the ResetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResetPasswordPage = /** @class */ (function () {
    function ResetPasswordPage(navCtrl, navParams, alertCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.myForm = this.formBuilder.group({
            email: ['', Validators.required]
        });
    }
    ResetPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResetPasswordPage');
    };
    ResetPasswordPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-reset-password',
            templateUrl: 'reset-password.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            AlertController,
            FormBuilder])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());
export { ResetPasswordPage };
//# sourceMappingURL=reset-password.js.map
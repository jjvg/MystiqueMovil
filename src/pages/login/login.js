var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ClienteProvider } from './../../providers/cliente/cliente';
import { PrincipalPage } from './../principal/principal';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, alertCtrl, loadingCtrl, formBuilder, authService, clienteService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.clienteService = clienteService;
        this.creden = {
            correo: '',
            contrasenia: ''
        };
        this.myForm = this.formBuilder.group({
            correo: ['', [Validators.required, Validators.email]],
            contrasenia: ['', Validators.required]
        });
    }
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        this.creden.correo = this.myForm.value.correo;
        this.creden.contrasenia = this.myForm.value.contrasenia;
        console.log(this.creden);
        this.authService.login(this.creden).subscribe(function (data) {
            console.log(data);
            localStorage.setItem('id_user', data['data'].id);
            localStorage.setItem('auth_token', data['data'].token);
            _this.getUser(data['data'].id);
            _this.navCtrl.setRoot(PrincipalPage);
            _this.loading = _this.loadingCtrl.create({
                dismissOnPageChange: true,
            });
            _this.loading.present();
        }, function (error) {
            var alert = _this.alertCtrl.create({
                subTitle: 'Las Credenciales Fallaron',
                buttons: [{
                        text: 'Cerrar',
                        handler: function () {
                            _this.navCtrl.popToRoot();
                        }
                    }]
            });
            alert.present();
        });
    };
    LoginPage.prototype.getUser = function (id) {
        var _this = this;
        this.clienteService.getUser(id).subscribe(function (data) {
            _this.clienteService.setCliente(data['data'].id);
            _this.clienteService.setPerfil();
        }, function (error) {
            console.log(error);
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-login',
            templateUrl: 'login.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            AlertController,
            LoadingController,
            FormBuilder,
            AuthProvider,
            ClienteProvider])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map
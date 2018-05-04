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
import { ComentarioProvider } from './../../providers/comentario/comentario';
import { EmpleadosPage } from './../empleados/empleados';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiciosPage } from '../servicios/servicios';
/**
 * Generated class for the ComentarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ComentarPage = /** @class */ (function () {
    function ComentarPage(navCtrl, navParams, comenProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.comenProvider = comenProvider;
        this.alertCtrl = alertCtrl;
        this.visibleE = false;
        this.visibleS = false;
        this.visibleEm = false;
        this.ver = true;
        this.direccion = "";
        this.tipos = "";
        this.text = false;
        this.text2 = false;
        console.log(this.direccion);
        this.comen = {
            tipo: '',
            nombre: '',
        };
        this.coment = this.comenProvider.getComent();
        //if(this.comen.tipo != ""){
        //this.ver=false
        //}
        this.item = {
            nombre: "",
            codigo: '',
        };
        this.item.nombre = this.navParams.data.nombre;
        this.item.codigo = this.navParams.data.codigo;
        console.log(this.item);
    }
    ComentarPage.prototype.ionViewDidLoad = function () {
        console.log(this.direccion);
        console.log('ionViewDidLoad ComentarPage');
        console.log(this.dir);
        this.tipos = this.coment.tipo;
        this.direccion = this.coment.dirigido;
    };
    ComentarPage.prototype.ionViewWillEnter = function () {
        console.log(this.navParams.data);
        this.coment = this.comenProvider.getComent();
        console.log(this.coment);
    };
    ComentarPage.prototype.cambiar = function () {
        if (this.direccion === 'e') {
            //this.ver=false;
            this.visibleE = true;
            this.visibleS = false;
            this.comenProvider.setValor(this.tipos, this.direccion);
        }
        else {
            if (this.direccion === 's') {
                this.comenProvider.setValor(this.tipos, this.direccion);
                this.visibleE = false;
                this.visibleS = true;
            }
            else {
                if (this.direccion === 'em') {
                    this.comenProvider.setValor(this.tipos, this.direccion);
                    this.visibleEm = true;
                    this.visibleE = false;
                    this.visibleS = false;
                }
            }
        }
        console.log(this.direccion);
        console.log(this.navParams.data);
    };
    ComentarPage.prototype.selecEmpleado = function () {
        this.navCtrl.push(EmpleadosPage);
        this.visibleE = false;
        this.text = true;
    };
    ComentarPage.prototype.selecServicio = function () {
        this.navCtrl.push(ServiciosPage);
        this.visibleS = false;
        this.text2 = true;
    };
    ComentarPage.prototype.guardar = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Hola!!',
            subTitle: 'Gracias por tu Comentario, Lo estaremos atendiendo',
            buttons: [{
                    text: 'Cerrar',
                    handler: function () {
                        var navTran = alert.dismiss();
                        navTran.then(function () {
                            _this.navCtrl.popToRoot();
                        });
                        return false;
                    }
                }],
        });
        alert.present();
    };
    ComentarPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-comentar',
            templateUrl: 'comentar.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ComentarioProvider, AlertController])
    ], ComentarPage);
    return ComentarPage;
}());
export { ComentarPage };
//# sourceMappingURL=comentar.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DatePickerDirective } from 'ion-datepicker';
import 'rxjs/add/operator/debounceTime';
//import {PrincipalPage} from '../principal/principal';
/**
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgendaPage = /** @class */ (function () {
    function AgendaPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.localDate = new Date();
        this.initDate = new Date();
        this.localeString = {
            monday: true,
            weekdays: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
            months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        };
        this.visible = true;
        this.maxDate = new Date(new Date().setDate(new Date().getDate() + 30));
        this.min = new Date();
        this.bloques = ['8:00 am', '1:00 pm'];
        this.fecha = this.localDate.toLocaleString();
        this.d = this.navParams.get('empleado');
        console.log(this.d);
        if (this.navParams.data.empleado == '') {
            this.empleadovisible = true;
            this.Fechavisible = false;
        }
        else {
            this.empleadovisible = false;
            this.Fechavisible = true;
        }
        this.empleadosDisponibles = [
            {
                nombre: 'Claudia Moreno',
                foto: 'assets/imgs/peluquera1.jpg',
                especialidad: 'Peinados',
            },
            {
                nombre: 'Lorena Rojas',
                foto: 'assets/imgs/peluquera2.jpg',
                especialidad: 'Cortes',
            },
            {
                nombre: 'Maria Navarro',
                foto: 'assets/imgs/peluquera3.jpg',
                especialidad: 'Quimicos Capilares',
            },
        ];
    }
    AgendaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgendaPage');
        console.log(this.navParams.data);
    };
    AgendaPage.prototype.openDate = function () {
        var _this = this;
        this.datepicker.open();
        this.datepicker.changed.subscribe(function () {
            _this.horavisible = true;
            console.log(_this.horavisible);
            console.log('test');
        });
    };
    AgendaPage.prototype.event = function (data) {
        this.localDate = data;
    };
    AgendaPage.prototype.setDate = function (date) {
        console.log(date);
        this.initDate = date;
        this.fecha = this.initDate.toLocaleString();
    };
    ;
    AgendaPage.prototype.obtenerBloques = function () {
        //this.dataAgenda.getBloquesDispo(this.initDate).subscribe(
        //(data)=>{
        //this.bloques=data;
        this.horavisible = true;
    };
    AgendaPage.prototype.gotoGuardar = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmacion',
            subTitle: 'Gracias por escojer nuestros servicios',
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
    AgendaPage.prototype.verFecha = function () {
        this.Fechavisible = true;
        this.empleadovisible = false;
    };
    __decorate([
        ViewChild(DatePickerDirective),
        __metadata("design:type", DatePickerDirective)
    ], AgendaPage.prototype, "datepicker", void 0);
    AgendaPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-agenda',
            templateUrl: 'agenda.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AlertController])
    ], AgendaPage);
    return AgendaPage;
}());
export { AgendaPage };
//# sourceMappingURL=agenda.js.map
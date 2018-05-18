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
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatePickerDirective } from 'ion-datepicker';
import { ServiciosProvider } from '../../providers/servicios/servicios';
import 'rxjs/add/operator/debounceTime';
import { FormControl } from '@angular/forms';
import { PrincipalPage } from '../principal/principal';
/**
 * Generated class for the GarantiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GarantiaPage = /** @class */ (function () {
    function GarantiaPage(navCtrl, navParams, alertCtrl, dataSer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.dataSer = dataSer;
        this.searchTerm = '';
        this.searching = false;
        this.localDate = new Date();
        this.initDate = new Date();
        this.localeString = {
            monday: true,
            weekdays: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
            months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        };
        this.maxDate = new Date(new Date().setDate(new Date().getDate() + 30));
        this.min = new Date();
        this.bloques = ['8:00 am', '1:00 pm'];
        this.searchControl = new FormControl();
        this.fecha = this.localDate.toLocaleString();
        this.horavisible = false;
        this.empleadovisible = false;
        this.visible = true;
        //this.Fechavisible=false;
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
    GarantiaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.setFilteredItems();
        this.searchControl.valueChanges.debounceTime(700).subscribe(function (search) {
            _this.searching = false;
            _this.setFilteredItems();
        });
        console.log(this.initDate);
        console.log(this.localDate);
        console.log('ionViewDidLoad SolicitudPage' + this.fecha);
    };
    GarantiaPage.prototype.openDate = function () {
        var _this = this;
        this.datepicker.open();
        this.datepicker.changed.subscribe(function () {
            _this.horavisible = true;
            console.log(_this.horavisible);
            console.log('test');
        });
    };
    GarantiaPage.prototype.event = function (data) {
        this.localDate = data;
    };
    GarantiaPage.prototype.setDate = function (date) {
        console.log(date);
        this.initDate = date;
        this.fecha = this.initDate.toLocaleString();
    };
    ;
    GarantiaPage.prototype.verConfirmacion = function () {
        var _this = this;
        var confir = this.alertCtrl.create({
            title: 'Seleccione una opción',
            message: '¿Desea selecionar un empleado en particular?',
            buttons: [
                {
                    text: 'SI',
                    handler: function () {
                        console.log('Dijo que si');
                        _this.horavisible = false;
                        _this.visible = false;
                        //this.Fechavisible=false;
                        _this.empleadovisible = true;
                        console.log(_this.empleadovisible);
                    }
                },
                {
                    text: 'NO',
                    handler: function () {
                        console.log('Dijo que no');
                        //this.asignarAleatorio();
                        //this.guardarSolicitud();
                        _this.gotoGuardar();
                    }
                }
            ]
        });
        confir.present();
    };
    /* Discutir calcularHoras(){
       let acum:Number;
       for(let i=0; i<this.serSelec.length; i++){
         acum =+ this.serSelec[i].duracion;
       }
       return acum;
     }*/
    GarantiaPage.prototype.obtenerBloques = function () {
        //this.dataAgenda.getBloquesDispo(this.initDate).subscribe(
        //(data)=>{
        //this.bloques=data;
        this.horavisible = true;
    };
    GarantiaPage.prototype.gotoGuardar = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmacion',
            subTitle: 'Gracias por escojer nuestros servicios',
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
    GarantiaPage.prototype.onSearchInput = function () {
        this.searching = true;
    };
    GarantiaPage.prototype.setFilteredItems = function () {
        this.servicios = this.dataSer.filterItems(this.searchTerm);
    };
    __decorate([
        ViewChild(DatePickerDirective),
        __metadata("design:type", DatePickerDirective)
    ], GarantiaPage.prototype, "datepicker", void 0);
    GarantiaPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-garantia',
            templateUrl: 'garantia.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AlertController, ServiciosProvider])
    ], GarantiaPage);
    return GarantiaPage;
}());
export { GarantiaPage };
//# sourceMappingURL=garantia.js.map
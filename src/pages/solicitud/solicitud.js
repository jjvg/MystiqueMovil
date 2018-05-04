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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiciosProvider } from '../../providers/servicios/servicios';
import 'rxjs/add/operator/debounceTime';
import { FormControl } from '@angular/forms';
//import { PrincipalPage } from '../principal/principal';
//import{ FormBuilder, Validators} from '@angular/forms';
//import {FormGroup } from '@angular/forms/src/model';
/**
 * Generated class for the SolicitudPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SolicitudPage = /** @class */ (function () {
    function SolicitudPage(navCtrl, navParams, alertCtrl, dataSer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.dataSer = dataSer;
        //solicitudForm:FormGroup;
        this.searchTerm = '';
        this.searching = false;
        this.visible = true;
        this.searchControl = new FormControl();
        console.log(this.navParams.data);
        if (this.navParams.data.tipo == "promocion") {
            console.log(this.navParams.data);
            this.visible = false;
            this.empleadovisible = true;
        }
        else {
            this.empleadovisible = false;
        }
        this.preferenciaAtencion = false;
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
    SolicitudPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.setFilteredItems();
        this.searchControl.valueChanges.debounceTime(700).subscribe(function (search) {
            _this.searching = false;
            _this.setFilteredItems();
        });
        console.log('ionViewDidLoad SolicitudPage');
    };
    SolicitudPage.prototype.verConfirmacion = function () {
        var _this = this;
        var confir = this.alertCtrl.create({
            title: 'Seleccione una opción',
            message: '¿Desea selecionar un empleado en particular?',
            buttons: [
                {
                    text: 'SI',
                    handler: function () {
                        console.log('Dijo que si');
                        _this.visible = false;
                        _this.preferenciaAtencion = false;
                        _this.empleadovisible = true;
                        console.log(_this.empleadovisible);
                    }
                },
                {
                    text: 'NO',
                    handler: function () {
                        _this.visible = true;
                        _this.preferenciaAtencion = false;
                        _this.empleadovisible = false;
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
    SolicitudPage.prototype.gotoGuardar = function () {
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
    SolicitudPage.prototype.onSearchInput = function () {
        this.searching = true;
    };
    SolicitudPage.prototype.setFilteredItems = function () {
        this.servicios = this.dataSer.filterItems(this.searchTerm);
    };
    SolicitudPage.prototype.verFecha = function () {
        this.visible = false;
    };
    SolicitudPage.prototype.verPreferencia = function () {
        this.visible = false;
        this.preferenciaAtencion = true;
    };
    SolicitudPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-solicitud',
            templateUrl: 'solicitud.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AlertController, ServiciosProvider])
    ], SolicitudPage);
    return SolicitudPage;
}());
export { SolicitudPage };
//# sourceMappingURL=solicitud.js.map
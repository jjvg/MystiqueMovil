var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SolicitudPage } from './../solicitud/solicitud';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiciosProvider } from '../../providers/servicios/servicios';
import 'rxjs/add/operator/debounceTime';
import { FormControl } from '@angular/forms';
/**
 * Generated class for the ServicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServicioPage = /** @class */ (function () {
    function ServicioPage(navCtrl, navParams, dataSer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataSer = dataSer;
        this.searchTerm = '';
        this.searching = false;
        this.searchControl = new FormControl();
        this.rate = 0;
    }
    ServicioPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.setFilteredItems();
        this.searchControl.valueChanges.debounceTime(700).subscribe(function (search) {
            _this.searching = false;
            _this.setFilteredItems();
        });
        //this.getCiudad();
        this.rate = 4;
        console.log('ionViewDidLoad ServicioPage');
        //console.log(this.servi); 
    };
    ServicioPage.prototype.onSearchInput = function () {
        this.searching = true;
    };
    ServicioPage.prototype.setFilteredItems = function () {
        this.servicios = this.dataSer.filterItems(this.searchTerm);
    };
    ServicioPage.prototype.gotoSolicitud = function () {
        this.navCtrl.push(SolicitudPage);
    };
    ServicioPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-servicio',
            templateUrl: 'servicio.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ServiciosProvider])
    ], ServicioPage);
    return ServicioPage;
}());
export { ServicioPage };
//# sourceMappingURL=servicio.js.map
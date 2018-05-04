var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HistorialPage } from './../historial/historial';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ServicioPage } from '../servicio/servicio';
import { EmpresaPage } from '../empresa/empresa';
var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = HomePage;
        this.tab2Root = ServicioPage;
        this.tab3Root = HistorialPage;
        this.tab4Root = EmpresaPage;
    }
    TabsPage = __decorate([
        IonicPage(),
        Component({
            selector: 'tabs',
            templateUrl: 'tabs.html'
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());
export { TabsPage };
//# sourceMappingURL=tabs.js.map
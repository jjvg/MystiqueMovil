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
import { ModalController } from 'ionic-angular';
var EmpresaPage = /** @class */ (function () {
    function EmpresaPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    EmpresaPage.prototype.openModal = function (characterNum) {
        // let modal = this.modalCtrl.create(ModalContentPage, characterNum);
        //modal.present();
    };
    EmpresaPage = __decorate([
        Component({
            selector: 'page-empresa',
            templateUrl: 'empresa.html'
        }),
        __metadata("design:paramtypes", [ModalController])
    ], EmpresaPage);
    return EmpresaPage;
}());
export { EmpresaPage };
//# sourceMappingURL=empresa.js.map
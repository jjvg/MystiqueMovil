var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { ListaPeluqueriaComponent } from './lista-peluqueria/lista-peluqueria';
import { ServrecomendadoComponent } from './servrecomendado/servrecomendado';
import { ArtrecomendadoComponent } from './artrecomendado/artrecomendado';
import { CancelarcitaComponent } from './cancelarcita/cancelarcita';
import { RechazoComponent } from './rechazo/rechazo';
import { ListempleadoComponent } from './listempleado/listempleado';
import { ListservicioComponent } from './listservicio/listservicio';
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        NgModule({
            declarations: [
                ListaPeluqueriaComponent,
                ServrecomendadoComponent,
                ArtrecomendadoComponent,
                CancelarcitaComponent,
                RechazoComponent,
                ListempleadoComponent,
                ListservicioComponent,
            ],
            imports: [],
            exports: [
                ListaPeluqueriaComponent,
                ServrecomendadoComponent,
                ArtrecomendadoComponent,
                CancelarcitaComponent,
                RechazoComponent,
                ListservicioComponent,
                ListempleadoComponent,
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());
export { ComponentsModule };
//# sourceMappingURL=components.module.js.map